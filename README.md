# Serverless-CMS
A basic "Serverless" CMS

## What is this project?
Basically, I wanted to create a framework of sorts for deploying serverless, headless CMS's in the cloud.

## Why?

Two reasons:
1. It's fun to mess about with serverless technologies (to me)
2. Lambda functions paired with cloudfront make for an impressivley cheap and fast api setup

## Aren't there already headless CMS's out there?

Sure, but I really wanted to create something that isn't tied to any given framework. I've seen many that are made for React, or for Angular, or for jekyll, but rarely is there anything free that I've found very useful that doesn't force me to use a specific backend framework.

Yes, this does force me to use AWS (for now), but I'm ok with that. I'm less concerned with the cloud service provider and more concerned with having the freedom to build simple, maintainable web api's and websites, on the fly, without having to subscribe to any one CMS provider.

In otherwords, I'm building a boilerplate that let's me create an api or website "serverlessly", on the fly, by having a boilerplate with a simple, standardized data structure.

## What's been done
I've written out all the AWS resources needed (so far) using the Serverless framework, as well as defined how Lambdas and various resources should be packaged.

## What's currently in development
I'm currently writing the functions to read/write data (users, categories, pages, and site)
I'm also going to be implementing unit testing and a number of scripts that will make integrating with any CI/CD pipeline a breeze.

## Contribution
I don't have anything setup to track progress, but if you'd like to contribute anything, feel free to fork and send PR's.
If you'd also like to contribute financially (it does cost some amount of money to test certain AWS services), you can sent paypal donations to david@davidcrandall.com

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/davidgenecrandall)