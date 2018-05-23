import resolve from 'rollup-plugin-node-resolve';
export default [{
  input: "bin/app.js",
  output: {
    file: "dist/toybox.js",
    format: "umd"
  },
  plugins:[
    resolve({
      jsnext:true,
    })
  ]
}]