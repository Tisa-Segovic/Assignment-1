<html>
	<body>
	
	<?php
        echo "<link rel='stylesheet' type='text/css' href='style.css' />";
    ?>
    
    <?php 
    // Same as Register
        if (isset ($_POST['submit'])) {
        	$username = $_POST['username'];
        	$password = $_POST['password'];
        	        	
        	$fp = fopen("Assignment1/Assignment7/users.txt","w") or 
        	die("You can't open a file named users.txt because you don't have a write 'w' permission");
        	
        	$txt = $username.":".$password."\n";
        	fwrite($fp, $txt);
        	fclose($fp);
        }
        
        print("<p>Hello there, thank you for registering, ".$_POST['username']." !</p>");
	?>
		
	</body>
</html>