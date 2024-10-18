var SSYUI = function(exports, vue) {
  "use strict";
  const buttonProps = {
    // 颜色
    color: {
      type: String,
      default: "blue"
    },
    /**
     * 尺寸
     * @example 'small' | 'medium' | 'large'
     */
    size: {
      type: String,
      default: "medium"
    },
    // 是否圆角
    round: {
      type: Boolean,
      default: false
    },
    // 是否扁平
    plain: {
      type: Boolean,
      default: false
    },
    // 图标
    icon: {
      type: String,
      default: ""
    }
  };
  const SButton = /* @__PURE__ */ vue.defineComponent({
    name: "SButton",
    props: buttonProps,
    setup(props, {
      slots
    }) {
      const size = {
        small: {
          x: "2",
          y: "1",
          text: "sm"
        },
        medium: {
          x: "3",
          y: "1.5",
          text: "base"
        },
        large: {
          x: "4",
          y: "2",
          text: "lg"
        }
      };
      return () => vue.createVNode("button", {
        "class": `
          mx-1
          hover:scale-105
          hover:text-white
          transition duration-300 ease-in-out transform
          py-${size[props.size].y}
          px-${size[props.size].x}
          ${props.round ? "rounded-full" : "rounded-lg"}
          bg-${props.color}-${props.plain ? "100" : "500"}
          hover:bg-${props.color}-400
          border-${props.color}-${props.plain ? "500" : "500"}
          cursor-pointer
          border-solid
          text-${props.plain ? `${props.color}-500` : "white"}
          text-${size[props.size].text}
          `
      }, [props.icon !== "" ? vue.createVNode("i", {
        "class": `i-ic-baseline-${props.icon} p-3`
      }, null) : "", slots.default ? slots.default() : ""]);
    }
  });
  const _sfc_main = {
    name: "SFCButton"
  };
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("button", null, "SFC Button");
  }
  const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
  const TSXButton = /* @__PURE__ */ vue.defineComponent({
    name: "TSXButton",
    render() {
      return vue.createVNode("button", null, [vue.createTextVNode("TSX Button")]);
    }
  });
  const entry = {
    install(app) {
      app.component(SButton.name, SButton);
      app.component(SFCButton.name, SFCButton);
      app.component(TSXButton.name, TSXButton);
    }
  };
  exports.SButton = SButton;
  exports.SFCButton = SFCButton;
  exports.TSXButton = TSXButton;
  exports.default = entry;
  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
  return exports;
}({}, Vue);
