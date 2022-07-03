import{E as e,o as d,c as o,d as r}from"./index.7aedd7d3.js";const s={class:"markdown-body"},n=r('<h3>Find</h3><p>Find documents, Mongoose <a href="https://mongoosejs.com/docs/api.html#model_Model.find">find</a> equivalent.</p><p><strong>POST</strong> <code class="">{baseUrl}/{project}/{collection}/find</code></p><h5>Parameters</h5><table><thead><tr><th>Name</th><th>Located in</th><th>Description</th><th>Required</th><th>Schema</th></tr></thead><tbody><tr><td>filter</td><td>body.filter</td><td>Specifies selection filter using query operators. To return all documents in a collection, omit this parameter or pass an empty document ({}).</td><td>No</td><td>json</td></tr><tr><td>projection</td><td>body.projection</td><td>Specifies the fields to return in the documents that match the query filter. To return all fields in the matching documents, omit this parameter.</td><td>No</td><td>string ,json,string[]</td></tr><tr><td>sort</td><td>body.options.sort</td><td>Orders the documents. corresponds to the ORDER BY statement in SQL.</td><td>No</td><td>json</td></tr><tr><td>skip</td><td>body.options.skip</td><td>Controls the starting point of the results.</td><td>No</td><td>integer</td></tr><tr><td>limit</td><td>body.options.limit</td><td>Limits the number of documents in the result. corresponds to the LIMIT statement in SQL.</td><td>No</td><td>integer</td></tr></tbody></table><h5>Responses</h5><table><thead><tr><th>Code</th><th>Description</th><th>Schema</th></tr></thead><tbody><tr><td>200</td><td>paginated documents</td><td>json[]</td></tr></tbody></table>',7),i=[n],p={},l="",u=e({setup(a,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(c,h)=>(d(),o("div",s,i))}});export{u as default,l as excerpt,p as frontmatter};
