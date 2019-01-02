<html>
	<body>
	
	<?php
        echo "<link rel='stylesheet' type='text/css' href='style.css' />";
    ?>
	
    <?php     
        if (isset ($_POST['submit'])) {
            $loggedin = FALSE;
            
            $fn = './users.txt';
            chmod($fn, 0777);
            
            $fp = fopen("Assignment1/Assignment7/users.txt","r") or die("You can't open a file named users.txt, because you don't have a read 'r' permission");
            
            while ($line = fgets($fp)){
                $line = trim($line);
                $info = explode("|", $line);
                
                if (($info[0] == $_POST['username']) && ($info[1] == $_POST['password'])) {
                    $loggedin = TRUE;
                    break;
                }
            }
        }
        
        if ($loggedin) {
            print ("<p> Thank you for signing in  ".$_POST['username']."!<p>");
        } else {
            print ("<p>The username and password did not match! Try to enter both again please!<p>");
        }
    ?>

	</body>
</html>