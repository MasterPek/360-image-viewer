(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/Image360Viewer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Image360Viewer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$photo$2d$sphere$2d$viewer$2f$core$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@photo-sphere-viewer/core/index.module.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Image360Viewer({ imageUrl, width = '100%', height = '500px' }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const viewerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Image360Viewer.useEffect": ()=>{
            if (containerRef.current && !viewerRef.current) {
                viewerRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$photo$2d$sphere$2d$viewer$2f$core$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewer"]({
                    container: containerRef.current,
                    panorama: imageUrl,
                    size: {
                        width: width,
                        height: height
                    },
                    navbar: [
                        'autorotate',
                        'zoom',
                        'fullscreen'
                    ],
                    defaultZoomLvl: 0,
                    mousewheel: true,
                    touchmoveTwoFingers: true
                });
            }
            return ({
                "Image360Viewer.useEffect": ()=>{
                    if (viewerRef.current && containerRef.current?.contains(viewerRef.current.container)) {
                        viewerRef.current.destroy();
                    }
                }
            })["Image360Viewer.useEffect"];
        }
    }["Image360Viewer.useEffect"], [
        imageUrl,
        width,
        height
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        style: {
            width,
            height
        }
    }, void 0, false, {
        fileName: "[project]/src/components/Image360Viewer.tsx",
        lineNumber: 44,
        columnNumber: 10
    }, this);
}
_s(Image360Viewer, "fIhuk9Ndxx9/CsLTvYxiTuYVpVI=");
_c = Image360Viewer;
var _c;
__turbopack_context__.k.register(_c, "Image360Viewer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/projects/[id]/page.tsx [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports } = __turbopack_context__;
{
const e = new Error(`Could not parse module '[project]/src/app/projects/[id]/page.tsx'

'import', and 'export' cannot be used outside of module code`);
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
}]);

//# sourceMappingURL=src_53f8a458._.js.map