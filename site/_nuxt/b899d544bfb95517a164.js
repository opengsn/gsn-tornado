(window.webpackJsonp = window.webpackJsonp || []).push([
    [3], {
        1052: function(t, e, r) {
            "use strict";
            r.r(e);
            r(66), r(34), r(21), r(47), r(48), r(49), r(13), r(153);
            var n = r(23),
                o = r(24);

            function c(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }
            var l = {
                    computed: function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? c(source, !0).forEach((function(e) {
                                Object(n.a)(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : c(source).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                            }))
                        }
                        return t
                    }({}, Object(o.e)("mixer", ["ip", "statistic", "selectedMixer"]), {}, Object(o.c)("metamask", ["networkConfig"]), {}, Object(o.c)("mixer", ["selectedCurrency"]), {
                        latestDeposits: function() {
                            var t = this.selectedMixer.currency.toLowerCase();
                            return this.statistic[t][this.selectedMixer.amount].latestDeposits
                        },
                        anonimitySet: function() {
                            var t = this.selectedMixer.currency.toLowerCase();
                            return this.statistic[t][this.selectedMixer.amount].anonymitySet
                        }
                    }),
                    methods: {
                        ipInfoToRender: function(t) {
                            return t.ip && t.city ? "".concat(t.ip, ", ").concat(t.city, ", ").concat(t.country) : t.ip ? "".concat(t.ip, ", ").concat(t.country) : "Loading..."
                        }
                    }
                },
                d = r(8),
                h = Object(d.a)(l, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "column is-half"
                    }, [r("div", {
                        staticClass: "box-stats"
                    }, [r("div", {
                        staticClass: "tab-with-corner is-left-top"
                    }, [t._v("\n      Statistics\n      "), r("span", {
                        staticClass: "selected"
                    }, [t._v(t._s(t.selectedMixer.amount) + " " + t._s(t.selectedCurrency))])]), t._v(" "), t.anonimitySet ? r("div", {
                        staticClass: "box"
                    }, [r("div", {
                        staticClass: "label"
                    }, [t._v("\n        Anonymity set\n        "), r("b-tooltip", {
                        attrs: {
                            label: "Number of deposits your withdrawal will potentially originate from",
                            size: "is-medium",
                            position: "is-top",
                            multilined: ""
                        }
                    }, [r("button", {
                        staticClass: "button is-primary has-icon"
                    }, [r("span", {
                        staticClass: "icon icon-info"
                    })])])], 1), t._v(" "), r("div", {
                        staticClass: "field"
                    }, [r("span", {
                        staticClass: "has-text-primary"
                    }, [t._v(t._s(t.anonimitySet))]), t._v(" equal user deposit" + t._s(t.anonimitySet > 1 ? "s" : "") + "\n      ")]), t._v(" "), r("div", {
                        staticClass: "label"
                    }, [t._v("Latest deposits")]), t._v(" "), r("div", {
                        staticClass: "columns is-small is-multiline"
                    }, [r("div", {
                        staticClass: "column is-half-small"
                    }, [r("table", {
                        staticClass: "deposits"
                    }, t._l(t.latestDeposits.slice(0, 5), (function(e) {
                        var n = e.index,
                            o = e.depositTime;
                        return r("tr", {
                            key: n
                        }, [r("td", {
                            staticClass: "value"
                        }, [t._v(t._s(Number(n) + 1) + ".")]), t._v(" "), r("td", {
                            staticClass: "data"
                        }, [t._v(t._s(o))])])
                    })), 0)]), t._v(" "), r("div", {
                        staticClass: "column is-half-small"
                    }, [r("table", {
                        staticClass: "deposits"
                    }, t._l(t.latestDeposits.slice(5, 10), (function(e) {
                        var n = e.index,
                            o = e.depositTime;
                        return r("tr", {
                            key: n
                        }, [r("td", {
                            staticClass: "value"
                        }, [t._v(t._s(Number(n) + 1) + ".")]), t._v(" "), r("td", {
                            staticClass: "data"
                        }, [t._v(t._s(o))])])
                    })), 0)])])]) : r("div", {
                        staticClass: "box"
                    }, [t._v("\n      Loading...\n    ")]), t._v(" "), r("div", {
                        staticClass: "box-ip"
                    }, [r("b-tooltip", {
                        attrs: {
                            label: "Make sure to use different IP addresses for deposits and withdrawals as well as further operations with withdrawal account. We recommend using a TOR browser or a VPN service.",
                            size: "is-large",
                            position: "is-top",
                            multilined: ""
                        }
                    }, [r("div", {
                        staticClass: "tab-with-corner is-right-bottom"
                    }, [r("span", {
                        staticClass: "is-small"
                    }, [t._v("\n            Your IP\n            "), r("a", {
                        staticClass: "has-text-primary",
                        attrs: {
                            target: "_blank",
                            href: "https://www.torproject.org/"
                        }
                    }, [t._v("\n              " + t._s(t.ipInfoToRender(t.ip)) + "\n            ")])])])])], 1)])])
                }), [], !1, null, null, null).exports,
                m = r(18),
                v = (r(22), r(109), r(212), r(84), r(0)),
                f = r.n(v);

            function y(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }
            var w = {
                    props: {
                        note: {
                            type: String,
                            required: !0
                        },
                        withdrawType: {
                            type: String,
                            required: !0
                        }
                    },
                    data: function() {
                        return {
                            message: ""
                        }
                    },
                    computed: function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? y(source, !0).forEach((function(e) {
                                Object(n.a)(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : y(source).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                            }))
                        }
                        return t
                    }({}, Object(o.e)("mixer", ["notes", "errors"])),
                    watch: {
                        notes: function(t) {
                            t[this.note] && (this.$root.$emit("disableLoading"), this.message = "Your zkSnark proof has been successfully generated! Please click Confirm to initiate the withdrawal")
                        },
                        errors: {
                            handler: function(t) {
                                this.$root.$emit("disableLoading"), this.$parent.close()
                            },
                            deep: !0
                        }
                    },
                    mounted: function() {
                        this.$root.$emit("enableLoading", "Generating proof")
                    },
                    methods: {
                        _sendWithdraw: function() {
                            var t;
                            return regeneratorRuntime.async((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return this.$root.$emit("enableLoading", "Preparing Transaction Data"), t = "wallet" === this.withdrawType ? "mixer/withdraw" : "relayer/sendToRelayer", e.prev = 2, e.next = 5, regeneratorRuntime.awrap(this.$store.dispatch(t, {
                                            note: this.note
                                        }));
                                    case 5:
                                        this.$root.$emit("resetWithdraw"), this.$buefy.toast.open({
                                            message: "The transaction was successfully sent.",
                                            type: "is-primary",
                                            duration: 1e4
                                        }), e.next = 13;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(2), console.error(e.t0), this.$buefy.toast.open({
                                            message: e.t0.message,
                                            type: "is-danger",
                                            duration: 1e4
                                        });
                                    case 13:
                                        this.$root.$emit("disableLoading"), this.$parent.close();
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), null, this, [
                                [2, 9]
                            ])
                        }
                    }
                },
                _ = Object(d.a)(w, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "modal-card box box-modal"
                    }, [r("div", {
                        staticClass: "title"
                    }, [t._v("Withdrawal Confirmation")]), t._v(" "), r("div", {
                        staticClass: "note"
                    }, [t._v("\n    " + t._s(t.message) + "\n  ")]), t._v(" "), r("b-button", {
                        attrs: {
                            type: "is-primary is-fullwidth"
                        },
                        on: {
                            click: t._sendWithdraw
                        }
                    }, [t._v("\n    Confirm\n  ")])], 1)
                }), [], !1, null, null, null).exports,
                O = (r(213), r(110));

            function x(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }
            var C = r(39),
                T = C.toWei,
                k = C.fromWei,
                j = {
                    components: {
                        EthPurchaseArrow: O.b
                    },
                    props: {
                        disabled: Boolean,
                        recommendedEthValue: {
                            type: Number,
                            default: void 0
                        }
                    },
                    data: function() {
                        return {
                            type: "",
                            step: .01,
                            min: 0,
                            timerId: null,
                            ethToReceive: .02
                        }
                    },
                    computed: function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? x(source, !0).forEach((function(e) {
                                Object(n.a)(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : x(source).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                            }))
                        }
                        return t
                    }({}, Object(o.c)("mixer", ["totalFeeCalculations", "maxEthToReceive", "selectedCurrency"]), {}, Object(o.c)("token", ["toDecimals"]), {}, Object(o.c)("metamask", ["networkConfig"]), {}, Object(o.c)("price", ["tokenRate"]), {
                        max: function() {
                            return Number(this.toDecimals(this.maxEthToReceive, 18, 5))
                        }
                    }),
                    watch: {
                        ethToReceive: {
                            handler: function(t) {
                                var e = this;
                                clearTimeout(this.timerId), this.timerId = setTimeout((function() {
                                    e.type = "";
                                    var r = t;
                                    "" === t ? (r = parseFloat(e.min) || 0, e.type = "is-warning") : r < 0 ? r = parseFloat(e.min) || 0 : r >= e.max ? r = e.max : r === e.recommendedEthValue && (e.type = "is-primary"), "is-warning" === e.type ? e.$emit("isValidEthToReceive", !1) : e.$emit("isValidEthToReceive", !0), e.ethToReceive = r, e.$store.commit("mixer/SAVE_ETH_TO_RECEIVE", {
                                        ethToReceive: T(r.toString())
                                    })
                                }), 1e3)
                            }
                        }
                    },
                    mounted: function() {
                        this.ethToReceive = Number(k(this.$store.state.mixer.ethToReceive))
                    },
                    methods: {
                        onEthPurchaseClick: function() {
                            this.$refs.input.focus()
                        }
                    }
                },
                E = Object(d.a)(j, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "field has-eth-purchase",
                        class: [t.type, t.disabled ? "is-disabled" : ""],
                        on: {
                            click: t.onEthPurchaseClick
                        }
                    }, [r("div", {
                        staticClass: "columns is-mobile"
                    }, [r("div", {
                        staticClass: "column currency-container is-light"
                    }, [r("div", {
                        staticClass: "currency"
                    }, [t._v(t._s(t.networkConfig.currencyName))]), t._v(" "), r("b-input", {
                        ref: "input",
                        attrs: {
                            type: "number",
                            step: t.step,
                            max: t.max,
                            min: t.min,
                            disabled: t.disabled,
                            "use-html5-validation": !1,
                            expanded: ""
                        },
                        on: {
                            focus: function(e) {
                                return t.$emit("focus", e)
                            },
                            blur: function(e) {
                                return t.$emit("blur", e)
                            }
                        },
                        model: {
                            value: t.ethToReceive,
                            callback: function(e) {
                                t.ethToReceive = t._n(e)
                            },
                            expression: "ethToReceive"
                        }
                    }), t._v(" "), r("div", {
                        staticClass: "withdraw-data"
                    }, [r("div", {
                        staticClass: "withdraw-data-item"
                    }, [t._v("\n          Rate\n          "), r("span", [t._v("\n            " + t._s(t.toDecimals(t.tokenRate, 18)) + " " + t._s(t.networkConfig.currencyName) + "/" + t._s(t.selectedCurrency) + "\n          ")])])])], 1), t._v(" "), r("div", {
                        staticClass: "column arrow-container"
                    }, [r("EthPurchaseArrow")], 1), t._v(" "), r("div", {
                        staticClass: "column currency-container is-inverted"
                    }, [r("div", {
                        staticClass: "currency"
                    }, [t._v(t._s(t.selectedCurrency))]), t._v(" "), r("div", {
                        staticClass: "input"
                    }, [t._v(t._s(t.toDecimals(t.totalFeeCalculations.ethToReceiveInToken)))])])])])
                }), [], !1, null, null, null).exports;

            function P(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }
            var D = r(39).fromWei,
                R = {
                    computed: function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? P(source, !0).forEach((function(e) {
                                Object(n.a)(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : P(source).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                            }))
                        }
                        return t
                    }({}, Object(o.e)("mixer", ["withdrawType", "ethToReceive", "selectedMixer"]), {}, Object(o.c)("metamask", ["networkConfig"]), {}, Object(o.c)("mixer", ["totalFeeCalculations", "selectedCurrency"]), {}, Object(o.c)("token", ["toDecimals"]), {
                        ethToReceive: {
                            get: function() {
                                return Number(D(this.$store.state.mixer.ethToReceive))
                            }
                        },
                        isTokenSelected: function() {
                            return "relayer" === this.withdrawType && "eth" !== this.selectedMixer.currency
                        }
                    })
                },
                S = Object(d.a)(R, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "field"
                    }, [r("div", {
                        staticClass: "label"
                    }, [t._v("\n    Total\n  ")]), t._v(" "), r("div", {
                        staticClass: "withdraw-data"
                    }, [t.isTokenSelected ? r("div", {
                        staticClass: "withdraw-data-item"
                    }, [t._v("\n      Note balance\n      "), r("span", [t._v("\n        " + t._s(t.selectedMixer.amount) + "\n        " + t._s(t.selectedCurrency) + "\n      ")])]) : t._e(), t._v(" "), "relayer" === t.withdrawType ? r("div", {
                        staticClass: "withdraw-data-item"
                    }, [t._v("\n      Relayer fee\n      "), r("span", [t._v(t._s(t.toDecimals(t.totalFeeCalculations.relayerFee)) + " " + t._s(t.selectedCurrency))])]) : t._e(), t._v(" "), t.isTokenSelected ? r("div", {
                        staticClass: "withdraw-data-item"
                    }, [t._v("\n      ETH Purchase\n      "), r("span", [t._v(t._s(t.toDecimals(t.totalFeeCalculations.ethToReceiveInToken)) + " " + t._s(t.selectedCurrency))])]) : t._e(), t._v(" "), "relayer" === t.withdrawType ? r("hr") : t._e(), t._v(" "), r("div", {
                        staticClass: "withdraw-data-item"
                    }, [t._v("\n      Tokens to receive\n      "), r("span", [t._v(t._s(t.toDecimals(t.totalFeeCalculations.total)) + " " + t._s(t.selectedCurrency))])]), t._v(" "), t.isTokenSelected ? r("div", {
                        staticClass: "withdraw-data-item"
                    }, [r("span", {
                        staticClass: "is-alone"
                    }, [t._v(t._s(t.ethToReceive) + " " + t._s(t.networkConfig.currencyName))])]) : t._e()])])
                }), [], !1, null, null, null).exports,
                $ = r(214),
                A = r(12);

            function N(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }

            function I(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? N(source, !0).forEach((function(e) {
                        Object(n.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : N(source).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var L = r(39),
                M = L.toWei,
                W = L.fromWei,
                H = {
                    components: {
                        EthPurchase: E,
                        WithdrawTotal: S
                    },
                    data: function() {
                        return {
                            activeTab: 0,
                            customRelayerUrl: "",
                            recommendedEthValue: .02,
                            hasErrorCustomRelayer: {
                                type: "",
                                msg: ""
                            },
                            timerId: null,
                            checking: !1,
                            isValidEthToReceive: !0,
                            showCustomField: !1,
                            isStatusLoading: !1,
                            walletError: ""
                        }
                    },
                    computed: I({}, Object(o.c)("metamask", ["networkConfig", "hasEthAccount"]), {}, Object(o.c)("mixer", ["totalFeeCalculations", "selectedCurrency"]), {}, Object(o.c)("token", ["toDecimals"]), {}, Object(o.e)("metamask", ["providerName"]), {}, Object(o.e)("mixer", ["hasNetIdMissmatch"]), {}, Object(o.e)("relayer", {
                        relayerFromStore: function(t) {
                            return t.selectedRelayer
                        },
                        relayers: function(t) {
                            return t.validRelayers
                        }
                    }), {
                        selectedRelayer: {
                            get: function() {
                                return this.$store.state.relayer.selectedRelayer.name
                            },
                            set: function(t) {
                                var e, r, n, o, c, l;
                                return regeneratorRuntime.async((function(d) {
                                    for (;;) switch (d.prev = d.next) {
                                        case 0:
                                            if ("custom" === t) {
                                                d.next = 17;
                                                break
                                            }
                                            return this.showCustomField = !1, this.hasErrorCustomRelayer = {
                                                type: "",
                                                msg: ""
                                            }, e = this.networkConfig.relayers[t], r = e.url, n = e.name, this.isStatusLoading = !0, d.next = 7, regeneratorRuntime.awrap(this.$store.dispatch("relayer/setupRelayer", {
                                                name: n,
                                                url: r
                                            }));
                                        case 7:
                                            o = d.sent, c = o.isValid, l = o.error, this.customRelayerUrl = "", this.checking = !1, this.isStatusLoading = !1, c ? (this.hasErrorCustomRelayer.type = "is-primary", this.hasErrorCustomRelayer.msg = "Relayer status: OK") : (this.hasErrorCustomRelayer.type = "is-warning", this.hasErrorCustomRelayer.msg = l), console.log("isGoodRelayer", c, l), d.next = 21;
                                            break;
                                        case 17:
                                            this.showCustomField = !0, this.hasErrorCustomRelayer = {
                                                type: "",
                                                msg: ""
                                            }, this.checking = !0, this.SET_SELECTED_RELAYER({
                                                name: "custom",
                                                url: "",
                                                address: "",
                                                relayerServiceFee: ""
                                            });
                                        case 21:
                                        case "end":
                                            return d.stop()
                                    }
                                }), null, this)
                            }
                        },
                        ethToReceive: {
                            get: function() {
                                return Number(W(this.$store.state.mixer.ethToReceive))
                            },
                            set: function(t) {
                                this.$store.commit("mixer/SAVE_ETH_TO_RECEIVE", {
                                    ethToReceive: M(t.toString())
                                })
                            }
                        },
                        withdrawType: {
                            get: function() {
                                return this.$store.state.mixer.withdrawType
                            },
                            set: function(t) {
                                this.$store.commit("mixer/SET_WITHDRAW_TYPE", {
                                    withdrawType: t
                                })
                            }
                        },
                        hasDisabledWallet: function() {
                            if (!this.hasEthAccount) return {
                                type: !0,
                                msg: "Connect your wallet first"
                            };
                            if (this.hasNetIdMissmatch) {
                                var t = this.$store.state.mixer.withdrawNote.split("-"),
                                    e = Object(m.a)(t, 4)[3];
                                return {
                                    type: !0,
                                    msg: "Change network to ".concat(A.a["netId".concat(e)].networkName, " in your wallet")
                                }
                            }
                            return {
                                type: !1,
                                msg: ""
                            }
                        },
                        isDisabledSave: function() {
                            return (this.checking || "is-warning" === this.hasErrorCustomRelayer.type || !this.isValidEthToReceive || this.isStatusLoading) && "relayer" === this.withdrawType || this.hasDisabledWallet.type && "wallet" === this.withdrawType
                        },
                        isTokenSelected: function() {
                            return "eth" !== this.$store.state.mixer.selectedMixer.currency
                        },
                        isNotLoggedIn: function() {
                            return !this.providerName && !this.hasEthAccount && "wallet" === this.withdrawType
                        }
                    }),
                    watch: {
                        withdrawType: {
                            handler: function(t) {
                                "wallet" === t && clearTimeout(this.timerId)
                            }
                        },
                        customRelayerUrl: {
                            handler: function(t) {
                                var e = this;
                                if (t = t.toLowerCase().trim(), this.checking = !0, this.hasErrorCustomRelayer = {
                                        type: "",
                                        msg: ""
                                    }, clearTimeout(this.timerId), 0 !== t.length || "custom" === this.selectedRelayer) return t.startsWith("http:") ? (this.hasErrorCustomRelayer.type = "is-warning", this.hasErrorCustomRelayer.msg = "The relayer should support SSL", void(this.checking = !1)) : void(this.timerId = setTimeout((function() {
                                    var r, n, o;
                                    return regeneratorRuntime.async((function(c) {
                                        for (;;) switch (c.prev = c.next) {
                                            case 0:
                                                return e.isStatusLoading = !0, c.next = 3, regeneratorRuntime.awrap(e.$store.dispatch("relayer/setupRelayer", {
                                                    url: t,
                                                    name: "custom"
                                                }));
                                            case 3:
                                                r = c.sent, n = r.isValid, o = r.error, n ? (e.hasErrorCustomRelayer.type = "is-primary", e.hasErrorCustomRelayer.msg = "Relayer status: OK") : (e.hasErrorCustomRelayer.type = "is-warning", e.hasErrorCustomRelayer.msg = o), e.checking = !1, e.isStatusLoading = !1;
                                            case 9:
                                            case "end":
                                                return c.stop()
                                        }
                                    }))
                                }), 1e3));
                                this.checking = !1
                            }
                        }
                    },
                    mounted: function() {
                        "custom" === this.selectedRelayer && (this.customRelayerUrl = this.$store.state.relayer.selectedRelayer.url, this.showCustomField = !0), "wallet" === this.withdrawType && (this.activeTab = 1)
                    },
                    methods: I({}, Object(o.d)("relayer", ["SET_SELECTED_RELAYER"]), {
                        onSetDefaults: function() {
                            this.$store.commit("mixer/SET_WITHDRAW_TYPE", {
                                withdrawType: "relayer"
                            }), this.setDefaultSetup()
                        },
                        onSave: function() {
                            this.$emit("close")
                        },
                        ethToReceiveErrorHandler: function(t) {
                            this.isValidEthToReceive = t
                        },
                        setDefaultSetup: function() {
                            this.hasErrorCustomRelayer = {
                                type: "",
                                msg: ""
                            }, this.checking = !1, this.isValidEthToReceive = !0, this.selectedRelayer = this.relayers[0], this.$store.commit("mixer/SAVE_ETH_TO_RECEIVE", {
                                ethToReceive: M(this.recommendedEthValue.toString())
                            }), this.withdrawType = "relayer", this.activeTab = 0
                        },
                        onTabChange: function(t) {
                            this.withdrawType = 0 !== t ? "wallet" : "relayer"
                        },
                        onLogIn: function() {
                            this.$buefy.modal.open({
                                parent: this,
                                component: $.a,
                                hasModalCard: !0,
                                width: 440
                            })
                        }
                    })
                },
                F = Object(d.a)(H, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "modal-card box box-modal"
                    }, [r("div", {
                        staticClass: "title"
                    }, [t._v("Withdrawal Settings")]), t._v(" "), r("b-tabs", {
                        staticClass: "is-modal",
                        attrs: {
                            animated: !1
                        },
                        on: {
                            change: t.onTabChange
                        },
                        model: {
                            value: t.activeTab,
                            callback: function(e) {
                                t.activeTab = e
                            },
                            expression: "activeTab"
                        }
                    }, [r("b-tab-item", [r("template", {
                        slot: "header"
                    }, [t._v("\n        Relayer\n        "), r("b-tooltip", {
                        attrs: {
                            label: "Use the relayer service to send your transaction. It is more anonymous since the gas fee is subtracted from the deposited funds.",
                            position: "is-right",
                            multilined: ""
                        }
                    }, [r("button", {
                        staticClass: "button is-primary has-icon"
                    }, [r("span", {
                        staticClass: "icon icon-info"
                    })])])], 1), t._v(" "), r("div", {
                        staticClass: "field"
                    }, [r("b-field", {
                        attrs: {
                            label: "Relayer"
                        }
                    }, [r("b-dropdown", {
                        attrs: {
                            expanded: "",
                            "aria-role": "list"
                        },
                        model: {
                            value: t.selectedRelayer,
                            callback: function(e) {
                                t.selectedRelayer = e
                            },
                            expression: "selectedRelayer"
                        }
                    }, [r("div", {
                        staticClass: "control",
                        class: {
                            "is-loading": t.isStatusLoading
                        },
                        attrs: {
                            slot: "trigger"
                        },
                        slot: "trigger"
                    }, [r("div", {
                        staticClass: "input"
                    }, [r("span", [t._v(t._s("custom" === t.selectedRelayer || t.showCustomField ? "Custom" : t.selectedRelayer))])])]), t._v(" "), t._l(t.relayers, (function(e) {
                        return r("b-dropdown-item", {
                            key: e,
                            attrs: {
                                value: e,
                                "aria-role": "listitem"
                            }
                        }, [t._v("\n              " + t._s(e) + "\n            ")])
                    })), t._v(" "), r("b-dropdown-item", {
                        attrs: {
                            value: "custom",
                            "aria-role": "listitem"
                        }
                    }, [t._v("Custom")])], 2)], 1), t._v(" "), t.showCustomField ? r("div", {
                        staticClass: "field has-custom-field"
                    }, [r("b-input", {
                        ref: "customInput",
                        attrs: {
                            type: "url",
                            placeholder: "Paste your relayer URL or ENS record",
                            "custom-class": t.hasErrorCustomRelayer.type,
                            "use-html5-validation": !1
                        },
                        model: {
                            value: t.customRelayerUrl,
                            callback: function(e) {
                                t.customRelayerUrl = e
                            },
                            expression: "customRelayerUrl"
                        }
                    })], 1) : t._e(), t._v(" "), t.relayerFromStore.relayerServiceFee ? r("div", {
                        staticClass: "withdraw-data is-spaced"
                    }, [r("div", {
                        staticClass: "withdraw-data-item"
                    }, [t._v("\n            Relayer fee\n            "), r("span", [t._v(t._s(t.relayerFromStore.relayerServiceFee) + "%")])])]) : t._e(), t._v(" "), t.hasErrorCustomRelayer.msg ? r("p", {
                        staticClass: "help",
                        class: t.hasErrorCustomRelayer.type
                    }, [t._v("\n          " + t._s(t.hasErrorCustomRelayer.msg) + "\n        ")]) : t._e()], 1), t._v(" "), t.isTokenSelected ? r("b-field", [r("template", {
                        slot: "label"
                    }, [t._v("\n          ETH Purchase\n          "), r("b-tooltip", {
                        attrs: {
                            label: "Exchange some of your deposit's DAI to ETH during the withdrawal to pay for gas in future transactions.",
                            size: "is-small",
                            position: "is-right",
                            multilined: ""
                        }
                    }, [r("button", {
                        staticClass: "button is-primary has-icon"
                    }, [r("span", {
                        staticClass: "icon icon-info"
                    })])])], 1), t._v(" "), r("eth-purchase", {
                        attrs: {
                            "recommended-eth-value": t.recommendedEthValue
                        },
                        on: {
                            isValidEthToReceive: t.ethToReceiveErrorHandler
                        }
                    })], 2) : t._e(), t._v(" "), r("WithdrawTotal")], 2), t._v(" "), r("b-tab-item", [r("template", {
                        slot: "header"
                    }, [t._v("\n        Wallet\n        "), r("b-tooltip", {
                        attrs: {
                            label: "Use your own account to initiate a withdrawal (e.g. Metamask or TrustWallet).",
                            position: "is-left",
                            multilined: ""
                        }
                    }, [r("button", {
                        staticClass: "button is-primary has-icon"
                    }, [r("span", {
                        staticClass: "icon icon-info"
                    })])])], 1), t._v(" "), r("fieldset", {
                        attrs: {
                            disabled: t.hasDisabledWallet.type
                        }
                    }, [r("div", {
                        staticClass: "notice is-warning"
                    }, [r("div", {
                        staticClass: "notice__p"
                    }, [t._v("\n            Make sure that ETH used to pay for the gas fee is not linkable to ANY of your\n            addresses. Otherwise, the anonymity of the withdrawal will be compromised. We\n            recommend using a Relayer instead.\n          ")]), t._v(" "), t.hasDisabledWallet.type ? r("div", {
                        staticClass: "tooltip",
                        attrs: {
                            "data-label": t.hasDisabledWallet.msg
                        }
                    }) : t._e()]), t._v(" "), r("WithdrawTotal")], 1)], 2)], 1), t._v(" "), r("div", {
                        staticClass: "buttons buttons__halfwidth"
                    }, [r("b-button", {
                        attrs: {
                            type: "is-primary",
                            outlined: ""
                        },
                        on: {
                            click: t.onSetDefaults
                        }
                    }, [t._v("\n      Set to Defaults\n    ")]), t._v(" "), t.isNotLoggedIn ? r("b-button", {
                        attrs: {
                            type: "is-primary"
                        },
                        on: {
                            click: t.onLogIn
                        }
                    }, [t._v("Connect")]) : r("b-button", {
                        attrs: {
                            type: "is-primary",
                            disabled: t.isDisabledSave
                        },
                        on: {
                            click: t.onSave
                        }
                    }, [t._v("\n      Save\n    ")])], 1)], 1)
                }), [], !1, null, null, null).exports;

            function V(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }
            var U = r(39),
                B = U.toChecksumAddress,
                z = U.isHexStrict,
                Y = U.isAddress,
                K = {
                    components: {
                        LinkIcon: O.d,
                        SettingsIcon: O.e,
                        WithdrawTotal: S
                    },
                    data: function() {
                        return {
                            withdrawAddress: "",
                            withdrawNote: "",
                            depositsPast: null,
                            depositTxHash: null,
                            depositTimestamp: null,
                            isSpent: !1,
                            error: {
                                type: null,
                                message: ""
                            },
                            notEnoughPassedTime: !1
                        }
                    },
                    computed: function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? V(source, !0).forEach((function(e) {
                                Object(n.a)(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : V(source).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                            }))
                        }
                        return t
                    }({}, Object(o.e)("mixer", ["note", "errors", "withdrawType", "ethToReceive"]), {}, Object(o.c)("mixer", ["selectedCurrency"]), {}, Object(o.c)("txHashKeeper", ["txExplorerUrl"]), {}, Object(o.c)("metamask", ["networkConfig", "netId"]), {}, Object(o.e)("metamask", ["providerName"]), {
                        notEnoughDeposits: function() {
                            return this.depositsPast < 5
                        },
                        isLoggedIn: function() {
                            return !!this.providerName
                        },
                        hasErrorNote: function() {
                            var t = this.withdrawNote.split("-")[4];
                            return "undefined" == typeof WebAssembly ? {
                                type: "is-warning",
                                msg: "Error: Please turn on WebAssembly in your browser settings.<br /> If you are using Tor browser,\n            enable javascript.options.wasm in about:config"
                            } : this.withdrawNote ? !t || t.length < 126 || !z(t) ? {
                                type: "is-warning",
                                msg: "Note is invalid"
                            } : !!this.isSpent && {
                                type: "is-warning",
                                msg: "Note has been spent"
                            } : {
                                type: "",
                                msg: ""
                            }
                        },
                        isValidAddress: function() {
                            return Y(this.withdrawAddress)
                        },
                        hasWarning: function() {
                            return this.depositsPast < 5 || f()().unix() - Number(this.depositTimestamp) < 86400
                        },
                        isWithdrawDisabled: function() {
                            return "relayer" === this.withdrawType && !this.selectedRelayer || !this.isValidAddress || this.hasErrorNote
                        },
                        selectedRelayer: function() {
                            return this.$store.state.relayer.selectedRelayer.name
                        },
                        selectedMixer: function() {
                            return this.$store.state.mixer.selectedMixer
                        },
                        selectedAmount: function() {
                            return this.$store.state.mixer.selectedMixer.amount
                        },
                        tokens: function() {
                            return this.networkConfig.tokens
                        }
                    }),
                    watch: {
                        errors: {
                            handler: function(t) {
                                console.log("error", t), this.error = {
                                    type: t.length ? "error" : null,
                                    message: t[t.length - 1]
                                }, this.error.message && this.$buefy.toast.open({
                                    message: this.error.message,
                                    duration: 1e4
                                })
                            },
                            deep: !0
                        },
                        withdrawNote: {
                            handler: function(t) {
                                var e, r, n, o, c, l, d, h, v, f, y, w, _;
                                return regeneratorRuntime.async((function(O) {
                                    for (;;) switch (O.prev = O.next) {
                                        case 0:
                                            if (this.$root.$emit("enableLoading", "Getting the note data"), this.isSpent = !1, this.depositsPast = null, this.depositTxHash = null, this.depositTimestamp = null, this.hasErrorNote) {
                                                O.next = 31;
                                                break
                                            }
                                            if (e = this.$store.state.metamask.netId, r = this.withdrawNote.split("-"), n = Object(m.a)(r, 5), o = n[0], c = n[1], l = n[2], d = n[3], h = n[4], "tornado" === o) {
                                                O.next = 12;
                                                break
                                            }
                                            return this.$root.$emit("disableLoading"), this.withdrawNote = "tornado-".concat(c, "-").concat(l, "-").concat(d, "-").concat(h), O.abrupt("return");
                                        case 12:
                                            return this.$store.commit("mixer/SET_WITHDRAW_NOTE", t), this.$store.commit("mixer/SAVE_NET_ID_MISSMATCH", Number(d) !== Number(e)), this.$store.commit("metamask/SET_NET_ID", d), this.$store.dispatch("relayer/pickRandomRelayer", {}, {
                                                root: !0
                                            }), O.next = 18, regeneratorRuntime.awrap(this.$store.dispatch("mixer/loadDepositData", {
                                                withdrawNote: t
                                            }));
                                        case 18:
                                            return v = O.sent, f = v.depositsPast, y = v.timestamp, w = v.txHash, (_ = v.isSpent) && this.$buefy.toast.open({
                                                message: "Note was already spent",
                                                type: "is-warning",
                                                duration: 5e3
                                            }), this.$store.commit("mixer/SET_SELECTED_MIXER", {
                                                currency: c,
                                                amount: Number(l)
                                            }), O.next = 27, regeneratorRuntime.awrap(this.$store.dispatch("mixer/loadStatistic", {
                                                netId: d
                                            }));
                                        case 27:
                                            this.depositsPast = f, this.depositTxHash = w, this.depositTimestamp = y, this.isSpent = _;
                                        case 31:
                                            this.$root.$emit("disableLoading");
                                        case 32:
                                        case "end":
                                            return O.stop()
                                    }
                                }), null, this)
                            }
                        }
                    },
                    mounted: function() {
                        var t = this;
                        this.$route.query.note && (this.withdrawNote = this.$route.query.note), this.$root.$on("resetWithdraw", (function() {
                            t.withdrawAddress = "", t.withdrawNote = ""
                        }))
                    },
                    methods: {
                        depositsPastToRender: function(t) {
                            return 0 === t ? "no deposits" : 1 === t ? "only 1 deposit" : t < 5 ? "only ".concat(t, " deposits") : "".concat(t, " deposits")
                        },
                        onWithdraw: function() {
                            if (126 === this.withdrawNote.split("-")[4].length) try {
                                this.withdrawAddress = B(this.withdrawAddress), this.$store.dispatch("mixer/prepareWithdraw", {
                                    note: this.withdrawNote,
                                    recipient: this.withdrawAddress
                                }), this.error.type = null, this.currentModal = this.$buefy.modal.open({
                                    parent: this,
                                    component: _,
                                    hasModalCard: !0,
                                    width: 440,
                                    props: {
                                        note: this.withdrawNote,
                                        withdrawType: this.withdrawType
                                    }
                                })
                            } catch (t) {
                                this.error = {
                                    type: "Validation Error",
                                    message: "Recipient address is invalid"
                                }, console.error("error", t)
                            } else this.error = {
                                type: "Validation Error",
                                message: "Note is invalid"
                            }
                        },
                        onSettings: function() {
                            var t = this,
                                e = this.ethToReceive,
                                r = this.withdrawType,
                                n = this.$store.state.relayer.selectedRelayer;
                            this.$buefy.modal.open({
                                parent: this,
                                component: F,
                                hasModalCard: !0,
                                width: 440,
                                onCancel: function() {
                                    t.cancelSettingsEditing({
                                        ethToReceive: e,
                                        withdrawType: r,
                                        relayer: n
                                    })
                                },
                                customClass: "is-pinned"
                            })
                        },
                        cancelSettingsEditing: function(t) {
                            var e = t.ethToReceive,
                                r = t.withdrawType,
                                n = t.relayer;
                            this.$store.dispatch("relayer/setupRelayer", n), this.$store.commit("mixer/SAVE_ETH_TO_RECEIVE", {
                                ethToReceive: e
                            }), this.$store.commit("mixer/SET_WITHDRAW_TYPE", {
                                withdrawType: r
                            })
                        },
                        timePastToRender: function(t) {
                            var e = "";
                            return f()().unix() - Number(t) < 86400 ? (e += "only", this.notEnoughPassedTime = !0) : this.notEnoughPassedTime = !1, "".concat(e, " ").concat(f.a.unix(t).fromNow(!0))
                        },
                        insertDonate: function() {
                            this.withdrawAddress = "0x8589427373D6D84E98730D7795D8f6f8731FDA16"
                        }
                    }
                },
                X = Object(d.a)(K, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", [r("div", {
                        staticClass: "field"
                    }, [r("div", {
                        staticClass: "label-with-buttons"
                    }, [r("div", {
                        staticClass: "label"
                    }, [t._v("\n        Note\n        "), r("b-tooltip", {
                        attrs: {
                            label: "Please enter the note you received when you made the deposit",
                            size: "is-small",
                            position: "is-right",
                            multilined: ""
                        }
                    }, [r("button", {
                        staticClass: "button is-primary has-icon"
                    }, [r("span", {
                        staticClass: "icon icon-info"
                    })])])], 1), t._v(" "), r("a", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.hasErrorNote && t.depositTxHash,
                            expression: "!hasErrorNote && depositTxHash"
                        }],
                        staticClass: "button is-icon",
                        attrs: {
                            href: t.txExplorerUrl(t.depositTxHash),
                            target: "_blank"
                        }
                    }, [r("b-tooltip", {
                        attrs: {
                            label: "Deposit transaction on etherscan",
                            size: "is-small",
                            position: "is-left",
                            multilined: ""
                        }
                    }, [r("LinkIcon")], 1)], 1), t._v(" "), r("button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.hasErrorNote,
                            expression: "!hasErrorNote"
                        }],
                        staticClass: "button is-icon",
                        on: {
                            click: t.onSettings
                        }
                    }, [r("b-tooltip", {
                        attrs: {
                            label: "Withdrawal settings",
                            size: "is-small",
                            position: "is-right",
                            multilined: ""
                        }
                    }, [r("SettingsIcon")], 1)], 1)]), t._v(" "), r("b-input", {
                        attrs: {
                            placeholder: "Please enter your note",
                            "custom-class": t.hasErrorNote ? t.hasErrorNote.type : "is-primary"
                        },
                        model: {
                            value: t.withdrawNote,
                            callback: function(e) {
                                t.withdrawNote = e
                            },
                            expression: "withdrawNote"
                        }
                    }), t._v(" "), t.hasErrorNote ? r("div", {
                        staticClass: "help",
                        class: t.hasErrorNote.type
                    }, [r("p", {
                        domProps: {
                            innerHTML: t._s(t.hasErrorNote.msg)
                        }
                    })]) : t._e()], 1), t._v(" "), !t.hasErrorNote && t.depositTxHash ? r("div", {
                        staticClass: "field field-withdraw"
                    }, [r("div", {
                        staticClass: "withdraw-data"
                    }, [r("div", {
                        staticClass: "withdraw-data-item"
                    }, [t._v("\n        Amount "), r("span", [t._v(t._s(t.selectedAmount) + " " + t._s(t.selectedCurrency))])]), t._v(" "), r("div", {
                        staticClass: "withdraw-data-item"
                    }, [t._v("\n        Time passed\n        "), r("b-tooltip", {
                        class: {
                            "has-low-anonymity": t.notEnoughPassedTime
                        },
                        attrs: {
                            active: t.notEnoughPassedTime,
                            label: "Even if there are multiple deposits after yours, they could have been made by the same user. Therefore, we recommend waiting for at least 24 hours before withdrawing funds to ensure that there are multiple users that utilized Tornado.cash during that time.",
                            position: "is-left",
                            multilined: "",
                            size: "is-large"
                        }
                    }, [r("span", [t._v(t._s(t.timePastToRender(t.depositTimestamp)))])])], 1), t._v(" "), r("div", {
                        staticClass: "withdraw-data-item"
                    }, [t._v("\n        Subsequent deposits\n        "), r("b-tooltip", {
                        class: {
                            "has-low-anonymity": t.notEnoughDeposits
                        },
                        attrs: {
                            active: t.notEnoughDeposits,
                            label: "The most likely source of a withdrawal is recent deposits. Therefore, we recommend allowing at least 5 deposits after yours for better anonymity.",
                            position: "is-left",
                            multilined: "",
                            size: "is-large"
                        }
                    }, [r("span", [t._v(t._s(t.depositsPastToRender(t.depositsPast)))])])], 1)])]) : t._e(), t._v(" "), r("fieldset", [r("div", {
                        staticClass: "field withdraw-address"
                    }, [r("div", {
                        staticClass: "label-with-buttons"
                    }, [t._m(0), t._v(" "), r("button", {
                        staticClass: "button is-primary-text",
                        on: {
                            click: t.insertDonate
                        }
                    }, [t._v("\n          Donate\n        ")])]), t._v(" "), r("b-input", {
                        attrs: {
                            placeholder: "Please paste address here",
                            size: t.withdrawAddress ? t.isValidAddress ? "is-primary" : "is-warning" : ""
                        },
                        model: {
                            value: t.withdrawAddress,
                            callback: function(e) {
                                t.withdrawAddress = e
                            },
                            expression: "withdrawAddress"
                        }
                    }), t._v(" "), r("p", {
                        staticClass: "help"
                    }, [r("span", {
                        staticClass: "has-text-warning"
                    }, [t._v(t._s(t.error.type))]), t._v(" " + t._s(t.error.message) + "\n      ")])], 1), t._v(" "), r("WithdrawTotal", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isValidAddress && !t.isWithdrawDisabled,
                            expression: "isValidAddress && !isWithdrawDisabled"
                        }]
                    }), t._v(" "), r("b-button", {
                        attrs: {
                            type: "is-primary is-fullwidth",
                            disabled: t.isWithdrawDisabled
                        },
                        on: {
                            click: t.onWithdraw
                        }
                    }, [t._v("Withdraw")])], 1)])
                }), [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "label"
                    }, [e("span", {
                        staticClass: "name"
                    }, [this._v("\n            Recipient Address\n          ")])])
                }], !1, null, null, null).exports;
            r(154);

            function G(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }

            function J(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? G(source, !0).forEach((function(e) {
                        Object(n.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : G(source).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var Q = {
                    data: function() {
                        return {
                            success: !1,
                            isApproveBtnAlreadyPressed: !1
                        }
                    },
                    computed: J({}, Object(o.e)("mixer", ["selectedMixer"]), {}, Object(o.e)("token", ["allowance"]), {}, Object(o.c)("txHashKeeper", ["txExplorerUrl"]), {}, Object(o.c)("token", ["fromDecimals"]), {
                        approvalAmount: {
                            get: function() {
                                return this.$store.state.token.approvalAmount
                            },
                            set: function(t) {
                                this.$store.commit("token/SET_APPROVAL_AMOUNT", {
                                    approvalAmount: t
                                })
                            }
                        }
                    }),
                    methods: J({}, Object(o.b)("token", ["approve"]), {
                        _approve: function() {
                            return regeneratorRuntime.async((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return this.isApproveBtnAlreadyPressed = !0, this.$root.$emit("enableLoading", "Preparing Transaction Data"), t.prev = 2, t.next = 5, regeneratorRuntime.awrap(this.approve());
                                    case 5:
                                        return t.next = 7, regeneratorRuntime.awrap(this.$store.dispatch("token/fetchTokenAllowance"));
                                    case 7:
                                        this.$buefy.toast.open({
                                            message: "The transaction was successfully sent.",
                                            type: "is-primary",
                                            duration: 3e3
                                        }), this.success = !0, t.next = 16;
                                        break;
                                    case 11:
                                        t.prev = 11, t.t0 = t.catch(2), console.error(t.t0), this.$buefy.toast.open({
                                            message: t.t0.message,
                                            type: "is-danger",
                                            duration: 5e3
                                        }), this.success = !1;
                                    case 16:
                                        this.isApproveBtnAlreadyPressed = !1, this.$root.$emit("disableLoading"), this.$parent.close();
                                    case 19:
                                    case "end":
                                        return t.stop()
                                }
                            }), null, this, [
                                [2, 11]
                            ])
                        }
                    })
                },
                Z = Object(d.a)(Q, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "modal-card box box-modal"
                    }, [r("div", {
                        staticClass: "title"
                    }, [t._v("Approval is required")]), t._v(" "), r("div", {
                        staticClass: "note"
                    }, [t._v("\n    In order to use " + t._s(t.selectedMixer.currency.toUpperCase()) + " you have to enable it for\n    Tornado.cash. Select the amount you would like to approve:\n  ")]), t._v(" "), r("b-field", {
                        staticClass: "withdraw-radio"
                    }, [r("b-radio", {
                        staticClass: "radio-relayer",
                        attrs: {
                            "native-value": t.selectedMixer.amount.toString()
                        },
                        model: {
                            value: t.approvalAmount,
                            callback: function(e) {
                                t.approvalAmount = e
                            },
                            expression: "approvalAmount"
                        }
                    }, [t._v("\n      " + t._s(t.selectedMixer.amount) + " " + t._s(t.selectedMixer.currency.toUpperCase()) + "\n    ")]), t._v(" "), r("b-radio", {
                        staticClass: "radio-metamask",
                        attrs: {
                            "native-value": "unlimited"
                        },
                        model: {
                            value: t.approvalAmount,
                            callback: function(e) {
                                t.approvalAmount = e
                            },
                            expression: "approvalAmount"
                        }
                    }, [t._v("\n      Unlimited\n      "), r("b-tooltip", {
                        attrs: {
                            label: "The unlimited approval is more convenient if you are going to make multiple deposits.",
                            position: "is-top",
                            multilined: ""
                        }
                    }, [r("button", {
                        staticClass: "button is-primary has-icon"
                    }, [r("span", {
                        staticClass: "icon icon-info"
                    })])])], 1)], 1), t._v(" "), r("b-button", {
                        attrs: {
                            type: "is-primary is-fullwidth",
                            disabled: t.isApproveBtnAlreadyPressed
                        },
                        on: {
                            click: t._approve
                        }
                    }, [t._v("Enable")])], 1)
                }), [], !1, null, null, null).exports;

            function tt(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }
            var et = {
                    computed: function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? tt(source, !0).forEach((function(e) {
                                Object(n.a)(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : tt(source).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                            }))
                        }
                        return t
                    }({}, Object(o.e)("mixer", ["selectedMixer"]), {}, Object(o.e)("token", ["balance"]), {}, Object(o.c)("token", ["toDecimals"])),
                    methods: {
                        close: function() {
                            this.$parent.close()
                        }
                    }
                },
                st = Object(d.a)(et, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "modal-card box box-modal"
                    }, [r("div", {
                        staticClass: "title"
                    }, [t._v("Insufficient balance")]), t._v(" "), r("div", {
                        staticClass: "note"
                    }, [t._v("\n    You don't have enough " + t._s(t.selectedMixer.currency.toUpperCase()) + " tokens. Your current balance\n    is " + t._s(t.toDecimals(t.balance)) + " " + t._s(t.selectedMixer.currency.toUpperCase()) + "\n  ")]), t._v(" "), r("b-button", {
                        attrs: {
                            type: "is-primary is-fullwidth"
                        },
                        on: {
                            click: t.close
                        }
                    }, [t._v("Close")])], 1)
                }), [], !1, null, null, null).exports;

            function it(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }

            function at(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? it(source, !0).forEach((function(e) {
                        Object(n.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : it(source).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var nt = {
                    data: function() {
                        return {
                            isBackuped: !1,
                            tooltipCopy: "Click to copy"
                        }
                    },
                    computed: at({}, Object(o.e)("mixer", ["note", "prefix"]), {}, Object(o.e)("metamask", ["providerName"]), {
                        isIPFS: function() {
                            return this.$isLoadedFromIPFS()
                        }
                    }),
                    methods: at({}, Object(o.b)("mixer", ["sendDeposit"]), {
                        onCopy: function() {
                            var t = this;
                            this.tooltipCopy = "Copied!", setTimeout((function() {
                                t.tooltipCopy = "Click to copy"
                            }), 1500)
                        },
                        _sendDeposit: function() {
                            return regeneratorRuntime.async((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return this.$root.$emit("enableLoading", "Preparing Transaction Data"), t.next = 3, regeneratorRuntime.awrap(this.sendDeposit());
                                    case 3:
                                        this.$root.$emit("disableLoading"), this.$parent.close();
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), null, this)
                        }
                    })
                },
                ot = Object(d.a)(nt, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "modal-card box box-modal"
                    }, [r("div", {
                        staticClass: "title"
                    }, [t._v("Your note")]), t._v(" "), r("div", {
                        staticClass: "note"
                    }, [t._v("\n    Please backup your note. If you lose it, you won't get your deposit back.\n  ")]), t._v(" "), r("div", {
                        staticClass: "znote"
                    }, [t._v("\n    " + t._s(t.prefix) + "-" + t._s(t.note) + "\n    "), r("b-tooltip", {
                        attrs: {
                            label: t.tooltipCopy,
                            position: "is-top"
                        }
                    }, [r("button", {
                        directives: [{
                            name: "clipboard",
                            rawName: "v-clipboard:copy",
                            value: t.prefix + "-" + t.note,
                            expression: "`${prefix}-${note}`",
                            arg: "copy"
                        }, {
                            name: "clipboard",
                            rawName: "v-clipboard:success",
                            value: t.onCopy,
                            expression: "onCopy",
                            arg: "success"
                        }],
                        staticClass: "button is-primary has-icon"
                    }, [r("span", {
                        staticClass: "icon icon-copy"
                    })])])], 1), t._v(" "), r("b-checkbox", {
                        model: {
                            value: t.isBackuped,
                            callback: function(e) {
                                t.isBackuped = e
                            },
                            expression: "isBackuped"
                        }
                    }, [t._v("I backed up the note")]), t._v(" "), t.isBackuped && t.isIPFS ? r("div", {
                        staticClass: "notice is-warning"
                    }, [r("div", {
                        staticClass: "notice__p"
                    }, [t._v("\n      Your note won't be saved in browser cache, please make sure it's backed up.\n    ")])]) : t._e(), t._v(" "), r("b-button", {
                        attrs: {
                            type: "is-primary is-fullwidth",
                            disabled: !t.isBackuped
                        },
                        on: {
                            click: t._sendDeposit
                        }
                    }, [t._v("\n    Send Deposit")])], 1)
                }), [], !1, null, null, null).exports;

            function ct(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }
            var lt = {
                    data: function() {
                        return {
                            currentStep: 0,
                            amounts: [],
                            isDepositBtnClicked: !1,
                            isDepositModalOpened: !1
                        }
                    },
                    computed: function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? ct(source, !0).forEach((function(e) {
                                Object(n.a)(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : ct(source).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                            }))
                        }
                        return t
                    }({}, Object(o.c)("token", ["isSufficientAllowance", "isSufficientBalance"]), {}, Object(o.e)("metamask", ["providerName"]), {}, Object(o.c)("metamask", ["networkConfig", "netId", "hasEthAccount"]), {}, Object(o.c)("mixer", ["selectedCurrency"]), {
                        isLoggedIn: function() {
                            return !!this.providerName && this.hasEthAccount
                        },
                        selectedAmount: {
                            get: function() {
                                return this.$store.state.mixer.selectedMixer.amount
                            },
                            set: function(t) {
                                var e = this.selectedToken,
                                    r = t;
                                this.$store.commit("mixer/SET_SELECTED_MIXER", {
                                    currency: e,
                                    amount: r
                                }), this.$store.dispatch("mixer/loadStatistic", {})
                            }
                        },
                        tokens: function() {
                            return this.networkConfig.tokens
                        },
                        selectedToken: {
                            get: function() {
                                return this.$store.state.mixer.selectedMixer.currency
                            },
                            set: function(t) {
                                console.log("selectedToken", t), this.currentStep = 0;
                                var e = t,
                                    r = this.sortAmounts(e)[0].amount;
                                this.$store.commit("mixer/SET_SELECTED_MIXER", {
                                    currency: e,
                                    amount: r
                                }), console.log("set selectedToken", e, r), this.$store.dispatch("mixer/loadStatistic", {})
                            }
                        }
                    }),
                    watch: {
                        netId: {
                            handler: function(t) {
                                this.sortAmounts()
                            }
                        }
                    },
                    mounted: function() {
                        this.sortAmounts()
                    },
                    methods: {
                        shortenAmount: function(t) {
                            return t % 1e3 == 0 && (t = "".concat(t / 1e3, "k")), "".concat(t, " ").concat(this.tokens[this.selectedToken].symbol)
                        },
                        onLogIn: function() {
                            this.$buefy.modal.open({
                                parent: this,
                                component: $.a,
                                hasModalCard: !0,
                                width: 440
                            })
                        },
                        changeAmount: function(i) {
                            this.selectedAmount = Number(this.amounts[i].amount)
                        },
                        sortAmounts: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.selectedToken;
                            return this.amounts = Object.entries(this.tokens[t].mixerAddress).sort((function(a, b) {
                                return a[0] - b[0]
                            })).map((function(t) {
                                var e = Object(m.a)(t, 2),
                                    r = e[0],
                                    address = e[1];
                                return {
                                    amount: Number(r),
                                    address: address
                                }
                            })), this.amounts
                        },
                        openDepositModal: function() {
                            var t = this;
                            this.$store.dispatch("mixer/prepareDeposit", {
                                prefix: "tornado-".concat(this.selectedToken, "-").concat(this.selectedAmount, "-").concat(this.netId)
                            }), this.$buefy.modal.open({
                                parent: this,
                                component: ot,
                                hasModalCard: !0,
                                width: 440,
                                customClass: "is-pinned"
                            }).$on("close", (function() {
                                t.isDepositModalOpened = !1
                            }))
                        },
                        onDeposit: function() {
                            var t, e, r = this;
                            return regeneratorRuntime.async((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return t = function() {
                                            console.log("once approvalBoxClosed", r.isSufficientAllowance), r.isSufficientAllowance && (r.isDepositModalOpened || (r.isDepositModalOpened = !0, r.openDepositModal()))
                                        }, this.isDepositBtnClicked = !0, n.next = 4, regeneratorRuntime.awrap(this.$store.dispatch("token/fetchTokenAllowance", {}, {
                                            root: !0
                                        }));
                                    case 4:
                                        return n.next = 6, regeneratorRuntime.awrap(this.$store.dispatch("token/fetchTokenBalance", {}, {
                                            root: !0
                                        }));
                                    case 6:
                                        this.isSufficientBalance ? this.isSufficientAllowance || "eth" === this.selectedToken ? this.openDepositModal() : (e = this, this.$buefy.modal.open({
                                            parent: e,
                                            component: Z,
                                            hasModalCard: !0,
                                            width: 440
                                        }).$on("close", t)) : this.$buefy.modal.open({
                                            parent: this,
                                            component: st,
                                            hasModalCard: !0,
                                            width: 440
                                        }), this.isDepositBtnClicked = !1;
                                    case 8:
                                    case "end":
                                        return n.stop()
                                }
                            }), null, this)
                        }
                    }
                },
                ut = Object(d.a)(lt, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", [r("fieldset", [r("b-field", {
                        attrs: {
                            label: "Token"
                        }
                    }, [r("b-dropdown", {
                        attrs: {
                            expanded: "",
                            "aria-role": "list"
                        },
                        model: {
                            value: t.selectedToken,
                            callback: function(e) {
                                t.selectedToken = e
                            },
                            expression: "selectedToken"
                        }
                    }, [r("div", {
                        staticClass: "control",
                        attrs: {
                            slot: "trigger"
                        },
                        slot: "trigger"
                    }, [r("div", {
                        staticClass: "input"
                    }, [r("span", [t._v(t._s(t.selectedCurrency))])])]), t._v(" "), t._l(t.tokens, (function(e, n) {
                        return r("b-dropdown-item", {
                            key: n,
                            attrs: {
                                "aria-role": "listitem",
                                value: n
                            }
                        }, [t._v("\n          " + t._s(e.symbol) + "\n        ")])
                    }))], 2)], 1), t._v(" "), r("b-field", [r("template", {
                        slot: "label"
                    }, [t._v("\n        Amount\n        "), r("b-tooltip", {
                        attrs: {
                            label: "Each amount is a standalone Tornado Cash instance with a separate anonymity set. Check the stats tab for more info.",
                            size: "is-small",
                            position: "is-right",
                            multilined: ""
                        }
                    }, [r("button", {
                        staticClass: "button is-primary has-icon"
                    }, [r("span", {
                        staticClass: "icon icon-info"
                    })])])], 1), t._v(" "), r("b-steps", {
                        attrs: {
                            size: "is-small",
                            "has-navigation": !1
                        },
                        on: {
                            change: t.changeAmount
                        },
                        model: {
                            value: t.currentStep,
                            callback: function(e) {
                                t.currentStep = e
                            },
                            expression: "currentStep"
                        }
                    }, t._l(t.amounts, (function(e, n) {
                        var o = e.amount,
                            address = e.address;
                        return r("b-step-item", {
                            key: n,
                            attrs: {
                                label: t.shortenAmount(o),
                                clickable: "" !== address
                            }
                        })
                    })), 1)], 2)], 1), t._v(" "), t.isLoggedIn ? r("b-button", {
                        attrs: {
                            type: "is-primary is-fullwidth",
                            disabled: t.isDepositBtnClicked
                        },
                        on: {
                            click: t.onDeposit
                        }
                    }, [t._v("Deposit")]) : r("b-button", {
                        attrs: {
                            type: "is-primary is-fullwidth"
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.onLogIn(e)
                            }
                        }
                    }, [t._v("Connect")])], 1)
                }), [], !1, null, null, null).exports,
                pt = r(46);

            function ht(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }
            var mt = {
                components: {
                    CopyIcon: O.a,
                    TrashIcon: O.g
                },
                props: {
                    tx: {
                        type: Object,
                        required: !0
                    }
                },
                data: function() {
                    return {
                        tooltipShareUrl: "Copy Note",
                        timestamp: null,
                        time: "",
                        isSpent: !1
                    }
                },
                computed: function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? ht(source, !0).forEach((function(e) {
                            Object(n.a)(t, e, source[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : ht(source).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                        }))
                    }
                    return t
                }({}, Object(o.c)("txHashKeeper", ["txExplorerUrl"]), {}, Object(o.c)("metamask", ["networkConfig"]), {}, Object(o.c)("token", ["toDecimals"]), {}, Object(o.e)("mixer", ["selectedMixer", "statistic"]), {
                    prefix: function() {
                        var t = this.tx.prefix || "";
                        return t = t.split("-"), {
                            currency: t[1],
                            amount: t[2]
                        }
                    },
                    amount: function() {
                        return "100000000000000000" === this.tx.amount ? this.toDecimals(this.tx.amount, 18) : this.tx.amount
                    },
                    currency: function() {
                        var t = this.prefix.currency;
                        return t || this.tx.currency
                    },
                    mixingPower: function() {
                        if ("Withdraw" === this.tx.type) return "-";
                        if ("v1" === this.tx.index) return "v1 deposit";
                        var t = this.prefix,
                            e = t.currency,
                            r = t.amount,
                            n = this.statistic[e][r].nextDepositIndex;
                        if (this.tx.status !== pt.default.waitingForReciept && n) {
                            if (this.tx.status === pt.default.fail) return "-";
                            var o = this.statistic[e][r].nextDepositIndex - this.tx.index - 1;
                            return this.depositsPastToRender(o)
                        }
                        return "Loading..."
                    },
                    baseURL: function() {
                        return window.location.origin
                    },
                    status: function() {
                        return this.tx.status === pt.default.waitingForReciept ? "Waiting for receipt" : this.tx.status === pt.default.fail ? "Failed" : this.tx.isSpent ? "Spent" : "Withdraw" === this.tx.type ? "Withdrawn" : "Deposited"
                    },
                    isFailed: function() {
                        return 3 === this.tx.status ? "is-warning" : ""
                    },
                    isSpentTx: function() {
                        return this.tx.isSpent ? "is-spent" : ""
                    }
                }),
                mounted: function() {
                    this.timestamp = this.tx.timestamp, this.update()
                },
                methods: {
                    update: function() {
                        var t = this;
                        this.updateTime(), setTimeout((function() {
                            t.update()
                        }), 1e4)
                    },
                    onCopyLink: function() {
                        var t = this;
                        this.tooltipShareUrl = "Copied!", setTimeout((function() {
                            t.tooltipShareUrl = "Copy Note"
                        }), 1500)
                    },
                    onClose: function() {
                        var t = this;
                        this.$buefy.dialog.confirm({
                            title: "Remove from cache",
                            type: "is-primary is-outlined",
                            message: "Please make sure you have backed up your note if it's not already been spent.\n        Do you still want to remove this transaction and the note from Browser storage?",
                            confirmText: "Remove",
                            onConfirm: function() {
                                t.$buefy.toast.open("Note has been deleted"), t.$store.commit("txHashKeeper/DELETE_TX", {
                                    txHash: t.tx.txHash
                                })
                            }
                        })
                    },
                    updateTime: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.timestamp;
                        this.time = f.a.unix(t).fromNow()
                    },
                    depositsPastToRender: function(t) {
                        return t < 0 ? "Loading..." : 0 === t ? "no deposits" : 1 === t ? "only 1 deposit" : t < 5 ? "only ".concat(t, " deposits") : "".concat(t, " deposits")
                    }
                }
            };

            function bt(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }
            var vt = {
                components: {
                    Tx: Object(d.a)(mt, (function() {
                        var t = this,
                            e = t.$createElement,
                            r = t._self._c || e;
                        return r("div", {
                            staticClass: "box box-tx",
                            class: ["is-" + t.tx.type.toLowerCase(), t.isFailed, t.isSpentTx]
                        }, [r("div", {
                            staticClass: "columns is-vcentered"
                        }, [r("div", {
                            staticClass: "column column-time is-2",
                            attrs: {
                                "data-label": t.$parent.labelTime
                            }
                        }, [t._v(t._s(t.time))]), t._v(" "), r("div", {
                            staticClass: "column column-amount is-2",
                            attrs: {
                                "data-label": t.$parent.labelAmount
                            }
                        }, [t._v("\n      " + t._s(t.amount) + "\n      " + t._s(t.currency.toUpperCase()) + "\n    ")]), t._v(" "), r("div", {
                            staticClass: "column column-deposits is-one-fifth",
                            attrs: {
                                "data-label": t.$parent.labelDeposits
                            }
                        }, [t._v("\n      " + t._s(t.mixingPower) + "\n    ")]), t._v(" "), r("div", {
                            staticClass: "column column-tx is-2",
                            attrs: {
                                "data-label": t.$parent.labelTx
                            }
                        }, [r("div", {
                            staticClass: "details"
                        }, [r("p", {
                            staticClass: "detail"
                        }, [r("a", {
                            staticClass: "detail-description",
                            attrs: {
                                href: t.txExplorerUrl(t.tx.txHash),
                                target: "_blank"
                            }
                        }, [t._v("\n            " + t._s(t.tx.txHash) + "\n          ")])])])]), t._v(" "), r("div", {
                            staticClass: "column column-status",
                            attrs: {
                                "data-label": t.$parent.labelStatus
                            }
                        }, [t._v(t._s(t.status))]), t._v(" "), t.isFailed ? t._e() : r("div", {
                            staticClass: "column column-buttons"
                        }, [r("b-tooltip", {
                            attrs: {
                                active: !!t.tx.note,
                                label: t.tooltipShareUrl,
                                position: "is-left"
                            }
                        }, [r("button", {
                            directives: [{
                                name: "clipboard",
                                rawName: "v-clipboard:copy",
                                value: t.tx.prefix + "-" + t.tx.note,
                                expression: "`${tx.prefix}-${tx.note}`",
                                arg: "copy"
                            }, {
                                name: "clipboard",
                                rawName: "v-clipboard:success",
                                value: t.onCopyLink,
                                expression: "onCopyLink",
                                arg: "success"
                            }],
                            staticClass: "button is-small",
                            class: t.tx.note ? "is-primary" : "is-outline-dark",
                            attrs: {
                                disabled: !t.tx.note
                            }
                        }, [r("CopyIcon"), t._v(" "), r("span", [t._v("Note")])], 1)]), t._v(" "), r("button", {
                            staticClass: "button is-small",
                            class: t.tx.note ? "is-outline-dark" : "is-primary",
                            on: {
                                click: t.onClose
                            }
                        }, [r("TrashIcon")], 1)], 1)])])
                    }), [], !1, null, null, null).exports
                },
                data: function() {
                    return {
                        labelTime: "Time passed",
                        labelAmount: "Amount",
                        labelDeposits: "Subsequent deposits",
                        labelTx: "Tx Hash",
                        labelStatus: "Status"
                    }
                },
                computed: function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? bt(source, !0).forEach((function(e) {
                            Object(n.a)(t, e, source[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : bt(source).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                        }))
                    }
                    return t
                }({}, Object(o.c)("txHashKeeper", ["txs", "txExplorerUrl"]))
            };

            function ft(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }
            var yt = {
                    name: "HomePage",
                    components: {
                        Txs: Object(d.a)(vt, (function() {
                            var t = this,
                                e = t.$createElement,
                                r = t._self._c || e;
                            return r("div", {
                                directives: [{
                                    name: "show",
                                    rawName: "v-show",
                                    value: Object.keys(t.txs).length > 0,
                                    expression: "Object.keys(txs).length > 0"
                                }],
                                staticClass: "txs"
                            }, [r("div", {
                                staticClass: "tx-head"
                            }, [r("div", {
                                staticClass: "columns"
                            }, [r("div", {
                                staticClass: "column is-2"
                            }, [t._v(t._s(t.labelTime))]), t._v(" "), r("div", {
                                staticClass: "column is-2"
                            }, [t._v(t._s(t.labelAmount))]), t._v(" "), r("div", {
                                staticClass: "column is-one-fifth"
                            }, [t._v(t._s(t.labelDeposits))]), t._v(" "), r("div", {
                                staticClass: "column is-2"
                            }, [t._v(t._s(t.labelTx))]), t._v(" "), r("div", {
                                staticClass: "column"
                            }, [t._v(t._s(t.labelStatus))])])]), t._v(" "), t._l(t.txs, (function(t) {
                                return r("Tx", {
                                    key: t.txHash,
                                    attrs: {
                                        tx: t
                                    }
                                })
                            }))], 2)
                        }), [], !1, null, null, null).exports,
                        Statistics: h,
                        Withdraw: X,
                        Deposit: ut
                    },
                    data: function() {
                        return {
                            activeTab: 0
                        }
                    },
                    computed: function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? ft(source, !0).forEach((function(e) {
                                Object(n.a)(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : ft(source).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                            }))
                        }
                        return t
                    }({}, Object(o.e)("mixer", ["selectedMixer"]), {}, Object(o.c)("txHashKeeper", ["addressExplorerUrl"]), {}, Object(o.c)("metamask", ["networkConfig"])),
                    mounted: function() {
                        this.$route.query.note && (this.activeTab = 1)
                    },
                    methods: {
                        tabChanged: function() {
                            this.$route.query.note || this.$root.$emit("resetWithdraw")
                        },
                        amountToParse: function(t) {
                            return t.toString().replace(".", "")
                        }
                    }
                },
                wt = Object(d.a)(yt, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", [r("b-notification", {
                        attrs: {
                            type: "is-info",
                            "icon-pack": "icon",
                            "has-icon": "",
                            "aria-close-label": "Close notification"
                        }
                    }, [r("strong", [t._v("Security alert!")]), t._v(" "), r("a", {
                        attrs: {
                            target: "_blank",
                            href: "https://twitter.com/TornadoCash/status/1223534302308130816"
                        }
                    }, [t._v("Please check the latest vulnerability report")]), t._v(". You might be affected.\n  ")]), t._v(" "), r("b-notification", {
                        attrs: {
                            type: "is-info",
                            "icon-pack": "icon",
                            "has-icon": "",
                            "aria-close-label": "Close notification"
                        }
                    }, [t._v("\n    Tornado.cash\n    "), r("a", {
                        attrs: {
                            target: "_blank",
                            href: "https://twitter.com/TornadoCash/status/1204745639759884289"
                        }
                    }, [t._v("was audited")]), t._v(". However, it is still an experimental software. Please use at your own risk.\n  ")]), t._v(" "), r("div", {
                        staticClass: "columns"
                    }, [r("div", {
                        staticClass: "column is-half"
                    }, [r("b-tabs", {
                        staticClass: "is-tornado",
                        attrs: {
                            animated: !1
                        },
                        on: {
                            change: t.tabChanged
                        },
                        model: {
                            value: t.activeTab,
                            callback: function(e) {
                                t.activeTab = e
                            },
                            expression: "activeTab"
                        }
                    }, [r("b-tab-item", {
                        attrs: {
                            label: "Deposit"
                        }
                    }, [r("Deposit")], 1), t._v(" "), r("b-tab-item", {
                        attrs: {
                            label: "Withdraw"
                        }
                    }, [r("Withdraw")], 1)], 1), t._v(" "), r("div", {
                        staticClass: "tab-with-corner is-left-bottom is-primary"
                    }, [r("span", {
                        staticClass: "is-small"
                    }, [r("a", {
                        staticClass: "has-text-primary",
                        attrs: {
                            target: "_blank",
                            href: t.addressExplorerUrl(t.networkConfig.tokens[t.selectedMixer.currency].mixerAddress[t.selectedMixer.amount])
                        }
                    }, [t._v(t._s(t.selectedMixer.currency + "-" + t.amountToParse(t.selectedMixer.amount) + ".tornadocash.eth"))])])])], 1), t._v(" "), r("Statistics")], 1), t._v(" "), r("Txs")], 1)
                }), [], !1, null, null, null);
            e.default = wt.exports
        }
    }
]);