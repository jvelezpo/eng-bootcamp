# Auth0 camp exercese

Develop a webApi to make the test script located in the test directory to pass. You can not modify the tests, your solution has to make these test pass as they are.

Languages used to develop my solution: JavaScript

The Framework used is `https://github.com/estrada9166/speedbe` a super small and still in beta (uder development as a side project) framework develop by a Coworker of me ([@estrada9166](https://github.com/estrada9166)) and me ([@jvelezpo](https://github.com/jvelezpo))

To run the test script you will need to:

1. Install Node JS (version 8, check the corresponding installation procedure for your OS)

## Install
```shell
$ npm install
```

## use

Run this command to have your server up and running on port 4567 by default
```shell
$ node index
```

if you want to run in a different port use this command

*Note* If the port is change then the test file have to be change on line 4 `const baseUrl = 'http://127.0.0.1:4567/';` there the port has to be the same as the port you are running the server
```shell
$ PORT={YOUR PORT} node index
```

### Run the tests

Once the server is running you can open a new terminal window and run the test.
```shell
$ npm run test
```
After the test run you should see a window like this one (Top: is the tests results, Bottom: is the server running)

![alt](https://lh3.googleusercontent.com/JEHsyqTc-0bQ4rgJiPgBbC_BLDu6Cx1-BfsmBgIKqVRNQSDsq6pOB_2mroOKrE-kh0s75Z61RkoREIxjOt7PaRePUkWMINttMZQVwbN6wGQEZ6WuIIlQl6FoO7VFzwb_H2G5M3SAbGHXMqpykPfbfXoIoIKVWnlSza6THMcxwzQqNVKC7gA-zOsV4ISHveYSVwYEq1YP0JdQpme7wETdug1nuhRPrFkAfvYcwqMGF9nwJNy37im0LNDaIKIJR-azS_yEexWcKKzy7vM4wsZx1AQLBXD6o38h-uhdC6FUlA0LEr8F-BQB2TT1RtwF-hsoJ4w5N29iIFObPft5xb95gsut5J0G_FdeaeTNRNToNo5nwq7YW2a0k6RWOGR88ZhFzBb9jbHrcB1mkvCZBsPYT1rvcrPWvSHZezDjDlyOF4rpOgYxUtbD2gzpCyEU-Hy1igCLXeyNg50mJ1IxCcWPGbpWsoYihaUi_D7JDRXBrLFWrqkZo5NxCuT_vSc1SzxyLFvBYCeF1axmouGgTIwnLEp4BaavKtl7oCsHsDmGxEnT_l4TUJ_QXY6LpsQWuOTUgKQxg21UKYzaCuEeoh4xprlItwuZ5IOCVgAYsvB2iQ5SQHXc5ol0PHvIL0CQj7oXzP7NOcd6rMZhMaGmhXtzo41ANl5qWC3sFg=w1688-h1336-no)

## Swagger

In order to see the API documentation on the swagger UI go to `http://localhost:${PORT}/swagger`

Over there you will be able to see and test the availables API endpoints, like in the following image:

![alt](https://lh3.googleusercontent.com/q_bK1zwH5kNYXR64TkKbB-7UakvokI9z9kUOQXXuzticIdF0Pv84XwfA5PuPaswwxI7QV2JfYovdYWyHCDTAXp8W8NaJ0DhpXrfmcwSaHJdrWGwZ3_6jTD5QkB53P-KW3_3XdTQyjCqCP_5p__wUD3jK66LTf2V5U2xPQoc-nprETUkpCXGcUnEEXbZfc8iPhkgnCmfuqw71VYiwWSvcu14ezYHaF-V8UVe6u5cFN9Js2oWGIxVM-xPmqCpS3ET-UL4-kCb8-vRpQS9Ut6pEYbtNJcgqDu7z2WUU8OihIyzwjIhjaYMiwjh_91RUjQFe71VbzOSGS_pa4HSW17SZO0Z1lWZ8HUy1Lh5SiIIzwdsRC2KX0ge2ppQBqAK6mgfXgqxzqR58zCxfaGoiHo0UaF423s-0jmjC9FfhOpxqqtX7AhBtIgFVOGavDFF5lZHTSqQMoXmdTk_6kurkxbclkVx5eFyImZHUqwn47XitZFsz1v8ayhNdZOvpX1IAMOqKNqUT6ZQznZm-Vn-2uiLuHjwJ2yMbu0G-x9vW24tWOzvHInkqrmMFoUEBGtIwZJ8f9ByqAqjIwKbhtbD-nQYjn_vlBH_ZQuaaUmALe-tl=w2312-h1906-no)

## License
### The MIT License

Copyright (c) 2018 Juan Sebastian Velez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.