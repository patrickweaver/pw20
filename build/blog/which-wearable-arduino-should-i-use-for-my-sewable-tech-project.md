---
layout: layouts/blogPost.hbs
title: Which Wearable Arduino Should I Use For My Sewable Tech Project?
date: 2017-09-29
cover_image_url: https://pwapi.s3.amazonaws.com/uploads/1218000f-5621-4d6c-8d19-2de6c9670946
cover_image_alt: A picture of 7 different sewable microcontrollers and a Mouse sticker
do_not_show_cover_at_top: true
tags:

---

This fall [Mouse](https://medium.com/@mouse_org) ([mouse.org](http://mouse.org)) launched our brand new [Sewable Tech Course](https://mouse.org/mouse-courses)! The course introduces learners to circuitry and electronics without the abstraction of a breadboard. In the final two projects in the course we use a wearable Arduino to prototype a DIY activity tracker.
 
 <figure>

![](https://cdn-images-1.medium.com/max/1600/1*gfNKPipgo0Yp_bZLJLg7MQ.png)
 
<figcaption>Sew-matic for DIY Wearable Goal Tracker from Mouse Create</figcaption>

</figure>
 
The big question we ran into when I was helping my colleague [Kate](https://twitter.com/katermouse) prototype the course was, which wearable Arduino to use. Along the way we tested 7 Arduino compatible microcontrollers and settled on recommending a [LilyPad Arduino USB](https://www.sparkfun.com/products/12049), but there are advantages to each of the Arduinos we tested and different kinds projects would benefit from including each of them.
 
 <figure>

![](https://cdn-images-1.medium.com/max/1600/1*nxNOfE_aAIHrgXcgX8GSLQ.jpeg)
 
<figcaption>Our collection of wearable arduinos</figcaption>

</figure>
 
1. [Sparkfun LilyPad Arduino USB](https://www.sparkfun.com/products/12049)
2. [Generic LilyPad Arduino USB](https://www.ebay.com/sch/i.html?_nkw=LilyPad+Arduino+USB+ATmega32U4)
3. [Adafruit FLORA](https://www.adafruit.com/product/659)
4. [Generic LilyTiny](https://www.ebay.com/sch/i.html?_nkw=LilyTiny)
5. [Arduino GEMMA](https://www.adafruit.com/product/2470) (Discontinued)
6. [Adafruit GEMMA v2](https://www.adafruit.com/product/1222)
7. [Adafruit GEMMA M0](https://www.adafruit.com/product/3501)
 
All of the boards work with the [Arduino IDE](https://www.arduino.cc/en/Main/Software) (most with some extra steps), are roughly circular, and most run on 3.3 Volts, but there are slight differences that make certain boards better for some types of projects.
 
#### [1] &amp; [2] Sparkfun/Generic LilyPad Arduino USB
 
![](https://cdn-images-1.medium.com/max/1600/1*FWirsLamzgR-H2Wbht2ZYg.jpeg)
 
* [1] From [Sparkfun: $25](https://www.sparkfun.com/products/12049), [2] [Generic: $6 to $20](https://www.ebay.com/sch/i.html?_nkw=LilyPad+Arduino+USB+ATmega32U4)
* 5 Digital Pins
* 4 Analog Pins
* Onboard LED (D13)
* On/Charge Switch and Reset Button
* JST battery connector
* 2"/5 cm
* [Supports Serial Communication](https://www.arduino.cc/en/Reference/Serial)
 
The LilyPad Arduinos are the only boards on this list that work with the Arduino IDE without any extra steps, this is the main reason why we recommend this board on Mouse Create. If this board will be your first experience with Arduino or you will need a few analog pins the LilyPad would be a great choice.
 
The SparkFun model costs a bit more but a portion of the sales go to [Leah Buechley](http://leahbuechley.com/) to support open source e-textiles and e-textiles education development.
 
Be careful when buying to get the LilyPad Arduino USB if you need a USB connection. The original [LilyPad Arduino 328 Main Board](https://www.sparkfun.com/products/13342) (not pictured), requires an FTDI connection to upload code (but that one has more pins!).
 
#### [3] Adafruit FLORA
 
![](https://cdn-images-1.medium.com/max/1600/1*WOH8dSMPKiHUzYIAU4WerQ.jpeg)
 
* From [Adafruit $15](https://www.adafruit.com/product/659)
* 8 Digital Pins
* 4 Analog Pins (D6, D9, D10, D12)
* Onboard LED (D7), Onboard RGB LED (D8)
* On/Off Switch and Reset Button
* JST battery connector
* 1.75"/4.5 cm
* [Supports Serial Communication](https://www.arduino.cc/en/Reference/Serial)
 
The Adafruit Flora is a great board and can handle any project. It’s smaller than the LilyPad but has 3 more pins, and the onboard RGB LED is very useful as a Hello, World. The only drawback to this board is [adding the board in the Arduino IDE](https://learn.adafruit.com/add-boards-arduino-v164/overview) and installing the [Adafruit drivers on Windows](https://learn.adafruit.com/adafruit-arduino-ide-setup/windows-driver-installation), but both of these are one-time steps and don’t take more than a few minutes. We did have some issues uploading code via a USB 3.0 port, but this can be avoided by using a USB 2.0 hub.
 
#### [4] Generic LilyTiny
 
![](https://cdn-images-1.medium.com/max/1600/1*6Cx0oeFjZ0aGB6ek2vzCtQ.jpeg)
 
* [Generic $2 to $5](https://www.ebay.com/sch/i.html?_nkw=LilyTiny)
* 6 Digital Pins
* Onboard LED (D1)
* 1"/2.5 cm
 
We found this board when researching and thought it might be useful for large groups with a limited budget to give every learner a board. This board has two easy to recognize advantages, it is both the smallest and the least expensive board on this list. The disadvantages are a little bit harder to spot so if you are thinking of using this board with a large group I would buy one to test with first.
 
This board is the only one on this list that does not have alligator clip friendly pins. When testing we were still able to attach alligator clips, but it is easy to accidentally clip two pins and create a short circuit. This board also lacks both an on/off switch and a JST battery connector which means it has to be powered via USB or the 5V pin (this is the only board on this list that runs on 5V).
 
The biggest disadvantage of this board is the upload process. [Following these instructions](https://digistump.com/wiki/digispark/tutorials/connecting), we had to add the board to the Arduino IDE, install Digistump drivers, and hit the plug in the board to USB at a specific point in the process. We also had issues with this board on USB 3.0 ports.
 
If you have a lot of experience with Arduino or have a very small budget but a lot of patience this board might be for you.
 
#### [5] &amp; [6] Arduino GEMMA and Adafruit GEMMA v2
 
![](https://cdn-images-1.medium.com/max/1600/1*MyLI2jE1Oo2yA6sYbYQKCA.jpeg)
 
* [6] From [Adafruit $10](https://www.adafruit.com/product/1222), [5] From [Adafruit (Discontinued)](https://www.adafruit.com/product/2470)
* 3 Digital Pins
* 1 Analog Pin (D2)
* Onboard LED (D1)
* On/Off Switch and Reset Button
* JST battery connector
* 1.25"/2.75 cm
 
Both of these boards (along with the Gemma M0) are manufactured by Adafruit, and are visually and functionally very similar. The Arduino Gemma is teal and has the Adafruit logo on the back, the Adafruit Gemma v2 is black and has the Adafruit logo on the front. Both have an ATtiny85 chip that does not support serial communication.
 
Both the Gemma boards are great small wearable Arduinos. The small number of pins and small size make this board very approachable for a beginner, and would make the perfect tool for a simple sewable tech project. We initially were going to recommend the Adafruit Gemma v2 on Mouse Create, but we had enough [issues with uploading via USB 3.0](https://learn.adafruit.com/introducing-gemma/about-the-bootloader) that instead of shipping a USB 2.0 hub along with the boards we decided to opt for the LilyPad.
 
If you already have a USB 2.0 hub or computers with USB 2.0 ports this board will work great. It does not have serial communication so it is best suited for simpler projects. Like the Adafruit Flora you will have to [add the board to the Arduino IDE](https://learn.adafruit.com/add-boards-arduino-v164/overview) and [install the Adafruit drivers on Windows](https://learn.adafruit.com/adafruit-arduino-ide-setup/windows-driver-installation) (for the Gemma V2).
 
#### [7] Adafruit GEMMA M0
 
![](https://cdn-images-1.medium.com/max/1600/1*Qyf4eRy8XKT-_OwYjHu9xw.jpeg)
 
* From [Adafruit $10](https://www.adafruit.com/product/3501)
* 3 Digital Pins
* 3 Analog Pins (D0, D1, D2)
* Onbaord LED (D13), Onboard RGB LED (D?)
* On/Off Switch and Reset Button
* JST battery connector
* 1.25"/2.75 cm
* Supports [Serial Communication](https://www.arduino.cc/en/Reference/Serial)
* Supports [Circuit Python](https://blog.adafruit.com/2017/01/09/welcome-to-the-adafruit-circuitpython-beta/)
 
The Adafruit GEMMA M0 was released just as we were finishing up our Sewable Tech course, a little too late to include in the kits we were putting together, but I still highly recommend this board. The Gemma M0 does everything the older Gemmas can and a lot more. I haven’t had any issues with USB 3.0 using this board, and the ATSAMD21E18 chip supports serial communication.
 
The big step forward with the Gemma M0 and the reason Mouse might include this board in future kits is [Circuit Python](https://blog.adafruit.com/2017/01/09/welcome-to-the-adafruit-circuitpython-beta/). A frequent question from schools interested in circuitry and electronics and sewable tech is “Will this Arduino work with my Chromebook?” Until now the answer has always been no (though the [online Arduino IDE](https://www.arduino.cc/en/Main/Software) now works with Arduino Uno).
 
Circuit Python allows you to use the Gemma M0 to bypass the Arduino IDE completely (but still works with the IDE if you prefer that). The board will show up as a drive when you plug it in to your computer (yes, even a Chromebook), and adding the following code to a file called `code.py` will produce the familiar “Blink” Hello, World example.
 
```
import digitalio
import board
import time
led = digitalio.DigitalInOut(board.D13)
led.direction = digitalio.Direction.OUTPUT
while True:
    led.value = not led.value
    time.sleep(0.5)
```
As with other Adafruit Boards if you are using the Arduino IDE instead of Python you will have to [add the board to the IDE](https://learn.adafruit.com/add-boards-arduino-v164/overview) and [install the Adafruit drivers on Windows](https://learn.adafruit.com/adafruit-arduino-ide-setup/windows-driver-installation). You may also have to [reinstall Circuit Python](https://learn.adafruit.com/adafruit-gemma-m0/circuitpython) if you go back and forth between the IDE and Circuit Python, but this is a simple drag and drop process. I’m also not sure how to control the RGB LED but I haven’t spent much time trying to figure it out.
 
All the boards we tested worked great once we figured out the tricks of each and any will work for most sewable tech projects. Once you decide on a board, check out [Mouse Create](https://mouse.org/work) to find some fun projects!
 
 <figure>

![](https://cdn-images-1.medium.com/max/1600/1*dNpQjlUdHIzaTusjw9ERRw.jpeg)
 
<figcaption>

Making a light up phone case at [Mouse](https://medium.com/@mouse_org) [Maker Night](https://mouse.org/makernight)

</figcaption>

</figure>