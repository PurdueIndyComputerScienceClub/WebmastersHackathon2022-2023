CS Club Hackathon Documentation

# Django Basics
This document will cover the very basic setup of a django web server. First we will go over how to download the necessary tools, setup a virtual environment, and install Django onto it. Then we will go over the parts and structures of Django necessary to setup a single webpage, which we will demonstrate locally on our machines.

**Overview:**
1. Download tools: Python, virtialenv & Django packages
2. Basic Structure of Django
3. Display an html page upon request to our "server".

**Requirements:**
* A computer that you can install python as well as python packages onto.

*Note:*
What this will NOT cover is how to setup the hardware for a server. We will only cover the tools necessary to create and test a webserver using the web framework (Django) - we won't be going into the details of how a server is setup with the created web application and launched. The goal of this hackathon is to practice the core ideas of a website: how pages are created and stylized, how our computers ask for information from the servers, how the servers process the request, and how a response is sent back.

## 1.0 Download Tools
The first step in the process of creating any webserver for testing is to download the necessary tools for the web framework you will be using. In this case, we will be using the Django web framework, which is programmed in python. Along with python, we will need to download a tool to isolate our packages for our website so that we don't inadvertently change them later, using virtualenv. Finally we will be downloading the Django python package.


### 1.1 Downloading Python
*You can skip this step if you already have python installed. You can check by typing the command:*
> python --version

*into your command line.*

To download python, go to https://www.python.org/downloads/. The website should already detect what os you are running on, but if it doesn't you can navigate to the download for your specific os from there. 

![](1.1-DownloadPython.png)

A python executable will appear in your browser - open it and follow the steps for setup.

![](1.2-RunPythonInstaller.png)

If you are on Windows, you may need to add the python variable to your PATH variable in Environment Variables. This means getting the directory where the verion of python was downloaded (for me, it was C:\Users\edwin\AppData\Local\Programs\Python\Python311) and the directory 'Scripts' Directory from the python installation (C:\Users\edwin\AppData\Local\Programs\Python\Python311\Scripts) and add them to the PATH variable in Environment Variables.

You should be able to check if python is successfully installed by going to your command prompt and typing "python --version":

![](1.3-CheckPythonVersion.png)

The version of python you installed should show up there.

### 1.2 Download virtualenv
*If you already know how virtual environments work and have a preference, you can set yours up and continue past this part.*

Next we will install virtualenv, a virtual environment tool for python. This is useful when you need to maintain versions of packages for a project. Maybe today we want to make a website with python, but tomorrow we want to do something else, which requires us to update/download new packages or uninstall old ones due to conflicts. This would hurt us later if we wanted to go back to working on our website, which now doesn't have the packages it needs as we either updated them to versions that aren't compatible or deleted packages it uses. We can solve this with a virtual environment, which stores all of the necessary packages for a project in a specific place so that they don't get changed when we want to do other projects.

To install virtualenv, type-

> pip install virtualenv

-into the command line. This will install the virtualenv package for python.

We can check our package installation by typing-

> virtualenv --version

-into the command line.

Next we can create a virtual envronment. Go to the directory you wish to start your project in, and type the following into the command line:

> virtualenv [name-of-your-environment-here]

This will create our virtual envoroment in the current folder with the given name.

*Note:* You will need to activate and deactivate your virtual environment whenever you want to work on the project. This can be done by typing-

> [name-of-your-environment-here]\Scripts\activate 

For instance, to activate this virtual environment, I would type in the directory called *redo*: `testenv\Scripts\activate`.

![](2.2-ActivateVirtualenv.png)

-into the command line (this runs a bash script from the activate file in your virtual environment). You can also deactivate the virtual environment by typing-

> deactivate 

-into the command line when the environment is active.

### 1.3 Django python package
Finally we will be installing the Django python package, which is necessary for creating web apps with the Django web framework.

We can install Djano by first activating our virtualenv and then going to the command prompt and typing-

> pip install django

We can check our package installation by typing-

> pip show django

-into the command prompt.

## 1.4 Review
That wraps up the necessary downloads for setting up django! To review, we:
1. Downloaded python onto our computer (and made sure the enviroment variable was set up for windows)
2. Downloaded the virtual environment package to make sure our dependencies are not overriden later.
3. Created a virtual environment in a directory of our choosing and learned how to activate and deactivate it.
4. Installed the django package into our virtual environment.

Next we will create a Django project and go over a few key details.
<!-- Start Document Outline -->

* [Basic Structure of Django](#basic-structure-of-django)
* [Run the Server](#run-the-server)
* [References:](#references)

<!-- End Document Outline -->
## 2.0 Basic Structure of Django
Django is a back-end web framework that runs on python. It's main draw is that it has a multitude of packages that make it easy for web developers to quickly set up websites without having to make everything by hand. It also has built-in tools to handle administrative tasks, databases, and many other tools. While Django is a powerful framework with lots of tools, we will focus on just what we need to display a web page in our browser.

To start, lets make a Django project with our virtual environment active:

> django-admin startproject [name-of-your-project]

This will create a project folder with the the name we specified in our current directory. Let's take a look at what it makes for us:

![](2.1-DjangoProject.png)

Here you can see a couple of things:
- Our **virtual environnent**, which is active while we work on the project (named here as testenv).
- Our **Django Project**, which is a directory containing the entire project.
  
Django follows a modular approach to web development and the server. This means that you start off with a project. In this project, you create apps. These apps are different pieces of the website. For instance, if I wanted to make a website to sell and read books, I might make an app for selling the books and then an app for reading the books. A Django project is a collection of applications that your project needs in order to fulfill all of the tasks your website needs to work. 

Each application in a project takes on a certain task, separate from the rest. This can make web development much easier for when you have to make projects that are similar: instead of re-writing an app for each site, copy the app into the project and with a little set up, you have that functionality ready to go. For instance, If I wanted to use the book selling app from my book website project for an app that sells coffee cups, I could copy the app and put it in my coffee mug website project.

With that concept out of the way, we can take another look at the file structure created by Django:

![](2.3-DjangoProjectStructure.png)

Here, in our Project called *example*, we have-
- Another folder, called by the same name as our project (*example*). This is the folder containing the python package for the site. This folder's name is important as it is the package we will import on occasion to access files we have created in our python scripts. This folder has a multitude of files, but we will only look at the **settings.py** file and the **urls.py** file.

- A **manage.py** script, You will see in the first *example* folder a manage.py script and another folder with the same name as the one we created. The manage.py script is used to run commands in the command line to do tasks, like starting up the server locally and turning it off, along with a host of many other things.

Now that we have a project, let's launch the site. In the terminal, go into the project directory (the first *example* folder, in the example) and type:

> python manage.py runserver

![](2.4-RunServer.png)

If all goes according to plan, you will get an output in the terminal that shows the successful launch of the site. If you copy the link given and paste it into a browser on your computer, you will see something like this:

![](2.5-DefaultPage.png)

If you see this, congradulations! We can now move on to setting up our own html page for the site. (You can close the site with CTRL+C in the terminal).

*It's important to note that this website is only available locally, and not visible to the entire web. This just allows you to view and run the website how you would any normal website, all locally on your computer.

## 3.0 Create Basic Webpage and Run the Test Server
To begin creating our site, we'll create an app to be the core of our site. Type:

> python manage.py startapp [app_name_here]

I will create an app called 'core'.

![](2.7-CreateApp.png)

Let's go ahead and make the html file that will be the home page of our site. We'll go into the app we just made and create a folder called *templates* - you must use this name or else Django will not know where to find your html page later.

In *templates*, I will create a file called *index.html*:

![](2.8-Templates.png)

I will then create a rudimentary html file:

![](2.9-html.png)

With our main page ready to go, now it's time to hook it up to the server. Open up the **views.py** script in the app:

![](2.91-View.png)

As in the above image, we will import the render function built into django. We will also create a function called *index*, which takes in an http request. This request object will then be passed to render function, along with the name of the html page we wish to return. Next we will be setting this index function to be called when a certain address in our website is requested by a user. This function will return the html page we created as the response . It knows where to find the page because it knows to look for a templates folder by default, then search for the file name given. We can do whatever else we want in this function, like index or update a database.

While we will not go into the details, you can also pass variables to the html page so that the page reflects values that aren't constant. For instance, you may want to index a database and show the user's current account information.

Next we will set this function to be called when a certain url requested from our server. Create a python file called *urls.py* in the app folder:

![](2.92-url.png)

Fill in the file as shown above. First we import the path function from Django, which will construct the path as needed to access certain files from our server. Next, we import the *views.py* script from our app, which contains our function called *index*. We then create a variable called *urlpatterns*.

In this variable, use the function *path* and fill it with 3 things:
1. The path that should be typed in after the server domain in order to get to this page. For instance, if our domain was 'www.cs-club.com', you would then add the name of the route you wish to go to after the domain (e.g. 'www.cs-club.com*/code*'). This corresponds to a page on the site. In our site, we want to have a page set up for people who go to the root of our website, which has no additional text. This is the same as going to 'www.cs-club.com'.
2. The index function we created. This function should receive an http request and return an http response. We don't have to worry about the request since we don't have any user input as of now, and Django's *render* function handles creating the http response from our html file.
3. The name of the path. This is not required.

Next we need to edit the urls.py of the project, back in the second *example* directory:

![](2.93-urls2.png)

Here we can add in the urls we created from our specific app. This is useful so that we don't overcrowd the main project urls with all of the urls from each app. We keep each app's urls separate and organized.

We add a new path to *urlpatterns* that again is our root path to our website. Then we use Django's *include* function to include all of the url patterns we created in our app called *core*.


Our last step will be to add our new app to the *settings.py* file of our main project, in the second *example* folder:

![](2.94-settings.png)

The name of our app, *core*, is added to the list of *INSTALLED_APPS* in the *settings.py* file.

With this, we can start the server up from the command line by typing: 
> python manage.py runserver

Again, going to the link provided will show us our new webpage!

![](2.95-webpage.png)

And with that, you have begun your journey of making websites with Django!


## References: 
> [Write your first Django App, Part1](https://docs.djangoproject.com/en/4.1/intro/tutorial01/)

> [How to add python to path variables](https://datatofish.com/add-python-to-windows-path/)