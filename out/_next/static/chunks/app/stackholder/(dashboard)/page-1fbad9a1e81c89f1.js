(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[170],{5641:function(a,n,e){Promise.resolve().then(e.bind(e,4391))},4391:function(a,n,e){"use strict";e.r(n);var t=e(9268),r=e(7604),i=e(5846),s=e.n(i),u=e(6008),l=e(6006);n.default=()=>{let a=(0,u.useSearchParams)(),n=a.get("link")||"",{setByLink:e,dtPengguna:i}=(0,r.Z)();return(0,l.useEffect)(()=>(e(n),()=>{}),[n]),(0,t.jsxs)("div",{className:"lg:p-8",children:[(0,t.jsxs)("h4",{children:["Selamat Datang, ",null==i?void 0:i.nama]}),(0,t.jsxs)("div",{className:"mt-4 flex flex-col gap-3",children:[(0,t.jsx)("p",{children:"Peran Anda sangat penting dalam membantu kami mendapatkan wawasan berharga tentang kontribusi dan prestasi alumni kami di tempat kerja."}),(0,t.jsx)("p",{children:"Kami mengakui bahwa Anda memiliki pandangan yang berharga tentang kualitas kerja dan dampak yang dibawa oleh para lulusan kami. Penilaian Anda akan memberikan pandangan yang jujur dan objektif, yang akan membantu kami terus meningkatkan program kami agar tetap relevan dan bermanfaat."}),(0,t.jsxs)("p",{children:["Pada halaman"," ",(0,t.jsx)(s(),{className:"underline text-blue-500",href:"/stackholder/penilaian?link=".concat(n),children:"Penilaian"}),", Anda akan diberikan akses ke formulir penilaian yang sederhana namun informatif. Mohon luangkan waktu sejenak untuk memberikan penilaian Anda terhadap para alumni yang Anda kenal. Setiap perspektif yang Anda berikan akan menjadi bahan berharga bagi perbaikan dan pengembangan program alumni kami."]}),(0,t.jsx)("p",{children:"Kami berterima kasih atas kontribusi Anda dalam membantu kami memberikan pengalaman yang lebih baik bagi para alumni dan memastikan bahwa lulusan kami tetap berkualitas tinggi dalam menjalani karir mereka."}),(0,t.jsx)("p",{children:"Terima kasih banyak atas waktu dan perhatian Anda. Silakan mulai memberikan penilaian dengan mengklik tautan yang telah disediakan."})]})]})}},3415:function(a,n,e){"use strict";e.d(n,{I8:function(){return i},Sj:function(){return s},_n:function(){return r},hi:function(){return u}});var t=e(4214);let r="https://back.alumni.fstuogp.com",i=t.Z.create({baseURL:"".concat(r,"/auth")}),s=t.Z.create({baseURL:"".concat(r,"/crud")}),u=t.Z.create({baseURL:"".concat(r,"/api")});t.Z.create({baseURL:"".concat(r,"/storage")})},7604:function(a,n,e){"use strict";var t=e(2561),r=e(4475),i=e(3415);let s=(0,t.Ue)((0,r.mW)((a,n)=>({dtPengguna:[],setPengguna:async n=>{let{page:e=1,limit:t=10,search:r}=n;try{let n=await (0,i.hi)({method:"get",url:"/pengguna",params:{limit:t,page:e,search:r}});return a(a=>({...a,dtPengguna:n.data})),{status:"berhasil",data:n.data}}catch(a){return{status:"error",error:a.response.data}}},setAktif:async n=>{let{search:e}=n;try{let n=await (0,i.hi)({method:"get",url:"/pengguna/aktif",params:{search:e}});return a(a=>{var e;return{...a,dtPengguna:null===(e=n.data)||void 0===e?void 0:e.data}}),{status:"berhasil",data:n.data}}catch(a){return{status:"error",error:a.response.data}}},setByLink:async n=>{try{let e=await (0,i.hi)({method:"get",url:"/pengguna/by-link/".concat(n)});return a(a=>{var n;return{...a,dtPengguna:null===(n=e.data)||void 0===n?void 0:n.data}}),{status:"berhasil",data:e.data}}catch(a){return{status:"error",error:a.response.data}}}})));n.Z=s}},function(a){a.O(0,[8348,7742,5846,9253,7698,1744],function(){return a(a.s=5641)}),_N_E=a.O()}]);