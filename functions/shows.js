!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t){e.exports=require("apollo-client")},function(e,t){e.exports=require("apollo-link-http")},function(e,t){e.exports=require("apollo-link-context")},function(e,t){e.exports=require("apollo-cache-inmemory")},function(e,t){e.exports=require("graphql-tag")},function(e,t){e.exports=require("node-fetch")},,,,,function(e,t,n){const{ApolloClient:o}=n(0),{HttpLink:r}=n(1),{setContext:i}=n(2),{InMemoryCache:u}=n(3),a=n(4),l={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Content-Type"},c=new r({uri:"https://xyabwrrxxk.execute-api.us-east-1.amazonaws.com/stage",fetch:n(5)}),s=new o({link:i((e,{headers:t})=>({headers:{"x-api-key":"mX63Tp1jp4M3ExJyHutMqn3D7W9aN28lsJxWlV50"}})).concat(c),cache:new u});t.handler=((e,t,n)=>{s.query({query:a`
        {
            shows{
                data{
                    id
                    attributes{
                        promoTitle
                        promoDescription
                        description
                        shortDescription
                        name
                        showColor
                    }
                    relationships{
                        media{
                            data{
                                attributes{
                                    usage
                                }
                                relationships{
                                    image {
                                        data{
                                            attributes{
                                                path
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `}).then(function(e){n(null,{statusCode:200,headers:l,body:JSON.stringify(e)}),console.log(JSON.stringify(e,null,2))}).catch(function(e){console.log(e)})})}]));