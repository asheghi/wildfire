import{H as e,o as d,c as o,f as s}from"./index.d25bbfa4.js";const a={class:"markdown-body"},r=s('<h3>Login</h3><p>used to authenticate users in your application, currently only basic authentication (email,password) is supported.</p><p>to make authenticated requests, you must add header <code class="">x-auth-token</code> with token value returned by this api.</p><p><strong>POST</strong> <code class="">{baseUrl}/{project}/login</code></p><h5>Parameters</h5><table><thead><tr><th>Name</th><th>Located in</th><th>Description</th><th>Required</th><th>Schema</th></tr></thead><tbody><tr><td>email</td><td>body.email</td><td>user email.</td><td>Yes</td><td>string</td></tr><tr><td>password</td><td>body.password</td><td>user password.</td><td>Yes</td><td>string</td></tr></tbody></table><h5>Responses</h5><table><thead><tr><th>Code</th><th>Description</th><th>Schema</th></tr></thead><tbody><tr><td>200</td><td>successfully logged in</td><td>{ token: string }</td></tr><tr><td>400</td><td>login failed</td><td>{ success: boolean = false }</td></tr></tbody></table>',8),n=[r],p={},u="",m=e({setup(c,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(h,i)=>(d(),o("div",a,n))}});export{m as default,u as excerpt,p as frontmatter};