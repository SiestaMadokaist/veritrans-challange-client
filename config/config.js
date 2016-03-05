export default {
    // apiServer: "http://veritrans.darkparser.com",
    apiServer: "http://localhost:9292",
    nameSpace: "/v1/web",
    resources: function(endpoint){
        return `${this.apiServer}${this.nameSpace}${endpoint}`
    }
}
