<!DOCTYPE html>
<html lang="en" data-bs-theme="light">
<head>
    <title>Rashiqul Rony</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Sites meta Data -->
    <meta name="application-name" content="Rashiqul Rony - Professional Web and App Solutions">
    <meta name="author" content="Rashiqul Rony">
    <meta name="keywords" content="Rashiqul Rony, Web Developer, App Developer, Software developer, and Stocks Trading Business">
    <meta name="description" content="Professional Web and App Solutions">


</head>
<body>

<div id="app">
    <router-view :key="$route.fullPath" ></router-view>
</div>

<script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
