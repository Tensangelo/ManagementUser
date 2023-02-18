(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/styles/global.scss
var global = __webpack_require__(7439);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@mui/material/AppBar"
const AppBar_namespaceObject = require("@mui/material/AppBar");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
;// CONCATENATED MODULE: external "@mui/material/Toolbar"
const Toolbar_namespaceObject = require("@mui/material/Toolbar");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
;// CONCATENATED MODULE: external "@mui/material/Menu"
const Menu_namespaceObject = require("@mui/material/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Menu"
const icons_material_Menu_namespaceObject = require("@mui/icons-material/Menu");
var icons_material_Menu_default = /*#__PURE__*/__webpack_require__.n(icons_material_Menu_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Container"
const Container_namespaceObject = require("@mui/material/Container");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/MenuItem"
var MenuItem_ = __webpack_require__(9271);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);
;// CONCATENATED MODULE: external "@mui/icons-material/AssignmentInd"
const AssignmentInd_namespaceObject = require("@mui/icons-material/AssignmentInd");
var AssignmentInd_default = /*#__PURE__*/__webpack_require__.n(AssignmentInd_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/header/Navbar.tsx


// // Mui
// import Paper from '@mui/material/Paper';
// const Navbar = () => {
//     return (
//         <Paper>
//             header
//         </Paper>
//     )
// }
// export default Navbar;












const NavBar = ()=>{
    const [anchorElNav, setAnchorElNav] = (0,external_react_.useState)(null);
    const handleOpenNavMenu = (event)=>{
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = ()=>{
        setAnchorElNav(null);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
        position: "static",
        sx: {
            backgroundColor: "#067566"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
            maxWidth: "xl",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                disableGutters: true,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((AssignmentInd_default()), {
                        sx: {
                            display: {
                                xs: "none",
                                md: "flex"
                            },
                            mr: 1
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h6",
                        noWrap: true,
                        component: "a",
                        href: "/",
                        sx: {
                            mr: 2,
                            display: {
                                xs: "none",
                                md: "flex"
                            },
                            fontFamily: "Roboto",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none"
                        },
                        children: "Inicio"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            flexGrow: 1,
                            display: {
                                xs: "flex",
                                md: "none"
                            }
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                size: "large",
                                "aria-label": "account of current user",
                                "aria-controls": "menu-appbar",
                                "aria-haspopup": "true",
                                onClick: handleOpenNavMenu,
                                color: "inherit",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((icons_material_Menu_default()), {})
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Menu_default()), {
                                id: "menu-appbar",
                                anchorEl: anchorElNav,
                                anchorOrigin: {
                                    vertical: "bottom",
                                    horizontal: "left"
                                },
                                keepMounted: true,
                                transformOrigin: {
                                    vertical: "top",
                                    horizontal: "left"
                                },
                                open: Boolean(anchorElNav),
                                onClose: handleCloseNavMenu,
                                sx: {
                                    display: {
                                        xs: "block",
                                        md: "none"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                        onClick: handleCloseNavMenu,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            textAlign: "center",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/users/AllUsers",
                                                children: "Administrador de usuarios"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                        onClick: handleCloseNavMenu,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            textAlign: "center",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "https://github.com/Tensangelo/ManagementUser.git",
                                                children: "Github"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((AssignmentInd_default()), {
                        sx: {
                            display: {
                                xs: "flex",
                                md: "none"
                            },
                            mr: 1
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h5",
                        noWrap: true,
                        component: "a",
                        href: "",
                        sx: {
                            mr: 2,
                            display: {
                                xs: "flex",
                                md: "none"
                            },
                            flexGrow: 1,
                            fontFamily: "Roboto",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none"
                        },
                        children: "Inicio"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            flexGrow: 1,
                            display: {
                                xs: "none",
                                md: "flex"
                            }
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                href: "/users/AllUsers",
                                onClick: handleCloseNavMenu,
                                sx: {
                                    my: 2,
                                    color: "white",
                                    display: "block"
                                },
                                children: "Administrador de usuarios"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                href: "https://github.com/Tensangelo/ManagementUser.git",
                                onClick: handleCloseNavMenu,
                                sx: {
                                    my: 2,
                                    color: "white",
                                    display: "block"
                                },
                                children: "Github"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Navbar = (NavBar);

;// CONCATENATED MODULE: ./src/components/Layout.tsx


// Components

const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
            children
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);

;// CONCATENATED MODULE: ./src/pages/_app.tsx



// Components

function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Administrador de usuarios"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "Landing Page",
                        content: "CRUD users"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.png"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Layout, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 7439:
/***/ (() => {



/***/ }),

/***/ 19:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Button");

/***/ }),

/***/ 7934:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 9271:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 7163:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664], () => (__webpack_exec__(9379)));
module.exports = __webpack_exports__;

})();