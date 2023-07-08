"use strict";
// --------------------------------------------------------------------------
// ES Modules
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _VirtualDomRoot_instances, _VirtualDomRoot_parseVNode;
function shuffle(list) {
    let _ = [...list];
    for (let i = _.length - 1; i > 0; --i) {
        let k = Math.floor(Math.random() * (i + 1));
        [_[k], _[i]] = [_[i], _[k]];
    }
    return _;
}
function numberWithComma(n) {
    return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
const createElement = (type, props, ...children) => {
    var _a, _b;
    const returnNode = {
        $$typeof: Symbol('virtual-element'),
        type,
        key: (_a = props === null || props === void 0 ? void 0 : props.key) !== null && _a !== void 0 ? _a : null,
        props: Object.assign(Object.assign({}, props), { children: [...((_b = props === null || props === void 0 ? void 0 : props.children) !== null && _b !== void 0 ? _b : []), ...children] }),
    };
    return returnNode;
};
class VirtualDomRoot {
    constructor(rootElement) {
        _VirtualDomRoot_instances.add(this);
        this.rootElement = rootElement;
        this.rootElement = rootElement;
    }
    render(vNode) {
        const parsedElements = __classPrivateFieldGet(this, _VirtualDomRoot_instances, "m", _VirtualDomRoot_parseVNode).call(this, vNode);
        this.rootElement.append(parsedElements);
    }
    umount() {
        Array.from(this.rootElement.children).forEach((child) => child.remove());
    }
}
_VirtualDomRoot_instances = new WeakSet(), _VirtualDomRoot_parseVNode = function _VirtualDomRoot_parseVNode(vNode) {
    if (typeof vNode === 'string')
        return vNode;
    const { type, props } = vNode;
    const element = document.createElement(type);
    const children = props === null || props === void 0 ? void 0 : props.children;
    props === null || props === void 0 ? true : delete props.children;
    props &&
        Object.entries(props).forEach(([key, value]) => {
            if (key === 'className') {
                element.classList.add(value);
            }
            else {
                element.setAttribute(key, value);
            }
        });
    children === null || children === void 0 ? void 0 : children.forEach((child) => {
        if (typeof child === 'string') {
            element.append(child);
        }
        else {
            element.append(__classPrivateFieldGet(this, _VirtualDomRoot_instances, "m", _VirtualDomRoot_parseVNode).call(this, child));
        }
    });
    return element;
};
function createRoot(rootElement) {
    return new VirtualDomRoot(rootElement);
}
