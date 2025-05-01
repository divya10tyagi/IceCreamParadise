<?php
include('db.php');
session_start();

$user_id = $_SESSION['user_id']; 

$sql = "SELECT * FROM users WHERE id = '$user_id'";
$result = $conn->query($sql);

if ($result->num_rows > 0) 
{
    $row = $result->fetch_assoc();
} 
else 
{
    echo "User not found.";
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile - Ice Cream Paradise</title>
</head>
<body>
    <h2>Welcome, <?php echo $row['full_name']; ?></h2>
    <p>Email: <?php echo $row['email']; ?></p>
    <p>Phone: <?php echo $row['phone']; ?></p>
    <p>Address: <?php echo $row['address']; ?></p>
    <p>Date of Birth: <?php echo $row['dob']; ?></p>

</body>
</html>
