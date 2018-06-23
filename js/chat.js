<!DOCTYPE html>
<html >
<head>
  <meta charset="UTF-8">
  <title>Enigma - Feedback</title>
      <link rel="stylesheet" href="css/feedback.css">
        <link rel="shortcut icon" href="assets/images/OlD Technologies.png" type="image/x-icon">
</head>
<body>
<div id="contact-form">
	<div>
		<h1>Nice to Meet You!</h1>
		<h4>Have a question or query?</h4>
	</div>
		<p id="failure">Oops...message not sent.</p>
		<p id="success">Your message was sent successfully. Thank you!</p>

		   <form method="post" action="mail.php">
			<div>
		      <label for="name">
		      	<span class="required">Name: *</span>
		      	<input type="text" id="name" name="name" value="" required autocomplete="off" placeholder="Your Name" required="required" tabindex="1" autofocus="autofocus" />
		      </label>
			</div>
			<div>
		      <label for="email">
		      	<span class="required">Email: *</span>
		      	<input type="email" id="email" name="email" value="" required autocomplete="off" placeholder="Your Email" tabindex="2" required="required" />
		      </label>
			</div>
			<div>
		      <label for="subject">
		      <span>Subject: </span>
			      <select id="subject" name="subject" tabindex="4">
			         <option value="hello">rating and development sugesstion for our page</option>
			         <option value="quote">issue about our services</option>
			         <option value="general">become a beta tester</option>
			      </select>
		      </label>
			</div>
			<div>
		      <label for="message">
		      	<span class="required">Message: *</span>
		      	<textarea id="message" name="message" required autocomplete="off" placeholder="Please write your message here." tabindex="5" required="required"></textarea>
		      </label>
			</div>
			<div>
		      <button name="submit" type="submit" id="submit" >SEND</button>
			</div>
		   </form>

	</div>


</body>
</html>
