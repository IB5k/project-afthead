const acronyms = [
  <h1 class="logotype"><span class="remain">I</span><span class="compress">ntergallactic </span><span class="remain">B</span><span class="compress">allistic </span><span class="remain">5</span><span class="compress">,000 </span><span class="expand">k</span></h1>,
  <h1 class="logotype"><span class="remain">I</span><span class="compress">naugural </span><span class="remain">B</span><span class="compress">all $</span><span class="remain">5</span><span class="compress">,000 </span><span class="expand">k</span></h1>,
]

const randIndex = Math.floor(Math.random() * acronyms.length)

export default () => acronyms[randIndex]
