# Hello Vuejs

Simple VUEJS project using JS and CSS files separately. 

Using VUEJS, SYMFONY4 (FLEX), JAVASCRIPT/ES6, YARN,NPM, WEBPACK ENCORE, HTML, SASS. 

## Checkout application

Clone this repository:

```bash
git clone https://github.com/oumarkonate/hello-vuejs.git
```

## Installation

* First install composer at project root. Run the following script in your terminal:

```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === '48e3236262b34d30969dca3c37281b3b4bbe3221bda826ac6a9a62d6444cdb0dcd0615698a5cbe587c3f0fe57a54d8f5') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```
Read more about composer installation: https://getcomposer.org/download/

* Then after, install `yarn` gloablly:

On ubuntu or debian, run the following command:
  
```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```
Then run:
```bash
sudo apt-get update && sudo apt-get install yarn
```
Read more about yarn installation: https://yarnpkg.com/lang/fr/docs/install/

* Then install composer dependencies:
```bash
composer install
```

* Then install node dependencies:
```bash
npm install
```

## Run application

* Run yarn to build assets:
```bash
yarn encore dev --watch
```

* Then launch in another terminal the following command to run binary web server:
```bash
bin/console server:run
```

* Access the objects collection page via url : 
```bash
http://localhost:8000/products/list/
```


