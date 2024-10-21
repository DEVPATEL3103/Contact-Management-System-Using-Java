<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CMS | Login</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="css/style.css">
</head>
<body class="bg-gradient-to-r from-gray-400 via-black-300 to-gray-800 min-h-screen flex items-center justify-center">

<div class="bg-white p-10 rounded-lg shadow-2xl max-w-md w-full transform transition duration-500 hover:scale-105">
    <div class="flex justify-center mb-8">
        <img src="img/clogo.jpg" alt="Logo" class="h-32 w-32 rounded-full object-cover"> <!-- Increased size and rounded -->
    </div>    
    <form action = "login" method = "post">
        <div class="mb-6">
            <input type="email" name="email" placeholder="Email Address" class="w-full px-5 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm" required>
        </div>
        <div class="mb-6">
            <input type="password" name="password" placeholder="Password" class="w-full px-5 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm" required>
        </div>
        <a href="#" class="text-black-500 text-sm block text-right mb-6 hover:underline">Forgot password?</a>
        <button type="submit" class="w-full bg-gray-600 text-white py-4 rounded-lg hover:bg-gray-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105">Login</button>
    </form>
    
    <p class="text-center text-gray-500 mt-8">Don't have an account? 
        <a href="includes/signup.jsp" class="text-black-500 hover:underline">Sign up</a>
    </p>
</div>

<!-- Custom JS -->
<script src="script.js"></script>
</body>
</html>
