<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Plaintext Element</title>
    <style>
      body {
        background-color: #d5f3f9;
      }
    </style>
  </head>
  <body>
    <header>
      <h1 style="max-width: 100px;"><code>&lt;srcset&gt;</code> Exp&shy;eri&shy;ment</h1>
    </header>
    <main>
      <img
          src="/images/pages/srcset/srcset-700.png"
          srcset="/images/pages/srcset/srcset-300.png 300w, /images/pages/srcset/srcset-500.png 500w, /images/pages/srcset/srcset-700.png 700w"
          sizes="(max-width: 520px) 300px, (max-width: 800px) 500px, 700px"
          style="max-width: 700px; width: 100%;"
          alt="A demo of the srcset property of the HTML <img> tag that loads different images at different sizes"
          id="image-with-srcset"
      />
    </main>
  </body>
</html>
