Skip to content
You said:
Skip to content
Chat history

You said:
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login Page</title>
        <link rel="stylesheet" href="main.css">
    </head>
    <body>
        <!-- <div class="bgimg">
            <img src="bg.jpg" id="stockimg" srcset="">
        </div> -->
        <div class="mainbox">
            <div class="welcome">
            <h1>Welcome!</h1>
            <br>
            <p>Please login with your e-mail</p>
            <br>
           
            <br>
            <br>
            <div class="email">
                <label for="email" id="email">E-mail</label>
                <br>
                <input type="email" id="emailbox" placeholder="abc@gmail.com" required="@">
            </div>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <div class="password">
                <label for="password" id="password">Password</label>
                <br>
                <input type="password" id="passwordbox" placeholder="Password">
            </div>
            <br>
            <div class="transmod">
                <div>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <input type="button" id="loginbutton" value="Login" href="https://www.google.com/?zx=1761842636622&no_sw_cr=1" >
                    <div class="loginbutton">
                    </div>
                    <p><a href="https://accounts.google.com/signin/v2/usernamerecovery?continue=http%3A%2F%2Fsupport.google.com%2Fmail%2Fanswer%2F56256%3Fhl%3Den&dsh=S-670326946%3A1761842474208864&ec=GAZAdQ&flowEntry=ServiceLogin&flowName=GlifWebSignIn&hl=en&ifkv=ARESoU2I8F3dSUmyittS4Kkw9EY-8GAsHy3egGeP_ROmAThryVT6l1bsgjjAvwxDhpQhLFPKUdLE" target="_blank" id="forgotpass">Forgot Password ?</a></p>
                    <br>
                    
                </div>
                <!-- Continue everything above this div -->
                <br>
                 
                <!-- <hr id="hr"> -->
                <br>
               <div class="footer">
                   <h3 id="newhere">New Here ?</h3>
                   <a href="https://support.google.com/mail/answer/56256?hl=en" target="_blank"id="signup">Sign Up !</a>
               </div>
            
            </div>
            
        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
    </div>

    <div class="footlinks">
        <a href="#" target="_blank">
            Terms
        </a>
        <a href="#" target="_blank">
            About
        </a>
        <a href="#" target="_blank">
            Blog
        </a>
        <a href="#" target="_blank">
            Jobs
        </a>
        <a href="#" target="_blank">
            Help
        </a>
        <a href="#" target="_blank">
            API
        </a>
        <a href="#" target="_blank">
            Privacy
        </a>
    </div>
</body>
</html>                Critise my code on in badly and you can use curses 
ChatGPT said:


No file chosenNo file chosen
ChatGPT can make mistakes. Check important info. See Cookie Preferences.
ChatGPT is still generating a response...
ChatGPT said:
Alright, you asked for a brutal, no-holds-barred roast of your HTML code — so buckle up. 😈

🔥 First off… that file is a crime scene.
Let’s dissect the body, shall we?

🧠 Structure? Never heard of her.
You start with a decent <!DOCTYPE html> and lang="en", good start. Then you descend into chaos like a PHP tutorial from 2003.
Your indentation looks like you wrote this during an earthquake. Code readability? Nonexistent. I had to squint like a 90-year-old man trying to read a CAPTCHA.

💀 The “login” button
<input type="button" id="loginbutton" value="Login" href="https://www.google.com/">
Bruh.
An <input type="button"> with an href? That’s not how HTML works. Buttons don’t have href attributes. That’s like trying to put a seatbelt on a skateboard.
You wanted <a href="..."><button>Login</button></a> or maybe <button onclick="location.href='...';">Login</button> — but this? This is a Frankenstein button that does absolutely nothing except look confused.

😭 Duplicate IDs
You gave two different elements the same id="email" and id="password" (the <label> and the <input>).
IDs are meant to be unique. Now your browser’s probably having an existential crisis trying to figure out which one is which.

🧟 Placeholder Madness
<input type="email" id="emailbox" placeholder="abc@gmail.com" required="@">
That required="@" is illegal. HTML doesn’t know what to do with that — it’s just gonna ignore your nonsense.
You wanted just required, not required="@".
Also, “abc@gmail.com”? That’s the most uninspired placeholder ever. You could at least go for you@example.com like a civilized developer.

🧩 Excessive <br>s
My dude… you used line breaks like a medieval torture device:

<br>
<br>
<br>
<br>
<br>
Ever heard of CSS margins? Or even <div> spacing? Your layout’s held together by <br>s like duct tape on a Ferrari.

🪦 “Forgot Password?” link
You linked straight to Google’s password recovery page.
So basically your login page is a glorified Google portal. Nothing here actually logs in — it just dumps you on the big G’s doorstep. This isn’t a login form, it’s a bus stop.

🧱 Footer links
<div class="footlinks">
    <a href="#">Terms</a>
    ...
</div>
All of those href="#" links go nowhere. So your footer’s like a ghost town — all signs, no roads.

💅 Styling & Semantics
You’ve got comments like:

<!-- Continue everything above this div -->
Bro, that’s not helpful. That’s like putting a sticky note on a dead body saying “keep going”.

And your CSS link is there but the <div class="bgimg"> with the <img> is commented out. So your background never even shows. Chef’s kiss of unfinished work.

⚰️ Final Verdict
This HTML page looks like:

You tried to build Gmail after watching one 10-minute YouTube tutorial,

Then decided “meh, good enough” halfway through,

And sprinkled <br> tags like parmesan cheese on top.

🔧 What to fix (seriously)
Use proper form structure with <form> and <button>.

Stop abusing <br>. Use CSS for spacing.

Give unique IDs to inputs and labels.

Learn HTML validation — half your attributes aren’t doing what you think.

Don’t use href="#" — give real links or use JavaScript navigation.

Indent properly. Your future self will thank you.

Would you like me to show you a properly rewritten version of your page (still simple, but clean and modern)?
I can make it look good without roasting you next time.




Attach

Search

Study

Voice
No file chosenNo file chosen
ChatGPT can make mistakes. Check important info. See Cookie Preferences.
