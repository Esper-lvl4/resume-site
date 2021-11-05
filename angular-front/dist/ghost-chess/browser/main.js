(self["webpackChunkghost_chess"] = self["webpackChunkghost_chess"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _routes_game_game_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes/game/game.component */ 9173);
/* harmony import */ var _routes_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/home/home.component */ 3558);
/* harmony import */ var _routes_lobby_lobby_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/lobby/lobby.component */ 8247);
/* harmony import */ var _routes_started_game_started_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/started-game/started-game.component */ 8591);
/* harmony import */ var _routes_wild_card_wild_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/wild-card/wild-card.component */ 4848);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);








const routes = [
    {
        path: 'game',
        component: _routes_game_game_component__WEBPACK_IMPORTED_MODULE_0__.GameComponent,
        children: [
            { path: 'lobby', component: _routes_lobby_lobby_component__WEBPACK_IMPORTED_MODULE_2__.LobbyComponent },
            { path: ':id', component: _routes_started_game_started_game_component__WEBPACK_IMPORTED_MODULE_3__.StartedGameComponent },
        ],
    },
    { path: '', component: _routes_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent },
    { path: '**', component: _routes_wild_card_wild_card_component__WEBPACK_IMPORTED_MODULE_4__.WildCardComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, {
                initialNavigation: 'enabled'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);


class AppComponent {
    constructor() {
        this.title = 'ghost-chess';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 11, vars: 0, consts: [[1, "global-wrapper"], [1, "header-wrapper"], ["routerLink", "/", "routerLinkActive", "active"], ["routerLink", "/game/lobby", "routerLinkActive", "active"], [1, "main-wrapper"], [1, "footer-wrapper"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Play");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "main", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "footer", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Created by Esper_lvl4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: [".global-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template: 50px minmax(0, 1fr) 50px/100%;\n  height: 100%;\n}\n\n.header-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  padding: 5px 10px;\n  background: #212223;\n}\n\n.header-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 5px;\n  min-width: 60px;\n  background: transparent;\n  color: #ffffff;\n  text-decoration: none;\n  transition: background 0.3s ease;\n}\n\n.header-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #999999;\n}\n\n.main-wrapper[_ngcontent-%COMP%] {\n  padding: 5px 15px;\n  overflow: auto;\n}\n\n.footer-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  padding: 5px 15px;\n  background: #212223;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw0Q0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUVGOztBQURFO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7QUFHSjs7QUFGSTtFQUNFLG1CQUFBO0FBSU47O0FBREE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFJRjs7QUFGQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUtGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nbG9iYWwtd3JhcHBlclxyXG4gIGRpc3BsYXk6IGdyaWRcclxuICBncmlkLXRlbXBsYXRlOiA1MHB4IG1pbm1heCgwLCAxZnIpIDUwcHggLyAxMDAlXHJcbiAgaGVpZ2h0OiAxMDAlXHJcblxyXG4uaGVhZGVyLXdyYXBwZXJcclxuICBkaXNwbGF5OiBmbGV4XHJcbiAgZmxleC1mbG93OiByb3cgbm93cmFwXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG4gIHBhZGRpbmc6IDVweCAxMHB4XHJcbiAgYmFja2dyb3VuZDogIzIxMjIyM1xyXG4gIGFcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xyXG4gICAgcGFkZGluZzogNXB4XHJcbiAgICBtaW4td2lkdGg6IDYwcHhcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50XHJcbiAgICBjb2xvcjogI2ZmZmZmZlxyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZVxyXG4gICAgJjpob3ZlclxyXG4gICAgICBiYWNrZ3JvdW5kOiAjOTk5OTk5XHJcblxyXG5cclxuLm1haW4td3JhcHBlclxyXG4gIHBhZGRpbmc6IDVweCAxNXB4XHJcbiAgb3ZlcmZsb3c6IGF1dG9cclxuXHJcbi5mb290ZXItd3JhcHBlclxyXG4gIGRpc3BsYXk6IGZsZXhcclxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXBcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuICBwYWRkaW5nOiA1cHggMTVweFxyXG4gIGJhY2tncm91bmQ6ICMyMTIyMjNcclxuICBjb2xvcjogI2ZmZmZmZlxyXG4iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_chess_field_chess_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/chess-field/chess-field.component */ 7376);
/* harmony import */ var _routes_game_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/game/game.component */ 9173);
/* harmony import */ var _routes_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/home/home.component */ 3558);
/* harmony import */ var _routes_wild_card_wild_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/wild-card/wild-card.component */ 4848);
/* harmony import */ var _components_chess_field_square_chess_field_square_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/chess-field-square/chess-field-square.component */ 9775);
/* harmony import */ var _components_chess_figure_chess_figure_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/chess-figure/chess-figure.component */ 8159);
/* harmony import */ var _popups_promote_popup_promote_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./popups/promote-popup/promote-popup.component */ 2963);
/* harmony import */ var _popups_name_set_popup_name_set_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./popups/name-set-popup/name-set-popup.component */ 7194);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _popups_default_popup_default_popup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./popups/default-popup/default-popup.component */ 3899);
/* harmony import */ var _common_components_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common-components/default-button/default-button.component */ 1037);
/* harmony import */ var _common_components_default_text_field_default_text_field_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common-components/default-text-field/default-text-field.component */ 6881);
/* harmony import */ var _routes_lobby_lobby_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./routes/lobby/lobby.component */ 8247);
/* harmony import */ var _routes_started_game_started_game_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./routes/started-game/started-game.component */ 8591);
/* harmony import */ var _components_room_list_room_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/room-list/room-list.component */ 6238);
/* harmony import */ var _components_room_item_room_item_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/room-item/room-item.component */ 4488);
/* harmony import */ var _popups_host_room_popup_host_room_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./popups/host-room-popup/host-room-popup.component */ 2);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 2316);






















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_chess_field_chess_field_component__WEBPACK_IMPORTED_MODULE_2__.ChessFieldComponent,
        _routes_game_game_component__WEBPACK_IMPORTED_MODULE_3__.GameComponent,
        _routes_home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent,
        _routes_wild_card_wild_card_component__WEBPACK_IMPORTED_MODULE_5__.WildCardComponent,
        _components_chess_field_square_chess_field_square_component__WEBPACK_IMPORTED_MODULE_6__.ChessFieldSquareComponent,
        _components_chess_figure_chess_figure_component__WEBPACK_IMPORTED_MODULE_7__.ChessFigureComponent,
        _popups_promote_popup_promote_popup_component__WEBPACK_IMPORTED_MODULE_8__.PromotePopupComponent,
        _popups_name_set_popup_name_set_popup_component__WEBPACK_IMPORTED_MODULE_9__.NameSetPopupComponent,
        _popups_default_popup_default_popup_component__WEBPACK_IMPORTED_MODULE_10__.DefaultPopupComponent,
        _common_components_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_11__.DefaultButtonComponent,
        _common_components_default_text_field_default_text_field_component__WEBPACK_IMPORTED_MODULE_12__.DefaultTextFieldComponent,
        _routes_lobby_lobby_component__WEBPACK_IMPORTED_MODULE_13__.LobbyComponent,
        _routes_started_game_started_game_component__WEBPACK_IMPORTED_MODULE_14__.StartedGameComponent,
        _components_room_list_room_list_component__WEBPACK_IMPORTED_MODULE_15__.RoomListComponent,
        _components_room_item_room_item_component__WEBPACK_IMPORTED_MODULE_16__.RoomItemComponent,
        _popups_host_room_popup_host_room_popup_component__WEBPACK_IMPORTED_MODULE_17__.HostRoomPopupComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule] }); })();


/***/ }),

/***/ 1528:
/*!***************************************!*\
  !*** ./src/app/classes/ChessField.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChessField": () => (/* binding */ ChessField)
/* harmony export */ });
/* harmony import */ var src_app_classes_chess_figures__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/chess-figures */ 3647);
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Events */ 5778);
/* harmony import */ var _Square__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Square */ 1239);



class ChessField extends _Events__WEBPACK_IMPORTED_MODULE_1__.Events {
    constructor(width, height) {
        super();
        this.squares = [];
        this.width = 8;
        this.height = 8;
        this.fieldLetters = [];
        this.playerColor = 'white';
        if ((width && width > 8) || (height && height > 8)) {
            throw new Error('Only 8 x 8 field or smaller is supported');
        }
        if (width)
            this.width = width;
        if (height)
            this.height = height;
        this.fieldLetters = _Square__WEBPACK_IMPORTED_MODULE_2__.defaultLetters.slice(0, width);
    }
    get promoteVariants() {
        return this.playerColor === 'white' ? this.promoteVariantsWhite : this.promoteVariantsBlack;
    }
    get promoteVariantsWhite() {
        return [
            new src_app_classes_chess_figures__WEBPACK_IMPORTED_MODULE_0__.QueenFigure('white'), new src_app_classes_chess_figures__WEBPACK_IMPORTED_MODULE_0__.RookFigure('white'),
            new src_app_classes_chess_figures__WEBPACK_IMPORTED_MODULE_0__.BishopFigure('white'), new src_app_classes_chess_figures__WEBPACK_IMPORTED_MODULE_0__.KnightFigure('white'),
        ];
    }
    get promoteVariantsBlack() {
        return [
            new src_app_classes_chess_figures__WEBPACK_IMPORTED_MODULE_0__.QueenFigure('black'), new src_app_classes_chess_figures__WEBPACK_IMPORTED_MODULE_0__.RookFigure('black'),
            new src_app_classes_chess_figures__WEBPACK_IMPORTED_MODULE_0__.BishopFigure('black'), new src_app_classes_chess_figures__WEBPACK_IMPORTED_MODULE_0__.KnightFigure('black'),
        ];
    }
    generate(playerColor) {
        this.squares = [];
        this.playerColor = playerColor;
        const eventFigures = [];
        let y = playerColor === 'white' ? this.height : 1;
        let x = playerColor === 'white' ? 1 : this.width;
        const checkOuterCondition = playerColor === 'white'
            ? (y) => y >= 1
            : (y) => y <= this.height;
        const checkInnerCondition = playerColor === 'white'
            ? (x) => x <= this.width
            : (x) => x >= 1;
        const outerIncrement = playerColor === 'white'
            ? () => y--
            : () => y++;
        const innerIncrement = playerColor === 'white'
            ? () => x++
            : () => x--;
        const resetX = playerColor === 'white' ? 1 : this.width;
        while (checkOuterCondition(y)) {
            while (checkInnerCondition(x)) {
                let figure = null;
                if (y === 2 || y === 7) {
                    figure = new src_app_classes_chess_figures__WEBPACK_IMPORTED_MODULE_0__.PawnFigure(y === 2 ? 'white' : 'black');
                    eventFigures.push(figure);
                }
                if (y === 1 || y === 8) {
                    const color = y === 1 ? 'white' : 'black';
                    if (x === 1 || x === 8) {
                        figure = new src_app_classes_chess_figures__WEBPACK_IMPORTED_MODULE_0__.RookFigure(color);
                        eventFigures.push(figure);
                    }
                    if (x === 2 || x === 7)
                        figure = new src_app_classes_chess_figures__WEBPACK_IMPORTED_MODULE_0__.KnightFigure(color);
                    if (x === 3 || x === 6)
                        figure = new src_app_classes_chess_figures__WEBPACK_IMPORTED_MODULE_0__.BishopFigure(color);
                    if (x === 4)
                        figure = new src_app_classes_chess_figures__WEBPACK_IMPORTED_MODULE_0__.QueenFigure(color);
                    if (x === 5) {
                        figure = new src_app_classes_chess_figures__WEBPACK_IMPORTED_MODULE_0__.KingFigure(color);
                        eventFigures.push(figure);
                    }
                }
                this.squares.push(new _Square__WEBPACK_IMPORTED_MODULE_2__.Square({
                    x: this.fieldLetters[x - 1],
                    y,
                    figure,
                    isBlack: x % 2 === y % 2,
                }));
                innerIncrement();
            }
            x = resetX;
            outerIncrement();
        }
        return eventFigures;
    }
    findSquares(handler) {
        return this.squares.filter(handler);
    }
    findSquare(handler) {
        return this.squares.find(handler);
    }
    findSquareByCoordinates(x, y) {
        return typeof x === 'string'
            ? this.findSquare(square => {
                const { xLetter, y: squareY } = square.coordinates;
                return xLetter === x && squareY === y;
            })
            : this.findSquare(square => {
                const { x: squareX, y: squareY } = square.coordinates;
                return squareX === x && squareY === y;
            });
    }
}


/***/ }),

/***/ 5778:
/*!***********************************!*\
  !*** ./src/app/classes/Events.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Events": () => (/* binding */ Events)
/* harmony export */ });
class Events {
    constructor() {
        this.handlers = {};
    }
    on(event, handler) {
        if (!event || !handler)
            return;
        if (!this.handlers[event])
            this.handlers[event] = [];
        this.handlers[event].push(handler);
    }
    once(event, handler) {
        if (!event || !handler)
            return;
        if (!this.handlers[event])
            this.handlers[event] = [];
        const onceDecorator = (arg) => {
            handler(arg);
            this.off(event, onceDecorator);
        };
        this.on(event, onceDecorator);
    }
    off(event, handler) {
        if (!event || !Array.isArray(this.handlers[event]))
            return;
        if (!handler) {
            this.handlers[event] = [];
            return;
        }
        const index = this.handlers[event]
            .findIndex(currentHandler => currentHandler === handler);
        if (index === -1)
            return;
        this.handlers[event].splice(index, 1);
    }
    emit(event, data) {
        if (!event || !Array.isArray(this.handlers[event]))
            return;
        this.handlers[event].forEach(handler => {
            handler(data);
        });
    }
}


/***/ }),

/***/ 4360:
/*!*************************************!*\
  !*** ./src/app/classes/RoomInfo.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isRoomInfo": () => (/* binding */ isRoomInfo)
/* harmony export */ });
function isRoomInfo(item) {
    return item && typeof item === 'object'
        && typeof item.id === 'number'
        && typeof item.name === 'string'
        && Array.isArray(item.players)
        && Array.isArray(item.gameNotation)
        && typeof item.gameHasStarted === 'boolean'
        && typeof item.maxPlayers === 'number'
        && typeof item.hostId === 'string';
}


/***/ }),

/***/ 1239:
/*!***********************************!*\
  !*** ./src/app/classes/Square.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultLetters": () => (/* binding */ defaultLetters),
/* harmony export */   "Square": () => (/* binding */ Square),
/* harmony export */   "SquareCoordinates": () => (/* binding */ SquareCoordinates)
/* harmony export */ });
const defaultLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
class Square {
    constructor(info) {
        this.figure = null;
        this.isPossibleMove = false;
        this.coordinates = new SquareCoordinates(info.x, info.y);
        this.isBlack = info.isBlack;
        if (info.figure)
            this.figure = info.figure;
    }
}
class SquareCoordinates {
    constructor(x, y) {
        this._x = x;
        this.y = y;
    }
    get x() {
        return defaultLetters.indexOf(this._x) + 1;
    }
    get xLetter() {
        return this._x;
    }
}


/***/ }),

/***/ 7537:
/*!*************************************!*\
  !*** ./src/app/classes/UserInfo.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isUserInfo": () => (/* binding */ isUserInfo)
/* harmony export */ });
function isUserInfo(item) {
    return item && typeof item === 'object'
        && typeof item.id === 'string' && typeof item.name === 'string';
}


/***/ }),

/***/ 2843:
/*!*************************************************!*\
  !*** ./src/app/classes/chess-figures/Bishop.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BishopFigure": () => (/* binding */ BishopFigure),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Figure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Figure */ 2909);

class BishopFigure extends _Figure__WEBPACK_IMPORTED_MODULE_0__.Figure {
    constructor(color) {
        super({
            name: 'Bishop',
            nameLetter: 'B',
            color,
            weight: 3,
            movement: new _Figure__WEBPACK_IMPORTED_MODULE_0__.FigureMovement({
                topLeft: Infinity,
                topRight: Infinity,
                bottomLeft: Infinity,
                bottomRight: Infinity,
            }),
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BishopFigure);


/***/ }),

/***/ 2909:
/*!*************************************************!*\
  !*** ./src/app/classes/chess-figures/Figure.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FigureMovement": () => (/* binding */ FigureMovement),
/* harmony export */   "Figure": () => (/* binding */ Figure)
/* harmony export */ });
/* harmony import */ var src_app_classes_Events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/Events */ 5778);
/* harmony import */ var _Square__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Square */ 1239);


class FigureMovement {
    constructor(info) {
        this.top = 0;
        this.left = 0;
        this.right = 0;
        this.bottom = 0;
        this.topLeft = 0;
        this.topRight = 0;
        this.bottomLeft = 0;
        this.bottomRight = 0;
        this.canCapture = true;
        const { top, left, right, bottom, topLeft, topRight, bottomLeft, bottomRight, canCapture } = info;
        if (top)
            this.top = top;
        if (left)
            this.left = left;
        if (right)
            this.right = right;
        if (bottom)
            this.bottom = bottom;
        if (topLeft)
            this.topLeft = topLeft;
        if (topRight)
            this.topRight = topRight;
        if (bottomLeft)
            this.bottomLeft = bottomLeft;
        if (bottomRight)
            this.bottomRight = bottomRight;
        if (typeof canCapture === 'boolean')
            this.canCapture = canCapture;
    }
    clone() {
        return new FigureMovement({
            top: this.top,
            left: this.left,
            right: this.right,
            bottom: this.bottom,
            topLeft: this.topLeft,
            topRight: this.topRight,
            bottomLeft: this.bottomLeft,
            bottomRight: this.bottomRight,
            canCapture: this.canCapture,
        });
    }
}
class Figure extends src_app_classes_Events__WEBPACK_IMPORTED_MODULE_0__.Events {
    constructor(info) {
        super();
        this.nameLetter = '';
        this.color = 'white';
        this.image = '';
        this.weight = 1;
        // prop for pieces that do not move in straight line, like knight.
        this.mustChangeDirection = false;
        // for pieces that can promote.
        this.canPromote = false;
        // for pieces that must travel foo distance when moving.
        this.noStop = false;
        // for king - to prevent it from moving or capturing pieces if he would be captured
        // for it.
        this.isCoward = false;
        // for pieces that move move through other pieces without taking them. They still
        // capture if they stop on the same square as other piece but cannot stop on the same
        // squares as allied pieces.
        this.ignoreCollision = false;
        this.didNotMove = true;
        this.possibleMoves = {};
        this.name = info.name;
        this.movement = info.movement;
        if (info.color)
            this.color = info.color;
        if (info.image) {
            this.image = info.image;
        }
        else {
            this.image = `../assets/images/${this.color}-${this.name.toLowerCase()}.svg.png`;
        }
        if (typeof info.weight === 'number')
            this.weight = info.weight;
        if (typeof info.mustChangeDirection === 'boolean') {
            this.mustChangeDirection = info.mustChangeDirection;
        }
        if (typeof info.canPromote === 'boolean')
            this.canPromote = info.canPromote;
        if (typeof info.noStop === 'boolean')
            this.noStop = info.noStop;
        if (typeof info.ignoreCollision === 'boolean') {
            this.ignoreCollision = info.ignoreCollision;
        }
        if (typeof info.isCoward === 'boolean')
            this.isCoward = info.isCoward;
        if (typeof info.nameLetter === 'string')
            this.nameLetter = info.nameLetter;
        if (info.captureMovement)
            this.captureMovement = info.captureMovement;
    }
    ;
    get numberOfMoves() {
        return Array.isArray(this.movement) ? this.movement.length : 1;
    }
    getCurrentMovement(index) {
        return Array.isArray(this.movement)
            ? this.movement[index]
            : (index === 0 ? this.movement : undefined);
    }
    setPossibleMove(x, y, direction) {
        if (!this.possibleMoves[x])
            this.possibleMoves[x] = {};
        this.possibleMoves[x][y] = direction;
    }
    getPossibleMove(x, y) {
        return (this.possibleMoves[x] && this.possibleMoves[x][y]) || false;
    }
    moveIsPossible(x, y) {
        const targetX = typeof x === 'string'
            ? _Square__WEBPACK_IMPORTED_MODULE_1__.defaultLetters.findIndex(letter => letter === x) + 1
            : x;
        if (targetX === 0)
            return false;
        return !!(this.possibleMoves[targetX] && this.possibleMoves[targetX][y]);
    }
    clearPossibleMoves() {
        this.possibleMoves = {};
    }
    clone(color) {
        var _a;
        return new Figure({
            name: this.name,
            color: color || this.color,
            image: this.image,
            weight: this.weight,
            mustChangeDirection: this.mustChangeDirection,
            canPromote: this.canPromote,
            noStop: this.noStop,
            isCoward: this.isCoward,
            ignoreCollision: this.ignoreCollision,
            captureMovement: (_a = this.captureMovement) === null || _a === void 0 ? void 0 : _a.clone(),
            movement: Array.isArray(this.movement)
                ? this.movement.map(move => move.clone())
                : this.movement.clone(),
        });
    }
}


/***/ }),

/***/ 7434:
/*!***********************************************!*\
  !*** ./src/app/classes/chess-figures/King.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KingFigure": () => (/* binding */ KingFigure),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Figure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Figure */ 2909);

class KingFigure extends _Figure__WEBPACK_IMPORTED_MODULE_0__.Figure {
    constructor(color) {
        super({
            name: 'King',
            nameLetter: 'K',
            color,
            isCoward: true,
            movement: new _Figure__WEBPACK_IMPORTED_MODULE_0__.FigureMovement({
                top: 1,
                bottom: 1,
                left: 1,
                right: 1,
                topLeft: 1,
                topRight: 1,
                bottomLeft: 1,
                bottomRight: 1,
            }),
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KingFigure);


/***/ }),

/***/ 1297:
/*!*************************************************!*\
  !*** ./src/app/classes/chess-figures/Knight.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KnightFigure": () => (/* binding */ KnightFigure),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Figure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Figure */ 2909);

class KnightFigure extends _Figure__WEBPACK_IMPORTED_MODULE_0__.Figure {
    constructor(color) {
        super({
            name: 'Knight',
            nameLetter: 'N',
            color,
            weight: 3,
            mustChangeDirection: true,
            ignoreCollision: true,
            noStop: true,
            movement: [
                new _Figure__WEBPACK_IMPORTED_MODULE_0__.FigureMovement({
                    top: 2,
                    bottom: 2,
                    left: 2,
                    right: 2,
                }),
                new _Figure__WEBPACK_IMPORTED_MODULE_0__.FigureMovement({
                    top: 1,
                    bottom: 1,
                    left: 1,
                    right: 1,
                }),
            ],
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KnightFigure);


/***/ }),

/***/ 9459:
/*!***********************************************!*\
  !*** ./src/app/classes/chess-figures/Pawn.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PawnFigure": () => (/* binding */ PawnFigure),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Figure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Figure */ 2909);

class PawnFigure extends _Figure__WEBPACK_IMPORTED_MODULE_0__.Figure {
    constructor(color) {
        super({
            name: 'Pawn',
            color,
            canPromote: true,
            movement: new _Figure__WEBPACK_IMPORTED_MODULE_0__.FigureMovement({
                top: color === 'white' ? 2 : 0,
                bottom: color === 'black' ? 2 : 0,
                right: 0,
                left: 0,
                canCapture: false,
            }),
            captureMovement: new _Figure__WEBPACK_IMPORTED_MODULE_0__.FigureMovement({
                topLeft: color === 'white' ? 1 : 0,
                topRight: color === 'white' ? 1 : 0,
                bottomLeft: color === 'black' ? 1 : 0,
                bottomRight: color === 'black' ? 1 : 0,
            })
        });
        this.canCapturePawnInFront = false;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PawnFigure);


/***/ }),

/***/ 7630:
/*!************************************************!*\
  !*** ./src/app/classes/chess-figures/Queen.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueenFigure": () => (/* binding */ QueenFigure),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Figure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Figure */ 2909);

class QueenFigure extends _Figure__WEBPACK_IMPORTED_MODULE_0__.Figure {
    constructor(color) {
        super({
            name: 'Queen',
            nameLetter: 'Q',
            color,
            weight: 9,
            movement: new _Figure__WEBPACK_IMPORTED_MODULE_0__.FigureMovement({
                top: Infinity,
                bottom: Infinity,
                left: Infinity,
                right: Infinity,
                topLeft: Infinity,
                topRight: Infinity,
                bottomLeft: Infinity,
                bottomRight: Infinity,
            }),
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QueenFigure);


/***/ }),

/***/ 4243:
/*!***********************************************!*\
  !*** ./src/app/classes/chess-figures/Rook.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RookFigure": () => (/* binding */ RookFigure),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Figure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Figure */ 2909);

class RookFigure extends _Figure__WEBPACK_IMPORTED_MODULE_0__.Figure {
    constructor(color) {
        super({
            name: 'Rook',
            nameLetter: 'R',
            color,
            weight: 5,
            movement: new _Figure__WEBPACK_IMPORTED_MODULE_0__.FigureMovement({
                top: Infinity,
                bottom: Infinity,
                left: Infinity,
                right: Infinity,
            }),
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RookFigure);


/***/ }),

/***/ 3647:
/*!************************************************!*\
  !*** ./src/app/classes/chess-figures/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KingFigure": () => (/* reexport safe */ _King__WEBPACK_IMPORTED_MODULE_0__.KingFigure),
/* harmony export */   "BishopFigure": () => (/* reexport safe */ _Bishop__WEBPACK_IMPORTED_MODULE_1__.BishopFigure),
/* harmony export */   "QueenFigure": () => (/* reexport safe */ _Queen__WEBPACK_IMPORTED_MODULE_2__.QueenFigure),
/* harmony export */   "KnightFigure": () => (/* reexport safe */ _Knight__WEBPACK_IMPORTED_MODULE_3__.KnightFigure),
/* harmony export */   "RookFigure": () => (/* reexport safe */ _Rook__WEBPACK_IMPORTED_MODULE_4__.RookFigure),
/* harmony export */   "PawnFigure": () => (/* reexport safe */ _Pawn__WEBPACK_IMPORTED_MODULE_5__.PawnFigure)
/* harmony export */ });
/* harmony import */ var _King__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./King */ 7434);
/* harmony import */ var _Bishop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bishop */ 2843);
/* harmony import */ var _Queen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Queen */ 7630);
/* harmony import */ var _Knight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Knight */ 1297);
/* harmony import */ var _Rook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Rook */ 4243);
/* harmony import */ var _Pawn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pawn */ 9459);








/***/ }),

/***/ 1037:
/*!******************************************************************************!*\
  !*** ./src/app/common-components/default-button/default-button.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultButtonComponent": () => (/* binding */ DefaultButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

const _c0 = ["*"];
class DefaultButtonComponent {
    constructor() {
        this.disabled = false;
    }
    get isDisabled() {
        return this.disabled ? 'disabled' : undefined;
    }
}
DefaultButtonComponent.ɵfac = function DefaultButtonComponent_Factory(t) { return new (t || DefaultButtonComponent)(); };
DefaultButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DefaultButtonComponent, selectors: [["app-default-button"]], inputs: { disabled: "disabled" }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[1, "default-button"]], template: function DefaultButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.isDisabled);
    } }, styles: [".default-button[_ngcontent-%COMP%] {\n  padding: 5px 15px;\n  border: none;\n  background: #232221;\n  color: #ffffff;\n  box-shadow: none;\n  background: #232221;\n  transition: background 0.3s ease;\n}\n.default-button[_ngcontent-%COMP%]:hover {\n  background: #009600;\n  cursor: pointer;\n}\n.default-button[disabled][_ngcontent-%COMP%] {\n  background-color: #646464;\n  cursor: default;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmF1bHQtYnV0dG9uLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBQ0Y7QUFBRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQUVKO0FBREU7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUFHSiIsImZpbGUiOiJkZWZhdWx0LWJ1dHRvbi5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZWZhdWx0LWJ1dHRvblxyXG4gIHBhZGRpbmc6IDVweCAxNXB4XHJcbiAgYm9yZGVyOiBub25lXHJcbiAgYmFja2dyb3VuZDogIzIzMjIyMVxyXG4gIGNvbG9yOiAjZmZmZmZmXHJcbiAgYm94LXNoYWRvdzogbm9uZVxyXG4gIGJhY2tncm91bmQ6IHJnYigzNSwgMzQsIDMzKVxyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlXHJcbiAgJjpob3ZlclxyXG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDE1MCwgMClcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICZbZGlzYWJsZWRdXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAwLCAxMDAsIDEwMClcclxuICAgIGN1cnNvcjogZGVmYXVsdFxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 6881:
/*!**************************************************************************************!*\
  !*** ./src/app/common-components/default-text-field/default-text-field.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultTextFieldComponent": () => (/* binding */ DefaultTextFieldComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);



class DefaultTextFieldComponent {
    constructor() {
        this.value = '';
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    get localValue() {
        return this.value;
    }
    set localValue(value) {
        this.valueChange.emit(value);
    }
}
DefaultTextFieldComponent.ɵfac = function DefaultTextFieldComponent_Factory(t) { return new (t || DefaultTextFieldComponent)(); };
DefaultTextFieldComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DefaultTextFieldComponent, selectors: [["app-default-text-field"]], inputs: { value: "value" }, outputs: { valueChange: "valueChange" }, decls: 1, vars: 1, consts: [[1, "default-text-field", 3, "ngModel", "ngModelChange"]], template: function DefaultTextFieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DefaultTextFieldComponent_Template_input_ngModelChange_0_listener($event) { return ctx.localValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.localValue);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel], styles: [".default-text-field[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  padding: 5px 15px;\n  border: none;\n  outline: none;\n  box-shadow: none;\n  background: #212121;\n  color: #ffffff;\n  font-size: 16px;\n}\n\n[_nghost-%COMP%] {\n  max-width: 100%;\n  background: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmF1bHQtdGV4dC1maWVsZC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUFFRiIsImZpbGUiOiJkZWZhdWx0LXRleHQtZmllbGQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVmYXVsdC10ZXh0LWZpZWxkXHJcbiAgd2lkdGg6IDEwMCVcclxuICBtYXgtd2lkdGg6IDEwMCVcclxuICBwYWRkaW5nOiA1cHggMTVweFxyXG4gIGJvcmRlcjogbm9uZVxyXG4gIG91dGxpbmU6IG5vbmVcclxuICBib3gtc2hhZG93OiBub25lXHJcbiAgYmFja2dyb3VuZDogIzIxMjEyMVxyXG4gIGNvbG9yOiAjZmZmZmZmXHJcbiAgZm9udC1zaXplOiAxNnB4XHJcblxyXG46aG9zdFxyXG4gIG1heC13aWR0aDogMTAwJVxyXG4gIGJhY2tncm91bmQ6IHJlZCJdfQ== */"] });


/***/ }),

/***/ 9775:
/*!*******************************************************************************!*\
  !*** ./src/app/components/chess-field-square/chess-field-square.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChessFieldSquareComponent": () => (/* binding */ ChessFieldSquareComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _classes_Square__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/Square */ 1239);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _chess_figure_chess_figure_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chess-figure/chess-figure.component */ 8159);





function ChessFieldSquareComponent_app_chess_figure_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-chess-figure", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function ChessFieldSquareComponent_app_chess_figure_1_Template_app_chess_figure_mousedown_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.chooseFigure(); })("mouseup", function ChessFieldSquareComponent_app_chess_figure_1_Template_app_chess_figure_mouseup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.unchooseFigure(); })("dragover", function ChessFieldSquareComponent_app_chess_figure_1_Template_app_chess_figure_dragover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.changeTargetSquare(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("figure", ctx_r0.figure);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("draggable", ctx_r0.playerColor === ctx_r0.figure.color ? "draggable" : null);
} }
function ChessFieldSquareComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.smallNumber, " ");
} }
function ChessFieldSquareComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.smallLetter, " ");
} }
function ChessFieldSquareComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 8);
} }
class ChessFieldSquareComponent {
    constructor() {
        this.square = null;
        this.playerColor = 'white';
        this.width = 8;
        this.height = 8;
        this.grabFigure = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.dropFigure = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.clearPossibleMoves = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.targetSquareChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.captureFigure = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    get smallLetter() {
        return this.playerColor === 'white'
            ? (this.coordinates.y === 1 ? this.coordinates.xLetter : '')
            : (this.coordinates.y === this.height ? this.coordinates.xLetter : '');
    }
    get smallNumber() {
        return this.playerColor === 'white'
            ? (this.coordinates.x === this.width ? this.coordinates.y + '' : '')
            : (this.coordinates.x === 1 ? this.coordinates.y + '' : '');
    }
    get coordinates() {
        var _a;
        return ((_a = this.square) === null || _a === void 0 ? void 0 : _a.coordinates) || new _classes_Square__WEBPACK_IMPORTED_MODULE_0__.SquareCoordinates('a', 1);
    }
    get isBlack() {
        var _a;
        return ((_a = this.square) === null || _a === void 0 ? void 0 : _a.isBlack) || false;
    }
    get figure() {
        var _a;
        return ((_a = this.square) === null || _a === void 0 ? void 0 : _a.figure) || null;
    }
    get isPossibleMove() {
        var _a;
        return ((_a = this.square) === null || _a === void 0 ? void 0 : _a.isPossibleMove) || false;
    }
    squareClick() {
        var _a, _b, _c, _d, _e, _f;
        if (((_a = this.square) === null || _a === void 0 ? void 0 : _a.figure) && !((_b = this.square) === null || _b === void 0 ? void 0 : _b.isPossibleMove)) {
            this.grabFigure.emit(this.square);
            return;
        }
        if (!((_c = this.square) === null || _c === void 0 ? void 0 : _c.figure) && ((_d = this.square) === null || _d === void 0 ? void 0 : _d.isPossibleMove)) {
            this.dropFigure.emit(this.square);
            return;
        }
        if (((_e = this.square) === null || _e === void 0 ? void 0 : _e.figure) && ((_f = this.square) === null || _f === void 0 ? void 0 : _f.isPossibleMove)) {
            this.captureFigure.emit(this.square);
        }
        this.clearPossibleMoves.emit();
    }
    chooseFigure() {
        this.grabFigure.emit(this.square);
    }
    unchooseFigure() {
        this.dropFigure.emit(this.square);
    }
    changeTargetSquare() {
        this.targetSquareChange.emit(this.square);
    }
    ngOnInit() {
    }
}
ChessFieldSquareComponent.ɵfac = function ChessFieldSquareComponent_Factory(t) { return new (t || ChessFieldSquareComponent)(); };
ChessFieldSquareComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ChessFieldSquareComponent, selectors: [["app-chess-field-square"]], inputs: { square: "square", playerColor: "playerColor", width: "width", height: "height" }, outputs: { grabFigure: "grabFigure", dropFigure: "dropFigure", clearPossibleMoves: "clearPossibleMoves", targetSquareChange: "targetSquareChange", captureFigure: "captureFigure" }, decls: 5, vars: 6, consts: [[1, "chess-field-square", 3, "click"], [3, "figure", "mousedown", "mouseup", "dragover", 4, "ngIf"], ["class", "chess-field-square-x", 4, "ngIf"], ["class", "chess-field-square-y", 4, "ngIf"], ["class", "figure-can-be-moved-here", 4, "ngIf"], [3, "figure", "mousedown", "mouseup", "dragover"], [1, "chess-field-square-x"], [1, "chess-field-square-y"], [1, "figure-can-be-moved-here"]], template: function ChessFieldSquareComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChessFieldSquareComponent_Template_div_click_0_listener() { return ctx.squareClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ChessFieldSquareComponent_app_chess_figure_1_Template, 1, 2, "app-chess-figure", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ChessFieldSquareComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ChessFieldSquareComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ChessFieldSquareComponent_div_4_Template, 1, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-black", ctx.isBlack);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.figure);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.smallNumber !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.smallLetter !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isPossibleMove);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _chess_figure_chess_figure_component__WEBPACK_IMPORTED_MODULE_1__.ChessFigureComponent], styles: [".chess-field-square[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  background: #f0d9b5;\n}\n.chess-field-square.is-black[_ngcontent-%COMP%] {\n  background: #b58863;\n}\n.chess-field-square.is-black[_ngcontent-%COMP%]   .chess-field-square-x[_ngcontent-%COMP%], .chess-field-square.is-black[_ngcontent-%COMP%]   .chess-field-square-y[_ngcontent-%COMP%] {\n  color: #f0d9b5;\n}\n.chess-field-square-x[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  z-index: 2;\n  color: #b58863;\n  font-weight: 600;\n}\n.chess-field-square-y[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 2px;\n  left: 2px;\n  z-index: 2;\n  color: #b58863;\n  font-weight: 600;\n}\n.figure-can-be-moved-here[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 4;\n  transform: translate(-50%, -50%);\n  display: inline-block;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: #6666ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZXNzLWZpZWxkLXNxdWFyZS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUFFO0VBQ0UsbUJBQUE7QUFFSjtBQURJO0VBQ0UsY0FBQTtBQUdOO0FBREE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUlGO0FBRkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUtGO0FBSEE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFNRiIsImZpbGUiOiJjaGVzcy1maWVsZC1zcXVhcmUuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlc3MtZmllbGQtc3F1YXJlXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgei1pbmRleDogMVxyXG4gIHdpZHRoOiAxMDAlXHJcbiAgaGVpZ2h0OiAxMDAlXHJcbiAgYmFja2dyb3VuZDogI2YwZDliNVxyXG4gICYuaXMtYmxhY2tcclxuICAgIGJhY2tncm91bmQ6ICNiNTg4NjNcclxuICAgIC5jaGVzcy1maWVsZC1zcXVhcmUteCwgLmNoZXNzLWZpZWxkLXNxdWFyZS15XHJcbiAgICAgIGNvbG9yOiAjZjBkOWI1XHJcblxyXG4uY2hlc3MtZmllbGQtc3F1YXJlLXhcclxuICBwb3NpdGlvbjogYWJzb2x1dGVcclxuICB0b3A6IDJweFxyXG4gIHJpZ2h0OiAycHhcclxuICB6LWluZGV4OiAyXHJcbiAgY29sb3I6ICNiNTg4NjNcclxuICBmb250LXdlaWdodDogNjAwXHJcblxyXG4uY2hlc3MtZmllbGQtc3F1YXJlLXlcclxuICBwb3NpdGlvbjogYWJzb2x1dGVcclxuICBib3R0b206IDJweFxyXG4gIGxlZnQ6IDJweFxyXG4gIHotaW5kZXg6IDJcclxuICBjb2xvcjogI2I1ODg2M1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDBcclxuXHJcbi5maWd1cmUtY2FuLWJlLW1vdmVkLWhlcmVcclxuICBwb3NpdGlvbjogYWJzb2x1dGVcclxuICB0b3A6IDUwJVxyXG4gIGxlZnQ6IDUwJVxyXG4gIHotaW5kZXg6IDRcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKVxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9ja1xyXG4gIHdpZHRoOiAyNXB4XHJcbiAgaGVpZ2h0OiAyNXB4XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlXHJcbiAgYmFja2dyb3VuZDogIzY2NjZmZlxyXG4iXX0= */"] });


/***/ }),

/***/ 7376:
/*!*****************************************************************!*\
  !*** ./src/app/components/chess-field/chess-field.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChessFieldComponent": () => (/* binding */ ChessFieldComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_classes_chess_figures_Figure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/chess-figures/Figure */ 2909);
/* harmony import */ var src_app_classes_chess_figures__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/chess-figures */ 3647);
/* harmony import */ var _classes_Square__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/Square */ 1239);
/* harmony import */ var _classes_ChessField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../classes/ChessField */ 1528);
/* harmony import */ var src_app_injectables_websocket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/injectables/websocket */ 5920);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _popups_promote_popup_promote_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../popups/promote-popup/promote-popup.component */ 2963);
/* harmony import */ var _chess_field_square_chess_field_square_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../chess-field-square/chess-field-square.component */ 9775);










function ChessFieldComponent_app_chess_field_square_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-chess-field-square", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("grabFigure", function ChessFieldComponent_app_chess_field_square_1_Template_app_chess_field_square_grabFigure_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r2.setCurrentSquareInfo($event); })("dropFigure", function ChessFieldComponent_app_chess_field_square_1_Template_app_chess_field_square_dropFigure_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r4.moveCurrentFigure($event); })("clearPossibleMoves", function ChessFieldComponent_app_chess_field_square_1_Template_app_chess_field_square_clearPossibleMoves_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r5.clearPossibleMoves(); })("targetSquareChange", function ChessFieldComponent_app_chess_field_square_1_Template_app_chess_field_square_targetSquareChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r6.changeTargetSquare($event); })("captureFigure", function ChessFieldComponent_app_chess_field_square_1_Template_app_chess_field_square_captureFigure_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r7.captureFigure($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const square_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("square", square_r1)("playerColor", ctx_r0.playerColor)("width", ctx_r0.chessField.width)("height", ctx_r0.chessField.height);
} }
class ChessFieldComponent {
    constructor(socket) {
        this.socket = socket;
        this.notation = [];
        this.figureCaptured = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.chessField = new _classes_ChessField__WEBPACK_IMPORTED_MODULE_3__.ChessField();
        this.currentSquareTarget = null;
        this.dragTimer = false;
        this.promotionInfo = null;
        this.promotePopup = false;
        this._currentSquareInfo = null;
    }
    get currentSquareInfo() {
        return this._currentSquareInfo;
    }
    set currentSquareInfo(value) {
        var _a, _b, _c;
        (_b = (_a = this._currentSquareInfo) === null || _a === void 0 ? void 0 : _a.figure) === null || _b === void 0 ? void 0 : _b.emit('onUnselect', { square: this._currentSquareInfo });
        this._currentSquareInfo = value;
        (_c = value === null || value === void 0 ? void 0 : value.figure) === null || _c === void 0 ? void 0 : _c.emit('onSelect', { square: value });
        this.showValidMoves(value);
    }
    get squares() {
        return this.chessField.squares;
    }
    get fieldLetters() {
        return this.chessField.fieldLetters;
    }
    get clientPlayer() {
        var _a;
        if (!this.socket.userInfo)
            return;
        const { id } = this.socket.userInfo;
        return (_a = this.room) === null || _a === void 0 ? void 0 : _a.players.find(player => player.id === id);
    }
    get playerColor() {
        var _a;
        return ((_a = this.clientPlayer) === null || _a === void 0 ? void 0 : _a.color) || 'white';
    }
    get gameNotation() {
        return this.room.gameNotation || [];
    }
    get currentTurn() {
        return this.gameNotation.length % 2 === 0 ? 'white' : 'black';
    }
    convertNotationStringToArray(inputNotation) {
        const enPassantNotation = 'e.p.';
        const notation = inputNotation
            .replace(/\s\s/g, ' ')
            .replace(/[!?]/g, '')
            .replace(/0-0/g, 'O-O')
            .replace(/0-0-0/g, 'O-O-O');
        console.log(notation.slice(-20));
        const parts = notation.split(/\s\d{1,2}\.\s/);
        const result = [];
        parts[0] = parts[0].slice(3);
        parts.forEach(part => {
            const moves = part.split(/\s/);
            moves.forEach(move => {
                if (move === enPassantNotation) {
                    result[result.length - 1] = result[result.length - 1] + ' ' + enPassantNotation;
                    return;
                }
                result.push(move);
            });
        });
        return result;
    }
    useNotation() {
        // transform notation into squares.
        this.gameNotation.forEach((move, index) => {
            const info = this.transformMoveNotation(move, index % 2 === 0 ? 'white' : 'black');
            this.automaticMove(info);
        });
    }
    transformMoveNotation(originalMove, color) {
        var _a;
        console.log(originalMove);
        if (originalMove.length === 0) {
            throw new Error('Could not parse game notation - one of the moves is empty!');
        }
        // e1     - move pawn to e1
        // Be1    - move Bishop to e1
        // Rdf3   - move Rook at d file to f3
        // R1a3   - move Rook at 1'st row to a3
        // Qh4e1  - move Queen at h4 to e1
        // exd5   - take with pawn to d5
        // Bxe5   - take with Bishop to e5
        // Rdxf3  - take with Rook at d file to f3
        // R1xa3  - take with Rook on 1-st row to a3
        // Qh4xe1 - take with Queen on h4 to e1
        // O-O    - castle king side
        // O-O-O  - castle queen side
        // e8=Q   - pawn move to e8 and promotes to Queen
        // e7+    - move pawn to e7 which checks the King
        // exd6 e.p. - pawn's en passant.
        // Common parts:
        // 1) Last two symbols are target square always, except for castle move and promotion;
        // 2) First symbol is always the name of a figure, except for castle move, promotion and pawn move;
        // 3) If move is a capture, it has "x" simbol in it, after which come target square.
        if (originalMove === 'O-O' || originalMove === 'O-O-O') {
            const startingSquare = this.chessField
                .findSquare(square => { var _a; return ((_a = square.figure) === null || _a === void 0 ? void 0 : _a.name) === 'King' && square.figure.color === color; });
            if (!startingSquare)
                throw new Error('Could not make castle move - King was not found!');
            if (!((_a = startingSquare.figure) === null || _a === void 0 ? void 0 : _a.didNotMove))
                throw new Error('Could not make castle move - King already did move!');
            const yCoord = color === 'white' ? 1 : this.chessField.height;
            const xCoord = originalMove === 'O-O' ? 'g' : 'c';
            this.handleKingSelection(startingSquare, startingSquare.figure);
            const isValidMove = startingSquare.figure.moveIsPossible(xCoord, yCoord);
            if (!isValidMove) {
                console.error(JSON.stringify(startingSquare.figure.possibleMoves));
                throw new Error('Could not make a castle move - this move is not valid!');
            }
            const targetSquare = this.chessField.findSquareByCoordinates(xCoord, yCoord);
            if (!targetSquare)
                throw new Error('Could not make a castle move - target square could not be found!');
            return {
                startingSquare,
                targetSquare: targetSquare,
                promotionInfo: '',
            };
        }
        const captureSymbol = 'x';
        const promotionSymbol = '=';
        const checkSymbol = '+';
        const checkMateSymbol = '#';
        const enPassantNotation = ' e.p.';
        const isCapture = originalMove.match(captureSymbol);
        const isPromotion = originalMove.match(promotionSymbol);
        const isCheck = originalMove[originalMove.length - 1] === checkSymbol;
        const isCheckMate = originalMove[originalMove.length - 1] === checkMateSymbol;
        const isEnPassant = originalMove.match(enPassantNotation);
        let promotionInfo = '';
        let move = originalMove;
        if (isCapture)
            move = move.split(captureSymbol).join('');
        if (isCheck || isCheckMate)
            move = move.slice(0, -1);
        if (isEnPassant)
            move = move.slice(0, -5);
        if (isPromotion) {
            const parts = move.split(promotionSymbol);
            promotionInfo = parts[parts.length - 1];
            move = move.replace(`=${promotionInfo}`, '');
        }
        const figureName = move[0].toUpperCase() === move[0] ? move[0] : '';
        const targetSquareInfo = move.slice(-2);
        const startingSquareInfo = move.slice(figureName ? 1 : 0, -2);
        let startX = '';
        let startY = 0;
        const targetX = targetSquareInfo[0];
        const targetY = Number(targetSquareInfo[1]);
        if (startingSquareInfo.length === 1) {
            const isNumber = !isNaN(Number(startingSquareInfo));
            startX = isNumber ? '' : startingSquareInfo;
            startY = isNumber ? Number(startingSquareInfo) : 0;
        }
        else if (startingSquareInfo.length === 2) {
            startX = startingSquareInfo[0];
            startY = Number(startingSquareInfo[1]);
        }
        let startingSquare;
        const targetSquare = this.chessField
            .findSquareByCoordinates(targetX, targetY);
        if (startX && !isNaN(startY) && startY) {
            startingSquare = this.chessField
                .findSquareByCoordinates(startX, startY);
        }
        else {
            const noNeedToMatch = !startX && (!startY || isNaN(startY));
            startingSquare = this.chessField.findSquare(square => {
                var _a;
                const xMatches = startX && square.coordinates.xLetter === startX;
                const yMatches = !isNaN(startY) && startY && square.coordinates.y === startY;
                return (xMatches || yMatches || noNeedToMatch)
                    && ((_a = square.figure) === null || _a === void 0 ? void 0 : _a.nameLetter) === figureName
                    && square.figure.color === color
                    && square.figure.moveIsPossible(targetX, targetY);
            });
            if (originalMove === 'axb5') {
                console.log(startingSquare, startX, startingSquareInfo, move);
            }
        }
        if (!startingSquare || !targetSquare) {
            console.error('start: ', startingSquare, 'target: ', targetSquare);
            console.error('startX:', startX, '\nstartY:', startY, '\ntargetX:', targetX, '\ntargetY:', targetY, '\nfigureName:', figureName, '\ncolor:', color);
            throw new Error(`Could not make a move: either target or starting square could not be determined!`);
        }
        return {
            startingSquare,
            targetSquare,
            promotionInfo: isPromotion ? promotionInfo : '',
        };
    }
    automaticMove(info) {
        const { startingSquare, targetSquare, promotionInfo } = info;
        const capturedFigure = targetSquare.figure;
        targetSquare.figure = startingSquare.figure;
        startingSquare.figure = null;
        if (targetSquare.figure instanceof src_app_classes_chess_figures_Figure__WEBPACK_IMPORTED_MODULE_0__.Figure) {
            targetSquare.figure.emit('onMove', {
                startCoordinates: startingSquare.coordinates,
                endCoordinates: targetSquare.coordinates,
                startSquare: startingSquare,
                endSquare: targetSquare,
                automatic: true,
                promotionInfo: promotionInfo,
            });
            this.chessField.emit('onMove', {
                startCoordinates: startingSquare.coordinates,
                endCoordinates: targetSquare.coordinates,
                startSquare: startingSquare,
                endSquare: targetSquare,
                figure: targetSquare.figure,
                automatic: true,
                promotionInfo: promotionInfo,
            });
            targetSquare.figure.didNotMove = false;
        }
        if (capturedFigure) {
            this.figureCaptured.emit(capturedFigure);
        }
        this.markPossibleMovesForAllFigures();
    }
    generateField() {
        const figures = this.chessField.generate(this.playerColor);
        this.addEventsToFigures(figures);
        this.markPossibleMovesForAllFigures();
        this.chessField.on('onMove', info => {
            if (!info.automatic)
                this.markPossibleMovesForAllFigures();
        });
    }
    addEventsToFigures(eventFigures) {
        eventFigures.forEach(figure => {
            if (figure.name === 'Pawn') {
                figure.on('onMove', (info) => {
                    if (typeof info !== 'object' || !info)
                        return;
                    const { startCoordinates, endCoordinates, endSquare, automatic, promotionInfo } = info;
                    if (startCoordinates instanceof _classes_Square__WEBPACK_IMPORTED_MODULE_2__.SquareCoordinates
                        && endCoordinates instanceof _classes_Square__WEBPACK_IMPORTED_MODULE_2__.SquareCoordinates
                        && endSquare instanceof _classes_Square__WEBPACK_IMPORTED_MODULE_2__.Square) {
                        this.handlePawnMove({
                            startCoordinates,
                            endCoordinates,
                            endSquare,
                            figure,
                            automatic,
                            promotionInfo,
                        });
                    }
                });
            }
            if (figure.name === 'King') {
                const selectHandler = (info) => {
                    if (typeof info !== 'object' || !info)
                        return;
                    const { square } = info;
                    if (square instanceof _classes_Square__WEBPACK_IMPORTED_MODULE_2__.Square)
                        this.handleKingSelection(square, figure);
                };
                const unselectHandler = (info) => {
                    if (figure instanceof src_app_classes_chess_figures__WEBPACK_IMPORTED_MODULE_1__.KingFigure && !Array.isArray(figure.movement)) {
                        figure.movement.right = 1;
                        figure.movement.left = 1;
                    }
                };
                figure.on('onSelect', selectHandler);
                figure.on('onUnselect', unselectHandler);
                figure.once('onMove', (info) => {
                    if (!Array.isArray(figure.movement)) {
                        figure.movement.left = 1;
                        figure.movement.right = 1;
                        figure.off('onSelect', selectHandler);
                        figure.off('onUnselect', unselectHandler);
                    }
                    if (typeof info !== 'object' || !info)
                        return;
                    const { startCoordinates, endCoordinates, startSquare } = info;
                    if (startCoordinates instanceof _classes_Square__WEBPACK_IMPORTED_MODULE_2__.SquareCoordinates
                        && endCoordinates instanceof _classes_Square__WEBPACK_IMPORTED_MODULE_2__.SquareCoordinates
                        && startSquare instanceof _classes_Square__WEBPACK_IMPORTED_MODULE_2__.Square) {
                        this.handleFirstKingMove({
                            startCoordinates,
                            endCoordinates,
                            figure,
                            startSquare,
                        });
                    }
                });
            }
        });
    }
    setCurrentSquareInfo(square) {
        if (!(square === null || square === void 0 ? void 0 : square.figure)) {
            this.clearPossibleMoves();
            return;
        }
        this.currentSquareInfo = square;
        setTimeout(() => this.dragTimer = true, 500);
    }
    dragPieceMove(square) {
        if (this.dragTimer)
            this.tryMovingAPiece(square, this.currentSquareTarget);
    }
    changeTargetSquare(square) {
        this.currentSquareTarget = square;
    }
    squaresAreTheSame(square1, square2) {
        return square1.coordinates.x === square2.coordinates.x
            && square1.coordinates.y === square2.coordinates.y;
    }
    showValidMoves(square) {
        this.clearPossibleMoves();
        if (!(square === null || square === void 0 ? void 0 : square.figure))
            return;
        const { figure } = square;
        this.chessField.squares.forEach(currentSquare => {
            const { x, y } = currentSquare.coordinates;
            if (!figure.getPossibleMove(x, y))
                return;
            if (!figure.isCoward) {
                currentSquare.isPossibleMove = true;
                return;
            }
            const capturerSquare = this.chessField.findSquare(checkedSquare => {
                const { figure: currentFigure } = checkedSquare;
                if (!currentFigure || currentFigure.color === figure.color)
                    return false;
                const { possibleMoves } = currentFigure;
                return possibleMoves[x] ? possibleMoves[x][y] !== undefined : false;
            });
            if (!capturerSquare)
                currentSquare.isPossibleMove = true;
        });
    }
    moveCurrentFigure(targetSquare) {
        if (!targetSquare || !this.currentSquareInfo
            || this.squaresAreTheSame(targetSquare, this.currentSquareInfo))
            return;
        const { figure } = this.currentSquareInfo;
        this.currentSquareInfo.figure = null;
        targetSquare.figure = figure;
        if (figure instanceof src_app_classes_chess_figures_Figure__WEBPACK_IMPORTED_MODULE_0__.Figure) {
            figure.emit('onMove', {
                startCoordinates: this.currentSquareInfo.coordinates,
                endCoordinates: targetSquare.coordinates,
                startSquare: this.currentSquareInfo,
                endSquare: targetSquare,
            });
            this.chessField.emit('onMove', {
                startCoordinates: this.currentSquareInfo.coordinates,
                endCoordinates: targetSquare.coordinates,
                startSquare: this.currentSquareInfo,
                endSquare: targetSquare,
                figure: figure,
            });
            figure.didNotMove = false;
        }
        this.currentSquareInfo = null;
        this.currentSquareTarget = null;
        this.clearPossibleMoves();
    }
    captureFigure(targetSquare) {
        var _a;
        if (!((_a = this.currentSquareInfo) === null || _a === void 0 ? void 0 : _a.figure) || !(targetSquare === null || targetSquare === void 0 ? void 0 : targetSquare.figure))
            return;
        const { figure } = this.currentSquareInfo;
        const capturedFigure = targetSquare.figure;
        this.figureCaptured.emit(capturedFigure);
        targetSquare.figure = figure;
        if (figure instanceof src_app_classes_chess_figures_Figure__WEBPACK_IMPORTED_MODULE_0__.Figure) {
            const figureInfo = {
                startCoordinates: this.currentSquareInfo.coordinates,
                endCoordinates: targetSquare.coordinates,
                startSquare: this.currentSquareInfo,
                endSquare: targetSquare,
            };
            figure.emit('onMove', figureInfo);
            figure.emit('onCapture', Object.assign(Object.assign({}, figureInfo), { capturedFigure }));
            this.chessField.emit('onMove', Object.assign(Object.assign({}, figureInfo), { figure: figure }));
            this.chessField.emit('onCapture', Object.assign(Object.assign({}, figureInfo), { figure: figure, capturedFigure }));
            figure.didNotMove = false;
        }
        this.currentSquareInfo.figure = null;
        this.currentSquareTarget = null;
    }
    clearPossibleMoves() {
        this.squares.forEach(square => square.isPossibleMove = false);
    }
    markPossibleMovesForAllFigures() {
        for (let square of this.chessField.squares) {
            if (square.figure) {
                this.markPossibleMoves({ square, figure: square.figure });
            }
        }
    }
    markPossibleMoves(info) {
        const { ignoreDirection, currentMove, figure, captureMovement, square } = info;
        if (!currentMove && !captureMovement) {
            this.clearPossibleMoves();
            figure.clearPossibleMoves();
        }
        const currentMovement = captureMovement
            || figure.getCurrentMovement(currentMove || 0);
        if (!currentMovement)
            return;
        const coordinatesMaps = {};
        // Get coordinates of all squares that a figure could move to, if there were not
        // obstacles. Do not check a direction if it's not a first move, that a figure could
        // make in one turn (like knight) and figure has mustChangeDirection flag on.
        if (ignoreDirection !== 'horizontal') {
            coordinatesMaps.horizontal = this.markPossibleHorizontalMoves(info);
        }
        if (ignoreDirection !== 'vertical') {
            coordinatesMaps.vertical = this.markPossibleVerticalMoves(info);
        }
        if (ignoreDirection !== 'diagonal-topLeft') {
            coordinatesMaps.diagonalTopLeft = this.markPossibleDiagonalTopLeftMoves(info);
        }
        if (ignoreDirection !== 'diagonal-topRight') {
            coordinatesMaps.diagonalTopRight = this.markPossibleDiagonalTopRightMoves(info);
        }
        // Then find all valid squares using coordinatesMap. Split them in arrays:
        // left, right, top, bottom, topLeft, topRight, bottomLeft, bottomRight squares.
        // Also capture squares for captureMovement.
        const { horizontal, vertical, diagonalTopLeft, diagonalTopRight, captures } = coordinatesMaps;
        const leftSquares = [];
        const rightSquares = [];
        const bottomSquares = [];
        const topSquares = [];
        const topLeftSquares = [];
        const bottomRightSquares = [];
        const topRightSquares = [];
        const bottomLeftSquares = [];
        for (let currentSquare of this.squares) {
            const { x, y } = currentSquare.coordinates;
            if (horizontal && horizontal[x] && horizontal[x][y] === 'left') {
                leftSquares.push(currentSquare);
            }
            if (horizontal && horizontal[x] && horizontal[x][y] === 'right') {
                rightSquares.push(currentSquare);
            }
            if (vertical && vertical[x] && vertical[x][y] === 'bottom') {
                bottomSquares.push(currentSquare);
            }
            if (vertical && vertical[x] && vertical[x][y] === 'top') {
                topSquares.push(currentSquare);
            }
            if (diagonalTopLeft && diagonalTopLeft[x] && diagonalTopLeft[x][y] === 'topLeft') {
                topLeftSquares.push(currentSquare);
            }
            if (diagonalTopLeft && diagonalTopLeft[x] && diagonalTopLeft[x][y] === 'bottomRight') {
                bottomRightSquares.push(currentSquare);
            }
            if (diagonalTopRight && diagonalTopRight[x] && diagonalTopRight[x][y] === 'topRight') {
                topRightSquares.push(currentSquare);
            }
            if (diagonalTopRight && diagonalTopRight[x] && diagonalTopRight[x][y] === 'bottomLeft') {
                bottomLeftSquares.push(currentSquare);
            }
        }
        // Sort the arrays so they can be traversed from closest square to the farthest.
        const ASC = (axis) => ((square1, square2) => {
            if (square1.coordinates[axis] === square2.coordinates[axis])
                return 0;
            return square1.coordinates[axis] > square2.coordinates[axis] ? 1 : -1;
        });
        const DESC = (axis) => ((square1, square2) => {
            if (square1.coordinates[axis] === square2.coordinates[axis])
                return 0;
            return square1.coordinates[axis] > square2.coordinates[axis] ? -1 : 1;
        });
        leftSquares.sort(DESC('x'));
        rightSquares.sort(ASC('x'));
        bottomSquares.sort(DESC('y'));
        topSquares.sort(ASC('y'));
        topLeftSquares.sort(DESC('x'));
        bottomRightSquares.sort(ASC('x'));
        topRightSquares.sort(ASC('x'));
        bottomLeftSquares.sort(DESC('x'));
        // Finally mark squares, using rules, decribed in method.
        const markArguments = {
            figure,
            currentMove: currentMove || 0,
            captureMovement,
        };
        this.saveFigurePossibleMoves(Object.assign(Object.assign({}, markArguments), { squareList: leftSquares, distance: currentMovement.left, direction: 'left', ignoreDirection: 'horizontal' }));
        this.saveFigurePossibleMoves(Object.assign(Object.assign({}, markArguments), { squareList: rightSquares, distance: currentMovement.right, direction: 'right', ignoreDirection: 'horizontal' }));
        this.saveFigurePossibleMoves(Object.assign(Object.assign({}, markArguments), { squareList: bottomSquares, distance: currentMovement.bottom, direction: 'bottom', ignoreDirection: 'vertical' }));
        this.saveFigurePossibleMoves(Object.assign(Object.assign({}, markArguments), { squareList: topSquares, distance: currentMovement.top, direction: 'top', ignoreDirection: 'vertical' }));
        this.saveFigurePossibleMoves(Object.assign(Object.assign({}, markArguments), { squareList: topLeftSquares, distance: currentMovement.topLeft, direction: 'topLeft', ignoreDirection: 'diagonal-topLeft', square }));
        this.saveFigurePossibleMoves(Object.assign(Object.assign({}, markArguments), { squareList: bottomRightSquares, distance: currentMovement.bottomRight, direction: 'bottomRight', ignoreDirection: 'diagonal-topLeft', square }));
        this.saveFigurePossibleMoves(Object.assign(Object.assign({}, markArguments), { squareList: topRightSquares, distance: currentMovement.topRight, direction: 'topRight', ignoreDirection: 'diagonal-topRight', square }));
        this.saveFigurePossibleMoves(Object.assign(Object.assign({}, markArguments), { squareList: bottomLeftSquares, distance: currentMovement.bottomLeft, direction: 'bottomLeft', ignoreDirection: 'diagonal-topRight', square }));
        // In case of figures, that moves in one way and captures in another way (like pawns),
        // we call this function again, telling her, that it's a capture movement.
        if (!captureMovement && !currentMove && figure.captureMovement) {
            this.markPossibleMoves(Object.assign(Object.assign({}, info), { captureMovement: figure.captureMovement }));
        }
    }
    markPossibleHorizontalMoves(info) {
        const { square, figure, currentMove = 0 } = info;
        const coordinatesMap = {};
        const { coordinates: { x: startX, y: startY } } = square;
        const currentMovement = info.captureMovement || (Array.isArray(figure.movement)
            ? figure.movement[currentMove]
            : figure.movement);
        if (!currentMovement)
            return {};
        const { left, right } = currentMovement;
        if (!left && !right)
            return {};
        // Save coordinates of all squares on the left...
        if (left) {
            let periodStart = left === Infinity ? 1 : startX - left;
            if (periodStart < 1)
                periodStart = 1;
            for (let i = periodStart; i < startX; i++) {
                if (!coordinatesMap[i])
                    coordinatesMap[i] = {};
                coordinatesMap[i][startY] = 'left';
            }
        }
        // ...then do the same for the squares on the right.
        if (right) {
            let periodEnd = right === Infinity ? this.chessField.width : startX + right;
            if (periodEnd > this.chessField.width) {
                periodEnd = this.chessField.width;
            }
            for (let i = startX + 1; i <= periodEnd; i++) {
                if (!coordinatesMap[i])
                    coordinatesMap[i] = {};
                coordinatesMap[i][startY] = 'right';
            }
        }
        return coordinatesMap;
    }
    markPossibleVerticalMoves(info) {
        const { square, figure, currentMove = 0 } = info;
        const coordinatesMap = {};
        const { coordinates: { x: startX, y: startY } } = square;
        const currentMovement = info.captureMovement || (Array.isArray(figure.movement)
            ? figure.movement[currentMove]
            : figure.movement);
        if (!currentMovement)
            return {};
        const { top, bottom } = currentMovement;
        if (!top && !bottom)
            return {};
        coordinatesMap[startX] = {};
        // Save coordinates of all squares on the bottom...
        if (bottom) {
            let endPosition = bottom === Infinity ? 1 : startY - bottom;
            if (endPosition < 1)
                endPosition = 1;
            for (let i = startY - 1; i >= endPosition; i--) {
                coordinatesMap[startX][i] = 'bottom';
            }
        }
        // ...then do the same for the squares on the top.
        if (top) {
            let endPosition = top === Infinity ? 8 : startY + top;
            if (endPosition > 8)
                endPosition = 8;
            for (let i = startY + 1; i <= endPosition; i++) {
                coordinatesMap[startX][i] = 'top';
            }
        }
        return coordinatesMap;
    }
    markPossibleDiagonalTopLeftMoves(info) {
        const { square, figure, currentMove = 0 } = info;
        const coordinatesMap = {};
        const { coordinates: { x: startX, y: startY } } = square;
        const currentMovement = info.captureMovement || (Array.isArray(figure.movement)
            ? figure.movement[currentMove]
            : figure.movement);
        if (!currentMovement)
            return {};
        const { topLeft, bottomRight } = currentMovement;
        if (!topLeft && !bottomRight)
            return {};
        // Save coordinates of all squares on the top left...
        if (topLeft) {
            let endX = topLeft === Infinity ? 1 : startX - topLeft;
            let endY = topLeft === Infinity ? this.chessField.width : startY + topLeft;
            if (endY > this.chessField.width)
                endY = this.chessField.width;
            if (endX < 1)
                endX = 1;
            let currentX = startX - 1;
            let currentY = startY + 1;
            while (currentX >= endX && currentY <= endY) {
                if (!coordinatesMap[currentX])
                    coordinatesMap[currentX] = {};
                coordinatesMap[currentX][currentY] = 'topLeft';
                currentX--;
                currentY++;
            }
        }
        // ...then do the same for the squares on the bottom right.
        if (bottomRight) {
            let endX = bottomRight === Infinity ? this.chessField.width : startX + bottomRight;
            let endY = bottomRight === Infinity ? 1 : startY - bottomRight;
            if (endY < 1)
                endY = 1;
            if (endX > this.chessField.width)
                endX = this.chessField.width;
            let currentX = startX + 1;
            let currentY = startY - 1;
            while (currentX <= endX && currentY >= endY) {
                if (!coordinatesMap[currentX])
                    coordinatesMap[currentX] = {};
                coordinatesMap[currentX][currentY] = 'bottomRight';
                currentX++;
                currentY--;
            }
        }
        return coordinatesMap;
    }
    markPossibleDiagonalTopRightMoves(info) {
        const { square, figure, currentMove = 0 } = info;
        const coordinatesMap = {};
        const { coordinates: { x: startX, y: startY } } = square;
        const currentMovement = info.captureMovement || (Array.isArray(figure.movement)
            ? figure.movement[currentMove]
            : figure.movement);
        if (!currentMovement)
            return {};
        const { topRight, bottomLeft } = currentMovement;
        if (!topRight && !bottomLeft)
            return {};
        // Save coordinates of all squares on the top right...
        if (topRight) {
            let endX = topRight === Infinity ? this.chessField.width : startX + topRight;
            let endY = topRight === Infinity ? this.chessField.height : startY + topRight;
            if (endY > this.chessField.height)
                endY = this.chessField.height;
            if (endX > this.chessField.width)
                endX = this.chessField.width;
            let currentX = startX + 1;
            let currentY = startY + 1;
            while (currentX <= endX && currentY <= endY) {
                if (!coordinatesMap[currentX])
                    coordinatesMap[currentX] = {};
                coordinatesMap[currentX][currentY] = 'topRight';
                currentX++;
                currentY++;
            }
        }
        // ...then do the same for the squares on the bottom left.
        if (bottomLeft) {
            let endX = bottomLeft === Infinity ? 1 : startX - bottomLeft;
            let endY = bottomLeft === Infinity ? 1 : startY - bottomLeft;
            if (endY < 1)
                endY = 1;
            if (endX < 1)
                endX = 1;
            let currentX = startX - 1;
            let currentY = startY - 1;
            while (currentX >= endX && currentY >= endY) {
                if (!coordinatesMap[currentX])
                    coordinatesMap[currentX] = {};
                coordinatesMap[currentX][currentY] = 'bottomLeft';
                currentX--;
                currentY--;
            }
        }
        return coordinatesMap;
    }
    saveFigurePossibleMoves(info) {
        var _a;
        // If distance is 0, then something really went wrong.
        if (info.distance === 0)
            return;
        // 1) If you may only move a figure to the max movement distance, you may only mark
        // the last square.
        // 2) If figure cannot ignore collision, stop movement immediately when current square
        // in the loop is occupied.
        // 3) Only mark an occupied square if figure in that square is not the same color.
        // 4) If figure can move multiple times per turn, mark next moves separately, using
        // the same set of rules.
        const { squareList, figure, distance, currentMove, ignoreDirection, direction, } = info;
        const { noStop, numberOfMoves, ignoreCollision, mustChangeDirection, } = figure;
        let couldNotPass = false;
        let lastSquare = null;
        const currentMovement = info.captureMovement || figure.getCurrentMovement(currentMove);
        if (!currentMovement || (noStop && squareList.length !== distance))
            return;
        const validSquares = [];
        if (squareList.length === distance || distance === Infinity) {
            for (let i = 0; i < squareList.length; i++) {
                const currentSquare = squareList[i];
                const figureCanStop = !noStop
                    || (numberOfMoves - 1 === currentMove && i === squareList.length - 1);
                const canMoveIntoSquare = !currentSquare.figure || currentMovement.canCapture;
                const squareHasNoFigureOfSameColor = ((_a = currentSquare.figure) === null || _a === void 0 ? void 0 : _a.color) !== figure.color;
                const squareHasFigureOfDifferentColor = currentSquare.figure
                    && currentSquare.figure.color !== figure.color;
                if ((!info.captureMovement && figureCanStop && canMoveIntoSquare
                    && squareHasNoFigureOfSameColor)
                    || (info.captureMovement && squareHasFigureOfDifferentColor)) {
                    validSquares.push(currentSquare);
                }
                else if (info.captureMovement && figure instanceof src_app_classes_chess_figures__WEBPACK_IMPORTED_MODULE_1__.PawnFigure
                    && figure.canCapturePawnInFront && info.square) {
                    const side = figure.canCapturePawnInFront;
                    const { x, y } = info.square.coordinates;
                    const { x: currentX, y: currentY } = currentSquare.coordinates;
                    const isWhite = figure.color === 'white';
                    const takeOnLeft = side === 'left' && currentX === x - 1;
                    const takeOnRight = side === 'right' && currentX === x + 1;
                    const takeOnTop = currentY === y + 1;
                    const takeOnBottom = currentY === y - 1;
                    if ((isWhite && (takeOnLeft || takeOnRight) && takeOnTop)
                        || (!isWhite && (takeOnLeft || takeOnRight) && takeOnBottom))
                        validSquares.push(currentSquare);
                }
                if (!ignoreCollision && currentSquare.figure) {
                    couldNotPass = noStop && i !== squareList.length - 1;
                    lastSquare = currentSquare;
                    break;
                }
            }
        }
        validSquares.forEach(validSquare => {
            const { x, y } = validSquare.coordinates;
            figure.setPossibleMove(x, y, direction);
        });
        if (!info.captureMovement && !couldNotPass && numberOfMoves - 1 !== currentMove) {
            const startingSquare = lastSquare || squareList.pop();
            if (startingSquare)
                this.markPossibleMoves({
                    square: startingSquare,
                    figure,
                    currentMove: currentMove + 1,
                    ignoreDirection: mustChangeDirection ? ignoreDirection : undefined,
                });
        }
    }
    handlePawnMove(info) {
        const { figure, automatic, promotionInfo } = info;
        if (figure.didNotMove)
            return this.handleFirstPawnMove(info);
        const { x: startX } = info.startCoordinates;
        const { x: endX, y: endY } = info.endCoordinates;
        if (startX !== endX && figure instanceof src_app_classes_chess_figures__WEBPACK_IMPORTED_MODULE_1__.PawnFigure && figure.canCapturePawnInFront) {
            this.resolveEnpassant(info);
        }
        if ((figure.color === 'black' && endY === 1)
            || (figure.color === 'white' && endY === this.chessField.height)) {
            if (automatic && promotionInfo) {
                const promotedFigure = (figure.color === 'white'
                    ? this.chessField.promoteVariantsWhite
                    : this.chessField.promoteVariantsBlack).find(variant => variant.nameLetter === promotionInfo);
                if (!promotedFigure)
                    return;
                info.endSquare.figure = promotedFigure.clone(figure.color);
                promotedFigure.didNotMove = false;
                return;
            }
            this.openPromotePopup(figure, info.endSquare);
        }
    }
    resolveEnpassant(info) {
        const { figure } = info;
        if (!(figure instanceof src_app_classes_chess_figures__WEBPACK_IMPORTED_MODULE_1__.PawnFigure))
            return;
        const { x: startX, y: startY } = info.startCoordinates;
        const { x: endX } = info.endCoordinates;
        if ((startX < endX && figure.canCapturePawnInFront !== 'right')
            || (startX > endX && figure.canCapturePawnInFront !== 'left'))
            return;
        const square = this.chessField.findSquare(currentSquare => {
            const { x, y } = currentSquare.coordinates;
            return x === endX && y === startY;
        });
        if (!(square === null || square === void 0 ? void 0 : square.figure))
            return;
        this.figureCaptured.emit(square.figure);
        square.figure = null;
    }
    handleFirstPawnMove(info) {
        var _a, _b;
        const { x: startX, y: startY } = info.startCoordinates;
        const { x: endX, y: endY } = info.endCoordinates;
        const { figure } = info;
        // Set pawn movement to normal value. 0 / 2 = 0; 2 / 2 = 1;
        if (!Array.isArray(figure.movement) && figure.didNotMove) {
            figure.movement.top = figure.movement.top / 2;
            figure.movement.bottom = figure.movement.bottom / 2;
        }
        // Do nothing, if it's a capture - pawns captures diagonaly, so X will not be equal.
        // Enpassant is impossible if pawn has already moved this game.
        if (startX !== endX || !figure.didNotMove)
            return;
        if (!(figure.color === 'black' && startY - endY === 2)
            && !(figure.color === 'white' && endY - startY === 2))
            return;
        let leftSquare = null;
        let rightSquare = null;
        const squares = this.chessField.findSquares(currentSquare => {
            const { x, y } = currentSquare.coordinates;
            return y === endY && (x === startX + 1 || x === startX - 1);
        });
        for (let currentSquare of squares) {
            const { x } = currentSquare.coordinates;
            if (x === startX + 1)
                rightSquare = currentSquare;
            if (x === startX - 1)
                leftSquare = currentSquare;
        }
        if ((leftSquare === null || leftSquare === void 0 ? void 0 : leftSquare.figure) instanceof src_app_classes_chess_figures__WEBPACK_IMPORTED_MODULE_1__.PawnFigure
            && ((_a = leftSquare === null || leftSquare === void 0 ? void 0 : leftSquare.figure) === null || _a === void 0 ? void 0 : _a.color) !== figure.color) {
            leftSquare.figure.canCapturePawnInFront = 'right';
        }
        if ((rightSquare === null || rightSquare === void 0 ? void 0 : rightSquare.figure) instanceof src_app_classes_chess_figures__WEBPACK_IMPORTED_MODULE_1__.PawnFigure
            && ((_b = rightSquare === null || rightSquare === void 0 ? void 0 : rightSquare.figure) === null || _b === void 0 ? void 0 : _b.color) !== figure.color) {
            rightSquare.figure.canCapturePawnInFront = 'left';
        }
        // Enpassant is only possible right after conditions for it are met. If opponent did
        // not capitalize, he loses this opportunity.
        // Prevent handler from firing once, because it will be fired immediately after 
        // figure onMove handlers and we need to wait for next one.
        let sameTick = true;
        const handler = () => {
            if (sameTick) {
                sameTick = false;
                return;
            }
            if ((leftSquare === null || leftSquare === void 0 ? void 0 : leftSquare.figure) instanceof src_app_classes_chess_figures__WEBPACK_IMPORTED_MODULE_1__.PawnFigure) {
                leftSquare.figure.canCapturePawnInFront = false;
            }
            if ((rightSquare === null || rightSquare === void 0 ? void 0 : rightSquare.figure) instanceof src_app_classes_chess_figures__WEBPACK_IMPORTED_MODULE_1__.PawnFigure) {
                rightSquare.figure.canCapturePawnInFront = false;
            }
            this.chessField.off('onMove', handler);
        };
        this.chessField.on('onMove', handler);
    }
    handleFirstKingMove(info) {
        var _a;
        const { figure, startCoordinates, endCoordinates } = info;
        if (!figure.didNotMove)
            return;
        const { x: startX, y: startY } = startCoordinates;
        const { x: endX, y: endY } = endCoordinates;
        // if King mover vertically or just 1 square, it's not castle move.
        if (endY !== startY || Math.abs(endX - startX) === 1)
            return;
        const condition = endX > startX
            ? (x) => startX < x
            : (x) => startX > x;
        const rookSquare = this.chessField.findSquare((currentSquare) => {
            var _a;
            const { x, y } = currentSquare.coordinates;
            return y === startY && condition(x)
                && ((_a = currentSquare === null || currentSquare === void 0 ? void 0 : currentSquare.figure) === null || _a === void 0 ? void 0 : _a.name) === 'Rook'
                && currentSquare.figure.color === figure.color;
        });
        if (!((_a = rookSquare === null || rookSquare === void 0 ? void 0 : rookSquare.figure) === null || _a === void 0 ? void 0 : _a.didNotMove))
            return;
        const rookTargetSquare = this.chessField.findSquare((currentSquare) => {
            const { x, y } = currentSquare.coordinates;
            return y === startY
                && x === endX + (rookSquare.coordinates.x > startX ? -1 : 1);
        });
        if (!rookTargetSquare)
            return;
        const rook = rookSquare.figure;
        rookSquare.figure = null;
        rookTargetSquare.figure = rook;
        rook.didNotMove = false;
        figure.emit('onCastle', { isLong: rookSquare.coordinates.x < startX, figure });
    }
    handleKingSelection(square, figure) {
        var _a, _b;
        // If king did move already, it can only move normally.
        if (!figure.didNotMove)
            return;
        const { y: figureY, x: figureX } = square.coordinates;
        let leftRookSquare = null;
        let rightRookSquare = null;
        let hasFiguresLeft = false;
        let hasFiguresRight = false;
        // Search squares array for squares on the same row as the king, except the same
        // square. Save squares in the corner as this is where the Rooks should be placed.
        // If any square in between has a figure, set the flag for that direction to true.
        for (let currentSquare of this.chessField.squares) {
            const { x, y } = currentSquare.coordinates;
            if (y !== figureY || x === figureX)
                continue;
            if (x === 1) {
                leftRookSquare = currentSquare;
                continue;
            }
            if (x === this.chessField.width) {
                rightRookSquare = currentSquare;
                continue;
            }
            if (x < figureX && currentSquare.figure)
                hasFiguresLeft = true;
            if (x > figureX && currentSquare.figure)
                hasFiguresRight = true;
        }
        // Castle is only available if there is not figures between King and a rook in that
        // direction, and both the Rook and King did not move.
        if (!hasFiguresRight && ((_a = rightRookSquare === null || rightRookSquare === void 0 ? void 0 : rightRookSquare.figure) === null || _a === void 0 ? void 0 : _a.name) === 'Rook'
            && rightRookSquare.figure.color === figure.color
            && rightRookSquare.figure.didNotMove) {
            Array.isArray(figure.movement)
                ? figure.movement[0].right = 2
                : figure.movement.right = 2;
        }
        if (!hasFiguresLeft && ((_b = leftRookSquare === null || leftRookSquare === void 0 ? void 0 : leftRookSquare.figure) === null || _b === void 0 ? void 0 : _b.name) === 'Rook'
            && leftRookSquare.figure.color === figure.color
            && leftRookSquare.figure.didNotMove) {
            Array.isArray(figure.movement)
                ? figure.movement[0].left = 2
                : figure.movement.left = 2;
        }
        this.markPossibleMoves({ square, figure });
    }
    openPromotePopup(figure, square) {
        if (!figure.canPromote)
            return;
        this.promotionInfo = {
            figure,
            square,
        };
        this.promotePopup = true;
    }
    promoteFigure(chosenFigure) {
        if (!this.promotionInfo)
            return;
        const figure = chosenFigure.clone(this.playerColor);
        this.promotionInfo.square.figure = figure;
        figure.didNotMove = false;
    }
    tryMovingAPiece(square, targetSquare) {
        if (!targetSquare || !(square === null || square === void 0 ? void 0 : square.figure))
            return;
        const { x: startX, y: startY } = square.coordinates;
        const { x: endX, y: endY } = targetSquare.coordinates;
        const xDifference = startX - endX;
        const yDifference = startY - endY;
        if (xDifference !== 0 && yDifference !== 0) {
            // if (square.figure.)
        }
    }
    ngOnInit() {
        this.generateField();
        const normalGame = `1. e4 e5 2. Nf3 Nc6 3. Bb5 a6
    4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4 Nbd7
    11. c4 c6 12. cxb5 axb5 13. Nc3 Bb7 14. Bg5 b4 15. Nb1 h6 16. Bh4 c5 17. dxe5
    Nxe4 18. Bxe7 Qxe7 19. exd6 Qf6 20. Nbd2 Nxd6 21. Nc4 Nxc4 22. Bxc4 Nb6
    23. Ne5 Rae8 24. Bxf7+ Rxf7 25. Nxf7 Rxe1+ 26. Qxe1 Kxf7 27. Qe3 Qg5 28. Qxg5
    hxg5 29. b3 Ke6 30. a3 Kd6 31. axb4 cxb4 32. Ra5 Nd5 33. f3 Bc8 34. Kf2 Bf5
    35. Ra7 g6 36. Ra6+ Kc5 37. Ke1 Nf4 38. g3 Nxh3 39. Kd2 Kb5 40. Rd6 Kc5 41. Ra6
    Nf2 42. g4 Bd3 43. Re6`;
        const enPassantGame = `1. e4 e6
    2. e5 d5
    3. exd6 e.p.`;
        const promotionGame = `1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. Nf3 a6 5. e3 b5 6. c5 g6 7. Bd3 Bg4 8. h3 Bxf3 9. Qxf3 Bg7 10. g4 e5! 11. Qg3 Nfd7 12. Ne2 Qe7 13. 0-0 h5 14. f3 Nf8 15. a4 b4 16. Bd2 a5 17. e4 dxe4 18. Bxe4 Ne6 19. Rae1 h4 20. Qf2 0-0 21. f4 exd4 22. f5!? Nxc5 23. Bb1 d3 24. Nc1 Qd6 25. Ba2?? Bd4 26. Be3 Ne4 27. Qxh4 g5 28. Qh5 d2 29. f6 Qxf6 30. Bxd4 Qxd4+ 31. Kg2  dxe1=N+`;
        this.room.gameNotation = this.convertNotationStringToArray(promotionGame);
        if (Array.isArray(this.gameNotation) && this.gameNotation.length !== 0) {
            this.useNotation();
        }
    }
}
ChessFieldComponent.ɵfac = function ChessFieldComponent_Factory(t) { return new (t || ChessFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_injectables_websocket__WEBPACK_IMPORTED_MODULE_4__.WebsocketDecorator)); };
ChessFieldComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ChessFieldComponent, selectors: [["app-chess-field"]], inputs: { notation: "notation", room: "room" }, outputs: { figureCaptured: "figureCaptured" }, decls: 3, vars: 6, consts: [[1, "chess-field"], [3, "square", "playerColor", "width", "height", "grabFigure", "dropFigure", "clearPossibleMoves", "targetSquareChange", "captureFigure", 4, "ngFor", "ngForOf"], [3, "visible", "promotionInfo", "promoteVariants", "playerColor", "width", "visibleChange", "promoteVariantChosen"], [3, "square", "playerColor", "width", "height", "grabFigure", "dropFigure", "clearPossibleMoves", "targetSquareChange", "captureFigure"]], template: function ChessFieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChessFieldComponent_app_chess_field_square_1_Template, 1, 4, "app-chess-field-square", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "app-promote-popup", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("visibleChange", function ChessFieldComponent_Template_app_promote_popup_visibleChange_2_listener($event) { return ctx.promotePopup = $event; })("promoteVariantChosen", function ChessFieldComponent_Template_app_promote_popup_promoteVariantChosen_2_listener($event) { return ctx.promoteFigure($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.squares);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("visible", ctx.promotePopup)("promotionInfo", ctx.promotionInfo)("promoteVariants", ctx.chessField.promoteVariants)("playerColor", ctx.playerColor)("width", ctx.chessField.width);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _popups_promote_popup_promote_popup_component__WEBPACK_IMPORTED_MODULE_5__.PromotePopupComponent, _chess_field_square_chess_field_square_component__WEBPACK_IMPORTED_MODULE_6__.ChessFieldSquareComponent], styles: [".chess-field[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template: repeat(8, 80px)/repeat(8, 80px);\n  margin: 10px;\n  border: 3px solid #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZXNzLWZpZWxkLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOENBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFDRiIsImZpbGUiOiJjaGVzcy1maWVsZC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVzcy1maWVsZFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gIGRpc3BsYXk6IGdyaWRcclxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoOCwgODBweCkgLyByZXBlYXQoOCwgODBweClcclxuICBtYXJnaW46IDEwcHhcclxuICBib3JkZXI6IDNweCBzb2xpZCAjZmZmZmZmIl19 */"] });


/***/ }),

/***/ 8159:
/*!*******************************************************************!*\
  !*** ./src/app/components/chess-figure/chess-figure.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChessFigureComponent": () => (/* binding */ ChessFigureComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class ChessFigureComponent {
    constructor() {
        this.figure = null;
    }
    get name() {
        var _a;
        return ((_a = this.figure) === null || _a === void 0 ? void 0 : _a.name) || '';
    }
    get image() {
        var _a;
        return ((_a = this.figure) === null || _a === void 0 ? void 0 : _a.image) || '#';
    }
    ngOnInit() {
    }
}
ChessFigureComponent.ɵfac = function ChessFigureComponent_Factory(t) { return new (t || ChessFigureComponent)(); };
ChessFigureComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChessFigureComponent, selectors: [["app-chess-figure"]], inputs: { figure: "figure" }, decls: 2, vars: 2, consts: [[1, "chess-field-square-figure"], [3, "src", "alt"]], template: function ChessFigureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.name);
    } }, styles: [".chess-field-square-figure[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 3;\n  width: 100%;\n  height: 100%;\n  cursor: move;\n}\n.chess-field-square-figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZXNzLWZpZ3VyZS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUVKIiwiZmlsZSI6ImNoZXNzLWZpZ3VyZS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVzcy1maWVsZC1zcXVhcmUtZmlndXJlXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgei1pbmRleDogM1xyXG4gIHdpZHRoOiAxMDAlXHJcbiAgaGVpZ2h0OiAxMDAlXHJcbiAgY3Vyc29yOiBtb3ZlXHJcbiAgaW1nXHJcbiAgICBtYXgtd2lkdGg6IDEwMCVcclxuICAgIG1heC1oZWlnaHQ6IDEwMCVcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW4iXX0= */"] });


/***/ }),

/***/ 4488:
/*!*************************************************************!*\
  !*** ./src/app/components/room-item/room-item.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomItemComponent": () => (/* binding */ RoomItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class RoomItemComponent {
    constructor() {
        this.isCurrentRoom = false;
        this.isChosenRoom = false;
    }
    get name() {
        var _a;
        return ((_a = this.room) === null || _a === void 0 ? void 0 : _a.name) || '';
    }
    get playerCount() {
        var _a;
        return `${((_a = this.room) === null || _a === void 0 ? void 0 : _a.players.length) || 0}/2`;
    }
    get hasStarted() {
        var _a;
        return ((_a = this.room) === null || _a === void 0 ? void 0 : _a.gameHasStarted) ? 'Yes' : 'No';
    }
}
RoomItemComponent.ɵfac = function RoomItemComponent_Factory(t) { return new (t || RoomItemComponent)(); };
RoomItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoomItemComponent, selectors: [["app-room-item"]], inputs: { room: "room", isCurrentRoom: "isCurrentRoom", isChosenRoom: "isChosenRoom" }, decls: 7, vars: 7, consts: [[1, "room-item"], [1, "room-item-name"], [1, "room-item-player-count"], [1, "room-item-has-started"]], template: function RoomItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-chosen", ctx.isChosenRoom)("is-current", ctx.isCurrentRoom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.playerCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hasStarted);
    } }, styles: [".room-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template: 30px/1fr 50px 50px;\n  align-items: center;\n  background-color: rgba(255, 255, 0, 0);\n  color: #ffffff;\n  transition: all 0.3s ease;\n}\n.room-item[_ngcontent-%COMP%]:hover, .room-item.is-chosen[_ngcontent-%COMP%] {\n  background-color: yellow;\n  color: #232221;\n  cursor: pointer;\n}\n.room-item.is-current[_ngcontent-%COMP%] {\n  background-color: #00aa00;\n}\n.room-item-name[_ngcontent-%COMP%] {\n  padding: 0 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb20taXRlbS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFDRjtBQUFFO0VBQ0Usd0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUVKO0FBREU7RUFDRSx5QkFBQTtBQUdKO0FBREE7RUFDRSxlQUFBO0FBSUYiLCJmaWxlIjoicm9vbS1pdGVtLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvb20taXRlbVxyXG4gIGRpc3BsYXk6IGdyaWRcclxuICBncmlkLXRlbXBsYXRlOiAzMHB4IC8gMWZyIDUwcHggNTBweFxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAwLCAwKVxyXG4gIGNvbG9yOiAjZmZmZmZmXHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZVxyXG4gICY6aG92ZXIsICYuaXMtY2hvc2VuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAwLCAxKVxyXG4gICAgY29sb3I6ICMyMzIyMjFcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICYuaXMtY3VycmVudFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNzAsIDAsIDEpXHJcblxyXG4ucm9vbS1pdGVtLW5hbWVcclxuICBwYWRkaW5nOiAwIDE1cHgiXX0= */"] });


/***/ }),

/***/ 6238:
/*!*************************************************************!*\
  !*** ./src/app/components/room-list/room-list.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomListComponent": () => (/* binding */ RoomListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _room_item_room_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../room-item/room-item.component */ 4488);




function RoomListComponent_app_room_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-room-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RoomListComponent_app_room_item_1_Template_app_room_item_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const room_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.emitRoomClick(room_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const room_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("room", room_r1)("isCurrentRoom", room_r1.id === (ctx_r0.currentRoom == null ? null : ctx_r0.currentRoom.id))("isChosenRoom", room_r1.id === (ctx_r0.chosenRoom == null ? null : ctx_r0.chosenRoom.id));
} }
class RoomListComponent {
    constructor() {
        this.list = [];
        this.chosenRoom = null;
        this.currentRoom = null;
        this.roomClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    emitRoomClick(room) {
        this.roomClick.emit(room);
    }
}
RoomListComponent.ɵfac = function RoomListComponent_Factory(t) { return new (t || RoomListComponent)(); };
RoomListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RoomListComponent, selectors: [["app-room-list"]], inputs: { list: "list", chosenRoom: "chosenRoom", currentRoom: "currentRoom" }, outputs: { roomClick: "roomClick" }, decls: 2, vars: 1, consts: [[1, "room-list"], [3, "room", "isCurrentRoom", "isChosenRoom", "click", 4, "ngFor", "ngForOf"], [3, "room", "isCurrentRoom", "isChosenRoom", "click"]], template: function RoomListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RoomListComponent_app_room_item_1_Template, 1, 3, "app-room-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.list);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _room_item_room_item_component__WEBPACK_IMPORTED_MODULE_0__.RoomItemComponent], styles: [".room-list[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 5px;\n  overflow: hidden;\n  background: #212121;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb20tbGlzdC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJyb29tLWxpc3QuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm9vbS1saXN0XHJcbiAgaGVpZ2h0OiAxMDAlXHJcbiAgYm9yZGVyLXJhZGl1czogNXB4XHJcbiAgb3ZlcmZsb3c6IGhpZGRlblxyXG4gIGJhY2tncm91bmQ6ICMyMTIxMjEiXX0= */"] });


/***/ }),

/***/ 5920:
/*!******************************************!*\
  !*** ./src/app/injectables/websocket.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebsocketDecorator": () => (/* binding */ WebsocketDecorator)
/* harmony export */ });
/* harmony import */ var _classes_UserInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/UserInfo */ 7537);
/* harmony import */ var _websocket_connectWebsocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../websocket/connectWebsocket */ 9329);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);



class WebsocketDecorator {
    constructor() {
        this.userInfo = null;
        this.gameId = 0;
    }
    loadUserInfo() {
        if (this.userInfo)
            return this.userInfo;
        const infoString = localStorage.getItem('ghost-chess-info');
        if (!infoString)
            return null;
        const info = JSON.parse(infoString);
        if (!(0,_classes_UserInfo__WEBPACK_IMPORTED_MODULE_0__.isUserInfo)(info))
            return null;
        this.userInfo = info;
        return info;
    }
    saveUserInfo(userInfo) {
        localStorage.setItem('ghost-chess-info', JSON.stringify(userInfo));
        this.userInfo = userInfo;
    }
    emit(event, data) {
        var _a;
        if (!_websocket_connectWebsocket__WEBPACK_IMPORTED_MODULE_1__.socket)
            return;
        const info = {
            id: (_a = this.userInfo) === null || _a === void 0 ? void 0 : _a.id,
        };
        if (this.gameId !== 0) {
            info.gameId = this.gameId;
        }
        if (typeof data === 'object' && data) {
            Object.keys(data).forEach(key => {
                info[key] = data[key];
            });
        }
        else if (data) {
            info.info = data;
        }
        _websocket_connectWebsocket__WEBPACK_IMPORTED_MODULE_1__.socket.emit(event, info);
    }
    on(event, handler) {
        if (!_websocket_connectWebsocket__WEBPACK_IMPORTED_MODULE_1__.socket)
            return;
        _websocket_connectWebsocket__WEBPACK_IMPORTED_MODULE_1__.socket.on(event, handler);
    }
}
WebsocketDecorator.ɵfac = function WebsocketDecorator_Factory(t) { return new (t || WebsocketDecorator)(); };
WebsocketDecorator.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: WebsocketDecorator, factory: WebsocketDecorator.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3899:
/*!*****************************************************************!*\
  !*** ./src/app/popups/default-popup/default-popup.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultPopupComponent": () => (/* binding */ DefaultPopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _common_components_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common-components/default-button/default-button.component */ 1037);




function DefaultPopupComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.message, " ");
} }
function DefaultPopupComponent_ng_container_11_app_default_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-default-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DefaultPopupComponent_ng_container_11_app_default_button_1_Template_app_default_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r6.confirmClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.confirmText, " ");
} }
function DefaultPopupComponent_ng_container_11_app_default_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-default-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DefaultPopupComponent_ng_container_11_app_default_button_2_Template_app_default_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.rejectClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.rejectText, " ");
} }
function DefaultPopupComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DefaultPopupComponent_ng_container_11_app_default_button_1_Template, 2, 1, "app-default-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DefaultPopupComponent_ng_container_11_app_default_button_2_Template, 2, 1, "app-default-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.showConfirmButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.showConfirmButton);
} }
const _c0 = ["*", [["selector"]]];
const _c1 = ["*", "selector"];
class DefaultPopupComponent {
    constructor() {
        this.visible = false;
        this.title = '';
        this.message = '';
        this.confirmText = 'Ok';
        this.rejectText = 'Cancel';
        this.showConfirmButton = true;
        this.showRejectButton = true;
        this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.confirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.reject = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    confirmClick() {
        this.confirm.emit();
    }
    rejectClick() {
        this.reject.emit();
    }
}
DefaultPopupComponent.ɵfac = function DefaultPopupComponent_Factory(t) { return new (t || DefaultPopupComponent)(); };
DefaultPopupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DefaultPopupComponent, selectors: [["app-default-popup"]], inputs: { visible: "visible", title: "title", message: "message", confirmText: "confirmText", rejectText: "rejectText", showConfirmButton: "showConfirmButton", showRejectButton: "showRejectButton" }, outputs: { visibleChange: "visibleChange", confirm: "confirm", reject: "reject" }, ngContentSelectors: _c1, decls: 12, vars: 5, consts: [[1, "default-popup"], [1, "default-popup-title"], [1, "default-popup-content"], ["content", ""], [4, "ngIf"], [1, "default-popup-buttons"], ["buttons", ""], [1, "default-popup-buttons-default"], [3, "click", 4, "ngIf"], [3, "click"]], template: function DefaultPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DefaultPopupComponent_ng_container_6_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](9, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, DefaultPopupComponent_ng_container_11_Template, 3, 2, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-open", ctx.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r0.hasChildNodes());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r2.hasChildNodes());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _common_components_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_0__.DefaultButtonComponent], styles: [".default-popup[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 5;\n  transform: translate(-50%, -50%);\n  display: none;\n  width: 300px;\n  height: auto;\n  min-height: 0;\n  max-height: 70%;\n  padding: 15px 35px;\n  border-radius: 15px;\n  background: #ffffff;\n  box-shadow: 5px 5px 21px 6px rgba(0, 0, 0, 0.64);\n}\n.default-popup.is-open[_ngcontent-%COMP%] {\n  display: block;\n}\n.default-popup-title[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-size: 18px;\n  font-weight: 500;\n  text-align: center;\n}\n.default-popup-content[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.default-popup-buttons[_ngcontent-%COMP%], .default-popup-buttons-default[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 15px;\n}\n.default-popup-buttons-default[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmF1bHQtcG9wdXAuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnREFBQTtBQUNGO0FBQUU7RUFDRSxjQUFBO0FBRUo7QUFBQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFHRjtBQURBO0VBQ0UsZUFBQTtBQUlGO0FBRkE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFLRjtBQUhBO0VBQ0UsYUFBQTtBQU1GIiwiZmlsZSI6ImRlZmF1bHQtcG9wdXAuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVmYXVsdC1wb3B1cFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gIHRvcDogNTAlXHJcbiAgbGVmdDogNTAlXHJcbiAgei1pbmRleDogNVxyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpXHJcbiAgZGlzcGxheTogbm9uZVxyXG4gIHdpZHRoOiAzMDBweFxyXG4gIGhlaWdodDogYXV0b1xyXG4gIG1pbi1oZWlnaHQ6IDBcclxuICBtYXgtaGVpZ2h0OiA3MCVcclxuICBwYWRkaW5nOiAxNXB4IDM1cHhcclxuICBib3JkZXItcmFkaXVzOiAxNXB4XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZlxyXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMjFweCA2cHggcmdiYSgwLDAsMCwwLjY0KVxyXG4gICYuaXMtb3BlblxyXG4gICAgZGlzcGxheTogYmxvY2tcclxuXHJcbi5kZWZhdWx0LXBvcHVwLXRpdGxlXHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweFxyXG4gIGZvbnQtc2l6ZTogMThweFxyXG4gIGZvbnQtd2VpZ2h0OiA1MDBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuXHJcbi5kZWZhdWx0LXBvcHVwLWNvbnRlbnRcclxuICBtYXgtd2lkdGg6IDEwMCVcclxuXHJcbi5kZWZhdWx0LXBvcHVwLWJ1dHRvbnMsIC5kZWZhdWx0LXBvcHVwLWJ1dHRvbnMtZGVmYXVsdFxyXG4gIGRpc3BsYXk6IGZsZXhcclxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXBcclxuICBhbGlnbi1pdGVtczogY2VudGVyXHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXHJcbiAgbWFyZ2luLXRvcDogMTVweFxyXG5cclxuLmRlZmF1bHQtcG9wdXAtYnV0dG9ucy1kZWZhdWx0XHJcbiAgbWFyZ2luLXRvcDogMCJdfQ== */"] });


/***/ }),

/***/ 2:
/*!*********************************************************************!*\
  !*** ./src/app/popups/host-room-popup/host-room-popup.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HostRoomPopupComponent": () => (/* binding */ HostRoomPopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _default_popup_default_popup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../default-popup/default-popup.component */ 3899);
/* harmony import */ var _common_components_default_text_field_default_text_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common-components/default-text-field/default-text-field.component */ 6881);




class HostRoomPopupComponent {
    constructor() {
        this.visible = false;
        this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.hostRoom = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.name = '';
    }
    confirm() {
        this.hostRoom.emit(this.name);
        this.close();
    }
    close() {
        this.visibleChange.emit(false);
        this.name = '';
    }
}
HostRoomPopupComponent.ɵfac = function HostRoomPopupComponent_Factory(t) { return new (t || HostRoomPopupComponent)(); };
HostRoomPopupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HostRoomPopupComponent, selectors: [["app-host-room-popup"]], inputs: { visible: "visible" }, outputs: { visibleChange: "visibleChange", hostRoom: "hostRoom" }, decls: 2, vars: 2, consts: [["title", "Create room", 3, "visible", "visibleChange", "confirm", "reject"], [3, "value", "valueChange"]], template: function HostRoomPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-default-popup", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function HostRoomPopupComponent_Template_app_default_popup_visibleChange_0_listener($event) { return ctx.visible = $event; })("confirm", function HostRoomPopupComponent_Template_app_default_popup_confirm_0_listener() { return ctx.confirm(); })("reject", function HostRoomPopupComponent_Template_app_default_popup_reject_0_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-default-text-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function HostRoomPopupComponent_Template_app_default_text_field_valueChange_1_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", ctx.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.name);
    } }, directives: [_default_popup_default_popup_component__WEBPACK_IMPORTED_MODULE_0__.DefaultPopupComponent, _common_components_default_text_field_default_text_field_component__WEBPACK_IMPORTED_MODULE_1__.DefaultTextFieldComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3N0LXJvb20tcG9wdXAuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 7194:
/*!*******************************************************************!*\
  !*** ./src/app/popups/name-set-popup/name-set-popup.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NameSetPopupComponent": () => (/* binding */ NameSetPopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _default_popup_default_popup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../default-popup/default-popup.component */ 3899);
/* harmony import */ var _common_components_default_text_field_default_text_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common-components/default-text-field/default-text-field.component */ 6881);




class NameSetPopupComponent {
    constructor() {
        this.visible = false;
        this.name = '';
        this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.setNewName = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.currentName = '';
    }
    close() {
        this.toggle(false);
        this.currentName = '';
    }
    confirm() {
        this.setNewName.emit(this.currentName);
        this.close();
    }
    toggle(value) {
        this.visible = value;
        this.visibleChange.emit(this.visible);
        if (value)
            this.currentName = this.name;
    }
}
NameSetPopupComponent.ɵfac = function NameSetPopupComponent_Factory(t) { return new (t || NameSetPopupComponent)(); };
NameSetPopupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NameSetPopupComponent, selectors: [["app-name-set-popup"]], inputs: { visible: "visible", name: "name" }, outputs: { visibleChange: "visibleChange", setNewName: "setNewName" }, decls: 2, vars: 2, consts: [["title", "Enter your name:", 3, "visible", "visibleChange", "confirm", "reject"], [3, "value", "valueChange"]], template: function NameSetPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-default-popup", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function NameSetPopupComponent_Template_app_default_popup_visibleChange_0_listener($event) { return ctx.visible = $event; })("confirm", function NameSetPopupComponent_Template_app_default_popup_confirm_0_listener() { return ctx.confirm(); })("reject", function NameSetPopupComponent_Template_app_default_popup_reject_0_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-default-text-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function NameSetPopupComponent_Template_app_default_text_field_valueChange_1_listener($event) { return ctx.currentName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", ctx.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.currentName);
    } }, directives: [_default_popup_default_popup_component__WEBPACK_IMPORTED_MODULE_0__.DefaultPopupComponent, _common_components_default_text_field_default_text_field_component__WEBPACK_IMPORTED_MODULE_1__.DefaultTextFieldComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYW1lLXNldC1wb3B1cC5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 2963:
/*!*****************************************************************!*\
  !*** ./src/app/popups/promote-popup/promote-popup.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromotePopupComponent": () => (/* binding */ PromotePopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _components_chess_figure_chess_figure_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/chess-figure/chess-figure.component */ 8159);




function PromotePopupComponent_app_chess_figure_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-chess-figure", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PromotePopupComponent_app_chess_figure_1_Template_app_chess_figure_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const variant_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.choosePromoteVariant(variant_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const variant_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("figure", variant_r1);
} }
class PromotePopupComponent {
    constructor() {
        this.promoteVariants = [];
        this.promotionInfo = null;
        this.visible = false;
        this.playerColor = 'white';
        this.width = 8;
        this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.promoteVariantChosen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    get left() {
        if (!this.promotionInfo)
            return 0;
        return this.playerColor === 'white'
            ? (this.promotionInfo.square.coordinates.x - 1) * 80
            : (this.width - this.promotionInfo.square.coordinates.x) * 80;
    }
    close() {
        this.toggle(false);
    }
    choosePromoteVariant(figure) {
        this.promoteVariantChosen.emit(figure);
        this.close();
    }
    toggle(value) {
        this.visible = value;
        this.visibleChange.emit(this.visible);
    }
    ngOnInit() {
    }
}
PromotePopupComponent.ɵfac = function PromotePopupComponent_Factory(t) { return new (t || PromotePopupComponent)(); };
PromotePopupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PromotePopupComponent, selectors: [["app-promote-popup"]], inputs: { promoteVariants: "promoteVariants", promotionInfo: "promotionInfo", visible: "visible", playerColor: "playerColor", width: "width" }, outputs: { visibleChange: "visibleChange", promoteVariantChosen: "promoteVariantChosen" }, decls: 2, vars: 5, consts: [[1, "promote-popup"], ["class", "promote-variant", 3, "figure", "click", 4, "ngFor", "ngForOf"], [1, "promote-variant", 3, "figure", "click"]], template: function PromotePopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PromotePopupComponent_app_chess_figure_1_Template, 1, 1, "app-chess-figure", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("left", ctx.left, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-open", ctx.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.promoteVariants);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _components_chess_figure_chess_figure_component__WEBPACK_IMPORTED_MODULE_0__.ChessFigureComponent], styles: [".promote-popup[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 4;\n  display: none;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 80px;\n}\n.promote-popup.is-open[_ngcontent-%COMP%] {\n  display: flex;\n}\n.promote-variant[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background: #999999;\n}\n.promote-variant[_ngcontent-%COMP%]:hover {\n  background: #666666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb21vdGUtcG9wdXAuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFBRTtFQUNFLGFBQUE7QUFFSjtBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUdGO0FBRkU7RUFDRSxtQkFBQTtBQUlKIiwiZmlsZSI6InByb21vdGUtcG9wdXAuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvbW90ZS1wb3B1cFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gIHRvcDogMFxyXG4gIGxlZnQ6IDBcclxuICB6LWluZGV4OiA0XHJcbiAgZGlzcGxheTogbm9uZVxyXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcFxyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydFxyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0XHJcbiAgd2lkdGg6IDgwcHhcclxuICAmLmlzLW9wZW5cclxuICAgIGRpc3BsYXk6IGZsZXhcclxuXHJcbi5wcm9tb3RlLXZhcmlhbnRcclxuICB3aWR0aDogODBweFxyXG4gIGhlaWdodDogODBweFxyXG4gIGJhY2tncm91bmQ6ICM5OTk5OTlcclxuICAmOmhvdmVyXHJcbiAgICBiYWNrZ3JvdW5kOiAjNjY2NjY2Il19 */"] });


/***/ }),

/***/ 9173:
/*!***********************************************!*\
  !*** ./src/app/routes/game/game.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameComponent": () => (/* binding */ GameComponent)
/* harmony export */ });
/* harmony import */ var src_app_websocket_connectWebsocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/websocket/connectWebsocket */ 9329);
/* harmony import */ var _classes_UserInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/UserInfo */ 7537);
/* harmony import */ var _classes_RoomInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/RoomInfo */ 4360);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_injectables_websocket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/injectables/websocket */ 5920);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _popups_name_set_popup_name_set_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../popups/name-set-popup/name-set-popup.component */ 7194);







class GameComponent {
    constructor(socket) {
        this.socket = socket;
        this.namePopup = false;
        this.currentRoom = null;
    }
    get gameHasStarted() {
        var _a;
        return ((_a = this.currentRoom) === null || _a === void 0 ? void 0 : _a.gameHasStarted) || false;
    }
    get userName() {
        var _a;
        return ((_a = this.socket.userInfo) === null || _a === void 0 ? void 0 : _a.name) || '';
    }
    saveUserInfo(userInfo) {
        if (!userInfo.name) {
            this.namePopup = true;
        }
        this.socket.saveUserInfo(userInfo);
    }
    isClientSide() {
        return typeof window !== 'undefined';
    }
    setNewName(name) {
        if (!name)
            return;
        this.socket.emit('setNewUserName', { name });
        if (!this.socket.userInfo)
            return;
        this.socket.userInfo.name = name;
        this.saveUserInfo(this.socket.userInfo);
    }
    ngOnInit() {
        if (this.isClientSide()) {
            this.socket.loadUserInfo();
            if (!src_app_websocket_connectWebsocket__WEBPACK_IMPORTED_MODULE_0__.socket)
                (0,src_app_websocket_connectWebsocket__WEBPACK_IMPORTED_MODULE_0__.connectSocket)();
            this.socket.on('showError', error => {
                console.error(error);
            });
            this.socket.on('saveUser', data => {
                if (!(0,_classes_UserInfo__WEBPACK_IMPORTED_MODULE_1__.isUserInfo)(data))
                    return;
                this.saveUserInfo(data);
            });
            this.socket.on('userIsConnected', () => {
                this.socket.emit('checkForUserRoom');
            });
            this.socket.on('userRoomCheckResult', room => {
                if (!(0,_classes_RoomInfo__WEBPACK_IMPORTED_MODULE_2__.isRoomInfo)(room)) {
                    return;
                }
                this.currentRoom = room;
            });
            this.socket.emit('checkUser', this.socket.userInfo || undefined);
        }
    }
}
GameComponent.ɵfac = function GameComponent_Factory(t) { return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_injectables_websocket__WEBPACK_IMPORTED_MODULE_3__.WebsocketDecorator)); };
GameComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: GameComponent, selectors: [["app-game"]], decls: 3, vars: 2, consts: [[1, "game-route"], [3, "visible", "name", "visibleChange", "setNewName"]], template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "app-name-set-popup", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("visibleChange", function GameComponent_Template_app_name_set_popup_visibleChange_2_listener($event) { return ctx.namePopup = $event; })("setNewName", function GameComponent_Template_app_name_set_popup_setNewName_2_listener($event) { return ctx.setNewName($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", ctx.namePopup)("name", ctx.userName);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _popups_name_set_popup_name_set_popup_component__WEBPACK_IMPORTED_MODULE_4__.NameSetPopupComponent], styles: [".game-route[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.captured-figures[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n}\n\n.captured-figures[_ngcontent-%COMP%]   .chess-field-square-figure[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUVGOztBQURFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFHSiIsImZpbGUiOiJnYW1lLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbWUtcm91dGVcclxuICBoZWlnaHQ6IDEwMCVcclxuXHJcbi5jYXB0dXJlZC1maWd1cmVzXHJcbiAgZGlzcGxheTogZmxleFxyXG4gIGZsZXgtZmxvdzogcm93IHdyYXBcclxuICBhbGlnbi1pdGVtczogY2VudGVyXHJcbiAgLmNoZXNzLWZpZWxkLXNxdWFyZS1maWd1cmVcclxuICAgIHdpZHRoOiAzMHB4XHJcbiAgICBoZWlnaHQ6IDMwcHgiXX0= */"] });


/***/ }),

/***/ 3558:
/*!***********************************************!*\
  !*** ./src/app/routes/home/home.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 8247:
/*!*************************************************!*\
  !*** ./src/app/routes/lobby/lobby.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LobbyComponent": () => (/* binding */ LobbyComponent)
/* harmony export */ });
/* harmony import */ var src_app_classes_RoomInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/RoomInfo */ 4360);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_injectables_websocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/injectables/websocket */ 5920);
/* harmony import */ var _components_room_list_room_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/room-list/room-list.component */ 6238);
/* harmony import */ var _common_components_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common-components/default-button/default-button.component */ 1037);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _popups_host_room_popup_host_room_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../popups/host-room-popup/host-room-popup.component */ 2);








function LobbyComponent_app_default_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-default-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LobbyComponent_app_default_button_8_Template_app_default_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r2.leaveRoom(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Leave room ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function LobbyComponent_app_default_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-default-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LobbyComponent_app_default_button_9_Template_app_default_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r4.startGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Start game ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r1.roomIsFull);
} }
class LobbyComponent {
    constructor(router, socket) {
        this.router = router;
        this.socket = socket;
        this.roomList = [];
        this.hostRoomPopup = false;
        this.targetRoom = null;
        this.currentRoom = null;
    }
    get isInRoom() {
        return !!this.currentRoom;
    }
    get roomIsFull() {
        if (!this.currentRoom)
            return false;
        const { players, maxPlayers } = this.currentRoom;
        return players.length === maxPlayers;
    }
    get targetRoomIsFull() {
        if (!this.targetRoom)
            return false;
        const { players, maxPlayers } = this.targetRoom;
        return players.length === maxPlayers;
    }
    get isHost() {
        if (!this.currentRoom || !this.socket.userInfo)
            return false;
        return this.currentRoom.hostId === this.socket.userInfo.id;
    }
    isClientSide() {
        return typeof window !== 'undefined';
    }
    setTargetRoom(room) {
        this.targetRoom = room || null;
    }
    hostRoom() {
        this.hostRoomPopup = true;
    }
    createRoom(name) {
        this.socket.emit('createRoom', { name });
    }
    joinRoom() {
        if (!this.targetRoom)
            return;
        this.socket.emit('joinRoom', { roomId: this.targetRoom.id });
    }
    leaveRoom() {
        if (!this.currentRoom)
            return;
        this.socket.emit('leaveRoom', { roomId: this.currentRoom.id });
    }
    startGame() {
        if (!this.currentRoom)
            return;
        this.socket.emit('startGame', { roomId: this.currentRoom.id });
    }
    setCurrentRoom(room) {
        if (!(0,src_app_classes_RoomInfo__WEBPACK_IMPORTED_MODULE_0__.isRoomInfo)(room)) {
            this.currentRoom = null;
            this.socket.gameId = 0;
            return;
        }
        this.currentRoom = room;
        this.socket.gameId = room.id;
        this.goToGameRoute();
    }
    goToGameRoute() {
        var _a;
        if (!((_a = this.currentRoom) === null || _a === void 0 ? void 0 : _a.gameHasStarted))
            return;
        this.router.navigate(['game', this.currentRoom.id.toString()]);
    }
    ngOnInit() {
        if (!this.isClientSide)
            return;
        this.socket.on('userRoomCheckResult', room => {
            this.setCurrentRoom(room);
        });
        this.socket.on('refreshRoomList', roomList => {
            if (!Array.isArray(roomList))
                return;
            this.roomList = roomList.filter(room => (0,src_app_classes_RoomInfo__WEBPACK_IMPORTED_MODULE_0__.isRoomInfo)(room));
            if (!this.currentRoom)
                return;
            const currentRoom = this.roomList.find(room => { var _a; return room.id === ((_a = this.currentRoom) === null || _a === void 0 ? void 0 : _a.id); });
            if (currentRoom)
                this.setCurrentRoom(currentRoom);
        });
        this.socket.on('joinedRoom', room => {
            this.setCurrentRoom(room);
        });
        this.socket.on('leftRoom', () => {
            this.setCurrentRoom(null);
        });
        this.socket.on('updateCurrentGame', room => {
            if ((0,src_app_classes_RoomInfo__WEBPACK_IMPORTED_MODULE_0__.isRoomInfo)(room))
                this.setCurrentRoom(room);
        });
        this.socket.emit('getRoomList');
        this.socket.emit('checkForUserRoom');
    }
}
LobbyComponent.ɵfac = function LobbyComponent_Factory(t) { return new (t || LobbyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_injectables_websocket__WEBPACK_IMPORTED_MODULE_1__.WebsocketDecorator)); };
LobbyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: LobbyComponent, selectors: [["app-lobby"]], decls: 11, vars: 8, consts: [[1, "game-lobby"], [3, "list", "chosenRoom", "currentRoom", "roomClick"], [1, "joined-room"], [1, "game-lobby-controls"], [3, "disabled", "click"], [3, "click", 4, "ngIf"], [3, "disabled", "click", 4, "ngIf"], [3, "visible", "visibleChange", "hostRoom"], [3, "click"]], template: function LobbyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "app-room-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("roomClick", function LobbyComponent_Template_app_room_list_roomClick_1_listener($event) { return ctx.setTargetRoom($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "app-default-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LobbyComponent_Template_app_default_button_click_4_listener() { return ctx.hostRoom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Host room ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "app-default-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LobbyComponent_Template_app_default_button_click_6_listener() { return ctx.joinRoom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " Join room ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, LobbyComponent_app_default_button_8_Template, 2, 0, "app-default-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, LobbyComponent_app_default_button_9_Template, 2, 1, "app-default-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "app-host-room-popup", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("visibleChange", function LobbyComponent_Template_app_host_room_popup_visibleChange_10_listener($event) { return ctx.hostRoomPopup = $event; })("hostRoom", function LobbyComponent_Template_app_host_room_popup_hostRoom_10_listener($event) { return ctx.createRoom($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("list", ctx.roomList)("chosenRoom", ctx.targetRoom)("currentRoom", ctx.currentRoom);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.isInRoom);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.isInRoom || ctx.targetRoomIsFull);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isInRoom);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isInRoom && ctx.isHost);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", ctx.hostRoomPopup);
    } }, directives: [_components_room_list_room_list_component__WEBPACK_IMPORTED_MODULE_2__.RoomListComponent, _common_components_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_3__.DefaultButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _popups_host_room_popup_host_room_popup_component__WEBPACK_IMPORTED_MODULE_4__.HostRoomPopupComponent], styles: [".game-lobby[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template: 1fr 50px/repeat(2, 1fr);\n  height: 100%;\n}\n\n.game-lobby-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n.game-lobby-controls[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-of-type(n+2) {\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYmJ5LmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQUVGOztBQURFO0VBQ0UsaUJBQUE7QUFHSiIsImZpbGUiOiJsb2JieS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nYW1lLWxvYmJ5XHJcbiAgZGlzcGxheTogZ3JpZFxyXG4gIGdyaWQtdGVtcGxhdGU6IDFmciA1MHB4IC8gcmVwZWF0KDIsIDFmcilcclxuICBoZWlnaHQ6IDEwMCVcclxuXHJcbi5nYW1lLWxvYmJ5LWNvbnRyb2xzXHJcbiAgZGlzcGxheTogZmxleFxyXG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcFxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnRcclxuICAmID4gKjpudGgtb2YtdHlwZShuKzIpXHJcbiAgICBtYXJnaW4tbGVmdDogMTVweCJdfQ== */"] });


/***/ }),

/***/ 8591:
/*!***************************************************************!*\
  !*** ./src/app/routes/started-game/started-game.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartedGameComponent": () => (/* binding */ StartedGameComponent)
/* harmony export */ });
/* harmony import */ var src_app_classes_RoomInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/RoomInfo */ 4360);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_injectables_websocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/injectables/websocket */ 5920);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _components_chess_figure_chess_figure_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/chess-figure/chess-figure.component */ 8159);
/* harmony import */ var _components_chess_field_chess_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/chess-field/chess-field.component */ 7376);







function StartedGameComponent_app_chess_figure_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-chess-figure", 4);
} if (rf & 2) {
    const figure_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("figure", figure_r3);
} }
function StartedGameComponent_app_chess_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-chess-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("figureCaptured", function StartedGameComponent_app_chess_field_2_Template_app_chess_field_figureCaptured_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.figureCaptured($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("room", ctx_r1.room);
} }
function StartedGameComponent_app_chess_figure_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-chess-figure", 4);
} if (rf & 2) {
    const figure_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("figure", figure_r6);
} }
class StartedGameComponent {
    constructor(router, route, socket) {
        this.router = router;
        this.route = route;
        this.socket = socket;
        this.yourCapturedFigures = [];
        this.opponentsCapturedFigures = [];
    }
    isClientSide() {
        return typeof window !== 'undefined';
    }
    figureCaptured(figure) {
        this.yourCapturedFigures.push(figure);
    }
    ngOnInit() {
        if (!this.isClientSide)
            return;
        this.socket.on('roomSearchResult', room => {
            if (!(0,src_app_classes_RoomInfo__WEBPACK_IMPORTED_MODULE_0__.isRoomInfo)(room)) {
                this.socket.gameId = 0;
                this.router.navigate(['game', 'lobby']);
                return;
            }
            this.room = room;
        });
        this.route.params.subscribe(params => {
            const { id } = params;
            this.socket.gameId = isNaN(id) ? 0 : +id;
            if (!this.socket.gameId || this.socket.gameId < 0) {
                this.router.navigate(['game', 'lobby']);
                return;
            }
            this.socket.emit('getRoom');
            // Write all communications between started game and websocket server.
            // Make chess field convert game notation into board state. It should not parse
            // notation if it's invalid.
            // Make turns and timer logic.
            // Buy a hosting and then configure nginx.
            // Make everything slightly preetier.
        });
    }
}
StartedGameComponent.ɵfac = function StartedGameComponent_Factory(t) { return new (t || StartedGameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_injectables_websocket__WEBPACK_IMPORTED_MODULE_1__.WebsocketDecorator)); };
StartedGameComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: StartedGameComponent, selectors: [["app-started-game"]], decls: 5, vars: 3, consts: [[1, "captured-figures", "opponents"], [3, "figure", 4, "ngFor", "ngForOf"], [3, "room", "figureCaptured", 4, "ngIf"], [1, "captured-figures"], [3, "figure"], [3, "room", "figureCaptured"]], template: function StartedGameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, StartedGameComponent_app_chess_figure_1_Template, 1, 1, "app-chess-figure", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, StartedGameComponent_app_chess_field_2_Template, 1, 1, "app-chess-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, StartedGameComponent_app_chess_figure_4_Template, 1, 1, "app-chess-figure", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.opponentsCapturedFigures);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.room);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.yourCapturedFigures);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _components_chess_figure_chess_figure_component__WEBPACK_IMPORTED_MODULE_2__.ChessFigureComponent, _components_chess_field_chess_field_component__WEBPACK_IMPORTED_MODULE_3__.ChessFieldComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGFydGVkLWdhbWUuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 4848:
/*!*********************************************************!*\
  !*** ./src/app/routes/wild-card/wild-card.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WildCardComponent": () => (/* binding */ WildCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class WildCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
WildCardComponent.ɵfac = function WildCardComponent_Factory(t) { return new (t || WildCardComponent)(); };
WildCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WildCardComponent, selectors: [["app-wild-card"]], decls: 2, vars: 0, template: function WildCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "404 not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aWxkLWNhcmQuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 9329:
/*!***********************************************!*\
  !*** ./src/app/websocket/connectWebsocket.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "socket": () => (/* binding */ socket),
/* harmony export */   "connectSocket": () => (/* binding */ connectSocket),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ 2340);
/* harmony import */ var websocket_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! websocket-decorator */ 903);
/* harmony import */ var websocket_decorator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(websocket_decorator__WEBPACK_IMPORTED_MODULE_1__);


const { websocketServerUrl } = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
let socket = null;
const connectSocket = () => {
    socket = (0,websocket_decorator__WEBPACK_IMPORTED_MODULE_1__.connectToWebsocket)(websocketServerUrl);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectSocket);


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    websocketServerUrl: 'ws://localhost:5000/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch(err => console.error(err));
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map