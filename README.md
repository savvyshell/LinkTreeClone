<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

## LinkTree Clone

This is a simple demo app clone for the popular LinkTree application. It was created as an exercise for educational purposes.

## Models

- Users :: Have many links, are accounts that can be authenticated and authorized
- Links :: Belong to users, have many visits and contain both a name and link URL
- Visits :: Belongs to a link, used to track clicks on associated link and records info on visitor

## Dashboard

- View links created with visitor count, latest visit date and more
- Create new links
- Edit existing links
- Delete existing links

## User Settings

- Change background color for front-end links view
- Change text color for front-end links view

## Tech Stack

- Laravel (PHP MVC Framework)
- Laravel / UI Auth
- Bootstrap
- Javascript

## Installation & Usage

```
composer install
npm install
npm run dev
php artisan serve
```
