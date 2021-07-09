(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+XlM":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _raw_loader_chat_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./chat.component.html */ "mTh2");
/* harmony import */ var _chat_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.component.css */ "aL58");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_websocket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/websocket.service */ "7nMs");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatComponent = /** @class */ (function () {
    function ChatComponent(router) {
        this.router = router;
        this.conversation = null;
        this.bolean = true;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5___default()('http://localhost:4001');
    }
    ChatComponent.prototype.ngOnInit = function () {
        if (!localStorage.getItem("userid") && !localStorage.getItem("companyid")) {
            this.router.navigate(['views/login']);
            // this.bolean=false
        }
    };
    ChatComponent.prototype.onConversationSelected = function (conversation) {
        this.conversation = conversation;
    };
    ChatComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'chat-root',
            template: _raw_loader_chat_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            providers: [app_service_websocket_service__WEBPACK_IMPORTED_MODULE_4__["WebsocketService"]],
            styles: [_chat_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "+pZr":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/presentation/presentation.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n    <div class=\"page-header clear-filter\">\r\n      <div class=\"rellax-header rellax-header-sky\" data-rellax-speed=\"-8\">\r\n          <div class=\"page-header-image\" style=\"background-image: url('assets/img/presentation-page/nuk-pro-back-sky.jpg')\">\r\n          </div>\r\n      </div>\r\n      <div class=\"rellax-header rellax-header-buildings\" data-rellax-speed=\"0\">\r\n          <div class=\"page-header-image page-header-city\" style=\"background-image: url('assets/img/presentation-page/nuk-pro-buildings.png')\">\r\n          </div>\r\n      </div>\r\n      <div class=\"rellax-text-container rellax-text\">\r\n          <h1 class=\"h1-seo\" data-rellax-speed=\"-2\">Now UI Kit</h1>\r\n          <div class=\"pro\">PRO</div>\r\n      </div>\r\n      <h3 class=\"h3-description rellax-text\" data-rellax-speed=\"-1\">A beautiful premium Bootstrap 4 UI Kit.</h3>\r\n      <h6 class=\"category category-absolute rellax-text\" data-rellax-speed=\"-2\">Designed by\r\n          <a href=\"https://invisionapp.com/\" target=\"_blank\">\r\n              <img src=\"assets/img/invision-white-slim.png\" class=\"invision-logo\" />\r\n          </a>. Coded by\r\n          <a href=\"https://www.creative-tim.com\" target=\"_blank\">\r\n              <img src=\"assets/img/creative-tim-white-slim2.png\" class=\"creative-tim-logo\" />\r\n          </a>.\r\n      </h6>\r\n\t</div>\r\n  <div class=\"section section-components\" data-background-color=\"dark-red\">\r\n      <div class=\"container\">\r\n          <div class=\"row\">\r\n              <div class=\"col-md-8 ml-auto mr-auto\">\r\n                  <h2 class=\"text-center title\">Impressive collection of elements\r\n                      <br>\r\n                      <small class=\"description\">Designed to look gorgeous together</small>\r\n                  </h2>\r\n                  <h5 class=\"text-center description\">Now UI Kit Pro comes with a huge number of customisable elements. They are not only designed to be pixel perfect and light but they are also easy to use and combine well with other components.</h5>\r\n                  <div class=\"space-50\"></div>\r\n              </div>\r\n          </div>\r\n          <div class=\"row\">\r\n              <div class=\"col-md-3\">\r\n                  <div class=\"card-container first-card\">\r\n                      <div class=\"card-component\">\r\n                          <a [routerLink]=\"['/elements']\" target=\"_blank\">\r\n                              <div class=\"front\">\r\n                                  <img src=\"assets/img/presentation-page/basic_thumb.jpg\">\r\n                              </div>\r\n                          </a>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                  <div class=\"card-container second-card\">\r\n                      <div class=\"card-component\">\r\n                          <a [routerLink]=\"['/elements']\" target=\"_blank\">\r\n                              <div class=\"front\">\r\n                                  <img src=\"assets/img/presentation-page/cards_thumb.jpg\">\r\n                              </div>\r\n                          </a>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                  <div class=\"card-container third-card\">\r\n                      <div class=\"card-component\">\r\n                          <a [routerLink]=\"['/sections']\" target=\"_blank\">\r\n                              <div class=\"front\">\r\n                                  <img src=\"assets/img/presentation-page/sections_thumb.jpg\">\r\n                              </div>\r\n                          </a>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                  <div class=\"card-container fourth-card\">\r\n                      <div class=\"card-component\">\r\n                          <a [routerLink]=\"['/examples/productpage']\" target=\"_blank\">\r\n                              <div class=\"front\">\r\n                                  <img src=\"assets/img/presentation-page/pages2_thumb.jpg\">\r\n                              </div>\r\n                          </a>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"section section-basic-components\">\r\n      <div class=\"container\">\r\n          <div class=\"row\">\r\n              <div class=\"col-lg-5 col-md-7 ml-auto mr-auto\">\r\n                  <h2 class=\"title\">Basic Elements</h2>\r\n                  <h6 class=\"category\">The core elements of your website</h6>\r\n                  <h5 class=\"description\">We re-styled every Bootstrap 4 element to match the Now UI Kit style. All the Bootstrap 4 components that you need in a development have been re-design with the new look. Besides the numerous basic elements, we have also created additional classes. All these items will help you take your project to the next level.</h5>\r\n              </div>\r\n              <div class=\"col-lg-6 col-md-12\">\r\n                  <div class=\"image-container\">\r\n                      <img class=\"components-macbook\" src=\"assets/img/ipad.png\" alt=\"\">\r\n                      <img class=\"table-img\" src=\"assets/img/presentation-page/table.jpg\" alt=\"\">\r\n                      <img class=\"share-btn-img\" src=\"assets/img/presentation-page/share-btn.jpg\" alt=\"\">\r\n                      <img class=\"coloured-card-btn-img\" src=\"assets/img/presentation-page/coloured-card-with-btn.jpg\" alt=\"\">\r\n                      <img class=\"coloured-card-img\" src=\"assets/img/presentation-page/coloured-card.jpg\" alt=\"\">\r\n                      <img class=\"social-img\" src=\"assets/img/presentation-page/social-row.jpg\" alt=\"\">\r\n                      <img class=\"linkedin-btn-img\" src=\"assets/img/presentation-page/linkedin-btn.jpg\" alt=\"\">\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"section section-cards\">\r\n      <div class=\"container\">\r\n          <div class=\"row\">\r\n              <div class=\"col-md-8 text-center ml-auto mr-auto\">\r\n                  <div class=\"section-description\">\r\n                      <h2 class=\"title\">Beautiful Cards</h2>\r\n                      <h6 class=\"category\">One Card for Every Problem</h6>\r\n                      <h5 class=\"description\">From cards designed for blog posts, to product cards or user profiles, you will have many options to choose from. All the cards follow the Now UI Kit style principles and have a design that stands out. We have gone above and beyond with options for you to organise your information. </h5>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                  <div class=\"images-container\">\r\n                      <div class=\"image-container1\">\r\n                          <img src=\"assets/img/presentation-page/card3.jpg\">\r\n                      </div>\r\n                      <div class=\"image-container2\">\r\n                          <img src=\"assets/img/presentation-page/card6.jpg\">\r\n                      </div>\r\n                      <div class=\"image-container3\">\r\n                          <img src=\"assets/img/presentation-page/card7.jpg\">\r\n                      </div>\r\n                      <div class=\"image-container4\">\r\n                          <img src=\"assets/img/presentation-page/card5.jpg\">\r\n                      </div>\r\n                      <div class=\"image-container5\">\r\n                          <img src=\"assets/img/presentation-page/card4.jpg\">\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"section section-content\" data-background-color=\"black\">\r\n      <div class=\"container\">\r\n          <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                  <div class=\"image-container\">\r\n                      <img class=\"img img-raised rounded img-comments rellax\" data-rellax-speed=\"1\" src=\"assets/img/presentation-page/content1.jpg\">\r\n                      <img class=\"img img-raised rounded img-blog rellax1\" data-rellax-speed=\"4\" src=\"assets/img/presentation-page/content4.jpg\">\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-md-4 ml-auto mr-auto\">\r\n                  <div class=\"section-description\">\r\n                      <h2 class=\"title\">Content Areas</h2>\r\n                      <h6 class=\"category\">For Areas that Need More Space</h6>\r\n                      <h5 class=\"description\">We took into consideration multiple use cases and came up with some specific areas for you. If you need elements such as tables, comments, description areas, tabs and many others, we've got you covered. They're beautiful and easy to use for the end user navigating your website. </h5>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"section section-sections\" data-background-color=\"gray\">\r\n      <div class=\"container\">\r\n          <div class=\"col-md-8 ml-auto mr-auto\">\r\n              <div class=\"section-description text-center\">\r\n                  <h2 class=\"title\">Sections you will love</h2>\r\n                  <h5 class=\"description\"> Build pages in no time using pre-made sections! From headers to footers, you will be able to choose the best combination for your project. We have created multiple sections for you to put together and customise into pixel perfect example pages.</h5>\r\n                  <a [routerLink]=\"['/sections']\" class=\"btn btn-primary btn-round\">View All Sections</a>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"container-fluid\">\r\n          <div class=\"section-cols\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-3\">\r\n                      <img src=\"assets/img/presentation-page/header1.jpg\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                      <img src=\"assets/img/presentation-page/header2.jpg\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                      <img src=\"assets/img/presentation-page/header3.jpg\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                      <img src=\"assets/img/presentation-page/header4.jpg\" alt=\"\">\r\n                  </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-3\">\r\n                      <img src=\"assets/img/presentation-page/features1.jpg\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                      <img src=\"assets/img/presentation-page/features2.jpg\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                      <img src=\"assets/img/presentation-page/features3.jpg\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                      <img src=\"assets/img/presentation-page/features4.jpg\" alt=\"\">\r\n                  </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-3\">\r\n                      <img src=\"assets/img/presentation-page/features5.jpg\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                      <img src=\"assets/img/presentation-page/features6.jpg\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                      <img src=\"assets/img/presentation-page/features7.jpg\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                      <img src=\"assets/img/presentation-page/features8.jpg\" alt=\"\">\r\n                  </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-3\">\r\n                      <img src=\"assets/img/presentation-page/blogpost1.jpg\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                      <img src=\"assets/img/presentation-page/blogpost2.jpg\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                      <img src=\"assets/img/presentation-page/blogpost3.jpg\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                      <img src=\"assets/img/presentation-page/blogpost4.jpg\" alt=\"\">\r\n                  </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-3\">\r\n                      <img src=\"assets/img/presentation-page/blogpost5.jpg\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                      <img src=\"assets/img/presentation-page/team1.jpg\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                      <img src=\"assets/img/presentation-page/team2.jpg\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                      <img src=\"assets/img/presentation-page/team3.jpg\" alt=\"\">\r\n                  </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-3\">\r\n                      <img src=\"assets/img/presentation-page/team4.jpg\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                      <img src=\"assets/img/presentation-page/team5.jpg\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                      <img src=\"assets/img/presentation-page/projects1.jpg\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                      <img src=\"assets/img/presentation-page/projects2.jpg\" alt=\"\">\r\n                  </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-3\">\r\n                      <img src=\"assets/img/presentation-page/projects4.jpg\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                      <img src=\"assets/img/presentation-page/projects5.jpg\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                      <img src=\"assets/img/presentation-page/pricing1.jpg\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                      <img src=\"assets/img/presentation-page/pricing2.jpg\" alt=\"\">\r\n                  </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-3\">\r\n                      <img src=\"assets/img/presentation-page/pricing3.jpg\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                      <img src=\"assets/img/presentation-page/pricing4.jpg\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                      <img src=\"assets/img/presentation-page/pricing5.jpg\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                      <img src=\"assets/img/presentation-page/testimonials1.jpg\" alt=\"\">\r\n                  </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-3\">\r\n                      <img src=\"assets/img/presentation-page/testimonials2.jpg\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                      <img src=\"assets/img/presentation-page/testimonials3.jpg\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                      <img src=\"assets/img/presentation-page/contact1.jpg\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                      <img src=\"assets/img/presentation-page/contact2.jpg\" alt=\"\">\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"section section-examples\" data-background-color=\"black\">\r\n      <div class=\"container\">\r\n          <div class=\"col-md-8 ml-auto mr-auto text-center\">\r\n              <div class=\"section-description\">\r\n                  <h2 class=\"title\">Example Pages</h2>\r\n                  <h5 class=\"description\">Forget about building everything from scratch. From landing pages to e-commerce or blog pages, you will be able jump start your development. Show your clients a quick prototype and get inspired for your next project!</h5>\r\n              </div>\r\n          </div>\r\n          <div class=\"row\">\r\n              <div class=\"col-md-4\">\r\n                  <h5 class=\"title\">About Us</h5>\r\n                  <div class=\"card\">\r\n                      <a [routerLink]=\"['/examples/aboutus']\" target=\"_blank\">\r\n                          <img src=\"assets/img/presentation-page/pages/about-us.jpg\" alt=\"\">\r\n                      </a>\r\n                  </div>\r\n                  <h5 class=\"title\">Landing Page</h5>\r\n                  <div class=\"card\">\r\n                      <a [routerLink]=\"['/examples/landing']\" target=\"_blank\">\r\n                          <img src=\"assets/img/presentation-page/pages/landing.jpg\" alt=\"\">\r\n                      </a>\r\n                  </div>\r\n                  <h5 class=\"title\">Login Page</h5>\r\n                  <div class=\"card\">\r\n                      <a [routerLink]=\"['/examples/login']\" target=\"_blank\">\r\n                          <img src=\"assets/img/presentation-page/pages/login.jpg\" alt=\"\">\r\n                      </a>\r\n                  </div>\r\n                  <h5 class=\"title\">Signup Page</h5>\r\n                  <div class=\"card\">\r\n                      <a [routerLink]=\"['/examples/register']\" target=\"_blank\">\r\n                          <img src=\"assets/img/presentation-page/pages/signup.jpg\" alt=\"\">\r\n                      </a>\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                  <h5 class=\"title\">Blog Post</h5>\r\n                  <div class=\"card\">\r\n                      <a [routerLink]=\"['/examples/blogpost']\" target=\"_blank\">\r\n                          <img src=\"assets/img/presentation-page/pages/blog-post.jpg\" alt=\"\">\r\n                      </a>\r\n                  </div>\r\n                  <h5 class=\"title\">Product Page</h5>\r\n                  <div class=\"card\">\r\n                      <a [routerLink]=\"['/examples/productpage']\" target=\"_blank\">\r\n                          <img src=\"assets/img/presentation-page/pages/product.jpg\" alt=\"\">\r\n                      </a>\r\n                  </div>\r\n                  <h5 class=\"title\">Profile Page</h5>\r\n                  <div class=\"card\">\r\n                      <a [routerLink]=\"['/examples/profile']\" target=\"_blank\">\r\n                          <img src=\"assets/img/presentation-page/pages/profile.jpg\" alt=\"\">\r\n                      </a>\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                  <h5 class=\"title\">Pricing Page</h5>\r\n                  <div class=\"card\">\r\n                      <a [routerLink]=\"['/examples/pricing']\" target=\"_blank\">\r\n                          <img src=\"assets/img/presentation-page/pages/pricing.jpg\" alt=\"\">\r\n                      </a>\r\n                  </div>\r\n                  <h5 class=\"title\">Ecommerce</h5>\r\n                  <div class=\"card\">\r\n                      <a [routerLink]=\"['/examples/ecommerce']\" target=\"_blank\">\r\n                          <img src=\"assets/img/presentation-page/pages/ecommerce.jpg\" alt=\"\">\r\n                      </a>\r\n                  </div>\r\n                  <h5 class=\"title\">Blog Posts</h5>\r\n                  <div class=\"card\">\r\n                      <a [routerLink]=\"['/examples/blogposts']\" target=\"_blank\">\r\n                          <img src=\"assets/img/presentation-page/pages/blog-posts.jpg\" alt=\"\">\r\n                      </a>\r\n                  </div>\r\n                  <h5 class=\"title\">Contact Us</h5>\r\n                  <div class=\"card\">\r\n                      <a [routerLink]=\"['/examples/contactus']\" target=\"_blank\">\r\n                          <img src=\"assets/img/presentation-page/pages/contact.jpg\" alt=\"\">\r\n                      </a>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"section section-icons\" data-background-color=\"black\">\r\n      <div class=\"container-fluid\">\r\n          <div class=\"row\">\r\n              <div class=\"col-md-3\">\r\n                  <div class=\"icons-nucleo\">\r\n                      <i class=\"first-left-icon now-ui-icons ui-1_send\"></i>\r\n                      <i class=\"second-left-icon now-ui-icons ui-2_like\"></i>\r\n                      <i class=\"third-left-icon now-ui-icons transportation_air-baloon\"></i>\r\n                      <i class=\"fourth-left-icon now-ui-icons text_bold\"></i>\r\n                      <i class=\"fifth-left-icon now-ui-icons tech_headphones\"></i>\r\n                      <i class=\"sixth-left-icon now-ui-icons emoticons_satisfied\"></i>\r\n                      <i class=\"seventh-left-icon now-ui-icons shopping_cart-simple\"></i>\r\n                      <i class=\"eighth-left-icon now-ui-icons objects_spaceship\"></i>\r\n                      <i class=\"ninth-left-icon now-ui-icons media-2_note-03\"></i>\r\n                      <i class=\"tenth-left-icon now-ui-icons ui-2_favourite-28\"></i>\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-md-6 text-center\">\r\n                  <h2 class=\"title\">Custom Icons</h2>\r\n                  <h5 class=\"description\">\r\n                      Now UI Kit PRO comes with 100 custom demo icons made by our friends from\r\n                      <a href=\"https://nucleoapp.com/?ref=1712\" target=\"_blank\">NucleoApp</a>. The official package contains over 20.729 icons which are looking great in combination with Now UI Kit PRO. Make sure you check all of them and use those that you like the most.\r\n                  </h5>\r\n                  <br>\r\n                  <a [routerLink]=\"['/examples/nucleoicons']\" class=\"btn btn-primary btn-round btn-lg \" target=\"_blank\">View Demo Icons</a>\r\n                  <a href=\"https://nucleoapp.com/?ref=1712\" class=\"btn btn-outline-primary btn-round btn-lg \" target=\"_blank\">View All Icons</a>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                  <div class=\"icons-nucleo icons-nucleo-right\">\r\n                      <i class=\"first-right-icon now-ui-icons design_palette\"></i>\r\n                      <i class=\"second-right-icon now-ui-icons clothes_tie-bow\"></i>\r\n                      <i class=\"third-right-icon now-ui-icons location_pin\"></i>\r\n                      <i class=\"fourth-right-icon now-ui-icons objects_key-25\"></i>\r\n                      <i class=\"fifth-right-icon now-ui-icons travel_istanbul\"></i>\r\n                      <i class=\"sixth-right-icon now-ui-icons business_briefcase-24\"></i>\r\n                      <i class=\"seventh-right-icon now-ui-icons design_image\"></i>\r\n                      <i class=\"eighth-right-icon now-ui-icons location_world\"></i>\r\n                      <i class=\"ninth-right-icon now-ui-icons objects_planet\"></i>\r\n                      <i class=\"tenth-right-icon now-ui-icons education_atom\"></i>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"section features-7 section-image\" style=\"background-image: url('assets/img/bg51.jpg')\">\r\n      <div class=\"container-fluid\">\r\n          <div class=\"row\">\r\n              <div class=\"col-md-6 px-0\">\r\n                  <div class=\"col-sm-12\">\r\n                      <div class=\"info info-horizontal\">\r\n                          <div class=\"icon\">\r\n                              <i class=\"now-ui-icons business_money-coins\"></i>\r\n                          </div>\r\n                          <div class=\"description\">\r\n                              <h5 class=\"info-title\">Save Time & Money</h5>\r\n                              <p class=\"description\">Creating your design from scratch with dedicated designers can be very expensive.Using Now UI Kit PRO you don't have to worry about customising the basic Bootstrap 4 design or its components.</p>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"info info-horizontal\">\r\n                          <div class=\"icon\">\r\n                              <i class=\"now-ui-icons text_bold\"></i>\r\n                          </div>\r\n                          <div class=\"description\">\r\n                              <h5 class=\"info-title\">Bootstrap 4 & Flexbox</h5>\r\n                              <p class=\"description\">It is built over Bootstrap 4, it's fully responsive and has all the benefits of the flexbox for the layout, grid system and components. This is a huge advantage when you work with columns.</p>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"info info-horizontal\">\r\n                          <div class=\"icon\">\r\n                              <i class=\"now-ui-icons education_paper\"></i>\r\n                          </div>\r\n                          <div class=\"description\">\r\n                              <h5 class=\"info-title\">Fast Prototype</h5>\r\n                              <p class=\"description\">Using Now UI Kit PRO you can create hundreds of components combinations within seconds and present them to your client. You just need to change some classes and colors.</p>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                  <div class=\"image-container\">\r\n                      <img src=\"assets/img/ipad3.png\" alt=\"\">\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"section section-testimonials\" data-background-color=\"black\">\r\n      <div class=\"row\">\r\n          <div class=\"col-md-8 ml-auto mr-auto text-center\">\r\n              <h2 class=\"title\">Trusted by 245,000+ People</h2>\r\n              <h5 class=\"description\">The UI Kits, Templates and Dashboards that we've created are used by\r\n                  <b>245,000+ web developers</b> in over\r\n                  <b>426,000 Web Projects</b>. This is what some of them think:</h5>\r\n          </div>\r\n      </div>\r\n      <div class=\"row\">\r\n          <div class=\"col-md-2\">\r\n              <div class=\"testimonials-people\">\r\n                  <img class=\"left-first-person img-raised rellax5\" data-rellax-speed=\"1\" src=\"https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg\" alt=\"\">\r\n                  <img class=\"left-second-person img-raised rellax6\" data-rellax-speed=\"3\" src=\"https://s3.amazonaws.com/uifaces/faces/twitter/mlane/128.jpg\" alt=\"\">\r\n                  <img class=\"left-third-person img-raised rellax7\" data-rellax-speed=\"2\" src=\"https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg\" alt=\"\">\r\n                  <img class=\"left-fourth-person img-raised rellax8\" data-rellax-speed=\"5\" src=\"https://s3.amazonaws.com/uifaces/faces/twitter/kerem/128.jpg\" alt=\"\">\r\n                  <img class=\"left-fifth-person img-raised rellax9\" data-rellax-speed=\"7\" src=\"https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg\" alt=\"\">\r\n              </div>\r\n          </div>\r\n          <div class=\"col-md-8\">\r\n            <ngb-carousel>\r\n                <ng-template ngbSlide>\r\n                  <div class=\"card card-testimonial card-plain\">\r\n                      <div class=\"card-avatar\">\r\n                          <a href=\"#pablo\">\r\n                              <img class=\"img img-raised rounded\" src=\"https://s3.amazonaws.com/creativetim_bucket/photos/154001/thumb.JPG?1501184024\" />\r\n                          </a>\r\n                      </div>\r\n                      <div class=\"card-body\">\r\n                          <h5 class=\"card-description\">\"Awesome Design and very well organized code structure! Also, it contains numerous elements using which achieving the perfect or required template can be done with ease. Great job!\"\r\n                          </h5>\r\n                          <h4 class=\"card-title\">Stefan</h4>\r\n                          <h6 class=\"category text-muted\">Web Designer</h6>\r\n                          <div class=\"card-footer\">\r\n                              <i class=\"fa fa-star text-warning\"></i>\r\n                              <i class=\"fa fa-star text-warning\"></i>\r\n                              <i class=\"fa fa-star text-warning\"></i>\r\n                              <i class=\"fa fa-star text-warning\"></i>\r\n                              <i class=\"fa fa-star text-warning\"></i>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n                </ng-template>\r\n                <ng-template ngbSlide>\r\n                  <div class=\"card card-testimonial card-plain\">\r\n                      <div class=\"card-avatar\">\r\n                          <a href=\"#pablo\">\r\n                              <img class=\"img img-raised rounded\" src=\"https://s3.amazonaws.com/uifaces/faces/twitter/chadengle/128.jpg\" />\r\n                          </a>\r\n                      </div>\r\n                      <div class=\"card-body\">\r\n                          <h5 class=\"card-description\">\"It looks great and its somewhat futuristics cant wait to use it on a project here in nigeria i'm sure it would put me ahead.. I cant wait to hv enough money to buy ur product.\"\r\n                          </h5>\r\n                          <h4 class=\"card-title\">Mr. Bones</h4>\r\n                          <h6 class=\"category text-muted\">Web Designer</h6>\r\n                          <div class=\"card-footer\">\r\n                              <i class=\"fa fa-star text-warning\"></i>\r\n                              <i class=\"fa fa-star text-warning\"></i>\r\n                              <i class=\"fa fa-star text-warning\"></i>\r\n                              <i class=\"fa fa-star text-warning\"></i>\r\n                              <i class=\"fa fa-star text-warning\"></i>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n                </ng-template>\r\n                <ng-template ngbSlide>\r\n                  <div class=\"card card-testimonial card-plain\">\r\n                      <div class=\"card-avatar\">\r\n                          <a href=\"#pablo\">\r\n                              <img class=\"img img-raised rounded\" src=\"https://s3.amazonaws.com/creativetim_bucket/photos/123124/thumb.?1480480048\" />\r\n                          </a>\r\n                      </div>\r\n                      <div class=\"card-body\">\r\n                          <h5 class=\"card-description\">\"Everything is perfect. Codes are really organized. It's easy to edit for my own purposes. It's great that it is built on top of Bootstrap 4.\"\r\n                              <br>\r\n                              <br>\r\n                          </h5>\r\n                          <h4 class=\"card-title\">DOĞA</h4>\r\n                          <h6 class=\"category text-muted\">Web Developer</h6>\r\n                          <div class=\"card-footer\">\r\n                              <i class=\"fa fa-star text-warning\"></i>\r\n                              <i class=\"fa fa-star text-warning\"></i>\r\n                              <i class=\"fa fa-star text-warning\"></i>\r\n                              <i class=\"fa fa-star text-warning\"></i>\r\n                              <i class=\"fa fa-star text-warning\"></i>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n                </ng-template>\r\n            </ngb-carousel>\r\n              <!-- <div id=\"carouselExampleIndicators2\" class=\"carousel slide\">\r\n                  <ol class=\"carousel-indicators\">\r\n                      <li data-target=\"#carouselExampleIndicators2\" data-slide-to=\"0\" class=\"active\"></li>\r\n                      <li data-target=\"#carouselExampleIndicators2\" data-slide-to=\"1\"></li>\r\n                      <li data-target=\"#carouselExampleIndicators2\" data-slide-to=\"2\"></li>\r\n                  </ol>\r\n                  <div class=\"carousel-inner\" role=\"listbox\">\r\n                      <div class=\"carousel-item active justify-content-center\">\r\n\r\n                      </div>\r\n                      <div class=\"carousel-item justify-content-center\">\r\n\r\n                      </div>\r\n                      <div class=\"carousel-item justify-content-center\">\r\n\r\n                      </div>\r\n                  </div>\r\n                  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators2\" role=\"button\" data-slide=\"prev\">\r\n                      <i class=\"now-ui-icons arrows-1_minimal-left\"></i>\r\n                  </a>\r\n                  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators2\" role=\"button\" data-slide=\"next\">\r\n                      <i class=\"now-ui-icons arrows-1_minimal-right\"></i>\r\n                  </a>\r\n              </div> -->\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n              <div class=\"testimonials-people\">\r\n                  <img class=\"right-first-person img-raised rellax10\" data-rellax-speed=\"5\" src=\"https://s3.amazonaws.com/uifaces/faces/twitter/tonypeterson/128.jpg\" alt=\"\">\r\n                  <img class=\"right-second-person img-raised rellax11\" data-rellax-speed=\"1\" src=\"https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg\" alt=\"\">\r\n                  <img class=\"right-fourth-person img-raised rellax12\" data-rellax-speed=\"7\" src=\"https://s3.amazonaws.com/uifaces/faces/twitter/mattsince87/128.jpg\" alt=\"\">\r\n                  <img class=\"right-fifth-person img-raised rellax13\" data-rellax-speed=\"3\" src=\"https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg\" alt=\"\">\r\n                  <img class=\"right-sixth-person img-raised rellax14\" data-rellax-speed=\"5\" src=\"https://s3.amazonaws.com/uifaces/faces/twitter/chadengle/128.jpg\" alt=\"\">\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"section section-pricing\" id=\"sectionBuy\">\r\n      <div class=\"container\">\r\n          <div class=\"our-clients\">\r\n              <div class=\"container\">\r\n                  <div class=\"row\">\r\n                      <div class=\"col-md-2 ml-auto\">\r\n                          <img src=\"assets/img/presentation-page/vodafone.jpg\" alt=\"\" />\r\n                      </div>\r\n                      <div class=\"col-md-2\">\r\n                          <img src=\"assets/img/presentation-page/microsoft.jpg\" alt=\"\" />\r\n                      </div>\r\n                      <div class=\"col-md-2\">\r\n                          <img src=\"assets/img/presentation-page/harvard.jpg\" alt=\"\" />\r\n                      </div>\r\n                      <div class=\"col-md-2 mr-auto\">\r\n                          <img src=\"assets/img/presentation-page/stanford.jpg\" alt=\"\" />\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"row\">\r\n              <div class=\"col-md-8 ml-auto mr-auto text-center\">\r\n                  <h2 class=\"title\">Ready to grab Now UI Kit PRO?</h2>\r\n              </div>\r\n              <div class=\"col-md-8 ml-auto mr-auto\">\r\n                  <p class=\"description mb-5 text-center\">You have\r\n                      <b>Free Unlimited Updates</b> and\r\n                      <b>Premium Support</b> on each package. You also have\r\n                      <b>30 days</b> to request a refund if you're not happy with your purchase.\r\n                      <br> Read more about\r\n                      <b>\r\n                          <a href=\"https://www.creative-tim.com/license\" target=\"_blank\">licenses here</a>\r\n                      </b>.\r\n                  </p>\r\n                  <div class=\"row\">\r\n                      <div class=\"col-md-6\">\r\n                          <div class=\"card card-pricing card-background card-raised card-margin\" style=\"background-image: url('assets/img/bg27.jpg')\">\r\n                              <div class=\"card-body\">\r\n                                  <h6 class=\"category\">Personal License</h6>\r\n                                  <h1 class=\"card-title\">\r\n                                      <small>$</small>69</h1>\r\n                                  <ul>\r\n                                      <li>\r\n                                          <b>HTML/CSS/JS/SASS</b> Files</li>\r\n                                      <li>\r\n                                          <b>Fully Coded</b> Components</li>\r\n                                      <li>\r\n                                          <b>Responsive</b> Design</li>\r\n                                      <li>Product\r\n                                          <b> Documentation</b>\r\n                                      </li>\r\n                                  </ul>\r\n                                  <a href=\"https://www.creative-tim.com/buy/now-ui-kit-pro-angular?license=1\" class=\"btn btn-primary btn-round\">\r\n                                      Buy Now!\r\n                                  </a>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"col-md-6\">\r\n                          <div class=\"card card-pricing card-background card-raised\" style=\"background-image: url('assets/img/bg37.jpg')\">\r\n                              <div class=\"card-body\">\r\n                                  <h6 class=\"category\">Developer License</h6>\r\n                                  <h1 class=\"card-title\">\r\n                                      <small>$</small>279</h1>\r\n                                  <ul>\r\n                                      <li>Everything in Personal</li>\r\n                                      <li>\r\n                                          <b>+</b> Create\r\n                                          <b>Multiple Websites</b>\r\n                                      </li>\r\n                                      <li>\r\n                                          <b>+</b> Sell to\r\n                                          <b>Multiple Clients</b>\r\n                                      </li>\r\n                                      <li>\r\n                                          <b>+</b> Can\r\n                                          <b> Charge Customers</b>\r\n                                      </li>\r\n                                      <li>\r\n                                          <b>+</b> Use in\r\n                                          <b> Commercial Projects</b>\r\n                                      </li>\r\n                                      <li>\r\n                                          <b>+</b> Use in\r\n                                          <b> SaaS Projects</b>\r\n                                      </li>\r\n                                  </ul>\r\n                                  <a href=\"https://www.creative-tim.com/buy/now-ui-kit-pro-angular?license=2\" class=\"btn btn-primary btn-round\">\r\n                                      Buy Now!\r\n                                  </a>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"text-center col-md-8 ml-auto mr-auto\">\r\n                  <h3>Thank you for supporting us!</h3>\r\n              </div>\r\n              <div class=\"text-center col-md-8 ml-auto mr-auto\">\r\n                  <!-- <a href=\"#pablo\" class=\"btn btn-icon btn-lg btn-round btn-twitter twitter-sharrre sharrre\" placement=\"top\" ngbTooltip=\"Tweet!\">\r\n                      <i class=\"fa fa-twitter\"></i>\r\n                  </a>\r\n                  <a href=\"#pablo\" class=\"btn btn-lg btn-round btn-icon btn-facebook facebook-sharrre sharrre\" placement=\"top\" ngbTooltip=\"Share!\">\r\n                      <i class=\"fa fa-facebook-square\"></i>\r\n                  </a>\r\n                  <a href=\"#pablo\" class=\"btn btn-lg btn-round btn-icon btn-linkedin linkedin-sharrre sharrre\" placement=\"top\" ngbTooltip=\"Share!\">\r\n                      <i class=\"fa fa-linkedin\"></i>\r\n                  </a> -->\r\n                  <a href=\"https://github.com/creativetimofficial/now-ui-kit-pro-angular\" class=\"btn btn-lg btn-round btn-icon btn-github\" placement=\"top\" ngbTooltip=\"Star on Github\">\r\n                      <i class=\"fa fa-github\"></i>\r\n                  </a>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <footer class=\"footer \" data-background-color=\"black\">\r\n      <div class=\"container\">\r\n          <nav>\r\n              <ul>\r\n                  <li>\r\n                      <a href=\"https://www.creative-tim.com\">\r\n                          Creative Tim\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"https://www.creative-tim.com/about-us\">\r\n                          About Us\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"http://blog.creative-tim.com\">\r\n                          Blog\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"https://www.creative-tim.com/license\">\r\n                          License\r\n                      </a>\r\n                  </li>\r\n              </ul>\r\n          </nav>\r\n          <div class=\"copyright\">\r\n              &copy;\r\n              {{date | date: 'yyyy'}}, Designed by\r\n              <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\r\n              <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\r\n          </div>\r\n      </div>\r\n  </footer>\r\n</div>\r\n");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Abid Loqmen\Desktop\NGforce\thesis\src\main.ts */"zUnb");


/***/ }),

/***/ "0+j/":
/*!******************************************************!*\
  !*** ./src/app/shared/navbar2/navbar2.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "0R2i":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/notificationuser/notificationuser.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar3></app-navbar3>\r\n<div class=\"wrapper\">\r\n    <div class=\"page-header page-header-small\" filter-color=\"orange\">\r\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\" style=\"background-image: url('assets/img/project5.jpg') ;\">\r\n        </div>\r\n        <div class=\"content-center\">\r\n            <div class=\"photo-container phot\">\r\n               \r\n           \r\n             </div>\r\n        \r\n    </div>\r\n    </div>\r\n    <div class=\"section\">\r\n        <h3 class=\"title\">NOTIFICATIONS</h3>\r\n        <div class=\"container\" *ngFor=\"let msg of messages\">\r\n            \r\n            <h2 class=\"description text-center\">{{msg.message}}</h2>\r\n\r\n</div>\r\n\r\n</div>\r\n</div>\r\n");

/***/ }),

/***/ "18Co":
/*!*****************************************************!*\
  !*** ./src/app/views/signup/signup-u.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAtdS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "1GAx":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/elements/modal/modal.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button class=\"btn btn-primary text-margin\" (click)=\"open(classic,'' , '')\">\r\n    <i class=\"now-ui-icons files_single-copy-04\"></i> Classic\r\n</button>\r\n<ng-template #classic let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header justify-content-center\">\r\n        <button type=\"button\" class=\"close\" (click)=\"d('Cross click')\">\r\n            <i class=\"now-ui-icons ui-1_simple-remove\"></i>\r\n        </button>\r\n        <h4 class=\"title title-up\">Modal title</h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.\r\n        </p>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\">Nice Button</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click')\">Close</button>\r\n    </div>\r\n</ng-template>\r\n\r\n<button class=\"btn btn-primary text-margin\" (click)=\"open(modal_mini, 'modal_mini', 'sm')\">\r\n    <i class=\"now-ui-icons media-1_button-power\"></i> Launch Modal Mini\r\n</button>\r\n<ng-template #modal_mini let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header justify-content-center\">\r\n      <div class=\"modal-profile\">\r\n          <i class=\"now-ui-icons users_circle-08\"></i>\r\n      </div>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n      <p>Always have an access to your profile</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-link btn-neutral\">Back</button>\r\n      <button type=\"button\" class=\"btn btn-link btn-neutral\" (click)=\"c('Close click')\">Close</button>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<button class=\"btn btn-primary text-margin\" (click)=\"open(Notice, '', '')\">\r\n    <i class=\"now-ui-icons travel_info\"></i> Notice\r\n</button>\r\n<ng-template #Notice let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n      <button type=\"button\" class=\"close\" (click)=\"d('Cross click')\">\r\n          <i class=\"now-ui-icons ui-1_simple-remove\"></i>\r\n      </button>\r\n      <h5 class=\"modal-title\" id=\"myModalLabel\">How Do You Become an Affiliate?</h5>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n      <div class=\"instruction\">\r\n          <div class=\"row\">\r\n              <div class=\"col-md-8\">\r\n                  <strong>1. Register</strong>\r\n                  <p class=\"description\">The first step is to create an account at\r\n                      <a href=\"https://www.creative-tim.com/\">Creative Tim</a>. You can choose a social network or go for the classic version, whatever works best for you.</p>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                  <div class=\"picture\">\r\n                      <img src=\"assets/img/pricing1.jpg\" alt=\"Thumbnail Image\" class=\"rounded img-raised\">\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"instruction\">\r\n          <div class=\"row\">\r\n              <div class=\"col-md-8\">\r\n                  <strong>2. Apply</strong>\r\n                  <p class=\"description\">The first step is to create an account at\r\n                      <a href=\"https://www.creative-tim.com/\">Creative Tim</a>. You can choose a social network or go for the classic version, whatever works best for you.</p>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                  <div class=\"picture\">\r\n                      <img src=\"assets/img/project9.jpg\" alt=\"Thumbnail Image\" class=\"rounded img-raised\">\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <p>If you have more questions, don't hesitate to contact us or send us a tweet @creativetim. We're here to help!</p>\r\n  </div>\r\n  <div class=\"modal-footer justify-content-center\">\r\n      <button type=\"button\" class=\"btn btn-info btn-round\"(click)=\"c('Close click')\">Sounds good!</button>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<button class=\"btn btn-primary text-margin\" (click)=\"open(Login, 'Login', 'md')\">\r\n    <i class=\"now-ui-icons users_single-02\"></i> Login Modal\r\n</button>\r\n<ng-template #Login let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"card card-login card-plain\">\r\n      <div class=\"modal-header justify-content-center\">\r\n          <button type=\"button\" class=\"close\" (click)=\"d('Cross click')\">\r\n              <i class=\"now-ui-icons ui-1_simple-remove\"></i>\r\n          </button>\r\n          <div class=\"header header-primary text-center\">\r\n              <div class=\"logo-container\">\r\n                  <img src=\"assets/img/now-logo.png\" alt=\"\">\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n          <form class=\"form\" method=\"\" action=\"\">\r\n              <div class=\"card-content\">\r\n                  <div class=\"input-group form-group-no-border input-lg\">\r\n                    <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\"><i class=\"now-ui-icons users_circle-08\"></i></span>\r\n                    </div>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\">\r\n                  </div>\r\n                  <div class=\"input-group form-group-no-border input-lg\">\r\n                    <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\">  <i class=\"now-ui-icons ui-1_lock-circle-open\"></i></span>\r\n                    </div>\r\n                      <input type=\"password\" placeholder=\"Password...\" class=\"form-control\">\r\n                  </div>\r\n              </div>\r\n          </form>\r\n      </div>\r\n      <div class=\"modal-footer text-center\">\r\n          <a href=\"#getstart\" class=\"btn btn-neutral btn-round btn-lg btn-block\">Get Started</a>\r\n      </div>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "1Gpg":
/*!****************************************************!*\
  !*** ./src/app/views/searchc/searchc.component.ts ***!
  \****************************************************/
/*! exports provided: SearchcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchcComponent", function() { return SearchcComponent; });
/* harmony import */ var _raw_loader_searchc_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./searchc.component.html */ "qHR/");
/* harmony import */ var _searchc_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchc.component.css */ "nU5y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rellax */ "HbP6");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _service_joboffer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/joboffer.service */ "YaTt");
/* harmony import */ var _service_follows_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/follows.service */ "Wdzh");
/* harmony import */ var _service_websocket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/websocket.service */ "7nMs");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchcComponent = /** @class */ (function () {
    function SearchcComponent(jobservice, followservice, websocket) {
        this.jobservice = jobservice;
        this.followservice = followservice;
        this.websocket = websocket;
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.dropdownList1 = [];
        this.selectedItems1 = [];
        this.dropdownSettings1 = {};
        this.token = localStorage.getItem("companyid");
        this.data = new Date();
        this.addfavo = [];
    }
    SearchcComponent.prototype.ngOnInit = function () {
        var _this = this;
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_3__('.rellax-header');
        // var rellaxText = new Rellax('.rellax-text');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('about-us');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        this.dropdownList = [
            { "id": 1, "itemName": "I'm a Designer" },
            { "id": 2, "itemName": "I'm a Developer" },
            { "id": 3, "itemName": "I'm a Hero" }
        ];
        this.selectedItems = [
            { "id": 2, "itemName": "I'm a Developer" }
        ];
        this.dropdownSettings = {
            singleSelection: true,
            text: "Speciality",
            // selectAllText:'Select All',
            // unSelectAllText:'UnSelect All',
            // enableSearchFilter: true,
            classes: "",
            lazyLoading: true,
            maxHeight: 100
        };
        this.jobservice.getallcv().subscribe(function (post) {
            _this.alldatas = post;
            _this.datas = post;
        });
        this.jobservice.decode(this.token).subscribe(function (id) {
            _this.followservice.getfavorite(id.companyid).subscribe(function (get) {
                for (var i = 0; i < _this.datas.length; i++) {
                    var bol = false;
                    for (var j = 0; j < get.length; j++) {
                        if (_this.datas[i].id === get[j].iduser) {
                            _this.addfavo.push(true);
                            bol = true;
                        }
                    }
                    if (!bol) {
                        _this.addfavo.push(false);
                    }
                }
                console.log(_this.addfavo);
            });
        });
    };
    SearchcComponent.prototype.click = function (event) {
        console.log(event.target.innerText);
        this.field = event.target.innerText;
    };
    SearchcComponent.prototype.click1 = function (event) {
        console.log(event.target.innerText);
        this.studylevel = event.target.innerText;
    };
    SearchcComponent.prototype.click2 = function (event) {
        console.log(event.target.innerText);
        this.expyear = event.target.innerText;
    };
    SearchcComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.datas);
        console.log(this.descProfil);
        var obj = {
            descProfil: this.descProfil,
            field: this.field,
            expyear: this.expyear,
            studylevel: this.studylevel
        };
        if (!this.descProfil) {
            delete obj.descProfil;
        }
        if (!this.field) {
            delete obj.field;
        }
        if (!this.expyear) {
            delete obj.expyear;
        }
        if (!this.studylevel) {
            delete obj.studylevel;
        }
        this.jobservice.searchcv(obj).subscribe(function (search) {
            if (search) {
                _this.datas = search;
            }
            else if (!search) {
                _this.datas = _this.alldatas;
            }
            if (_this.descProfil) {
                var result = [];
                for (var i = 0; i < _this.datas.length; i++) {
                    var dat = _this.datas[i].descProfil;
                    if (dat.indexOf(_this.descProfil) === 0) {
                        result.push(_this.datas[i]);
                        console.log(result);
                    }
                }
                if (result) {
                    _this.datas = result;
                }
            }
        });
    };
    SearchcComponent.prototype.send = function (data) {
        var _this = this;
        console.log(data);
        this.jobservice.decode(this.token).subscribe(function (id) {
            var msg = {
                text: "hello user",
                sender: "Company",
                company_id: id.companyid,
                user_id: data.id
            };
            _this.websocket.postMessages(msg).subscribe(function (msg) {
                console.log(msg);
            });
        });
    };
    SearchcComponent.prototype.favorite = function (data) {
        var _this = this;
        for (var i = 0; i < this.datas.length; i++) {
            if (this.datas[i].id === data.id) {
                this.addfavo[i] = !this.addfavo[i];
            }
        }
        this.jobservice.decode(this.token).subscribe(function (id) {
            var obj = {
                idcompany: id.companyid,
                iduser: data.id,
                name: data.name,
                title: data.descProfil,
                description: data.ProfExp
            };
            console.log(obj);
            _this.followservice.createfavorite(obj).subscribe(function (create) { return console.log(create); });
        });
    };
    SearchcComponent.prototype.delete = function (data) {
        for (var i = 0; i < this.datas.length; i++) {
            if (this.datas[i].id === data.id) {
                this.addfavo[i] = !this.addfavo[i];
            }
        }
        this.followservice.deletefavorite(data.id).subscribe(function (del) { return console.log(del); });
    };
    SearchcComponent.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    SearchcComponent.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    SearchcComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    SearchcComponent.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    SearchcComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('about-us');
        var navbar = document.getElementsByTagName('nav')[0];
        body.classList.remove('navbar-transparent');
    };
    SearchcComponent.ctorParameters = function () { return [
        { type: _service_joboffer_service__WEBPACK_IMPORTED_MODULE_4__["JobofferService"] },
        { type: _service_follows_service__WEBPACK_IMPORTED_MODULE_5__["followsService"] },
        { type: _service_websocket_service__WEBPACK_IMPORTED_MODULE_6__["WebsocketService"] }
    ]; };
    SearchcComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-searchc',
            template: _raw_loader_searchc_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            providers: [_service_websocket_service__WEBPACK_IMPORTED_MODULE_6__["WebsocketService"]],
            styles: [_searchc_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_service_joboffer_service__WEBPACK_IMPORTED_MODULE_4__["JobofferService"], _service_follows_service__WEBPACK_IMPORTED_MODULE_5__["followsService"], _service_websocket_service__WEBPACK_IMPORTED_MODULE_6__["WebsocketService"]])
    ], SearchcComponent);
    return SearchcComponent;
}());



/***/ }),

/***/ "22lU":
/*!**********************************************!*\
  !*** ./src/app/views/post/post.component.ts ***!
  \**********************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _raw_loader_post_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./post.component.html */ "Ar4q");
/* harmony import */ var _post_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post.component.css */ "6iVO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rellax */ "HbP6");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_service_joboffer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/joboffer.service */ "YaTt");
/* harmony import */ var app_service_follows_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/follows.service */ "Wdzh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PostComponent = /** @class */ (function () {
    function PostComponent(router, jobservice, followservice) {
        this.router = router;
        this.jobservice = jobservice;
        this.followservice = followservice;
        this.zoom = 14;
        this.lat = 44.445248;
        this.lng = 26.099672;
        this.styles = [
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
            },
            {
                featureType: "landscape",
                elementType: "geometry",
                stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry.fill",
                stylers: [{ color: "#ffffff" }, { lightness: 17 }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }],
            },
            {
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [{ color: "#ffffff" }, { lightness: 18 }],
            },
            {
                featureType: "road.local",
                elementType: "geometry",
                stylers: [{ color: "#ffffff" }, { lightness: 16 }],
            },
            {
                featureType: "poi",
                elementType: "geometry",
                stylers: [{ color: "#f5f5f5" }, { lightness: 21 }],
            },
            {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{ color: "#dedede" }, { lightness: 21 }],
            },
            {
                elementType: "labels.text.stroke",
                stylers: [{ visibility: "on" }, { color: "#ffffff" }, { lightness: 16 }],
            },
            {
                elementType: "labels.text.fill",
                stylers: [{ saturation: 36 }, { color: "#333333" }, { lightness: 40 }],
            },
            { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
            {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{ color: "#f2f2f2" }, { lightness: 19 }],
            },
            {
                featureType: "administrative",
                elementType: "geometry.fill",
                stylers: [{ color: "#fefefe" }, { lightness: 20 }],
            },
            {
                featureType: "administrative",
                elementType: "geometry.stroke",
                stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }],
            },
        ];
        this.data = new Date();
        this.dropdownList = [
            { id: 1, itemName: "CDI" },
            { id: 2, itemName: "CDD" },
            { id: 3, itemName: "Traineeship" },
            { id: 4, itemName: "Freelance" },
            { id: 5, itemName: "Alernation" },
        ];
        this.selectedItems = [];
        this.dropdownList1 = [
            { id: 1, itemName: "Less than 1 year" },
            { id: 2, itemName: "Between 1 and 2 years" },
            { id: 3, itemName: "Between 2 and 5 years" },
            { id: 4, itemName: "More than 5 years" },
        ];
        this.selectedItems1 = [];
        this.dropdownList2 = [
            { id: 1, itemName: "Less than 600DT " },
            { id: 2, itemName: "Between 600DT and 1200DT" },
            { id: 3, itemName: "Between 1200DT and 1500DT" },
            { id: 4, itemName: "More than 1500DT" },
        ];
        this.selectedItems2 = [];
        this.token = localStorage.getItem("companyid");
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_7___default()('http://localhost:4001');
    }
    PostComponent.prototype.click = function (event) {
        console.log(event.itemName);
        this.typeOfContract = event.itemName;
    };
    PostComponent.prototype.click1 = function (event) {
        console.log(event.itemName);
        this.salary = event.itemName;
    };
    PostComponent.prototype.click2 = function (event) {
        console.log(event.itemName);
        this.yearsOfExperience = event.itemName;
    };
    PostComponent.prototype.onSubmit = function () {
        var _this = this;
        this.jobservice.decode(this.token).subscribe(function (id) {
            var obj = {
                company: id.companyid,
                companyName: _this.companyName,
                offerTitle: _this.offerTitle,
                offerDescription: _this.offerDescription,
                typeOfContract: _this.typeOfContract,
                salary: _this.salary,
                yearsOfExperience: _this.yearsOfExperience,
            };
            _this.jobservice.createpostjob(obj).subscribe(function (create) {
                _this.router.navigate(['views/home']);
                console.log(create);
            });
            var obj1 = { message: _this.companyName + " has posted a job for " + _this.offerTitle,
                sender: id.companyid };
            _this.followservice.addnotification(obj1).subscribe(function (add) { return console.log(add); });
        });
    };
    PostComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_3__(".rellax-header");
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("contact-page");
        var navbar = document.getElementsByTagName("nav")[0];
        navbar.classList.add("navbar-transparent");
    };
    PostComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("contact-page");
        var navbar = document.getElementsByTagName("nav")[0];
        navbar.classList.remove("navbar-transparent");
    };
    PostComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: app_service_joboffer_service__WEBPACK_IMPORTED_MODULE_4__["JobofferService"] },
        { type: app_service_follows_service__WEBPACK_IMPORTED_MODULE_5__["followsService"] }
    ]; };
    PostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-post",
            template: _raw_loader_post_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_post_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], app_service_joboffer_service__WEBPACK_IMPORTED_MODULE_4__["JobofferService"], app_service_follows_service__WEBPACK_IMPORTED_MODULE_5__["followsService"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "2yxt":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "OT5N");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var app_app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/app.routing */ "beVS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages/messages.component */ "AsL4");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat.component */ "+XlM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _messages_messages_component__WEBPACK_IMPORTED_MODULE_6__["MessagesComponent"], _chat_component__WEBPACK_IMPORTED_MODULE_7__["ChatComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                app_app_routing__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ]
        })
    ], ChatModule);
    return ChatModule;
}());



/***/ }),

/***/ "3Yx6":
/*!*********************************************************!*\
  !*** ./src/app/views/create-cv/create-cv.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#space {\r\n  margin-bottom: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1jdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImNyZWF0ZS1jdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NwYWNlIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "4omd":
/*!*************************************************************!*\
  !*** ./src/app/elements/navigation/navigation.component.ts ***!
  \*************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _raw_loader_navigation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navigation.component.html */ "zjue");
/* harmony import */ var _navigation_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation.component.scss */ "IP2a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () { };
    NavigationComponent.ctorParameters = function () { return []; };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navigation',
            template: _raw_loader_navigation_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_navigation_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "5Kl1":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar3/navbar3.component.ts ***!
  \*****************************************************/
/*! exports provided: Navbar3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navbar3Component", function() { return Navbar3Component; });
/* harmony import */ var _raw_loader_navbar3_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navbar3.component.html */ "ZS0c");
/* harmony import */ var _navbar3_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar3.component.css */ "Ge1e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Navbar3Component = /** @class */ (function () {
    function Navbar3Component(location, element) {
        this.location = location;
        this.element = element;
        this.sidebarVisible = false;
    }
    Navbar3Component.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    };
    Navbar3Component.prototype.logout = function () {
        localStorage.removeItem("userid");
    };
    Navbar3Component.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    Navbar3Component.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    Navbar3Component.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    Navbar3Component.prototype.isHome = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/home') {
            return true;
        }
        else {
            return false;
        }
    };
    Navbar3Component.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    Navbar3Component.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
    ]; };
    Navbar3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navbar3',
            template: _raw_loader_navbar3_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_navbar3_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]])
    ], Navbar3Component);
    return Navbar3Component;
}());



/***/ }),

/***/ "6Vf9":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar2/navbar2.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg bg-white fixed-top navbar-transparent\" color-on-scroll=\"500\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-translate\">\r\n            <a class=\"navbar-brand\" [routerLink]=\"['/views/home']\" placement=\"bottom\" >\r\n               Home\r\n            </a>\r\n            <a class=\"navbar-brand\" [routerLink]=\"['/views/post']\" placement=\"bottom\" >\r\n                <i class=\"now-ui-icons ui-1_simple-add\"></i>\r\n                POST\r\n             </a>\r\n             <a class=\"navbar-brand\" [routerLink]=\"['/views/searchc']\" placement=\"bottom\" >\r\n                <i class=\"now-ui-icons ui-1_zoom-bold\"></i>\r\n                Search\r\n              </a>\r\n             <a class=\"navbar-brand\" [routerLink]=\"['/views/calendar']\" placement=\"bottom\" >\r\n                <i class=\"now-ui-icons ui-1_calendar-60\"></i>\r\n                Calender\r\n             </a>\r\n             <a class=\"navbar-brand\" [routerLink]=\"['/views/chat']\" placement=\"bottom\" >\r\n                <i class=\"now-ui-icons ui-2_chat-round\"></i>\r\n                Chat\r\n             </a>\r\n            \r\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\r\n                <span class=\"navbar-toggler-bar bar1\"></span>\r\n                <span class=\"navbar-toggler-bar bar2\"></span>\r\n                <span class=\"navbar-toggler-bar bar3\"></span>\r\n            </button>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" data-nav-image=\"assets/img/blurred-image-1.jpg\" data-color=\"orange\">\r\n         <ul class=\"navbar-nav ml-auto\">\r\n         <li  class=\"nav-item\">\r\n            <a class=\"nav-link btn btn-primary\" (click)=\"logout()\" [routerLink]=\"['/views/login']\">\r\n               <p>LOGOUT</p>\r\n               </a>\r\n            </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n");

/***/ }),

/***/ "6iVO":
/*!***********************************************!*\
  !*** ./src/app/views/post/post.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "71yw":
/*!**********************************************************!*\
  !*** ./src/app/presentation/presentation.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVzZW50YXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "7EEV":
/*!*******************************************************************!*\
  !*** ./src/app/elements/footers-areas/footers-areas.component.ts ***!
  \*******************************************************************/
/*! exports provided: FootersAreasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootersAreasComponent", function() { return FootersAreasComponent; });
/* harmony import */ var _raw_loader_footers_areas_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./footers-areas.component.html */ "Edk8");
/* harmony import */ var _footers_areas_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footers-areas.component.scss */ "7rC8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FootersAreasComponent = /** @class */ (function () {
    function FootersAreasComponent() {
        this.data = new Date();
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.dropdownList1 = [];
        this.selectedItems1 = [];
        this.dropdownSettings1 = {};
    }
    FootersAreasComponent.prototype.ngOnInit = function () {
        this.dropdownList = [
            { "id": 1, "itemName": "Bahasa Indonesia" },
            { "id": 2, "itemName": "Bahasa Melayu" },
            { "id": 3, "itemName": "Català" },
            { "id": 4, "itemName": "Dansk" },
            { "id": 5, "itemName": "Deutsch" },
            { "id": 6, "itemName": "English" },
            { "id": 7, "itemName": "Español" },
            { "id": 8, "itemName": "Eλληνικά" },
            { "id": 9, "itemName": "Français" },
            { "id": 10, "itemName": "Italiano" },
            { "id": 11, "itemName": "Magyar" },
            { "id": 12, "itemName": "Nederlands" },
            { "id": 13, "itemName": "Norsk" },
            { "id": 14, "itemName": "Polski" },
            { "id": 15, "itemName": "Português" },
            { "id": 16, "itemName": "Suomi" },
            { "id": 17, "itemName": "Svenska" },
            { "id": 18, "itemName": "Türkçe" },
            { "id": 19, "itemName": "Íslenska" },
            { "id": 20, "itemName": "Čeština" },
            { "id": 21, "itemName": "Русский" },
            { "id": 22, "itemName": "ภาษาไทย" },
            { "id": 23, "itemName": "中文 (简体)" },
            { "id": 24, "itemName": "中文 (繁體)" },
            { "id": 25, "itemName": "日本語" },
            { "id": 26, "itemName": "한국어" }
        ];
        this.selectedItems = [];
        this.dropdownSettings = {
            singleSelection: true,
            text: "Select language",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: ""
        };
        this.dropdownList1 = [
            { "id": 1, "itemName": "ARS" },
            { "id": 2, "itemName": "AUD" },
            { "id": 3, "itemName": "BRL" },
            { "id": 4, "itemName": "CAD" },
            { "id": 5, "itemName": "CHF" },
            { "id": 6, "itemName": "CNY" },
            { "id": 7, "itemName": "CZK" },
            { "id": 8, "itemName": "DKK" },
            { "id": 9, "itemName": "EUR" },
            { "id": 10, "itemName": "GBP" },
            { "id": 11, "itemName": "HKD" },
            { "id": 12, "itemName": "HUF" },
            { "id": 13, "itemName": "IDR" },
            { "id": 14, "itemName": "ILS" },
            { "id": 15, "itemName": "INR" },
            { "id": 16, "itemName": "JPY" },
            { "id": 17, "itemName": "KRW" },
            { "id": 18, "itemName": "MYR" },
            { "id": 19, "itemName": "MXN" },
            { "id": 20, "itemName": "NOK" },
            { "id": 21, "itemName": "NZD" },
            { "id": 22, "itemName": "PHP" },
            { "id": 23, "itemName": "PLN" },
            { "id": 24, "itemName": "RUB" },
            { "id": 25, "itemName": "SEK" },
            { "id": 26, "itemName": "SGD" },
            { "id": 27, "itemName": "TWD" },
            { "id": 28, "itemName": "USD" },
            { "id": 29, "itemName": "VND" },
            { "id": 30, "itemName": "ZAR" }
        ];
        this.selectedItems1 = [];
        this.dropdownSettings1 = {
            singleSelection: true,
            text: "Select currency",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: ""
        };
    };
    FootersAreasComponent.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    FootersAreasComponent.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    FootersAreasComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    FootersAreasComponent.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    FootersAreasComponent.ctorParameters = function () { return []; };
    FootersAreasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-footers-areas',
            template: _raw_loader_footers_areas_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_footers_areas_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], FootersAreasComponent);
    return FootersAreasComponent;
}());



/***/ }),

/***/ "7YjK":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/company/company.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<div class=\"page-header section-image\">\r\n    <div class=\"page-header-image\" style=\"background-image:url('assets/img/bg19.jpg')\"></div>\r\n    <div class=\"content\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4 ml-auto mr-auto\">\r\n                    <div class=\"info info-horizontal\">\r\n                        <div class=\"icon icon-primary\">\r\n                            <i class=\"now-ui-icons media-2_sound-wave\"></i>\r\n                        </div>\r\n                        <div class=\"description\">\r\n                            <h5 class=\"info-title\">Manage your NGFORCE account</h5>\r\n                            <p class=\"description\">\r\n                                Fill your account with as much information as you can; Make your profil interesting.\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"info info-horizontal\">\r\n                        <div class=\"icon icon-primary\">\r\n                            <i class=\"now-ui-icons media-1_button-pause\"></i>\r\n                        </div>\r\n                        <div class=\"description\">\r\n                            <h5 class=\"info-title\">Applying process</h5>\r\n                            <p class=\"description\">\r\n                                choose a position that suits your field of expertise.\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"info info-horizontal\">\r\n                        <div class=\"icon icon-info\">\r\n                            <i class=\"now-ui-icons users_single-02\"></i>\r\n                        </div>\r\n                        <div class=\"description\">\r\n                            <h5 class=\"info-title\">Iterview</h5>\r\n                            <p class=\"description\">\r\n                                You are provided with a calender to help with the interviews time setting \r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4 mr-auto\">\r\n                    <div class=\"card card-signup\">\r\n                        <div class=\"card-body\">\r\n                            <h4 class=\"card-title text-center\">Register</h4>\r\n                            <div class=\"social text-center\">\r\n                               \r\n                                <h5 class=\"card-description\"> Campany </h5>\r\n                            </div>\r\n                            <form class=\"form\" method=\"\" action=\"\" (ngSubmit)=\"onSubmit()\" >\r\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                                  <div class=\"input-group-prepend\">\r\n                                      <span class=\"input-group-text\">  <i class=\"now-ui-icons users_circle-08\"></i></span>\r\n                                  </div>\r\n                                    <input type=\"text\" name=\"name\" [(ngModel)]=\"name\" class=\"form-control\" placeholder=\"Name...\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                                </div>\r\n    \r\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                                  <div class=\"input-group-prepend\">\r\n                                      <span class=\"input-group-text\">  <i class=\"now-ui-icons text_caps-small\"></i></span>\r\n                                  </div>\r\n                                    <input type=\"text\" name=\"adress\" [(ngModel)]=\"adress\" placeholder=\"Adress...\" class=\"form-control\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                                </div>\r\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus2===true}\">\r\n                                  <div class=\"input-group-prepend\">\r\n                                      <span class=\"input-group-text\"> <i class=\"now-ui-icons ui-1_email-85\"></i></span>\r\n                                  </div>\r\n                                <input type=\"text\" name=\"phonenumber\" [(ngModel)]=\"phonenumber\" class=\"form-control\" placeholder=\"Phone Number...\" (focus)=\"focus2=true\" (blur)=\"focus2=false\">\r\n                                </div>\r\n\r\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus2===true}\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <span class=\"input-group-text\"> <i class=\"now-ui-icons ui-1_email-85\"></i></span>\r\n                                    </div>\r\n                                  <input type=\"text\" name=\"email\" [(ngModel)]=\"email\" class=\"form-control\" placeholder=\"Your Email...\" (focus)=\"focus2=true\" (blur)=\"focus2=false\">\r\n                                  </div>\r\n                                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus2===true}\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <span class=\"input-group-text\"> <i class=\"now-ui-icons ui-1_email-85\"></i></span>\r\n                                    </div>\r\n                                  <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"Your Password...\" (focus)=\"focus2=true\" (blur)=\"focus2=false\">\r\n                                  </div>\r\n\r\n                                 \r\n                                 \r\n\r\n\r\n                                <!-- If you want to add a checkbox to this form, uncomment this code -->\r\n                                <div class=\"form-check\">\r\n                                    <label class=\"form-check-label\">\r\n                                        <input class=\"form-check-input\" type=\"checkbox\">\r\n                                        <span class=\"form-check-sign\"></span>\r\n                                        I agree to the terms and\r\n                                        <a href=\"#something\">conditions</a>.\r\n                                    </label>\r\n                                </div>\r\n                                <!-- <div class=\"card-footer text-center\">\r\n\r\n\r\n                                </div> -->\r\n                                <input type=\"submit\" value=\"Get started\" class=\"btn btn-primary btn-round btn-lg\">\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n</div>\r\n\r\n\r\n\r\n<div class=\"pricing-2\">\r\n    <div class=\"container\">\r\n        <!-- <div class=\"row\">\r\n            <div class=\"col-md-6 ml-auto mr-auto text-center\">\r\n                <h2 class=\"title\">Pick the best plan for you</h2>\r\n                \r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <div class=\"card card-pricing card-plain\">\r\n                    <div class=\"card-body\">\r\n                        <h6 class=\"category\">BASIC</h6>\r\n                        <h1 class=\"card-title\">\r\n                            <small></small>300 DT</h1>\r\n                        <ul>\r\n                            <li>\r\n                                <b>10 POSTS</b></li>\r\n                            <li>\r\n                                <b>Video & Chat</b></li>\r\n                            <li>\r\n                                <b>Caendar</b></li>\r\n                            <li>\r\n                                <b>Unlimited</b> Candidats</li>\r\n                        </ul>\r\n                        <a href=\"#pablo\" class=\"btn btn-primary btn-round\" (click)=\"onSubmitPayment()\">\r\n                            Pay Now\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"card card-pricing card-background card-raised\" style=\"background-image: url('assets/img/pricing2.jpg')\">\r\n                    <div class=\"card-body\">\r\n                        <h6 class=\"category text-info\">PREMIUM</h6>\r\n                        <h1 class=\"card-title\">\r\n                            <small></small>1200 DT</h1>\r\n                        <ul>\r\n                            <li>\r\n                                <b>50 POSTS</b> </li>\r\n                            <li>\r\n                                <b>Video & Chat</b>  </li>\r\n                            <li>\r\n                                <b>Calendar</b> </li>\r\n                            <li>\r\n                                <b>Unlimited Candidats</b> </li>\r\n                        </ul>\r\n                        <a href=\"#pablo\" class=\"btn btn-neutral btn-round\" (click)=\"onSubmitPayment()\">\r\n                            Pay Now\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"card card-pricing card-plain\">\r\n                    <div class=\"card-body\">\r\n                        <h6 class=\"category\">PRO</h6>\r\n                        <h1 class=\"card-title\">\r\n                            <small></small>500 DT</h1>\r\n                        <ul>\r\n                            <li>\r\n                                <b>30 POSTS</b></li>\r\n                            <li>\r\n                                <b>Video & Chat</b> </li>\r\n                            <li>\r\n                                <b>Calendar</b> </li>\r\n                            <li>\r\n                                <b>Unlimited Candidats</b> </li>\r\n                        </ul>\r\n                        <a class=\"btn btn-primary btn-round\" (click)=\"onSubmitPayment()\">\r\n                            Pay Now\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div> -->\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "7nMs":
/*!**********************************************!*\
  !*** ./src/app/service/websocket.service.ts ***!
  \**********************************************/
/*! exports provided: WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebsocketService = /** @class */ (function () {
    function WebsocketService(http) {
        this.http = http;
        this.apiUrl = "/messages";
    }
    WebsocketService.prototype.postMessages = function (option) {
        return this.http.post(this.apiUrl, option);
    };
    WebsocketService.prototype.getMessages = function (option) {
        return this.http.get(this.apiUrl, option);
    };
    WebsocketService.prototype.getConversationsUser = function (option) {
        return this.http.get(this.apiUrl + ("/conversations/user/" + option), option);
    };
    WebsocketService.prototype.getConversationsCompany = function (option) {
        return this.http.get(this.apiUrl + ("/conversations/company/" + option), option);
    };
    WebsocketService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    WebsocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WebsocketService);
    return WebsocketService;
}());



/***/ }),

/***/ "7rC8":
/*!*********************************************************************!*\
  !*** ./src/app/elements/footers-areas/footers-areas.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXJzLWFyZWFzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "7um0":
/*!*****************************************************************!*\
  !*** ./src/app/elements/notification/notification.component.ts ***!
  \*****************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _raw_loader_notification_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./notification.component.html */ "pXMq");
/* harmony import */ var _notification_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.component.scss */ "MU6a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: 'success',
            strong: 'Well done!',
            message: 'You successfully read this important alert message.',
            icon: 'ui-2_like'
        }, {
            id: 2,
            strong: 'Heads up!',
            type: 'info',
            message: 'This is an info alert',
            icon: 'travel_info'
        }, {
            id: 3,
            type: 'warning',
            strong: 'Warning!',
            message: 'This is a warning alert',
            icon: 'ui-1_bell-53'
        }, {
            id: 4,
            type: 'danger',
            strong: 'Oh snap!',
            message: 'This is a danger alert',
            icon: 'objects_support-17'
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    NotificationComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    NotificationComponent.ctorParameters = function () { return []; };
    NotificationComponent.propDecorators = {
        alerts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-notification',
            template: _raw_loader_notification_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_notification_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "AN84":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/landing/landing.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<div class=\"wrapper\">\r\n    <div class=\"page-header page-header-small\">\r\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\" style=\"background-image: url('assets/img/bg27.jpg');\">\r\n        </div>\r\n        <div class=\"content-center\">\r\n            <h1 class=\"title\">NEW GENERATION</h1>\r\n        </div>\r\n    </div>\r\n    <div class=\"section section-about-us\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\r\n                    <h2 class=\"title\">Who we are?</h2>\r\n                    <h5 class=\"description\">we are an online recruting  company we make an easy and speed dating between recruter and candidate  </h5>\r\n                </div>\r\n            </div>\r\n            <div class=\"separator separator-primary\"></div>\r\n            <div class=\"section-story-overview\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <!-- First image on the left side -->\r\n                        <div class=\"image-container image-left\" style=\"background-image: url('assets/img/bg38.jpg')\">\r\n                            <p class=\"blockquote blockquote-primary\">\"It's recruting time ! Same benefits, half the efforts!\"\r\n                                <br>\r\n                                <br>\r\n                                <small>-NG.FORCE</small>\r\n                            </p>\r\n                        </div>\r\n                        <!-- Second image on the left side of the article -->\r\n                        <div class=\"image-container image-left-bottom\" style=\"background-image: url('assets/img/bg24.jpg')\"></div>\r\n                    </div>\r\n                    <div class=\"col-md-5\">\r\n                        <!-- First image on the right side, above the article -->\r\n                        <div class=\"image-container image-right\" style=\"background-image: url('assets/img/bg39.jpg')\"></div>\r\n                        <h3>Are you looking for the newest and the fastest recruting records ?  </h3>\r\n                        <p>The recrutment approach is changing dynamically you no more need to waste much timer in order to hire or get hired. \r\n                        </p>\r\n                        <p>\r\n                           Our application will help you with the availability of a job and a candidate\r\n                        </p>\r\n                        <p>\r\n                            Our platform will help you adapt and recruit more talented engineers,faster and at scale-turning a new challenge into one of your greatest opportunities. \r\n                        </p>\r\n                    \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"testimonials-1 section-image\" style=\"background-image: url('assets/img/bg19.jpg')\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n</div>\r\n                  \r\n");

/***/ }),

/***/ "Ar4q":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/post/post.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar2></app-navbar2>\r\n<div class=\"wrapper\">\r\n    <div class=\"page-header page-header-small\">\r\n      <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\"\r\n        style=\"background-image:  url('assets/img/bg24.jpg');\">\r\n      </div>\r\n    </div>\r\n    <div class=\"main\">\r\n      <div class=\"contact-content\">\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12 ml-auto mr-auto\">\r\n              <h2 class=\"title\">Post a job </h2>\r\n              <p class=\"description\">Candidate will be able to see your Offer \r\n                <br>\r\n                <br>\r\n              </p>\r\n           <form class=\"form\" method=\"\" action=\"\"  (ngSubmit)=\"onSubmit()\">\r\n  \r\n            <div class=\"row\" id=\"space\">\r\n               <div class=\"col-md-6\">\r\n                  <label>Company Name</label>\r\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"now-ui-icons ui-1_email-85\"></i></span>\r\n                    </div>\r\n                    <input type=\"text\"  name=\"companyName\" [(ngModel)]=\"companyName\" class=\"form-control\" placeholder=\"Company Name...\" (focus)=\"focus1=true\"\r\n                      (blur)=\"focus1=false\">\r\n                </div>\r\n               </div>\r\n  \r\n              \r\n              <div class=\"col-md-6\">\r\n              <label>Offer Title</label>\r\n              <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus2===true}\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"> <i class=\"now-ui-icons tech_mobile\"></i></span>\r\n                </div>\r\n                <input type=\"text\" name=\"offerTitle\" [(ngModel)]=\"offerTitle\" placeholder=\"OfferTitle Here...\" class=\"form-control\" (focus)=\"focus2=true\"\r\n                  (blur)=\"focus2=false\">\r\n              </div>\r\n            </div> \r\n           </div>\r\n  \r\n           \r\n  \r\n  \r\n              <div class=\"form-group\" id=\"space\">\r\n                <label>Offer description</label>\r\n                <input type=\"text\" name=\"offerDescription\" [(ngModel)]=\"offerDescription\" placeholder=\"Offer description...\" class=\"form-control\" (focus)=\"focus2=true\"\r\n                (blur)=\"focus2=false\">\r\n              </div>\r\n              \r\n            \r\n                <div class=\"row\" id=\"space\">\r\n                <div class=\"col-lg-6 col-md-8 col-sm-5\">\r\n                  <app-multiselect\r\n                  [single]=\"true\"\r\n                  [text]=\"'Type of contract'\"\r\n                  [dropdownList]=\"dropdownList\"\r\n                  [selectedItems]=\"selectedItems\"\r\n                  (itemSelect)=\"click($event)\"\r\n                  (itemDeSelect)=\"click($event)\"\r\n                  (selectAll)=\"console.log($event)\"\r\n                  (deSelectAll)=\"console.log($event)\"\r\n                  ></app-multiselect>\r\n                </div> \r\n                </div>\r\n  \r\n                <div class=\"row\" id=\"space\">\r\n                  <div class=\"col-lg-6 col-md-8 col-sm-5\">\r\n                    <app-multiselect\r\n                    [single]=\"true\"\r\n                    [text]=\"'Salary'\"\r\n                    [dropdownList]=\"dropdownList2\"\r\n                    [selectedItems]=\"selectedItems2\"\r\n                    (itemSelect)=\"click1($event)\"\r\n                    (itemDeSelect)=\"click1($event)\"\r\n                    (selectAll)=\"test($event)\"\r\n                    (deSelectAll)=\"test($event)\"\r\n                    ></app-multiselect>\r\n                  </div>\r\n                </div>\r\n  \r\n                <div class=\"row\" id=\"space\">\r\n                <div class=\"col-lg-6 col-md-8 col-sm-5\">\r\n                  <app-multiselect\r\n                  [single]=\"true\"\r\n                  [text]=\"'Years of experience'\"\r\n                  [dropdownList]=\"dropdownList1\"\r\n                  [selectedItems]=\"selectedItems1\"\r\n                  (itemSelect)=\"click2($event)\"\r\n                  (itemDeSelect)=\"click2($event)\"\r\n                  (selectAll)=\"test($event)\"\r\n                  (deSelectAll)=\"test($event)\"\r\n                  ></app-multiselect>\r\n                </div>\r\n              </div>\r\n  \r\n              \r\n  \r\n  \r\n              <div class=\"submit text-center\">\r\n                <input type=\"submit\" class=\"btn btn-primary btn-raised btn-round\" value=\"Post\" />\r\n              </div>\r\n            </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n    <footer class=\"footer footer-default \">\r\n      <div class=\"container\">\r\n        <nav>\r\n          <ul>\r\n            <li>\r\n              <a href=\"https://www.creative-tim.com\">\r\n                Creative Tim\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"https://www.creative-tim.com/about-us\">\r\n                About Us\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"http://blog.creative-tim.com\">\r\n                Blog\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"https://www.creative-tim.com/license\">\r\n                License\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </nav>\r\n        <div class=\"copyright\">\r\n          © {{data | date: 'yyyy'}}, Designed by\r\n          <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\r\n          <a href=\"#\" target=\"_blank\">NG.FORCE</a>.\r\n        </div>\r\n      </div>\r\n    </footer>\r\n  </div>");

/***/ }),

/***/ "AsL4":
/*!*****************************************************!*\
  !*** ./src/app/chat/messages/messages.component.ts ***!
  \*****************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _raw_loader_messages_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./messages.component.html */ "vi5p");
/* harmony import */ var _messages_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages.component.css */ "bSW0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_service_websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/websocket.service */ "7nMs");
/* harmony import */ var app_service_joboffer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/joboffer.service */ "YaTt");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import {moment} from "moment"
var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(websocket, jobof) {
        this.websocket = websocket;
        this.jobof = jobof;
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.message = '';
        this.token = localStorage.getItem("userid");
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5___default()('http://localhost:4001');
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!localStorage.getItem("userid")) {
            this.token = localStorage.getItem("companyid");
        }
        this.jobof.decode(this.token).subscribe(function (id) {
            var idjob = id.userid;
            if (!id.userid) {
                idjob = id.companyid;
            }
            _this.socket.on("message", function (msg) {
                if (idjob === msg.company_id || idjob === msg.user_id) {
                    _this.conversation.messages.unshift(msg);
                    console.log(_this.conversation.messages);
                }
            });
        });
    };
    MessagesComponent.prototype.ngOnChanges = function () {
        console.log(this.conversation._id._id);
    };
    MessagesComponent.prototype.submitMessage = function (event) {
        var _this = this;
        console.log(this.conversation);
        this.jobof.decode(this.token).subscribe(function (id) {
            if (!localStorage.getItem("userid")) {
                _this.sender = "Company";
                _this.company_id = id.companyid;
                _this.user_id = _this.conversation._id._id;
            }
            else {
                _this.sender = "User";
                _this.user_id = id.userid;
                _this.company_id = _this.conversation._id._id;
            }
            var value = event.target.value.trim();
            var msg = {
                text: value,
                sender: _this.sender,
                company_id: _this.company_id,
                user_id: _this.user_id
            };
            _this.websocket.postMessages(msg).subscribe(function (msg) {
                console.log(msg);
            });
            event.target.value = "";
        });
    };
    MessagesComponent.prototype.emojiClicked = function (event) {
        this.message += event.emoji.native;
    };
    MessagesComponent.ctorParameters = function () { return [
        { type: app_service_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"] },
        { type: app_service_joboffer_service__WEBPACK_IMPORTED_MODULE_4__["JobofferService"] }
    ]; };
    MessagesComponent.propDecorators = {
        conversation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        onSubmit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-messages',
            template: _raw_loader_messages_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_messages_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_service_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"], app_service_joboffer_service__WEBPACK_IMPORTED_MODULE_4__["JobofferService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "C9vp":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/success-url/success-url.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let alert of alerts\">\r\n  <ngb-alert [type]=\"alert.type\"  [dismissible]=\"false\" >\r\n      <div class=\"container\">\r\n          <div class=\"alert-wrapper\">\r\n              <button type=\"button\" name=\"button\" class=\"close\" (click)=\"closeAlert(alert)\">\r\n                <span aria-hidden=\"true\">\r\n                    <i class=\"now-ui-icons ui-1_simple-remove\"></i>\r\n                </span>\r\n              </button>\r\n              <div class=\"message\">\r\n                  <ng-container *ngIf=\"alert.icon\">\r\n                    <div class=\"alert-icon\">\r\n                        <i class=\"now-ui-icons {{alert.icon}}\"></i>\r\n                    </div>\r\n                  </ng-container>\r\n                  <strong>{{alert.strong}} </strong>{{ alert.message }}\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </ngb-alert>\r\n  <button type=\"button\" class=\"btn btn-primary btn-sm\" [routerLink]=\"['/views/home']\">HOME PAGE</button>\r\n</div>\r\n");

/***/ }),

/***/ "CDUZ":
/*!*****************************************************************!*\
  !*** ./src/app/elements/tables-areas/tables-areas.component.ts ***!
  \*****************************************************************/
/*! exports provided: TablesAreasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesAreasComponent", function() { return TablesAreasComponent; });
/* harmony import */ var _raw_loader_tables_areas_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./tables-areas.component.html */ "gyJr");
/* harmony import */ var _tables_areas_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tables-areas.component.scss */ "CShm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TablesAreasComponent = /** @class */ (function () {
    function TablesAreasComponent() {
    }
    TablesAreasComponent.prototype.ngOnInit = function () {
        this.tableData1 = {
            headerRow: ['#', 'Name', 'Job Position', 'Since', 'Salary', 'Actions'],
            dataRows: [
                ['1', 'Andrew Mike', 'Develop', '2013', '99,225', ''],
                ['2', 'John Doe', 'Design', '2012', '89,241', ''],
                ['3', 'Alex Mike', 'Design', '2010', '92,144', 'btn-neutral'],
                ['4', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-neutral'],
                ['5', 'Paul Dickens', 'Communication', '2015', '69,201', 'btn-round'],
                ['6', 'Manuel Rico', 'Manager', '2012', '99,201', 'btn-round']
            ]
        };
        this.tableData2 = {
            headerRow: ['#', 'Product Name', 'Type', 'Qty', 'Price', 'Amount'],
            dataRows: [
                { id: 1, product_name: 'Moleskine Agenda', type: 'Office', qty: 25, price: '49', amount: '1225', check: false },
                { id: 2, product_name: 'Stabilo Pen', type: 'Office', qty: 30, price: '10', amount: '300', check: true },
                { id: 3, product_name: 'A4 Paper Pack', type: 'Office', qty: 50, price: '10.99', amount: '109', check: true },
                { id: 4, product_name: 'Apple iPad', type: 'Meeting', qty: 10, price: '499.00', amount: '4990', check: false },
                { id: 5, product_name: 'Apple iPhone', type: 'Communication', qty: 10, price: '599.00', amount: '5990', check: false }
            ]
        };
        this.tableData3 = {
            headerRow: ['', '', 'Product', 'Color', 'Size', 'Price', 'QTY', 'Amount'],
            dataRows: [
                ['saint-laurent.jpg', '	Suede Biker Jacket', 'by Saint Laurent', 'Black', 'M', '3390', '1', '3390'],
                ['balmain.jpg', '	Jersey T-Shirt', 'by Balmain', 'Black', 'M', '499', '2', '998'],
                ['prada.jpg', 'Slim-Fit Swim Short', 'by Prada', 'Red', 'M', '200', '1', '200']
            ]
        };
    };
    TablesAreasComponent.prototype.getTotal1 = function () {
        var total = 0;
        for (var i = 0; i < this.tableData2.dataRows.length; i++) {
            var integer = parseInt(this.tableData2.dataRows[i].amount);
            total += integer;
        }
        return total;
    };
    ;
    TablesAreasComponent.prototype.getTotal2 = function () {
        var total = 0;
        for (var i = 0; i < this.tableData3.dataRows.length; i++) {
            var integer = parseInt(this.tableData3.dataRows[i][7]);
            total += integer;
        }
        return total;
    };
    ;
    TablesAreasComponent.prototype.showElements = function () {
        for (var i = 0; i < this.tableData3.dataRows.length; i++) {
            console.log(this.tableData3.dataRows[i][1]);
        }
    };
    TablesAreasComponent.ctorParameters = function () { return []; };
    TablesAreasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-tables-areas',
            template: _raw_loader_tables_areas_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_tables_areas_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], TablesAreasComponent);
    return TablesAreasComponent;
}());



/***/ }),

/***/ "CShm":
/*!*******************************************************************!*\
  !*** ./src/app/elements/tables-areas/tables-areas.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsZXMtYXJlYXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "E+Sv":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/calendar/calendar.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar3 *ngIf=\"bolean\"></app-navbar3>\r\n<app-navbar2 *ngIf=\"!bolean\"></app-navbar2>\r\n<div class=\"panel-header\" style=\"background-image: url('assets/img/bg19.jpg')\">\r\n  <div class=\"header text-center\">\r\n    <h2 class=\"title\">           </h2>\r\n    <p class=\"category\">\r\n      <a target=\"_blank\" href=\"https://fullcalendar.io/\">Don't Forget Your Interview </a>\r\n     \r\n     \r\n    </p>\r\n  </div>\r\n</div>\r\n<div class=\"main-content\" style=\"background-image: url('assets/img/bg19.jpg')\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-10 ml-auto mr-auto\">\r\n      <div class=\"card card-calendar\">\r\n        <div class=\"card-body\">\r\n          <div id='calendar'></div>\r\n          <!-- <div id='destination-calendar'></div> -->\r\n          <div *ngFor=\"let cal of bigcalend\">\r\n           <form class=\"form\" method=\"\" action=\"\" (ngSubmit)=\"onSubmit(cal.start,cal._id)\">\r\n            <div class=\"form-group\">\r\n              \r\n              \r\n              \r\n              </div>\r\n             \r\n            <div>{{cal.title}}</div>\r\n            <input class=\"form-control\" type=\"title\" name=\"title\" [(ngModel)]=\"title\" placeholder=\"Event Title\" >\r\n           <div>{{cal.start}}</div>\r\n           <input class=\"form-control\"  type=\"time\" name=\"time\" [(ngModel)]=\"time\" placeholder=\"Time start\" >\r\n           <div>{{cal.color}}</div>\r\n           <select name=\"color\" [(ngModel)]=\"color\"   > <option value=\"red\">Red</option><option value=\"blue\">Blue</option><option value=\"green\">Green</option><option value=\"pink\">Pink</option></select>' \r\n           <input type=\"submit\" class=\"btn btn-primary btn-raised btn-round\" value=\"Modify\" />\r\n           <input  (click)=\"delete(cal.start,cal._id)\"class=\"btn btn-primary btn-raised btn-round\" value=\"Delete\" />\r\n          </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "Edk8":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/elements/footers-areas/footers-areas.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section section-footers\" data-background-color=\"gray\">\r\n    <div class=\"container\">\r\n        <div class=\"title\">\r\n            <h3>Footer Areas</h3>\r\n        </div>\r\n    </div>\r\n    <div id=\"footer-areas\">\r\n        <!--     *********    SIMPLE FOOTER WITH SOCIAL AND BRAND     *********      -->\r\n        <footer class=\"footer footer-white\">\r\n            <div class=\"container\">\r\n                <a class=\"footer-brand\" href=\"https://www.creative-tim.com\">Now Ui Kit PRO</a>\r\n                <ul class=\"pull-center\">\r\n                    <li>\r\n                        <a href=\"#pablo\" class=\"nav-link\">\r\n                            Creative Tim\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#pablo\" class=\"nav-link\">\r\n                            About Us\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#pablo\" class=\"nav-link\">\r\n                            Blog\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#pablo\" class=\"nav-link\">\r\n                            Licenses\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n                <ul class=\"social-buttons pull-right\">\r\n                    <li>\r\n                        <a href=\"https://twitter.com/CreativeTim\" target=\"_blank\" class=\"btn btn-icon btn-neutral btn-twitter\">\r\n                            <i class=\"fa fa-twitter\"></i>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"https://www.facebook.com/CreativeTim\" target=\"_blank\" class=\"btn btn-icon btn-neutral btn-dribbble\">\r\n                            <i class=\"fa fa-dribbble\"></i>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"https://www.instagram.com/CreativeTimOfficial\" target=\"_blank\" class=\"btn btn-icon btn-neutral btn-google\">\r\n                            <i class=\"fa fa-google-plus\"></i>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </footer>\r\n        <!--     *********   END SIMPLE FOOTER WITH SOCIAL AND BRAND     *********      -->\r\n        <br />\r\n        <br />\r\n        <!--     *********    SIMPLE FOOTER     *********      -->\r\n        <footer class=\"footer\">\r\n            <div class=\"container\">\r\n                <nav>\r\n                    <ul>\r\n                        <li>\r\n                            <a href=\"https://www.creative-tim.com\" class=\"nav-link\">\r\n                                Creative Tim\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"https://www.creative-tim.com/about-us\" class=\"nav-link\">\r\n                                About Us\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"http://blog.creative-tim.com\" class=\"nav-link\">\r\n                                Blog\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"https://www.creative-tim.com/license\" target=\"_blank\" class=\"nav-link\">\r\n                                License\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </nav>\r\n                <div class=\"copyright\">\r\n                    &copy;\r\n                  {{data | date: 'yyyy'}}, Designed by\r\n                    <a href=\"https://www.invisionapp.com\" target=\"_blank\" class=\"copyright-link\">Invision</a>. Coded by\r\n                    <a href=\"https://www.creative-tim.com\" target=\"_blank\" class=\"copyright-link\">Creative Tim</a>.\r\n                </div>\r\n            </div>\r\n        </footer>\r\n        <!--     *********   END SIMPLE FOOTER     *********      -->\r\n        <br />\r\n        <br />\r\n        <!--     *********    BLACK SIMPLE FOOTER WITH SOCIAL AND BRAND     *********      -->\r\n        <footer class=\"footer\" data-background-color=\"black\">\r\n            <div class=\"container\">\r\n                <a class=\"footer-brand\" href=\"#pablo\">Now Ui Kit PRO</a>\r\n                <ul class=\"pull-center\">\r\n                    <li>\r\n                        <a href=\"#pablo\">\r\n                            Blog\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#pablo\">\r\n                            Presentation\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#pablo\">\r\n                            Discover\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#pablo\">\r\n                            Payment\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#pablo\">\r\n                            Contact Us\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n                <ul class=\"social-buttons pull-right\">\r\n                    <li>\r\n                        <a href=\"https://twitter.com/CreativeTim\" target=\"_blank\" class=\"btn btn-icon btn-link btn-neutral\">\r\n                            <i class=\"fa fa-twitter\"></i>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"https://www.facebook.com/CreativeTim\" target=\"_blank\" class=\"btn btn-icon btn-neutral btn-link\">\r\n                            <i class=\"fa fa-facebook-square\"></i>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"https://www.instagram.com/CreativeTimOfficial\" target=\"_blank\" class=\"btn btn-icon btn-neutral btn-link\">\r\n                            <i class=\"fa fa-instagram\"></i>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </footer>\r\n        <!--     *********   END BLACK SIMPLE FOOTER WITH SOCIAL AND BRAND     *********      -->\r\n        <br/>\r\n        <br/>\r\n        <!--     *********    BIG FOOTER     *********      -->\r\n        <footer class=\"footer footer-big footer-white\">\r\n            <div class=\"container\">\r\n                <div class=\"content\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <h5>About Us</h5>\r\n                            <p>Creative Tim is a startup that creates design tools that make the web development process faster and easier. </p>\r\n                            <p>We love the web and care deeply for how users interact with a digital product. We power businesses and individuals to create better looking web projects around the world. </p>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <h5>Social Feed</h5>\r\n                            <div class=\"social-feed\">\r\n                                <div class=\"feed-line\">\r\n                                    <i class=\"fa fa-twitter\"></i>\r\n                                    <p>How to handle ethical disagreements with your clients.</p>\r\n                                </div>\r\n                                <div class=\"feed-line\">\r\n                                    <i class=\"fa fa-twitter\"></i>\r\n                                    <p>The tangible benefits of designing at 1x pixel density.</p>\r\n                                </div>\r\n                                <div class=\"feed-line\">\r\n                                    <i class=\"fa fa-facebook-square\"></i>\r\n                                    <p>A collection of 25 stunning sites that you can use for inspiration.</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <h5>Instagram Feed</h5>\r\n                            <div class=\"gallery-feed\">\r\n                                <img src=\"assets/img/olivia.jpg\" class=\"img img-raised rounded\" alt=\"\" />\r\n                                <img src=\"assets/img/james.jpg\" class=\"img img-raised rounded\" alt=\"\" />\r\n                                <img src=\"assets/img/michael.jpg\" class=\"img img-raised rounded\" alt=\"\" />\r\n                                <img src=\"assets/img/emily.jpg\" class=\"img img-raised rounded\" alt=\"\" />\r\n                                <img src=\"assets/img/marie.jpg\" class=\"img img-raised rounded\" alt=\"\" />\r\n                                <img src=\"assets/img/usher.jpg\" class=\"img img-raised rounded\" alt=\"\" />\r\n                                <img src=\"assets/img/mike.jpg\" class=\"img img-raised rounded\" alt=\"\" />\r\n                                <img src=\"assets/img/julie.jpg\" class=\"img img-raised rounded\" alt=\"\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <hr />\r\n                <ul class=\"pull-left\">\r\n                    <li>\r\n                        <a href=\"#pablo\">\r\n                            Blog\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#pablo\">\r\n                            Presentation\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#pablo\">\r\n                            Discover\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#pablo\">\r\n                            Payment\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#pablo\">\r\n                            Contact Us\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n                <div class=\"copyright pull-right\">\r\n                    Copyright &copy;\r\n                    {{data | date: 'yyyy'}} Creative Tim All Rights Reserved.\r\n                </div>\r\n            </div>\r\n        </footer>\r\n        <!--     *********   END BIG FOOTER     *********      -->\r\n        <br />\r\n        <br />\r\n        <!--     *********    BIG BlACK FOOTER     *********      -->\r\n        <footer class=\"footer footer-big\" data-background-color=\"black\">\r\n            <div class=\"container\">\r\n                <div class=\"content\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-2\">\r\n                            <h5>About Us</h5>\r\n                            <ul class=\"links-vertical\">\r\n                                <li>\r\n                                    <a href=\"#pablo\" class=\"text-muted\">\r\n                                        Blog\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#pablo\" class=\"text-muted\">\r\n                                        About Us\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#pablo\" class=\"text-muted\">\r\n                                        Presentation\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#pablo\" class=\"text-muted\">\r\n                                        Contact Us\r\n                                    </a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            <h5>Market</h5>\r\n                            <ul class=\"links-vertical\">\r\n                                <li>\r\n                                    <a href=\"#pablo\" class=\"text-muted\">\r\n                                        Sales FAQ\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#pablo\" class=\"text-muted\">\r\n                                        How to Register\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#pablo\" class=\"text-muted\">\r\n                                        Sell Goods\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#pablo\" class=\"text-muted\">\r\n                                        Receive Payment\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#pablo\" class=\"text-muted\">\r\n                                        Transactions Issues\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#pablo\" class=\"text-muted\">\r\n                                        Affiliates Program\r\n                                    </a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <h5>Social Feed</h5>\r\n                            <div class=\"social-feed\">\r\n                                <div class=\"feed-line\">\r\n                                    <i class=\"fa fa-twitter\"></i>\r\n                                    <p>How to handle ethical disagreements with your clients.</p>\r\n                                </div>\r\n                                <div class=\"feed-line\">\r\n                                    <i class=\"fa fa-twitter\"></i>\r\n                                    <p>The tangible benefits of designing at 1x pixel density.</p>\r\n                                </div>\r\n                                <div class=\"feed-line\">\r\n                                    <i class=\"fa fa-facebook-square\"></i>\r\n                                    <p>A collection of 25 stunning sites that you can use for inspiration.</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <h5>Follow Us</h5>\r\n                            <ul class=\"social-buttons\">\r\n                                <li>\r\n                                    <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-twitter btn-round\">\r\n                                        <i class=\"fa fa-twitter\"></i>\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-facebook btn-round\">\r\n                                        <i class=\"fa fa-facebook-square\"></i>\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-dribbble btn-round\">\r\n                                        <i class=\"fa fa-dribbble\"></i>\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-google btn-round\">\r\n                                        <i class=\"fa fa-google-plus\"></i>\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-instagram btn-round\">\r\n                                        <i class=\"fa fa-instagram\"></i>\r\n                                    </a>\r\n                                </li>\r\n                            </ul>\r\n                            <h5>\r\n                                <small>Numbers Don't Lie</small>\r\n                            </h5>\r\n                            <h5>14.521\r\n                                <small class=\"text-muted\">Freelancers</small>\r\n                            </h5>\r\n                            <h5>1.423.183\r\n                                <small class=\"text-muted\">Transactions</small>\r\n                            </h5>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <hr />\r\n                <div class=\"copyright\">\r\n                    Copyright &copy;\r\n                    {{data | date: 'yyyy'}} Creative Tim All Rights Reserved.\r\n                </div>\r\n            </div>\r\n        </footer>\r\n        <!--     *********   END BIG WHITE FOOTER     *********      -->\r\n        <br />\r\n        <br />\r\n        <!--     *********    BIG WHITE FOOTER V2     *********      -->\r\n        <footer class=\"footer footer-white footer-big\">\r\n            <div class=\"container\">\r\n                <div class=\"content\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-3\">\r\n                            <a href=\"#pablo\">\r\n                                <h5>Now Ui Kit PRO</h5>\r\n                            </a>\r\n                            <p>Probably the best UI Kit in the world! We know you've been waiting for it, so don't be shy!</p>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            <h5>About</h5>\r\n                            <ul class=\"links-vertical\">\r\n                                <li>\r\n                                    <a href=\"#pablo\">\r\n                                        Blog\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#pablo\">\r\n                                        About Us\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#pablo\">\r\n                                        Presentation\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#pablo\">\r\n                                        Contact Us\r\n                                    </a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            <h5>Market</h5>\r\n                            <ul class=\"links-vertical\">\r\n                                <li>\r\n                                    <a href=\"#pablo\">\r\n                                        Sales FAQ\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#pablo\">\r\n                                        How to Register\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#pablo\">\r\n                                        Sell Goods\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#pablo\">\r\n                                        Receive Payment\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#pablo\">\r\n                                        Transactions Issues\r\n                                    </a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            <h5>Legal</h5>\r\n                            <ul class=\"links-vertical\">\r\n                                <li>\r\n                                    <a href=\"#pablo\">\r\n                                        Transactions FAQ\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#pablo\">\r\n                                        Terms & Conditions\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#pablo\">\r\n                                        Licenses\r\n                                    </a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <h5>Subscribe to Newsletter</h5>\r\n                            <p>\r\n                                Join our newsletter and get news in your inbox every week! We hate spam too, so no worries about this.\r\n                            </p>\r\n                            <form class=\"form form-newsletter\" method=\"\" action=\"\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"email\" class=\"form-control\" placeholder=\"Your Email...\">\r\n                                </div>\r\n                                <button type=\"button\" class=\"btn btn-primary btn-icon btn-round\" name=\"button\">\r\n                                    <i class=\"now-ui-icons ui-1_email-85\"></i>\r\n                                </button>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <hr />\r\n                <ul class=\"social-buttons\">\r\n                    <li>\r\n                        <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-twitter btn-lg\">\r\n                            <i class=\"fa fa-twitter\"></i>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-facebook btn-lg\">\r\n                            <i class=\"fa fa-facebook-square\"></i>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-dribbble btn-lg\">\r\n                            <i class=\"fa fa-dribbble\"></i>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-google btn-lg\">\r\n                            <i class=\"fa fa-google-plus\"></i>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-youtube btn-lg\">\r\n                            <i class=\"fa fa-youtube-play\"></i>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n                <div class=\"copyright pull-center\">\r\n                    Copyright &copy;\r\n                    {{data | date: 'yyyy'}} Creative Tim All Rights Reserved.\r\n                </div>\r\n            </div>\r\n        </footer>\r\n        <!--     *********   END BIG WHITE FOOTER v2     *********      -->\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "EtQq":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "zRkE");
/* harmony import */ var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.component.scss */ "cruu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    // storage : boolean = false
    function NavbarComponent(location, element) {
        this.location = location;
        this.element = element;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        // if(localStorage.getItem("email")){
        //     this.storage=true
        // }
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.isHome = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/home') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navbar',
            template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "FA27":
/*!*****************************************************!*\
  !*** ./src/app/views/company/company.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wYW55LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "FzHV":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/elements/nucleoicons/nucleoicons.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nucleo-icons-style\">\r\n  <header>\r\n      <h1>Nucleo Outline Web Font v2.9</h1>\r\n      <p>\r\n          <a href=\"https://nucleoapp.com/?ref=1712\">nucleoapp.com</a>\r\n      </p>\r\n  </header>\r\n  <div id=\"cd-nav\">\r\n      <nav>\r\n          <ul id=\"cd-main-nav\">\r\n              <li>\r\n                  <a href=\"#arrows\">Arrows</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#business\">Business &amp; Finance</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#clothes\">Clothes &amp; Accessories</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#design\">Design &amp; Development</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#emoticons\">Emoticons</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#files\">Files &amp; Folders</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#medical\">Healthcare &amp; Medical</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#loaders\">Loaders</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#maps\">Maps &amp; Location</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#media\">Media</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#objects\">Objects</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#school\">School &amp; Education</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#shopping\">Shopping</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#sport\">Sport</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#technology\">Technology</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#text\">Text Editing</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#gestures\">Touch Gestures</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#transportation\">Transportation</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#travel\">Travel</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#interface\">User Interface</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#users\">Users</a>\r\n              </li>\r\n          </ul>\r\n      </nav>\r\n  </div>\r\n  <div id=\"icons-wrapper\">\r\n      <section id=\"arrows\">\r\n          <h2>Arrows</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons arrows-1_cloud-download-93\"></i>\r\n                  <p>arrows-1_cloud-download-93</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons arrows-1_cloud-upload-94\"></i>\r\n                  <p>arrows-1_cloud-upload-94</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons arrows-1_minimal-down\"></i>\r\n                  <p>arrows-1_minimal-down</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons arrows-1_minimal-left\"></i>\r\n                  <p>arrows-1_minimal-left</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons arrows-1_minimal-right\"></i>\r\n                  <p>arrows-1_minimal-right</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons arrows-1_minimal-up\"></i>\r\n                  <p>arrows-1_minimal-up</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons arrows-1_refresh-69\"></i>\r\n                  <p>arrows-1_refresh-69</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons arrows-1_share-66\"></i>\r\n                  <p>arrows-1_share-66</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"business\">\r\n          <h2>Business &amp; Finance</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons business_badge\"></i>\r\n                  <p>business_badge</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons business_bank\"></i>\r\n                  <p>business_bank</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons business_briefcase-24\"></i>\r\n                  <p>business_briefcase-24</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons business_bulb-63\"></i>\r\n                  <p>business_bulb-63</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons business_chart-bar-32\"></i>\r\n                  <p>business_chart-bar-32</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons business_chart-pie-36\"></i>\r\n                  <p>business_chart-pie-36</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons business_globe\"></i>\r\n                  <p>business_globe</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons business_money-coins\"></i>\r\n                  <p>business_money-coins</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"clothes\">\r\n          <h2>Clothes &amp; Accessories</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons clothes_tie-bow\"></i>\r\n                  <p>clothes_tie-bow</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"design\">\r\n          <h2>Design &amp; Development</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons design_app\"></i>\r\n                  <p>design_app</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons design_bullet-list-67\"></i>\r\n                  <p>design_bullet-list-67</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons design_image\"></i>\r\n                  <p>design_image</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons design_palette\"></i>\r\n                  <p>design_palette</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons design_scissors\"></i>\r\n                  <p>design_scissors</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons design_vector\"></i>\r\n                  <p>design_vector</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons design-2_html5\"></i>\r\n                  <p>design-2_html5</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons design-2_ruler-pencil\"></i>\r\n                  <p>design-2_ruler-pencil</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"emoticons\">\r\n          <h2>Emoticons</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons emoticons_satisfied\"></i>\r\n                  <p>emoticons_satisfied</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"files\">\r\n          <h2>Files &amp; Folders</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons files_box\"></i>\r\n                  <p>files_box</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons files_paper\"></i>\r\n                  <p>files_paper</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons files_single-copy-04\"></i>\r\n                  <p>files_single-copy-04</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"medical\">\r\n          <h2>Healthcare &amp; Medical</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons health_ambulance\"></i>\r\n                  <p>health_ambulance</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"loaders\">\r\n          <h2>Loaders</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons loader_gear spin\"></i>\r\n                  <p>loader_gear</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons loader_refresh spin\"></i>\r\n                  <p>loader_refresh</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"maps\">\r\n          <h2>Maps &amp; Location</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons location_bookmark\"></i>\r\n                  <p>location_bookmark</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons location_compass-05\"></i>\r\n                  <p>location_compass-05</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons location_map-big\"></i>\r\n                  <p>location_map-big</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons location_pin\"></i>\r\n                  <p>location_pin</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons location_world\"></i>\r\n                  <p>location_world</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"media\">\r\n          <h2>Media</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons media-1_album\"></i>\r\n                  <p>media-1_album</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons media-1_button-pause\"></i>\r\n                  <p>media-1_button-pause</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons media-1_button-play\"></i>\r\n                  <p>media-1_button-play</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons media-1_button-power\"></i>\r\n                  <p>media-1_button-power</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons media-1_camera-compact\"></i>\r\n                  <p>media-1_camera-compact</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons media-2_note-03\"></i>\r\n                  <p>media-2_note-03</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons media-2_sound-wave\"></i>\r\n                  <p>media-2_sound-wave</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"objects\">\r\n          <h2>Objects</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons objects_diamond\"></i>\r\n                  <p>objects_diamond</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons objects_globe\"></i>\r\n                  <p>objects_globe</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons objects_key-25\"></i>\r\n                  <p>objects_key-25</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons objects_planet\"></i>\r\n                  <p>objects_planet</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons objects_spaceship\"></i>\r\n                  <p>objects_spaceship</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons objects_support-17\"></i>\r\n                  <p>objects_support-17</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons objects_umbrella-13\"></i>\r\n                  <p>objects_umbrella-13</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"school\">\r\n          <h2>School &amp; Education</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons education_agenda-bookmark\"></i>\r\n                  <p>education_agenda-bookmark</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons education_atom\"></i>\r\n                  <p>education_atom</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons education_glasses\"></i>\r\n                  <p>education_glasses</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons education_hat\"></i>\r\n                  <p>education_hat</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons education_paper\"></i>\r\n                  <p>education_paper</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"shopping\">\r\n          <h2>Shopping</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons shopping_bag-16\"></i>\r\n                  <p>shopping_bag-16</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons shopping_basket\"></i>\r\n                  <p>shopping_basket</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons shopping_box\"></i>\r\n                  <p>shopping_box</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons shopping_cart-simple\"></i>\r\n                  <p>shopping_cart-simple</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons shopping_credit-card\"></i>\r\n                  <p>shopping_credit-card</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons shopping_delivery-fast\"></i>\r\n                  <p>shopping_delivery-fast</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons shopping_shop\"></i>\r\n                  <p>shopping_shop</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons shopping_tag-content\"></i>\r\n                  <p>shopping_tag-content</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"sport\">\r\n          <h2>Sport</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons sport_trophy\"></i>\r\n                  <p>sport_trophy</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons sport_user-run\"></i>\r\n                  <p>sport_user-run</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"technology\">\r\n          <h2>Technology</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons tech_controller-modern\"></i>\r\n                  <p>tech_controller-modern</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons tech_headphones\"></i>\r\n                  <p>tech_headphones</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons tech_laptop\"></i>\r\n                  <p>tech_laptop</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons tech_mobile\"></i>\r\n                  <p>tech_mobile</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons tech_tablet\"></i>\r\n                  <p>tech_tablet</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons tech_tv\"></i>\r\n                  <p>tech_tv</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons tech_watch-time\"></i>\r\n                  <p>tech_watch-time</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"text\">\r\n          <h2>Text Editing</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons text_align-center\"></i>\r\n                  <p>text_align-center</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons text_align-left\"></i>\r\n                  <p>text_align-left</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons text_bold\"></i>\r\n                  <p>text_bold</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons text_caps-small\"></i>\r\n                  <p>text_caps-small</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"gestures\">\r\n          <h2>Touch Gestures</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons gestures_tap-01\"></i>\r\n                  <p>gestures_tap-01</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"transportation\">\r\n          <h2>Transportation</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons transportation_air-baloon\"></i>\r\n                  <p>transportation_air-baloon</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons transportation_bus-front-12\"></i>\r\n                  <p>transportation_bus-front-12</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"travel\">\r\n          <h2>Travel</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons travel_info\"></i>\r\n                  <p>travel_info</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons travel_istanbul\"></i>\r\n                  <p>travel_istanbul</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"interface\">\r\n          <h2>User Interface</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_bell-53\"></i>\r\n                  <p>ui-1_bell-53</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_calendar-60\"></i>\r\n                  <p>ui-1_calendar-60</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_check\"></i>\r\n                  <p>ui-1_check</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_lock-circle-open\"></i>\r\n                  <p>ui-1_lock-circle-open</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_send\"></i>\r\n                  <p>ui-1_send</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\r\n                  <p>ui-1_settings-gear-63</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_simple-add\"></i>\r\n                  <p>ui-1_simple-add</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_simple-delete\"></i>\r\n                  <p>ui-1_simple-delete</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_simple-remove\"></i>\r\n                  <p>ui-1_simple-remove</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_zoom-bold\"></i>\r\n                  <p>ui-1_zoom-bold</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-2_chat-round\"></i>\r\n                  <p>ui-2_chat-round</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-2_favourite-28\"></i>\r\n                  <p>ui-2_favourite-28</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-2_like\"></i>\r\n                  <p>ui-2_like</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-2_settings-90\"></i>\r\n                  <p>ui-2_settings-90</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-2_time-alarm\"></i>\r\n                  <p>ui-2_time-alarm</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_email-85\"></i>\r\n                  <p>ui-1_email-85</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"users\">\r\n          <h2>Users</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons users_circle-08\"></i>\r\n                  <p>users_circle-08</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons users_single-02\"></i>\r\n                  <p>users_single-02</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "Ge1e":
/*!******************************************************!*\
  !*** ./src/app/shared/navbar3/navbar3.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "GqhQ":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar2></app-navbar2>\r\n<div class=\"wrapper\">\r\n  <div\r\n    class=\"testimonials-1 section-image\"\r\n    style=\"background-image: url('assets/img/bg19.jpg')\"\r\n  >\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 ml-auto mr-auto text-center\">\r\n          <h2 class=\"title\">Welcome {{ datas.companyName }}</h2>\r\n          <h4 class=\"description text-white\">\r\n            Manage your professional image. Build and communicate with your\r\n            professional network.\r\n          </h4>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"info info-horizontal\"></div>\r\n  <div class=\"col-md-6 ml-auto mr-auto text-center\">\r\n    <h2 class=\"title\">My Posts</h2>\r\n</div>\r\n  <div style=\"display: flex; flex-wrap: wrap\">\r\n    <div\r\n      class=\"container\"\r\n      style=\"max-width: 500px\"\r\n      *ngFor=\"let data of datas\"\r\n    >\r\n      <div class=\"col-md-8\">\r\n        <div class=\"card card-testimonial\">\r\n          <div class=\"card-body\">\r\n            <p class=\"card-description\">\r\n              {{ data.offerDescription }}\r\n            </p>\r\n          </div>\r\n\r\n          <div class=\"card-footer\">\r\n            <h4 class=\"card-title\">{{ data.offerTitle }}</h4>\r\n            <p class=\"category\">{{ data.typeOfContract }}</p>\r\n            <p class=\"category\">{{ data.salary }}</p>\r\n            <p class=\"category\">{{ data.yearsOfExperience }}</p>\r\n          </div>\r\n\r\n          <form\r\n            class=\"form\"\r\n            method=\"\"\r\n            action=\"\"\r\n            (ngSubmit)=\"onSubmit(data)\"\r\n          >\r\n            <div class=\"col-md-7\">\r\n              <label>OfferTitle</label>\r\n              <div\r\n                class=\"input-group\"\r\n                [ngClass]=\"{ 'input-group-focus': focus === true }\"\r\n              >\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"\r\n                    ><i class=\"now-ui-icons users_circle-08\"></i\r\n                  ></span>\r\n                </div>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  name=\"OfferTitle\"\r\n                  [(ngModel)]=\"offerTitle\"\r\n                  placeholder=\"Your OfferTitle...\"\r\n                  (focus)=\"focus = true\"\r\n                  (blur)=\"focus = false\"\r\n                />\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <label>OfferDescription</label>\r\n              <div\r\n                class=\"input-group\"\r\n                [ngClass]=\"{ 'input-group-focus': focus === true }\"\r\n              >\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"\r\n                    ><i class=\"now-ui-icons users_circle-08\"></i\r\n                  ></span>\r\n                </div>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  name=\"OfferDescription\"\r\n                  [(ngModel)]=\"offerDescription\"\r\n                  placeholder=\"Your OfferTitle...\"\r\n                  (focus)=\"focus = true\"\r\n                  (blur)=\"focus = false\"\r\n                />\r\n              </div>\r\n            </div>\r\n            <div class=\"row\" id=\"space\">\r\n              <div class=\"col-lg-6 col-md-8 col-sm-5\">\r\n                <app-multiselect\r\n                  [single]=\"true\"\r\n                  [text]=\"'Type of contract'\"\r\n                  [dropdownList]=\"dropdownList\"\r\n                  [selectedItems]=\"selectedItems\"\r\n                  (itemSelect)=\"click($event)\"\r\n                  (itemDeSelect)=\"click($event)\"\r\n                  (selectAll)=\"console.log($event)\"\r\n                  (deSelectAll)=\"console.log($event)\"\r\n                ></app-multiselect>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\" id=\"space\">\r\n              <div class=\"col-lg-6 col-md-8 col-sm-5\">\r\n                <app-multiselect\r\n                  [single]=\"true\"\r\n                  [text]=\"'Salary'\"\r\n                  [dropdownList]=\"dropdownList2\"\r\n                  [selectedItems]=\"selectedItems2\"\r\n                  (itemSelect)=\"click1($event)\"\r\n                  (itemDeSelect)=\"click1($event)\"\r\n                  (selectAll)=\"test($event)\"\r\n                  (deSelectAll)=\"test($event)\"\r\n                ></app-multiselect>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\" id=\"space\">\r\n              <div class=\"col-lg-6 col-md-8 col-sm-5\">\r\n                <app-multiselect\r\n                  [single]=\"true\"\r\n                  [text]=\"'Years of experience'\"\r\n                  [dropdownList]=\"dropdownList1\"\r\n                  [selectedItems]=\"selectedItems1\"\r\n                  (itemSelect)=\"click2($event)\"\r\n                  (itemDeSelect)=\"click2($event)\"\r\n                  (selectAll)=\"test($event)\"\r\n                  (deSelectAll)=\"test($event)\"\r\n                ></app-multiselect>\r\n              </div>\r\n            </div>\r\n            <input\r\n              type=\"submit\"\r\n              class=\"btn btn-primary btn-raised btn-round\"\r\n              value=\"Post\"\r\n            />\r\n            <input\r\n              (click)=\"delete(data)\"\r\n              class=\"btn btn-primary btn-raised btn-round\"\r\n              value=\"Delete\"\r\n            />\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--  -->\r\n  <h2 class=\"title\">My Favorites</h2>\r\n            <div class=\"col-md-4\" *ngFor=\"let fav of favorites\">\r\n                <div class=\"card card-testimonial card-plain\">\r\n                    <div class=\"card-avatar\">\r\n                        <a href=\"#pablo\">\r\n                            <img class=\"img img-raised rounded\" src=\"assets/img/olivia.jpg\" />\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"card-title\">{{fav.name}}</h4>\r\n                        <h6 class=\"category text-primary\">{{fav.title}}</h6>\r\n                        <p class=\"card-description\">{{fav.description}}\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n          \r\n                  \r\n  <!--  -->\r\n  <div class=\"pricing-2\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 ml-auto mr-auto text-center\">\r\n          <h2 class=\"title\">Pick the best plan for you</h2>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"card card-pricing card-plain\">\r\n            <div class=\"card-body\">\r\n              <h6 class=\"category\">SILVER</h6>\r\n              <h1 class=\"card-title\"><small></small>300 DT</h1>\r\n              <ul>\r\n                <li>\r\n                  <b>10 POSTS</b>\r\n                </li>\r\n                <li>\r\n                  <b>Video & Chat</b>\r\n                </li>\r\n                <li>\r\n                  <b>Caendar</b>\r\n                </li>\r\n                <li><b>Unlimited</b> Candidats</li>\r\n              </ul>\r\n              <a\r\n                href=\"#pablo\"\r\n                class=\"btn btn-primary btn-round\"\r\n                (click)=\"onSubmitPayment('Silver', 300)\"\r\n              >\r\n                Pay Now\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div\r\n            class=\"card card-pricing card-background card-raised\"\r\n            style=\"background-image: url('assets/img/pricing2.jpg')\"\r\n          >\r\n            <div class=\"card-body\">\r\n              <h6 class=\"category text-info\">DIAMOND</h6>\r\n              <h1 class=\"card-title\"><small></small>1200 DT</h1>\r\n              <ul>\r\n                <li>\r\n                  <b>50 POSTS</b>\r\n                </li>\r\n                <li>\r\n                  <b>Video & Chat</b>\r\n                </li>\r\n                <li>\r\n                  <b>Calendar</b>\r\n                </li>\r\n                <li>\r\n                  <b>Unlimited Candidats</b>\r\n                </li>\r\n              </ul>\r\n              <a\r\n                href=\"#pablo\"\r\n                class=\"btn btn-neutral btn-round\"\r\n                (click)=\"onSubmitPayment('Diamond', 1200)\"\r\n              >\r\n                Pay Now\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"card card-pricing card-plain\">\r\n            <div class=\"card-body\">\r\n              <h6 class=\"category\">GOLD</h6>\r\n              <h1 class=\"card-title\"><small></small>500 DT</h1>\r\n              <ul>\r\n                <li>\r\n                  <b>30 POSTS</b>\r\n                </li>\r\n                <li>\r\n                  <b>Video & Chat</b>\r\n                </li>\r\n                <li>\r\n                  <b>Calendar</b>\r\n                </li>\r\n                <li>\r\n                  <b>Unlimited Candidats</b>\r\n                </li>\r\n              </ul>\r\n              <a class=\"btn btn-primary btn-round\" (click)=\"onSubmitPayment('Gold', 500)\">\r\n                Pay Now\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n \r\n</div>\r\n");

/***/ }),

/***/ "HF79":
/*!*************************************************************!*\
  !*** ./src/app/elements/typography/typography.component.ts ***!
  \*************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var _raw_loader_typography_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./typography.component.html */ "VpqL");
/* harmony import */ var _typography_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typography.component.scss */ "uDHE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () { };
    TypographyComponent.ctorParameters = function () { return []; };
    TypographyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-typography',
            template: _raw_loader_typography_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_typography_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "IP2a":
/*!***************************************************************!*\
  !*** ./src/app/elements/navigation/navigation.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "J8wC":
/*!************************************************!*\
  !*** ./src/app/elements/elements.component.ts ***!
  \************************************************/
/*! exports provided: ElementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementsComponent", function() { return ElementsComponent; });
/* harmony import */ var _raw_loader_elements_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./elements.component.html */ "NVyb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ElementsComponent = /** @class */ (function () {
    function ElementsComponent(renderer, config) {
        this.renderer = renderer;
        this.data = new Date();
        this.page = 4;
        this.page1 = 5;
        this.page2 = 3;
        this.isCollapsed = true;
        this.isCollapsed1 = true;
        this.isCollapsed2 = true;
        this.state_icon_primary = true;
        config.closeOthers = true;
    }
    ElementsComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    ElementsComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    ElementsComponent.prototype.ngOnInit = function () {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');
    };
    ElementsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    };
    ElementsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAccordionConfig"] }
    ]; };
    ElementsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-components',
            template: _raw_loader_elements_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: ["\n    ngb-progressbar {\n        margin-top: 5rem;\n    }\n    "]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAccordionConfig"]])
    ], ElementsComponent);
    return ElementsComponent;
}());



/***/ }),

/***/ "JYMj":
/*!*********************************************!*\
  !*** ./src/app/elements/elements.module.ts ***!
  \*********************************************/
/*! exports provided: ElementsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementsModule", function() { return ElementsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "yw8I");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "yQBb");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-chips */ "Kb4U");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "e/mZ");
/* harmony import */ var _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @kolkov/ngx-gallery */ "XGsO");
/* harmony import */ var _shared_image_upload_image_upload_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/image-upload/image-upload.module */ "eXCi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navigation/navigation.component */ "4omd");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./typography/typography.component */ "HF79");
/* harmony import */ var _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nucleoicons/nucleoicons.component */ "kHdc");
/* harmony import */ var _elements_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./elements.component */ "J8wC");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./notification/notification.component */ "7um0");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modal/modal.component */ "dTjC");
/* harmony import */ var _prefooter_areas_prefooter_areas_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./prefooter-areas/prefooter-areas.component */ "qDI0");
/* harmony import */ var _footers_areas_footers_areas_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./footers-areas/footers-areas.component */ "7EEV");
/* harmony import */ var _tables_areas_tables_areas_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tables-areas/tables-areas.component */ "CDUZ");
/* harmony import */ var _comments_areas_comments_areas_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./comments-areas/comments-areas.component */ "uVuu");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var ElementsModule = /** @class */ (function () {
    function ElementsModule() {
    }
    ElementsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_6__["TagInputModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__["JwBootstrapSwitchNg2Module"],
                angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["AngularMultiSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_8__["NgxGalleryModule"],
                _shared_image_upload_image_upload_module__WEBPACK_IMPORTED_MODULE_9__["ImageUploadModule"]
            ],
            declarations: [
                _elements_component__WEBPACK_IMPORTED_MODULE_14__["ElementsComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__["NavigationComponent"],
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_12__["TypographyComponent"],
                _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_13__["NucleoiconsComponent"],
                _notification_notification_component__WEBPACK_IMPORTED_MODULE_15__["NotificationComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_16__["NgbdModalBasic"],
                _prefooter_areas_prefooter_areas_component__WEBPACK_IMPORTED_MODULE_17__["PrefooterAreasComponent"],
                _footers_areas_footers_areas_component__WEBPACK_IMPORTED_MODULE_18__["FootersAreasComponent"],
                _tables_areas_tables_areas_component__WEBPACK_IMPORTED_MODULE_19__["TablesAreasComponent"],
                _comments_areas_comments_areas_component__WEBPACK_IMPORTED_MODULE_20__["CommentsAreasComponent"],
            ],
            exports: [_elements_component__WEBPACK_IMPORTED_MODULE_14__["ElementsComponent"]]
        })
    ], ElementsModule);
    return ElementsModule;
}());



/***/ }),

/***/ "L436":
/*!***************************************************!*\
  !*** ./src/app/views/profil/profil.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n#info {\r\n    \r\n   \r\n    border: 2px solid black;\r\n    border-radius: 10px;\r\n    margin-left: 0cm;\r\n    height: 450px;\r\n    width: 400px;\r\n    border-color:orangered\r\n    \r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7O0lBR0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWjs7QUFFSiIsImZpbGUiOiJwcm9maWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jaW5mbyB7XHJcbiAgICBcclxuICAgXHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMGNtO1xyXG4gICAgaGVpZ2h0OiA0NTBweDtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJvcmRlci1jb2xvcjpvcmFuZ2VyZWRcclxuICAgIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "LtKs":
/*!**************************************************!*\
  !*** ./src/app/sections/sections.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWN0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "MEFW":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/signup/signup-u.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<app-navbar></app-navbar>\r\n<div class=\"page-header section-image\">\r\n    <div class=\"page-header-image\" style=\"background-image:url('assets/img/bg19.jpg')\"></div>\r\n    <div class=\"content\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-3 ml-auto mr-auto\">\r\n                    <div class=\"info info-horizontal\">\r\n                        <div class=\"icon icon-primary\">\r\n                            <i class=\"now-ui-icons media-2_sound-wave\"></i>\r\n                        </div>\r\n                        <div class=\"description\">\r\n                            <h5 class=\"info-title\">Manage your NGFORCE account.</h5>\r\n                            <p class=\"description\">\r\n                             Fill your account with as much information as you can; Make your profil interesting.\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"info info-horizontal\">\r\n                        <div class=\"icon icon-primary\">\r\n                            <i class=\"now-ui-icons media-1_button-pause\"></i>\r\n                        </div>\r\n                        <div class=\"description\">\r\n                            <h5 class=\"info-title\">Applying process</h5>\r\n                            <p class=\"description\">\r\n                               choose a position that suits your field of expertise.\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"info info-horizontal\">\r\n                        <div class=\"icon icon-info\">\r\n                            <i class=\"now-ui-icons users_single-02\"></i>\r\n                        </div>\r\n                        <div class=\"description\">\r\n                            <h5 class=\"info-title\">Iterview</h5>\r\n                            <p class=\"description\">\r\n                                You are provided with a calender to help with the interviews time setting \r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4 mr-auto\">\r\n                    <div class=\"card card-signup\">\r\n                        <div class=\"card-body\">\r\n                            <h4 class=\"card-title text-center\">Register</h4>\r\n                            <div class=\"social text-center\">\r\n                               \r\n                                <h5 class=\"card-description\"> Candidate </h5>\r\n                            </div>\r\n                            <form class=\"form\" method=\"\" action=\"\"  (ngSubmit)=\"onSubmit()\" >\r\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                                  <div class=\"input-group-prepend\">\r\n                                      <span class=\"input-group-text\">  <i class=\"now-ui-icons users_circle-08\"></i></span>\r\n                                  </div>\r\n                                    <input type=\"text\" name=\"name\" [(ngModel)]=\"name\" class=\"form-control\" placeholder=\"Your First Name...\" (focus)=\"focus=true\" (blur)=\"focus=false\" />\r\n                                </div>\r\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                                  <div class=\"input-group-prepend\">\r\n                                      <span class=\"input-group-text\">  <i class=\"now-ui-icons text_caps-small\"></i></span>\r\n                                  </div>\r\n                                    <input type=\"text\" name=\"lastname\" [(ngModel)]=\"lastname\" placeholder=\"Your Last Name...\" class=\"form-control\" (focus)=\"focus1=true\" (blur)=\"focus1=false\" />\r\n                                </div>\r\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus2===true}\">\r\n                                  <div class=\"input-group-prepend\">\r\n                                      <span class=\"input-group-text\"> <i class=\"now-ui-icons ui-1_email-85\"></i></span>\r\n                                  </div>\r\n                                    <input type=\"text\" name=\"email\" [(ngModel)]=\"email\" class=\"form-control\" placeholder=\"Your Email...\" (focus)=\"focus2=true\" (blur)=\"focus2=false\" />\r\n                                </div>\r\n\r\n                                \r\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <span class=\"input-group-text\">  <i class=\"now-ui-icons users_circle-08\"></i></span>\r\n                                    </div>\r\n                                      <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"Your password...\" (focus)=\"focus=true\" (blur)=\"focus=false\" />\r\n                                  </div>\r\n\r\n                                \r\n                                <!-- If you want to add a checkbox to this form, uncomment this code -->\r\n                                <div class=\"form-check\">\r\n                                    <label class=\"form-check-label\">\r\n                                        <input class=\"form-check-input\" type=\"checkbox\">\r\n                                        <span class=\"form-check-sign\"></span>\r\n                                        I agree to the terms and\r\n                                        <a>conditions</a>.\r\n                                    </label>\r\n                                </div>\r\n                                <!-- <div class=\"card-footer text-center\">\r\n                                    \r\n                                </div> -->\r\n                                <input type=\"submit\" value=\"Get started\" class=\"btn btn-primary btn-round btn-lg\">\r\n                                \r\n                              \r\n                            </form>\r\n                          \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "MU6a":
/*!*******************************************************************!*\
  !*** ./src/app/elements/notification/notification.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "McCo":
/*!****************************************************!*\
  !*** ./src/app/views/company/company.component.ts ***!
  \****************************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var _raw_loader_company_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./company.component.html */ "7YjK");
/* harmony import */ var _company_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company.component.css */ "FA27");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_joboffer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/joboffer.service */ "YaTt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompanyComponent = /** @class */ (function () {
    function CompanyComponent(router, jobservice) {
        this.router = router;
        this.jobservice = jobservice;
        this.data = new Date();
    }
    CompanyComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("userid")) {
            this.router.navigate(["views/profil"]);
        }
        else if (localStorage.getItem("companyid")) {
            this.router.navigate(["views/home"]);
        }
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('signup-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-absolute');
        navbar.classList.remove('fixed-top');
    };
    CompanyComponent.prototype.onSubmit = function () {
        var _this = this;
        var obj = {
            name: this.name,
            adress: this.adress,
            phonenumber: this.phonenumber,
            email: this.email,
            password: this.password,
            website: "",
        };
        this.jobservice.postCompany(obj).subscribe(function (company) {
            if (company.msg === "right") {
                _this.router.navigate(['views/login']);
            }
        });
        this.name = "";
        this.email = "";
        this.password = "";
        this.adress = "";
        this.phonenumber = null;
    };
    CompanyComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('signup-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-absolute');
        navbar.classList.add('fixed-top');
    };
    CompanyComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _service_joboffer_service__WEBPACK_IMPORTED_MODULE_3__["JobofferService"] }
    ]; };
    CompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-company',
            template: _raw_loader_company_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_company_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _service_joboffer_service__WEBPACK_IMPORTED_MODULE_3__["JobofferService"]])
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "N2N6":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/image-upload/image-upload.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fileinput text-center\" #input>\r\n    <div [ngClass]=\"{'img-circle':isRound}\" class=\"thumbnail img-raised\">\r\n        <img src={{state.imagePreviewUrl}} alt=\"...\" />\r\n    </div>\r\n    <div>\r\n        <button class=\"btn btn-raised btn-round btn-default btn-file\" (click)=\"handleClick()\" *ngIf=\"!this.state.file\">Select image</button>\r\n        <button class=\"btn btn-raised btn-round btn-default btn-file\" (click)=\"handleClick()\" *ngIf=\"this.state.file\">Change</button>\r\n        <button class=\"btn btn-danger btn-round fileinput-exists\" (click)=\"handleRemove()\" *ngIf=\"this.state.file\"><i class=\"now-ui-icons ui-1_simple-remove\"></i> Remove</button>\r\n    </div>\r\n    <input type=\"file\"/>\r\n</div>\r\n");

/***/ }),

/***/ "NVyb":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/elements/elements.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n  <div class=\"page-header clear-filter\" filter-color=\"orange\">\r\n    <div class=\"page-header-image\" data-parallax=\"true\">\r\n    </div>\r\n    <div class=\"rellax-header rellax-header-sky\" data-rellax-speed=\"-8\">\r\n      <div class=\"page-header-image\" style=\"background-image: url('assets/img/presentation-page/nuk-pro-back-sky.jpg')\">\r\n      </div>\r\n    </div>\r\n    <div class=\"rellax-header rellax-header-buildings\" data-rellax-speed=\"0\">\r\n      <div class=\"page-header-image page-header-city\"\r\n        style=\"background-image: url('assets/img/presentation-page/nuk-pro-buildings.png')\">\r\n      </div>\r\n    </div>\r\n    <div class=\"rellax-text-container\">\r\n      <h1 class=\"h1-seo rellax-text\" data-rellax-speed=\"-2\">Components</h1>\r\n    </div>\r\n    <h3 class=\"h3-description rellax-text\" data-rellax-speed=\"-1\">A beautiful premium Bootstrap 4 UI Kit.</h3>\r\n    <h6 class=\"category category-absolute rellax-text\" data-rellax-speed=\"-2\">Designed by\r\n      <a href=\"https://invisionapp.com/\" target=\"_blank\">\r\n        <img src=\"assets/img/invision-white-slim.png\" class=\"invision-logo\" />\r\n      </a>. Coded by\r\n      <a href=\"https://www.creative-tim.com\" target=\"_blank\">\r\n        <img src=\"assets/img/creative-tim-white-slim2.png\" class=\"creative-tim-logo\" />\r\n      </a>.\r\n    </h6>\r\n  </div>\r\n  <div class=\"main\">\r\n    <div class=\"section section-images\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"hero-images-container\">\r\n              <img src=\"assets/img/hero-image-1.png\" alt=\"\">\r\n            </div>\r\n            <div class=\"hero-images-container-1\">\r\n              <img src=\"assets/img/hero-image-2.png\" alt=\"\">\r\n            </div>\r\n            <div class=\"hero-images-container-2\">\r\n              <img src=\"assets/img/hero-image-3.png\" alt=\"\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <app-basicelements></app-basicelements>\r\n    <app-navigation></app-navigation>\r\n    <div class=\"section section-tabs\">\r\n      <div class=\"container\">\r\n        <div class=\"title\">\r\n          <h4>Navigation Tabs</h4>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\r\n            <p class=\"category\">Tabs with Icons on Card</p>\r\n            <!-- Nav tabs -->\r\n            <div class=\"card\">\r\n              <div class=\"nav-tabs-navigation\">\r\n                <div class=\"nav-tabs-wrapper\">\r\n                  <ngb-tabset [justify]=\"'center'\" class=\"text-center\">\r\n                    <ngb-tab>\r\n                      <ng-template ngbTabTitle>\r\n                        <i class=\"now-ui-icons objects_umbrella-13\"></i> Home\r\n                      </ng-template>\r\n                      <ng-template ngbTabContent>\r\n                        <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is\r\n                          the level that things could be at. So when you get something that has the name Kanye West on\r\n                          it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company\r\n                          that ends up being worth billions of dollars, because I got the answers. I understand culture.\r\n                          I am the nucleus.</p>\r\n                      </ng-template>\r\n                    </ngb-tab>\r\n                    <ngb-tab>\r\n                      <ng-template ngbTabTitle>\r\n                        <i class=\"now-ui-icons shopping_cart-simple\"></i> Profile\r\n                      </ng-template>\r\n                      <ng-template ngbTabContent>\r\n                        <p> I will be the leader of a company that ends up being worth billions of dollars, because I\r\n                          got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that\r\n                          I have, to push possibilities, to show people, this is the level that things could be at. I\r\n                          think that’s a responsibility that I have, to push possibilities, to show people, this is the\r\n                          level that things could be at. </p>\r\n                      </ng-template>\r\n                    </ngb-tab>\r\n                    <ngb-tab>\r\n                      <ng-template ngbTabTitle>\r\n                        <i class=\"now-ui-icons shopping_shop\"></i> Messages\r\n                      </ng-template>\r\n                      <ng-template ngbTabContent>\r\n                        <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is\r\n                          the level that things could be at. So when you get something that has the name Kanye West on\r\n                          it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company\r\n                          that ends up being worth billions of dollars, because I got the answers. I understand culture.\r\n                          I am the nucleus.</p>\r\n                      </ng-template>\r\n                    </ngb-tab>\r\n                    <ngb-tab>\r\n                      <ng-template ngbTabTitle>\r\n                        <i class=\"now-ui-icons ui-2_settings-90\"></i> Settings\r\n                      </ng-template>\r\n                      <ng-template ngbTabContent>\r\n                        <p>\r\n                          \"I will be the leader of a company that ends up being worth billions of dollars, because I got\r\n                          the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I\r\n                          have, to push possibilities, to show people, this is the level that things could be at.\"\r\n                        </p>\r\n                      </ng-template>\r\n                    </ngb-tab>\r\n                  </ngb-tabset>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\r\n            <p class=\"category\">Tabs with Background on Card</p>\r\n            <!-- Tabs with Background on Card -->\r\n            <div class=\"card\">\r\n              <div class=\"nav-tabs-navigation\" data-tabs-color=\"orange\">\r\n                <div class=\"nav-tabs-wrapper\">\r\n                  <ngb-tabset [justify]=\"'center'\" class=\"text-center\">\r\n                    <ngb-tab title=\"Home\">\r\n                      <ng-template ngbTabContent>\r\n                        <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is\r\n                          the level that things could be at. So when you get something that has the name Kanye West on\r\n                          it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company\r\n                          that ends up being worth billions of dollars, because I got the answers. I understand culture.\r\n                          I am the nucleus.</p>\r\n                      </ng-template>\r\n                    </ngb-tab>\r\n                    <ngb-tab title=\"Profile\">\r\n                      <ng-template ngbTabContent>\r\n                        <p> I will be the leader of a company that ends up being worth billions of dollars, because I\r\n                          got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that\r\n                          I have, to push possibilities, to show people, this is the level that things could be at. I\r\n                          think that’s a responsibility that I have, to push possibilities, to show people, this is the\r\n                          level that things could be at. </p>\r\n                      </ng-template>\r\n                    </ngb-tab>\r\n                    <ngb-tab title=\"Messages\">\r\n                      <ng-template ngbTabContent>\r\n                        <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is\r\n                          the level that things could be at. So when you get something that has the name Kanye West on\r\n                          it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company\r\n                          that ends up being worth billions of dollars, because I got the answers. I understand culture.\r\n                          I am the nucleus.</p>\r\n                      </ng-template>\r\n                    </ngb-tab>\r\n                    <ngb-tab title=\"Settings\">\r\n                      <ng-template ngbTabContent>\r\n                        <p>\r\n                          \"I will be the leader of a company that ends up being worth billions of dollars, because I got\r\n                          the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I\r\n                          have, to push possibilities, to show people, this is the level that things could be at.\"\r\n                        </p>\r\n                      </ng-template>\r\n                    </ngb-tab>\r\n                  </ngb-tabset>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- End Tabs on plain Card -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"section section-pills\">\r\n      <div class=\"container\">\r\n        <div id=\"navigation-pills\">\r\n          <div class=\"title\">\r\n            <h4>Navigation Pills</h4>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <p class=\"category\">Horizontal tabs</p>\r\n              <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-primary justify-content-start tab-space\">\r\n                <ngb-tab title=\"Profile\">\r\n                  <ng-template ngbTabContent>\r\n                    Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate\r\n                    B2C users after installed base benefits.\r\n                    <br />\r\n                    <br /> Dramatically visualize customer directed convergence without revolutionary ROI.\r\n                  </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab title=\"Settings\">\r\n                  <ng-template ngbTabContent>\r\n                    Efficiently unleash cross-media information without cross-media value. Quickly maximize timely\r\n                    deliverables for real-time schemas.\r\n                    <br />\r\n                    <br />Dramatically maintain clicks-and-mortar solutions without functional solutions.\r\n                  </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab title=\"Options\">\r\n                  <ng-template ngbTabContent>\r\n                    Completely synergize resource taxing relationships via premier niche markets. Professionally\r\n                    cultivate one-to-one customer service with robust ideas.\r\n                    <br />\r\n                    <br />Dynamically innovate resource-leveling customer service for state of the art customer service.\r\n                  </ng-template>\r\n                </ngb-tab>\r\n              </ngb-tabset>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <p class=\"category\">Vertical tabs</p>\r\n              <div class=\"nav-pills-navigation\">\r\n                <div class=\"nav-pills-wrapper\">\r\n                  <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-primary vertical-pills\"\r\n                    [orientation]=\"'vertical'\">\r\n                    <ngb-tab title=\"Profile\">\r\n                      <ng-template ngbTabContent class=\"tab-space\">\r\n                        Collaboratively administrate empowered markets via plug-and-play networks. Dynamically\r\n                        procrastinate B2C users after installed base benefits.\r\n                        <br />\r\n                        <br /> Dramatically visualize customer directed convergence without revolutionary ROI.\r\n                      </ng-template>\r\n                    </ngb-tab>\r\n                    <ngb-tab title=\"Settings\">\r\n                      <ng-template ngbTabContent>\r\n                        Efficiently unleash cross-media information without cross-media value. Quickly maximize timely\r\n                        deliverables for real-time schemas.\r\n                        <br />\r\n                        <br />Dramatically maintain clicks-and-mortar solutions without functional solutions.\r\n                      </ng-template>\r\n                    </ngb-tab>\r\n                    <ngb-tab title=\"Options\">\r\n                      <ng-template ngbTabContent>\r\n                        Completely synergize resource taxing relationships via premier niche markets. Professionally\r\n                        cultivate one-to-one customer service with robust ideas.\r\n                        <br />\r\n                        <br />Dynamically innovate resource-leveling customer service for state of the art customer\r\n                        service.\r\n                      </ng-template>\r\n                    </ngb-tab>\r\n                  </ngb-tabset>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"title\">\r\n            <p class=\"category\">With Icons</p>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <!--\r\n          color-classes: \"nav-pills-primary\", \"nav-pills-info\", \"nav-pills-success\", \"nav-pills-warning\",\"nav-pills-danger\"\r\n        -->\r\n              <ngb-tabset type=\"pills\"\r\n                class=\"nav nav-pills nav-pills-primary justify-content-start tab-space nav-pills-icons\">\r\n                <ngb-tab>\r\n                  <ng-template ngbTabTitle>\r\n                    <i class=\"now-ui-icons objects_umbrella-13\"></i> Home\r\n                  </ng-template>\r\n                  <ng-template ngbTabContent>\r\n                    Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate\r\n                    B2C users after installed base benefits.\r\n                    <br />\r\n                    <br /> Dramatically visualize customer directed convergence without revolutionary ROI.\r\n                  </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab>\r\n                  <ng-template ngbTabTitle>\r\n                    <i class=\"now-ui-icons shopping_shop\"></i> Messages\r\n                  </ng-template>\r\n                  <ng-template ngbTabContent>\r\n                    Efficiently unleash cross-media information without cross-media value. Quickly maximize timely\r\n                    deliverables for real-time schemas.\r\n                    <br />\r\n                    <br />Dramatically maintain clicks-and-mortar solutions without functional solutions.\r\n                  </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab>\r\n                  <ng-template ngbTabTitle>\r\n                    <i class=\"now-ui-icons ui-2_settings-90\"></i> Settings\r\n                  </ng-template>\r\n                  <ng-template ngbTabContent>\r\n                    Completely synergize resource taxing relationships via premier niche markets. Professionally\r\n                    cultivate one-to-one customer service with robust ideas.\r\n                    <br />\r\n                    <br />Dynamically innovate resource-leveling customer service for state of the art customer service.\r\n                  </ng-template>\r\n                </ngb-tab>\r\n              </ngb-tabset>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <div class=\"nav-pills-navigation\">\r\n                <div class=\"nav-pills-wrapper\">\r\n                  <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-primary vertical-pills nav-pills-icons\"\r\n                    [orientation]=\"'vertical'\">\r\n                    <ngb-tab>\r\n                      <ng-template ngbTabTitle>\r\n                        <i class=\"now-ui-icons objects_umbrella-13\"></i> Home\r\n                      </ng-template>\r\n                      <ng-template ngbTabContent>\r\n                        Collaboratively administrate empowered markets via plug-and-play networks. Dynamically\r\n                        procrastinate B2C users after installed base benefits.\r\n                        <br />\r\n                        <br /> Dramatically visualize customer directed convergence without revolutionary ROI.\r\n                      </ng-template>\r\n                    </ngb-tab>\r\n                    <ngb-tab>\r\n                      <ng-template ngbTabTitle>\r\n                        <i class=\"now-ui-icons ui-2_settings-90\"></i> Settings\r\n                      </ng-template>\r\n                      <ng-template ngbTabContent>\r\n                        Efficiently unleash cross-media information without cross-media value. Quickly maximize timely\r\n                        deliverables for real-time schemas.\r\n                        <br />\r\n                        <br />Dramatically maintain clicks-and-mortar solutions without functional solutions.\r\n                      </ng-template>\r\n                    </ngb-tab>\r\n                  </ngb-tabset>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"title\">\r\n            <p class=\"category\">Just Icons</p>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <div class=\"nav-pills-navigation\">\r\n                <div class=\"nav-pills-wrapper\">\r\n                  <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-info vertical-pills nav-pills-just-icons\"\r\n                    [orientation]=\"'vertical'\">\r\n                    <ngb-tab>\r\n                      <ng-template ngbTabTitle>\r\n                        <i class=\"now-ui-icons objects_umbrella-13\"></i>\r\n                      </ng-template>\r\n                      <ng-template ngbTabContent>\r\n                        Collaboratively administrate empowered markets via plug-and-play networks. Dynamically\r\n                        procrastinate B2C users after installed base benefits.\r\n                        <br />\r\n                        <br /> Dramatically visualize customer directed convergence without revolutionary ROI.\r\n                      </ng-template>\r\n                    </ngb-tab>\r\n                    <ngb-tab>\r\n                      <ng-template ngbTabTitle>\r\n                        <i class=\"now-ui-icons ui-2_settings-90\"></i>\r\n                      </ng-template>\r\n                      <ng-template ngbTabContent>\r\n                        Efficiently unleash cross-media information without cross-media value. Quickly maximize timely\r\n                        deliverables for real-time schemas.\r\n                        <br />\r\n                        <br />Dramatically maintain clicks-and-mortar solutions without functional solutions.\r\n                      </ng-template>\r\n                    </ngb-tab>\r\n                  </ngb-tabset>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <!--\r\n          color-classes: \"nav-pills-primary\", \"nav-pills-info\", \"nav-pills-success\", \"nav-pills-warning\",\"nav-pills-danger\"\r\n        -->\r\n              <ngb-tabset type=\"pills\"\r\n                class=\"nav nav-pills nav-pills-info justify-content-start tab-space nav-pills-just-icons\">\r\n                <ngb-tab>\r\n                  <ng-template ngbTabTitle>\r\n                    <i class=\"now-ui-icons objects_umbrella-13\"></i>\r\n                  </ng-template>\r\n                  <ng-template ngbTabContent>\r\n                    Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate\r\n                    B2C users after installed base benefits.\r\n                    <br />\r\n                    <br /> Dramatically visualize customer directed convergence without revolutionary ROI.\r\n                  </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab>\r\n                  <ng-template ngbTabTitle>\r\n                    <i class=\"now-ui-icons shopping_shop\"></i>\r\n                  </ng-template>\r\n                  <ng-template ngbTabContent>\r\n                    Efficiently unleash cross-media information without cross-media value. Quickly maximize timely\r\n                    deliverables for real-time schemas.\r\n                    <br />\r\n                    <br />Dramatically maintain clicks-and-mortar solutions without functional solutions.\r\n                  </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab>\r\n                  <ng-template ngbTabTitle>\r\n                    <i class=\"now-ui-icons ui-2_settings-90\"></i>\r\n                  </ng-template>\r\n                  <ng-template ngbTabContent>\r\n                    Completely synergize resource taxing relationships via premier niche markets. Professionally\r\n                    cultivate one-to-one customer service with robust ideas.\r\n                    <br />\r\n                    <br />Dynamically innovate resource-leveling customer service for state of the art customer service.\r\n                  </ng-template>\r\n                </ngb-tab>\r\n              </ngb-tabset>\r\n            </div>\r\n          </div>\r\n          <!--                 end nav pills -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"section section-pagination\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <h4>Progress Bars</h4>\r\n            <div class=\"progress-container\">\r\n              <span class=\"progress-badge\">Default</span>\r\n\r\n              <ngb-progressbar [value]=\"25\"><span class=\"progress-value\">25%</span></ngb-progressbar><br>\r\n            </div>\r\n            <div class=\"progress-container progress-primary\">\r\n              <span class=\"progress-badge\">Primary</span>\r\n              <ngb-progressbar [value]=\"60\"><span class=\"progress-value\">60%</span></ngb-progressbar><br>\r\n            </div>\r\n            <div class=\"progress-container progress-danger\">\r\n              <span class=\"progress-badge\">Danger</span>\r\n              <ngb-progressbar [value]=\"60\"><span class=\"progress-value\">60%</span></ngb-progressbar><br>\r\n            </div>\r\n            <div class=\"progress-container progress-warning\">\r\n              <span class=\"progress-badge\">Warning</span>\r\n              <ngb-progressbar [value]=\"60\"><span class=\"progress-value\">60%</span></ngb-progressbar><br>\r\n            </div>\r\n            <div class=\"progress-container progress-success\">\r\n              <span class=\"progress-badge\">Success</span>\r\n              <ngb-progressbar [value]=\"60\"><span class=\"progress-value\">60%</span></ngb-progressbar><br>\r\n            </div>\r\n            <div class=\"progress-container progress-info\">\r\n              <span class=\"progress-badge\">Info</span>\r\n              <ngb-progressbar [value]=\"60\"><span class=\"progress-value\">60%</span></ngb-progressbar><br>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <h4>Pagination</h4>\r\n            <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page\" aria-label=\"Default pagination\"\r\n              class=\"pagination-primary\"></ngb-pagination>\r\n            <br />\r\n            <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page2\" aria-label=\"Default pagination\"></ngb-pagination>\r\n            <br />\r\n            <div class=\"pagination-container justify-content-center\">\r\n              <ngb-pagination [collectionSize]=\"60\" [(page)]=\"page1\" [maxSize]=\"5\" [rotate]=\"true\"\r\n                class=\"pagination-info\"></ngb-pagination>\r\n            </div>\r\n            <br>\r\n            <h4>Labels</h4>\r\n            <span class=\"badge badge-default\">Default</span>\r\n            <span class=\"badge badge-primary\">Primary</span>\r\n            <span class=\"badge badge-success\">Success</span>\r\n            <span class=\"badge badge-info\">Info</span>\r\n            <span class=\"badge badge-warning\">Warning</span>\r\n            <span class=\"badge badge-danger\">Danger</span>\r\n            <span class=\"badge badge-neutral\">Neutral</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"space\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"section\" id=\"notifications\">\r\n      <div class=\"container\">\r\n        <h4>Notifications</h4>\r\n      </div>\r\n      <app-notification></app-notification>\r\n    </div>\r\n    <app-prefooter-areas></app-prefooter-areas>\r\n    <app-footers-areas></app-footers-areas>\r\n    <app-typography></app-typography>\r\n    <app-tables-areas></app-tables-areas>\r\n    <app-comments-areas></app-comments-areas>\r\n    <app-cards-areas></app-cards-areas>\r\n\r\n    <div class=\"section section-javascript\" id=\"javascriptComponents\">\r\n      <div class=\"container\">\r\n        <h3 class=\"title\">Angular Native Components</h3>\r\n        <div class=\"row\" id=\"modals\">\r\n          <div class=\"col-md-6\">\r\n            <h4>Modal</h4>\r\n            <ngbd-modal-component></ngbd-modal-component>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <h4>Popovers</h4>\r\n            <button type=\"button\" class=\"btn btn-default text-margin\" placement=\"right\"\r\n              ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on right\"\r\n              popoverClass=\"popover-primary\">\r\n              On right\r\n            </button>\r\n\r\n            <button type=\"button\" class=\"btn btn-default text-margin\" placement=\"top\"\r\n              ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on top\">\r\n              On top\r\n            </button>\r\n\r\n            <button type=\"button\" class=\"btn btn-default text-margin\" placement=\"left\"\r\n              ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on left\">\r\n              On left\r\n            </button>\r\n\r\n            <button type=\"button\" class=\"btn btn-default\" placement=\"bottom\"\r\n              ngbPopover=\"Here will be some very useful information about this popover.\"\r\n              popoverTitle=\"Popover on bottom\">\r\n              On bottom\r\n            </button>\r\n          </div>\r\n          <br />\r\n          <br />\r\n          <div class=\"col-md-6\">\r\n            <h4>Datetimepicker</h4>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"datepicker-container\">\r\n                  <div class=\"form-group\">\r\n                    <input class=\"form-control datetimepicker\" placeholder=\"06/07/2017\" name=\"dp\" [(ngModel)]=\"model\"\r\n                      ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\" data-color=\"orange\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!--                 collapse -->\r\n            <div id=\"collapse\">\r\n              <div class=\"title\">\r\n                <h4>Collapse</h4>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"config-panel-one\" class=\"card-plain\">\r\n                    <ngb-panel id=\"config-panel-one\">\r\n                      <ng-template ngbPanelTitle>\r\n                        <a class=\"collapsed\">\r\n                          Collapsible Group Item #1\r\n                          <i class=\"now-ui-icons arrows-1_minimal-down\"></i>\r\n                        </a>\r\n                      </ng-template>\r\n                      <ng-template ngbPanelContent>\r\n                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.\r\n                        3 wolf moon officia\r\n                        aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch\r\n                        3 wolf moon tempor,\r\n                        sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil\r\n                        anim keffiyeh helvetica,\r\n                        craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher\r\n                        vice lomo. Leggings\r\n                        occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard\r\n                        of them accusamus\r\n                        labore sustainable VHS.\r\n                      </ng-template>\r\n                    </ngb-panel>\r\n                    <ngb-panel>\r\n                      <ng-template ngbPanelTitle>\r\n                        <a class=\"collapsed\">\r\n                          Collapsible Group Item #2\r\n                          <i class=\"now-ui-icons arrows-1_minimal-down\"></i>\r\n                        </a>\r\n                      </ng-template>\r\n                      <ng-template ngbPanelContent>\r\n                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.\r\n                        3 wolf moon officia\r\n                        aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch\r\n                        3 wolf moon tempor,\r\n                        sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil\r\n                        anim keffiyeh helvetica,\r\n                        craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher\r\n                        vice lomo. Leggings\r\n                        occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard\r\n                        of them accusamus\r\n                        labore sustainable VHS.\r\n                      </ng-template>\r\n                    </ngb-panel>\r\n                    <ngb-panel>\r\n                      <ng-template ngbPanelTitle>\r\n                        <a class=\"collapsed\">\r\n                          Collapsible Group Item #3\r\n                          <i class=\"now-ui-icons arrows-1_minimal-down\"></i>\r\n                        </a>\r\n                      </ng-template>\r\n                      <ng-template ngbPanelContent>\r\n                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.\r\n                        3 wolf moon officia\r\n                        aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch\r\n                        3 wolf moon tempor,\r\n                        sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil\r\n                        anim keffiyeh helvetica,\r\n                        craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher\r\n                        vice lomo. Leggings\r\n                        occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard\r\n                        of them accusamus\r\n                        labore sustainable VHS.\r\n                      </ng-template>\r\n                    </ngb-panel>\r\n                  </ngb-accordion>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!--                 end collapse -->\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <h4>Tooltips</h4>\r\n            <button type=\"button\" class=\"btn btn-default btn-tooltip text-margin\" placement=\"right\"\r\n              ngbTooltip=\"Tooltip on right\">\r\n              On right\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-default btn-tooltip text-margin\" placement=\"left\"\r\n              ngbTooltip=\"Tooltip on left\">\r\n              On left\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-default btn-tooltip text-margin\" placement=\"top\"\r\n              ngbTooltip=\"Tooltip on top\">\r\n              On top\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-default btn-tooltip text-margin\" placement=\"bottom\"\r\n              ngbTooltip=\"Tooltip on bottom\">\r\n              On bottom\r\n            </button>\r\n            <div class=\"clearfix\"></div>\r\n            <br>\r\n            <br>\r\n          </div>\r\n          <!-- </div>\r\n            </div> -->\r\n        </div>\r\n        <div id=\"file-uploader\">\r\n          <div class=\"container\">\r\n            <div class=\"title\">\r\n              <h4>File Uploader</h4>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5 col-sm-8\">\r\n                <h4><small>Regular Image</small></h4>\r\n                <app-image-upload></app-image-upload>\r\n              </div>\r\n              <div class=\"col-md-3 col-sm-4\">\r\n                <h4><small>Avatar</small></h4>\r\n                <app-image-upload [isRound]=\"true\"></app-image-upload>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"section\" id=\"carousel\">\r\n          <div class=\"container\">\r\n            <div class=\"title\">\r\n              <h4>Carousel</h4>\r\n            </div>\r\n            <div class=\"row justify-content-center\">\r\n              <div class=\"col-8\">\r\n                <ngb-carousel>\r\n                  <ng-template ngbSlide>\r\n                    <img class=\"d-block\" src=\"assets/img/bg1.jpg\" alt=\"First slide\">\r\n                    <div class=\"carousel-caption d-none d-md-block\">\r\n                      <h5>Nature, United States</h5>\r\n                    </div>\r\n                  </ng-template>\r\n                  <ng-template ngbSlide>\r\n                    <img class=\"d-block\" src=\"assets/img/bg3.jpg\" alt=\"Second slide\">\r\n                    <div class=\"carousel-caption d-none d-md-block\">\r\n                      <h5>Somewhere Beyond, United States</h5>\r\n                    </div>\r\n                  </ng-template>\r\n                  <ng-template ngbSlide>\r\n                    <img class=\"d-block\" src=\"assets/img/bg4.jpg\" alt=\"Third slide\">\r\n                    <div class=\"carousel-caption d-none d-md-block\">\r\n                      <h5>Yellowstone National Park, United States</h5>\r\n                    </div>\r\n                  </ng-template>\r\n                </ngb-carousel>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"section section-nucleo-icons\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-6 col-md-12\">\r\n            <h2 class=\"title\">Nucleo Icons</h2>\r\n            <h5 class=\"description\">\r\n              Now UI Kit comes with 100 custom icons made by our friends from NucleoApp. The official package contains\r\n              over 2.100 thin icons which are looking great in combination with Now UI Kit Make sure you check all of\r\n              them and use those that you like the most.\r\n            </h5>\r\n            <a [routerLink]=\"['/nucleoicons']\" class=\"btn btn-primary btn-round btn-lg\">View Demo Icons</a>\r\n            <a href=\"https://nucleoapp.com/?ref=1712\" class=\"btn btn-primary btn-simple btn-round btn-lg\"\r\n              target=\"_blank\">View All Icons</a>\r\n          </div>\r\n          <div class=\"col-lg-6 col-md-12\">\r\n            <div class=\"icons-container\">\r\n              <i class=\"now-ui-icons ui-1_send\"></i>\r\n              <i class=\"now-ui-icons ui-2_like\"></i>\r\n              <i class=\"now-ui-icons transportation_air-baloon\"></i>\r\n              <i class=\"now-ui-icons text_bold\"></i>\r\n              <i class=\"now-ui-icons tech_headphones\"></i>\r\n              <i class=\"now-ui-icons emoticons_satisfied\"></i>\r\n              <i class=\"now-ui-icons shopping_cart-simple\"></i>\r\n              <i class=\"now-ui-icons objects_spaceship\"></i>\r\n              <i class=\"now-ui-icons media-2_note-03\"></i>\r\n              <i class=\"now-ui-icons ui-2_favourite-28\"></i>\r\n              <i class=\"now-ui-icons design_palette\"></i>\r\n              <i class=\"now-ui-icons clothes_tie-bow\"></i>\r\n              <i class=\"now-ui-icons location_pin\"></i>\r\n              <i class=\"now-ui-icons objects_key-25\"></i>\r\n              <i class=\"now-ui-icons travel_istanbul\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <footer class=\"footer section-dark\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <nav class=\"footer-nav\">\r\n          <ul>\r\n            <li><a href=\"https://www.creative-tim.com\">Creative Tim</a></li>\r\n            <li><a href=\"http://blog.creative-tim.com\">Blog</a></li>\r\n            <li><a href=\"https://www.creative-tim.com/license\">Licenses</a></li>\r\n          </ul>\r\n        </nav>\r\n        <div class=\"credits ml-auto\">\r\n          <span class=\"copyright\">\r\n            © {{data | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n\r\n</div>");

/***/ }),

/***/ "O2we":
/*!************************************************************!*\
  !*** ./src/app/views/success-url/success-url.component.ts ***!
  \************************************************************/
/*! exports provided: SuccessUrlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessUrlComponent", function() { return SuccessUrlComponent; });
/* harmony import */ var _raw_loader_success_url_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./success-url.component.html */ "C9vp");
/* harmony import */ var _success_url_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./success-url.component.css */ "OVCz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_joboffer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/joboffer.service */ "YaTt");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SuccessUrlComponent = /** @class */ (function () {
    function SuccessUrlComponent(route, jobservice) {
        this.route = route;
        this.jobservice = jobservice;
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: "success",
            strong: "Your payment was successful! ",
            message: "Thank you for completing your secure online payment. your subscription is activate ",
            icon: "ui-2_like",
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    SuccessUrlComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    SuccessUrlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (_a) {
            var subscription_name = _a.subscription_name, company_id = _a.company_id;
            _this.jobservice.postpayment_to_server({ subscription_name: subscription_name, company_id: company_id }).subscribe(function (result) {
                console.log(result);
            });
            console.log(subscription_name);
        });
    };
    SuccessUrlComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: app_service_joboffer_service__WEBPACK_IMPORTED_MODULE_4__["JobofferService"] }
    ]; };
    SuccessUrlComponent.propDecorators = {
        alerts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    SuccessUrlComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-success-url",
            template: _raw_loader_success_url_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_success_url_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], app_service_joboffer_service__WEBPACK_IMPORTED_MODULE_4__["JobofferService"]])
    ], SuccessUrlComponent);
    return SuccessUrlComponent;
}());



/***/ }),

/***/ "OIiM":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/elements/prefooter-areas/prefooter-areas.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section section-pre-footer\" data-background-color=\"gray\">\r\n    <div id=\"pre-footer-areas\">\r\n        <div class=\"container\">\r\n            <div class=\"title\">\r\n                <h3>Pre-Footer Areas</h3>\r\n            </div>\r\n        </div>\r\n        <!--     *********    SIMPLE SOCIAL LINE     *********      -->\r\n        <div class=\"social-line social-line-white text-center\">\r\n            <div class=\"container\">\r\n                <div class=\"row justify-content-center\">\r\n                    <div class=\"col-md-12\">\r\n                        <h4 class=\"title\">Thank you for your support!</h4>\r\n                    </div>\r\n                    <a href=\"#pablo\" class=\"btn btn-twitter btn-round\">\r\n                        <i class=\"fa fa-twitter\"></i> Twitter · 2.5k\r\n                    </a>\r\n                    <a href=\"#pablo\" class=\"btn btn-facebook btn-round\">\r\n                        <i class=\"fa fa-facebook-square\"></i> Facebook · 3.2k\r\n                    </a>\r\n                    <a href=\"#pablo\" class=\"btn btn-google btn-round\">\r\n                        <i class=\"fa fa-google-plus\"></i> Google · 1.2k\r\n                    </a>\r\n                    <a href=\"#pablo\" class=\"btn btn-dribbble btn-round\">\r\n                        <i class=\"fa fa-dribbble\"></i> Dribbble · 1.8k\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--     *********   SIMPLE SOCIAL LINE     *********      -->\r\n        <br>\r\n        <br>\r\n        <!--     *********    SIMPLE SOCIAL LINE     *********      -->\r\n        <div class=\"social-line social-line-big-icons social-line-white\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-2\">\r\n                        <a href=\"#pablo\" class=\"btn btn-neutral btn-icon btn-twitter btn-footer\">\r\n                            <i class=\"fa fa-twitter\"></i>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <a href=\"#pablo\" class=\"btn btn-neutral btn-icon btn-facebook btn-footer\">\r\n                            <i class=\"fa fa-facebook-square\"></i>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <a href=\"#pablo\" class=\"btn btn-neutral btn-icon btn-google btn-footer\">\r\n                            <i class=\"fa fa-google-plus\"></i>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <a href=\"#pablo\" class=\"btn btn-neutral btn-icon btn-dribbble btn-footer\">\r\n                            <i class=\"fa fa-dribbble\"></i>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <a href=\"#pablo\" class=\"btn btn-neutral btn-icon btn-youtube btn-footer\">\r\n                            <i class=\"fa fa-youtube-play\"></i>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <a href=\"#pablo\" class=\"btn btn-neutral btn-icon btn-instagram btn-footer\">\r\n                            <i class=\"fa fa-instagram\"></i>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--     *********   SIMPLE SOCIAL LINE     *********      -->\r\n        <br>\r\n        <br>\r\n        <!--     *********    SIMPLE BLACK SOCIAL LINE     *********      -->\r\n        <div class=\"social-line social-line-big-icons social-line-black\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-2\">\r\n                        <a href=\"#pablo\" class=\"btn btn-simple btn-icon btn-footer\">\r\n                            <i class=\"fa fa-twitter\"></i>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <a href=\"#pablo\" class=\"btn btn-simple btn-icon btn-footer\">\r\n                            <i class=\"fa fa-facebook-square\"></i>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <a href=\"#pablo\" class=\"btn btn-simple btn-icon btn-footer\">\r\n                            <i class=\"fa fa-google-plus\"></i>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <a href=\"#pablo\" class=\"btn btn-simple btn-icon btn-footer\">\r\n                            <i class=\"fa fa-dribbble\"></i>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <a href=\"#pablo\" class=\"btn btn-simple btn-icon btn-footer\">\r\n                            <i class=\"fa fa-youtube-play\"></i>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <a href=\"#pablo\" class=\"btn btn-simple btn-icon btn-footer\">\r\n                            <i class=\"fa fa-instagram\"></i>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <br>\r\n        <br>\r\n        <!--     *********   SIMPLE BLACK SOCIAL LINE     *********      -->\r\n        <br>\r\n        <br>\r\n        <!--     *********    SIMPLE SUBSCRIBE LINE     *********      -->\r\n        <div class=\"subscribe-line subscribe-line-white\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <h4 class=\"title\">Get Tips &amp; Tricks every Week!</h4>\r\n                        <p class=\"description\">\r\n                            Join our newsletter and get news in your inbox every week! We hate spam too, so no worries about this.\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"card card-plain card-form-horizontal\">\r\n                            <div class=\"card-content\">\r\n                                <form method=\"\" action=\"\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-8\">\r\n                                            <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                                              <div class=\"input-group-prepend\">\r\n                                                  <span class=\"input-group-text\"><i class=\"now-ui-icons ui-1_email-85\"></i></span>\r\n                                              </div>\r\n                                                <input type=\"email\" class=\"form-control\" placeholder=\"Your Email...\"   (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <button type=\"button\" class=\"btn btn-primary btn-round btn-block\">Subscribe</button>\r\n                                        </div>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--     *********   SIMPLE SUBSCRIBE LINE     *********      -->\r\n        <br>\r\n        <br>\r\n        <!--     *********    IMAGE SUBSCRIBE LINE     *********      -->\r\n        <div class=\"subscribe-line subscribe-line-image\" style=\"background-image: url('assets/img/bg7.jpg');\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6 ml-auto mr-auto\">\r\n                        <div class=\"text-center\">\r\n                            <h4 class=\"title\">Subscribe to our Newsletter</h4>\r\n                            <p class=\"description\">\r\n                                Join our newsletter and get news in your inbox every week! We hate spam too, so no worries about this.\r\n                            </p>\r\n                        </div>\r\n                        <div class=\"card card-raised card-form-horizontal\">\r\n                            <div class=\"card-body\">\r\n                                <form method=\"\" action=\"\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-8\">\r\n                                            <div class=\"input-group\"   [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                                              <div class=\"input-group-prepend\">\r\n                                                  <span class=\"input-group-text\">  <i class=\"now-ui-icons ui-1_email-85\"></i></span>\r\n                                              </div>\r\n                                                <input type=\"email\" class=\"form-control\" placeholder=\"Your Email...\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <button type=\"button\" class=\"btn btn-primary btn-round btn-block\">Subscribe</button>\r\n                                        </div>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--     *********   IMAGE SUBSCRIBE LINE     *********      -->\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "OT5N":
/*!***************************************************!*\
  !*** ./src/app/chat/sidebar/sidebar.component.ts ***!
  \***************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "Xyjb");
/* harmony import */ var _sidebar_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.component.css */ "svhe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_service_joboffer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/joboffer.service */ "YaTt");
/* harmony import */ var app_service_websocket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/websocket.service */ "7nMs");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(jobservice, websocket) {
        this.jobservice = jobservice;
        this.websocket = websocket;
        this.conversationClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.ready = false;
        this.conversations = [
        // {
        //     name: 'Rock',
        //     time: '8:21',
        //     latestMessage: 'Good Morning!',
        //     latestMessageRead: true,
        //     messages: [
        //       { id: 1, body: 'Hello world', time: '8:21', me: true },
        //       { id: 2, body: 'How are you?', time: '8:21', me: false },
        //       { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
        //       { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
        //     ],
        //   },
        ];
        this.token = localStorage.getItem("userid");
        this.status = "";
    }
    Object.defineProperty(SidebarComponent.prototype, "filteredConversations", {
        get: function () {
            var _this = this;
            console.log('hello');
            return this.conversations.filter(function (conversation) {
                return (conversation.name
                    .toLowerCase()
                    .includes(_this.searchText.toLowerCase()) ||
                    conversation.latestMessage
                        .toLowerCase()
                        .includes(_this.searchText.toLowerCase()));
            });
        },
        enumerable: false,
        configurable: true
    });
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!localStorage.getItem("userid")) {
            this.token = localStorage.getItem("companyid");
            this.jobservice.decodecomp(this.token).subscribe(function (id) {
                _this.websocket.getConversationsCompany(id.companyid).subscribe(function (messages) {
                    _this.conversations = messages;
                    console.log(_this.conversations);
                    _this.ready = true;
                });
            });
        }
        else {
            this.jobservice.decode(this.token).subscribe(function (id) {
                _this.websocket.getConversationsUser(id.userid).subscribe(function (messages) {
                    _this.conversations = messages;
                    console.log(_this.conversations);
                    _this.ready = true;
                });
            });
        }
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: app_service_joboffer_service__WEBPACK_IMPORTED_MODULE_3__["JobofferService"] },
        { type: app_service_websocket_service__WEBPACK_IMPORTED_MODULE_4__["WebsocketService"] }
    ]; };
    SidebarComponent.propDecorators = {
        conversationClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-sidebar",
            template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_sidebar_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_service_joboffer_service__WEBPACK_IMPORTED_MODULE_3__["JobofferService"],
            app_service_websocket_service__WEBPACK_IMPORTED_MODULE_4__["WebsocketService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "OTVi":
/*!********************************************!*\
  !*** ./src/app/auth/auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        var token = localStorage.getItem('userid');
        if (token) {
            return true;
        }
        // this.router.navigate(['profil'])
        this.router.navigate(['views/login']);
        return false;
    };
    AuthGuardService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "OVCz":
/*!*************************************************************!*\
  !*** ./src/app/views/success-url/success-url.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWNjZXNzLXVybC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "P+9W":
/*!****************************************************!*\
  !*** ./src/app/views/signup/signup-u.component.ts ***!
  \****************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _raw_loader_signup_u_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./signup-u.component.html */ "MEFW");
/* harmony import */ var _signup_u_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup-u.component.css */ "18Co");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_joboffer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/joboffer.service */ "YaTt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(jobservice, router) {
        this.jobservice = jobservice;
        this.router = router;
        this.data = new Date();
        this.status = "";
    }
    SignupComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("userid")) {
            this.router.navigate(["views/profil"]);
        }
        else if (localStorage.getItem("companyid")) {
            this.router.navigate(["views/home"]);
        }
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("signup-page");
        var navbar = document.getElementsByTagName("nav")[0];
        navbar.classList.add("navbar-absolute");
        navbar.classList.remove("fixed-top");
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("hello");
        var obj = {
            name: this.name,
            lastname: this.lastname,
            email: this.email,
            password: this.password,
            status: "user",
        };
        this.jobservice.postUser(obj).subscribe(function (users) {
            if (users.msg === "right") {
                _this.router.navigate(['views/login']);
            }
        });
        this.name = "";
        this.lastname = "";
        this.email = "";
        this.password = "";
    };
    SignupComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("signup-page");
        var navbar = document.getElementsByTagName("nav")[0];
        navbar.classList.remove("navbar-absolute");
        navbar.classList.add("fixed-top");
    };
    SignupComponent.ctorParameters = function () { return [
        { type: _service_joboffer_service__WEBPACK_IMPORTED_MODULE_3__["JobofferService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-signup",
            template: _raw_loader_signup_u_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_signup_u_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_service_joboffer_service__WEBPACK_IMPORTED_MODULE_3__["JobofferService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "POiA":
/*!****************************************************!*\
  !*** ./src/app/views/searchu/searchu.component.ts ***!
  \****************************************************/
/*! exports provided: SearchuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchuComponent", function() { return SearchuComponent; });
/* harmony import */ var _raw_loader_searchu_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./searchu.component.html */ "nMtc");
/* harmony import */ var _searchu_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchu.component.css */ "U3/Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rellax */ "HbP6");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _service_joboffer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/joboffer.service */ "YaTt");
/* harmony import */ var app_service_follows_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/follows.service */ "Wdzh");
/* harmony import */ var app_service_websocket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/websocket.service */ "7nMs");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchuComponent = /** @class */ (function () {
    function SearchuComponent(jobservice, followservice, websocket) {
        this.jobservice = jobservice;
        this.followservice = followservice;
        this.websocket = websocket;
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.dropdownList1 = [];
        this.selectedItems1 = [];
        this.dropdownSettings1 = {};
        this.token = localStorage.getItem("userid");
        this.data = new Date();
        this.follows = [];
    }
    SearchuComponent.prototype.ngOnInit = function () {
        var _this = this;
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_3__('.rellax-header');
        // var rellaxText = new Rellax('.rellax-text');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('about-us');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        this.dropdownList = [
            { "id": 1, "itemName": "I'm a Designer" },
            { "id": 2, "itemName": "I'm a Developer" },
            { "id": 3, "itemName": "I'm a Hero" }
        ];
        this.selectedItems = [
            { "id": 2, "itemName": "I'm a Developer" }
        ];
        this.dropdownSettings = {
            singleSelection: true,
            text: "Speciality",
            // selectAllText:'Select All',
            // unSelectAllText:'UnSelect All',
            // enableSearchFilter: true,
            classes: "",
            lazyLoading: true,
            maxHeight: 100
        };
        this.jobservice.getallpostjob().subscribe(function (post) {
            _this.alldatas = post;
            _this.datas = post;
            for (var i = 0; i < _this.datas.length; i++) {
                _this.followservice.getfollow(_this.iduser, _this.datas[i].company).subscribe(function (get) {
                    if (get.length === 0) {
                        _this.follows.push(false);
                    }
                    else {
                        _this.follows.push(true);
                    }
                });
            }
        });
        this.jobservice.decode(this.token).subscribe(function (id) {
            _this.iduser = id.userid;
        });
    };
    SearchuComponent.prototype.click = function (event) {
        console.log(event.target.innerText);
        this.typeOfContract = event.target.innerText;
    };
    SearchuComponent.prototype.click1 = function (event) {
        console.log(event.target.innerText);
        this.salary = event.target.innerText;
    };
    SearchuComponent.prototype.click2 = function (event) {
        console.log(event.target.innerText);
        this.yearsOfExperience = event.target.innerText;
    };
    SearchuComponent.prototype.onSubmit = function () {
        var _this = this;
        var obj = {
            typeOfContract: this.typeOfContract,
            salary: this.salary,
            yearsOfExperience: this.yearsOfExperience,
        };
        if (!this.typeOfContract) {
            delete obj.typeOfContract;
        }
        if (!this.salary) {
            delete obj.salary;
        }
        if (!this.yearsOfExperience) {
            delete obj.yearsOfExperience;
        }
        this.jobservice.search(obj).subscribe(function (search) {
            if (search) {
                _this.datas = search;
            }
            else if (!search) {
                _this.datas = _this.alldatas;
            }
            if (_this.offerTitle) {
                var result = [];
                for (var i = 0; i < _this.datas.length; i++) {
                    var dat = _this.datas[i].offerTitle;
                    if (dat.indexOf(_this.offerTitle) === 0) {
                        result.push(_this.datas[i]);
                        console.log(result);
                    }
                }
                if (result) {
                    _this.datas = result;
                }
            }
        });
    };
    SearchuComponent.prototype.apply = function (data) {
        var _this = this;
        this.jobservice.decode(this.token).subscribe(function (id) {
            var msg = {
                text: "i want to apply for " + data.OfferTitle,
                sender: "User",
                company_id: data.company,
                user_id: id.userid
            };
            _this.websocket.postMessages(msg).subscribe(function (msg) {
                console.log(msg);
            });
        });
    };
    SearchuComponent.prototype.follow = function (data) {
        for (var i = 0; i < this.datas.length; i++) {
            if (this.datas[i].company === data.company) {
                this.follows[i] = !this.follows[i];
            }
        }
        console.log(this.iduser);
        var obj = { iduser: this.iduser, idcompany: data.company };
        this.followservice.addfollow(obj).subscribe(function (add) { return console.log(add); });
    };
    SearchuComponent.prototype.unfollow = function (data) {
        for (var i = 0; i < this.datas.length; i++) {
            if (this.datas[i].company === data.company) {
                this.follows[i] = !this.follows[i];
            }
        }
        this.followservice.deletefollow(this.iduser, data.company).subscribe(function (del) { return console.log(del); });
    };
    SearchuComponent.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    SearchuComponent.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    SearchuComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    SearchuComponent.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    SearchuComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('about-us');
        var navbar = document.getElementsByTagName('nav')[0];
        body.classList.remove('navbar-transparent');
    };
    SearchuComponent.ctorParameters = function () { return [
        { type: _service_joboffer_service__WEBPACK_IMPORTED_MODULE_4__["JobofferService"] },
        { type: app_service_follows_service__WEBPACK_IMPORTED_MODULE_5__["followsService"] },
        { type: app_service_websocket_service__WEBPACK_IMPORTED_MODULE_6__["WebsocketService"] }
    ]; };
    SearchuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-searchu',
            template: _raw_loader_searchu_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            providers: [app_service_websocket_service__WEBPACK_IMPORTED_MODULE_6__["WebsocketService"]],
            styles: [_searchu_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_service_joboffer_service__WEBPACK_IMPORTED_MODULE_4__["JobofferService"], app_service_follows_service__WEBPACK_IMPORTED_MODULE_5__["followsService"], app_service_websocket_service__WEBPACK_IMPORTED_MODULE_6__["WebsocketService"]])
    ], SearchuComponent);
    return SearchuComponent;
}());



/***/ }),

/***/ "QB/w":
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./login.component.html */ "nSew");
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.css */ "XzSN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_service_joboffer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/joboffer.service */ "YaTt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(jobservice, router) {
        this.jobservice = jobservice;
        this.router = router;
        this.data = new Date();
        this.bolean = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.bolean = false;
        if (localStorage.getItem("userid")) {
            this.router.navigate(["views/profil"]);
        }
        if (localStorage.getItem("companyid")) {
            this.router.navigate(["views/home"]);
        }
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var obj = {
            email: this.email,
            password: this.password,
        };
        this.jobservice.getUser(obj).subscribe(function (users) {
            if (users.token !== 'incorrect password' && users.token !== "email don't exist") {
                _this.router.navigate(['views/profil']);
                localStorage.setItem("userid", users.token);
                _this.bolean = true;
            }
            else {
                _this.email = "";
                _this.password = "";
            }
        });
        if (this.bolean === false) {
            this.jobservice.getCompany(obj).subscribe(function (users) {
                if (users.token !== 'incorrect password' && users.token !== "email don't exist") {
                    _this.router.navigate(['views/home']);
                    localStorage.setItem("companyid", users.token);
                    _this.bolean = true;
                }
                else {
                    _this.email = "";
                    _this.password = "";
                }
            });
        }
    };
    LoginComponent.ctorParameters = function () { return [
        { type: app_service_joboffer_service__WEBPACK_IMPORTED_MODULE_3__["JobofferService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_service_joboffer_service__WEBPACK_IMPORTED_MODULE_3__["JobofferService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "QlPV":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./home.component.html */ "GqhQ");
/* harmony import */ var _home_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.css */ "bjWv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rellax */ "HbP6");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_service_joboffer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/joboffer.service */ "YaTt");
/* harmony import */ var app_service_follows_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/follows.service */ "Wdzh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, jobservice, followservice) {
        this.router = router;
        this.jobservice = jobservice;
        this.followservice = followservice;
        this.zoom = 14;
        this.lat = 44.445248;
        this.lng = 26.099672;
        this.data = new Date();
        this.dropdownList = [
            { id: 1, itemName: "CDI" },
            { id: 2, itemName: "CDD" },
            { id: 3, itemName: "Traineeship" },
            { id: 4, itemName: "Freelance" },
            { id: 5, itemName: "Alernation" },
        ];
        this.selectedItems = [];
        this.dropdownList1 = [
            { id: 1, itemName: "Less than 1 year" },
            { id: 2, itemName: "Between 1 and 2 years" },
            { id: 3, itemName: "Between 2 and 5 years" },
            { id: 4, itemName: "More than 5 years" },
        ];
        this.selectedItems1 = [];
        this.dropdownList2 = [
            { id: 1, itemName: "Less than 600DT " },
            { id: 2, itemName: "Between 600DT and 1200DT" },
            { id: 3, itemName: "Between 1200DT and 1500DT" },
            { id: 4, itemName: "More than 1500DT" },
        ];
        this.selectedItems2 = [];
        this.favorites = [];
        this.token = localStorage.getItem("companyid");
        this.datas = ["NO POST"];
    }
    HomeComponent.prototype.click = function (event) {
        console.log(event.itemName);
        this.typeOfContract = event.itemName;
    };
    HomeComponent.prototype.click1 = function (event) {
        console.log(event.itemName);
        this.salary = event.itemName;
    };
    HomeComponent.prototype.click2 = function (event) {
        console.log(event.itemName);
        this.yearsOfExperience = event.itemName;
    };
    HomeComponent.prototype.onSubmit = function (data) {
        var _this = this;
        console.log(data);
        this.jobservice.decode(this.token).subscribe(function (id) {
            var obj = {
                companyName: _this.companyName,
                offerTitle: _this.offerTitle,
                offerDescription: _this.offerDescription,
                typeOfContract: _this.typeOfContract,
                salary: _this.salary,
                yearsOfExperience: _this.yearsOfExperience,
            };
            _this.jobservice.updatepostjob(data._id, obj).subscribe(function (create) {
                _this.router.navigate(["views/home"]);
                for (var i = 0; i < _this.datas.length; i++) {
                    if (_this.datas[i]._id === create._id) {
                        _this.datas[i] = create;
                    }
                }
                console.log(create);
            });
        });
    };
    HomeComponent.prototype.delete = function (data) {
        this.jobservice
            .deletepostjob(data._id)
            .subscribe(function (del) { return console.log(del); });
        for (var i = 0; i < this.datas.length; i++) {
            if (this.datas[i]._id === data._id) {
                this.datas.splice(i, 1);
            }
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_3__('.rellax-header');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        this.jobservice.decode(this.token).subscribe(function (id) {
            console.log(id);
            _this.jobservice.getpostjobs(id.companyid).subscribe(function (data) {
                _this.datas = data;
                console.log(data);
            });
            _this.followservice.getfavorite(id.companyid).subscribe(function (get) {
                _this.favorites = get;
                console.log(_this.favorites);
            });
        });
    };
    HomeComponent.prototype.onSubmitPayment = function (pack_name, amount) {
        var _this = this;
        this.jobservice.decode(this.token).subscribe(function (id) {
            var company = id.companyid;
            var obj = {
                receiverWallet: "60d5d753e1add7620c68faf9",
                amount: amount,
                selectedPaymentMethod: "gateway",
                token: "TND",
                successUrl: "http://localhost:4200/#/views/successPayment?pack=" + pack_name + "&company=" + company,
                failUrl: "http://localhost:4200/#/views/failPayment",
            };
            _this.jobservice.postPayment(obj).subscribe(function (payment) {
                // this.router.navigate(payment);
                window.location.href = payment.payUrl;
            });
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("landing-page");
        var navbar = document.getElementsByTagName("nav")[0];
        navbar.classList.remove("navbar-transparent");
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: app_service_joboffer_service__WEBPACK_IMPORTED_MODULE_4__["JobofferService"] },
        { type: app_service_follows_service__WEBPACK_IMPORTED_MODULE_5__["followsService"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-home",
            template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], app_service_joboffer_service__WEBPACK_IMPORTED_MODULE_4__["JobofferService"], app_service_follows_service__WEBPACK_IMPORTED_MODULE_5__["followsService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "RMzx":
/*!****************************************************!*\
  !*** ./src/app/views/landing/landing.component.ts ***!
  \****************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./landing.component.html */ "AN84");
/* harmony import */ var _landing_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.component.css */ "Wj+v");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rellax */ "HbP6");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LandingComponent = /** @class */ (function () {
    function LandingComponent(router) {
        this.router = router;
        this.data = new Date();
    }
    LandingComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("userid")) {
            this.router.navigate(['views/profil']);
        }
        else if (localStorage.getItem("companyid")) {
            this.router.navigate(['views/home']);
        }
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_3__('.rellax-header');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    LandingComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    LandingComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-landing',
            template: _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_landing_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "SsGY":
/*!*****************************************************!*\
  !*** ./src/app/presentation/presentation.module.ts ***!
  \*****************************************************/
/*! exports provided: PresentationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationModule", function() { return PresentationModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _presentation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./presentation.component */ "gVBG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PresentationModule = /** @class */ (function () {
    function PresentationModule() {
    }
    PresentationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
            ],
            declarations: [_presentation_component__WEBPACK_IMPORTED_MODULE_6__["PresentationComponent"]],
            exports: [_presentation_component__WEBPACK_IMPORTED_MODULE_6__["PresentationComponent"]],
            providers: []
        })
    ], PresentationModule);
    return PresentationModule;
}());



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "fjAU");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }).subscribe(function (event) {
            if (_this.location.path() !== '/sections') {
                if (window.outerWidth > 991) {
                    window.document.children[0].scrollTop = 0;
                }
                else {
                    window.document.activeElement.scrollTop = 0;
                }
            }
            _this.navbar.sidebarClose();
            _this.renderer.listen('window', 'scroll', function (event) {
                var number = window.scrollY;
                var _location = _this.location.path();
                _location = _location.split('/')[2];
                if (_this.location.path().split('#')[0] !== '/sections') {
                    if (number > 150 || window.pageYOffset > 150) {
                        // add logic
                        if (_location !== 'register') {
                            navbar.classList.remove('navbar-transparent');
                        }
                    }
                    else if (_location !== 'addproduct' && _location !== 'login' && _location !== 'register' && _this.location.path() !== '/nucleoicons') {
                        // remove logic
                        navbar.classList.add('navbar-transparent');
                    }
                }
            });
        });
        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');
        }
    };
    AppComponent.prototype.removeFooter = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (titlee === 'signup' || titlee === 'nucleoicons') {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
    ]; };
    AppComponent.propDecorators = {
        navbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],] }]
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "T9bN":
/*!************************************************!*\
  !*** ./src/app/sections/sections.component.ts ***!
  \************************************************/
/*! exports provided: SectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsComponent", function() { return SectionsComponent; });
/* harmony import */ var _raw_loader_sections_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./sections.component.html */ "kQxL");
/* harmony import */ var _sections_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections.component.scss */ "LtKs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SectionsComponent = /** @class */ (function () {
    function SectionsComponent(router) {
        router.events.subscribe(function (s) {
            if (s instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                var tree = router.parseUrl(router.url);
                if (tree.fragment) {
                    var element = document.querySelector("#" + tree.fragment);
                    if (element) {
                        element.scrollIntoView();
                    }
                }
            }
        });
    }
    SectionsComponent.prototype.ngOnInit = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0];
        navbar.children[0].classList.remove('navbar-transparent');
    };
    SectionsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0];
        navbar.children[0].classList.add('navbar-transparent');
    };
    SectionsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    SectionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-sections',
            template: _raw_loader_sections_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_sections_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SectionsComponent);
    return SectionsComponent;
}());



/***/ }),

/***/ "Tju2":
/*!***************************************************************!*\
  !*** ./src/app/shared/image-upload/image-upload.component.ts ***!
  \***************************************************************/
/*! exports provided: ImageUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploadComponent", function() { return ImageUploadComponent; });
/* harmony import */ var _raw_loader_image_upload_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./image-upload.component.html */ "N2N6");
/* harmony import */ var _image_upload_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-upload.component.scss */ "Umj7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImageUploadComponent = /** @class */ (function () {
    function ImageUploadComponent() {
        this.isRound = false;
        this.state = {};
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }
    ImageUploadComponent.prototype.ngOnInit = function () {
        this.state = {
            file: null,
            imagePreviewUrl: this.image !== undefined ? this.image : (this.isRound ? 'assets/img/placeholder.jpg' : 'assets/img/image_placeholder.jpg')
        };
    };
    ImageUploadComponent.prototype.ngAfterViewInit = function () {
        this.input.nativeElement.children[2].onchange = this.handleImageChange;
        ;
    };
    ImageUploadComponent.prototype.handleImageChange = function (e) {
        var _this = this;
        e.preventDefault();
        var reader = new FileReader();
        var file = e.target.files[0];
        reader.onloadend = function () {
            _this.state.file = file;
            _this.state.imagePreviewUrl = reader.result;
            // this.state.imagePreviewUrl1 = reader.result;
        };
        reader.readAsDataURL(file);
    };
    ImageUploadComponent.prototype.handleSubmit = function (e) {
        e.preventDefault();
        // this.state.file is the file/image uploaded
        // in this function you can save the image (this.state.file) on form submit
        // you have to call it yourself
    };
    ImageUploadComponent.prototype.handleClick = function () {
        console.log(this.input.nativeElement.children[2]);
        this.input.nativeElement.children[2].click();
    };
    ImageUploadComponent.prototype.handleRemove = function () {
        this.state.file = null;
        this.state.imagePreviewUrl = this.image !== undefined ? this.image : (this.isRound ? 'assets/img/placeholder.jpg' : 'assets/img/image_placeholder.jpg');
    };
    ImageUploadComponent.ctorParameters = function () { return []; };
    ImageUploadComponent.propDecorators = {
        isRound: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        input: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['input',] }]
    };
    ImageUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-image-upload',
            template: _raw_loader_image_upload_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_image_upload_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], ImageUploadComponent);
    return ImageUploadComponent;
}());



/***/ }),

/***/ "U3/Q":
/*!*****************************************************!*\
  !*** ./src/app/views/searchu/searchu.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#section-btn {\r\n    margin-top: 20px;\r\n    margin-left: 40%;\r\n\r\n}\r\n\r\n#drop-btn {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n#card{\r\n    height: 200px;\r\n    width: 50%;\r\n    margin-left: 60%;\r\n}\r\n\r\n#card-description{\r\n   margin-right: 300%;\r\n    width: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaHUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUNBO0dBQ0csa0JBQWtCO0lBQ2pCLFVBQVU7QUFDZCIsImZpbGUiOiJzZWFyY2h1LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2VjdGlvbi1idG4ge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XHJcblxyXG59XHJcblxyXG4jZHJvcC1idG4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4jY2FyZHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwJTtcclxufVxyXG4jY2FyZC1kZXNjcmlwdGlvbntcclxuICAgbWFyZ2luLXJpZ2h0OiAzMDAlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufSJdfQ== */");

/***/ }),

/***/ "Umj7":
/*!*****************************************************************!*\
  !*** ./src/app/shared/image-upload/image-upload.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fileinput input {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpbWFnZS11cGxvYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0YiLCJmaWxlIjoiaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbGVpbnB1dCBpbnB1dCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "UnIZ":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/elements/comments-areas/comments-areas.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section section-nude-gray\">\r\n    <div class=\"container container-tim\">\r\n      <div id=\"comments\">\r\n          <div class=\"title\">\r\n              <h3>\r\n                  <small>Comments</small>\r\n              </h3>\r\n          </div>\r\n          <div class=\"row\">\r\n              <div class=\"col-md-8 ml-auto mr-auto\">\r\n                  <div class=\"media-area\">\r\n                      <h3 class=\"title text-center\">\r\n                          <small>10 Comments</small>\r\n                      </h3>\r\n                      <div class=\"media\">\r\n                          <a class=\"pull-left\" href=\"#pablo\">\r\n                              <div class=\"avatar\">\r\n                                  <img class=\"media-object img-raised\" src=\"assets/img/marie.jpg\" alt=\"...\" />\r\n                              </div>\r\n                          </a>\r\n                          <div class=\"media-body\">\r\n                              <h5 class=\"media-heading\">Tina Andrew\r\n                                  <small class=\"text-muted\">&middot; 7 minutes ago</small>\r\n                              </h5>\r\n                              <p>Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!</p>\r\n                              <p>All praises and blessings to the families of people who never gave up on dreams. Don't forget, You're Awesome!</p>\r\n                              <div class=\"media-footer\">\r\n                                  <a href=\"#pablo\" class=\"btn btn-primary btn-neutral pull-right\" placement=\"top\" ngbTooltip=\"Reply to Comment\">\r\n                                      <i class=\"now-ui-icons ui-1_send\"></i> Reply\r\n                                  </a>\r\n                                  <a href=\"#pablo\" class=\"btn btn-danger btn-neutral pull-right\">\r\n                                      <i class=\"now-ui-icons ui-2_favourite-28\"></i> 243\r\n                                  </a>\r\n                              </div>\r\n                              <div class=\"media media-post\">\r\n                                  <a class=\"pull-left author\" href=\"#pablo\">\r\n                                      <div class=\"avatar\">\r\n                                          <img class=\"media-object img-raised\" alt=\"64x64\" src=\"assets/img/michael.jpg\">\r\n                                      </div>\r\n                                  </a>\r\n                                  <div class=\"media-body\">\r\n                                      <textarea class=\"form-control\" placeholder=\"Write a nice reply or go home...\" rows=\"4\"></textarea>\r\n                                      <div class=\"media-footer\">\r\n                                          <a href=\"#pablo\" class=\"btn btn-primary pull-right\">\r\n                                              <i class=\"now-ui-icons ui-1_send\"></i> Reply\r\n                                          </a>\r\n                                      </div>\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"media\">\r\n                          <a class=\"pull-left\" href=\"#pablo\">\r\n                              <div class=\"avatar\">\r\n                                  <img class=\"media-object img-raised\" alt=\"Tim Picture\" src=\"assets/img/olivia.jpg\">\r\n                              </div>\r\n                          </a>\r\n                          <div class=\"media-body\">\r\n                              <h5 class=\"media-heading\">John Camber\r\n                                  <small class=\"text-muted\">&middot; Yesterday</small>\r\n                              </h5>\r\n                              <p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>\r\n                              <p> Don't forget, You're Awesome!</p>\r\n                              <div class=\"media-footer\">\r\n                                  <a href=\"#pablo\" class=\"btn btn-primary btn-neutral pull-right\" placement=\"top\" ngbTooltip=\"Reply to Comment\">\r\n                                      <i class=\"now-ui-icons ui-1_send\"></i> Reply\r\n                                  </a>\r\n                                  <a href=\"#pablo\" class=\"btn btn-default btn-neutral pull-right\">\r\n                                      <i class=\"now-ui-icons ui-2_favourite-28\"></i> 25\r\n                                  </a>\r\n                              </div>\r\n                              <div class=\"media\">\r\n                                  <a class=\"pull-left\" href=\"#pablo\">\r\n                                      <div class=\"avatar\">\r\n                                          <img class=\"media-object img-raised\" alt=\"64x64\" src=\"assets/img/emily.jpg\">\r\n                                      </div>\r\n                                  </a>\r\n                                  <div class=\"media-body\">\r\n                                      <h5 class=\"media-heading\">Tina Andrew\r\n                                          <small class=\"text-muted\">&middot; 2 Days Ago</small>\r\n                                      </h5>\r\n                                      <p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>\r\n                                      <p> Don't forget, You're Awesome!</p>\r\n                                      <div class=\"media-footer\">\r\n                                          <a href=\"#pablo\" class=\"btn btn-primary btn-neutral pull-right\" placement=\"top\" ngbTooltip=\"Reply to Comment\">\r\n                                              <i class=\"now-ui-icons ui-1_send\"></i> Reply\r\n                                          </a>\r\n                                          <a href=\"#pablo\" class=\"btn btn-danger btn-neutral pull-right\">\r\n                                              <i class=\"now-ui-icons ui-2_favourite-28\"></i> 243\r\n                                          </a>\r\n                                      </div>\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"media\">\r\n                          <a class=\"pull-left\" href=\"#pablo\">\r\n                              <div class=\"avatar\">\r\n                                  <img class=\"media-object img-raised\" alt=\"64x64\" src=\"assets/img/james.jpg\">\r\n                              </div>\r\n                          </a>\r\n                          <div class=\"media-body\">\r\n                              <h5 class=\"media-heading\">Rosa Thompson\r\n                                  <small class=\"text-muted\">&middot; 2 Days Ago</small>\r\n                              </h5>\r\n                              <p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>\r\n                              <p> Don't forget, You're Awesome!</p>\r\n                              <div class=\"media-footer\">\r\n                                  <a href=\"#pablo\" class=\"btn btn-primary btn-neutral pull-right\" placement=\"top\" ngbTooltip=\"Reply to Comment\">\r\n                                      <i class=\"now-ui-icons ui-1_send\"></i> Reply\r\n                                  </a>\r\n                                  <a href=\"#pablo\" class=\"btn btn-danger btn-neutral pull-right\">\r\n                                      <i class=\"now-ui-icons ui-2_favourite-28\"></i> 243\r\n                                  </a>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"pagination pagination-primary justify-content-center\">\r\n                        <ngb-pagination [collectionSize]=\"60\" [(page)]=\"page1\" [maxSize]=\"5\" [rotate]=\"true\" class=\"pagination-primary\"></ngb-pagination>\r\n                      </div>\r\n                  </div>\r\n                  <h4 class=\"text-center\">Post your comment\r\n                      <br>\r\n                      <small class=\"text-muted\">- Logged In User -</small>\r\n                  </h4>\r\n                  <div class=\"media media-post\">\r\n                      <a class=\"pull-left author\" href=\"#pablo\">\r\n                          <div class=\"avatar\">\r\n                              <img class=\"media-object img-raised\" alt=\"64x64\" src=\"assets/img/james.jpg\">\r\n                          </div>\r\n                      </a>\r\n                      <div class=\"media-body\">\r\n                          <textarea class=\"form-control\" placeholder=\"Write some nice stuff or nothing...\" rows=\"6\"></textarea>\r\n                          <div class=\"media-footer\">\r\n                              <a href=\"#pablo\" class=\"btn btn-primary btn-wd pull-right\">Post Comment</a>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n                  <!-- end media-post -->\r\n                  <h4 class=\"text-center\">Post your comment\r\n                      <br>\r\n                      <small class=\"text-muted\">- Not Logged In User -</small>\r\n                  </h4>\r\n                  <div class=\"media media-post\">\r\n                      <a class=\"pull-left author\" href=\"#pablo\">\r\n                          <div class=\"avatar\">\r\n                              <img class=\"media-object img-raised\" alt=\"64x64\" src=\"assets/img/placeholder.jpg\" />\r\n                          </div>\r\n                      </a>\r\n                      <div class=\"media-body\">\r\n                          <form class=\"form\">\r\n                              <div class=\"row\">\r\n                                  <div class=\"col-md-6\">\r\n                                      <div class=\"form-group\">\r\n                                          <input type=\"text\" class=\"form-control\" placeholder=\"Your Name\" />\r\n                                      </div>\r\n                                  </div>\r\n                                  <div class=\"col-md-6\">\r\n                                      <div class=\"form-group\">\r\n                                          <input type=\"email\" class=\"form-control\" placeholder=\"Your email\" />\r\n                                      </div>\r\n                                  </div>\r\n                              </div>\r\n                              <textarea class=\"form-control\" placeholder=\"Write some nice stuff or nothing...\" rows=\"6\"></textarea>\r\n                              <div class=\"media-footer\">\r\n                                  <h6 class=\"text-muted\">Sign in with</h6>\r\n                                  <a href=\"\" class=\"btn btn-icon btn-round btn-twitter\">\r\n                                      <i class=\"fa fa-twitter\"></i>\r\n                                  </a>\r\n                                  <a href=\"\" class=\"btn btn-icon btn-round btn-facebook\">\r\n                                      <i class=\"fa fa-facebook-square\"></i>\r\n                                  </a>\r\n                                  <a href=\"\" class=\"btn btn-icon btn-round btn-google\">\r\n                                      <i class=\"fa fa-google-plus-square\"></i>\r\n                                  </a>\r\n                                  <a href=\"#pablo\" class=\"btn btn-primary pull-right\">Post Comment</a>\r\n                              </div>\r\n                          </form>\r\n                      </div>\r\n                      <!-- end media-body -->\r\n                  </div>\r\n                  <!-- end media-post -->\r\n              </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "VpqL":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/elements/typography/typography.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\">\r\n    <div class=\"container\">\r\n        <h3 class=\"title\">Typography</h3>\r\n        <div id=\"typography\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"typography-line\">\r\n                        <h1>\r\n                            <span>Header 1</span>The Life of Now UI Kit </h1>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <h2>\r\n                            <span>Header 2</span>The Life of Now UI Kit</h2>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <h3>\r\n                            <span>Header 3</span>The Life of Now UI Kit</h3>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <h4>\r\n                            <span>Header 4</span>The Life of Now UI Kit</h4>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <h5>\r\n                            <span>Header 5</span>The Life of Now UI Kit</h5>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <h6>\r\n                            <span>Header 6</span>The Life of Now UI Kit</h6>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <p>\r\n                            <span>Paragraph</span>\r\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <span>Quote</span>\r\n                        <blockquote>\r\n                            <p class=\"blockquote blockquote-primary\">\r\n                                \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\r\n                                <br>\r\n                                <br>\r\n                                <small>\r\n                                    - Noaa\r\n                                </small>\r\n                            </p>\r\n                        </blockquote>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <span>Muted Text</span>\r\n                        <p class=\"text-muted\">\r\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <span>Primary Text</span>\r\n                        <p class=\"text-primary\">\r\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <span>Info Text</span>\r\n                        <p class=\"text-info\">\r\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <span>Success Text</span>\r\n                        <p class=\"text-success\">\r\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <span>Warning Text</span>\r\n                        <p class=\"text-warning\">\r\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <span>Danger Text</span>\r\n                        <p class=\"text-danger\">\r\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <h2>\r\n                            <span>Small Tag</span>\r\n                            Header with small subtitle\r\n                            <br>\r\n                            <small>Use \"small\" tag for the headers</small>\r\n                        </h2>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"space-50\"></div>\r\n        <div id=\"images\">\r\n            <h4>Images</h4>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-2\">\r\n                    <p class=\"category\">Image</p>\r\n                    <img src=\"assets/img/julie.jpg\" alt=\"Rounded Image\" class=\"rounded\">\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                    <p class=\"category\">Circle Image</p>\r\n                    <img src=\"assets/img/julie.jpg\" alt=\"Circle Image\" class=\"rounded-circle\">\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                    <p class=\"category\">Raised</p>\r\n                    <img src=\"assets/img/julie.jpg\" alt=\"Raised Image\" class=\"rounded img-raised\">\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                    <p class=\"category\">Circle Raised</p>\r\n                    <img src=\"assets/img/julie.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-raised\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "Wdzh":
/*!********************************************!*\
  !*** ./src/app/service/follows.service.ts ***!
  \********************************************/
/*! exports provided: followsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followsService", function() { return followsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var followsService = /** @class */ (function () {
    function followsService(http) {
        this.http = http;
        this.apiUrl = "/";
    }
    followsService.prototype.addfollow = function (option) {
        return this.http.post(this.apiUrl + "follows", option);
    };
    followsService.prototype.gettallfollow = function () {
        return this.http.get(this.apiUrl + "follows");
    };
    followsService.prototype.getfollow = function (option, option1) {
        return this.http.get(this.apiUrl + "follows" + ("/" + option) + ("/" + option1));
    };
    followsService.prototype.searchfollow = function (option) {
        return this.http.get(this.apiUrl + "follows" + ("/" + option));
    };
    followsService.prototype.deletefollow = function (option, option1) {
        return this.http.delete(this.apiUrl + "follows" + ("/" + option) + ("/" + option1));
    };
    followsService.prototype.addnotification = function (option) {
        return this.http.post(this.apiUrl + "notifications", option);
    };
    followsService.prototype.findnotification = function (option) {
        return this.http.get(this.apiUrl + "notifications" + ("/" + option));
    };
    followsService.prototype.gettallnotification = function () {
        return this.http.get(this.apiUrl + "notifications");
    };
    followsService.prototype.getfavorite = function (option) {
        return this.http.get(this.apiUrl + "favorite" + ("/" + option));
    };
    followsService.prototype.createfavorite = function (option) {
        return this.http.post(this.apiUrl + "favorite", option);
    };
    followsService.prototype.deletefavorite = function (option) {
        return this.http.delete(this.apiUrl + "favorite" + ("/" + option));
    };
    followsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    followsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root",
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], followsService);
    return followsService;
}());



/***/ }),

/***/ "Wj+v":
/*!*****************************************************!*\
  !*** ./src/app/views/landing/landing.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5kaW5nLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "XD9c":
/*!******************************************************************!*\
  !*** ./src/app/components/multiselect/multiselect.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtdWx0aXNlbGVjdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "XsTM":
/*!*********************************************!*\
  !*** ./src/app/sections/sections.module.ts ***!
  \*********************************************/
/*! exports provided: SectionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsModule", function() { return SectionsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sections_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections.component */ "T9bN");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "pxUr");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SectionsModule = /** @class */ (function () {
    function SectionsModule() {
    }
    SectionsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
                    apiKey: 'YOUR_KEY_HERE'
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ],
            declarations: [
                _sections_component__WEBPACK_IMPORTED_MODULE_2__["SectionsComponent"]
            ],
            exports: [
                _sections_component__WEBPACK_IMPORTED_MODULE_2__["SectionsComponent"]
            ]
        })
    ], SectionsModule);
    return SectionsModule;
}());



/***/ }),

/***/ "Xyjb":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/sidebar/sidebar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"sidebar\">\r\n    <div id=\"row1\">\r\n      <div id=\"sidebarHeader\">\r\n        <div class=\"avatarContainer\">\r\n          <img src=\"../../assets/images/noPic.svg\" />\r\n        </div>\r\n        <div class=\"actionsContainer\">\r\n          <img src=\"../../assets/images/statusIcon.svg\" />\r\n          <img src=\"../../assets/images/chatIcon.svg\" />\r\n          <img src=\"../../assets/images/moreVertIcon.svg\" />\r\n        </div>\r\n      </div>\r\n      <div id=\"searchBox\">\r\n        <img width=\"19\" src=\"../../assets/images/searchIcon.svg\" />\r\n        <input\r\n          [(ngModel)]=\"searchText\"\r\n          type=\"text\"\r\n          placeholder=\"Search or start the new chat\"\r\n        />\r\n      </div>\r\n    </div>\r\n  \r\n    <div id=\"sidebarContent\" *ngIf='ready'>\r\n      <!-- <div id=\"noConversations\">All chats are archived</div> -->\r\n  \r\n      <div\r\n        class=\"conversation\"\r\n        *ngFor=\"\r\n          let conversation of !searchText ? conversations : filteredConversations\r\n        \"\r\n        (click)=\"conversationClicked.emit(conversation)\"\r\n      >\r\n        <div class=\"picture\">\r\n          <img src=\"../../assets/images/noPic.svg\" />\r\n        </div>\r\n        <div class=\"content\">\r\n          <div class=\"conversationHeader\">\r\n            <div class=\"name\">{{ conversation._id.name }}</div>\r\n            <div class=\"time\">{{ conversation.last }}</div>\r\n          </div> \r\n          <div class=\"message\">\r\n            <img\r\n              *ngIf=\"!conversation.latestMessageRead\"\r\n              src=\"../../assets/images/doubleTick.svg\"\r\n            />\r\n            <img\r\n              *ngIf=\"conversation.latestMessageRead\"\r\n              src=\"../../assets/images/doubleTickBlue.svg\"\r\n            />\r\n            <!-- {{ conversation.latestMessage }} -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n");

/***/ }),

/***/ "XzSN":
/*!*************************************************!*\
  !*** ./src/app/views/login/login.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#logo-container{\r\n    width: 300px;\r\n    height: 300px;\r\n}\r\n\r\n#logo {\r\n    margin-top: 80px;\r\n    width: 300px;\r\n    height: 300px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtBQUNqQiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ28tY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuI2xvZ28ge1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "Y4jH":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar2/navbar2.component.ts ***!
  \*****************************************************/
/*! exports provided: Navbar2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navbar2Component", function() { return Navbar2Component; });
/* harmony import */ var _raw_loader_navbar2_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navbar2.component.html */ "6Vf9");
/* harmony import */ var _navbar2_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar2.component.css */ "0+j/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Navbar2Component = /** @class */ (function () {
    function Navbar2Component(location, element) {
        this.location = location;
        this.element = element;
        this.sidebarVisible = false;
    }
    Navbar2Component.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    };
    Navbar2Component.prototype.logout = function () {
        localStorage.removeItem("companyid");
    };
    Navbar2Component.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    Navbar2Component.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    Navbar2Component.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    Navbar2Component.prototype.isHome = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/home') {
            return true;
        }
        else {
            return false;
        }
    };
    Navbar2Component.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    Navbar2Component.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
    ]; };
    Navbar2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navbar2',
            template: _raw_loader_navbar2_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_navbar2_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]])
    ], Navbar2Component);
    return Navbar2Component;
}());



/***/ }),

/***/ "Y6MI":
/*!*******************************************************!*\
  !*** ./src/app/views/fail-url/fail-url.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYWlsLXVybC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "YaTt":
/*!*********************************************!*\
  !*** ./src/app/service/joboffer.service.ts ***!
  \*********************************************/
/*! exports provided: JobofferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobofferService", function() { return JobofferService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JobofferService = /** @class */ (function () {
    function JobofferService(http) {
        this.http = http;
        this.apiUrl = "/";
        this.apiUrl_initkonect = "https://api.preprod.konnect.network/api/v1/payments/init-payment";
        this.apiUrl_konect = "https://api.preprod.konnect.network/api/v1/payments/:id";
    }
    JobofferService.prototype.postUser = function (option) {
        return this.http.post(this.apiUrl + "users/signup", option);
    };
    JobofferService.prototype.getUser = function (option) {
        return this.http.post(this.apiUrl + "users/login", option);
    };
    JobofferService.prototype.getCompany = function (option) {
        return this.http.post(this.apiUrl + "company/login", option);
    };
    JobofferService.prototype.postCompany = function (option) {
        return this.http.post(this.apiUrl + "company/signup", option);
    };
    JobofferService.prototype.decode = function (option) {
        return this.http.get(this.apiUrl + ("users/decode/" + option));
    };
    JobofferService.prototype.decodecomp = function (option) {
        return this.http.get(this.apiUrl + ("company/decodecomp/" + option));
    };
    JobofferService.prototype.iduser = function (option) {
        return this.http.get(this.apiUrl + ("users/" + option));
    };
    JobofferService.prototype.getonecv = function (option) {
        return this.http.get(this.apiUrl + ("create-cv/" + option));
    };
    JobofferService.prototype.createcv = function (option) {
        return this.http.post(this.apiUrl + "create-cv", option);
    };
    JobofferService.prototype.updatecv = function (option, option1) {
        return this.http.patch(this.apiUrl + ("create-cv/" + option), option1);
    };
    JobofferService.prototype.updatuser = function (option, option1) {
        return this.http.patch(this.apiUrl + ("users/" + option), option1);
    };
    JobofferService.prototype.idcompany = function (option) {
        return this.http.get(this.apiUrl + ("company/" + option));
    };
    JobofferService.prototype.getonepostjob = function (option) {
        return this.http.get(this.apiUrl + ("postjob/" + option));
    };
    JobofferService.prototype.createpostjob = function (option) {
        return this.http.post(this.apiUrl + "postjob", option);
    };
    JobofferService.prototype.updatepostjob = function (option, option1) {
        return this.http.patch(this.apiUrl + ("postjob/" + option), option1);
    };
    JobofferService.prototype.updatecompany = function (option, option1) {
        return this.http.patch(this.apiUrl + ("company/" + option), option1);
    };
    JobofferService.prototype.getallpostjob = function () {
        return this.http.get(this.apiUrl + "postjob");
    };
    JobofferService.prototype.getallcv = function () {
        return this.http.get(this.apiUrl + "create-cv");
    };
    JobofferService.prototype.search = function (option) {
        return this.http.post(this.apiUrl + "postjob/searchps", option);
    };
    JobofferService.prototype.getpostjobs = function (option) {
        return this.http.get(this.apiUrl + ("postjob/" + option + "/find"));
    };
    JobofferService.prototype.deletepostjob = function (option) {
        return this.http.delete(this.apiUrl + ("postjob/" + option));
    };
    JobofferService.prototype.searchcv = function (option) {
        return this.http.post(this.apiUrl + "create-cv/searchcv", option);
    };
    JobofferService.prototype.getcalendar = function (option) {
        return this.http.get(this.apiUrl + ("calendar/" + option));
    };
    JobofferService.prototype.createcalendar = function (option) {
        return this.http.post(this.apiUrl + "calendar", option);
    };
    JobofferService.prototype.updatecalendar = function (option, option1) {
        return this.http.patch(this.apiUrl + ("calendar/" + option), option1);
    };
    JobofferService.prototype.deletecalendar = function (option) {
        return this.http.delete(this.apiUrl + ("calendar/" + option));
    };
    JobofferService.prototype.postPayment = function (option) {
        return this.http.post(this.apiUrl_initkonect, option);
    };
    JobofferService.prototype.getPayment = function (option) {
        return this.http.get(this.apiUrl_konect, option);
    };
    JobofferService.prototype.postpayment_to_server = function (option) {
        return this.http.post(this.apiUrl + "company/payment", option);
    };
    JobofferService.prototype.postimg = function (option) {
        return this.http.post(this.apiUrl + "create-cv/testcloudinary", option);
    };
    JobofferService.prototype.getsubscription = function (option) {
        return this.http.get(this.apiUrl + "subscription", option);
    };
    JobofferService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    JobofferService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root",
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], JobofferService);
    return JobofferService;
}());



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _sections_sections_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/sections.module */ "XsTM");
/* harmony import */ var _elements_elements_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./elements/elements.module */ "JYMj");
/* harmony import */ var _examples_examples_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/examples.module */ "ieWF");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "e/mZ");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth-guard.service */ "OTVi");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");
/* harmony import */ var _presentation_presentation_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./presentation/presentation.module */ "SsGY");
/* harmony import */ var _views_landing_landing_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/landing/landing.component */ "RMzx");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/login/login.component */ "QB/w");
/* harmony import */ var _views_signup_signup_u_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/signup/signup-u.component */ "P+9W");
/* harmony import */ var _views_company_company_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/company/company.component */ "McCo");
/* harmony import */ var _views_searchc_searchc_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/searchc/searchc.component */ "1Gpg");
/* harmony import */ var _views_profil_profil_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/profil/profil.component */ "pHAi");
/* harmony import */ var _views_create_cv_create_cv_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/create-cv/create-cv.component */ "pXDO");
/* harmony import */ var _views_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/calendar/calendar.component */ "dUxQ");
/* harmony import */ var _components_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/multiselect/multiselect.component */ "y11L");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _views_searchu_searchu_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./views/searchu/searchu.component */ "POiA");
/* harmony import */ var _shared_navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/navbar2/navbar2.component */ "Y4jH");
/* harmony import */ var _shared_navbar3_navbar3_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shared/navbar3/navbar3.component */ "5Kl1");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./views/home/home.component */ "QlPV");
/* harmony import */ var _views_post_post_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./views/post/post.component */ "22lU");
/* harmony import */ var _components_image_image_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/image/image.component */ "pKtN");
/* harmony import */ var _chat_chat_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./chat/chat.module */ "2yxt");
/* harmony import */ var _views_notificationuser_notificationuser_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./views/notificationuser/notificationuser.component */ "l6ru");
/* harmony import */ var _views_success_url_success_url_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./views/success-url/success-url.component */ "O2we");
/* harmony import */ var _views_fail_url_fail_url_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./views/fail-url/fail-url.component */ "m6uJ");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
 // this is needed!


































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
                _views_landing_landing_component__WEBPACK_IMPORTED_MODULE_15__["LandingComponent"],
                _views_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                _views_profil_profil_component__WEBPACK_IMPORTED_MODULE_20__["ProfilComponent"],
                _views_create_cv_create_cv_component__WEBPACK_IMPORTED_MODULE_21__["CreateCvComponent"],
                _views_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_22__["CalendarComponent"],
                _views_signup_signup_u_component__WEBPACK_IMPORTED_MODULE_17__["SignupComponent"],
                _views_company_company_component__WEBPACK_IMPORTED_MODULE_18__["CompanyComponent"],
                _views_searchc_searchc_component__WEBPACK_IMPORTED_MODULE_19__["SearchcComponent"],
                _components_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_23__["MultiselectComponent"],
                _views_profil_profil_component__WEBPACK_IMPORTED_MODULE_20__["ProfilComponent"],
                _views_searchu_searchu_component__WEBPACK_IMPORTED_MODULE_25__["SearchuComponent"],
                _shared_navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_26__["Navbar2Component"],
                _shared_navbar3_navbar3_component__WEBPACK_IMPORTED_MODULE_27__["Navbar3Component"],
                _views_home_home_component__WEBPACK_IMPORTED_MODULE_28__["HomeComponent"],
                _views_post_post_component__WEBPACK_IMPORTED_MODULE_29__["PostComponent"],
                _components_image_image_component__WEBPACK_IMPORTED_MODULE_30__["ImageComponent"],
                _views_notificationuser_notificationuser_component__WEBPACK_IMPORTED_MODULE_32__["NotificationuserComponent"],
                _views_success_url_success_url_component__WEBPACK_IMPORTED_MODULE_33__["SuccessUrlComponent"],
                _views_fail_url_fail_url_component__WEBPACK_IMPORTED_MODULE_34__["FailUrlComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__["AngularMultiSelectModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _presentation_presentation_module__WEBPACK_IMPORTED_MODULE_14__["PresentationModule"],
                _sections_sections_module__WEBPACK_IMPORTED_MODULE_7__["SectionsModule"],
                _elements_elements_module__WEBPACK_IMPORTED_MODULE_8__["ElementsModule"],
                _examples_examples_module__WEBPACK_IMPORTED_MODULE_9__["ExamplesModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_24__["JwtModule"],
                _chat_chat_module__WEBPACK_IMPORTED_MODULE_31__["ChatModule"]
            ],
            providers: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "ZO5i":
/*!***********************************************************************!*\
  !*** ./src/app/elements/comments-areas/comments-areas.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tZW50cy1hcmVhcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "ZS0c":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar3/navbar3.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg bg-white fixed-top navbar-transparent\" color-on-scroll=\"500\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-translate\">\r\n           <a class=\"navbar-brand\" [routerLink]=\"['/views/profil']\" placement=\"bottom\" ngbTooltip=\"Designed by Invision. Coded by Creative Tim\">\r\n            <i class=\"now-ui-icons users_circle-08\"></i>\r\n                Profil\r\n             </a>\r\n             <a class=\"navbar-brand\" [routerLink]=\"['/views/createcv']\" placement=\"bottom\" >\r\n                <i class=\"now-ui-icons users_circle-08\"></i>\r\n                    Create/Modify Cv\r\n                 </a>\r\n             <a class=\"navbar-brand\" [routerLink]=\"['/views/searchu']\" placement=\"bottom\" >\r\n                <i class=\"now-ui-icons ui-1_zoom-bold\"></i>\r\n                Search\r\n              </a>\r\n             <a class=\"navbar-brand\" [routerLink]=\"['/views/calendar']\" placement=\"bottom\" >\r\n                <i class=\"now-ui-icons ui-1_calendar-60\"></i>\r\n                Calender\r\n             </a>\r\n             <a class=\"navbar-brand\" [routerLink]=\"['/views/chat']\" placement=\"bottom\" >\r\n                <i class=\"now-ui-icons ui-2_chat-round\"></i>\r\n                Chat\r\n             </a>\r\n             <a class=\"navbar-brand\"  [routerLink]=\"['/views/notificationuser']\" placement=\"bottom\" >\r\n                <i class=\"now-ui-icons ui-1_bell-53\"></i>\r\n                Notifications\r\n             </a>\r\n             \r\n           \r\n            <button class=\"navbar-toggler\"  type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\r\n                <span class=\"navbar-toggler-bar bar1\"></span>\r\n                <span class=\"navbar-toggler-bar bar2\"></span>\r\n                <span class=\"navbar-toggler-bar bar3\"></span>\r\n            </button>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" data-nav-image=\"assets/img/blurred-image-1.jpg\" data-color=\"orange\">\r\n         <ul class=\"navbar-nav ml-auto\">\r\n         <li  class=\"nav-item\">\r\n            <a class=\"nav-link btn btn-primary\" (click)=\"logout()\" [routerLink]=\"['/views/login']\">\r\n               <p>LOGOUT</p>\r\n               </a>\r\n            </li>\r\n            </ul>\r\n        </div>\r\n      \r\n       \r\n    </div>\r\n    \r\n</nav>\r\n");

/***/ }),

/***/ "ZoGs":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/profil/profil.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar3></app-navbar3>\r\n<div class=\"wrapper\">\r\n    <div class=\"page-header page-header-small\" filter-color=\"\">\r\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\" style=\"background-image: url('assets/img/bg27.jpg') ;\">\r\n        </div>\r\n        <div class=\"content-center\">\r\n            <div class=\"photo-container phot\">\r\n                <img src={{cv.img}} alt=\"\">\r\n           </div>\r\n            <h2 class=\"title tex\">{{datas.name}}</h2>\r\n            <br/>\r\n            <h2 class=\"category tex\">{{datas.lastname}}</h2>\r\n           \r\n             </div>\r\n        \r\n    </div>\r\n          \r\n    <!--  -->\r\n\r\n    <div style=\"display: flex; flex-wrap: wrap\">\r\n        <div class=\"container\" style=\"max-width: 500px;\" >\r\n      \r\n          <div class=\"card\">\r\n            <!-- <img\r\n              class=\"card-img-top\"\r\n              src=\"assets/img/PROFIL.jpg\"\r\n              alt=\"Card image cap\"\r\n            /> -->\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\"> Personal Information  </h5>\r\n            \r\n              <p class=\"card-text\">{{cv.descProfil}}</p>\r\n              <ul class=\"list-group list-group-flush\">\r\n                <li class=\"list-group-item\">  <i class=\"now-ui-icons ui-1_email-85\"></i>EMAIL <h5 >{{cv.email}}</h5></li>\r\n                <li class=\"list-group-item\"> <i class=\"now-ui-icons education_hat\"></i>PHONE <h5 >{{cv.phone}}</h5> </li>\r\n                <li class=\"list-group-item\"><i class=\"now-ui-icons shopping_shop\"></i>HOME ADRESS <h5 >{{cv.adress}}</h5> </li>\r\n                <li class=\"list-group-item\"><i class=\"now-ui-icons users_single-02\"></i>Age <h5 >{{cv.age}} ans</h5></li>\r\n              </ul>\r\n       \r\n            </div>\r\n          </div>\r\n        \r\n        </div>\r\n      </div>\r\n  \r\n    <div style=\"display: flex; flex-wrap: wrap\">\r\n        <div class=\"container\" style=\"max-width: 500px;\" >\r\n      \r\n          <div class=\"card\">\r\n            <!-- <img\r\n              class=\"card-img-top\"\r\n              src=\"assets/img/PROFIL.jpg\"\r\n              alt=\"Card image cap\"\r\n            /> -->\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\"> Professional Information  </h5>\r\n            \r\n              <p class=\"card-text\">{{cv.descProfil}}</p>\r\n              <ul class=\"list-group list-group-flush\">\r\n                <li class=\"list-group-item\"> <i class=\"now-ui-icons business_badge\"></i> FIELD  <h5 >{{cv.field}}</h5></li>\r\n                <li class=\"list-group-item\"> <i class=\"now-ui-icons education_hat\"></i>STUDY LEVEL <h5 >{{cv.studylevel}}</h5> </li>\r\n                <li class=\"list-group-item\"><i class=\"now-ui-icons business_briefcase-24\"></i> YEARS OF EXPERIENCE<h5 >{{cv.expyear}}</h5> </li>\r\n                <li class=\"list-group-item\"><i class=\"now-ui-icons business_briefcase-24\"></i> PROFESIONNAL EXPERIENCE <h5 >{{cv.ProfExp}}</h5></li>\r\n              </ul>\r\n       \r\n            </div>\r\n          </div>\r\n        \r\n        </div>\r\n      </div>\r\n      \r\n     \r\n  \r\n    <!--  -->\r\n   \r\n</div>\r\n\r\n");

/***/ }),

/***/ "aL58":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#background_header {\r\n    width: 100%;\r\n    height: 20vh;\r\n    background-color: rgb(248, 79, 0);\r\n}\r\n#background_body {\r\n    height: 80vh;\r\n    background: #e0e0e0;\r\n}\r\n#chatContainer {\r\n    position: fixed;\r\n    top: 0%;\r\n    bottom: 0%;\r\n    margin: auto;\r\n    width: 70%;\r\n    height: 90%;\r\n    background-color: #fff;\r\n    right: 0px;\r\n    left: 0px;\r\n    box-shadow: -1px 1px 5px rgba(51, 51, 51, 0.2);\r\n    border-radius: 3px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    overflow: hidden;\r\n}\r\n#chatContainer app-sidebar {\r\n    flex-basis: 30%;\r\n    display: block;\r\n    height: 100%;\r\n    border-right: 1px solid #e8e8e8;\r\n}\r\n#chatContainer #chat {\r\n    background-color: #f7f9fa;\r\n    flex-grow: 1;\r\n}\r\n#chatContainer #chat #chatPlaceholder {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100%;\r\n    flex-direction: column;\r\n}\r\n#chatContainer #chat #chatPlaceholder h2 {\r\n    font-size: 35px;\r\n    font-weight: normal;\r\n    color: #555;\r\n}\r\n#chatContainer #chat #chatPlaceholder .seperator {\r\n    width: 50%;\r\n    border-top: 1px solid #eaeaea;\r\n    margin: 30px 0px;\r\n}\r\n#chatContainer #chat #chatPlaceholder p {\r\n    text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsT0FBTztJQUNQLFVBQVU7SUFDVixZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFNBQVM7SUFDVCw4Q0FBOEM7SUFDOUMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLFlBQVk7SUFDWiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjtBQUNBO0lBQ0ksVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJjaGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFja2dyb3VuZF9oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCA3OSwgMCk7XHJcbn1cclxuI2JhY2tncm91bmRfYm9keSB7XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xyXG59XHJcbiNjaGF0Q29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMCU7XHJcbiAgICBib3R0b206IDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAtMXB4IDFweCA1cHggcmdiYSg1MSwgNTEsIDUxLCAwLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiNjaGF0Q29udGFpbmVyIGFwcC1zaWRlYmFyIHtcclxuICAgIGZsZXgtYmFzaXM6IDMwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2U4ZThlODtcclxufVxyXG4jY2hhdENvbnRhaW5lciAjY2hhdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOWZhO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG59XHJcbiNjaGF0Q29udGFpbmVyICNjaGF0ICNjaGF0UGxhY2Vob2xkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuI2NoYXRDb250YWluZXIgI2NoYXQgI2NoYXRQbGFjZWhvbGRlciBoMiB7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbn1cclxuI2NoYXRDb250YWluZXIgI2NoYXQgI2NoYXRQbGFjZWhvbGRlciAuc2VwZXJhdG9yIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcclxuICAgIG1hcmdpbjogMzBweCAwcHg7XHJcbn1cclxuI2NoYXRDb250YWluZXIgI2NoYXQgI2NoYXRQbGFjZWhvbGRlciBwIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "aQTP":
/*!******************************************************!*\
  !*** ./src/app/components/image/image.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fileinput input {\r\n  display: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoiaW1hZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlaW5wdXQgaW5wdXQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "b60P":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/fail-url/fail-url.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let alert of alerts\">\r\n  <ngb-alert [type]=\"alert.type\"  [dismissible]=\"false\" >\r\n      <div class=\"container\">\r\n          <div class=\"alert-wrapper\">\r\n              <button type=\"button\" name=\"button\" class=\"close\" (click)=\"closeAlert(alert)\">\r\n                <span aria-hidden=\"true\">\r\n                    <i class=\"now-ui-icons ui-1_simple-remove\"></i>\r\n                </span>\r\n              </button>\r\n              <div class=\"message\">\r\n                  <ng-container *ngIf=\"alert.icon\">\r\n                    <div class=\"alert-icon\">\r\n                        <i class=\"now-ui-icons {{alert.icon}}\"></i>\r\n                    </div>\r\n                  </ng-container>\r\n                  <strong>{{alert.strong}} </strong>{{ alert.message }}\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </ngb-alert>\r\n</div>\r\n");

/***/ }),

/***/ "bSW0":
/*!******************************************************!*\
  !*** ./src/app/chat/messages/messages.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\r\n    display: flex;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #e7dfdc;\r\n    flex-direction: column;\r\n}\r\n#container #header {\r\n    min-height: 67px;\r\n    background-color: #eee;\r\n    box-shadow: 2px 0px 4px #ccc;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n#container #header .avatarSection {\r\n    display: flex;\r\n}\r\n#container #header .avatarSection .picture {\r\n    min-width: 40px;\r\n    max-width: 40px;\r\n    margin: 0 10px;\r\n}\r\n#container #header .avatarSection .picture img {\r\n    max-width: 100%;\r\n}\r\n#container #header .avatarSection .nameSection {\r\n    flex-grow: 1;\r\n    color: #545454;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n#container #header .actionButtons {\r\n    min-width: 50px;\r\n    display: flex;\r\n}\r\n#container #header .actionButtons img {\r\n    width: 20px;\r\n    margin-right: 15px;\r\n    cursor: pointer;\r\n}\r\n#container #body {\r\n    flex-grow: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-direction: column-reverse;\r\n    padding: 20px 50px;\r\n    overflow: scroll;\r\n}\r\n#container #body .message {\r\n    margin-top: 10px;\r\n    display: flex;\r\n    align-items: flex-start;\r\n    color: #767676;\r\n    flex-direction: column;\r\n}\r\n#container #body .message .messageContent {\r\n    background-color: #fff;\r\n    border-radius: 5px;\r\n    padding: 10px;\r\n}\r\n#container #body .message .messageContent .time {\r\n    text-align: right;\r\n    color: #959698;\r\n    font-size: 13px;\r\n    margin-top: 5px;\r\n}\r\n#container #body .message.me {\r\n    align-items: flex-end;\r\n}\r\n#container #body .message.me .messageContent {\r\n    background-color: #dcf7c5;\r\n}\r\n#container #footer {\r\n    min-height: 67px;\r\n    background-color: #f0eeed;\r\n    display: flex;\r\n}\r\n#container #footer #smileyIcon {\r\n    flex-basis: 50px;\r\n}\r\n#container #footer #textarea {\r\n    flex-grow: 1;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n#container #footer #textarea textarea {\r\n    width: 100%;\r\n    height: 45px;\r\n    border: 0px;\r\n    border-radius: 4px;\r\n    resize: none;\r\n    outline: none;\r\n    padding: 14px;\r\n    font-family: sans-serif;\r\n    box-sizing: border-box;\r\n}\r\n#container #footer #micIcon {\r\n    flex-basis: 50px;\r\n}\r\n#container #footer #micIcon, #container #footer #smileyIcon {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n#container #footer #micIcon img, #container #footer #smileyIcon img {\r\n    max-width: 40%;\r\n    cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2Qsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQiIsImZpbGUiOiJtZXNzYWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdkZmRjO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4jY29udGFpbmVyICNoZWFkZXIge1xyXG4gICAgbWluLWhlaWdodDogNjdweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICBib3gtc2hhZG93OiAycHggMHB4IDRweCAjY2NjO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuI2NvbnRhaW5lciAjaGVhZGVyIC5hdmF0YXJTZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuI2NvbnRhaW5lciAjaGVhZGVyIC5hdmF0YXJTZWN0aW9uIC5waWN0dXJlIHtcclxuICAgIG1pbi13aWR0aDogNDBweDtcclxuICAgIG1heC13aWR0aDogNDBweDtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG59XHJcbiNjb250YWluZXIgI2hlYWRlciAuYXZhdGFyU2VjdGlvbiAucGljdHVyZSBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbiNjb250YWluZXIgI2hlYWRlciAuYXZhdGFyU2VjdGlvbiAubmFtZVNlY3Rpb24ge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4jY29udGFpbmVyICNoZWFkZXIgLmFjdGlvbkJ1dHRvbnMge1xyXG4gICAgbWluLXdpZHRoOiA1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4jY29udGFpbmVyICNoZWFkZXIgLmFjdGlvbkJ1dHRvbnMgaW1nIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiNjb250YWluZXIgI2JvZHkge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDUwcHg7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG59XHJcbiNjb250YWluZXIgI2JvZHkgLm1lc3NhZ2Uge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGNvbG9yOiAjNzY3Njc2O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4jY29udGFpbmVyICNib2R5IC5tZXNzYWdlIC5tZXNzYWdlQ29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4jY29udGFpbmVyICNib2R5IC5tZXNzYWdlIC5tZXNzYWdlQ29udGVudCAudGltZSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGNvbG9yOiAjOTU5Njk4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbiNjb250YWluZXIgI2JvZHkgLm1lc3NhZ2UubWUge1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcbiNjb250YWluZXIgI2JvZHkgLm1lc3NhZ2UubWUgLm1lc3NhZ2VDb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2Y3YzU7XHJcbn1cclxuI2NvbnRhaW5lciAjZm9vdGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDY3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBlZWVkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4jY29udGFpbmVyICNmb290ZXIgI3NtaWxleUljb24ge1xyXG4gICAgZmxleC1iYXNpczogNTBweDtcclxufVxyXG4jY29udGFpbmVyICNmb290ZXIgI3RleHRhcmVhIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiNjb250YWluZXIgI2Zvb3RlciAjdGV4dGFyZWEgdGV4dGFyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbiNjb250YWluZXIgI2Zvb3RlciAjbWljSWNvbiB7XHJcbiAgICBmbGV4LWJhc2lzOiA1MHB4O1xyXG59XHJcbiNjb250YWluZXIgI2Zvb3RlciAjbWljSWNvbiwgI2NvbnRhaW5lciAjZm9vdGVyICNzbWlsZXlJY29uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuI2NvbnRhaW5lciAjZm9vdGVyICNtaWNJY29uIGltZywgI2NvbnRhaW5lciAjZm9vdGVyICNzbWlsZXlJY29uIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDQwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./presentation/presentation.component */ "gVBG");
/* harmony import */ var _elements_elements_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./elements/elements.component */ "J8wC");
/* harmony import */ var _sections_sections_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/sections.component */ "T9bN");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chat/chat.component */ "+XlM");
/* harmony import */ var _views_post_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/post/post.component */ "22lU");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/home/home.component */ "QlPV");
/* harmony import */ var _views_landing_landing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/landing/landing.component */ "RMzx");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/login/login.component */ "QB/w");
/* harmony import */ var _views_profil_profil_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/profil/profil.component */ "pHAi");
/* harmony import */ var _views_company_company_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/company/company.component */ "McCo");
/* harmony import */ var _views_searchc_searchc_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/searchc/searchc.component */ "1Gpg");
/* harmony import */ var _views_searchu_searchu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/searchu/searchu.component */ "POiA");
/* harmony import */ var _views_signup_signup_u_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/signup/signup-u.component */ "P+9W");
/* harmony import */ var _views_create_cv_create_cv_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/create-cv/create-cv.component */ "pXDO");
/* harmony import */ var _views_notificationuser_notificationuser_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/notificationuser/notificationuser.component */ "l6ru");
/* harmony import */ var _views_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/calendar/calendar.component */ "dUxQ");
/* harmony import */ var _elements_nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./elements/nucleoicons/nucleoicons.component */ "kHdc");
/* harmony import */ var _views_success_url_success_url_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/success-url/success-url.component */ "O2we");
/* harmony import */ var _views_fail_url_fail_url_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./views/fail-url/fail-url.component */ "m6uJ");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./auth/auth.service */ "qXBG");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./auth/auth-guard.service */ "OTVi");
/* harmony import */ var _auth_role_guard_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./auth/role-guard.service */ "qRNK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









;


















var routes = [
    { path: '', redirectTo: 'views/profil', pathMatch: 'full' },
    { path: 'presentation', component: _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_5__["PresentationComponent"] },
    { path: 'elements', component: _elements_elements_component__WEBPACK_IMPORTED_MODULE_6__["ElementsComponent"] },
    { path: 'sections', component: _sections_sections_component__WEBPACK_IMPORTED_MODULE_7__["SectionsComponent"] },
    { path: 'nucleoicons', component: _elements_nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_21__["NucleoiconsComponent"] },
    { path: 'views/post', component: _views_post_post_component__WEBPACK_IMPORTED_MODULE_9__["PostComponent"], canActivate: [_auth_role_guard_service__WEBPACK_IMPORTED_MODULE_26__["RoleGuardService"]] },
    { path: 'views/createcv', component: _views_create_cv_create_cv_component__WEBPACK_IMPORTED_MODULE_18__["CreateCvComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_25__["AuthGuardService"]] },
    { path: 'views/notificationuser', component: _views_notificationuser_notificationuser_component__WEBPACK_IMPORTED_MODULE_19__["NotificationuserComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_25__["AuthGuardService"]] },
    { path: 'views/calendar', component: _views_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_20__["CalendarComponent"], canActivate: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_24__["AuthService"]] },
    { path: 'views/landing', component: _views_landing_landing_component__WEBPACK_IMPORTED_MODULE_11__["LandingComponent"] },
    { path: 'views/login', component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"] },
    { path: 'views/company', component: _views_company_company_component__WEBPACK_IMPORTED_MODULE_14__["CompanyComponent"] },
    { path: 'views/searchc', component: _views_searchc_searchc_component__WEBPACK_IMPORTED_MODULE_15__["SearchcComponent"], canActivate: [_auth_role_guard_service__WEBPACK_IMPORTED_MODULE_26__["RoleGuardService"]] },
    { path: 'views/home', component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], canActivate: [_auth_role_guard_service__WEBPACK_IMPORTED_MODULE_26__["RoleGuardService"]] },
    { path: 'views/searchu', component: _views_searchu_searchu_component__WEBPACK_IMPORTED_MODULE_16__["SearchuComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_25__["AuthGuardService"]] },
    { path: 'views/profil', component: _views_profil_profil_component__WEBPACK_IMPORTED_MODULE_13__["ProfilComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_25__["AuthGuardService"]] },
    { path: 'views/chat', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_8__["ChatComponent"], canActivate: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_24__["AuthService"]] },
    { path: 'views/signup', component: _views_signup_signup_u_component__WEBPACK_IMPORTED_MODULE_17__["SignupComponent"] },
    { path: 'views/failPayment', component: _views_fail_url_fail_url_component__WEBPACK_IMPORTED_MODULE_23__["FailUrlComponent"] },
    { path: 'views/successPayment', component: _views_success_url_success_url_component__WEBPACK_IMPORTED_MODULE_22__["SuccessUrlComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, {
                    //enableTracing:true,
                    useHash: true
                })
            ],
            exports: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "bjWv":
/*!***********************************************!*\
  !*** ./src/app/views/home/home.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "cruu":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "dTjC":
/*!***************************************************!*\
  !*** ./src/app/elements/modal/modal.component.ts ***!
  \***************************************************/
/*! exports provided: NgbdModalBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalBasic", function() { return NgbdModalBasic; });
/* harmony import */ var _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./modal.component.html */ "1GAx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NgbdModalBasic = /** @class */ (function () {
    function NgbdModalBasic(modalService) {
        this.modalService = modalService;
    }
    NgbdModalBasic.prototype.open = function (content, type, modalDimension) {
        var _this = this;
        if (modalDimension === 'sm' && type === 'modal_mini') {
            this.modalService.open(content, { windowClass: 'modal-mini modal-primary', size: 'sm' }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else if (modalDimension === 'md' && type === 'Login') {
            this.modalService.open(content, { windowClass: 'modal-login modal-primary' }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else {
            this.modalService.open(content).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
    };
    NgbdModalBasic.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NgbdModalBasic.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
    ]; };
    NgbdModalBasic = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngbd-modal-component',
            template: _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], NgbdModalBasic);
    return NgbdModalBasic;
}());



/***/ }),

/***/ "dUxQ":
/*!******************************************************!*\
  !*** ./src/app/views/calendar/calendar.component.ts ***!
  \******************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var _raw_loader_calendar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./calendar.component.html */ "E+Sv");
/* harmony import */ var _calendar_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar.component.css */ "ns17");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_service_joboffer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/joboffer.service */ "YaTt");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FullCalendar = __webpack_require__(/*! fullcalendar */ "Io7t");


var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(jobservice) {
        this.jobservice = jobservice;
        this.token = localStorage.getItem("userid") || localStorage.getItem("companyid");
        this.bigcalend = [];
        this.bolean = true;
    }
    CalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jobservice.decode(this.token).subscribe(function (id) {
            if (localStorage.getItem("userid")) {
                _this.option = id.userid;
            }
            else if (localStorage.getItem("companyid")) {
                _this.option = id.companyid;
                _this.bolean = false;
            }
            _this.jobservice.getcalendar(_this.option).subscribe(function (cal) {
                _this.bigcalend = cal;
                console.log(_this.bigcalend);
                var today = new Date();
                var y = today.getFullYear();
                var m = today.getMonth();
                var d = today.getDate();
                var calendarEl = document.getElementById('calendar');
                var calendar = new FullCalendar.Calendar(calendarEl, {
                    defaultDate: today,
                    editable: true,
                    selectable: true,
                    header: {
                        left: 'title',
                        center: 'month,agendaWeek,agendaDay',
                        right: 'prev,next,today'
                    },
                    views: {
                        month: {
                            titleFormat: { month: 'long', year: 'numeric' }
                        },
                        agendaWeek: {
                            titleFormat: { month: 'long', year: 'numeric', day: 'numeric' },
                        },
                        agendaDay: {
                            titleFormat: { month: 'short', year: 'numeric', day: 'numeric' }
                        },
                    },
                    eventLimit: true,
                    events: _this.bigcalend,
                    eventClick: function (info) {
                        info.jsEvent.preventDefault();
                        console.log('hey', info);
                    },
                    select: function (info) {
                        console.log(info);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                            title: 'Create an Event',
                            html: '<div class="form-group">' +
                                '<input class="form-control" type="title" placeholder="Event Title" id="input-field">' +
                                '<input class="form-control"  type="time"  placeholder="Time start" id="input-field1">' +
                                '<select  id="input-field2" > <option value="red">Red</option><option value="blue">Blue</option><option value="green">Green</option><option value="pink">Pink</option></select>' +
                                '</div>' +
                                '</form>',
                            showCancelButton: true,
                            customClass: {
                                confirmButton: 'btn btn-success ',
                                cancelButton: 'btn btn-danger',
                            },
                            buttonsStyling: false,
                        }).then(function (result) {
                            console.log(_this.token);
                            var bol = true;
                            var eventData;
                            var event_title = document.getElementById("input-field").value;
                            var timestart = document.getElementById("input-field1").value;
                            var color = document.getElementById("input-field2").value;
                            console.log(_this.bigcalend);
                            for (var i = 0; i < _this.bigcalend.length; i++) {
                                if (_this.bigcalend[i].start === info.startStr + " " + timestart) {
                                    bol = false;
                                }
                            }
                            if (event_title && bol) {
                                eventData = {
                                    title: event_title,
                                    start: info.startStr + " " + timestart,
                                    end: info.startStr,
                                    color: color
                                };
                                console.log(id);
                                var calendar1 = {
                                    id: _this.option,
                                    title: eventData.title,
                                    start: eventData.start,
                                    end: eventData.end,
                                    color: eventData.color
                                };
                                console.log(calendar1);
                                _this.jobservice.createcalendar(calendar1).subscribe(function (create) { return console.log(create); });
                                console.log(eventData);
                                calendar.addEvent(eventData);
                            }
                        });
                    }
                });
                calendar.render();
            });
        });
    };
    CalendarComponent.prototype.onSubmit = function (start, id) {
        var _this = this;
        var day = start.split(" ")[0];
        var obj = {
            title: this.title,
            start: day + " " + this.time,
            end: day,
            color: this.color
        };
        if (!this.time) {
            obj.start = start;
        }
        if (!this.title) {
            delete obj.title;
        }
        this.jobservice.updatecalendar(id, obj).subscribe(function (update) {
            console.log(update);
            for (var i = 0; i < _this.bigcalend.length; i++) {
                if (_this.bigcalend[i].start === start) {
                    _this.bigcalend[i] = obj;
                }
            }
        });
    };
    CalendarComponent.prototype.delete = function (start, id) {
        var _this = this;
        this.jobservice.deletecalendar(id).subscribe(function (del) {
            console.log(del);
            for (var i = 0; i < _this.bigcalend.length; i++) {
                if (_this.bigcalend[i].start === start) {
                    _this.bigcalend.splice(i, 1);
                }
            }
        });
    };
    CalendarComponent.ctorParameters = function () { return [
        { type: app_service_joboffer_service__WEBPACK_IMPORTED_MODULE_4__["JobofferService"] }
    ]; };
    CalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-calendar",
            template: _raw_loader_calendar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_calendar_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_service_joboffer_service__WEBPACK_IMPORTED_MODULE_4__["JobofferService"]])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "eXCi":
/*!************************************************************!*\
  !*** ./src/app/shared/image-upload/image-upload.module.ts ***!
  \************************************************************/
/*! exports provided: ImageUploadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploadModule", function() { return ImageUploadModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _image_upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-upload.component */ "Tju2");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ImageUploadModule = /** @class */ (function () {
    function ImageUploadModule() {
    }
    ImageUploadModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_image_upload_component__WEBPACK_IMPORTED_MODULE_2__["ImageUploadComponent"]],
            exports: [_image_upload_component__WEBPACK_IMPORTED_MODULE_2__["ImageUploadComponent"]]
        })
    ], ImageUploadModule);
    return ImageUploadModule;
}());



/***/ }),

/***/ "gVBG":
/*!********************************************************!*\
  !*** ./src/app/presentation/presentation.component.ts ***!
  \********************************************************/
/*! exports provided: PresentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationComponent", function() { return PresentationComponent; });
/* harmony import */ var _raw_loader_presentation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./presentation.component.html */ "+pZr");
/* harmony import */ var _presentation_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presentation.component.scss */ "71yw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rellax */ "HbP6");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PresentationComponent = /** @class */ (function () {
    function PresentationComponent() {
        this.model = {
            left: true,
            middle: false,
            right: false
        };
        this.date = new Date();
    }
    PresentationComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('presentation-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    PresentationComponent.prototype.ngAfterViewInit = function () {
        setTimeout(function () {
            if (window.innerWidth >= 991) {
                var rellax = new rellax__WEBPACK_IMPORTED_MODULE_3__('.rellax', {
                    center: true
                });
                var rellax1 = new rellax__WEBPACK_IMPORTED_MODULE_3__('.rellax1', {
                    center: true
                });
                var rellax5 = new rellax__WEBPACK_IMPORTED_MODULE_3__('.rellax5', {
                    center: true
                });
                var rellax6 = new rellax__WEBPACK_IMPORTED_MODULE_3__('.rellax6', {
                    center: true
                });
                var rellax7 = new rellax__WEBPACK_IMPORTED_MODULE_3__('.rellax7', {
                    center: true
                });
                var rellax8 = new rellax__WEBPACK_IMPORTED_MODULE_3__('.rellax8', {
                    center: true
                });
                var rellax9 = new rellax__WEBPACK_IMPORTED_MODULE_3__('.rellax9', {
                    center: true
                });
                var rellax10 = new rellax__WEBPACK_IMPORTED_MODULE_3__('.rellax10', {
                    center: true
                });
                var rellax11 = new rellax__WEBPACK_IMPORTED_MODULE_3__('.rellax11', {
                    center: true
                });
                var rellax12 = new rellax__WEBPACK_IMPORTED_MODULE_3__('.rellax12', {
                    center: true
                });
                var rellax13 = new rellax__WEBPACK_IMPORTED_MODULE_3__('.rellax13', {
                    center: true
                });
                var rellax14 = new rellax__WEBPACK_IMPORTED_MODULE_3__('.rellax14', {
                    center: true
                });
                var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_3__('.rellax-header');
                var rellaxText = new rellax__WEBPACK_IMPORTED_MODULE_3__('.rellax-text');
            }
        }, 200);
    };
    PresentationComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('presentation-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    PresentationComponent.ctorParameters = function () { return []; };
    PresentationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-presentation',
            template: _raw_loader_presentation_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_presentation_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], PresentationComponent);
    return PresentationComponent;
}());



/***/ }),

/***/ "gqYc":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/examples.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  examples works!\r\n</p>\r\n");

/***/ }),

/***/ "gyJr":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/elements/tables-areas/tables-areas.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\">\r\n    <div class=\"container\">\r\n      <h3 class=\"title\">Content Areas</h3>\r\n\r\n      <div class=\"title\">\r\n          <h3>\r\n              <small>Tables</small>\r\n          </h3>\r\n      </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n              <h4>\r\n                  <small>Simple Table</small>\r\n              </h4>\r\n          </div>\r\n            <div class=\"col-md-8 ml-auto mr-auto\">\r\n                <h6>Simple With Actions</h6>\r\n                <div class=\"card card-plain\">\r\n                    <div class=\"card-body\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table\">\r\n                            <thead>\r\n                                <tr>\r\n                                  <th class=\"text-center\">{{ tableData1.headerRow[0] }}</th>\r\n                                  <th>{{ tableData1.headerRow[1] }}</th>\r\n                                  <th>{{ tableData1.headerRow[2] }}</th>\r\n                                  <th class=\"text-center\">{{ tableData1.headerRow[3] }}</th>\r\n                                  <th class=\"text-right\">{{ tableData1.headerRow[4] }}</th>\r\n                                  <th class=\"text-right\">{{ tableData1.headerRow[5] }}</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let row of tableData1.dataRows\">\r\n                                    <td class=\"text-center\">{{row[0]}}</td>\r\n                                    <td>{{row[1]}}</td>\r\n                                    <td>{{row[2]}}</td>\r\n                                    <td class=\"text-center\">{{row[3]}}</td>\r\n                                    <td class=\"text-right\">&euro; {{row[4]}}</td>\r\n                                    <td class=\"td-actions text-right\">\r\n                                      <button type=\"button\" ngbTooltip=\"View Profile\" class=\"btn btn-info btn-icon btn-sm {{row[5]}}\">\r\n                                          <i class=\"now-ui-icons users_single-02\"></i>\r\n                                      </button>\r\n                                      <button type=\"button\" ngbTooltip=\"Edit Profile\" class=\"btn btn-success btn-icon btn-sm {{row[5]}}\">\r\n                                          <i class=\"now-ui-icons ui-2_settings-90\"></i>\r\n                                      </button>\r\n                                      <button type=\"button\" ngbTooltip=\"Remove\" class=\"btn btn-danger btn-icon btn-sm {{row[5]}}\">\r\n                                          <i class=\"now-ui-icons ui-1_simple-remove\"></i>\r\n                                      </button>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <h6>Striped With Checkboxes</h6>\r\n                <div class=\"card card-plain\">\r\n                    <div class=\"card-body\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table table-striped\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th class=\"text-center\">{{ tableData2.headerRow[0] }}</th>\r\n                                    <th></th>\r\n                                    <th>{{ tableData2.headerRow[1] }}</th>\r\n                                    <th>{{ tableData2.headerRow[2] }}</th>\r\n                                    <th>{{ tableData2.headerRow[3] }}</th>\r\n                                    <th class=\"text-right\">{{ tableData2.headerRow[4] }}</th>\r\n                                    <th class=\"text-right\">{{ tableData2.headerRow[5] }}</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let row of tableData2.dataRows\">\r\n                                    <td class=\"text-center\">{{row.id}}</td>\r\n                                    <td>\r\n                                        <div [ngSwitch]=\"row.check\">\r\n                                            <div *ngSwitchCase=\"true\">\r\n                                                <div class=\"form-check\">\r\n                                                    <label class=\"form-check-label\">\r\n                                                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\r\n                                                        <span class=\"form-check-sign\"></span>\r\n                                                    </label>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div *ngSwitchDefault>\r\n                                                <div class=\"form-check\">\r\n                                                    <label class=\"form-check-label\">\r\n                                                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\" >\r\n                                                        <span class=\"form-check-sign\"></span>\r\n                                                    </label>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>{{row.product_name}}</td>\r\n                                    <td>{{row.type}}</td>\r\n                                    <td>{{row.qty}}</td>\r\n                                    <td class=\"text-right\">&euro; {{row.price}}</td>\r\n                                    <td class=\"text-right\">&euro; {{row.amount}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td colspan=\"5\"></td>\r\n                                    <td class=\"td-total\">\r\n                                        Total\r\n                                    </td>\r\n                                    <td class=\"td-price\">\r\n                                        {{getTotal1() | currency:'EUR':'symbol':'1.2-2'}}\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n              <h4>\r\n                  <small>Shopping Cart Table</small>\r\n              </h4>\r\n          </div>\r\n            <div class=\"col-md-12\">\r\n              <div class=\"card card-plain\">\r\n                  <div class=\"card-body\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table table-shopping\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th class=\"text-center\"></th>\r\n                                    <th>{{ tableData3.headerRow[2] }}</th>\r\n                                    <th>{{ tableData3.headerRow[3] }}</th>\r\n                                    <th>{{ tableData3.headerRow[4] }}</th>\r\n                                    <th class=\"text-right\">{{ tableData3.headerRow[5] }}</th>\r\n                                    <th class=\"text-right\">{{ tableData3.headerRow[6] }}</th>\r\n                                    <th class=\"text-right\">{{ tableData3.headerRow[7] }}</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let row of tableData3.dataRows\">\r\n                                    <td>\r\n                                        <div class=\"img-container\">\r\n                                            <img src=\"assets/img/{{row[0]}}\" alt=\"...\">\r\n                                        </div>\r\n                                    </td>\r\n                                    <td class=\"td-name\">\r\n                                        <a>{{row[1]}}</a>\r\n                                        <br />\r\n                                        <small>{{row[2]}}</small>\r\n                                    </td>\r\n                                    <td>{{row[3]}}</td>\r\n                                    <td>{{row[4]}}</td>\r\n                                    <td class=\"td-number\"><small>€</small>{{row[5]}}</td>\r\n                                    <td class=\"td-number\">\r\n                                        {{row[6]}}\r\n                                        <div class=\"btn-group\">\r\n                                            <button class=\"btn btn-info btn-sm\"> <i class=\"now-ui-icons ui-1_simple-delete\"></i> </button>\r\n                                            <button class=\"btn btn-info btn-sm\"> <i class=\"now-ui-icons ui-1_simple-add\"></i> </button>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td class=\"td-number\">\r\n                                        <small>€</small>{{row[7]}}\r\n                                    </td>\r\n                                    <td class=\"td-actions\">\r\n                                        <button type=\"button\" placement=\"top\" ngbTooltip=\"Remove item\" class=\"btn btn-neutral\">\r\n                                            <i class=\"now-ui-icons ui-1_simple-remove\"></i>\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td colspan=\"3\">\r\n                                    </td>\r\n                                    <td class=\"td-total\">\r\n                                        Total\r\n                                    </td>\r\n                                    <td class=\"td-price\">\r\n                                        {{getTotal2() | currency:'EUR':'symbol':'1.2-2'}}\r\n                                    </td>\r\n                                    <td colspan=\"3\" class=\"text-right\">\r\n                                      <button type=\"button\" class=\"btn btn-info btn-round \" (click)=\"showElements()\">Complete Purchase <i class=\"now-ui-icons arrows-1_minimal-right\"></i>\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                  </div>\r\n              </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "hMDP":
/*!************************************************!*\
  !*** ./src/app/examples/examples.component.ts ***!
  \************************************************/
/*! exports provided: ExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesComponent", function() { return ExamplesComponent; });
/* harmony import */ var _raw_loader_examples_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./examples.component.html */ "gqYc");
/* harmony import */ var _examples_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./examples.component.scss */ "w1at");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExamplesComponent = /** @class */ (function () {
    function ExamplesComponent() {
    }
    ExamplesComponent.prototype.ngOnInit = function () {
    };
    ExamplesComponent.ctorParameters = function () { return []; };
    ExamplesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-examples',
            template: _raw_loader_examples_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_examples_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ }),

/***/ "ieWF":
/*!*********************************************!*\
  !*** ./src/app/examples/examples.module.ts ***!
  \*********************************************/
/*! exports provided: ExamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesModule", function() { return ExamplesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "e/mZ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-chips */ "Kb4U");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-nouislider */ "yw8I");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "yQBb");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var _shared_image_upload_image_upload_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/image-upload/image-upload.module */ "eXCi");
/* harmony import */ var _examples_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples.component */ "hMDP");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ExamplesModule = /** @class */ (function () {
    function ExamplesModule() {
    }
    ExamplesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_4__["TagInputModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__["NouisliderModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_7__["JwBootstrapSwitchNg2Module"],
                angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_2__["AngularMultiSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({
                    apiKey: 'YOUR_KEY_HERE'
                }),
                _shared_image_upload_image_upload_module__WEBPACK_IMPORTED_MODULE_9__["ImageUploadModule"]
            ],
            declarations: [
                _examples_component__WEBPACK_IMPORTED_MODULE_10__["ExamplesComponent"],
            ]
        })
    ], ExamplesModule);
    return ExamplesModule;
}());



/***/ }),

/***/ "j16F":
/*!***********************************************************************!*\
  !*** ./src/app/views/notificationuser/notificationuser.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb251c2VyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "kHdc":
/*!***************************************************************!*\
  !*** ./src/app/elements/nucleoicons/nucleoicons.component.ts ***!
  \***************************************************************/
/*! exports provided: NucleoiconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NucleoiconsComponent", function() { return NucleoiconsComponent; });
/* harmony import */ var _raw_loader_nucleoicons_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./nucleoicons.component.html */ "FzHV");
/* harmony import */ var _nucleoicons_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nucleoicons.component.scss */ "sFs2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NucleoiconsComponent = /** @class */ (function () {
    function NucleoiconsComponent(element) {
        this.element = element;
    }
    NucleoiconsComponent.prototype.ngOnInit = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.remove('navbar-transparent');
    };
    NucleoiconsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
    };
    NucleoiconsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
    ]; };
    NucleoiconsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-nucleoicons',
            template: _raw_loader_nucleoicons_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_nucleoicons_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]])
    ], NucleoiconsComponent);
    return NucleoiconsComponent;
}());



/***/ }),

/***/ "kQxL":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/sections.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n    <div class=\"section-space\"></div>\r\n    \r\n</div>\r\n");

/***/ }),

/***/ "krej":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/multiselect/multiselect.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<angular2-multiselect \r\n  [data]=\"dropdownList\" \r\n  [(ngModel)]=\"selectedItems\" \r\n  [settings]=\"dropdownSettings\"\r\n  (onSelect)=\"onItemSelect($event)\" \r\n  (onDeSelect)=\"OnItemDeSelect($event)\" \r\n  (onSelectAll)=\"onSelectAll($event)\"\r\n  (onDeSelectAll)=\"onDeSelectAll($event)\">\r\n</angular2-multiselect>");

/***/ }),

/***/ "l6ru":
/*!**********************************************************************!*\
  !*** ./src/app/views/notificationuser/notificationuser.component.ts ***!
  \**********************************************************************/
/*! exports provided: NotificationuserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationuserComponent", function() { return NotificationuserComponent; });
/* harmony import */ var _raw_loader_notificationuser_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./notificationuser.component.html */ "0R2i");
/* harmony import */ var _notificationuser_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notificationuser.component.css */ "j16F");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_service_follows_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/follows.service */ "Wdzh");
/* harmony import */ var app_service_joboffer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/joboffer.service */ "YaTt");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NotificationuserComponent = /** @class */ (function () {
    function NotificationuserComponent(followservice, jobservice) {
        this.followservice = followservice;
        this.jobservice = jobservice;
        this.token = localStorage.getItem("userid");
        this.messages = [];
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5___default()('http://localhost:4001');
    }
    NotificationuserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jobservice.decode(this.token).subscribe(function (id) {
            _this.followservice.searchfollow(id.userid).subscribe(function (search) {
                console.log(search);
                for (var i = 0; i < search.length; i++) {
                    console.log(search[i].idcompany);
                    _this.followservice.findnotification(search[i].idcompany).subscribe(function (not) {
                        _this.messages = not;
                        console.log(_this.messages);
                    });
                }
            });
            _this.socket.on('connection', function (msg) { return console.log(msg); });
            _this.followservice.gettallfollow().subscribe(function (follows) {
                _this.socket.on("notification", function (obj) {
                    for (var i = 0; i < follows.length; i++) {
                        if (follows[i].iduser === id.userid && follows[i].idcompany === obj.sender) {
                            _this.messages.push(obj);
                        }
                    }
                });
            });
        });
    };
    NotificationuserComponent.ctorParameters = function () { return [
        { type: app_service_follows_service__WEBPACK_IMPORTED_MODULE_3__["followsService"] },
        { type: app_service_joboffer_service__WEBPACK_IMPORTED_MODULE_4__["JobofferService"] }
    ]; };
    NotificationuserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-notificationuser',
            template: _raw_loader_notificationuser_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_notificationuser_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_service_follows_service__WEBPACK_IMPORTED_MODULE_3__["followsService"], app_service_joboffer_service__WEBPACK_IMPORTED_MODULE_4__["JobofferService"]])
    ], NotificationuserComponent);
    return NotificationuserComponent;
}());



/***/ }),

/***/ "m6uJ":
/*!******************************************************!*\
  !*** ./src/app/views/fail-url/fail-url.component.ts ***!
  \******************************************************/
/*! exports provided: FailUrlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FailUrlComponent", function() { return FailUrlComponent; });
/* harmony import */ var _raw_loader_fail_url_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./fail-url.component.html */ "b60P");
/* harmony import */ var _fail_url_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fail-url.component.css */ "Y6MI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FailUrlComponent = /** @class */ (function () {
    function FailUrlComponent() {
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: 'danger',
            strong: 'FAILED  !',
            message: ' payment is refused, the order is cancelled. ',
            icon: 'objects_support-17'
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    FailUrlComponent.prototype.ngOnInit = function () { };
    FailUrlComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    FailUrlComponent.ctorParameters = function () { return []; };
    FailUrlComponent.propDecorators = {
        alerts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    FailUrlComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-fail-url',
            template: _raw_loader_fail_url_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_fail_url_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], FailUrlComponent);
    return FailUrlComponent;
}());



/***/ }),

/***/ "mTh2":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-navbar3 *ngIf=\"bolean\"></app-navbar3>\r\n<app-navbar2 *ngIf=\"!bolean\"></app-navbar2> -->\r\n\r\n<div id=\"background_header\"></div>\r\n<div id=\"background_body\"></div>\r\n\r\n<div id=\"chatContainer\">\r\n  <app-sidebar\r\n    (conversationClicked)=\"onConversationSelected($event)\"\r\n  ></app-sidebar>\r\n  <div id=\"chat\">\r\n    <div id=\"chatPlaceholder\" *ngIf=\"!conversation\">\r\n      <img width=\"400\" src=\"../assets/img/ng.Blanc_transparent.png\" />\r\n      <h2>Stay connected</h2>\r\n      <p>\r\n        We connects you  to company.<br />\r\n        \r\n      </p>\r\n      <div class=\"seperator\"></div>\r\n\r\n      <p>Be  available .</p>\r\n    </div>\r\n\r\n    <app-messages [conversation]=\"conversation\" *ngIf=\"conversation\"></app-messages>\r\n  </div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n");

/***/ }),

/***/ "nMtc":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/searchu/searchu.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar3></app-navbar3>\r\n<div class=\"wrapper\">\r\n  <div class=\"page-header page-header-small\">\r\n    <div\r\n      class=\"page-header-image rellax-header\"\r\n      data-rellax-speed=\"-8\"\r\n      style=\"background-image: url('assets/img/bg32.jpg')\"\r\n    ></div>\r\n    <div class=\"content-center\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8 ml-auto mr-auto\">\r\n          <h1 class=\"title\">Search For Campany</h1>\r\n          <h4>Meet the amazing candidate and find out more about them.</h4>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"section-btn\">\r\n    <!-- search area -->\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6 col-lg-4\">\r\n        <div class=\"form-group\">\r\n          <form class=\"form\" method=\"\" action=\"\" (ngSubmit)=\"onSubmit()\">\r\n            <input\r\n              type=\"text\"\r\n              name=\"offerTitle\"\r\n              [(ngModel)]=\"offerTitle\"\r\n              placeholder=\"Search\"\r\n              class=\"form-control\"\r\n            />\r\n            <input\r\n              type=\"submit\"\r\n              value=\"Search\"\r\n              class=\"btn btn-primary btn-sm\"\r\n            />\r\n          </form>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- <button type=\"button\" class=\"btn btn-primary\">Search</button> -->\r\n    </div>\r\n  </div>\r\n  <!-- dropDown -->\r\n  <div id=\"drop-btn\">\r\n    <div ngbDropdown class=\"dropdown\" placement=\"bottom-right\">\r\n      <button class=\"btn btn-default dropdown-toggle\" ngbDropdownToggle>\r\n        type of contract {{ typeOfContract }}\r\n      </button>\r\n      <div ngbDropdownMenu>\r\n        <a class=\"dropdown-item\" (click)=\"click($event)\">CDI </a>\r\n        <a class=\"dropdown-item\" (click)=\"click($event)\">CDD</a>\r\n        <a class=\"dropdown-item\" (click)=\"click($event)\">Freelance</a>\r\n        <a class=\"dropdown-item\" (click)=\"click($event)\">Traineeship</a>\r\n        <a class=\"dropdown-item\" (click)=\"click($event)\">alternation</a>\r\n        <a class=\"dropdown-item\" (click)=\"click($event)\"></a>\r\n      </div>\r\n    </div>\r\n    <div ngbDropdown class=\"dropdown\" placement=\"bottom-right\">\r\n      <button class=\"btn btn-default dropdown-toggle\" ngbDropdownToggle>\r\n        minimum salary {{ salary }}\r\n      </button>\r\n      <div ngbDropdownMenu>\r\n        <a class=\"dropdown-item\" (click)=\"click1($event)\">Less than 600DT</a>\r\n        <a class=\"dropdown-item\" (click)=\"click1($event)\"\r\n          >Between 600DT and 1200DT</a\r\n        >\r\n        <a class=\"dropdown-item\" (click)=\"click1($event)\"\r\n          >Between 1200DT and 1500DT</a\r\n        >\r\n        <a class=\"dropdown-item\" (click)=\"click1($event)\">More than 1500 DT</a>\r\n        <a class=\"dropdown-item\" (click)=\"click1($event)\"></a>\r\n      </div>\r\n    </div>\r\n    <div ngbDropdown class=\"dropdown\" placement=\"bottom-right\">\r\n      <button class=\"btn btn-default dropdown-toggle\" ngbDropdownToggle>\r\n        Years of experience {{ yearsOfExperience }}\r\n      </button>\r\n      <div ngbDropdownMenu>\r\n        <a class=\"dropdown-item\" (click)=\"click2($event)\">Less than 1 year </a>\r\n        <a class=\"dropdown-item\" (click)=\"click2($event)\"\r\n          >Between 1 and 2 years</a\r\n        >\r\n        <a class=\"dropdown-item\" (click)=\"click2($event)\"\r\n          >Between 2 and 5 years</a\r\n        >\r\n        <a class=\"dropdown-item\" (click)=\"click2($event)\">More than 5 years</a>\r\n        <a class=\"dropdown-item\" (click)=\"click2($event)\"></a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--end dropdown  -->\r\n\r\n  <div class=\"separator-line separator-primary\"></div>\r\n  <!--  -->\r\n\r\n  <!--  -->\r\n  <div style=\"display: flex; flex-wrap: wrap\">\r\n    <div class=\"container\" style=\"max-width: 500px;\" *ngFor=\"let data of datas; let i = index\">\r\n  \r\n      <div class=\"card\">\r\n        <!-- <img\r\n          class=\"card-img-top\"\r\n          src=\"assets/img/PROFIL.jpg\"\r\n          alt=\"Card image cap\"\r\n        /> -->\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">{{ data.companyName }}</h5>\r\n          <h4 class=\"card-title\">{{ data.offerTitle }}</h4>\r\n          <p class=\"card-text\">{{ data.offerDescription }}</p>\r\n          <ul class=\"list-group list-group-flush\">\r\n            <li class=\"list-group-item\">{{ data.salary }}</li>\r\n            <li class=\"list-group-item\">{{ data.yearsOfExperience }}</li>\r\n            <li class=\"list-group-item\">{{ data.typeOfContract }}</li>\r\n          </ul>\r\n          <button type=\"button\" (click)=\"apply(data)\"  [routerLink]=\"['/views/chat']\" class=\"btn btn-primary btn-link\">Apply</button>\r\n          <button\r\n            *ngIf=\"!follows[i]\"\r\n            type=\"button\"\r\n            class=\"btn btn-primary btn-just-icon\"\r\n            (click)=\"follow(data, i)\"\r\n            ngbTooltip=\"follow\"\r\n          >\r\n            <i class=\"fa fa-heart\"></i>\r\n          </button>\r\n          <button\r\n            *ngIf=\"follows[i]\"\r\n            type=\"button\"\r\n            class=\"btn btn-primary btn-just-icon\"\r\n            (click)=\"unfollow(data, i)\"\r\n            ngbTooltip=\"unfollow\"\r\n          >\r\n            unfollow\r\n          </button>\r\n        </div>\r\n      </div>\r\n    \r\n    </div>\r\n  </div>\r\n  <!--  -->\r\n  <div class=\"about-office\">\r\n    <div class=\"container\">\r\n      <div class=\"row text-center\">\r\n        <div class=\"col-md-8 ml-auto mr-auto\">\r\n          <h2 class=\"title\">Our office is our second home</h2>\r\n          <h4 class=\"description\">\r\n            Here are some pictures from our office. You can see the place looks\r\n            like a palace and is fully equiped with everything you need to get\r\n            the job done.\r\n          </h4>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <img\r\n            class=\"rounded img-raised\"\r\n            alt=\"Raised Image\"\r\n            src=\"assets/img/bg27.jpg\"\r\n          />\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <img\r\n            class=\"rounded img-raised\"\r\n            alt=\"Raised Image\"\r\n            src=\"assets/img/bg24.jpg\"\r\n          />\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <img\r\n            class=\"rounded img-raised\"\r\n            alt=\"Raised Image\"\r\n            src=\"assets/img/bg28.jpg\"\r\n          />\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <img\r\n            class=\"rounded img-raised\"\r\n            alt=\"Raised Image\"\r\n            src=\"assets/img/project6.jpg\"\r\n          />\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <img\r\n            class=\"rounded img-raised\"\r\n            alt=\"Raised Image\"\r\n            src=\"assets/img/project14.jpg\"\r\n          />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "nSew":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<div class=\"page-header\" filter-color=\"orange\">\r\n    <div class=\"page-header-image\" style=\"background-image:url(assets/img/project6.jpg)\"></div>\r\n    <div class=\"content-center\">\r\n        <div class=\"container\">\r\n            <div class=\"col-md-4 content-center\">\r\n                <div class=\"card card-login card-plain\">\r\n                    <form class=\"form\" method=\"\" action=\"\"  (ngSubmit)=\"onSubmit()\">\r\n                        <div class=\"card-header text-center\">\r\n                            <div id=\"logo-container\">\r\n                                <img id=\"logo\" src=\"assets/img/ng.Blanc_transparent.png\" alt=\"\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"input-group form-group-no-border input-lg\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                              <div class=\"input-group-prepend\">\r\n                                  <span class=\"input-group-text\">  <i class=\"now-ui-icons users_circle-08\"></i></span>\r\n                              </div>\r\n                                <input type=\"text\" name=\"email\" [(ngModel)]=\"email\" class=\"form-control\" placeholder=\"your email...\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\r\n                            </div>\r\n                            <div class=\"input-group form-group-no-border input-lg\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                              <div class=\"input-group-prepend\">\r\n                                  <span class=\"input-group-text\"><i class=\"now-ui-icons text_caps-small\"></i></span>\r\n                              </div>\r\n                                <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" placeholder=\"Password...\" class=\"form-control\" (focus)=\"focus1=true\" (blur)=\"focus1=false\"/>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-footer text-center\">\r\n                           \r\n                            <input type=\"submit\" value=\"LOGIN\" class=\"btn btn-primary btn-round btn-lg btn-block\">\r\n                          \r\n                        </div>\r\n                        <a [routerLink]=\"['/views/landing']\">\r\n                            About Us\r\n                        </a>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "nU5y":
/*!*****************************************************!*\
  !*** ./src/app/views/searchc/searchc.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#section-btn {\r\n    margin-top: 20px;\r\n    margin-left: 40%;\r\n}\r\n\r\n#drop-btn {\r\n    display: flex;\r\n    margin-left: 35%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaGMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNlYXJjaGMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzZWN0aW9uLWJ0biB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcclxufVxyXG5cclxuI2Ryb3AtYnRuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzUlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "nl4Y":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/create-cv/create-cv.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar3></app-navbar3>\r\n<div class=\"wrapper\">\r\n  <div class=\"page-header page-header-small\">\r\n    <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\"\r\n      style=\"background-image:  url('assets/img/create-cv.jpg');\">\r\n    </div>\r\n  </div>\r\n  <div class=\"main\">\r\n    <div class=\"contact-content\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12 ml-auto mr-auto\">\r\n            <h2 class=\"title\">Modify Your Profil</h2>\r\n            <form class=\"form\" method=\"\" action=\"\" (ngSubmit)=\"onSubmit1()\">\r\n              <div class=\"col-md-4\">\r\n                <label>Email</label>\r\n                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"><i class=\"now-ui-icons users_circle-08\"></i></span>\r\n                  </div>\r\n                  <input type=\"text\" class=\"form-control\" name=\"email1\" [(ngModel)]=\"email1\" placeholder=\"Your Email...\"\r\n                    (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                </div>\r\n\r\n              </div>\r\n\r\n              <div class=\"col-md-4\">\r\n                <label>Name</label>\r\n                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"><i class=\"now-ui-icons users_circle-08\"></i></span>\r\n                  </div>\r\n                  <input type=\"text\" class=\"form-control\" name=\"name1\" [(ngModel)]=\"name1\" placeholder=\"Your Name...\"\r\n                    (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                </div>\r\n\r\n              </div>\r\n\r\n              <div class=\"col-md-4\">\r\n                <label>Last Name</label>\r\n                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"><i class=\"now-ui-icons users_circle-08\"></i></span>\r\n                  </div>\r\n                  <input type=\"text\" class=\"form-control\" name=\"lastname1\" [(ngModel)]=\"lastname1\"\r\n                    placeholder=\"Your Last Name...\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <label>Passowrd</label>\r\n                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"><i class=\"now-ui-icons users_circle-08\"></i></span>\r\n                  </div>\r\n                  <input type=\"password\" class=\"form-control\" name=\"password1\" [(ngModel)]=\"password1\"\r\n                    placeholder=\"Your Password...\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                </div>\r\n\r\n              </div>\r\n              <input type=\"submit\" class=\"btn btn-primary btn-raised btn-round\" value=\"Modify\">\r\n\r\n            </form>\r\n            <h2 class=\"title\">Build Your CV</h2>\r\n            <p class=\"description\">Campany will be able to see your Profil To know about your skills\r\n              <br>\r\n              <br>\r\n            </p>\r\n            <form class=\"form\" method=\"\" action=\"\" (ngSubmit)=\"onSubmit()\">\r\n              <div class=\"row\" id=\"space\">\r\n                <div class=\"col-md-4\">\r\n                  <label>Name</label>\r\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"now-ui-icons users_circle-08\"></i></span>\r\n                    </div>\r\n                    <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"name\" placeholder=\"Your Name...\"\r\n                      (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-4\">\r\n                  <label>Last Name</label>\r\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"now-ui-icons users_circle-08\"></i></span>\r\n                    </div>\r\n                    <input type=\"text\" class=\"form-control\" name=\"lastname\" [(ngModel)]=\"lastName\"\r\n                      placeholder=\"Your Last Name...\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <label>Age</label>\r\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"now-ui-icons users_circle-08\"></i></span>\r\n                    </div>\r\n                    <input type=\"number\" class=\"form-control\" name=\"age\" [(ngModel)]=\"age\" placeholder=\"Your Age...\"\r\n                      (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\" id=\"space\">\r\n                <div class=\"col-md-6\">\r\n                  <label>Email address</label>\r\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"now-ui-icons ui-1_email-85\"></i></span>\r\n                    </div>\r\n                    <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"email\" placeholder=\"Email Here...\"\r\n                      (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                  </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"col-md-6\">\r\n                  <label>Phone</label>\r\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus2===true}\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"> <i class=\"now-ui-icons tech_mobile\"></i></span>\r\n                    </div>\r\n                    <input type=\"number\" name=\"phone\" [(ngModel)]=\"phone\" placeholder=\"Number Here...\"\r\n                      class=\"form-control\" (focus)=\"focus2=true\" (blur)=\"focus2=false\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\" id=\"space\">\r\n                <div class=\"col-md-12\">\r\n                  <label>Home Address</label>\r\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"now-ui-icons ui-1_email-85\"></i></span>\r\n                    </div>\r\n                    <input type=\"text\" class=\"form-control\" name=\"adress\" [(ngModel)]=\"adress\"\r\n                      placeholder=\"Adress Here...\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <div class=\"form-group\" id=\"space\">\r\n                <label>Profil Presentation</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"descProfil\" [(ngModel)]=\"descProfil\"\r\n                  placeholder=\"Your Profesionnal Presentation...\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n              </div>\r\n\r\n\r\n\r\n\r\n              <div class=\"row\" id=\"space\">\r\n                <div class=\"col-lg-6 col-md-5 col-sm-5\">\r\n                  <app-multiselect [single]=\"true\" [text]=\"'Field'\" [dropdownList]=\"dropdownList2\"\r\n                    [selectedItems]=\"selectedItems2\" (itemSelect)=\"click($event)\" (itemDeSelect)=\"click($event)\"\r\n                    (selectAll)=\"console.log($event)\" (deSelectAll)=\"console.log($event)\"></app-multiselect>\r\n                </div>\r\n              </div>\r\n\r\n\r\n\r\n\r\n              <div class=\"row\" id=\"space\">\r\n                <div class=\"col-lg-6 col-md-5 col-sm-5\">\r\n                  <app-multiselect [single]=\"true\" [text]=\"'Study Level'\" [dropdownList]=\"dropdownList\"\r\n                    [selectedItems]=\"selectedItems\" (itemSelect)=\"click1($event)\" (itemDeSelect)=\"click1($event)\"\r\n                    (selectAll)=\"console.log($event)\" (deSelectAll)=\"console.log($event)\"></app-multiselect>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\" id=\"space\">\r\n                <label>Profesionnal Experience</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"ProfExp\" [(ngModel)]=\"ProfExp\"\r\n                  placeholder=\"Your Profesionnal Presentation...\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n              </div>\r\n\r\n              <div class=\"row\" id=\"space\">\r\n                <div class=\"col-lg-6 col-md-5 col-sm-5\">\r\n                  <app-multiselect [single]=\"true\" [text]=\"'Years of experience'\" [dropdownList]=\"dropdownList1\"\r\n                    [selectedItems]=\"selectedItems1\" (itemSelect)=\"click2($event)\" (itemDeSelect)=\"click2($event)\"\r\n                    (selectAll)=\"test($event)\" (deSelectAll)=\"test($event)\"></app-multiselect>\r\n                </div>\r\n                <div>\r\n                  <!-- <app-image [isRound]=\"true\" (ngSubmit)=\"onSubmit()\"></app-image> -->\r\n                  <div class=\"form-group\">\r\n                    <label for=\"file\" class=\"btn\">Add Your Picture</label>\r\n                    <input type=\"file\"\r\n                           id=\"file\"\r\n                           (change)=\"handleFileInput($event.target.files)\" \r\n                           [(ngModel)]=\"img\"\r\n                       >\r\n                </div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n\r\n\r\n\r\n              <div class=\"submit text-center\">\r\n                <input type=\"submit\" class=\"btn btn-primary btn-raised btn-round\" value=\"Submit\" />\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <footer class=\"footer footer-default \">\r\n    <div class=\"container\">\r\n      <nav>\r\n        <ul>\r\n          <li>\r\n            <a href=\"https://www.creative-tim.com\">\r\n              Creative Tim\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"https://www.creative-tim.com/about-us\">\r\n              About Us\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"http://blog.creative-tim.com\">\r\n              Blog\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"https://www.creative-tim.com/license\">\r\n              License\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n      <div class=\"copyright\">\r\n        © {{data | date: 'yyyy'}}, Designed by\r\n        <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\r\n        <a href=\"#\" target=\"_blank\">NG.FORCE</a>.\r\n      </div>\r\n    </div>\r\n  </footer>\r\n</div>");

/***/ }),

/***/ "ns17":
/*!*******************************************************!*\
  !*** ./src/app/views/calendar/calendar.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title{\r\n  color:white}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGVuZGFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXIiwiZmlsZSI6ImNhbGVuZGFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XHJcbiAgY29sb3I6d2hpdGV9Il19 */");

/***/ }),

/***/ "pHAi":
/*!**************************************************!*\
  !*** ./src/app/views/profil/profil.component.ts ***!
  \**************************************************/
/*! exports provided: ProfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilComponent", function() { return ProfilComponent; });
/* harmony import */ var _raw_loader_profil_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./profil.component.html */ "ZoGs");
/* harmony import */ var _profil_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profil.component.css */ "L436");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rellax */ "HbP6");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _service_joboffer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/joboffer.service */ "YaTt");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfilComponent = /** @class */ (function () {
    function ProfilComponent(jobservice) {
        this.jobservice = jobservice;
        this.zoom = 14;
        this.lat = 44.445248;
        this.lng = 26.099672;
        this.styles = [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }];
        this.data = new Date();
        this.cv = { id: "none",
            name: "none",
            lastName: "none",
            age: "none",
            email: "none",
            adress: "none",
            descProfil: "none",
            ProfExp: "none",
            studylevel: "none",
            expyear: "none ",
            field: "none",
            phone: "none",
            img: ""
        };
        this.token = localStorage.getItem("userid");
    }
    ProfilComponent.prototype.ngOnInit = function () {
        var _this = this;
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_3__('.rellax-header');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('profile-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        this.jobservice.decode(this.token).subscribe(function (id) {
            _this.jobservice.iduser(id.userid).subscribe(function (datas) {
                _this.datas = datas;
                console.log(_this.datas);
            });
            _this.jobservice.getonecv(id.userid).subscribe(function (cv) {
                if (!cv) {
                    _this.cv = { id: "none",
                        name: "none",
                        lastName: "none",
                        age: "none",
                        email: "none",
                        adress: "none",
                        descProfil: "none",
                        ProfExp: "none",
                        studylevel: "none",
                        expyear: "none ",
                        field: "none",
                        phone: "none",
                        img: ""
                    };
                }
                else {
                    _this.cv = cv;
                    console.log(cv);
                }
            });
        });
    };
    ProfilComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('profile-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    ProfilComponent.ctorParameters = function () { return [
        { type: _service_joboffer_service__WEBPACK_IMPORTED_MODULE_4__["JobofferService"] }
    ]; };
    ProfilComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-profil',
            template: _raw_loader_profil_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_profil_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_service_joboffer_service__WEBPACK_IMPORTED_MODULE_4__["JobofferService"]])
    ], ProfilComponent);
    return ProfilComponent;
}());



/***/ }),

/***/ "pKtN":
/*!*****************************************************!*\
  !*** ./src/app/components/image/image.component.ts ***!
  \*****************************************************/
/*! exports provided: ImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComponent", function() { return ImageComponent; });
/* harmony import */ var _raw_loader_image_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./image.component.html */ "ttpV");
/* harmony import */ var _image_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image.component.css */ "aQTP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImageComponent = /** @class */ (function () {
    function ImageComponent() {
        this.isRound = false;
        this.state = {};
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }
    ImageComponent.prototype.ngOnInit = function () {
        this.state = {
            file: null,
            imagePreviewUrl: this.image !== undefined
                ? this.image
                : this.isRound
                    ? "assets/img/placeholder.jpg"
                    : "assets/img/image_placeholder.jpg",
        };
    };
    ImageComponent.prototype.ngAfterViewInit = function () {
        this.input.nativeElement.children[2].onchange = this.handleImageChange;
    };
    ImageComponent.prototype.handleImageChange = function (e) {
        var _this = this;
        e.preventDefault();
        var reader = new FileReader();
        var file = e.target.files[0];
        reader.onloadend = function () {
            _this.state.file = file;
            _this.state.imagePreviewUrl = reader.result;
            // this.state.imagePreviewUrl1 = reader.result;
        };
        reader.readAsDataURL(file);
    };
    ImageComponent.prototype.handleSubmit = function (e) {
        e.preventDefault();
        // this.state.file is the file/image uploaded
        // in this function you can save the image (this.state.file) on form submit
        // you have to call it yourself
    };
    ImageComponent.prototype.handleClick = function () {
        console.log(this.input.nativeElement.children[2].click());
        this.input.nativeElement.children[2].click();
    };
    ImageComponent.prototype.handleRemove = function () {
        this.state.file = null;
        this.state.imagePreviewUrl =
            this.image !== undefined
                ? this.image
                : this.isRound
                    ? "assets/img/placeholder.jpg"
                    : "assets/img/image_placeholder.jpg";
    };
    ImageComponent.ctorParameters = function () { return []; };
    ImageComponent.propDecorators = {
        isRound: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        input: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["input",] }]
    };
    ImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-image",
            template: _raw_loader_image_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_image_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], ImageComponent);
    return ImageComponent;
}());



/***/ }),

/***/ "pXDO":
/*!********************************************************!*\
  !*** ./src/app/views/create-cv/create-cv.component.ts ***!
  \********************************************************/
/*! exports provided: CreateCvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCvComponent", function() { return CreateCvComponent; });
/* harmony import */ var _raw_loader_create_cv_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./create-cv.component.html */ "nl4Y");
/* harmony import */ var _create_cv_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-cv.component.css */ "3Yx6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_service_joboffer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/joboffer.service */ "YaTt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rellax */ "HbP6");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateCvComponent = /** @class */ (function () {
    function CreateCvComponent(router, jobservice) {
        this.router = router;
        this.jobservice = jobservice;
        this.zoom = 14;
        this.lat = 44.445248;
        this.lng = 26.099672;
        this.data = new Date();
        this.dropdownList = [
            { id: 1, itemName: "Post Baccalauréat" },
            { id: 2, itemName: "baccalauréat" },
            { id: 3, itemName: "baccalauréat+3" },
            { id: 4, itemName: "baccalauréat+5" },
            { id: 5, itemName: "More then 5" },
        ];
        this.selectedItems = [];
        this.dropdownList1 = [
            { id: 1, itemName: "Less than 1 year" },
            { id: 2, itemName: "Between 1 and 2 years" },
            { id: 3, itemName: "Between 2 and 5 years" },
            { id: 4, itemName: "More than 5 years" },
        ];
        this.selectedItems1 = [];
        this.selectedItems2 = [];
        this.dropdownList2 = [
            { id: 1, itemName: "Software Solution" },
            { id: 2, itemName: "Design" },
            { id: 3, itemName: "Marketing" },
        ];
        this.token = localStorage.getItem("userid");
        this.fileToUpload = null;
    }
    CreateCvComponent.prototype.click = function (event) {
        console.log(event.itemName);
        this.field = event.itemName;
    };
    CreateCvComponent.prototype.click1 = function (event) {
        console.log(event.itemName);
        this.studylevel = event.itemName;
    };
    CreateCvComponent.prototype.click2 = function (event) {
        console.log(event.itemName);
        this.expyear = event.itemName;
    };
    CreateCvComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
        console.log(this.fileToUpload);
    };
    CreateCvComponent.prototype.onSubmit = function () {
        var _this = this;
        this.jobservice.decode(this.token).subscribe(function (id) {
            console.log(id.email);
            var obj = {
                id: id.userid,
                name: _this.name,
                lastname: _this.lastName,
                age: _this.age,
                email: _this.email,
                adress: _this.adress,
                descProfil: _this.descProfil,
                ProfExp: _this.ProfExp,
                studylevel: _this.studylevel,
                expyear: _this.expyear,
                field: _this.field,
                phone: _this.phone,
                img: "https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png"
            };
            if (_this.fileToUpload) {
                var file = new FormData();
                file.append("file", _this.fileToUpload);
                console.log(file);
                _this.jobservice.postimg(file).subscribe(function (data) {
                    obj.img = data.url;
                    console.log(_this.img);
                    console.log("OBJ OF CREATECV3 ", obj);
                    _this.jobservice.updatecv(id.userid, obj).subscribe(function (update) {
                        if (!update) {
                            _this.jobservice.createcv(obj).subscribe(function (create) {
                                _this.router.navigate(['views/profil']);
                                console.log(create);
                                return;
                            });
                        }
                        _this.router.navigate(['views/profil']);
                        return;
                    });
                });
            }
            else {
                _this.jobservice.updatecv(id.userid, obj).subscribe(function (update) {
                    if (!update) {
                        _this.jobservice.createcv(obj).subscribe(function (create) {
                            _this.router.navigate(['views/profil']);
                            console.log(create);
                        });
                    }
                    _this.router.navigate(['views/profil']);
                });
            }
        });
    };
    CreateCvComponent.prototype.onSubmit1 = function () {
        var _this = this;
        var obj = {
            name: this.name1,
            lastname: this.lastname1,
            email: this.email1,
            password: this.password1
        };
        if (!this.name1) {
            delete obj.name;
        }
        if (!this.lastname1) {
            delete obj.lastname;
        }
        if (!this.email1) {
            delete obj.email;
        }
        if (!this.password1) {
            delete obj.password;
        }
        this.jobservice.decode(this.token).subscribe(function (id) {
            _this.jobservice.updatuser(id.userid, obj).subscribe(function (upd) {
                return console.log(upd);
            });
        });
    };
    CreateCvComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_5__(".rellax-header");
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("contact-page");
        var navbar = document.getElementsByTagName("nav")[0];
        navbar.classList.add("navbar-transparent");
    };
    CreateCvComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("contact-page");
        var navbar = document.getElementsByTagName("nav")[0];
        navbar.classList.remove("navbar-transparent");
    };
    CreateCvComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: app_service_joboffer_service__WEBPACK_IMPORTED_MODULE_3__["JobofferService"] }
    ]; };
    CreateCvComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-create-cv",
            template: _raw_loader_create_cv_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_create_cv_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], app_service_joboffer_service__WEBPACK_IMPORTED_MODULE_3__["JobofferService"]])
    ], CreateCvComponent);
    return CreateCvComponent;
}());



/***/ }),

/***/ "pXMq":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/elements/notification/notification.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let alert of alerts\">\r\n    <ngb-alert [type]=\"alert.type\"  [dismissible]=\"false\" >\r\n        <div class=\"container\">\r\n            <div class=\"alert-wrapper\">\r\n                <button type=\"button\" name=\"button\" class=\"close\" (click)=\"closeAlert(alert)\">\r\n                  <span aria-hidden=\"true\">\r\n                      <i class=\"now-ui-icons ui-1_simple-remove\"></i>\r\n                  </span>\r\n                </button>\r\n                <div class=\"message\">\r\n                    <ng-container *ngIf=\"alert.icon\">\r\n                      <div class=\"alert-icon\">\r\n                          <i class=\"now-ui-icons {{alert.icon}}\"></i>\r\n                      </div>\r\n                    </ng-container>\r\n                    <strong>{{alert.strong}} </strong>{{ alert.message }}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ngb-alert>\r\n</div>\r\n");

/***/ }),

/***/ "qDI0":
/*!***********************************************************************!*\
  !*** ./src/app/elements/prefooter-areas/prefooter-areas.component.ts ***!
  \***********************************************************************/
/*! exports provided: PrefooterAreasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrefooterAreasComponent", function() { return PrefooterAreasComponent; });
/* harmony import */ var _raw_loader_prefooter_areas_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./prefooter-areas.component.html */ "OIiM");
/* harmony import */ var _prefooter_areas_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prefooter-areas.component.scss */ "xFxb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrefooterAreasComponent = /** @class */ (function () {
    function PrefooterAreasComponent() {
    }
    PrefooterAreasComponent.prototype.ngOnInit = function () {
    };
    PrefooterAreasComponent.ctorParameters = function () { return []; };
    PrefooterAreasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-prefooter-areas',
            template: _raw_loader_prefooter_areas_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_prefooter_areas_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], PrefooterAreasComponent);
    return PrefooterAreasComponent;
}());



/***/ }),

/***/ "qHR/":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/searchc/searchc.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar2></app-navbar2>\r\n<div class=\"wrapper\">\r\n    <div class=\"page-header page-header-small\">\r\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\" style=\"background-image: url('assets/img/bg32.jpg');\">\r\n        </div>\r\n        <div class=\"content-center\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8 ml-auto mr-auto\">\r\n                    <h1 class=\"title\">Search for candidate</h1>\r\n                    <h4>Meet the candidates  and find out more about them.</h4>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div id=\"section-btn\">\r\n        <!-- search area -->\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6 col-lg-4\">\r\n                <div class=\"form-group\">\r\n                    <form class=\"form\" method=\"\" action=\"\"  (ngSubmit)=\"onSubmit()\">\r\n                        <input type=\"text\" name=\"descProfil\" [(ngModel)]=\"descProfil\" placeholder=\"Search\" class=\"form-control\" >\r\n                        <input  id = \"searchbtn\" type=\"submit\" value=\"Search\" class = \"btn btn-primary btn-sm\">\r\n                        </form>\r\n                </div>\r\n            </div>\r\n            \r\n            <!-- <button type=\"button\" class=\"btn btn-primary\">Search</button> -->\r\n        </div>\r\n    </div>\r\n        <!-- dropDown -->\r\n        <div id=\"drop-btn\">\r\n        <div ngbDropdown class=\"dropdown\" placement=\"bottom-right\">\r\n            <button class=\"btn btn-default dropdown-toggle\" ngbDropdownToggle>Field         {{field}}</button>\r\n            <div ngbDropdownMenu>\r\n            <a class=\"dropdown-item\"  (click)=\"click($event)\"  >Marketing</a>\r\n            <a class=\"dropdown-item\" (click)=\"click($event)\" >Software Solution</a>\r\n            <a class=\"dropdown-item\" (click)=\"click($event)\" >Design</a>\r\n            <a class=\"dropdown-item\" (click)=\"click($event)\" ></a>\r\n            </div>\r\n        </div>\r\n        <div ngbDropdown class=\"dropdown\" placement=\"bottom-right\">\r\n            <button class=\"btn btn-default dropdown-toggle\" ngbDropdownToggle>Education level        {{studylevel}}</button>\r\n            <div ngbDropdownMenu>\r\n            <a class=\"dropdown-item\" (click)=\"click1($event)\">Post bac</a>\r\n            <a class=\"dropdown-item\" (click)=\"click1($event)\">baccalaureate</a>\r\n            <a class=\"dropdown-item\" (click)=\"click1($event)\">baccalaureate+3</a>\r\n            <a class=\"dropdown-item\" (click)=\"click1($event)\">baccalaureate+5</a>\r\n            <a class=\"dropdown-item\" (click)=\"click1($event)\">More then 5</a>\r\n            <a class=\"dropdown-item\" (click)=\"click1($event)\" ></a>\r\n            </div>\r\n        </div>\r\n        <div ngbDropdown class=\"dropdown\" placement=\"bottom-right\">\r\n            <button class=\"btn btn-default dropdown-toggle\" ngbDropdownToggle>Years of experience          {{expyear}}</button>\r\n            <div ngbDropdownMenu>\r\n            <a class=\"dropdown-item\" (click)=\"click2($event)\">Less than 1 year</a>\r\n            <a class=\"dropdown-item\" (click)=\"click2($event)\">Between one to 2 years</a>\r\n            <a class=\"dropdown-item\" (click)=\"click2($event)\">Between 2 to 5 years</a>\r\n            <a class=\"dropdown-item\" (click)=\"click2($event)\">More than 5 years</a>\r\n            <a class=\"dropdown-item\" (click)=\"click2($event)\" ></a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n        <!--end dropdown  -->\r\n    <div class=\"section\">\r\n       \r\n        <div class=\"separator-line separator-primary\"></div>\r\n       \r\n       \r\n        <!--  -->\r\n        <div style=\"display: flex; flex-wrap: wrap\">\r\n            <div class=\"container\" style=\"max-width: 500px;\"  *ngFor=\"let data of datas; let i = index\">\r\n          \r\n              <div class=\"card\">\r\n                <a href=\"#pablo\"> <img class=\"img rounded\" src={{data.img}}></a>\r\n                 <div class=\"card-body\">\r\n                  <h5 class=\"card-title\"><a href=\"#pablo\">{{data.name}}</a></h5>\r\n                  <h4 class=\"card-title\">{{data.email}}</h4>\r\n                  <p class=\"card-text\">   {{data.descProfil}}</p>\r\n                  <ul class=\"list-group list-group-flush\">\r\n                    <li class=\"list-group-item\">{{data.ProfExp}}</li>\r\n                    <li class=\"list-group-item\">{{data.studylevel}}</li>\r\n                    <li class=\"list-group-item\">  {{data.expyear}}</li>\r\n                    <li class=\"list-group-item\">  {{data.field}}</li>\r\n                  </ul>\r\n                  <button type=\"button\" class=\"btn btn-primary btn-link\" (click)=\"send(data)\" [routerLink]=\"['/views/chat']\">Send Message</button> \r\n                  <button *ngIf=\"!addfavo[i]\" type=\"button\" class=\"btn btn-primary btn-just-icon\" (click)=\"favorite(data,i)\" ngbTooltip=\"add to favorites\"><i class=\"fa fa-heart\"></i></button>\r\n                  <button *ngIf=\"addfavo[i]\" type=\"button\" class=\"btn btn-primary btn-just-icon\" (click)=\"delete(data,i)\" >Delete from favorite</button>\r\n                </div>\r\n              </div>\r\n            \r\n            </div>\r\n          </div>\r\n          \r\n                            \r\n        <div class=\"about-office\">\r\n            <div class=\"container\">\r\n                <div class=\"row text-center\">\r\n                    <div class=\"col-md-8 ml-auto mr-auto\">\r\n                        <h2 class=\"title\">Pick the perfect for the job </h2>\r\n                        <h4 class=\"description\">Here are some pictures from our office. You can see the place looks like a palace and is fully equiped with everything you need to get the job done.</h4>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <img class=\"rounded img-raised\" alt=\"Raised Image\" src=\"assets/img/bg27.jpg\">\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <img class=\"rounded img-raised\" alt=\"Raised Image\" src=\"assets/img/bg24.jpg\">\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <img class=\"rounded img-raised\" alt=\"Raised Image\" src=\"assets/img/bg28.jpg\">\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <img class=\"rounded img-raised\" alt=\"Raised Image\" src=\"assets/img/project6.jpg\">\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <img class=\"rounded img-raised\" alt=\"Raised Image\" src=\"assets/img/project14.jpg\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"about-contact\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-8 mr-auto ml-auto\">\r\n                        <h2 class=\"text-center title\">Want to work with us?</h2>\r\n                        <h4 class=\"text-center description\">Divide details about your product or agency work into parts. Write a few lines about each one and contact us about any further collaboration. We will get back to you in a couple of hours.</h4>\r\n                        <form class=\"contact-form\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-4\">\r\n                                    <label>First name</label>\r\n                                    <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                                      <div class=\"input-group-prepend\">\r\n                                          <span class=\"input-group-text\"><i class=\"now-ui-icons users_circle-08\"></i></span>\r\n                                      </div>\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4\">\r\n                                    <label>Your email</label>\r\n                                    <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                                      <div class=\"input-group-prepend\">\r\n                                          <span class=\"input-group-text\"><i class=\"now-ui-icons ui-1_email-85\"></i></span>\r\n                                      </div>\r\n                                        <input type=\"email\" class=\"form-control\" placeholder=\"Email Here...\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"control-label\">Speciality</label>\r\n                                        <angular2-multiselect [data]=\"dropdownList\" [(ngModel)]=\"selectedItems\" [ngModelOptions]=\"{standalone: true}\"\r\n                                            [settings]=\"dropdownSettings\"\r\n                                            (onSelect)=\"onItemSelect($event)\"\r\n                                            (onDeSelect)=\"OnItemDeSelect($event)\"\r\n                                            (onSelectAll)=\"onSelectAll($event)\"\r\n                                            (onDeSelectAll)=\"onDeSelectAll($event)\">\r\n                                        </angular2-multiselect>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-4 ml-auto mr-auto text-center\">\r\n                                    <button class=\"btn btn-primary btn-round mt-4 btn-lg\">\r\n                                        Let's talk\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <footer class=\"footer \">\r\n        <div class=\"container\">\r\n            <nav>\r\n                <ul>\r\n                    <li>\r\n                        <a href=\"https://www.creative-tim.com\">\r\n                            Creative Tim\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"https://www.creative-tim.com/about-us\">\r\n                            About Us\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"http://blog.creative-tim.com\">\r\n                            Blog\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"https://www.creative-tim.com/license\">\r\n                            License\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </nav>\r\n            <div class=\"copyright\">\r\n                &copy;{{data | date: 'yyyy'}}, Designed by\r\n                <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\r\n                <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\r\n            </div>\r\n        </div>\r\n    </footer>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "qRNK":
/*!********************************************!*\
  !*** ./src/app/auth/role-guard.service.ts ***!
  \********************************************/
/*! exports provided: RoleGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleGuardService", function() { return RoleGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoleGuardService = /** @class */ (function () {
    function RoleGuardService(router) {
        this.router = router;
    }
    RoleGuardService.prototype.canActivate = function () {
        var token = localStorage.getItem('companyid');
        if (token) {
            return true;
        }
        // this.router.navigate(['views/profil'])
        this.router.navigate(['views/login']);
        return false;
    };
    RoleGuardService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    RoleGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RoleGuardService);
    return RoleGuardService;
}());



/***/ }),

/***/ "qXBG":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
    }
    AuthService.prototype.canActivate = function () {
        var token = localStorage.getItem('userid');
        var token1 = localStorage.getItem('companyid');
        if (token || token1) {
            return true;
        }
        // this.router.navigate(['profil'])
        this.router.navigate(['views/login']);
        return false;
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "sFs2":
/*!*****************************************************************!*\
  !*** ./src/app/elements/nucleoicons/nucleoicons.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nucleo-icons-style,\n.nucleo-icons-style,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* .nucleo-icons-style5 display-role reset for older browsers */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection,\nmain {\n  display: block;\n}\n\n.nucleo-icons-style {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* --------------------------------\n\nNucleo Outline Web Font - nucleoapp.com/\nLicense - nucleoapp.com/license/\nCreated using IcoMoon - icomoon.io\n\n-------------------------------- */\n\n/* --------------------------------\n\nPrimary style\n\n-------------------------------- */\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n}\n\n.nucleo-icons-style {\n  font-size: 62.5%;\n}\n\n.nucleo-icons-style {\n  font-size: 1.6rem;\n  font-family: sans-serif;\n  color: #333333;\n  background: #efefef;\n}\n\na {\n  color: #766acf;\n  text-decoration: none;\n}\n\n/* --------------------------------\n\nMain components\n\n-------------------------------- */\n\nheader {\n  text-align: center;\n  padding: 120px 0 0;\n}\n\nheader h1 {\n  font-size: 1.2rem;\n}\n\nheader p {\n  font-size: 0.9rem;\n  margin-top: 0.6em;\n}\n\nheader a:hover {\n  text-decoration: underline;\n}\n\nsection {\n  width: 90%;\n  max-width: 1200px;\n  margin: 50px auto;\n}\n\nsection h2 {\n  border-bottom: 1px solid #e2e2e2;\n  padding: 0 0 1em 0.2em;\n  margin-bottom: 1em;\n  font-size: 1rem;\n}\n\nul::after {\n  clear: both;\n  content: \"\";\n  display: table;\n}\n\nul li {\n  width: 25%;\n  float: left;\n  padding: 16px 0;\n  text-align: center;\n  border-radius: 0.25em;\n  transition: background 0.2s;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  overflow: hidden;\n}\n\nul li:hover {\n  background: #dbdbdb;\n}\n\nul p,\nul em,\nul input {\n  display: inline-block;\n  font-size: 0.7rem;\n  color: #999999;\n  -webkit-user-select: auto;\n  -moz-user-select: auto;\n  -ms-user-select: auto;\n  user-select: auto;\n  white-space: nowrap;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer;\n}\n\nul p {\n  padding: 10px;\n  margin-top: 10px;\n}\n\nul p::-moz-selection, ul em::-moz-selection {\n  background: #766acf;\n  color: #efefef;\n}\n\nul p::selection,\nul em::selection {\n  background: #766acf;\n  color: #efefef;\n}\n\nul em {\n  margin-bottom: 8px;\n}\n\nul em::before {\n  content: \"[\";\n}\n\nul em::after {\n  content: \"]\";\n}\n\nul input {\n  text-align: center;\n  background: transparent;\n  border: none;\n  box-shadow: none;\n  outline: none;\n}\n\n@media only screen and (min-width: 768px) {\n  ul li {\n    width: 20%;\n    float: left;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  ul li {\n    width: 12.5%;\n    float: left;\n    padding: 32px 0;\n  }\n}\n\n/* --------------------------------\n\nSmart fixed navigation\n\n-------------------------------- */\n\n#cd-nav ul {\n  /* mobile first */\n  position: fixed;\n  width: 90%;\n  max-width: 400px;\n  max-height: 90%;\n  right: 5%;\n  bottom: 5%;\n  border-radius: 0.25em;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  background: white;\n  visibility: hidden;\n  /* remove overflow:hidden if you want to create a drop-down menu - but then remember to fix/eliminate the list items animation */\n  overflow: hidden;\n  overflow-y: auto;\n  z-index: 1;\n  /* Force Hardware Acceleration in WebKit */\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transform: scale(0);\n  transform-origin: 100% 100%;\n  transition: transform 0.3s, visibility 0s 0.3s;\n}\n\n#cd-nav ul li {\n  /* Force Hardware Acceleration in WebKit */\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  display: block;\n  width: 100%;\n  padding: 0;\n  text-align: left;\n}\n\n#cd-nav ul li:hover {\n  background-color: #FFF;\n}\n\n#cd-nav ul.is-visible {\n  visibility: visible;\n  transform: scale(1);\n  transition: transform 0.3s, visibility 0s 0s;\n}\n\n#cd-nav li a {\n  display: block;\n  padding: 1em;\n  font-size: 1.2rem;\n  border-bottom: 1px solid #eff2f6;\n}\n\n#cd-nav li a:hover {\n  color: #333333;\n}\n\n#cd-nav li:last-child a {\n  border-bottom: none;\n}\n\n.cd-nav-trigger {\n  position: fixed;\n  bottom: 5%;\n  right: 5%;\n  width: 44px;\n  height: 44px;\n  background: white;\n  border-radius: 0.25em;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  /* image replacement */\n  overflow: hidden;\n  text-indent: 100%;\n  white-space: nowrap;\n  z-index: 2;\n}\n\n.cd-nav-trigger span {\n  /* the span element is used to create the menu icon */\n  position: absolute;\n  display: block;\n  width: 20px;\n  height: 2px;\n  background: #333333;\n  top: 50%;\n  margin-top: -1px;\n  left: 50%;\n  margin-left: -10px;\n  transition: background 0.3s;\n}\n\n.cd-nav-trigger span::before,\n.cd-nav-trigger span::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  background: inherit;\n  width: 100%;\n  height: 100%;\n  /* Force Hardware Acceleration in WebKit */\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transition: transform 0.3s, background 0s;\n}\n\n.cd-nav-trigger span::before {\n  top: -6px;\n  transform: rotate(0);\n}\n\n.cd-nav-trigger span::after {\n  bottom: -6px;\n  transform: rotate(0);\n}\n\n.cd-nav-trigger.menu-is-open {\n  box-shadow: none;\n}\n\n.cd-nav-trigger.menu-is-open span {\n  background: rgba(232, 74, 100, 0);\n}\n\n.cd-nav-trigger.menu-is-open span::before,\n.cd-nav-trigger.menu-is-open span::after {\n  background: #333333;\n}\n\n.cd-nav-trigger.menu-is-open span::before {\n  top: 0;\n  transform: rotate(135deg);\n}\n\n.cd-nav-trigger.menu-is-open span::after {\n  bottom: 0;\n  transform: rotate(225deg);\n}\n\n.now-ui-icons {\n  display: inline-block;\n  font: normal normal normal 32px/1 \"Nucleo Outline\";\n  speak: none;\n  text-transform: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxudWNsZW9pY29ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaUZJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUFDSjs7QUFFQSwrREFBQTs7QUFFQTs7Ozs7Ozs7Ozs7O0VBWUksY0FBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtBQUFKOztBQUdBOztFQUVJLGdCQUFBO0FBQUo7O0FBR0E7O0VBRUksWUFBQTtBQUFKOztBQUdBOzs7O0VBSUksV0FBQTtFQUNBLGFBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFLQTs7Ozs7O2tDQUFBOztBQVFBOzs7O2tDQUFBOztBQU1BOzs7RUFHSSxzQkFBQTtBQUpKOztBQU9BO0VBQ0ksZ0JBQUE7QUFKSjs7QUFPQTtFQUNJLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFKSjs7QUFPQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQUpKOztBQU9BOzs7O2tDQUFBOztBQU1BO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQUxKOztBQVFBO0VBQ0ksaUJBQUE7QUFMSjs7QUFRQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFMSjs7QUFRQTtFQUNJLDBCQUFBO0FBTEo7O0FBUUE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUxKOztBQVFBO0VBQ0ksZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUxKOztBQVFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBTEo7O0FBUUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBR0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBTEo7O0FBUUE7RUFDSSxtQkFBQTtBQUxKOztBQVFBOzs7RUFHSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFMSjs7QUFRQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQUxKOztBQVFBO0VBRUksbUJBQUE7RUFDQSxjQUFBO0FBTEo7O0FBRUE7O0VBRUksbUJBQUE7RUFDQSxjQUFBO0FBTEo7O0FBUUE7RUFDSSxrQkFBQTtBQUxKOztBQVFBO0VBQ0ksWUFBQTtBQUxKOztBQVFBO0VBQ0ksWUFBQTtBQUxKOztBQVFBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFMSjs7QUFRQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUFMTjtBQUNGOztBQVFBO0VBQ0k7SUFDSSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7RUFOTjtBQUNGOztBQVNBOzs7O2tDQUFBOztBQU1BO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSx1Q0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnSUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsMENBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0VBS0EsbUJBQUE7RUFLQSwyQkFBQTtFQUdBLDhDQUFBO0FBUko7O0FBV0E7RUFDSSwwQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQVJKOztBQVdBO0VBQ0ksc0JBQUE7QUFSSjs7QUFXQTtFQUNJLG1CQUFBO0VBS0EsbUJBQUE7RUFHQSw0Q0FBQTtBQVJKOztBQVdBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0FBUko7O0FBV0E7RUFDSSxjQUFBO0FBUko7O0FBV0E7RUFDSSxtQkFBQTtBQVJKOztBQVdBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFSSjs7QUFXQTtFQUNJLHFEQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUdBLDJCQUFBO0FBUko7O0FBV0E7O0VBRUksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUtBLHdCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtFQUdBLHlDQUFBO0FBUko7O0FBV0E7RUFDSSxTQUFBO0VBS0Esb0JBQUE7QUFSSjs7QUFXQTtFQUNJLFlBQUE7RUFLQSxvQkFBQTtBQVJKOztBQVdBO0VBQ0ksZ0JBQUE7QUFSSjs7QUFXQTtFQUNJLGlDQUFBO0FBUko7O0FBV0E7O0VBRUksbUJBQUE7QUFSSjs7QUFXQTtFQUNJLE1BQUE7RUFLQSx5QkFBQTtBQVJKOztBQVdBO0VBQ0ksU0FBQTtFQUtBLHlCQUFBO0FBUko7O0FBV0E7RUFDSSxxQkFBQTtFQUNBLGtEQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBQVJKIiwiZmlsZSI6Im51Y2xlb2ljb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm51Y2xlby1pY29ucy1zdHlsZSxcclxuLm51Y2xlby1pY29ucy1zdHlsZSxcclxuZGl2LFxyXG5zcGFuLFxyXG5hcHBsZXQsXHJcbm9iamVjdCxcclxuaWZyYW1lLFxyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNCxcclxuaDUsXHJcbmg2LFxyXG5wLFxyXG5ibG9ja3F1b3RlLFxyXG5wcmUsXHJcbmEsXHJcbmFiYnIsXHJcbmFjcm9ueW0sXHJcbmFkZHJlc3MsXHJcbmJpZyxcclxuY2l0ZSxcclxuY29kZSxcclxuZGVsLFxyXG5kZm4sXHJcbmVtLFxyXG5pbWcsXHJcbmlucyxcclxua2JkLFxyXG5xLFxyXG5zLFxyXG5zYW1wLFxyXG5zbWFsbCxcclxuc3RyaWtlLFxyXG5zdHJvbmcsXHJcbnN1Yixcclxuc3VwLFxyXG50dCxcclxudmFyLFxyXG5iLFxyXG51LFxyXG5pLFxyXG5jZW50ZXIsXHJcbmRsLFxyXG5kdCxcclxuZGQsXHJcbm9sLFxyXG51bCxcclxubGksXHJcbmZpZWxkc2V0LFxyXG5mb3JtLFxyXG5sYWJlbCxcclxubGVnZW5kLFxyXG50YWJsZSxcclxuY2FwdGlvbixcclxudGJvZHksXHJcbnRmb290LFxyXG50aGVhZCxcclxudHIsXHJcbnRoLFxyXG50ZCxcclxuYXJ0aWNsZSxcclxuYXNpZGUsXHJcbmNhbnZhcyxcclxuZGV0YWlscyxcclxuZW1iZWQsXHJcbmZpZ3VyZSxcclxuZmlnY2FwdGlvbixcclxuZm9vdGVyLFxyXG5oZWFkZXIsXHJcbmhncm91cCxcclxubWVudSxcclxubmF2LFxyXG5vdXRwdXQsXHJcbnJ1YnksXHJcbnNlY3Rpb24sXHJcbnN1bW1hcnksXHJcbnRpbWUsXHJcbm1hcmssXHJcbmF1ZGlvLFxyXG52aWRlbyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgZm9udDogaW5oZXJpdDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxufVxyXG5cclxuLyogLm51Y2xlby1pY29ucy1zdHlsZTUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xyXG5cclxuYXJ0aWNsZSxcclxuYXNpZGUsXHJcbmRldGFpbHMsXHJcbmZpZ2NhcHRpb24sXHJcbmZpZ3VyZSxcclxuZm9vdGVyLFxyXG5oZWFkZXIsXHJcbmhncm91cCxcclxubWVudSxcclxubmF2LFxyXG5zZWN0aW9uLFxyXG5tYWluIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubnVjbGVvLWljb25zLXN0eWxlIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG5vbCxcclxudWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuYmxvY2txdW90ZSxcclxucSB7XHJcbiAgICBxdW90ZXM6IG5vbmU7XHJcbn1cclxuXHJcbmJsb2NrcXVvdGU6YmVmb3JlLFxyXG5ibG9ja3F1b3RlOmFmdGVyLFxyXG5xOmJlZm9yZSxcclxucTphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGNvbnRlbnQ6IG5vbmU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxufVxyXG5cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuTnVjbGVvIE91dGxpbmUgV2ViIEZvbnQgLSBudWNsZW9hcHAuY29tL1xyXG5MaWNlbnNlIC0gbnVjbGVvYXBwLmNvbS9saWNlbnNlL1xyXG5DcmVhdGVkIHVzaW5nIEljb01vb24gLSBpY29tb29uLmlvXHJcblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblByaW1hcnkgc3R5bGVcclxuXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4qLFxyXG4qOjphZnRlcixcclxuKjo6YmVmb3JlIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5udWNsZW8taWNvbnMtc3R5bGUge1xyXG4gICAgZm9udC1zaXplOiA2Mi41JTtcclxufVxyXG5cclxuLm51Y2xlby1pY29ucy1zdHlsZSB7XHJcbiAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiAjNzY2YWNmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuTWFpbiBjb21wb25lbnRzXHJcblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEyMHB4IDAgMDtcclxufVxyXG5cclxuaGVhZGVyIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG5oZWFkZXIgcCB7XHJcbiAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgbWFyZ2luLXRvcDogLjZlbTtcclxufVxyXG5cclxuaGVhZGVyIGE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbn1cclxuXHJcbnNlY3Rpb24gaDIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmUyZTI7XHJcbiAgICBwYWRkaW5nOiAwIDAgMWVtIC4yZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbnVsOjphZnRlciB7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxudWwgbGkge1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMTZweCAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1ZW07XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbnVsIGxpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNkYmRiZGI7XHJcbn1cclxuXHJcbnVsIHAsXHJcbnVsIGVtLFxyXG51bCBpbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgIGNvbG9yOiAjOTk5OTk5O1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogYXV0bztcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IGF1dG87XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IGF1dG87XHJcbiAgICB1c2VyLXNlbGVjdDogYXV0bztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxudWwgcCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxudWwgcDo6c2VsZWN0aW9uLFxyXG51bCBlbTo6c2VsZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6ICM3NjZhY2Y7XHJcbiAgICBjb2xvcjogI2VmZWZlZjtcclxufVxyXG5cclxudWwgZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG51bCBlbTo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICdbJztcclxufVxyXG5cclxudWwgZW06OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICddJztcclxufVxyXG5cclxudWwgaW5wdXQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgdWwgbGkge1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICB1bCBsaSB7XHJcbiAgICAgICAgd2lkdGg6IDEyLjUlO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDMycHggMDtcclxuICAgIH1cclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblNtYXJ0IGZpeGVkIG5hdmlnYXRpb25cclxuXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4jY2QtbmF2IHVsIHtcclxuICAgIC8qIG1vYmlsZSBmaXJzdCAqL1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA5MCU7XHJcbiAgICByaWdodDogNSU7XHJcbiAgICBib3R0b206IDUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAvKiByZW1vdmUgb3ZlcmZsb3c6aGlkZGVuIGlmIHlvdSB3YW50IHRvIGNyZWF0ZSBhIGRyb3AtZG93biBtZW51IC0gYnV0IHRoZW4gcmVtZW1iZXIgdG8gZml4L2VsaW1pbmF0ZSB0aGUgbGlzdCBpdGVtcyBhbmltYXRpb24gKi9cclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIC8qIEZvcmNlIEhhcmR3YXJlIEFjY2VsZXJhdGlvbiBpbiBXZWJLaXQgKi9cclxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XHJcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xyXG4gICAgLW8tdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzLCB2aXNpYmlsaXR5IDBzIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3MsIHZpc2liaWxpdHkgMHMgMC4zcztcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCB2aXNpYmlsaXR5IDBzIDAuM3M7XHJcbn1cclxuXHJcbiNjZC1uYXYgdWwgbGkge1xyXG4gICAgLyogRm9yY2UgSGFyZHdhcmUgQWNjZWxlcmF0aW9uIGluIFdlYktpdCAqL1xyXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbiNjZC1uYXYgdWwgbGk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxufVxyXG5cclxuI2NkLW5hdiB1bC5pcy12aXNpYmxlIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzLCB2aXNpYmlsaXR5IDBzIDBzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjNzLCB2aXNpYmlsaXR5IDBzIDBzO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIHZpc2liaWxpdHkgMHMgMHM7XHJcbn1cclxuXHJcbiNjZC1uYXYgbGkgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZmYyZjY7XHJcbn1cclxuXHJcbiNjZC1uYXYgbGkgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxufVxyXG5cclxuI2NkLW5hdiBsaTpsYXN0LWNoaWxkIGEge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuLmNkLW5hdi10cmlnZ2VyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogNSU7XHJcbiAgICByaWdodDogNSU7XHJcbiAgICB3aWR0aDogNDRweDtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgLyogaW1hZ2UgcmVwbGFjZW1lbnQgKi9cclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LWluZGVudDogMTAwJTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uY2QtbmF2LXRyaWdnZXIgc3BhbiB7XHJcbiAgICAvKiB0aGUgc3BhbiBlbGVtZW50IGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBtZW51IGljb24gKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IC0xcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzO1xyXG59XHJcblxyXG4uY2QtbmF2LXRyaWdnZXIgc3Bhbjo6YmVmb3JlLFxyXG4uY2QtbmF2LXRyaWdnZXIgc3Bhbjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLyogRm9yY2UgSGFyZHdhcmUgQWNjZWxlcmF0aW9uIGluIFdlYktpdCAqL1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcywgYmFja2dyb3VuZCAwcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMC4zcywgYmFja2dyb3VuZCAwcztcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBiYWNrZ3JvdW5kIDBzO1xyXG59XHJcblxyXG4uY2QtbmF2LXRyaWdnZXIgc3Bhbjo6YmVmb3JlIHtcclxuICAgIHRvcDogLTZweDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxufVxyXG5cclxuLmNkLW5hdi10cmlnZ2VyIHNwYW46OmFmdGVyIHtcclxuICAgIGJvdHRvbTogLTZweDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxufVxyXG5cclxuLmNkLW5hdi10cmlnZ2VyLm1lbnUtaXMtb3BlbiB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW4ge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzIsIDc0LCAxMDAsIDApO1xyXG59XHJcblxyXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW46OmJlZm9yZSxcclxuLmNkLW5hdi10cmlnZ2VyLm1lbnUtaXMtb3BlbiBzcGFuOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xyXG59XHJcblxyXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW46OmJlZm9yZSB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xyXG59XHJcblxyXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW46OmFmdGVyIHtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XHJcbn1cclxuXHJcbi5ub3ctdWktaWNvbnMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMzJweC8xICdOdWNsZW8gT3V0bGluZSc7XHJcbiAgICBzcGVhazogbm9uZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "svhe":
/*!****************************************************!*\
  !*** ./src/app/chat/sidebar/sidebar.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#sidebar {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-right: 1px solid #e1e4e5;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n#sidebar #row1 {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n#sidebar #row1 #sidebarHeader {\r\n    flex-basis: 67px;\r\n    background-color: #eee;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    justify-content: space-between;\r\n}\r\n#sidebar #row1 #sidebarHeader .avatarContainer {\r\n    flex-basis: 43px;\r\n    height: 43px;\r\n}\r\n#sidebar #row1 #sidebarHeader .avatarContainer img {\r\n    height: 100%;\r\n}\r\n#sidebar #row1 #sidebarHeader .actionsContainer {\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    width: 110px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n#sidebar #row1 #searchBox {\r\n    flex-basis: 50px;\r\n    background-color: #fbfbfb;\r\n    border-bottom: 1px solid #e1e4e5;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n#sidebar #row1 #searchBox img {\r\n    position: absolute;\r\n    left: 30px;\r\n}\r\n#sidebar #row1 #searchBox input {\r\n    width: calc(90% - 60px);\r\n    border: none;\r\n    border-radius: 20px;\r\n    height: 70%;\r\n    padding-left: 60px;\r\n    color: #a4a4a4;\r\n    outline: none;\r\n    box-shadow: 0px 0px 3px #efefef;\r\n}\r\n#sidebar #row1 #searchBox input::-moz-placeholder {\r\n    color: #a4a4a4;\r\n    font-weight: 100;\r\n}\r\n#sidebar #row1 #searchBox input:-ms-input-placeholder {\r\n    color: #a4a4a4;\r\n    font-weight: 100;\r\n}\r\n#sidebar #row1 #searchBox input::placeholder {\r\n    color: #a4a4a4;\r\n    font-weight: 100;\r\n}\r\n#sidebar #noConversations {\r\n    padding-top: 30px;\r\n    text-align: center;\r\n    color: #b9b9b9;\r\n    font-size: 18px;\r\n    font-weight: 100;\r\n}\r\n#sidebar #sidebarContent {\r\n    flex-grow: 1;\r\n    overflow: auto;\r\n}\r\n#sidebar #sidebarContent .conversation {\r\n    height: 67px;\r\n    display: flex;\r\n    padding-right: 5px;\r\n    transition: all 0.4s ease-in-out;\r\n    cursor: pointer;\r\n}\r\n#sidebar #sidebarContent .conversation:hover {\r\n    background-color: rgba(204, 204, 204, 0.05);\r\n}\r\n#sidebar #sidebarContent .conversation .picture {\r\n    flex-basis: 73px;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n#sidebar #sidebarContent .conversation .picture img {\r\n    max-width: 100%;\r\n    width: 48px;\r\n}\r\n#sidebar #sidebarContent .conversation .content {\r\n    border-bottom: 1px solid #f2f2f2;\r\n    flex-grow: 1;\r\n    padding: 13px 0px;\r\n    padding-right: 10px;\r\n}\r\n#sidebar #sidebarContent .conversation .content .conversationHeader {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n}\r\n#sidebar #sidebarContent .conversation .content .conversationHeader .name {\r\n    color: #040404;\r\n}\r\n#sidebar #sidebarContent .conversation .content .conversationHeader .time {\r\n    color: #979797;\r\n    font-size: 13px;\r\n    padding-top: 2px;\r\n}\r\n#sidebar #sidebarContent .conversation .content .message {\r\n    color: #717171;\r\n    font-size: 13px;\r\n    padding-top: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n#sidebar #sidebarContent .conversation .content .message img {\r\n    margin-right: 2px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osK0JBQStCO0lBQy9CLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBSEE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBSEE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLGVBQWU7QUFDbkI7QUFDQTtJQUNJLDJDQUEyQztBQUMvQztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2lkZWJhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMWU0ZTU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4jc2lkZWJhciAjcm93MSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4jc2lkZWJhciAjcm93MSAjc2lkZWJhckhlYWRlciB7XHJcbiAgICBmbGV4LWJhc2lzOiA2N3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuI3NpZGViYXIgI3JvdzEgI3NpZGViYXJIZWFkZXIgLmF2YXRhckNvbnRhaW5lciB7XHJcbiAgICBmbGV4LWJhc2lzOiA0M3B4O1xyXG4gICAgaGVpZ2h0OiA0M3B4O1xyXG59XHJcbiNzaWRlYmFyICNyb3cxICNzaWRlYmFySGVhZGVyIC5hdmF0YXJDb250YWluZXIgaW1nIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4jc2lkZWJhciAjcm93MSAjc2lkZWJhckhlYWRlciAuYWN0aW9uc0NvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbiNzaWRlYmFyICNyb3cxICNzZWFyY2hCb3gge1xyXG4gICAgZmxleC1iYXNpczogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTRlNTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuI3NpZGViYXIgI3JvdzEgI3NlYXJjaEJveCBpbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMzBweDtcclxufVxyXG4jc2lkZWJhciAjcm93MSAjc2VhcmNoQm94IGlucHV0IHtcclxuICAgIHdpZHRoOiBjYWxjKDkwJSAtIDYwcHgpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGhlaWdodDogNzAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gICAgY29sb3I6ICNhNGE0YTQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggI2VmZWZlZjtcclxufVxyXG4jc2lkZWJhciAjcm93MSAjc2VhcmNoQm94IGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI2E0YTRhNDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuI3NpZGViYXIgI25vQ29udmVyc2F0aW9ucyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjYjliOWI5O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG4jc2lkZWJhciAjc2lkZWJhckNvbnRlbnQge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuI3NpZGViYXIgI3NpZGViYXJDb250ZW50IC5jb252ZXJzYXRpb24ge1xyXG4gICAgaGVpZ2h0OiA2N3B4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiNzaWRlYmFyICNzaWRlYmFyQ29udGVudCAuY29udmVyc2F0aW9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA0LCAyMDQsIDIwNCwgMC4wNSk7XHJcbn1cclxuI3NpZGViYXIgI3NpZGViYXJDb250ZW50IC5jb252ZXJzYXRpb24gLnBpY3R1cmUge1xyXG4gICAgZmxleC1iYXNpczogNzNweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuI3NpZGViYXIgI3NpZGViYXJDb250ZW50IC5jb252ZXJzYXRpb24gLnBpY3R1cmUgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG59XHJcbiNzaWRlYmFyICNzaWRlYmFyQ29udGVudCAuY29udmVyc2F0aW9uIC5jb250ZW50IHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjJmMmYyO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgcGFkZGluZzogMTNweCAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcbiNzaWRlYmFyICNzaWRlYmFyQ29udGVudCAuY29udmVyc2F0aW9uIC5jb250ZW50IC5jb252ZXJzYXRpb25IZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuI3NpZGViYXIgI3NpZGViYXJDb250ZW50IC5jb252ZXJzYXRpb24gLmNvbnRlbnQgLmNvbnZlcnNhdGlvbkhlYWRlciAubmFtZSB7XHJcbiAgICBjb2xvcjogIzA0MDQwNDtcclxufVxyXG4jc2lkZWJhciAjc2lkZWJhckNvbnRlbnQgLmNvbnZlcnNhdGlvbiAuY29udGVudCAuY29udmVyc2F0aW9uSGVhZGVyIC50aW1lIHtcclxuICAgIGNvbG9yOiAjOTc5Nzk3O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgcGFkZGluZy10b3A6IDJweDtcclxufVxyXG4jc2lkZWJhciAjc2lkZWJhckNvbnRlbnQgLmNvbnZlcnNhdGlvbiAuY29udGVudCAubWVzc2FnZSB7XHJcbiAgICBjb2xvcjogIzcxNzE3MTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4jc2lkZWJhciAjc2lkZWJhckNvbnRlbnQgLmNvbnZlcnNhdGlvbiAuY29udGVudCAubWVzc2FnZSBpbWcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "ttpV":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/image/image.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fileinput text-center\" #input>\r\n  <div [ngClass]=\"{'img-circle':isRound}\" class=\"thumbnail img-raised\">\r\n      <img src={{state.imagePreviewUrl}} alt=\"...\" />\r\n  </div>\r\n  <div>\r\n      <button class=\"btn btn-raised btn-round btn-default btn-file\" (click)=\"handleClick()\" *ngIf=\"!this.state.file\">Add Your Picture</button>\r\n      <button class=\"btn btn-raised btn-round btn-default btn-file\" (click)=\"handleClick()\" *ngIf=\"this.state.file\">Change</button>\r\n      <button class=\"btn btn-danger btn-round fileinput-exists\" (click)=\"handleRemove()\" *ngIf=\"this.state.file\"><i class=\"now-ui-icons ui-1_simple-remove\"></i> Remove</button>\r\n  </div>\r\n  <input type=\"file\"/>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "uDHE":
/*!***************************************************************!*\
  !*** ./src/app/elements/typography/typography.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0eXBvZ3JhcGh5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "uVuu":
/*!*********************************************************************!*\
  !*** ./src/app/elements/comments-areas/comments-areas.component.ts ***!
  \*********************************************************************/
/*! exports provided: CommentsAreasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsAreasComponent", function() { return CommentsAreasComponent; });
/* harmony import */ var _raw_loader_comments_areas_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./comments-areas.component.html */ "UnIZ");
/* harmony import */ var _comments_areas_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments-areas.component.scss */ "ZO5i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentsAreasComponent = /** @class */ (function () {
    function CommentsAreasComponent() {
        this.page = 1;
        this.page1 = 3;
    }
    CommentsAreasComponent.prototype.ngOnInit = function () {
    };
    CommentsAreasComponent.ctorParameters = function () { return []; };
    CommentsAreasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-comments-areas',
            template: _raw_loader_comments_areas_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_comments_areas_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], CommentsAreasComponent);
    return CommentsAreasComponent;
}());



/***/ }),

/***/ "vi5p":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/messages/messages.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"container\">\r\n    <div id=\"header\">\r\n      <div class=\"avatarSection\">\r\n        <div class=\"picture\">\r\n          <img src=\"../../../assets/images/noPic.svg\" />\r\n        </div>\r\n        <div class=\"nameSection\">{{conversation._id.name}}</div>\r\n      </div>\r\n      <div class=\"actionButtons\">\r\n        <img src=\"../../../assets/images/attached.svg\" />\r\n        <img src=\"../../../assets/images/moreVertIcon.svg\" />\r\n      </div>\r\n    </div>\r\n    <div id=\"body\">\r\n      <div\r\n        class=\"message\"\r\n        [ngClass]=\"{ me: message.me }\"\r\n        *ngFor=\"let message of conversation.messages\"\r\n      >\r\n        <div class=\"messageContent\">\r\n          {{ message.text }}\r\n          <div class=\"time\">{{ message.createdAt}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"footer\">\r\n      <div id=\"smileyIcon\">\r\n        <img\r\n          (click)=\"emojiPickerVisible = !emojiPickerVisible\"\r\n          src=\"../../../assets/images/smileIcon.svg\"\r\n        />\r\n        <emoji-mart\r\n          (emojiClick)=\"emojiClicked($event)\"\r\n          *ngIf=\"emojiPickerVisible\"\r\n          style=\"position: absolute; bottom: 50px\"\r\n          [darkMode]=\"false\"\r\n          title=\"Pick your emoji…\"\r\n          emoji=\"point_up\" \r\n        ></emoji-mart>\r\n      </div>\r\n      <div id=\"textarea\">\r\n        <textarea\r\n          [(ngModel)]=\"message\"\r\n          (keyup.enter)=\"submitMessage($event)\"\r\n        ></textarea>\r\n      </div>\r\n      <div id=\"micIcon\">\r\n        <img src=\"../../../assets/images/voiceIcon.svg\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n");

/***/ }),

/***/ "w1at":
/*!**************************************************!*\
  !*** ./src/app/examples/examples.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtcGxlcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "xFxb":
/*!*************************************************************************!*\
  !*** ./src/app/elements/prefooter-areas/prefooter-areas.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVmb290ZXItYXJlYXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "y11L":
/*!*****************************************************************!*\
  !*** ./src/app/components/multiselect/multiselect.component.ts ***!
  \*****************************************************************/
/*! exports provided: MultiselectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiselectComponent", function() { return MultiselectComponent; });
/* harmony import */ var _raw_loader_multiselect_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./multiselect.component.html */ "krej");
/* harmony import */ var _multiselect_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multiselect.component.css */ "XD9c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MultiselectComponent = /** @class */ (function () {
    function MultiselectComponent() {
        this.single = true;
        this.text = "Select";
        this.selectedItems = [];
        this.itemSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.itemDeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.selectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.deSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.dropdownSettings = {};
    }
    MultiselectComponent.prototype.ngOnInit = function () {
        console.log(this.dropdownList);
        this.dropdownSettings = {
            singleSelection: this.single,
            text: this.text,
            classes: "",
            enableSearchFilter: true,
            selectAllText: "Select All",
            unSelectAllText: "UnSelect All",
            lazyLoading: this.single,
        };
    };
    MultiselectComponent.prototype.onItemSelect = function (item) {
        console.log(this.selectedItems);
        this.itemSelect.emit(item);
    };
    MultiselectComponent.prototype.OnItemDeSelect = function (item) {
        console.log(this.selectedItems);
        this.itemDeSelect.emit(item);
    };
    MultiselectComponent.prototype.onSelectAll = function (items) {
        this.selectAll.emit(items);
    };
    MultiselectComponent.prototype.onDeSelectAll = function (items) {
        this.deSelectAll.emit(items);
    };
    MultiselectComponent.ctorParameters = function () { return []; };
    MultiselectComponent.propDecorators = {
        single: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        dropdownList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        selectedItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        itemSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        itemDeSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        selectAll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        deSelectAll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
    };
    MultiselectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-multiselect",
            template: _raw_loader_multiselect_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_multiselect_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], MultiselectComponent);
    return MultiselectComponent;
}());



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zRkE":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg bg-white fixed-top navbar-transparent\" color-on-scroll=\"500\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-translate\">\r\n            <a class=\"navbar-brand\" [routerLink]=\"['/views/landing']\" placement=\"bottom\" >\r\n               NG.FORCE\r\n            </a>\r\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\r\n                <span class=\"navbar-toggler-bar bar1\"></span>\r\n                <span class=\"navbar-toggler-bar bar2\"></span>\r\n                <span class=\"navbar-toggler-bar bar3\"></span>\r\n            </button>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" data-nav-image=\"assets/img/blurred-image-1.jpg\" data-color=\"orange\">\r\n            <ul class=\"navbar-nav ml-auto\">\r\n                <a  ngbDropdown class=\"nav-item dropdown\">\r\n                    <div class=\"nav-link dropdown-toggle\" ngbDropdownToggle>\r\n                      <i class=\"now-ui-icons design_image\" aria-hidden=\"true\"></i>\r\n                      <p>SIGN UP</p>\r\n                    </div>\r\n                    <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right\">\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['/views/signup']\"><i class=\"now-ui-icons users_single-02\"></i>Condidat</a>\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['/views/company']\"><i class=\"now-ui-icons business_bank\"></i>Company</a>\r\n                    </div>\r\n                </a>\r\n                <li  class=\"nav-item\">\r\n                    <a class=\"nav-link btn btn-primary\" [routerLink]=\"['/views/login']\">\r\n                       <p>LOGIN</p>\r\n                    </a>\r\n                </li>\r\n              \r\n                  \r\n                \r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/*!

=========================================================
* Now UI Kit Pro Angular - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-pro-angular
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ "zjue":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/elements/navigation/navigation.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section section-navbars\">\r\n    <div class=\"container\" id=\"menu-dropdown\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <h4>Menu</h4>\r\n                <nav class=\"navbar navbar-expand-lg bg-primary\">\r\n                    <div class=\"container\">\r\n                        <a class=\"navbar-brand\" href=\"#\">Menu</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                        <div class=\"collapse navbar-collapse\" id=\"example-navbar\" data-nav-image=\"assets/img/blurred-image-1.jpg\">\r\n                            <ul class=\"navbar-nav\">\r\n                                <li class=\"nav-item active\">\r\n                                    <a class=\"nav-link\" href=\"#\">\r\n                                        <p>Link</p>\r\n                                    </a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                    <a class=\"nav-link\" href=\"#\">\r\n                                        <p>Link</p>\r\n                                    </a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                  <div ngbDropdown class=\"dropdown\">\r\n                                      <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle>\r\n                                        <p>\r\n                                            Dropdown\r\n                                        </p>\r\n                                      </a>\r\n                                      <div ngbDropdownMenu class=\"dropdown-menu\">\r\n                                        <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n                                        <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n                                        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                                      </div>\r\n                                  </div>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </nav>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <h4>Menu with Icons</h4>\r\n                <nav class=\"navbar navbar-expand-lg bg-info\">\r\n                    <div class=\"container\">\r\n                        <a class=\"navbar-brand\" href=\"#\">Icons</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-icons\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                        <div class=\"collapse navbar-collapse\" id=\"example-navbar-icons\">\r\n                            <ul class=\"navbar-nav ml-auto\">\r\n                                <li class=\"nav-item\">\r\n                                    <a class=\"nav-link\" href=\"#pablo\"><i class=\"now-ui-icons ui-1_send\" aria-hidden=\"true\"></i></a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                    <a class=\"nav-link\" href=\"#pablo\"><i class=\"now-ui-icons users_single-02\" aria-hidden=\"true\"></i></a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                    <div ngbDropdown class=\"dropdown\">\r\n                                        <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle>\r\n                                            <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\r\n                                        </a>\r\n                                        <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right\">\r\n                                            <div class=\"dropdown-header\">Dropdown header</div>\r\n                                            <a class=\"dropdown-item\">Action</a>\r\n                                            <a class=\"dropdown-item\">Another action</a>\r\n                                            <a class=\"dropdown-item\">Something else here</a>\r\n                                            <div class=\"dropdown-divider\"></div>\r\n                                            <a class=\"dropdown-item\">Separated link</a>\r\n                                            <div class=\"dropdown-divider\"></div>\r\n                                            <a class=\"dropdown-item\">Another separated link</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n        <h4>Navigation</h4>\r\n    </div>\r\n    <div id=\"navbar\">\r\n        <div class=\"navigation-example\" style=\"background-image:url('assets/img/bg7.jpg')\">\r\n            <!-- Navbar Primary  -->\r\n            <nav class=\"navbar navbar-expand-lg bg-primary\">\r\n                <div class=\"container\">\r\n                    <div class=\"navbar-translate\">\r\n                        <a class=\"navbar-brand\" href=\"#pablo\">Primary color</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-primary\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-primary\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item active\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"now-ui-icons objects_globe\"></i>\r\n                                    <p>Discover</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"now-ui-icons users_circle-08\"></i>\r\n                                    <p>Profile</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\r\n                                    <p>Settings</p>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <!-- End Navbar Primary -->\r\n            <!-- Navbar Info -->\r\n            <nav class=\"navbar navbar-expand-lg bg-info\">\r\n                <div class=\"container\">\r\n                    <div class=\"navbar-translate\">\r\n                        <a class=\"navbar-brand\" href=\"#pablo\">Info Color</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-info\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-info\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item active\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <p>Discover</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <p>Profile</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <p>Settings</p>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <!-- End Navbar Info -->\r\n            <!-- Navbar Success -->\r\n            <nav class=\"navbar navbar-expand-lg bg-success\">\r\n                <div class=\"container\">\r\n                    <div class=\"navbar-translate\">\r\n                        <a class=\"navbar-brand\" href=\"#\">Success Color</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-success\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-success\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item active\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"now-ui-icons objects_globe\"></i>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"now-ui-icons users_circle-08\"></i>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <!-- End Navbar Success -->\r\n            <!-- Navbar Warning -->\r\n            <nav class=\"navbar navbar-expand-lg bg-warning\">\r\n                <div class=\"container\">\r\n                    <div class=\"navbar-translate\">\r\n                        <a class=\"navbar-brand\" href=\"#pablo\">Warning Color</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-warning\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-warning\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-facebook-square\"></i>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-twitter\"></i>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-google-plus\"></i>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-instagram\"></i>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <!-- End Navbar Warning -->\r\n            <!-- Navbar Danger -->\r\n            <nav class=\"navbar navbar-expand-lg bg-danger\">\r\n                <div class=\"container\">\r\n                    <div class=\"navbar-translate\">\r\n                        <a class=\"navbar-brand\" href=\"#pablo\">Danger Color</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-danger\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-danger\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-facebook-square\"></i>\r\n                                    <p>Share</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-twitter\"></i>\r\n                                    <p>Tweet</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-pinterest\"></i>\r\n                                    <p>Pin</p>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <!-- End Navbar Danger -->\r\n            <!-- Navbar Transparent -->\r\n            <nav class=\"navbar navbar-expand-lg navbar-transparent\">\r\n                <div class=\"container\">\r\n                    <div class=\"navbar-translate\">\r\n                        <a class=\"navbar-brand\" href=\"#pablo\">Transparent</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-transparent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-transparent\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-facebook-square\"></i>\r\n                                    <p>Facebook</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-twitter\"></i>\r\n                                    <p>Twitter</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-instagram\"></i>\r\n                                    <p>Instagram</p>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <!-- End Navbar Transparent-->\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map