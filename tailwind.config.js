
module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  
  theme: {
    extend: {
      screens: {
        'pxs': {'max':'322px'},
        'pmd': {'max':'380px'},
        'ps': {'max':'450px'},
        'pm': {'max':'780px'},
        'pd':  {'max':'1000px'},
        'pmg':  {'max':'1025px'},
        'pg':  {'max':'1440px'},
        
        // => @media (min-width: 992px) { ... }
      },
    },
  },
}