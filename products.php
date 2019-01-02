<html>
	<body>
	
	<?php
        echo "<link rel='stylesheet' type='text/css' href='style.css' />";
    ?>
	
    <?php     
        if (isset($_POST['submit'])) { 
            
            $searchthis = $_POST['searchtab'];
            $lines = file("products.txt");
            $found = false;
            foreach($lines as $line){
                if(strpos($line, $searchthis) !== false){
                    $found = true;
                    $line = trim($line);
                    $info = explode(":", $line);
//                     print_r ($info);
                    print("<p>".$info[0]." was made in ".$info[1].". We currently hold ".$info[2]." in stock. The cost per unit is $".$info[3]."USD.</p>");
                }
            }
            if(!$found){
                echo 'No match found';
            }
        }
        
//         iphone:was made June 29,2007:50:885.00
//         ipad:was made March 24,2017:13:430.00
//         macbook:first one was was made in 1984:27:2000.00
        
    ?>
    
	</body>
</html>
