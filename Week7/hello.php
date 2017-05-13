<?php
	$girl = "Marina";
	$age = 17;
	$price = 2.5;
	$quantity = 90;
	$total = ($price * $quantity)*0.75;

	echo "Hello<br/>Mintra<br/>";

	echo "Her name is ". $girl;
	echo "<br/>";
	echo "Her name is \"$girl\"";
	echo "<br/>";

	echo "Her age is $age.";
	echo "<br/>";
	echo 'Her age is $age.';
	echo "<br/>";
	if($total > 100 and $total <=500) {
		echo "I'll buy it!";
	}else {
		echo "Maybe later!";
	}
	echo "<br/>";
	echo "Line number ".__LINE__;
	echo "<br/>";
	echo "File name: ".__FILE__;
	echo "<br/>";
	function longdate($timestamp) {
		return 
		 date("l F jS Y", $timestamp);
	}
	echo longdate(time());
	echo "<br/>";
	function staticTest(){
		static $count = 0;
		echo "$count<br/>";
		$count++;
	}
	staticTest();
	staticTest();
	staticTest();
	staticTest();

	for($i = 5;$i<=20;$i++){
		echo "$i ";
	}
	echo "<br/>";
	echo "<br/>";
	echo "'S' 'M' 'T' 'W' 'T' 'F' 'S'";
	echo "<br/>";
	for($i=1;$i<=31;$i++) {
		echo "$i";
		if($i < 10){
			echo ".. ";
		}else {
			echo " ";
		}
		if($i % 7 == 0) {
			echo "<br/>";
		}

	}

?>







