import resolve from 'rollup-plugin-node-resolve';
export default [{
  input: "bin/app.js",
  output: {
    file: "dist/toybox.js",
    format: "umd",
    globals:{
      Physics: 'Physics',
      Utils: 'Utils'
    }
  },
  plugins:[
    resolve({
      jsnext:true,
    })
  ]
}]