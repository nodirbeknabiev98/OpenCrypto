<a name="readme-top"></a>

# Vanilla JS OpenCrypto SPA 📈📊📰

Welcome to OpenCrypto! I built this application because I was really excited about the idea of building the SPA without using any modern frameworks, and so I did it!. I hope that you enjoy playing around with this crypto dashboard just as much as I enjoyed building it.

<img src="images\project_screenshots\OpenCrypto.gif">

_Example screenshot of OpenCrypto application_

## About The Project / Motivation 💡

- Why Vanilla JS ?

**First of all**, Javascript frameworks are awesome ! I love and use them for most of my projects.</br>
Why are they awesome ?</br> 
-- They help out by abstracting the hard code with complex structure . </br>
-- They help to focus on the app's value rather in its implementation </br>
-- They help to significantly decrease the code-writing time</br>
-- They help newcomers in your company to hop into the project very fast and with great confidencу,without needing to explain every part of your software architecture
</br>

**However**, with all its greateness, when something goes wrong and you don't why (which is natural thing that happens a lot) because you don't have a deep understanding of JS, then my friend you are in a big trouble. </br>
Angular, React, Vue, Ember, Next, Meteor,Koa... are awesome iff you understand its core engineering principles which in turn requires a good understanding of Vanilla JS. After all, we should try to be a developer, not [put your favourite framework here] developer.

**Hence**, taking into considerations all the aforementioned thoughts, I decided to write the simple,yet very interesting project, in order to learn and practice Vanilla JS.

## How to run / Setup 🔩
**To use the app with only the main functionality**, you can follow the link: https://nodirbeknabiev98.github.io/OpenCrypto/

**To use the app with <u>full functionality</u>**, you should download the project source code and follow the instructions below<br>
- Open /javascript/env/env-config.js 
- Add environmental variables
  - `KEY_exchangerateapi="###############";` <br>
  The KEY_exchangerateapi is the API key received from registering at 
https://www.exchangerate-api.com/<br>
  - `KEY_openweathermap="###############";` </br> 
  The KEY_openweathermap is the API key received from registering at 
  https://openweathermap.org/api <br>
- Open With Live Server 
  - `index.html`

**Additional Notes**
  - No external dependencies are required
  - Use Google Chrome and VS Code Live Server
  
## FAQ/Common errors 🙋
<b>Question:</b> Why do I need to use VS Code Live Server? You said that the project is built using Vanilla JS, why can't I just open it using the browser directly and run the project ? </br>
<b>Answer:</b> You need to pay attention to local testing — if you try to load the HTML file locally (i.e.
with a file:// URL), you'll run into CORS errors due to JavaScript module security
requirements. You need to do your testing through a server. ES6 modules are subject to same-origin policy, opening the file directly with a browser will not work.

<b>Question:</b> Can I run the project using the other server? </br>
<b>Answer:</b> Absolutely! For example, you can use e.g "node static server" or "node live server". However, I run and tested this project only by using VS Code Live Server. If you can figure it out how to run it with different server, please do it.

<b>Question:</b> What if I run the project without adding API keys? (only the main functionality option) </br>
<b>Answer:</b> Well, only 3 modules of this application (currencyCards, weatherWidget, currencyConverter) require API keys to function. So, if you don't set up the API keys, then that 3 modules will not be functional and all the other parts will work good.

## Contributing 🌟

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Acknowledgments 🧡

Thank you very much to everyone who helped me to build this app by providing an awesome tutorials, libraries and amazing APIs.
Because of you, the programming world is becoming much more interesting and exciting !

`Steve Griffith - Prof3ssorSt3v3` - [https://www.youtube.com/watch?v=exiC1Qsv5mc](https://www.youtube.com/watch?v=exiC1Qsv5mc)

`David Dobryakov` - [https://www.youtube.com/watch?v=0jPwrj5f8no](https://www.youtube.com/watch?v=0jPwrj5f8no)

`Creators and Contributors of Chart.js` - [https://github.com/chartjs/Chart.js/graphs/contributors](https://github.com/chartjs/Chart.js/graphs/contributors)

`EGATOR` - [https://www.youtube.com/watch?v=BOF79TAIkYQ](https://www.youtube.com/watch?v=BOF79TAIkYQ)

`CodingNepal` - [https://www.youtube.com/watch?v=UY7F37KHyI8](https://www.youtube.com/watch?v=UY7F37KHyI8), [https://www.youtube.com/watch?v=c1r-NqYkFPc](https://www.youtube.com/watch?v=c1r-NqYkFPc)

`CoinGecko Team` - [https://www.coingecko.com/en/about](https://www.coingecko.com/en/about)

`OpenWeatherMap Team` - [https://openweathermap.org/about-us](https://openweathermap.org/about-us)

`ExchangeRate-API Team` - [https://www.exchangerate-api.com/](https://www.exchangerate-api.com/)

`IP-API Team` - [https://ip-api.com/](https://ip-api.com/)


## Additional info (Warranty,DMCA) ℹ️

The Software is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the Software or the use or other dealings in the Software.

The project may contain some third-party copyrighted materials.
If your copyrighted material including but not limited to article text, program code, images, photos, videos, page layout/style has been used illegally, and you want this material to be removed or to be listed with your credentials in the 'Acknowledgments' section of this readme file, please send the written infringement notice with all the related information to the following email address `nodirbeknabiev98@gmail.com`. Please, allow 4-5 business days for an email response.
Note that I always strive to give a proper kudos to everyone whose work somehow helped me with the project realization because I do respect the work of others. Hence, a copyright infringement,if it happened, was an unintentional action.

## Copyright ©️

All rights reserved. `Nodirbek Nabiev` is the author of this project and the copyright holder of all the content of this project, unless explicitly indicated otherwise. 

## Contact 📇

Author: Nodirbek Nabiev</br>
Email: nodirbeknabiev98@gmail.com

Project Link: [https://github.com/nodirbeknabiev98/OpenCrypto](https://github.com/nodirbeknabiev98/OpenCrypto)

<p align="right">(<a href="#readme-top">Back To ⬆️</a>)</p>
