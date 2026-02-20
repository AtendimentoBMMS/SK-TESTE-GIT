<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored ="false"%>
    <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
    <%@ page import="java.util.*" %>
        <%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c" %>
            <%@ taglib prefix="snk" uri="/WEB-INF/tld/sankhyaUtil.tld" %>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu modelo</title>
    <script src="${BASE_FOLDER}/src/assets/js/tailwindcss.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="${BASE_FOLDER}/src/assets/css/style.css">

    <script type="module" src="https://cdn.jsdelivr.net/npm/@jtandrelevicius/utils-js-library@latest/index.js"></script>  
    <snk:load/>
</head>
<body>
    <header class="header"></header>
    <main class="main"></main>
    <script type="module" src="${BASE_FOLDER}/src/main.js"></script>
</body>
</html>