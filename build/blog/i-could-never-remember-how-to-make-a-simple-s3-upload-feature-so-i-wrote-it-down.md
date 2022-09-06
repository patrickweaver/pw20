---
layout: layouts/blogPost.hbs
title: I Could Never Remember How to Make a Simple S3 Upload Feature So I Wrote It Down
date: 2020-04-21
cover_image_url: https://pwapi.s3.amazonaws.com/uploads/Screen+Shot+2020-04-21+at+8.43.42+AM.png
cover_image_alt: A screenshot of the app
tags:

---

Whenever I start a new web project there is an ominous, literal, figurative, "cloud" lurking on the horizon: Will this project get complicated enough to need to be connected to S3 for file upload?

More often than I’d like the answer is yes, and at this point I’ve re-learned how to connect a Node.js app to S3 more times than I’d like. Rather than keep learning just enough S3 to get a project working, and then instantly forgetting it, I decided to write the process down so I can follow my own instructions.

I’m sure this will also find its way to people who know more than I do and might be able to alert me to anything I’m doing wrong. If this is you, [please reach out](https://twitter.com/patrickweave_r)!

## Setting Up AWS Authentication

Connecting an app isn’t usually the most difficult part of setting up S3. Where I always have to go back to documentation is setting up user and bucket permissions correctly. When I first started using S3 around 2013 a common recommendation was to just set buckets to public and link to objects directly. More recently though, many people (including Amazon), recommend not making buckets public.

In my experience, it’s best to create both a user and a policy when setting up AWS permissions. The keys you will use in your app will be associated with the user, and the permissions you want your user to have will be associated with the policy. This way, if your credentials are compromised you can create a new user, and all you have to do is add the policy to the new user.

I’ve also found it’s a best practice to create a new bucket for each of the small apps that I make. If you’re working on a bigger project or want to set up a general purpose place to upload you may want to do this differently, but creating a unique bucket and user for each project helps me keep an eye on things, and not worry too much about credentials getting compromised. Because I only need one bucket for my app it’s easier to create it in the AWS web interface than to build functionality to create buckets into my app.

#### Creating a Bucket

1. Log into AWS and click on "Services" in the top left. Select "S3" in the "Storage" section, then click on "Create Bucket" on the main S3 screen.

![A screenshot of the main S3 screen](https://dev-to-uploads.s3.amazonaws.com/i/wzb11or02x3fgsdlobl1.png)

2. Give your bucket a name (this will be visible to users so something related to your app is best), and select a region (probably whichever is closest to your users), leave "Block all public access" checked, then click "Create bucket".

![A screenshot of the Create bucket screen](https://dev-to-uploads.s3.amazonaws.com/i/jqobhso6ba8idwecff7l.png)

3. Note your bucket name (probably in an ENV variable), it’s now ready to receive uploads!

#### Creating a Policy

1.  Click on your name in the top right. In the dropdown select "My Security Credentials", then in the "Identity and Access Management (IAM)" sidebar on the left, click on "Policies".

2. Click on the "Create policy" button. There are 2 ways to give your policy permissions, with the Visual Editor, and with JSON. We’ll use the Visual Editor here, but you can probably just pate the JSON at the end with minor edits.

3. The Visual Editor has 4 sections: Service, Actions, Resources, and Request Conditions. Start in Service and click on S3.

4. You want to add 3 specific actions: "PutObject" which allows uploading files, "GetObject" which allows reading files, and "DeleteObject" (I think you can figure this one out). "GetObject" is in the "Read" section, check the checkbox there. "PutObject" and "DeleteObject" are both in the "Write" section. At the end you should have 3 objects selected:

![A screenshot of the Create Policy actions selection](https://dev-to-uploads.s3.amazonaws.com/i/xq9fza7qlzaxb9s2uwxx.png)

5. In the Resources section click on "Add ARN", then fill in your Bucket Name, and click on "Any" for Object name. This means that users with this policy can only perform the actions above on one bucket, but can perform those actions on any of the objects in that bucket.

![A screenshot of the Add ARN screen when creating a policy](https://dev-to-uploads.s3.amazonaws.com/i/n99mhoauau96yg2fp6j2.png)

6. If you click over to the JSON editor you should see the code below. You can also just copy this in. Note that you should edit the "Resource" property to have your actual bucket name:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:GetObject",
                "s3:DeleteObject"
            ],
            "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
        }
    ]
}
```

6. Click on "Review policy", then give your policy a name and a description. Then click "Create policy".

#### Creating a User

1. Click on Users in the left sidebar, then the "Add user" button at the top of the screen, give your user a name and select the checkbox for "Programmatic Access".

![A screenshot of the Add User screen](https://dev-to-uploads.s3.amazonaws.com/i/gi90azo1auvxzjdbamyz.png)

2. In the "Set permissions" section at the top of the page, click on "Attach existing policies directly". Search for the policy you just created, then select it and click "Next: Tags". You can skip Tags, and click "Next: Review", then click "Create user".

3. You will now save your user’s credentials. This is the only time you will be able to do this, so make sure you save them somewhere safe. You will also need to add the credentials as ENV variables in your app. I recommend clicking the "Download .csv" button and saving the file, at least until you get your app set up.

![A screenshot of the attach policy section of the create user screen](https://dev-to-uploads.s3.amazonaws.com/i/3rqbznl2dlvif555eorn.png)


## A simple example app

Congratulations! You are done with the AWS setup, now you can work on your app. I have a simple and heavily commented [example app](https://aws-s3-example.glitch.me) I use to add this functionality to new projects:

<!-- Copy and Paste Me -->
<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/aws-s3-example?path=package.json&previewSize=100"
    title="aws-s3-example on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

The app is a Node.js app using Express. It uses 3 additional packages. [https://www.npmjs.com/package/aws-sdk](aws-sdk) adds functionality to communicate with S3, [https://www.npmjs.com/package/uuid](uuid) is used for object names in S3, and [https://www.npmjs.com/package/multer]multer is used to process file upload to the server before passing it to S3.

The index page is a plain HTML file, but there are two POST routes in server.js: `/upload-image-form` and `/upload-image-async`. The two routes are mostly the same, but are repeated for easy copying. 

Lines 1 through 24 of server.js are setting up the dependencies:

**server.js**
```javascript
// The regular Node/Express stuff:
const express = require('express');
const app = express();
app.use(express.static('public'));

// I will use the UUID package for s3 file names
const { v4: uuidv4 } = require('uuid');

// The AWS functionality is isolated for clarity:
const aws = require('./aws.js');

// Multer processes the file in the request body
// This allows one file to be uploaded at a time.
var multer = require('multer');

var memoryStorage = multer.memoryStorage();
var memoryUpload = multer({
	storage: memoryStorage,
	limits: {
		fileSize: 4*1024, // 4KB filesize limit
    //fileSize: 10*1024*1024, // 10 Mb filesize limit
		files: 1
	}
}).single('file');
```

The uploading to S3 happens in the two POST routes, and in an isolated `aws` module. I will go through the regular HTML form route here, but the JS API endpoint route is mostly the same.

The route uses the previously defined `memoryUpload` to capture a file object in req.body.

**server.js**
```javascript
app.post('/upload-image-form', memoryUpload, async function(req, res) {
```

Then, we create an object to send to the `aws` module (this is custom to this app, not the `aws-sdk` npm package) with req.file. Most of the code below is comments, but the short version of what we need to send to the aws is an object with the properties `file` and `id`. `file` is the contents of the file, `id` is what the file will be called in our AWS bucket:

**server.js**
```javascript
    const file = req.file;
    
    /*
    The file object has the following fields:
    
    fieldname: 'file' // This was specified in the file input field in the HTML
    originalname:     // The original name of the file
    encoding:         // The encoding of the file, don’t worry about
                         this unless you want to look at the bytes.
    mimetype:         // This will tell you what the filetype is, even if there
                         is no extension, or if it’s wrong.
    buffer:           // This is the actual data from the file
    size:             // Only some files will have this, the file’s size in bytes
    */
    
    
    // This is optional, but a way to find the extension
    // of an image file.
    //const fileExt = file.mimetype.split("/");

    // These
    const upload = {
      file: file,
      
      /* You may want to store this metadata in S3, but it’s optional */
      filetype: file.mimetype,
      
      /* You may want to add this to the filename */
      //fileExt: fileExt[fileExt.length - 1],
      
      /* You may want to use the original filename */
      //filename: file.originalname,
      
      /* We’re going to use a random UUID file name in this example.
         One thing that this does is makes sure it is unique.
         If you upload a file with the same name it will overwrite the
         existing file! */
      id: uuidv4()
    }
  
    // Upload the file, see ./helpers/aws.js
    const response = await aws.upload(upload);
```

In the `aws.js` module first there is some general configuration. This is where we will access our `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, and `S3BUCKET` ENV variables.

**aws.js**
```javascript
// The AWS package is used for all AWS services,
// we only need the S3 part:
var AWS = require('aws-sdk');
var s3 = new AWS.S3({
  signatureVersion: 'v4'
});

// Store your AWS creds in ENV variables:
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

// Your bucket isn’t secret, but you may want to use
// different buckets for dev and production so it’s
// helpful to store in an ENV variable.
var bucketName = process.env.S3BUCKET;
```

There are also 2 functions: `upload()`, which takes one `uploadObject()` parameter, uploads a file to S3, and returns confirmation and the S3 object’s key, and `getSignedUrl`, which takes an S3 key, and returns the file (more on this later).

`upload()` is what we passed our `file` object from `server.js` to. This function is essentially a wrapper around the `aws-sdk`'s `S3.putObject()` method. We collect the necessary parameters in an object, then pass that object to the method which we’ve defined as `s3.putObject()`:

**aws.js**
```javascript
    // AWS S3 Upload params:
    var params = {
      // S3 stores files in buckets, each bucket
      // has a globally unique name.
      Bucket: bucketName,

      // This will be the filename in AWS
      Key: uploadObject.id,

      // This is the contents of the file.
      Body: uploadObject.file.buffer,

      // This is optional, but your file in S3 won’t have Content-Type
      // metadata unless you include it.
      ContentType: uploadObject.filetype
    };
  
  
    const responseData = await s3.putObject(params).promise();
```

This is all wrapped in a `try` / `catch` block so if there aren’t any errors we can pass the key back to `server.js`:

**aws.js**
```javascript
    // Likely this won’t happen because an error will be thrown,
    // but it’s good to check just in case. ¯\_(ツ)_/¯ 
    if (!responseData) {
      throw "Upload failed"
    }
      
    // The response data has a single property, "ETag",
    // you probably won’t need to do anything with it.

    const s3Data = {
      success: true,

      // This key is what you would store in a DB, we didn’t
      // get this back from S3, but since there wasn’t an error
      // we trust that it is saved.
      key: params.Key

      // Or, the url below could be stored if the permissions on the bucket
      // or the upload are publically viewable.
      //url: "https://" + bucketName + ".s3.amazonaws.com/" + params.Key
    }

    // Send the object with success and the key back to server.js
    return(s3Data)
```

It’s important to note that the `id` we pass back to `server.js` isn’t returned to us from the `s3.putObject()` method. `s3()` returns an `ETag`, which isn’t of much use for what we’re doing, but it’s enough to confirm that the upload completed successfully (What are ETags? [teppen.io/2018/06/23/aws_s3_etags/](https://teppen.io/2018/06/23/aws_s3_etags/)).

Going back to server.js, this is where we would want to store our `id` somewhere. This string is what we will need to retrieve the file from s3. In this app we’re just demoing the upload functionality so we don’t store it anywhere. We access it once though to show the user that it worked. This is where we will use the other function in the `aws` module, `getSignedUrl`. Because our S3 bucket permissions only let our AWS user access objects, and otherwise our bucket permissions are "No public access", we need to create a temporary signed URL to access the file.

Using the id returned from the `upload()` function we call the `getSignedUrl()` function. When we get the signed url, we put it into some simple HTML to display it to the user (this is the main difference between the two `server.js` routes):

**server.js**
```javascript
    // Confirm upload succeeded:
    if (!response.success || response.error) {
      throw "Reponse Error: " + response.error;
    }
    
    /* - - - - -
      You might want to do something with the response.key or
      response.url here.
    - - - - - */
    
    
    // Because our bucket is not publically viewable we need to
    // get a signed URL to view the uploaded file. You DO NOT want
    // to store this signed URL in a DB, it will expire. You will
    // want to store either the key or url from the AWS response
    // above.
    
    // Get a new signed URL now that the file is uploaded:
    // Getting a signed URL requires the Bucket Name and the
    // file id, but we are using the same bucket name for everything
    // in this example. See ./helpers/aws.js for how this works.
    const url = await aws.getSignedUrl(upload.id);

    // Very simple HTML response containing the URL and it rendered
    // as an image (if the file is not an image this will look like
    // a broken image).
    res.status(200).send(`
      <p>
        <strong>Signed URL:</strong> <a href="${url}">${url}</a>
      </p>
      <h4>If it’s an image:</h4>
      <img src="${url}" width="400" />
    `); 
```

The `getSignedUrl()` function in `aws` is a wrapper around the `S3.getSignedUrl` method (mostly putting it in our `aws` module allows us to avoid passing the Bucket Name from our routes:

**aws.js**
```javascript
// This function will get a signed URL which allows
// access to non public objects, and objects in non
// public buckets for a limited time.
async function getSignedUrl(key) {
  
  // We are already authenticated so we just need the
  // bucket name and the object’s key.
  var params = {
    Bucket: bucketName,
    Key: key
  };
  
  // The getSignedUrl method returns the url.
  const url = await s3.getSignedUrl('getObject', params);
  return url
}
```

That’s it! Try out the app (in this example uploads are limited in size to 4KB for safety). You can [remix the app on Glitch](https://glitch.com/edit/#!/aws-s3-example) or [fork it on GitHub](https://github.com/patrickweaver/aws-s3-example)

