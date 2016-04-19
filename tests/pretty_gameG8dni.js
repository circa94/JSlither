var testing = false;
if (0 <= window.location.href.indexOf("/testing")) {
  testing = true;
}
var forcing = false;
var ua = navigator.userAgent.toLowerCase();
var is_android = 0 <= ua.indexOf("android");
var is_amazon = 0 <= ua.indexOf("kindle") || 0 <= ua.indexOf("silk/");
var uua = navigator.userAgent;
var is_ios = 0 <= uua.indexOf("iPad") || (0 <= uua.indexOf("iPhone") || 0 <= uua.indexOf("iPod"));
var is_mobile = 0 <= ua.indexOf("mobile");
var is_firefox = -1 < ua.indexOf("firefox");
var is_ie8oo = window.attachEvent && !window.addEventListener;
var is_safari = is_firefox = false;
if (0 <= ua.indexOf("safari")) {
  if (-1 == ua.indexOf("chrome")) {
    is_safari = true;
  }
}
var no_raf = false;
var raf = function(b) {};
if (window.requestAnimationFrame) {
  raf = window.requestAnimationFrame;
}
else {
  if (window.mozRequestAnimationFrame) {
    raf = window.mozRequestAnimationFrame;
  }
  else {
    if (window.webkitRequestAnimationFrame) {
      raf = window.webkitRequestAnimationFrame;
    }
    else {
      no_raf = true;
    }
  }
}
if (!is_mobile) {
  no_raf = true;
}
no_raf = true;
var a;
var i;
var j;
var k;
var l;
var m;
var n;
var o;
var r;
var fj;
var d;
var d2;
var qq;
var sc;
var agpu = "translateZ(0)";
var ang;
var sang;
var vang;

function trf(b, h) {
  b.style.webkitTransform = b.style.OTransform = b.style.msTransform = b.style.MozTransform = b.style.transform = h;
}

function trfo(b, h) {
  b.style.webkitTransformOrigin = b.style.OTransformOrigin = b.style.msTransformOrigin = b.style.MozTransformOrigin = b.style.transformOrigin = h;
}
var pi2 = 2 * Math.PI;
var animating = false;
var startAnimation = function() {
  animating = true;
  if (no_raf) {
    if (is_mobile) {
      setInterval("oef()", 33);
    }
    else {
      if (is_safari) {
        setInterval("oef()", 33);
      }
      else {
        setInterval("oef()", 20);
      }
    }
  }
  else {
    raf(oef);
  }
};
var ois = [];
var wic = 0;
var ldi = function(b$$0) {
  wic++;
  var h = {};
  var c = document.createElement("img");
  h.ii = c;
  h.sc = 1;
  c.onload = function() {
    var b = ois.length - 1;
    for (; 0 <= b; b--) {
      if (ois[b].ii == this) {
        b = ois[b];
        b.ww = this.width;
        b.hh = this.height;
        b.loaded = true;
        if (b.onload) {
          b.onload();
        }
        break;
      }
    }
    wic--;
    if (0 == wic) {
      startAnimation();
    }
  };
  h.src = b$$0;
  ois.push(h);
  return h;
};

function addCss(b) {
  var h = document.createElement("style");
  document.getElementsByTagName("head")[0].appendChild(h);
  h.type = "text/css";
  if (h.styleSheet) {
    h.styleSheet.cssText = b;
  }
  else {
    h.appendChild(document.createTextNode(b));
  }
}
var nbg = document.getElementById("nbg");
var nzbg;
var sadg;
var sadu;
var sadd;
var p;
var xx;
var yy;
var grw;
var grh;
var elem;
var map;
var imgd;
var ctx;
elem = document.createElement("canvas");
var rw = 64;
var rh = 64;
elem.width = rw;
elem.height = rh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, rw, rh);
imgd = map.data;
l = imgd.length;
p = 0;
for (; p < l; p += 4) {
  if (0.5 > Math.random()) {
    imgd[p] = imgd[p + 1] = imgd[p + 2] = 0;
  }
  else {
    imgd[p] = 44;
    imgd[p + 1] = 56;
    imgd[p + 2] = 68;
  }
  imgd[p + 3] = Math.floor(32 * Math.random());
}
ctx.putImageData(map, 0, 0);
nzbg = elem.toDataURL();
if (32 < nzbg.length) {
  nbg.style.backgroundImage = "url(" + nzbg + ")";
}
grw = 2;
grh = 56;
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
yy = p = 0;
for (; yy < grh; yy++) {
  j = (grh - 1 - yy) / (grh - 1);
  j = 0.5 * (1 - Math.cos(Math.PI * j));
  xx = 0;
  for (; xx < grw; xx++) {
    imgd[p] = Math.min(255, Math.floor(54.4 + 32 * j));
    imgd[p + 1] = Math.min(255, Math.floor(108.8 + 64 * j));
    imgd[p + 2] = Math.min(255, Math.floor(81.6 + 48 * j));
    imgd[p + 3] = 255;
    p += 4;
  }
}
ctx.putImageData(map, 0, 0);
sadg = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
yy = p = 0;
for (; yy < grh; yy++) {
  j = (grh - 1 - yy) / (grh - 1);
  j = 0.5 * (1 - Math.cos(Math.PI * j));
  xx = 0;
  for (; xx < grw; xx++) {
    imgd[p] = Math.min(255, Math.floor(72 + 0.95 * 48 * j));
    imgd[p + 1] = Math.min(255, Math.floor(171 + 93.1 * j));
    imgd[p + 2] = Math.min(255, Math.floor(132 + 0.95 * 87 * j));
    imgd[p + 3] = 255;
    p += 4;
  }
}
ctx.putImageData(map, 0, 0);
sadu = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
yy = p = 0;
for (; yy < grh; yy++) {
  j = yy / (grh - 1);
  j = 0.5 * (1 - Math.cos(Math.PI * j));
  xx = 0;
  for (; xx < grw; xx++) {
    imgd[p] = Math.floor(0.1 * 48 + 36 * j);
    imgd[p + 1] = Math.floor(7 + 52.5 * j);
    imgd[p + 2] = Math.floor(6.4 + 48 * j);
    imgd[p + 3] = 255;
    p += 4;
  }
}
ctx.putImageData(map, 0, 0);
sadd = elem.toDataURL();
if (32 < sadg.length) {
  if (32 < sadu.length) {
    if (32 < sadd.length) {
      addCss(".sadg1 { background-image:url(" + sadg + "); }  .sadu1 { background-image:url(" + sadu + "); }  .sadd1 { background-image:url(" + sadd + "); }");
    }
  }
}
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
yy = p = 0;
for (; yy < grh; yy++) {
  j = (grh - 1 - yy) / (grh - 1);
  j = 0.5 * (1 - Math.cos(Math.PI * j));
  xx = 0;
  for (; xx < grw; xx++) {
    imgd[p] = Math.min(255, Math.floor(0.85 * 52 + 26 * j));
    imgd[p + 1] = Math.min(255, Math.floor(81.6 + 48 * j));
    imgd[p + 2] = Math.min(255, Math.floor(0.85 * 144 + 72 * j));
    imgd[p + 3] = 255;
    p += 4;
  }
}
ctx.putImageData(map, 0, 0);
sadg = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
yy = p = 0;
for (; yy < grh; yy++) {
  j = (grh - 1 - yy) / (grh - 1);
  j = 0.5 * (1 - Math.cos(Math.PI * j));
  xx = 0;
  for (; xx < grw; xx++) {
    imgd[p] = Math.min(255, Math.floor(72 + 0.95 * 48 * j));
    imgd[p + 1] = Math.min(255, Math.floor(132 + 0.95 * 87 * j));
    imgd[p + 2] = Math.min(255, Math.floor(171 + 93.1 * j));
    imgd[p + 3] = 255;
    p += 4;
  }
}
ctx.putImageData(map, 0, 0);
sadu = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
yy = p = 0;
for (; yy < grh; yy++) {
  j = yy / (grh - 1);
  j = 0.5 * (1 - Math.cos(Math.PI * j));
  xx = 0;
  for (; xx < grw; xx++) {
    imgd[p] = Math.floor(0.1 * 48 + 36 * j);
    imgd[p + 1] = Math.floor(5.4 + 40.5 * j);
    imgd[p + 2] = Math.floor(7 + 52.5 * j);
    imgd[p + 3] = 255;
    p += 4;
  }
}
ctx.putImageData(map, 0, 0);
sadd = elem.toDataURL();
if (32 < sadg.length) {
  if (32 < sadu.length) {
    if (32 < sadd.length) {
      addCss(".sadg2 { background-image:url(" + sadg + "); }  .sadu2 { background-image:url(" + sadu + "); }  .sadd2 { background-image:url(" + sadd + "); }");
    }
  }
}
var mos = [];
var m_iv = -1;
var swmup = false;

function mkBtn(b$$0, h, c$$0, f) {
  var w = document.createElement("div");
  if (!b$$0.tagName) {
    b$$0 = document.getElementById(b$$0);
    b$$0.style.width = c$$0 + "px";
    b$$0.style.height = f + "px";
    w.style.width = c$$0 + "px";
    w.style.height = f + "px";
  }
  var u = {
    lic: 0
  };
  u.elem = b$$0;
  u.md = false;
  u.mo = false;
  u.mdf = 0;
  u.mof = 0;
  var e$$0 = true;
  if (b$$0.style) {
    if (b$$0.style.position) {
      if ("absolute" == (b$$0.style.position + "").toLowerCase()) {
        e$$0 = false;
      }
      if ("fixed" == (b$$0.style.position + "").toLowerCase()) {
        e$$0 = false;
      }
    }
  }
  if (e$$0) {
    b$$0.style.position = "relative";
  }
  w.style.position = "absolute";
  w.style.opacity = 0;
  w.style.left = "0px";
  w.style.top = "0px";
  b$$0.appendChild(w);
  u.ho = w;
  u.alic = function() {
    this.lic++;
    if (3 == this.lic && (this.ho.style.opacity = 1, this.onload)) {
      this.onload();
    }
  };
  mos.push(u);
  u.setEnabled = function(b) {
    if (b) {
      this.disabled = false;
      this.upi.style.opacity = this.mof;
      this.downi.style.opacity = this.mdf;
      this.elem.style.opacity = 1;
      this.elem.style.cursor = "pointer";
    }
    else {
      this.disabled = true;
      this.upi.style.opacity = 0;
      this.downi.style.opacity = 0;
      this.elem.style.opacity = 0.38;
      this.elem.style.cursor = "default";
    }
  };
  if (h) {
    e$$0 = 1;
    for (; 3 >= e$$0; e$$0++) {
      var z = document.createElement("img");
      z.draggable = false;
      z.style.position = "absolute";
      z.style.left = "0px";
      z.style.top = "0px";
      z.border = 0;
      z.width = c$$0;
      z.height = f;
      z.className = "nsi";
      w.appendChild(z);
      if (1 == e$$0) {
        u.normi = z;
        z.onload = function() {
          var b = mos.length - 1;
          for (; 0 <= b; b--) {
            var e = mos[b];
            if (e.normi == this) {
              e.alic();
              break;
            }
          }
        };
        z.src = h + ".png";
      }
      else {
        if (2 == e$$0) {
          u.upi = z;
          z.style.opacity = 0;
          z.onload = function() {
            var b = mos.length - 1;
            for (; 0 <= b; b--) {
              var e = mos[b];
              if (e.upi == this) {
                e.alic();
                break;
              }
            }
          };
          z.src = h + "up.png";
        }
        else {
          if (3 == e$$0) {
            u.downi = z;
            z.style.opacity = 0;
            z.onload = function() {
              var b = mos.length - 1;
              for (; 0 <= b; b--) {
                var e = mos[b];
                if (e.downi == this) {
                  e.alic();
                  break;
                }
              }
            };
            z.src = h + "down.png";
          }
        }
      }
    }
  }
  else {
    w.style.opacity = 1;
  }
  b$$0.onmouseenter = function() {
    var b = mos.length - 1;
    for (; 0 <= b; b--) {
      var e = mos[b];
      if (e.elem == this) {
        if (!e.disabled && !e.mo) {
          e.mo = true;
          if (e.onmouseenter) {
            e.onmouseenter();
          }
          if (-1 == m_iv) {
            m_iv = setInterval("hmos()", 25);
          }
        }
        break;
      }
    }
  };
  b$$0.onmouseleave = function() {
    var b = mos.length - 1;
    for (; 0 <= b; b--) {
      var e = mos[b];
      if (e.elem == this) {
        if (e.mo) {
          e.mo = false;
          if (e.onmouseleave) {
            e.onmouseleave();
          }
          if (-1 == m_iv) {
            m_iv = setInterval("hmos()", 25);
          }
        }
        break;
      }
    }
  };
  b$$0.onmousedown = function(b) {
    var e = mos.length - 1;
    for (; 0 <= e; e--) {
      var c = mos[e];
      if (c.elem == this) {
        if (!c.disabled && !c.md) {
          c.md = true;
          if (c.onmousedown) {
            c.onmousedown(b, c);
          }
          if (-1 == m_iv) {
            m_iv = setInterval("hmos()", 25);
          }
          return false;
        }
        break;
      }
    }
  };
  b$$0.onmouseup = b$$0.ondragend = function(b) {
    var e = mos.length - 1;
    for (; 0 <= e; e--) {
      var c = mos[e];
      if (c.elem == this) {
        if (c.md) {
          c.mdf = 1;
          c.md = false;
          if (c.onmouseup && (c.onmouseup(b, c), is_mobile)) {
            c.elem.onmouseleave();
          }
          if (-1 == m_iv) {
            m_iv = setInterval("hmos()", 25);
          }
        }
        break;
      }
    }
  };
  if (!swmup) {
    swmup = true;
    window.onmouseup = window.ondragover = window.ondragend = function() {
      var b = mos.length - 1;
      for (; 0 <= b; b--) {
        var e = mos[b];
        if (e.md) {
          e.md = false;
          if (-1 == m_iv) {
            m_iv = setInterval("hmos()", 25);
          }
        }
      }
    };
  }
  return u;
}

function hmos() {
  var b;
  var h = false;
  var c = mos.length - 1;
  for (; 0 <= c; c--) {
    var f = mos[c];
    b = false;
    if (f.mo) {
      if (1 != f.mof) {
        h = true;
        f.mof += 0.33;
        if (1 <= f.mof) {
          f.mof = 1;
        }
        b = true;
      }
    }
    else {
      if (0 != f.mof) {
        h = true;
        f.mof -= 0.2;
        if (0 >= f.mof) {
          f.mof = 0;
        }
        b = true;
      }
    }
    if (b) {
      f.upi.style.opacity = f.disabled ? 0 : f.mof;
    }
    b = false;
    if (f.md) {
      if (1 != f.mdf) {
        h = true;
        f.mdf += 0.33;
        if (1 <= f.mdf) {
          f.mdf = 1;
        }
        b = true;
      }
    }
    else {
      if (0 != f.mdf) {
        h = true;
        f.mdf -= 0.2;
        if (0 >= f.mdf) {
          f.mdf = 0;
        }
        b = true;
      }
    }
    if (b) {
      f.downi.style.opacity = f.disabled ? 0 : f.mdf;
    }
  }
  if (!h) {
    clearInterval(m_iv);
    m_iv = -1;
  }
}

function makeTextBtn(b$$0, h, c$$0, f, w) {
  if (!h) {
    h = 56;
  }
  if (56 < h) {
    h = 56;
  }
  if (!c$$0) {
    c$$0 = 15;
  }
  if (!f) {
    f = 14;
  }
  var u = document.createElement("div");
  u.className = "btnt nsi sadg" + w;
  var e$$0 = u.style;
  e$$0.position = "absolute";
  e$$0.width = "auto";
  e$$0.color = "#ffffff";
  e$$0.fontWeight = "bold";
  e$$0.textAlign = "center";
  e$$0.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
  e$$0.fontSize = c$$0 + "px";
  u.textContent = b$$0;
  e$$0.cursor = "pointer";
  document.body.appendChild(u);
  var z = Math.ceil(35 + u.offsetWidth);
  document.body.removeChild(u);
  u.textContent = "";
  e$$0.width = z + "px";
  e$$0.height = h + "px";
  e$$0.lineHeight = h + "px";
  if (!is_mobile) {
    e$$0.boxShadow = "0px 3px 20px rgba(0,0,0, .75)";
  }
  e$$0.borderRadius = f + "px";
  var F = document.createElement("div");
  e$$0 = F.style;
  e$$0.position = "absolute";
  e$$0.left = e$$0.top = "0px";
  e$$0.width = z + "px";
  e$$0.height = h + "px";
  e$$0.borderRadius = f + 1 + "px";
  e$$0.opacity = 0;
  F.className = "sadu" + w;
  var t = document.createElement("div");
  e$$0 = t.style;
  e$$0.position = "absolute";
  e$$0.left = e$$0.top = "-1px";
  e$$0.width = z + 2 + "px";
  e$$0.height = h + 2 + "px";
  e$$0.borderRadius = f + "px";
  e$$0.opacity = 0;
  t.className = "sadd" + w;
  var x = mkBtn(u);
  x.a = 1;
  x.ho.appendChild(F);
  x.upi = F;
  x.ho.appendChild(t);
  x.downi = t;
  x.ts = c$$0;
  x.ww = z;
  x.bgm = w;
  x.setText = function(b) {
    var e = document.createElement("div");
    e.className = "nsi sadg" + this.bgm;
    var c = e.style;
    c.position = "absolute";
    c.width = "auto";
    c.color = "#ffffff";
    c.fontWeight = "bold";
    c.textAlign = "center";
    c.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
    c.fontSize = this.ts + "px";
    e.textContent = b;
    document.body.appendChild(e);
    c = Math.ceil(35 + e.offsetWidth);
    document.body.removeChild(e);
    this.btnf.textContent = b;
    this.ww = c;
    this.elem.style.width = c + "px";
    this.upi.style.width = c + "px";
    this.downi.style.width = c + 2 + "px";
    this.btnf.style.width = c + "px";
  };
  c$$0 = document.createElement("div");
  u.appendChild(c$$0);
  x.btnf = c$$0;
  e$$0 = c$$0.style;
  e$$0.position = "absolute";
  e$$0.left = e$$0.top = "0px";
  e$$0.width = z + "px";
  e$$0.height = h + "px";
  e$$0.borderRadius = f + "px";
  c$$0.textContent = b$$0;
  c$$0.className = "nsi";
  e$$0.color = "#ffffff";
  e$$0.opacity = 0.9;
  x.ho.appendChild(c$$0);
  return x;
}
var sos = [];
var clus = [];
var bso;
var u_m = [64, 32, 16, 8, 4, 2, 1];
var lgbsc = 1;
var lgcsc = 1;
var lb_fr = 0;
var login_fr = 0;
var llgmtm = Date.now();
var login_iv = -1;

function loginFade() {
  var b = Date.now();
  var h = (b - llgmtm) / 25;
  llgmtm = b;
  login_fr += 0.05 * h;
  if (choosing_skin) {
    login_fr += 0.06 * h;
  }
  if (1 <= login_fr) {
    login_fr = 1;
    login.style.display = "none";
    cstx.style.display = "none";
    fbh.style.display = "none";
    twth.style.display = "none";
    cskh.style.display = "none";
    grqh.style.display = "none";
    plq.style.display = "none";
    clq.style.display = "none";
    social.style.display = "none";
    login.style.opacity = 1;
    cstx.style.opacity = 1;
    fbh.style.opacity = 1;
    twth.style.opacity = 1;
    cskh.style.opacity = 1;
    grqh.style.opacity = 1;
    plq.style.opacity = 1;
    clq.style.opacity = 1;
    social.style.opacity = 1;
    pskh.style.opacity = 1;
    nskh.style.opacity = 1;
    skodiv.style.opacity = 1;
    tip_fr = -1;
    tips.style.display = "none";
    mc.style.opacity = 1;
    loch.style.opacity = 1;
    clearInterval(login_iv);
    login_iv = -1;
    if (-1 != showlogo_iv) {
      ncka = lgss = lga = 1;
      showLogo(true);
      if (-1 != showlogo_iv) {
        clearInterval(showlogo_iv);
        showlogo_iv = -1;
      }
    }
  }
  else {
    lgcsc = 1 + 0.1 * Math.pow(login_fr, 2);
    b = Math.round(lgbsc * lgcsc * 1E5) / 1E5;
    trf(login, "scale(" + b + "," + b + ")");
    login.style.opacity = 1 - login_fr;
    cstx.style.opacity = 1 - login_fr;
    fbh.style.opacity = 1 - login_fr;
    twth.style.opacity = 1 - login_fr;
    cskh.style.opacity = 1 - login_fr;
    grqh.style.opacity = 1 - login_fr;
    plq.style.opacity = 1 - login_fr;
    clq.style.opacity = 1 - login_fr;
    social.style.opacity = 1 - login_fr;
    pskh.style.opacity = login_fr;
    nskh.style.opacity = login_fr;
    skodiv.style.opacity = login_fr;
    mc.style.opacity = login_fr;
    loch.style.opacity = login_fr;
  }
}
var ss_a = 0;
var ss_sh = 0;
var spinner_shown = false;
var ldmc = document.createElement("canvas");
ldmc.width = 128;
ldmc.height = 128;
ldmc.style.position = "fixed";
ldmc.style.left = "0px";
ldmc.style.top = "0px";
ldmc.style.zIndex = 8388607;
ldmc.style.display = "none";
document.body.appendChild(ldmc);
var lsfr = 0;
var lcldtm = Date.now();
var sstr = "Save";
if ("FR" == country) {
  sstr = "Bien";
}
else {
  if ("BR" == country) {
    sstr = "OK";
  }
}
var sko_btn = o = makeTextBtn(String.fromCharCode(160) + sstr + String.fromCharCode(160), 47, 20, 34, 1);
var skodiv = o.elem;
skodiv.style.zIndex = 53;
skodiv.style.position = "fixed";
skodiv.style.left = "300px";
skodiv.style.top = "300px";
skodiv.style.display = "none";
skodiv.style.opacity = 0;
document.body.appendChild(skodiv);
o.elem.onclick = function() {
  if (playing) {
    try {
      localStorage.snakercv = snake.rcv;
    }
    catch (b) {}
    playing = connected = false;
    dead_mtm = Date.now() - 5E3;
  }
};
var nick = document.getElementById("nick");
var victory = document.getElementById("victory");
var victory_bg = document.getElementById("victory_bg");
var logo = document.getElementById("logo");
var login = document.getElementById("login");
var lastscore = document.getElementById("lastscore");
var nick_holder = document.getElementById("nick_holder");
var victory_holder = document.getElementById("victory_holder");
var pstr = "Play";
if ("DE" == country) {
  pstr = "Spielen";
}
else {
  if ("FR" == country) {
    pstr = "Jouer";
    nick.placeholder = "Surnom";
  }
  else {
    if ("BR" == country) {
      pstr = "Joga";
      nick.placeholder = "Apelido";
    }
  }
}
var play_btn = o = makeTextBtn(String.fromCharCode(160) + pstr + String.fromCharCode(160), 47, 20, 34, 1);
var pbdiv = o.elem;
pbdiv.style.position = "relative";
pbdiv.style.display = "inline-block";
pbdiv.style.marginTop = "20px";
pbdiv.style.marginBottom = "50px";
var playh = document.getElementById("playh");
playh.style.opacity = 0;
playh.appendChild(pbdiv);
var tips = document.getElementById("tips");
var tipss = ["Eat to grow longer!", "Don't run into other snakes!", "When longer, hold the mouse for a speed boost!"];
if ("DE" == country) {
  tipss = ["Esse um zu wachsen!", "Klicke für mehr Geschwindigkeit!", "Bewege dich nicht in andere Schlangen!"];
}
else {
  if ("FR" == country) {
    tipss = ["Mangez de croître!", "Cliquez et vous courrez!", "Ne laissez pas votre tête toucher d'autres serpents!"];
  }
  else {
    if ("BR" == country) {
      tipss = ["Coma para crescer!", "Clique para correr!", "Não deixe que sua cabeça para tocar outras cobras!"];
    }
  }
}
var tip_pos = -1;
var tip_fr = 1.9;
o.elem.onclick = function() {
  if (!play_btn.disabled) {
    if (!(-1 != dead_mtm)) {
      play_btn_click_mtm = Date.now();
      play_btn.setEnabled(false);
      spinner_shown = nick.disabled = true;
      ldmc.style.display = "inline";
      connect();
    }
  }
};
var save_btn = o = makeTextBtn(String.fromCharCode(160) + "Save Message" + String.fromCharCode(160), 47, 20, 34, 2);
var sbdiv = o.elem;
sbdiv.style.position = "relative";
sbdiv.style.display = "inline-block";
sbdiv.style.marginTop = "30px";
sbdiv.style.marginBottom = "50px";
var saveh = document.getElementById("saveh");
saveh.appendChild(sbdiv);
o.elem.onclick = function() {
  if (!save_btn.disabled) {
    var b = asciize(victory.value);
    if (140 < b.length) {
      b = b.substr(0, 140);
    }
    if (5 <= protocol_version) {
      var h = new Uint8Array(2 + b.length);
      h[0] = 255;
      h[1] = 118;
      var c = 0;
      for (; c < b.length; c++) {
        h[c + 2] = b.charCodeAt(c);
      }
    }
    else {
      h = new Uint8Array(1 + b.length);
      h[0] = 118;
      c = 0;
      for (; c < b.length; c++) {
        h[c + 1] = b.charCodeAt(c);
      }
    }
    ws.send(h);
    save_btn.setEnabled(false);
    victory.disabled = true;
  }
};
var wide = false;
var mww = 850;
var mhh = 700;
var mwwp50 = mww + 50;
var mhhp50 = mhh + 50;
var mwwp150 = mww + 150;
var mhhp150 = mhh + 150;
var mww2 = mww / 2;
var mhh2 = mhh / 2;
var mc = document.createElement("canvas");
mc.style.position = "fixed";
mc.style.left = "0px";
mc.style.top = "0px";
mc.style.zIndex = 5;
mc.width = mww;
mc.height = mhh;
mc.className = "nsi";
document.body.appendChild(mc);
mc.style.display = "none";
mc.style.pointerEvents = "none";
var lbh = document.createElement("div");
lbh.className = "nsi";
lbh.style.position = "fixed";
lbh.style.right = "4px";
lbh.style.top = "4px";
lbh.style.textAlign = "center";
lbh.style.width = "255px";
lbh.style.height = "28px";
lbh.style.color = "#ffffff";
lbh.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbh.style.fontSize = "21px";
lbh.style.fontWeight = "bold";
lbh.style.overflow = "hidden";
lbh.style.opacity = 0.5;
lbh.style.zIndex = 7;
lbh.style.display = "none";
lbh.style.cursor = "default";
var lstr = "Leaderboard";
if ("DE" == country) {
  lstr = "Bestenliste";
}
else {
  if ("FR" == country) {
    lstr = "Gagnants";
  }
  else {
    if ("BR" == country) {
      lstr = "Líderes";
    }
  }
}
lbh.textContent = lstr;
trf(lbh, agpu);
document.body.appendChild(lbh);
var lbs = document.createElement("div");
lbs.className = "nsi";
lbs.style.position = "fixed";
lbs.style.textAlign = "center";
lbs.style.right = "4px";
lbs.style.top = "32px";
lbs.style.width = "50px";
lbs.style.height = "800px";
lbs.style.color = "#ffffff";
lbs.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbs.style.fontSize = "12px";
lbs.style.overflow = "hidden";
lbs.style.opacity = 0.7;
lbs.style.zIndex = 7;
lbs.style.display = "none";
lbs.style.cursor = "default";
lbs.style.lineHeight = "150%";
trf(lbs, agpu);
document.body.appendChild(lbs);
var lbn = document.createElement("div");
lbn.className = "nsi";
lbn.style.position = "fixed";
lbn.style.textAlign = "left";
lbn.style.whiteSpace = "nowrap";
lbn.style.right = "64px";
lbn.style.top = "32px";
lbn.style.width = "150px";
lbn.style.height = "800px";
lbn.style.color = "#ffffff";
lbn.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbn.style.fontSize = "12px";
lbn.style.overflow = "hidden";
lbn.style.opacity = 0.7;
lbn.style.zIndex = 8;
lbn.style.display = "none";
lbn.style.cursor = "default";
lbn.style.lineHeight = "150%";
trf(lbn, agpu);
document.body.appendChild(lbn);
var lbp = document.createElement("div");
lbp.className = "nsi";
lbp.style.position = "fixed";
lbp.style.textAlign = "right";
lbp.style.right = "230px";
lbp.style.top = "32px";
lbp.style.width = "30px";
lbp.style.height = "800px";
lbp.style.color = "#ffffff";
lbp.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbp.style.fontSize = "12px";
lbp.style.overflow = "hidden";
lbp.style.opacity = 0.7;
lbp.style.zIndex = 9;
lbp.style.display = "none";
lbp.style.cursor = "default";
lbp.style.lineHeight = "150%";
trf(lbp, agpu);
document.body.appendChild(lbp);
var lbf = document.createElement("div");
lbf.className = "nsi";
lbf.style.position = "fixed";
lbf.style.left = "8px";
lbf.style.bottom = "4px";
lbf.style.width = "200px";
lbf.style.height = "37px";
lbf.style.color = "#ffffff";
lbf.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbf.style.fontSize = "12px";
lbf.style.overflow = "hidden";
lbf.style.opacity = 0.5;
lbf.style.zIndex = 7;
lbf.style.display = "none";
lbf.style.cursor = "default";
lbf.style.lineHeight = "150%";
trf(lbf, agpu);
document.body.appendChild(lbf);
var vcm = document.createElement("div");
vcm.className = "nsi";
vcm.style.position = "fixed";
vcm.style.left = "8px";
vcm.style.top = "4px";
vcm.style.width = "300px";
vcm.style.height = "228px";
vcm.style.color = "#ffffff";
vcm.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
vcm.style.fontSize = "13px";
vcm.style.overflow = "hidden";
vcm.style.wordWrap = "break-word";
vcm.style.opacity = 0.5;
vcm.style.zIndex = 7;
vcm.style.display = "none";
vcm.style.cursor = "default";
trf(vcm, agpu);
document.body.appendChild(vcm);
var loch = document.createElement("div");
loch.className = "nsi";
loch.style.position = "fixed";
loch.style.right = "16px";
loch.style.bottom = "16px";
loch.style.width = loch.style.height = "104px";
loch.style.zIndex = 10;
loch.style.display = "none";
document.body.appendChild(loch);
var loc = document.createElement("img");
var lc = document.createElement("canvas");
lc.width = lc.height = 104;
ctx = lc.getContext("2d");
ctx.save();
ctx.fillStyle = "#485868";
ctx.shadowBlur = 12;
ctx.shadowOffsetY = 3;
ctx.shadowColor = "#000000";
ctx.beginPath();
ctx.arc(52, 52, 40, 0, pi2);
ctx.fill();
ctx.restore();
ctx.fillStyle = "#708090";
ctx.beginPath();
ctx.moveTo(52, 52);
ctx.arc(52, 52, 40, 0, Math.PI / 2);
ctx.lineTo(52, 52);
ctx.fill();
ctx.beginPath();
ctx.moveTo(52, 52);
ctx.arc(52, 52, 40, Math.PI, 3 * Math.PI / 2);
ctx.lineTo(52, 52);
ctx.fill();
ctx.strokeStyle = "#202630";
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(52, 12);
ctx.lineTo(52, 92);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(12, 52);
ctx.lineTo(92, 52);
ctx.stroke();
loc.src = lc.toDataURL();
loc.className = "nsi";
loc.style.position = "absolute";
loc.style.left = "0px";
loc.style.top = "0px";
loc.style.opacity = 0.45;
loc.style.zIndex = 11;
trf(loc, agpu);
loch.appendChild(loc);
var asmc = document.createElement("canvas");
asmc.width = 80;
asmc.height = 80;
asmc.className = "nsi";
asmc.style.position = "absolute";
asmc.style.left = asmc.style.top = "12px";
asmc.style.zIndex = 12;
asmc.style.opacity = 0.25;
loch.appendChild(asmc);
var myloc = document.createElement("img");
lc.width = lc.height = 14;
ctx = lc.getContext("2d");
ctx.fillStyle = "#DDDDDD";
ctx.strokeStyle = "#000000";
ctx.lineWidth = 2;
ctx.beginPath();
ctx.arc(7, 7, 2.5, 0, pi2);
ctx.stroke();
ctx.fill();
myloc.src = lc.toDataURL();
myloc.className = "nsi";
myloc.style.position = "absolute";
myloc.style.left = "0px";
myloc.style.top = "0px";
myloc.style.opacity = 1;
myloc.style.zIndex = 13;
trf(myloc, agpu);
loch.appendChild(myloc);
ctx = mc.getContext("2d");
var bgi2 = document.createElement("canvas");
var bgp2 = null;
var bgw2 = 599;
var bgh2 = 519;
var ii = document.createElement("img");
ii.onload = function() {
  bgi2.width = bgw2;
  bgi2.height = bgh2;
  var b = bgi2.getContext("2d");
  try {
    b.drawImage(this, 0, 0);
    bgp2 = b.createPattern(bgi2, "repeat");
  }
  catch (h) {}
};
ii.src = "/s/bg45.jpg";

function rdgbg() {
  if (ggbg) {
    if (!gbgmc) {
      gbgmc = document.createElement("canvas");
    }
    gbgmc.width = mww;
    gbgmc.height = mhh;
    var b = gbgmc.getContext("2d");
    try {
      b.drawImage(gbgi, 0, 0, 512, 512, 0, 0, mww, mhh);
    }
    catch (h) {}
  }
}
var ggbg = false;
var gbgmc = null;
var gbgi = document.createElement("img");
gbgi.onload = function() {
  ggbg = true;
  rdgbg();
};
gbgi.src = "/s/gbg.jpg";

function newDeadpool() {
  return {
    os: [],
    end_pos: 0,
    add: function(b) {
      if (this.end_pos == this.os.length) {
        this.os.push(b);
      }
      else {
        this.os[this.end_pos] = b;
      }
      this.end_pos++;
    },
    get: function() {
      if (1 <= this.end_pos) {
        this.end_pos--;
        var b = this.os[this.end_pos];
        this.os[this.end_pos] = null;
        return b;
      }
      return null;
    }
  };
}
var flt_a = "ler did no;gas the;gas all;gas every;panis;panus;paynis;my ass;cut your;heil hit;flick your;fingerba;arse;naked;menstr;eat my;suck my;fuk".split(";");
var flt_w = ["ass"];

function gdnm(b) {
  var h = "";
  var c = false;
  var f;
  var w = 0;
  for (; w < b.length; w++) {
    f = b.charCodeAt(w);
    if (32 == f) {
      if (!c) {
        c = true;
        h += " ";
      }
    }
    else {
      c = false;
      h += String.fromCharCode(f);
    }
  }
  b = h.toLowerCase();
  w = flt_a.length - 1;
  for (; 0 <= w; w--) {
    if (0 <= b.indexOf(flt_a[w])) {
      return false;
    }
  }
  b = b.split(" ");
  w = b.length - 1;
  for (; 0 <= w; w--) {
    h = flt_w.length - 1;
    for (; 0 <= h; h--) {
      if (b[w] == flt_w[h]) {
        return false;
      }
    }
  }
  return true;
}
var bpx1;
var bpy1;
var bpx2;
var bpy2;
var fpx1;
var fpy1;
var fpx2;
var fpy2;
var sgsc = 0.9;
var gsc = sgsc;
var nsep = 4.5;
var tasty = 0;
var shifty = false;
var rr;
var gg;
var bb;
var render_mode = 2;
if (is_mobile) {
  render_mode = 1;
}
var wumsts = false;
var rank = 0;
var best_rank = 999999999;
var snake_count = 0;
var biggest_snake_count = 0;
var cm1;
var snakes = [];
var foods = [];
var foods_c = 0;
var preys = [];
var points_dp = newDeadpool();
var os = {};
var lsang = 0;
var want_e = false;
var last_e_mtm = 0;
var sectors = [];
var sector_size = 480;
var sector_count_along_edge = 130;
var spangdv = 4.8;
var nsp1 = 4.25;
var nsp2 = 0.5;
var nsp3 = 12;
var mamu = 0.033;
var mamu2 = 0.028;
var cst = 0.43;
var lfas = [];
var lfc = 128;
i = 0;
for (; i < lfc; i++) {
  j = 0.5 * (1 - Math.cos(Math.PI * (lfc - 1 - i) / (lfc - 1)));
  lfas.push(j);
}
var rfas = [];
var rfc = 43;
i = 0;
for (; i < rfc; i++) {
  j = 0.5 * (1 - Math.cos(Math.PI * (rfc - 1 - i) / (rfc - 1)));
  rfas.push(j);
}
var fao = {};
var fc = 3;
for (; 100 >= fc; fc++) {
  var fas = [];
  i = 0;
  for (; i < fc; i++) {
    j = 0.5 * (1 - Math.cos(Math.PI * (fc - 1 - i) / (fc - 1)));
    fas.push(j);
  }
  fao["a" + fc] = fas;
}
var hfc = 92;
var hfas = new Float32Array(hfc);
i = 0;
for (; i < hfc; i++) {
  j = 0.5 * (1 - Math.cos(Math.PI * (hfc - 1 - i) / (hfc - 1)));
  hfas[i] = j;
}
var afas = [];
var afc = 26;
i = 0;
for (; i < afc; i++) {
  j = 0.5 * (1 - Math.cos(Math.PI * (afc - 1 - i) / (afc - 1)));
  afas.push(j);
}
var nlc = 48;
var vfas = [];
var vfc = 62;
var fvpos = 0;
var fvtg = 0;
var ovxx;
var ovyy;
var fvxs = [];
var fvys = [];
i = 0;
for (; i < vfc; i++) {
  j = 0.5 * (1 - Math.cos(Math.PI * (vfc - 1 - i) / (vfc - 1)));
  j += 0.5 * (0.5 * (1 - Math.cos(Math.PI * j)) - j);
  vfas.push(j);
  fvxs.push(0);
  fvys.push(0);
}

function pwr(b) {
  var h = new Float32Array(125);
  var c = 0;
  for (; 125 > c; c++) {
    h[c] = Math.pow(b, c);
  }
  return h;
}

function pca(b) {
  var h = new Float32Array(125);
  var c = 0;
  for (; 125 > c; c++) {
    h[c] = 1 - Math.pow(1 - b, c);
  }
  return h;
}
var p1a = pca(0.1);
var p35a = pca(0.35);
var pwr4 = pwr(0.4);
var pwr35 = pwr(0.35);
var pwr93 = pwr(0.93);

function setMscps(b) {
  if (b != mscps) {
    mscps = b;
    fmlts = [];
    fpsls = [];
    b = 0;
    for (; b <= mscps; b++) {
      if (b >= mscps) {
        fmlts.push(fmlts[b - 1]);
      }
      else {
        fmlts.push(Math.pow(1 - b / mscps, 2.25));
      }
      if (0 == b) {
        fpsls.push(0);
      }
      else {
        fpsls.push(fpsls[b - 1] + 1 / fmlts[b - 1]);
      }
    }
    var h = fmlts[fmlts.length - 1];
    var c = fpsls[fpsls.length - 1];
    b = 0;
    for (; 2048 > b; b++) {
      fmlts.push(h);
      fpsls.push(c);
    }
  }
}

function startShowGame() {
  llgmtm = Date.now();
  login_iv = setInterval("loginFade()", 25);
  mc.style.opacity = 0;
  mc.style.display = "inline";
  lbh.style.opacity = lbs.style.opacity = lbn.style.opacity = lbp.style.opacity = lbf.style.opacity = vcm.style.opacity = 0;
  loch.style.opacity = 0;
  lb_fr = -1;
}

function setSkin(b, h) {
  b.rcv = h;
  b.er = 6;
  b.ec = "#ffffff";
  b.eca = 0.75;
  b.ppa = 1;
  b.ppc = "#000000";
  b.antenna = false;
  if (19 == h) {
    b.ec = "#ee5500";
    b.er = 4.5;
    b.ppa = 0;
    b.antenna = true;
    b.atba = 0;
    b.atc1 = "#505050";
    b.atc2 = "#FFFFFF";
    b.atia = 0.5;
    b.apbs = true;
    var c = 9;
    b.atx = new Float32Array(c);
    b.aty = new Float32Array(c);
    b.atvx = new Float32Array(c);
    b.atvy = new Float32Array(c);
    b.atax = new Float32Array(c);
    b.atay = new Float32Array(c);
    --c;
    for (; 0 <= c; c--) {
      b.atx[c] = b.xx;
      b.aty[c] = b.yy;
    }
    b.bulb = rabulb;
    b.blbx = -10;
    b.blby = -10;
    b.blbw = 20;
    b.blbh = 20;
    b.bsc = 1;
    b.blba = 1;
  }
  else {
    if (24 == h) {
      b.antenna = true;
      b.atba = 0;
      b.atc1 = "#00688c";
      b.atc2 = "#64c8e7";
      b.atwg = true;
      b.atia = 0.35;
      b.abrot = false;
      c = 8;
      b.atx = new Float32Array(c);
      b.aty = new Float32Array(c);
      b.atvx = new Float32Array(c);
      b.atvy = new Float32Array(c);
      b.atax = new Float32Array(c);
      b.atay = new Float32Array(c);
      --c;
      for (; 0 <= c; c--) {
        b.atx[c] = b.xx;
        b.aty[c] = b.yy;
      }
      b.bulb = acbulb;
      b.blbx = -10;
      b.blby = -10;
      b.blbw = 20;
      b.blbh = 20;
      b.bsc = 1;
      b.blba = 0.75;
    }
    else {
      if (25 == h) {
        b.ec = "#ff5609";
        b.eca = 1;
        b.antenna = true;
        b.atba = 0;
        b.atc1 = "#000000";
        b.atc2 = "#6625c7";
        b.atia = 1;
        b.abrot = true;
        c = 9;
        b.atx = new Float32Array(c);
        b.aty = new Float32Array(c);
        b.atvx = new Float32Array(c);
        b.atvy = new Float32Array(c);
        b.atax = new Float32Array(c);
        b.atay = new Float32Array(c);
        --c;
        for (; 0 <= c; c--) {
          b.atx[c] = b.xx;
          b.aty[c] = b.yy;
        }
        b.bulb = cdbulb;
        b.blbx = -5;
        b.blby = -10;
        b.blbw = 20;
        b.blbh = 20;
        b.bsc = 1.6;
        b.blba = 1;
      }
    }
  }
  c = null;
  if (9 == h) {
    c = [7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 10, 10, 10, 10, 10, 10, 10, 10, 10];
  }
  else {
    if (10 == h) {
      c = [9, 9, 9, 9, 9, 1, 1, 1, 1, 1, 7, 7, 7, 7, 7];
    }
    else {
      if (11 == h) {
        c = [11, 11, 11, 11, 11, 7, 7, 7, 7, 7, 12, 12, 12, 12, 12];
      }
      else {
        if (12 == h) {
          c = [7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 13, 13, 13, 13, 13];
        }
        else {
          if (13 == h) {
            c = [14, 14, 14, 14, 14, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7];
          }
          else {
            if (14 == h) {
              c = [9, 9, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7, 7, 7];
            }
            else {
              if (15 == h) {
                c = [0, 1, 2, 3, 4, 5, 6, 7, 8];
              }
              else {
                if (16 == h) {
                  c = [15, 15, 15, 15, 15, 15, 15, 4, 4, 4, 4, 4, 4, 4];
                }
                else {
                  if (17 == h) {
                    c = [9, 9, 9, 9, 9, 9, 9, 16, 16, 16, 16, 16, 16, 16];
                  }
                  else {
                    if (18 == h) {
                      c = [7, 7, 7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 9, 9];
                    }
                    else {
                      if (19 == h) {
                        c = [9];
                      }
                      else {
                        if (20 == h) {
                          c = [3, 3, 3, 3, 3, 0, 0, 0, 0, 0];
                        }
                        else {
                          if (21 == h) {
                            c = [3, 3, 3, 3, 3, 3, 3, 18, 18, 18, 18, 18, 18, 20, 19, 20, 19, 20, 19, 20, 18, 18, 18, 18, 18, 18];
                          }
                          else {
                            if (22 == h) {
                              c = [5, 5, 5, 5, 5, 5, 5, 9, 9, 9, 9, 9, 9, 9, 13, 13, 13, 13, 13, 13, 13];
                            }
                            else {
                              if (23 == h) {
                                c = [16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 7, 7, 7, 7, 7, 7, 7];
                              }
                              else {
                                if (24 == h) {
                                  c = [23, 23, 23, 23, 23, 23, 23, 23, 23, 18, 18, 18, 18, 18, 18, 18, 18, 18];
                                }
                                else {
                                  if (25 == h) {
                                    c = [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22];
                                  }
                                  else {
                                    h %= 9;
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
              }
            }
          }
        }
      }
    }
  }
  if (c) {
    h = c[0];
  }
  b.rbcs = c;
  b.cv = h;
}

function newSnake(b, h, c, f, w, u) {
  var e = {};
  e.id = b;
  e.xx = h;
  e.yy = c;
  setSkin(e, f);
  f = e.cv;
  e.fnfr = 0;
  e.na = 1;
  e.chl = 0;
  e.tsp = 0;
  e.sfr = 0;
  e.rr = Math.min(255, rrs[f] + Math.floor(20 * Math.random()));
  e.gg = Math.min(255, ggs[f] + Math.floor(20 * Math.random()));
  e.bb = Math.min(255, bbs[f] + Math.floor(20 * Math.random()));
  b = "00" + Math.min(255, Math.max(0, Math.round(e.rr))).toString(16);
  h = "00" + Math.min(255, Math.max(0, Math.round(e.gg))).toString(16);
  c = "00" + Math.min(255, Math.max(0, Math.round(e.bb))).toString(16);
  b = b.substr(b.length - 2);
  h = h.substr(h.length - 2);
  c = c.substr(c.length - 2);
  e.cs = "#" + b + h + c;
  b = "00" + Math.min(255, Math.max(0, Math.round(0.4 * e.rr))).toString(16);
  h = "00" + Math.min(255, Math.max(0, Math.round(0.4 * e.gg))).toString(16);
  c = "00" + Math.min(255, Math.max(0, Math.round(0.4 * e.bb))).toString(16);
  b = b.substr(b.length - 2);
  h = h.substr(h.length - 2);
  c = c.substr(c.length - 2);
  e.cs04 = "#" + b + h + c;
  b = "00" + Math.min(255, Math.max(0, Math.round(0.5 * (255 + e.rr)))).toString(16);
  h = "00" + Math.min(255, Math.max(0, Math.round(0.5 * (255 + e.gg)))).toString(16);
  c = "00" + Math.min(255, Math.max(0, Math.round(0.5 * (255 + e.bb)))).toString(16);
  b = b.substr(b.length - 2);
  h = h.substr(h.length - 2);
  c = c.substr(c.length - 2);
  e.csw = "#" + b + h + c;
  e.sc = 1;
  e.ssp = nsp1 + nsp2 * e.sc;
  e.fsp = e.ssp + 0.1;
  e.msp = nsp3;
  e.fxs = new Float32Array(rfc);
  e.fys = new Float32Array(rfc);
  e.fchls = new Float32Array(rfc);
  e.fpos = 0;
  e.ftg = 0;
  e.fx = 0;
  e.fy = 0;
  e.fchl = 0;
  e.fas = new Float32Array(afc);
  e.fapos = 0;
  e.fatg = 0;
  e.fa = 0;
  e.ehang = w;
  e.wehang = w;
  e.ehl = 1;
  e.msl = 42;
  e.fam = 0;
  e.ang = w;
  e.eang = w;
  e.wang = w;
  e.rex = 0;
  e.rey = 0;
  e.sp = 2;
  if (u) {
    e.lnp = u[u.length - 1];
    e.pts = u;
    e.sct = u.length;
    if (u[0].dying) {
      e.sct--;
    }
  }
  else {
    e.pts = [];
    e.sct = 0;
  }
  e.flpos = 0;
  e.fls = new Float32Array(lfc);
  e.fl = 0;
  e.fltg = 0;
  e.tl = e.sct + e.fam;
  e.cfl = e.tl;
  e.scang = 1;
  e.dead_amt = 0;
  e.alive_amt = 0;
  snakes.splice(0, 0, e);
  return os["s" + e.id] = e;
}

function snl(b) {
  var h = b.tl;
  b.tl = b.sct + b.fam;
  h = b.tl - h;
  var c = b.flpos;
  var f = 0;
  for (; f < lfc; f++) {
    b.fls[c] -= h * lfas[f];
    c++;
    if (c >= lfc) {
      c = 0;
    }
  }
  b.fl = b.fls[b.flpos];
  b.fltg = lfc;
  if (b == snake) {
    wumsts = true;
  }
}

function newFood(b, h, c, f, w, u) {
  var e = {};
  e.id = b;
  e.xx = h;
  e.yy = c;
  e.rx = h;
  e.ry = c;
  e.rsp = w ? 2 : 1;
  e.cv = u;
  e.rad = 1E-5;
  e.sz = f;
  b = per_color_imgs[e.cv];
  e.cv2 = Math.floor(b.ic * gsc * e.sz / 16.5);
  if (0 > e.cv2) {
    e.cv2 = 0;
  }
  if (e.cv2 >= b.ic) {
    e.cv2 = b.ic - 1;
  }
  if (testing) {
    if (!window.biggestcv2) {
      window.biggestcv2 = e.cv2;
    }
    if (e.cv2 > window.biggestcv2) {
      window.biggestcv2 = e.cv2;
      console.log("biggest cv2 seen: " + e.cv2 + " out of " + (b.ic - 1) + " (fo.sz = " + e.sz + " which means its server-side rad is " + 5 * e.sz + ")");
    }
  }
  e.fi = b.imgs[e.cv2];
  e.fw = b.fws[e.cv2];
  e.fh = b.fhs[e.cv2];
  e.fw2 = b.fw2s[e.cv2];
  e.fh2 = b.fh2s[e.cv2];
  e.ofi = b.oimgs[e.cv2];
  e.ofw = b.ofws[e.cv2];
  e.ofh = b.ofhs[e.cv2];
  e.ofw2 = b.ofw2s[e.cv2];
  e.ofh2 = b.ofh2s[e.cv2];
  e.gcv = Math.floor(b.ic * gsc * (0.25 + 0.75 * e.sz / 16.5));
  if (0 > e.gcv) {
    e.gcv = 0;
  }
  if (e.gcv >= b.ic) {
    e.gcv = b.ic - 1;
  }
  e.gfi = b.gimgs[e.gcv];
  e.gfw = b.gfws[e.gcv];
  e.gfh = b.gfhs[e.gcv];
  e.gfw2 = b.gfw2s[e.gcv];
  e.gfh2 = b.gfh2s[e.gcv];
  e.g2cv = Math.floor(b.ic * gsc * 2 * (0.25 + 0.75 * e.sz / 16.5));
  if (0 > e.g2cv) {
    e.g2cv = 0;
  }
  if (e.g2cv >= b.ic) {
    e.g2cv = b.ic - 1;
  }
  e.g2fi = b.gimgs[e.g2cv];
  e.g2fw = b.gfws[e.g2cv];
  e.g2fh = b.gfhs[e.g2cv];
  e.g2fw2 = b.gfw2s[e.g2cv];
  e.g2fh2 = b.gfh2s[e.g2cv];
  e.fr = 0;
  e.gfr = 64 * Math.random();
  e.gr = 0.65 + 0.1 * e.sz;
  e.wsp = 0.0225 * (2 * Math.random() - 1);
  e.eaten_fr = 0;
  e.eaten_fr4 = 0;
  return foods[foods_c++] = e;
}

function newPrey(b, h, c, f, w, u, e, z, F) {
  var t = {};
  t.id = b;
  t.xx = h;
  t.yy = c;
  t.rad = 1E-5;
  t.sz = f;
  t.cv = w;
  t.dir = u;
  t.wang = e;
  t.ang = z;
  t.sp = F;
  t.fr = 0;
  t.gfr = 64 * Math.random();
  t.gr = 0.5 + 0.15 * Math.random() + 0.1 * t.sz;
  t.rr = Math.min(255, rrs[w]);
  t.gg = Math.min(255, ggs[w]);
  t.bb = Math.min(255, bbs[w]);
  b = "00" + Math.min(255, Math.max(0, Math.round(t.rr))).toString(16);
  h = "00" + Math.min(255, Math.max(0, Math.round(t.gg))).toString(16);
  c = "00" + Math.min(255, Math.max(0, Math.round(t.bb))).toString(16);
  b = b.substr(b.length - 2);
  h = h.substr(h.length - 2);
  c = c.substr(c.length - 2);
  t.cs = "#" + b + h + c;
  t.cv2 = Math.floor(per_color_imgs[t.cv].pr_imgs.length * gsc * t.sz / 9);
  if (0 > t.cv2) {
    t.cv2 = 0;
  }
  if (t.cv2 >= per_color_imgs[t.cv].pr_imgs.length) {
    t.cv2 = per_color_imgs[t.cv].pr_imgs.length - 1;
  }
  t.fi = per_color_imgs[t.cv].pr_imgs[t.cv2];
  t.fw = per_color_imgs[t.cv].pr_fws[t.cv2];
  t.fh = per_color_imgs[t.cv].pr_fhs[t.cv2];
  t.fw2 = per_color_imgs[t.cv].pr_fw2s[t.cv2];
  t.fh2 = per_color_imgs[t.cv].pr_fh2s[t.cv2];
  t.gcv = per_color_imgs[t.cv].gimgs.length - 1;
  t.gfi = per_color_imgs[t.cv].gimgs[t.gcv];
  t.gfw = per_color_imgs[t.cv].gfws[t.gcv];
  t.gfh = per_color_imgs[t.cv].gfhs[t.gcv];
  t.gfw2 = per_color_imgs[t.cv].gfw2s[t.gcv];
  t.gfh2 = per_color_imgs[t.cv].gfh2s[t.gcv];
  t.fxs = new Float32Array(rfc);
  t.fys = new Float32Array(rfc);
  t.fpos = 0;
  t.ftg = 0;
  t.fx = 0;
  t.fy = 0;
  t.eaten = false;
  t.eaten_fr = 0;
  t.eaten_fr4 = 0;
  preys.push(t);
  return t;
}
var kdmc = document.createElement("canvas");
kdmc.width = kdmc.height = 32;
ctx = kdmc.getContext("2d");
ctx.fillStyle = "#FF9966";
ctx.arc(16, 16, 16, 0, pi2);
ctx.fill();
var sz = 52;
var komc = document.createElement("canvas");
komc.width = komc.height = sz;
ctx = komc.getContext("2d");
map = ctx.getImageData(0, 0, sz, sz);
imgd = map.data;
l = imgd.length;
p = yy = xx = 0;
for (; p < l; p += 4) {
  var v = Math.abs(Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2)) - 16);
  v = 4 >= v ? 1 - v / 4 : 0;
  v = 0.8 * v;
  imgd[p] = imgd[p + 1] = imgd[p + 2] = 0;
  imgd[p + 3] = Math.floor(255 * v);
  xx++;
  if (xx >= sz) {
    xx = 0;
    yy++;
  }
}
ctx.putImageData(map, 0, 0);
sz = 62;
var ksmc = document.createElement("canvas");
ksmc.width = ksmc.height = sz;
ctx = ksmc.getContext("2d");
map = ctx.getImageData(0, 0, sz, sz);
imgd = map.data;
l = imgd.length;
p = yy = xx = 0;
for (; p < l; p += 4) {
  v = Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 + 3 - yy, 2)) - 15;
  v *= 0.1;
  if (0 > v) {
    v = -v;
  }
  if (1 < v) {
    v = 1;
  }
  v = 1 - v;
  v *= 0.25;
  imgd[p] = imgd[p + 1] = imgd[p + 2] = 0;
  imgd[p + 3] = Math.floor(255 * v);
  xx++;
  if (xx >= sz) {
    xx = 0;
    yy++;
  }
}
ctx.putImageData(map, 0, 0);
var rabulb = document.createElement("canvas");
rabulb.width = rabulb.height = 64;
ctx = rabulb.getContext("2d");
var g = ctx.createRadialGradient(32, 32, 1, 32, 32, 31);
g.addColorStop(0, "rgba(255, 255, 255, 1)");
g.addColorStop(0.83, "rgba(150,150,150, 1)");
g.addColorStop(0.84, "rgba(80,80,80, 1)");
g.addColorStop(0.99, "rgba(80,80,80, 1)");
g.addColorStop(1, "rgba(80,80,80, 0)");
ctx.fillStyle = g;
ctx.fillRect(0, 0, 64, 64);
var cdbulb = document.createElement("canvas");
cdbulb.width = 84;
cdbulb.height = 84;
var cdbulb2 = document.createElement("canvas");
cdbulb2.width = 84;
cdbulb2.height = 84;
ctx = cdbulb2.getContext("2d");
ctx.fillStyle = "#ff5609";
ctx.fillRect(13, 10, 29, 64);
ctx.fillRect(13, 10, 58, 22);
ctx.fillRect(13, 54, 58, 22);
ctx = cdbulb.getContext("2d");
ctx.shadowColor = "#000000";
ctx.shadowBlur = 20;
ctx.drawImage(cdbulb2, 0, 0);
ctx.drawImage(cdbulb2, 0, 0);
var acbulb = document.createElement("canvas");
acbulb.width = acbulb.height = 64;
ctx = acbulb.getContext("2d");
g = ctx.createRadialGradient(32, 32, 1, 32, 32, 31);
g.addColorStop(0, "rgba(255, 128, 128, 1)");
g.addColorStop(0.5, "rgba(222, 3, 3, 1)");
g.addColorStop(0.96, "rgba(157, 18, 18, 1)");
g.addColorStop(1, "rgba(0,0,0, 0)");
ctx.fillStyle = g;
ctx.fillRect(0, 0, 64, 64);
var colc;
if (testing) {
  colc = document.createElement("canvas");
  colc.width = 256;
  colc.height = 66;
  colc.style.position = "fixed";
  colc.style.left = "0px";
  colc.style.top = "200px";
  colc.style.zIndex = 2147483647;
  document.body.appendChild(colc);
}
var pbx = new Float32Array(32767);
var pby = new Float32Array(32767);
var pba = new Float32Array(32767);
var pbu = new Uint8Array(32767);
var per_color_imgs = [];
var rrs = [192, 144, 128, 128, 238, 255, 255, 255, 224, 255, 144, 80, 255, 40, 100, 120, 72, 160, 255, 56, 56, 62, 255, 101];
var ggs = [128, 153, 208, 255, 238, 160, 144, 64, 48, 255, 153, 80, 192, 136, 117, 134, 84, 80, 224, 68, 68, 19, 86, 200];
var bbs = [255, 255, 208, 128, 112, 96, 144, 64, 224, 255, 255, 80, 80, 96, 255, 255, 255, 255, 64, 255, 255, 160, 9, 232];
var max_skin_cv = 24;
i = 0;
for (; i < rrs.length; i++) {
  o = {
    imgs: [],
    fws: [],
    fhs: [],
    fw2s: [],
    fh2s: [],
    gimgs: [],
    gfws: [],
    gfhs: [],
    gfw2s: [],
    gfh2s: [],
    oimgs: [],
    ofws: [],
    ofhs: [],
    ofw2s: [],
    ofh2s: []
  };
  var rs = "00" + rrs[i].toString(16);
  var gs = "00" + ggs[i].toString(16);
  var bs = "00" + bbs[i].toString(16);
  rs = rs.substr(rs.length - 2);
  gs = gs.substr(gs.length - 2);
  bs = bs.substr(bs.length - 2);
  o.cs = "#" + rs + gs + bs;
  sz = 62;
  var kfmc = document.createElement("canvas");
  kfmc.width = kfmc.height = sz;
  ctx = kfmc.getContext("2d");
  map = ctx.getImageData(0, 0, sz, sz);
  imgd = map.data;
  l = imgd.length;
  p = yy = xx = 0;
  for (; p < l; p += 4) {
    v = Math.abs(Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2)) - 16);
    v = 15 >= v ? 1 - v / 15 : 0;
    imgd[p] = rrs[i];
    imgd[p + 1] = ggs[i];
    imgd[p + 2] = bbs[i];
    imgd[p + 3] = Math.floor(255 * v);
    xx++;
    if (xx >= sz) {
      xx = 0;
      yy++;
    }
  }
  ctx.putImageData(map, 0, 0);
  o.kfmc = kfmc;
  var ksz = 48;
  var ksz2 = ksz / 2;
  var kmc = document.createElement("canvas");
  kmc.width = kmc.height = ksz;
  ctx = kmc.getContext("2d");
  ctx.fillStyle = "#FFFFFF";
  ctx.arc(ksz2, ksz2, ksz2, 0, pi2);
  ctx.fill();
  map = ctx.getImageData(0, 0, ksz, ksz);
  imgd = map.data;
  l = imgd.length;
  yy = xx = 0;
  var kmcs = [];
  j = 0;
  for (; 7 > j; j++) {
    p = xx = yy = 0;
    for (; p < l; p += 4) {
      v = Math.pow(Math.max(0, Math.min(1, 1 - Math.abs(yy - ksz2) / ksz2)), 0.35);
      var v2 = Math.max(0, Math.min(1, 1 - Math.sqrt(Math.pow(xx - ksz2, 2) + Math.pow(yy - ksz2, 2)) / 34));
      v = v + 0.375 * (v2 - v);
      v = v * (1.22 - 0.44 * j / 6);
      rr = rrs[i];
      gg = ggs[i];
      bb = bbs[i];
      imgd[p] = Math.max(0, Math.min(255, Math.floor(rr * v)));
      imgd[p + 1] = Math.max(0, Math.min(255, Math.floor(gg * v)));
      imgd[p + 2] = Math.max(0, Math.min(255, Math.floor(bb * v)));
      xx++;
      if (xx >= ksz) {
        xx = 0;
        yy++;
      }
    }
    ctx.putImageData(map, 0, 0);
    var kmc2 = document.createElement("canvas");
    kmc2.width = kmc2.height = ksz;
    var ctx2 = kmc2.getContext("2d");
    ctx2.drawImage(kmc, 0, 0);
    if (10 == i) {
      k = -1;
      for (; 1 >= k; k++) {
        var tx = ksz2 + ksz2 / 16 * Math.cos(2 * Math.PI * k / 8) * 13;
        var ty = ksz2 + ksz2 / 16 * Math.sin(2 * Math.PI * k / 8) * 13;
        ctx2.fillStyle = "#FFFFFF";
        ctx2.beginPath();
        m = 0;
        for (; 5 >= m; m++) {
          xx = tx + ksz / 32 * Math.cos(2 * Math.PI * m / 5) * 0.05 * 24;
          yy = ty + ksz / 32 * Math.sin(2 * Math.PI * m / 5) * 0.05 * 24;
          if (0 == m) {
            ctx2.moveTo(xx, yy);
          }
          else {
            ctx2.lineTo(xx, yy);
          }
          xx = tx + ksz / 32 * Math.cos(2 * Math.PI * (m + 0.5) / 5) * 3.1;
          yy = ty + ksz / 32 * Math.sin(2 * Math.PI * (m + 0.5) / 5) * 3.1;
          ctx2.lineTo(xx, yy);
        }
        ctx2.fill();
      }
    }
    else {
      if (19 == i) {
        k = -2;
        for (; 2 >= k; k++) {
          tx = ksz2 + ksz2 / 16 * Math.cos(2 * Math.PI * k / 15) * 13;
          ty = ksz2 + ksz2 / 16 * Math.sin(2 * Math.PI * k / 15) * 13;
          ctx2.save();
          ctx2.globalAlpha = 0.7;
          ctx2.fillStyle = "#FFFFFF";
          ctx2.beginPath();
          m = 0;
          for (; 5 >= m; m++) {
            xx = tx + ksz / 32 * Math.cos(2 * Math.PI * m / 5) * 0.05 * 12;
            yy = ty + ksz / 32 * Math.sin(2 * Math.PI * m / 5) * 0.05 * 12;
            if (0 == m) {
              ctx2.moveTo(xx, yy);
            }
            else {
              ctx2.lineTo(xx, yy);
            }
            xx = tx + ksz / 32 * Math.cos(2 * Math.PI * (m + 0.5) / 5) * 1.55;
            yy = ty + ksz / 32 * Math.sin(2 * Math.PI * (m + 0.5) / 5) * 1.55;
            ctx2.lineTo(xx, yy);
          }
          ctx2.fill();
          ctx2.restore();
        }
      }
      else {
        if (20 == i) {
          k = -1.5;
          for (; 1.5 >= k; k++) {
            tx = ksz2 + ksz2 / 16 * Math.cos(2 * Math.PI * k / 15) * 13;
            ty = ksz2 + ksz2 / 16 * Math.sin(2 * Math.PI * k / 15) * 13;
            ctx2.save();
            ctx2.globalAlpha = 0.7;
            ctx2.fillStyle = "#FFFFFF";
            ctx2.beginPath();
            m = 0;
            for (; 5 >= m; m++) {
              xx = tx + ksz2 / 16 * Math.cos(2 * Math.PI * m / 5) * 0.05 * 14;
              yy = ty + ksz2 / 16 * Math.sin(2 * Math.PI * m / 5) * 0.05 * 14;
              if (0 == m) {
                ctx2.moveTo(xx, yy);
              }
              else {
                ctx2.lineTo(xx, yy);
              }
              xx = tx + ksz2 / 16 * Math.cos(2 * Math.PI * (m + 0.5) / 5) * 1.8;
              yy = ty + ksz2 / 16 * Math.sin(2 * Math.PI * (m + 0.5) / 5) * 1.8;
              ctx2.lineTo(xx, yy);
            }
            ctx2.fill();
            ctx2.restore();
          }
        }
      }
    }
    kmcs.push(kmc2);
  }
  o.kmcs = kmcs;
  per_color_imgs.push(o);
  j = 2.8;
  for (; 18.8 >= j; j += 1) {
    var cc = document.createElement("canvas");
    sz = Math.ceil(2.5 * j + 28);
    cc.width = cc.height = sz;
    ctx = cc.getContext("2d");
    ctx.fillStyle = o.cs;
    ctx.arc(sz / 2, sz / 2, 0.65 * j, 0, pi2);
    ctx.shadowBlur = 12;
    ctx.shadowOffsetY = 0;
    ctx.shadowColor = "#" + rs + gs + bs;
    ctx.globalAlpha = 0.8;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.fill();
    o.imgs.push(cc);
    o.fws.push(sz);
    o.fhs.push(sz);
    o.fw2s.push(sz / 2);
    o.fh2s.push(sz / 2);
    sz = Math.ceil(8 * j + 6);
    cc = document.createElement("canvas");
    cc.width = cc.height = sz;
    ctx = cc.getContext("2d");
    g = ctx.createRadialGradient(sz / 2, sz / 2, 1, sz / 2, sz / 2, 4 * j);
    g.addColorStop(0, "rgba(" + rrs[i] + ", " + ggs[i] + ", " + bbs[i] + ", 1)");
    g.addColorStop(1, "rgba(" + rrs[i] + ", " + ggs[i] + ", " + bbs[i] + ", 0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, sz, sz);
    o.gimgs.push(cc);
    o.gfws.push(sz);
    o.gfhs.push(sz);
    o.gfw2s.push(sz / 2);
    o.gfh2s.push(sz / 2);
    cc = document.createElement("canvas");
    sz = Math.ceil(1.3 * j + 6);
    cc.width = cc.height = sz;
    ctx = cc.getContext("2d");
    var eam = 0.2;
    g = ctx.createRadialGradient(sz / 2, sz / 2, 0, sz / 2, sz / 2, j / 2);
    g.addColorStop(0, "rgba(" + rrs[i] + ", " + ggs[i] + ", " + bbs[i] + ", 1)");
    g.addColorStop(0.99, "rgba(" + Math.floor(rrs[i] * eam) + ", " + Math.floor(ggs[i] * eam) + ", " + Math.floor(bbs[i] * eam) + ", 1)");
    g.addColorStop(1, "rgba(" + Math.floor(rrs[i] * eam) + ", " + Math.floor(ggs[i] * eam) + ", " + Math.floor(bbs[i] * eam) + ", 0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, sz, sz);
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.arc(sz / 2, sz / 2, 0.65 * j, 0, pi2);
    ctx.globalAlpha = 1;
    ctx.stroke();
    o.oimgs.push(cc);
    o.ofws.push(sz);
    o.ofhs.push(sz);
    o.ofw2s.push(sz / 2);
    o.ofh2s.push(sz / 2);
  }
  o.ic = o.imgs.length;
  o.pr_imgs = [];
  o.pr_fws = [];
  o.pr_fhs = [];
  o.pr_fw2s = [];
  o.pr_fh2s = [];
  j = 3;
  for (; 24 >= j; j += 1) {
    cc = document.createElement("canvas");
    sz = Math.ceil(2 * j + 38);
    cc.width = cc.height = sz;
    ctx = cc.getContext("2d");
    ctx.fillStyle = o.cs;
    ctx.arc(sz / 2, sz / 2, j / 2, 0, pi2);
    ctx.shadowBlur = 22;
    ctx.shadowOffsetY = 0;
    ctx.shadowColor = "#" + rs + gs + bs;
    ctx.fill();
    ctx.fill();
    o.pr_imgs.push(cc);
    o.pr_fws.push(sz);
    o.pr_fhs.push(sz);
    o.pr_fw2s.push(sz / 2);
    o.pr_fh2s.push(sz / 2);
  }
}
if (testing) {
  ctx = colc.getContext("2d");
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, colc.width, colc.height);
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "10px Arial, Helvetica Neue, Helvetica, sans-serif";
  ctx.textBaseline = "top";
  ctx.textAlign = "center";
  i = yy = xx = 0;
  for (; i < rrs.length; i++) {
    var pci = per_color_imgs[i];
    kmc = pci.kmcs[0];
    ctx.drawImage(kmc, 0, 0, kmc.width, kmc.height, xx, yy, 16, 16);
    ntx = o.xx + o.fx;
    nty = o.yy + o.fy;
    ntx = mww2 + (ntx - view_xx) * gsc;
    nty = mhh2 + (nty - view_yy) * gsc;
    ctx.fillText("" + i, xx + 8, yy + 16);
    xx += 16;
    if (xx > colc.width - 16) {
      xx = 0;
      yy += 28;
    }
  }
}
var view_xx = 0;
var view_yy = 0;
var view_ang = 0;
var view_dist = 0;
var fvx = 0;
var fvy = 0;
var xm = 0;
var ym = 0;
var lsxm = 0;
var lsym = 0;
var snake = null;
var dhx;
var dhy;
var hsz;
var fr = 0;
var lfr = 0;
var ltm = Date.now();
var vfr = 0;
var vfrb = 0;
var avfr = 0;
var fr2 = 0;
var lfr2 = 0;
var vfrb2 = 0;
var cptm = 0;
var lptm = 0;
var lpstm = 0;
var last_ping_mtm = 0;
var lagging = false;
var lag_mult = 1;
var wfpr = false;
var high_quality = true;
var gla = 1;
var wdfg = 0;
var qsm = 1;
var mqsm = 1.7;
var playing = false;
var connected = false;
var want_close_socket = false;
var want_victory_message = false;
var want_victory_focus = false;
var want_hide_victory = 0;
var hvfr = 0;
var dead_mtm = -1;
var at2lt = new Float32Array(65536);
yy = 0;
for (; 256 > yy; yy++) {
  xx = 0;
  for (; 256 > xx; xx++) {
    at2lt[yy << 8 | xx] = Math.atan2(yy - 128, xx - 128);
  }
}
var kd_l_frb = 0;
var kd_r_frb = 0;
var kd_l = false;
var kd_r = false;
var kd_u = false;
var lkstm = 0;
var social = document.createElement("iframe");
try {
  social.frameBorder = 0;
}
catch (b$$35) {}
social.style.position = "fixed";
social.style.left = "6px";
social.style.top = "6px";
social.style.border = "0px";
social.style.zIndex = 9999999;
social.width = 200;
social.height = 150;
social.src = "/social-box/";
document.body.appendChild(social);
var oef = function() {
  var b = Date.now();
  avfr = vfr = (b - ltm) / 8;
  ltm = b;
  if (!choosing_skin) {
    if (!lagging) {
      if (wfpr) {
        if (420 < b - last_ping_mtm) {
          lagging = true;
        }
      }
    }
    if (lagging) {
      lag_mult *= 0.85;
      if (0.01 > lag_mult) {
        lag_mult = 0.01;
      }
    }
    else {
      if (1 > lag_mult) {
        lag_mult += 0.05;
        if (1 <= lag_mult) {
          lag_mult = 1;
        }
      }
    }
  }
  if (120 < vfr) {
    vfr = 120;
  }
  vfr *= lag_mult;
  etm *= lag_mult;
  lfr = fr;
  fr += vfr;
  vfrb = Math.floor(fr) - Math.floor(lfr);
  lfr2 = fr2;
  fr2 += 2 * vfr;
  vfrb2 = Math.floor(fr2) - Math.floor(lfr2);
  if (kd_l) {
    kd_l_frb += vfrb;
  }
  if (kd_r) {
    kd_r_frb += vfrb;
  }
  if (spinner_shown) {
    lsfr += avfr;
    var h = ldmc.getContext("2d");
    h.clearRect(0, 0, 512, 128);
    var c;
    var f;
    var w = 1;
    for (; 2 >= w; w++) {
      h.beginPath();
      if (1 == w) {
        h.fillStyle = "#60FF70";
        f = 0;
      }
      else {
        h.fillStyle = "#9850FF";
        f = Math.PI;
      }
      var u = 0;
      for (; 256 >= u; u++) {
        c = 32 + 5 * Math.cos(f + lsfr / 6 + 8 * u / 256) + 8 * u / 256;
        if (256 == u) {
          c += 10;
        }
        xx = 64 + Math.cos(f + lsfr / 44 + 0.8 * Math.PI * u / 256) * c * 1.25;
        yy = 64 + Math.sin(f + lsfr / 44 + 0.8 * Math.PI * u / 256) * c;
        if (0 == u) {
          h.moveTo(xx, yy);
        }
        else {
          h.lineTo(xx, yy);
        }
      }
      c = 32;
      xx = 64 + Math.cos(f + lsfr / 44 + 0.8 * Math.PI * (u + 47) / 256) * c * 1.25;
      yy = 64 + Math.sin(f + lsfr / 44 + 0.8 * Math.PI * (u + 47) / 256) * c;
      h.lineTo(xx, yy);
      u = 256;
      for (; 0 <= u; u--) {
        c = 32 + 5 * Math.cos(f + lsfr / 6 + 8 * u / 256) - 8 * u / 256;
        if (256 == u) {
          c -= 10;
        }
        xx = 64 + Math.cos(f + lsfr / 44 + 0.8 * Math.PI * u / 256) * c * 1.25;
        yy = 64 + Math.sin(f + lsfr / 44 + 0.8 * Math.PI * u / 256) * c;
        h.lineTo(xx, yy);
      }
      h.fill();
    }
    if (connecting) {
      ss_a += avfr / 86;
      if (1 <= ss_a) {
        ss_a = 1;
      }
      ss_sh += avfr / 93;
      if (1 <= ss_sh) {
        ss_sh = 1;
      }
    }
    else {
      ss_a -= avfr / 86;
      if (0 >= ss_a) {
        ss_sh = ss_a = 0;
        ldmc.style.display = "none";
        trf(ldmc, "");
      }
    }
    ldmc.style.opacity = ss_a;
    u = Math.round(0.1 + 0.9 * ss_sh * (1 + 2 * Math.pow(1 - ss_a, 2)) * 1E5) / 1E5;
    trf(ldmc, "scale(" + u + "," + u + ")");
  }
  if (-1 != play_btn_click_mtm && 6666 < b - play_btn_click_mtm) {
    u = document.createElement("img");
    f = [];
    f.push("bso=" + encodeURIComponent(bso));
    if (bso) {
      var e;
      for (e in bso) {
        f.push(e + "=" + encodeURIComponent(bso[e]));
      }
    }
    f.push("waiting_for_sos=" + (waiting_for_sos ? "true" : "false"));
    f.push("soslen=" + sos.length);
    u.src = "http://slither.io/cnc.jpg?" + f.join("&");
    play_btn_click_mtm = -1;
  }
  if (waiting_for_sos) {
    if (b > sos_ready_after_mtm) {
      if (!connecting) {
        if (!connected) {
          connect();
        }
      }
    }
  }
  if (connecting) {
    if (3E3 < b - start_connect_mtm) {
      if (bso) {
        bso.tainted = true;
      }
      connect();
    }
  }
  if (choosing_skin) {
    u = snakes.length - 1;
    for (; 0 <= u; u--) {
      e = snakes[u];
      w = e.pts.length - 1;
      for (; 0 <= w; w--) {
        e.pts[w].yy = grd / 2 + 15 * Math.cos(w / 4 + fr / 19) * (1 - w / e.pts.length);
      }
    }
    view_xx -= vfr;
  }
  if (playing) {
    if (high_quality) {
      if (1 > gla) {
        gla += 0.0075 * vfr;
        if (1 < gla) {
          gla = 1;
        }
      }
      if (1 < qsm) {
        qsm -= 4E-5 * vfr;
        if (1 > qsm) {
          qsm = 1;
        }
      }
    }
    else {
      if (0 < gla) {
        gla -= 0.0075 * vfr;
        if (0 > gla) {
          gla = 0;
        }
      }
      if (qsm < mqsm) {
        qsm += 4E-5 * vfr;
        if (qsm > mqsm) {
          qsm = mqsm;
        }
      }
    }
  }
  if (0 != want_hide_victory) {
    if (1 == want_hide_victory) {
      hvfr += 0.02 * vfr;
      if (1 <= hvfr) {
        hvfr = 0;
        want_hide_victory = 2;
        victory_holder.style.opacity = 1;
        saveh.style.opacity = 1;
        victory_holder.style.display = "none";
        saveh.style.display = "none";
        nick_holder.style.opacity = 0;
        playh.style.opacity = 0;
        smh.style.opacity = 0;
        nick_holder.style.display = "inline-block";
        playh.style.display = "block";
        smh.style.display = "block";
      }
      else {
        victory_holder.style.opacity = 1 - hvfr;
        saveh.style.opacity = 1 - hvfr;
      }
    }
    else {
      if (2 == want_hide_victory) {
        hvfr += 0.02 * vfr;
        if (1 <= hvfr) {
          hvfr = 1;
          want_hide_victory = 0;
        }
        nick_holder.style.opacity = hvfr;
        playh.style.opacity = hvfr;
        smh.style.opacity = hvfr;
      }
    }
  }
  if (1 != login_fr) {
    if (-1 != tip_fr) {
      tip_fr += 0.017 * vfr;
      if (tip_fr >= pi2) {
        tip_fr -= pi2;
        tip_pos++;
        if (tip_pos >= tipss.length) {
          tip_pos = 0;
        }
        tips.textContent = tipss[tip_pos];
      }
      w = 0.5 - 0.5 * Math.cos(tip_fr);
      tips.style.opacity = Math.round(1E5 * Math.pow(w, 0.5)) / 1E5;
    }
  }
  if (-1 == dead_mtm) {
    if (-1 != lb_fr) {
      if (1 != lb_fr) {
        lb_fr += 0.01 * vfr;
        if (1 <= lb_fr) {
          lb_fr = 1;
        }
        lbh.style.opacity = 0.85 * lb_fr;
        lbs.style.opacity = lbn.style.opacity = lbp.style.opacity = lbf.style.opacity = vcm.style.opacity = lb_fr;
      }
    }
  }
  else {
    if (1600 < b - dead_mtm) {
      if (-1 == login_iv) {
        login_iv = -2;
        login.style.display = "inline";
        try {
          if ("1" != localStorage.edttsg) {
            cstx.style.display = "inline";
          }
          else {
            cskh.style.display = "inline";
          }
        }
        catch (z) {}
        fbh.style.display = "inline";
        twth.style.display = "inline";
        plq.style.display = "inline";
        clq.style.display = "inline";
        grqh.style.display = "inline";
        social.style.display = "inline";
        if (want_victory_focus) {
          want_victory_focus = false;
          victory.focus();
        }
      }
      if (-2 == login_iv) {
        login_fr -= 0.004 * vfr;
        if (choosing_skin) {
          login_fr -= 0.007 * vfr;
        }
        lb_fr = login_fr;
        if (0 >= login_fr) {
          login_fr = 0;
          dead_mtm = -1;
          nick.disabled = false;
          nick.focus();
          lb_fr = -1;
          playing = false;
          if (choosing_skin) {
            choosing_skin = false;
            resetGame();
            pskh.style.display = "none";
            nskh.style.display = "none";
            skodiv.style.display = "none";
          }
        }
        pbdiv.style.opacity = 1 - 0.5 * Math.max(0, Math.min(1, 6 * login_fr));
        lgcsc = 1 + 0.1 * Math.pow(login_fr, 2);
        u = Math.round(lgbsc * lgcsc * 1E5) / 1E5;
        if (1 == u) {
          trf(login, "");
        }
        else {
          trf(login, "scale(" + u + "," + u + ")");
        }
        login.style.opacity = 1 - login_fr;
        cstx.style.opacity = 1 - login_fr;
        fbh.style.opacity = 1 - login_fr;
        twth.style.opacity = 1 - login_fr;
        cskh.style.opacity = 1 - login_fr;
        grqh.style.opacity = 1 - login_fr;
        plq.style.opacity = 1 - login_fr;
        clq.style.opacity = 1 - login_fr;
        social.style.opacity = 1 - login_fr;
        pskh.style.opacity = login_fr;
        nskh.style.opacity = login_fr;
        skodiv.style.opacity = login_fr;
        mc.style.opacity = login_fr;
        loch.style.opacity = login_fr;
        lbh.style.opacity = 0.85 * lb_fr;
        lbs.style.opacity = lbn.style.opacity = lbp.style.opacity = lbf.style.opacity = vcm.style.opacity = lb_fr;
      }
    }
  }
  if (want_close_socket) {
    if (-1 == dead_mtm) {
      want_close_socket = false;
      if (ws) {
        ws.close();
        ws = null;
        playing = connected = false;
      }
      resetGame();
    }
  }
  if (want_victory_message) {
    victory_bg.style.opacity = 0.92 + 0.08 * Math.cos(fr / 10);
  }
  if (connected) {
    if (0 < kd_l_frb || 0 < kd_r_frb) {
      if (150 < b - lkstm) {
        lkstm = b;
        if (0 < kd_r_frb) {
          if (kd_l_frb > kd_r_frb) {
            kd_l_frb -= kd_r_frb;
            kd_r_frb = 0;
          }
        }
        if (0 < kd_l_frb) {
          if (kd_r_frb > kd_l_frb) {
            kd_r_frb -= kd_l_frb;
            kd_l_frb = 0;
          }
        }
        if (0 < kd_l_frb) {
          v = kd_l_frb;
          if (127 < v) {
            v = 127;
          }
          kd_l_frb -= v;
          if (5 <= protocol_version) {
            u = new Uint8Array(2);
            u[0] = 252;
          }
          else {
            u = new Uint8Array(2);
            u[0] = 108;
          }
          u[1] = v;
          ws.send(u);
          snake.eang -= mamu * v * snake.scang * snake.spang;
        }
        else {
          if (0 < kd_r_frb) {
            v = kd_r_frb;
            if (127 < v) {
              v = 127;
            }
            kd_r_frb -= v;
            if (5 <= protocol_version) {
              v += 128;
              u = new Uint8Array(2);
              u[0] = 252;
            }
            else {
              u = new Uint8Array(2);
              u[0] = 114;
            }
            u[1] = v;
            snake.eang += mamu * v * snake.scang * snake.spang;
            ws.send(u);
          }
        }
      }
    }
    if (!wfpr) {
      if (250 < b - last_ping_mtm) {
        last_ping_mtm = b;
        wfpr = true;
        u = new Uint8Array(1);
        u[0] = 5 <= protocol_version ? 251 : 112;
        ws.send(u);
        lpstm = b;
      }
    }
  }
  if (null != snake) {
    if (2147483647 != grd) {
      if (1E3 < b - locu_mtm) {
        locu_mtm = Date.now();
        myloc.style.left = Math.round(52 + 40 * (snake.xx - grd) / grd - 7) + "px";
        myloc.style.top = Math.round(52 + 40 * (snake.yy - grd) / grd - 7) + "px";
      }
    }
  }
  if (1E3 < b - lrd_mtm) {
    if (testing && (console && console.log)) {
      console.log("FPS: " + fps);
      f = [];
      trdps += rdps;
      if (playing) {
        tcsecs++;
      }
      f.push("FPS: " + fps);
      f.push("sectors: " + sectors.length);
      f.push("foods: " + foods_c);
      f.push("bytes/sec: " + rdps);
      f.push("bytes/sec avg: " + Math.round(trdps / tcsecs));
      f.push("");
      u = e = 0;
      for (; u < rdpspc.length; u++) {
        if (0 <= rdpspc[u]) {
          e += rdpspc[u];
        }
      }
      u = 0;
      for (; u < rdpspc.length; u++) {
        if (0 <= rdpspc[u]) {
          f.push(String.fromCharCode(u) + ": " + rdpspc[u] + " (" + Math.round(rdpspc[u] / e * 1E3) / 10 + "%)");
        }
      }
      f.push("total: " + e);
      maxp = pf_ep = pf_nap = pf_remove = pf_new_add = pf_add = 0;
      f.push("");
      u = 1;
      for (; u < pfs.length; u++) {
        if (0 != pfs[u]) {
          f.push(u + ": " + Math.round(1E3 * pfs[u]) / 1E3);
          pfs[u] = 0;
        }
      }
      pft = 0;
      pfd.innerHTML = f.join("<br>");
    }
    if (playing) {
      if (1 == want_quality) {
        if (32 >= fps) {
          if (high_quality) {
            wdfg++;
            if (1 <= wdfg) {
              high_quality = false;
            }
          }
        }
        else {
          if (high_quality || 48 <= fps) {
            if (0 < wdfg) {
              wdfg--;
              if (0 >= wdfg) {
                high_quality = true;
              }
            }
          }
        }
      }
    }
    wangnuc = angnuc = anguc = fps = reps = rsps = rnps = rfps = rdps = 0;
    lrd_mtm = Date.now();
  }
  etm *= Math.pow(0.993, vfrb);
  if (null != snake) {
    if (xm != lsxm || ym != lsym) {
      want_e = true;
    }
    if (want_e) {
      if (100 < b - last_e_mtm) {
        want_e = false;
        last_e_mtm = b;
        lsxm = xm;
        lsym = ym;
        d2 = xm * xm + ym * ym;
        if (256 < d2) {
          ang = Math.atan2(ym, xm);
          snake.eang = ang;
        }
        else {
          ang = snake.wang;
        }
        ang %= pi2;
        if (0 > ang) {
          ang += pi2;
        }
        if (5 <= protocol_version) {
          sang = Math.floor(251 * ang / pi2);
          if (sang != lsang) {
            lsang = sang;
            u = new Uint8Array(1);
            u[0] = sang & 255;
            lpstm = b;
            ws.send(u.buffer);
          }
        }
        else {
          sang = Math.floor(16777215 * ang / pi2);
          if (sang != lsang) {
            lsang = sang;
            u = new Uint8Array(4);
            u[0] = 101;
            u[1] = sang >> 16 & 255;
            u[2] = sang >> 8 & 255;
            u[3] = sang & 255;
            lpstm = b;
            ws.send(u.buffer);
          }
        }
      }
    }
  }
  if (!choosing_skin) {
    u = snakes.length - 1;
    for (; 0 <= u; u--) {
      e = snakes[u];
      h = mamu * vfr * e.scang * e.spang;
      b = e.sp * vfr / 4;
      if (b > e.msl) {
        b = e.msl;
      }
      if (!e.dead) {
        if (e.tsp != e.sp) {
          if (e.tsp < e.sp) {
            e.tsp += 0.3 * vfr;
            if (e.tsp > e.sp) {
              e.tsp = e.sp;
            }
          }
          else {
            e.tsp -= 0.3 * vfr;
            if (e.tsp < e.sp) {
              e.tsp = e.sp;
            }
          }
        }
        if (e.tsp > e.fsp) {
          e.sfr += (e.tsp - e.fsp) * vfr * 0.021;
        }
        if (0 < e.fltg) {
          f = vfrb;
          if (f > e.fltg) {
            f = e.fltg;
          }
          e.fltg -= f;
          qq = 0;
          for (; qq < f; qq++) {
            e.fl = e.fls[e.flpos];
            e.fls[e.flpos] = 0;
            e.flpos++;
            if (e.flpos >= lfc) {
              e.flpos = 0;
            }
          }
        }
        else {
          if (0 == e.fltg) {
            e.fltg = -1;
            e.fl = 0;
          }
        }
        e.cfl = e.tl + e.fl;
      }
      if (1 == e.dir) {
        e.ang -= h;
        if (0 > e.ang || e.ang >= pi2) {
          e.ang %= pi2;
        }
        if (0 > e.ang) {
          e.ang += pi2;
        }
        f = (e.wang - e.ang) % pi2;
        if (0 > f) {
          f += pi2;
        }
        if (f > Math.PI) {
          f -= pi2;
        }
        if (0 < f) {
          e.ang = e.wang;
          e.dir = 0;
        }
      }
      else {
        if (2 == e.dir) {
          e.ang += h;
          if (0 > e.ang || e.ang >= pi2) {
            e.ang %= pi2;
          }
          if (0 > e.ang) {
            e.ang += pi2;
          }
          f = (e.wang - e.ang) % pi2;
          if (0 > f) {
            f += pi2;
          }
          if (f > Math.PI) {
            f -= pi2;
          }
          if (0 > f) {
            e.ang = e.wang;
            e.dir = 0;
          }
        }
        else {
          e.ang = e.wang;
        }
      }
      if (1 != e.ehl) {
        e.ehl += 0.03 * vfr;
        if (1 <= e.ehl) {
          e.ehl = 1;
        }
      }
      h = e.pts[e.pts.length - 1];
      e.wehang = Math.atan2(e.yy + e.fy - h.yy - h.fy + h.eby * (1 - e.ehl), e.xx + e.fx - h.xx - h.fx + h.ebx * (1 - e.ehl));
      if (!e.dead) {
        if (!(e.ehang == e.wehang)) {
          f = (e.wehang - e.ehang) % pi2;
          if (0 > f) {
            f += pi2;
          }
          if (f > Math.PI) {
            f -= pi2;
          }
          if (0 > f) {
            e.edir = 1;
          }
          else {
            if (0 < f) {
              e.edir = 2;
            }
          }
        }
      }
      if (1 == e.edir) {
        e.ehang -= 0.1 * vfr;
        if (0 > e.ehang || e.ehang >= pi2) {
          e.ehang %= pi2;
        }
        if (0 > e.ehang) {
          e.ehang += pi2;
        }
        f = (e.wehang - e.ehang) % pi2;
        if (0 > f) {
          f += pi2;
        }
        if (f > Math.PI) {
          f -= pi2;
        }
        if (0 < f) {
          e.ehang = e.wehang;
          e.edir = 0;
        }
      }
      else {
        if (2 == e.edir) {
          e.ehang += 0.1 * vfr;
          if (0 > e.ehang || e.ehang >= pi2) {
            e.ehang %= pi2;
          }
          if (0 > e.ehang) {
            e.ehang += pi2;
          }
          f = (e.wehang - e.ehang) % pi2;
          if (0 > f) {
            f += pi2;
          }
          if (f > Math.PI) {
            f -= pi2;
          }
          if (0 > f) {
            e.ehang = e.wehang;
            e.edir = 0;
          }
        }
      }
      if (!e.dead) {
        e.xx += Math.cos(e.ang) * b;
        e.yy += Math.sin(e.ang) * b;
        e.chl += b / e.msl;
      }
      if (0 < vfrb) {
        w = e.pts.length - 1;
        for (; 0 <= w; w--) {
          h = e.pts[w];
          if (h.dying) {
            h.da += 0.0015 * vfrb;
            if (1 < h.da) {
              e.pts.splice(w, 1);
              h.dying = false;
              points_dp.add(h);
            }
          }
        }
        w = e.pts.length - 1;
        for (; 0 <= w; w--) {
          if (h = e.pts[w], 0 < h.eiu) {
            fy = fx = 0;
            qq = cm1 = h.eiu - 1;
            for (; 0 <= qq; qq--) {
              h.efs[qq] = 2 == h.ems[qq] ? h.efs[qq] + vfrb2 : h.efs[qq] + vfrb;
              f = h.efs[qq];
              if (f >= hfc) {
                if (qq != cm1) {
                  h.exs[qq] = h.exs[cm1];
                  h.eys[qq] = h.eys[cm1];
                  h.efs[qq] = h.efs[cm1];
                  h.ems[qq] = h.ems[cm1];
                }
                h.eiu--;
                cm1--;
              }
              else {
                fx += h.exs[qq] * hfas[f];
                fy += h.eys[qq] * hfas[f];
              }
            }
            h.fx = fx;
            h.fy = fy;
          }
        }
      }
      b = 2.3 * Math.cos(e.eang);
      f = 2.3 * Math.sin(e.eang);
      if (e.rex < b) {
        e.rex += vfr / 6;
        if (e.rex >= b) {
          e.rex = b;
        }
      }
      if (e.rey < f) {
        e.rey += vfr / 6;
        if (e.rey >= f) {
          e.rey = f;
        }
      }
      if (e.rex > b) {
        e.rex -= vfr / 6;
        if (e.rex <= b) {
          e.rex = b;
        }
      }
      if (e.rey > f) {
        e.rey -= vfr / 6;
        if (e.rey <= f) {
          e.rey = f;
        }
      }
      if (0 < vfrb) {
        if (0 < e.ftg) {
          f = vfrb;
          if (f > e.ftg) {
            f = e.ftg;
          }
          e.ftg -= f;
          qq = 0;
          for (; qq < f; qq++) {
            e.fx = e.fxs[e.fpos];
            e.fy = e.fys[e.fpos];
            e.fchl = e.fchls[e.fpos];
            e.fxs[e.fpos] = 0;
            e.fys[e.fpos] = 0;
            e.fchls[e.fpos] = 0;
            e.fpos++;
            if (e.fpos >= rfc) {
              e.fpos = 0;
            }
          }
        }
        else {
          if (0 == e.ftg) {
            e.ftg = -1;
            e.fx = 0;
            e.fy = 0;
            e.fchl = 0;
          }
        }
        if (0 < e.fatg) {
          f = vfrb;
          if (f > e.fatg) {
            f = e.fatg;
          }
          e.fatg -= f;
          qq = 0;
          for (; qq < f; qq++) {
            e.fa = e.fas[e.fapos];
            e.fas[e.fapos] = 0;
            e.fapos++;
            if (e.fapos >= afc) {
              e.fapos = 0;
            }
          }
        }
        else {
          if (0 == e.fatg) {
            e.fatg = -1;
            e.fa = 0;
          }
        }
      }
      if (e.dead) {
        e.dead_amt += 0.02 * vfr;
        if (1 <= e.dead_amt) {
          snakes.splice(u, 1);
        }
      }
      else {
        if (1 != e.alive_amt) {
          e.alive_amt += 0.015 * vfr;
          if (1 <= e.alive_amt) {
            e.alive_amt = 1;
          }
        }
      }
    }
  }
  u = preys.length - 1;
  for (; 0 <= u; u--) {
    w = preys[u];
    h = mamu2 * vfr;
    b = w.sp * vfr / 4;
    if (0 < vfrb) {
      if (0 < w.ftg) {
        f = vfrb;
        if (f > w.ftg) {
          f = w.ftg;
        }
        w.ftg -= f;
        qq = 1;
        for (; qq <= f; qq++) {
          if (qq == f) {
            w.fx = w.fxs[w.fpos];
            w.fy = w.fys[w.fpos];
          }
          w.fxs[w.fpos] = 0;
          w.fys[w.fpos] = 0;
          w.fpos++;
          if (w.fpos >= rfc) {
            w.fpos = 0;
          }
        }
      }
      else {
        if (0 == w.ftg) {
          w.fx = 0;
          w.fy = 0;
          w.ftg = -1;
        }
      }
    }
    if (1 == w.dir) {
      w.ang -= h;
      if (0 > w.ang || w.ang >= pi2) {
        w.ang %= pi2;
      }
      if (0 > w.ang) {
        w.ang += pi2;
      }
      f = (w.wang - w.ang) % pi2;
      if (0 > f) {
        f += pi2;
      }
      if (f > Math.PI) {
        f -= pi2;
      }
      if (0 < f) {
        w.ang = w.wang;
        w.dir = 0;
      }
    }
    else {
      if (2 == w.dir) {
        w.ang += h;
        if (0 > w.ang || w.ang >= pi2) {
          w.ang %= pi2;
        }
        if (0 > w.ang) {
          w.ang += pi2;
        }
        f = (w.wang - w.ang) % pi2;
        if (0 > f) {
          f += pi2;
        }
        if (f > Math.PI) {
          f -= pi2;
        }
        if (0 > f) {
          w.ang = w.wang;
          w.dir = 0;
        }
      }
      else {
        w.ang = w.wang;
      }
    }
    w.xx += Math.cos(w.ang) * b;
    w.yy += Math.sin(w.ang) * b;
    w.gfr += vfr * w.gr;
    if (w.eaten) {
      if (1.5 != w.fr) {
        w.fr += vfr / 150;
        if (1.5 <= w.fr) {
          w.fr = 1.5;
        }
      }
      w.eaten_fr += vfr / 47;
      w.gfr += vfr;
      e = w.eaten_by;
      if (1 <= w.eaten_fr || !e) {
        preys.splice(u, 1);
      }
      else {
        w.eaten_fr4 = Math.pow(w.eaten_fr, 4);
        w.rad = 1 - Math.pow(w.eaten_fr, 3);
      }
    }
    else {
      if (1 != w.fr) {
        w.fr += vfr / 150;
        if (1 <= w.fr) {
          w.fr = 1;
          w.rad = 1;
        }
        else {
          w.rad = 0.5 * (1 - Math.cos(Math.PI * w.fr));
          w.rad += 0.66 * (0.5 * (1 - Math.cos(Math.PI * w.rad)) - w.rad);
        }
      }
    }
  }
  u = cm1 = foods_c - 1;
  for (; 0 <= u; u--) {
    b = foods[u];
    b.gfr += vfr * b.gr;
    if (b.eaten) {
      if (1.5 != b.fr) {
        b.fr += vfr / 150;
        if (1.5 <= b.fr) {
          b.fr = 1.5;
        }
      }
      b.eaten_fr += vfr / 41;
      b.rad = 1 - Math.pow(b.eaten_fr, 3);
      e = b.eaten_by;
      if (1 <= b.eaten_fr || !e) {
        if (u == cm1) {
          foods[u] = null;
        }
        else {
          foods[u] = foods[cm1];
          foods[cm1] = null;
        }
        foods_c--;
        cm1--;
      }
      else {
        e = b.eaten_by;
        f = b.eaten_fr * b.eaten_fr;
        b.eaten_fr4 = f * f;
        b.rad = 1 - b.eaten_fr * f;
        b.rx = b.xx + (e.xx + e.fx + Math.cos(e.ang + e.fa) * (43 - 24 * f) * (1 - f) - b.xx) * f;
        b.ry = b.yy + (e.yy + e.fy + Math.sin(e.ang + e.fa) * (43 - 24 * f) * (1 - f) - b.yy) * f;
        b.rx += 6 * Math.cos(b.wsp * b.gfr) * (1 - b.eaten_fr);
        b.ry += 6 * Math.sin(b.wsp * b.gfr) * (1 - b.eaten_fr);
      }
    }
    else {
      if (1 != b.fr) {
        b.fr += b.rsp * vfr / 150;
        if (1 <= b.fr) {
          b.fr = 1;
          b.rad = 1;
        }
        else {
          b.rad = 0.5 * (1 - Math.cos(Math.PI * b.fr));
          b.rad += 0.66 * (0.5 * (1 - Math.cos(Math.PI * b.rad)) - b.rad);
        }
      }
      b.rx = b.xx;
      b.ry = b.yy;
      b.rx = b.xx + 6 * Math.cos(b.wsp * b.gfr);
      b.ry = b.yy + 6 * Math.sin(b.wsp * b.gfr);
    }
  }
  vfrb = vfr = 0;
  redraw();
  if (!no_raf) {
    raf(oef);
  }
};
var bgx = 0;
var bgy = 0;
var bgx2 = 0;
var bgy2 = 0;
var fgfr = 0;
var px;
var py;
var lpx;
var lpy;
var ax;
var ay;
var lax;
var lay;
var pax;
var pay;
var fx;
var fy;
var fs;
var maxp = 0;
var fps = 0;
var redraw = function() {
  fps++;
  var b = mc.getContext("2d");
  if (animating) {
    if (snake) {
      var h = 0.5 + 0.4 / Math.max(1, (snake.sct + 16) / 36);
      if (gsc != h) {
        if (gsc < h) {
          gsc += 2E-4;
          if (gsc >= h) {
            gsc = h;
          }
        }
        else {
          gsc -= 2E-4;
          if (gsc <= h) {
            gsc = h;
          }
        }
      }
    }
    h = view_xx;
    var c = view_yy;
    if (null != snake) {
      if (0 < fvtg) {
        fvtg--;
        fvx = fvxs[fvpos];
        fvy = fvys[fvpos];
        fvxs[fvpos] = 0;
        fvys[fvpos] = 0;
        fvpos++;
        if (fvpos >= vfc) {
          fvpos = 0;
        }
      }
      view_xx = snake.xx + snake.fx + fvx;
      view_yy = snake.yy + snake.fy + fvy;
      if (choosing_skin) {
        view_xx -= 104;
        gsc = 1;
      }
      view_ang = Math.atan2(view_yy - grd, view_xx - grd);
      view_dist = Math.sqrt((view_xx - grd) * (view_xx - grd) + (view_yy - grd) * (view_yy - grd));
      bpx1 = view_xx - (mww2 / gsc + 84);
      bpy1 = view_yy - (mhh2 / gsc + 84);
      bpx2 = view_xx + (mww2 / gsc + 84);
      bpy2 = view_yy + (mhh2 / gsc + 84);
      fpx1 = view_xx - (mww2 / gsc + 24);
      fpy1 = view_yy - (mhh2 / gsc + 24);
      fpx2 = view_xx + (mww2 / gsc + 24);
      fpy2 = view_yy + (mhh2 / gsc + 24);
    }
    bgx2 -= 1 * (view_xx - h) / bgw2;
    bgy2 -= 1 * (view_yy - c) / bgh2;
    bgx2 %= 1;
    if (0 > bgx2) {
      bgx2 += 1;
    }
    bgy2 %= 1;
    if (0 > bgy2) {
      bgy2 += 1;
    }
    if (ggbg && (high_quality || 0 < gla)) {
      b.save();
      b.fillStyle = "#000000";
      b.fillRect(0, 0, mww, mhh);
      b.globalAlpha = 0.3 * gla;
      b.drawImage(gbgmc, 0, 0);
      b.restore();
    }
    else {
      b.fillStyle = "#000000";
      b.fillRect(0, 0, mww, mhh);
    }
    if (bgp2) {
      b.save();
      b.fillStyle = bgp2;
      b.translate(mww2, mhh2);
      b.scale(gsc, gsc);
      b.translate(bgx2 * bgw2, bgy2 * bgh2);
      b.globalAlpha = 0.4 + 0.6 * (1 - gla);
      b.fillRect(3 * -mww / gsc, 3 * -mhh / gsc, 5 * mww / gsc, 5 * mhh / gsc);
      if (high_quality || 0 < gla) {
        b.globalCompositeOperation = "lighter";
        b.globalAlpha = 0.4 * gla;
        b.fillRect(3 * -mww / gsc, 3 * -mhh / gsc, 5 * mww / gsc, 5 * mhh / gsc);
      }
      b.restore();
    }
    if (testing) {
      h = sectors.length - 1;
      for (; 0 <= h; h--) {
        c = sectors[h];
        b.fillStyle = "rgba(0, 255, 0, .1)";
        b.fillRect(mww2 + (c.xx * sector_size - view_xx) * gsc, mhh2 + (c.yy * sector_size - view_yy) * gsc, sector_size * gsc - 4, sector_size * gsc - 4);
      }
    }
    if (high_quality || 0 < gla) {
      var f = 1.75;
      if (1 != gla) {
        f = 1.75 * gla;
      }
      b.save();
      h = foods_c - 1;
      for (; 0 <= h; h--) {
        c = foods[h];
        if (c.rx >= fpx1) {
          if (c.ry >= fpy1) {
            if (c.rx <= fpx2) {
              if (c.ry <= fpy2) {
                if (1 == c.rad) {
                  B = mww2 + gsc * (c.rx - view_xx) - c.ofw2;
                  q = mhh2 + gsc * (c.ry - view_yy) - c.ofh2;
                  if (-50 <= B) {
                    if (-50 <= q) {
                      if (B <= mwwp50) {
                        if (q <= mhhp50) {
                          b.globalAlpha = f * c.fr;
                          b.drawImage(c.ofi, B, q);
                        }
                      }
                    }
                  }
                }
                else {
                  B = mww2 + gsc * (c.rx - view_xx) - c.ofw2 * c.rad;
                  q = mhh2 + gsc * (c.ry - view_yy) - c.ofh2 * c.rad;
                  if (-50 <= B) {
                    if (-50 <= q) {
                      if (B <= mwwp50) {
                        if (q <= mhhp50) {
                          b.globalAlpha = f * c.fr;
                          b.drawImage(c.ofi, 0, 0, c.ofw, c.ofh, B, q, c.ofw * c.rad, c.ofh * c.rad);
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
      b.restore();
    }
    b.save();
    b.globalCompositeOperation = "lighter";
    if (high_quality || 0 < gla) {
      f = 0.75;
      if (1 != gla) {
        f = 0.75 * gla;
      }
      var w = 0.75;
      if (1 != gla) {
        w = 1 - 0.25 * gla;
      }
      h = foods_c - 1;
      for (; 0 <= h; h--) {
        c = foods[h];
        if (c.rx >= fpx1) {
          if (c.ry >= fpy1) {
            if (c.rx <= fpx2) {
              if (c.ry <= fpy2) {
                if (1 == c.rad) {
                  B = mww2 + gsc * (c.rx - view_xx) - c.fw2;
                  q = mhh2 + gsc * (c.ry - view_yy) - c.fh2;
                  if (-50 <= B) {
                    if (-50 <= q) {
                      if (B <= mwwp50) {
                        if (q <= mhhp50) {
                          b.globalAlpha = w * c.fr;
                          b.drawImage(c.fi, B, q);
                          b.globalAlpha = f * (0.5 + 0.5 * Math.cos(c.gfr / 13)) * c.fr;
                          b.drawImage(c.fi, B, q);
                        }
                      }
                    }
                  }
                }
                else {
                  B = mww2 + gsc * (c.rx - view_xx) - c.fw2 * c.rad;
                  q = mhh2 + gsc * (c.ry - view_yy) - c.fh2 * c.rad;
                  if (-50 <= B) {
                    if (-50 <= q) {
                      if (B <= mwwp50) {
                        if (q <= mhhp50) {
                          b.globalAlpha = w * c.fr;
                          b.drawImage(c.fi, 0, 0, c.fw, c.fh, B, q, c.fw * c.rad, c.fh * c.rad);
                          b.globalAlpha = f * (0.5 + 0.5 * Math.cos(c.gfr / 13)) * c.fr;
                          b.drawImage(c.fi, 0, 0, c.fw, c.fh, B, q, c.fw * c.rad, c.fh * c.rad);
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
    }
    else {
      h = foods_c - 1;
      for (; 0 <= h; h--) {
        c = foods[h];
        if (c.rx >= fpx1) {
          if (c.ry >= fpy1) {
            if (c.rx <= fpx2) {
              if (c.ry <= fpy2) {
                if (1 == c.rad) {
                  B = mww2 + gsc * (c.rx - view_xx) - c.fw2;
                  q = mhh2 + gsc * (c.ry - view_yy) - c.fh2;
                  if (-50 <= B) {
                    if (-50 <= q) {
                      if (B <= mwwp50) {
                        if (q <= mhhp50) {
                          b.globalAlpha = c.fr;
                          b.drawImage(c.fi, B, q);
                        }
                      }
                    }
                  }
                }
                else {
                  B = mww2 + gsc * (c.rx - view_xx) - c.fw2 * c.rad;
                  q = mhh2 + gsc * (c.ry - view_yy) - c.fh2 * c.rad;
                  if (-50 <= B) {
                    if (-50 <= q) {
                      if (B <= mwwp50) {
                        if (q <= mhhp50) {
                          b.globalAlpha = c.fr;
                          b.drawImage(c.fi, 0, 0, c.fw, c.fh, B, q, c.fw * c.rad, c.fh * c.rad);
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
    }
    b.restore();
    b.save();
    b.globalCompositeOperation = "lighter";
    h = preys.length - 1;
    for (; 0 <= h; h--) {
      if (f = preys[h], e = f.xx + f.fx, z = f.yy + f.fy, px = mww2 + gsc * (e - view_xx), py = mhh2 + gsc * (z - view_yy), -50 <= px && (-50 <= py && (px <= mwwp50 && py <= mhhp50))) {
        if (f.eaten) {
          c = f.eaten_by;
          var u = Math.pow(f.eaten_fr, 2);
          var e = e + (c.xx + c.fx + Math.cos(c.ang + c.fa) * (43 - 24 * u) * (1 - u) - e) * u;
          var z = z + (c.yy + c.fy + Math.sin(c.ang + c.fa) * (43 - 24 * u) * (1 - u) - z) * u;
          px = mww2 + gsc * (e - view_xx);
          py = mhh2 + gsc * (z - view_yy);
        }
        if (1 == f.rad) {
          B = px - f.fw2;
          q = py - f.fh2;
          b.globalAlpha = 0.75 * f.fr;
          b.drawImage(f.fi, B, q);
          b.globalAlpha = 0.75 * (0.5 + 0.5 * Math.cos(f.gfr / 13)) * f.fr;
          b.drawImage(f.fi, B, q);
        }
        else {
          B = px - f.fw2 * f.rad;
          q = py - f.fh2 * f.rad;
          b.globalAlpha = 0.75 * f.fr;
          b.drawImage(f.fi, 0, 0, f.fw, f.fh, B, q, f.fw * f.rad, f.fh * f.rad);
          b.globalAlpha = 0.75 * (0.5 + 0.5 * Math.cos(f.gfr / 13)) * f.fr;
          b.drawImage(f.fi, 0, 0, f.fw, f.fh, B, q, f.fw * f.rad, f.fh * f.rad);
        }
      }
    }
    b.restore();
    b.save();
    b.strokeStyle = "#90C098";
    var F;
    h = snakes.length - 1;
    for (; 0 <= h; h--) {
      c = snakes[h];
      e = c.xx + c.fx;
      z = c.yy + c.fy + 40;
      if (0 < c.na) {
        if (e >= bpx1 - 100) {
          if (z >= bpy1) {
            if (e <= bpx2 + 100) {
              if (z <= bpy2) {
                if (c == snake) {
                  c.fnfr++;
                  if (200 < c.fnfr) {
                    c.na -= 0.004;
                    if (0 > c.na) {
                      c.na = 0;
                    }
                  }
                }
                b.save();
                b.globalAlpha = 0.5 * c.na * c.alive_amt * (1 - c.dead_amt);
                b.font = "12px Arial, Helvetica Neue, Helvetica, sans-serif";
                b.fillStyle = c.csw;
                b.textBaseline = "middle";
                b.textAlign = "center";
                f = c.xx + c.fx;
                w = c.yy + c.fy;
                f = mww2 + (f - view_xx) * gsc;
                w = mhh2 + (w - view_yy) * gsc;
                b.fillText(c.nk, f, w + 32 + 7 * c.sc * gsc);
                b.restore();
              }
            }
          }
        }
      }
    }
    h = snakes.length - 1;
    for (; 0 <= h; h--) {
      c = snakes[h];
      c.iiv = false;
      y = c.pts.length - 1;
      for (; 0 <= y; y--) {
        if (e = c.pts[y], px = e.xx + e.fx, py = e.yy + e.fy, px >= bpx1 && (py >= bpy1 && (px <= bpx2 && py <= bpy2))) {
          c.iiv = true;
          break;
        }
      }
    }
    h = snakes.length - 1;
    for (; 0 <= h; h--) {
      if (c = snakes[h], c.iiv) {
        f = c.xx + c.fx;
        w = c.yy + c.fy;
        px = f;
        py = w;
        F = c.ehang;
        var t = c.sc;
        var x = 29 * t;
        var D = c.cfl;
        e = c.pts[c.pts.length - 1];
        if (1 == render_mode) {
          b.save();
          b.beginPath();
          b.moveTo(mww2 + (px - view_xx) * gsc, mhh2 + (py - view_yy) * gsc);
          z = false;
          var y = c.pts.length - 1;
          for (; 0 <= y; y--) {
            e = c.pts[y];
            lpx = px;
            lpy = py;
            px = e.xx;
            py = e.yy;
            var B = e.fx;
            var q = e.fy;
            if (0 < D) {
              px += B;
              py += q;
              lax = ax;
              lay = ay;
              ax = (px + lpx) / 2;
              ay = (py + lpy) / 2;
              if (!z) {
                lax = ax;
                lay = ay;
              }
              if (1 > D) {
                u = 1 - D;
                lpx += (lax - lpx) * u;
                lpy += (lay - lpy) * u;
                ax += (lax - ax) * u;
                ay += (lay - ay) * u;
              }
              if (z) {
                D--;
              }
              else {
                D -= c.chl + c.fchl;
              }
              if (z) {
                b.quadraticCurveTo(mww2 + (lpx - view_xx) * gsc, mhh2 + (lpy - view_yy) * gsc, mww2 + (ax - view_xx) * gsc, mhh2 + (ay - view_yy) * gsc);
              }
              else {
                b.lineTo(mww2 + (ax - view_xx) * gsc, mhh2 + (ay - view_yy) * gsc);
                z = true;
              }
            }
          }
          b.save();
          b.lineJoin = "round";
          b.lineCap = "round";
          if (is_firefox) {
            if (c.sp > c.fsp) {
              y = c.alive_amt * (1 - c.dead_amt) * Math.max(0, Math.min(1, (c.sp - c.ssp) / (c.msp - c.ssp)));
              b.save();
              b.strokeStyle = c.cs;
              b.globalAlpha = 0.3 * y;
              b.lineWidth = (x + 6) * gsc;
              b.stroke();
              b.lineWidth = (x + 9) * gsc;
              b.stroke();
              b.lineWidth = (x + 12) * gsc;
              b.stroke();
              b.restore();
            }
            b.globalAlpha = 1 * c.alive_amt * (1 - c.dead_amt);
            b.strokeStyle = "#000000";
            b.lineWidth = (x + 5) * gsc;
          }
          else {
            if (c.sp > c.fsp) {
              y = c.alive_amt * (1 - c.dead_amt) * Math.max(0, Math.min(1, (c.sp - c.ssp) / (c.msp - c.ssp)));
              b.save();
              b.lineWidth = (x - 2) * gsc;
              b.shadowBlur = 30 * gsc;
              b.shadowColor = "rgba(" + c.rr + "," + c.gg + "," + c.bb + ", " + Math.round(1E4 * y) / 1E4 + ")";
              b.stroke();
              b.stroke();
              b.restore();
            }
            b.globalAlpha = 0.4 * c.alive_amt * (1 - c.dead_amt);
            b.strokeStyle = "#000000";
            b.lineWidth = (x + 5) * gsc;
            b.stroke();
            b.strokeStyle = c.cs;
            b.lineWidth = x * gsc;
            b.strokeStyle = "#000000";
            b.globalAlpha = 1 * c.alive_amt * (1 - c.dead_amt);
          }
          b.stroke();
          b.strokeStyle = c.cs;
          b.globalAlpha = 0.8 * c.alive_amt * (1 - c.dead_amt);
          b.lineWidth = x * gsc;
          b.stroke();
          b.restore();
          b.strokeStyle = c.cs;
          if (c.dead) {
            q = (0.5 + 0.5 * Math.abs(Math.sin(5 * Math.PI * c.dead_amt))) * Math.sin(Math.PI * c.dead_amt);
            b.save();
            b.lineJoin = "round";
            b.lineCap = "round";
            b.globalCompositeOperation = "lighter";
            b.lineWidth = (x - 3) * gsc;
            b.globalAlpha = q;
            b.strokeStyle = "#FFCC99";
            b.stroke();
            b.restore();
          }
          b.restore();
        }
        if (2 == render_mode) {
          x = 0.5 * x;
          var I;
          var A;
          var L;
          var J;
          var H;
          var C;
          var M;
          var O;
          B = 0;
          px = f;
          py = w;
          H = px;
          C = py;
          if (H >= bpx1 && (C >= bpy1 && (H <= bpx2 && C <= bpy2))) {
            pbx[0] = H;
            pby[0] = C;
            pba[0] = Math.atan2(w - (e.yy + e.fy), f - (e.xx + e.fx)) + Math.PI;
            pbu[0] = 1;
          }
          else {
            pbu[0] = 0;
          }
          B = 1;
          n = (c.chl + c.fchl) % 0.25;
          if (0 > n) {
            n += 0.25;
          }
          n = 0.25 - n;
          D += 1 - 0.25 * Math.ceil((c.chl + c.fchl) / 0.25);
          ax = px;
          ay = py;
          if (c.sep != c.wsep) {
            if (c.sep < c.wsep) {
              c.sep += 0.01;
              if (c.sep >= c.wsep) {
                c.sep = c.wsep;
              }
            }
            else {
              if (c.sep > c.wsep) {
                c.sep -= 0.01;
                if (c.sep <= c.wsep) {
                  c.sep = c.wsep;
                }
              }
            }
          }
          var N = c.sep * qsm;
          var K = 0;
          q = per_color_imgs[c.cv].kmcs;
          var E;
          var G;
          y = c.pts.length - 1;
          for (; 0 <= y; y--) {
            if (e = c.pts[y], lpx = px, lpy = py, px = e.xx + e.fx, py = e.yy + e.fy, -0.25 < D) {
              L = H;
              J = C;
              H = (px + lpx) / 2;
              C = (py + lpy) / 2;
              M = lpx;
              O = lpy;
              u = 0;
              for (; 1 > u; u += 0.25) {
                E = n + u;
                e = L + (M - L) * E;
                z = J + (O - J) * E;
                I = M + (H - M) * E;
                A = O + (C - O) * E;
                lax = ax;
                lay = ay;
                ax = e + (I - e) * E;
                ay = z + (A - z) * E;
                if (0 > D) {
                  ax += -(lax - ax) * D / 0.25;
                  ay += -(lay - ay) * D / 0.25;
                }
                I = Math.sqrt(Math.pow(ax - lax, 2) + Math.pow(ay - lay, 2));
                if (K + I < N) {
                  K += I;
                }
                else {
                  K = -K;
                  E = (I - K) / N;
                  for (; 1 <= E; E--) {
                    K += N;
                    pax = lax + (ax - lax) * K / I;
                    pay = lay + (ay - lay) * K / I;
                    if (pax >= bpx1 && (pay >= bpy1 && (pax <= bpx2 && pay <= bpy2))) {
                      pbx[B] = pax;
                      pby[B] = pay;
                      pbu[B] = 1;
                      e = ax - lax;
                      z = ay - lay;
                      pba[B] = -15 <= e && (-15 <= z && (15 > e && 15 > z)) ? at2lt[8 * z + 128 << 8 | 8 * e + 128] : -127 <= e && (-127 <= z && (127 > e && 127 > z)) ? at2lt[z + 128 << 8 | e + 128] : Math.atan2(z, e);
                    }
                    else {
                      pbu[B] = 0;
                    }
                    B++;
                  }
                  K = I - K;
                }
                if (1 > D && (D -= 0.25, -0.25 >= D)) {
                  break;
                }
              }
              if (1 <= D) {
                D--;
              }
            }
          }
          if (ax >= bpx1 && (ay >= bpy1 && (ax <= bpx2 && ay <= bpy2))) {
            pbu[B] = 1;
            pbx[B] = ax;
            pby[B] = ay;
            pba[B] = Math.atan2(ay - lay, ax - lax);
          }
          else {
            pbu[B] = 0;
          }
          B++;
          b.save();
          b.translate(mww2, mhh2);
          u = gsc * x * 52 / 32;
          H = gsc * x * 62 / 32;
          D = c.alive_amt * (1 - c.dead_amt);
          D *= D;
          E = 1;
          if (c.tsp > c.fsp) {
            E = c.alive_amt * (1 - c.dead_amt) * Math.max(0, Math.min(1, (c.tsp - c.ssp) / (c.msp - c.ssp)));
            G = 0.37 * E;
            z = Math.pow(E, 0.5);
            K = gsc * x * (1 + 0.9375 * z);
            e = per_color_imgs[c.cv].kfmc;
            b.save();
            b.globalCompositeOperation = "lighter";
            if (c.rbcs) {
              C = c.rbcs;
              N = C.length;
              y = B - 1;
              for (; 0 <= y; y--) {
                if (1 == pbu[y]) {
                  px = pbx[y];
                  py = pby[y];
                  e = per_color_imgs[C[y % N]];
                  e = e.kfmc;
                  b.save();
                  b.globalAlpha = D * z * 0.38 * (0.6 + 0.4 * Math.cos(y / 4 - 1.15 * c.sfr));
                  b.translate((px - view_xx) * gsc, (py - view_yy) * gsc);
                  b.drawImage(e, -K, -K, 2 * K, 2 * K);
                  b.restore();
                }
              }
            }
            else {
              y = B - 1;
              for (; 0 <= y; y--) {
                if (1 == pbu[y]) {
                  px = pbx[y];
                  py = pby[y];
                  b.save();
                  b.globalAlpha = D * z * 0.38 * (0.6 + 0.4 * Math.cos(y / 4 - 1.15 * c.sfr));
                  b.translate((px - view_xx) * gsc, (py - view_yy) * gsc);
                  b.drawImage(e, -K, -K, 2 * K, 2 * K);
                  b.restore();
                }
              }
            }
            b.restore();
            E = 1 - E;
          }
          E *= D;
          if (high_quality || 0 < gla) {
            e = E;
            if (1 != gla) {
              e = E * gla;
            }
            b.globalAlpha = e;
            y = B - 1;
            for (; 0 <= y; y--) {
              if (1 == pbu[y]) {
                px = pbx[y];
                py = pby[y];
                b.save();
                b.translate((px - view_xx) * gsc, (py - view_yy) * gsc);
                b.drawImage(komc, -u, -u, 2 * u, 2 * u);
                if (9 > y) {
                  b.globalAlpha = e * (1 - y / 9);
                  b.drawImage(ksmc, -H, -H, 2 * H, 2 * H);
                  b.globalAlpha = e;
                }
                b.restore();
              }
            }
          }
          b.globalAlpha = E;
          if (c.rbcs) {
            C = c.rbcs;
            N = C.length;
            y = B - 1;
            for (; 0 <= y; y--) {
              if (1 == pbu[y]) {
                px = pbx[y];
                py = pby[y];
                if (2 <= y) {
                  u = y - 2;
                  if (1 == pbu[u]) {
                    e = pbx[u];
                    z = pby[u];
                    b.save();
                    b.translate((e - view_xx) * gsc, (z - view_yy) * gsc);
                    b.globalAlpha = 9 > u ? u / 9 * E : E;
                    b.drawImage(ksmc, -H, -H, 2 * H, 2 * H);
                    b.restore();
                  }
                }
                b.save();
                b.globalAlpha = D;
                b.translate((px - view_xx) * gsc, (py - view_yy) * gsc);
                b.rotate(pba[y]);
                u = y % (2 * q.length);
                if (u >= q.length) {
                  u = 2 * q.length - (u + 1);
                }
                e = per_color_imgs[C[y % N]];
                b.drawImage(e.kmcs[u], -gsc * x, -gsc * x, 2 * gsc * x, 2 * gsc * x);
                b.restore();
              }
            }
            if (c.tsp > c.fsp && (high_quality || 0 < gla)) {
              b.save();
              b.globalCompositeOperation = "lighter";
              y = B - 1;
              for (; 0 <= y; y--) {
                if (1 == pbu[y]) {
                  px = pbx[y];
                  py = pby[y];
                  b.save();
                  b.translate((px - view_xx) * gsc, (py - view_yy) * gsc);
                  b.rotate(pba[y]);
                  b.globalAlpha = D * G * gla * (0.5 + 0.5 * Math.cos(y / 4 - c.sfr));
                  u = y % (2 * q.length);
                  if (u >= q.length) {
                    u = 2 * q.length - (u + 1);
                  }
                  b.drawImage(per_color_imgs[C[y % N]].kmcs[u], -gsc * x, -gsc * x, 2 * gsc * x, 2 * gsc * x);
                  b.restore();
                }
              }
              b.restore();
            }
          }
          else {
            y = B - 1;
            for (; 0 <= y; y--) {
              if (1 == pbu[y]) {
                px = pbx[y];
                py = pby[y];
                if (2 <= y) {
                  u = y - 2;
                  if (1 == pbu[u]) {
                    e = pbx[u];
                    z = pby[u];
                    b.save();
                    b.translate((e - view_xx) * gsc, (z - view_yy) * gsc);
                    b.globalAlpha = 9 > u ? u / 9 * E : E;
                    b.drawImage(ksmc, -H, -H, 2 * H, 2 * H);
                    b.restore();
                  }
                }
                b.save();
                b.globalAlpha = D;
                b.translate((px - view_xx) * gsc, (py - view_yy) * gsc);
                b.rotate(pba[y]);
                u = y % (2 * q.length);
                if (u >= q.length) {
                  u = 2 * q.length - (u + 1);
                }
                b.drawImage(q[u], -gsc * x, -gsc * x, 2 * gsc * x, 2 * gsc * x);
                b.restore();
              }
            }
            if (c.tsp > c.fsp && (high_quality || 0 < gla)) {
              b.save();
              b.globalCompositeOperation = "lighter";
              y = B - 1;
              for (; 0 <= y; y--) {
                if (1 == pbu[y]) {
                  px = pbx[y];
                  py = pby[y];
                  u = y % (2 * q.length);
                  if (u >= q.length) {
                    u = 2 * q.length - (u + 1);
                  }
                  b.save();
                  b.translate((px - view_xx) * gsc, (py - view_yy) * gsc);
                  b.rotate(pba[y]);
                  b.globalAlpha = D * G * gla * (0.5 + 0.5 * Math.cos(y / 4 - c.sfr));
                  b.drawImage(q[u], -gsc * x, -gsc * x, 2 * gsc * x, 2 * gsc * x);
                  b.restore();
                }
              }
              b.restore();
            }
          }
          if (c.antenna && (2 <= B && 1 == pbu[1])) {
            c.atx[0] = pbx[1];
            c.aty[0] = pby[1];
            E = c.sc * gsc;
            fj = c.atx.length - 1;
            if (choosing_skin) {
              y = 1;
              for (; y <= fj; y++) {
                c.atvx[y] -= 0.3;
                c.atvy[y] += 0.14 * Math.cos(fr / 23 - 7 * y / fj);
              }
            }
            y = 1;
            for (; y <= fj; y++) {
              xx = c.atx[y - 1];
              yy = c.aty[y - 1];
              xx += 2 * Math.random() - 1;
              yy += 2 * Math.random() - 1;
              e = c.atx[y] - xx;
              z = c.aty[y] - yy;
              ang = -4 <= e && (-4 <= z && (4 > e && 4 > z)) ? at2lt[32 * z + 128 << 8 | 32 * e + 128] : -8 <= e && (-8 <= z && (8 > e && 8 > z)) ? at2lt[16 * z + 128 << 8 | 16 * e + 128] : -16 <= e && (-16 <= z && (16 > e && 16 > z)) ? at2lt[8 * z + 128 << 8 | 8 * e + 128] : -127 <= e && (-127 <= z && (127 > e && 127 > z)) ? at2lt[z + 128 << 8 | e + 128] : Math.atan2(z, e);
              xx += 4 * Math.cos(ang) * c.sc;
              yy += 4 * Math.sin(ang) * c.sc;
              c.atvx[y] += 0.1 * (xx - c.atx[y]);
              c.atvy[y] += 0.1 * (yy - c.aty[y]);
              c.atx[y] += c.atvx[y];
              c.aty[y] += c.atvy[y];
              c.atvx[y] *= 0.88;
              c.atvy[y] *= 0.88;
              e = c.atx[y] - c.atx[y - 1];
              z = c.aty[y] - c.aty[y - 1];
              I = Math.sqrt(e * e + z * z);
              if (I > 4 * c.sc) {
                ang = -4 <= e && (-4 <= z && (4 > e && 4 > z)) ? at2lt[32 * z + 128 << 8 | 32 * e + 128] : -8 <= e && (-8 <= z && (8 > e && 8 > z)) ? at2lt[16 * z + 128 << 8 | 16 * e + 128] : -16 <= e && (-16 <= z && (16 > e && 16 > z)) ? at2lt[8 * z + 128 << 8 | 8 * e + 128] : -127 <= e && (-127 <= z && (127 > e && 127 > z)) ? at2lt[z + 128 << 8 | e + 128] : Math.atan2(z, e);
                c.atx[y] = c.atx[y - 1] + 4 * Math.cos(ang) * c.sc;
                c.aty[y] = c.aty[y - 1] + 4 * Math.sin(ang) * c.sc;
              }
            }
            b.globalAlpha = D;
            b.strokeStyle = c.atc1;
            b.lineWidth = 5 * E;
            b.lineCap = "round";
            b.lineJoin = "round";
            b.beginPath();
            fj = c.atx.length - 1;
            e = (c.atx[fj] - view_xx) * gsc;
            z = (c.aty[fj] - view_yy) * gsc;
            b.moveTo(e, z);
            y = fj - 1;
            for (; 1 <= y; y--) {
              xx = (c.atx[y] - view_xx) * gsc;
              yy = (c.aty[y] - view_yy) * gsc;
              if (1 <= Math.abs(xx - e) + Math.abs(yy - z)) {
                e = xx;
                z = yy;
                b.lineTo(e, z);
              }
            }
            xx = (0.5 * (c.atx[1] + c.atx[0]) - view_xx) * gsc;
            yy = (0.5 * (c.aty[1] + c.aty[0]) - view_yy) * gsc;
            if (1 <= Math.abs(xx - e) + Math.abs(yy - z)) {
              e = xx;
              z = yy;
              b.lineTo(e, z);
            }
            b.stroke();
            b.globalAlpha = c.atia * D;
            b.strokeStyle = c.atc2;
            b.lineWidth = 4 * E;
            b.beginPath();
            fj = c.atx.length - 1;
            e = (c.atx[fj] - view_xx) * gsc;
            z = (c.aty[fj] - view_yy) * gsc;
            b.moveTo(e, z);
            y = fj - 1;
            for (; 0 <= y; y--) {
              xx = (c.atx[y] - view_xx) * gsc;
              yy = (c.aty[y] - view_yy) * gsc;
              if (1 <= Math.abs(xx - e) + Math.abs(yy - z)) {
                e = xx;
                z = yy;
                b.lineTo(e, z);
              }
            }
            b.stroke();
            if (c.atwg) {
              b.lineWidth = 3 * E;
              b.stroke();
              b.lineWidth = 2 * E;
              b.stroke();
            }
            b.globalAlpha = D * c.blba;
            if (c.abrot) {
              b.save();
              b.translate((c.atx[fj] - view_xx) * gsc, (c.aty[fj] - view_yy) * gsc);
              vang = Math.atan2(c.aty[fj] - c.aty[fj - 1], c.atx[fj] - c.atx[fj - 1]) - c.atba;
              if (0 > vang || vang >= pi2) {
                vang %= pi2;
              }
              if (vang < -Math.PI) {
                vang += pi2;
              }
              else {
                if (vang > Math.PI) {
                  vang -= pi2;
                }
              }
              c.atba = (c.atba + 0.15 * vang) % pi2;
              b.rotate(c.atba);
              b.drawImage(c.bulb, c.blbx * c.bsc * E, c.blby * c.bsc * E, c.blbw * c.bsc * E, c.blbh * c.bsc * E);
              b.restore();
            }
            else {
              b.drawImage(c.bulb, (c.atx[fj] - view_xx + c.blbx * c.bsc * c.sc) * gsc, (c.aty[fj] - view_yy + c.blby * c.bsc * c.sc) * gsc, c.blbw * c.bsc * E, c.blbh * c.bsc * E);
            }
            if (c.apbs) {
              b.globalAlpha = 0.5 * D;
              b.lineWidth = 3 * E;
              b.stroke();
              b.lineWidth = 2 * E;
              b.stroke();
            }
          }
          if (c.dead) {
            b.save();
            b.globalCompositeOperation = "lighter";
            q = (0.15 + 0.15 * Math.abs(Math.sin(5 * Math.PI * c.dead_amt))) * Math.sin(Math.PI * c.dead_amt);
            x *= gsc;
            y = B - 1;
            for (; 0 <= y; y--) {
              if (1 == pbu[y]) {
                px = pbx[y];
                py = pby[y];
                b.save();
                b.globalAlpha = q * (0.6 + 0.4 * Math.cos(y / 4 - 15 * c.dead_amt));
                b.translate((px - view_xx) * gsc, (py - view_yy) * gsc);
                b.drawImage(kdmc, -x, -x, 2 * x, 2 * x);
                b.restore();
              }
            }
            b.restore();
          }
          b.restore();
        }
        y = 1 == render_mode ? 4 * t : 6 * t;
        x = 6 * t;
        B = Math.cos(F) * y + Math.cos(F - Math.PI / 2) * (x + 0.5);
        q = Math.sin(F) * y + Math.sin(F - Math.PI / 2) * (x + 0.5);
        b.fillStyle = c.ec;
        b.globalAlpha = c.eca * c.alive_amt;
        b.beginPath();
        b.arc(mww2 + (B + f - view_xx) * gsc, mhh2 + (q + w - view_yy) * gsc, c.er * t * gsc, 0, pi2);
        b.closePath();
        b.fill();
        b.globalAlpha = c.ppa;
        B = Math.cos(F) * (y + 0.5) + c.rex * t + Math.cos(F - Math.PI / 2) * x;
        q = Math.sin(F) * (y + 0.5) + c.rey * t + Math.sin(F - Math.PI / 2) * x;
        b.fillStyle = c.ppc;
        b.beginPath();
        b.arc(mww2 + (B + f - view_xx) * gsc, mhh2 + (q + w - view_yy) * gsc, 3.5 * t * gsc, 0, pi2);
        b.closePath();
        b.fill();
        B = Math.cos(F) * y + Math.cos(F + Math.PI / 2) * (x + 0.5);
        q = Math.sin(F) * y + Math.sin(F + Math.PI / 2) * (x + 0.5);
        b.fillStyle = c.ec;
        b.globalAlpha = c.eca * c.alive_amt;
        b.beginPath();
        b.arc(mww2 + (B + f - view_xx) * gsc, mhh2 + (q + w - view_yy) * gsc, c.er * t * gsc, 0, pi2);
        b.closePath();
        b.fill();
        b.globalAlpha = c.ppa;
        B = Math.cos(F) * (y + 0.5) + c.rex * t + Math.cos(F + Math.PI / 2) * x;
        q = Math.sin(F) * (y + 0.5) + c.rey * t + Math.sin(F + Math.PI / 2) * x;
        b.fillStyle = c.ppc;
        b.beginPath();
        b.arc(mww2 + (B + f - view_xx) * gsc, mhh2 + (q + w - view_yy) * gsc, 3.5 * t * gsc, 0, pi2);
        b.closePath();
        b.fill();
        b.globalAlpha = 1;
      }
    }
    if (high_quality || 0 < gla) {
      b.save();
      b.globalCompositeOperation = "lighter";
      h = foods_c - 1;
      for (; 0 <= h; h--) {
        c = foods[h];
        if (c.rx >= fpx1) {
          if (c.ry >= fpy1) {
            if (c.rx <= fpx2) {
              if (c.ry <= fpy2) {
                e = c.rx - view_xx;
                z = c.ry - view_yy;
                f = e * e + z * z;
                fs = 1 + 0.06 * c.rad;
                B = e * fs;
                q = z * fs;
                G = 0.005 + 0.09 * (1 - f / (86E3 + f));
                if (1 != c.rad) {
                  G *= Math.pow(c.rad, 0.25);
                }
                if (1 != gla) {
                  G *= gla;
                }
                B = B * gsc + mww2;
                q = q * gsc + mhh2;
                if (1 == c.rad) {
                  if (-150 <= B) {
                    if (-150 <= q) {
                      if (B <= mwwp150) {
                        if (q <= mhhp150) {
                          B -= c.gfw2;
                          q -= c.gfh2;
                          b.globalAlpha = G * c.fr;
                          b.drawImage(c.gfi, B, q);
                          b.globalAlpha = G * (0.5 + 0.5 * Math.cos(c.gfr / 13)) * c.fr;
                          b.drawImage(c.gfi, B, q);
                        }
                      }
                    }
                  }
                }
                else {
                  if (-150 <= B) {
                    if (-150 <= q) {
                      if (B <= mwwp150) {
                        if (q <= mhhp150) {
                          B -= c.gfw2 * c.rad;
                          q -= c.gfh2 * c.rad;
                          b.globalAlpha = G * c.fr;
                          b.drawImage(c.gfi, 0, 0, c.gfw, c.gfh, B, q, c.gfw * c.rad, c.gfh * c.rad);
                          b.globalAlpha = G * (0.5 + 0.5 * Math.cos(c.gfr / 13)) * c.fr;
                          b.drawImage(c.gfi, 0, 0, c.gfw, c.gfh, B, q, c.gfw * c.rad, c.gfh * c.rad);
                        }
                      }
                    }
                  }
                }
                fs = 1 + 0.32 * c.rad;
                B = e * fs;
                q = z * fs;
                G = 0.085 * (1 - f / (16500 + f));
                if (1 != c.rad) {
                  G *= Math.pow(c.rad, 0.25);
                }
                if (1 != gla) {
                  G *= gla;
                }
                B = B * gsc + mww2;
                q = q * gsc + mhh2;
                if (1 == c.rad) {
                  if (-150 <= B) {
                    if (-150 <= q) {
                      if (B <= mwwp150) {
                        if (q <= mhhp150) {
                          B -= c.g2fw2;
                          q -= c.g2fh2;
                          b.globalAlpha = G * c.fr;
                          b.drawImage(c.g2fi, B, q);
                          b.globalAlpha = G * (0.5 + 0.5 * Math.cos(c.gfr / 13)) * c.fr;
                          b.drawImage(c.g2fi, B, q);
                        }
                      }
                    }
                  }
                }
                else {
                  if (-150 <= B) {
                    if (-150 <= q) {
                      if (B <= mwwp150) {
                        if (q <= mhhp150) {
                          B -= c.g2fw2 * c.rad;
                          q -= c.g2fh2 * c.rad;
                          b.globalAlpha = G * c.fr;
                          b.drawImage(c.g2fi, 0, 0, c.g2fw, c.g2fh, B, q, c.g2fw * c.rad, c.g2fh * c.rad);
                          b.globalAlpha = G * (0.5 + 0.5 * Math.cos(c.gfr / 13)) * c.fr;
                          b.drawImage(c.g2fi, 0, 0, c.g2fw, c.g2fh, B, q, c.g2fw * c.rad, c.g2fh * c.rad);
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
      b.restore();
    }
    b.save();
    b.globalCompositeOperation = "lighter";
    h = preys.length - 1;
    for (; 0 <= h; h--) {
      f = preys[h];
      e = f.xx + f.fx;
      z = f.yy + f.fy;
      if (f.eaten) {
        c = f.eaten_by;
        u = Math.pow(f.eaten_fr, 2);
        e += (c.xx + c.fx + Math.cos(c.ang + c.fa) * (43 - 24 * u) * (1 - u) - e) * u;
        z += (c.yy + c.fy + Math.sin(c.ang + c.fa) * (43 - 24 * u) * (1 - u) - z) * u;
      }
      e -= view_xx;
      z -= view_yy;
      c = e * e + z * z;
      fs = 1 + 0.08 * f.rad;
      px = e * fs;
      py = z * fs;
      G = 0.4 * (1 - c / (176E3 + c));
      if (1 != f.rad) {
        G *= Math.pow(f.rad, 0.25);
      }
      px = px * gsc + mww2;
      py = py * gsc + mhh2;
      if (1 == f.rad) {
        if (-150 <= px) {
          if (-150 <= py) {
            if (px <= mwwp150) {
              if (py <= mhhp150) {
                px -= f.gfw2;
                py -= f.gfh2;
                b.globalAlpha = G * f.fr;
                b.drawImage(f.gfi, px, py);
                b.globalAlpha = G * (0.5 + 0.5 * Math.cos(f.gfr / 13)) * f.fr;
                b.drawImage(f.gfi, px, py);
              }
            }
          }
        }
      }
      else {
        if (-150 <= px) {
          if (-150 <= py) {
            if (px <= mwwp150) {
              if (py <= mhhp150) {
                px -= f.gfw2 * f.rad;
                py -= f.gfh2 * f.rad;
                b.globalAlpha = G * f.fr;
                b.drawImage(f.gfi, 0, 0, f.gfw, f.gfh, px, py, f.gfw * f.rad, f.gfh * f.rad);
                b.globalAlpha = G * (0.5 + 0.5 * Math.cos(f.gfr / 13)) * f.fr;
                b.drawImage(f.gfi, 0, 0, f.gfw, f.gfh, px, py, f.gfw * f.rad, f.gfh * f.rad);
              }
            }
          }
        }
      }
      fs = 1 + 0.32 * f.rad;
      px = e * fs;
      py = z * fs;
      G = 0.35 * (1 - c / (46500 + c));
      if (1 != f.rad) {
        G *= Math.pow(f.rad, 0.25);
      }
      c = 2 * f.rad;
      px = px * gsc + mww2;
      py = py * gsc + mhh2;
      if (-150 <= px) {
        if (-150 <= py) {
          if (px <= mwwp150) {
            if (py <= mhhp150) {
              px -= f.gfw2 * c;
              py -= f.gfh2 * c;
              b.globalAlpha = G * f.fr;
              b.drawImage(f.gfi, 0, 0, f.gfw, f.gfh, px, py, f.gfw * c, f.gfh * c);
              b.globalAlpha = G * (0.5 + 0.5 * Math.cos(f.gfr / 13)) * f.fr;
              b.drawImage(f.gfi, 0, 0, f.gfw, f.gfh, px, py, f.gfw * c, f.gfh * c);
            }
          }
        }
      }
    }
    b.restore();
    if (4E3 > Math.abs(grd - view_dist)) {
      b.save();
      b.lineWidth = 23 * gsc;
      b.strokeStyle = "#800000";
      b.fillStyle = "#300000";
      b.beginPath();
      xx = grd + Math.cos(view_ang - 2E3 / grd) * grd * 0.98;
      yy = grd + Math.sin(view_ang - 2E3 / grd) * grd * 0.98;
      b.moveTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
      y = -2E3;
      for (; 2E3 >= y; y += 100) {
        xx = grd + Math.cos(view_ang + y / grd) * grd * 0.98;
        yy = grd + Math.sin(view_ang + y / grd) * grd * 0.98;
        b.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
      }
      xx = grd + Math.cos(view_ang + 2E3 / grd) * (grd + 4E3);
      yy = grd + Math.sin(view_ang + 2E3 / grd) * (grd + 4E3);
      b.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
      xx = grd + Math.cos(view_ang - 2E3 / grd) * (grd + 4E3);
      yy = grd + Math.sin(view_ang - 2E3 / grd) * (grd + 4E3);
      b.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
      b.closePath();
      b.stroke();
      b.fill();
      b.restore();
    }
    if (wumsts) {
      if (0 < rank) {
        if (0 < snake_count) {
          if (playing) {
            wumsts = false;
            c = "Your length";
            h = "of";
            G = "Your rank";
            if ("DE" == country) {
              c = "Deine Länge";
              h = "von";
              G = "Dein rang";
            }
            else {
              if ("FR" == country) {
                c = "Votre longueur";
                h = "de";
                G = "Ton rang";
              }
              else {
                if ("BR" == country) {
                  c = "Seu comprimento";
                  h = "do";
                  G = "Seu classificação";
                }
              }
            }
            c = "" + ('<span style="font-size: 14px;"><span style="opacity: .4;">' + c + ': </span><span style="opacity: .8; font-weight: bold;">' + Math.floor(150 * (fpsls[snake.sct] + snake.fam / fmlts[snake.sct] - 1) - 50) / 10 + "</span></span>");
            c += '<BR><span style="opacity: .3;">' + G + ': </span><span style="opacity: .35;">' + rank + '</span><span style="opacity: .3;"> ' + h + ' </span><span style="opacity: .35;">' + snake_count + "</span>";
            lbf.innerHTML = c;
          }
        }
      }
    }
    b.restore();
  }
};
var ww = window.innerWidth;
var hh = window.innerHeight;
var lww = 0;
var lhh = 0;
var csc;
var grd = 16384;

function resize() {
  ww = Math.ceil(window.innerWidth);
  hh = Math.ceil(window.innerHeight);
  if (ww != lww || hh != lhh) {
    lww = ww;
    lhh = hh;
    var b = 0;
    if (mbi) {
      var h = ww / 1245;
      mbi.width = 1245 * h;
      b = Math.ceil(260 * h);
      mbi.height = b;
      hh -= b;
    }
    ww -= wsu;
    loch.style.bottom = 16 + b + "px";
    lbf.style.bottom = 4 + b + "px";
    lbh.style.right = 4 + wsu + "px";
    lbs.style.right = 4 + wsu + "px";
    lbn.style.right = 64 + wsu + "px";
    lbp.style.right = 230 + wsu + "px";
    loch.style.right = 16 + wsu + "px";
    plq.style.right = 10 + wsu + "px";
    clq.style.left = Math.floor(ww / 2 - 130) + "px";
    login.style.width = ww + "px";
    fbh.style.right = 30 + wsu + "px";
    twth.style.right = 130 + wsu + "px";
    cstx.style.right = 240 + wsu + "px";
    grqh.style.right = 20 + wsu + "px";
    pskh.style.left = Math.round(0.25 * ww - 44) + "px";
    nskh.style.left = Math.round(0.75 * ww - 44) + "px";
    skodiv.style.left = Math.round(ww / 2 - skodiv.offsetWidth / 2) + "px";
    skodiv.style.top = Math.round(hh / 2 + 120) + "px";
    pskh.style.top = Math.round(hh / 2 - 44) + "px";
    nskh.style.top = Math.round(hh / 2 - 44) + "px";
    ldmc.style.left = ww / 2 - 64 + "px";
    ldmc.style.top = hh / 2 - 64 + "px";
    h = Math.sqrt(ww * ww + hh * hh);
    b = Math.ceil(1400 * ww / h);
    var c = Math.ceil(1400 * hh / h);
    if (1100 < b) {
      c = Math.ceil(1100 * c / b);
      b = 1100;
    }
    if (1100 < c) {
      b = Math.ceil(1100 * b / c);
      c = 1100;
    }
    lgbsc = 560 > hh ? Math.max(50, hh) / 560 : 1;
    h = Math.round(lgbsc * lgcsc * 1E5) / 1E5;
    if (1 == h) {
      trf(login, "");
      login.style.top = "0px";
    }
    else {
      login.style.top = -(Math.round(hh * (1 - lgbsc) * 1E5) / 1E5) + "px";
      trf(login, "scale(" + h + "," + h + ")");
    }
    if (mww != b || mhh != c) {
      mww = b;
      mhh = c;
      mc.width = mww;
      mc.height = mhh;
      mwwp50 = mww + 50;
      mhhp50 = mhh + 50;
      mwwp150 = mww + 150;
      mhhp150 = mhh + 150;
      mww2 = mww / 2;
      mhh2 = mhh / 2;
      rdgbg();
    }
    csc = Math.min(ww / mww, hh / mhh);
    trf(mc, "scale(" + csc + "," + csc + ")");
    mc.style.left = Math.floor(ww / 2 - mww / 2) + "px";
    mc.style.top = Math.floor(hh / 2 - mhh / 2) + "px";
  }
  nbg.style.width = ww + "px";
  nbg.style.height = hh + "px";
  redraw();
}
window.onresize = function() {
  resize();
};
i = ois.length - 1;
for (; 0 <= i; i--) {
  ois[i].ii.src = ois[i].src;
}
if (0 == wic) {
  startAnimation();
}
window.onmousemove = function(b) {
  if (b = b || window.event) {
    if ("undefined" != typeof b.clientX) {
      xm = b.clientX - ww / 2;
      ym = b.clientY - hh / 2;
    }
  }
};

function setAcceleration(b) {
  if (null != snake) {
    snake.md = 1 == b;
    if (5 <= protocol_version) {
      var h = new Uint8Array(1);
      h[0] = 1 == b ? 253 : 254;
    }
    else {
      h = new Uint8Array(2);
      h[0] = 109;
      h[1] = b;
    }
    ws.send(h);
  }
}
window.oncontextmenu = function(b) {
  b.preventDefault();
  b.stopPropagation();
  return false;
};
window.ontouchmove = function(b) {
  dmutm = Date.now() + 1500;
  if (null != snake) {
    if (b = b || window.event) {
      b = b.touches[0];
      if ("undefined" != typeof b.clientX) {
        xm = b.clientX - ww / 2;
        ym = b.clientY - hh / 2;
      }
      else {
        xm = b.pageX - ww / 2;
        ym = b.pageY - hh / 2;
      }
    }
  }
};
var dmutm = 0;
var ltchx = -1;
var ltchy = -1;
var ltchmtm = -1;
window.ontouchstart = function(b) {
  dmutm = Date.now() + 1500;
  if (null != snake) {
    if (b = b || window.event) {
      var h;
      var c;
      c = b.touches[0];
      if ("undefined" != typeof c.clientX) {
        h = c.clientX - ww / 2;
        c = c.clientY - hh / 2;
      }
      else {
        h = c.pageX - ww / 2;
        c = c.pageY - hh / 2;
      }
      var f = Date.now();
      if (24 > Math.abs(h - ltchx)) {
        if (24 > Math.abs(c - ltchy)) {
          if (400 > f - ltchmtm) {
            setAcceleration(1);
          }
        }
      }
      ltchx = h;
      ltchy = c;
      ltchmtm = f;
      xm = h;
      ym = c;
    }
    b.preventDefault();
  }
};
window.onmousedown = function(b) {
  if (0 == dmutm || Date.now() > dmutm) {
    dmutm = 0;
    if (null != snake) {
      window.onmousemove(b);
      setAcceleration(1);
      b.preventDefault();
    }
  }
};
window.ontouchend = function() {
  setAcceleration(0);
};

function omu(b) {
  setAcceleration(0);
}
window.addEventListener("mouseup", omu);
var mscps = 0;
var fmlts = [];
var fpsls = [];
var etm = 0;
var ws = null;
var tcsecs = 0;
var trdps = 0;
var rdps = 0;
var rfps = 0;
var rnps = 0;
var rsps = 0;
var reps = 0;
var rdpspc = [];
var anguc = 0;
var angnuc = 0;
var wangnuc = 0;
var lrd_mtm = Date.now();
var locu_mtm = 0;
if (testing) {
  i = 0;
  for (; 256 > i; i++) {
    rdpspc[i] = -1;
  }
}
var pfs = [];
var pft = 0;
var pf1 = 0;
var pf2 = 0;
var rpf1;
var rpf2;
var pf_nap = 0;
var pf_ep = 0;
var rpft = 0;
var pf;
i = 0;
for (; 100 > i; i++) {
  pfs.push(0);
}
var pf_add = 0;
var pf_new_add = 0;
var pf_remove = 0;
var tpfa = new Float32Array(4E4);
i = 0;
for (; i < tpfa.length; i++) {
  tpfa[i] = 32 * Math.random();
}
var pfd;
if (testing) {
  pfd = document.createElement("div");
  pfd.style.position = "fixed";
  pfd.style.left = "4px";
  pfd.style.bottom = "69px";
  pfd.style.width = "170px";
  pfd.style.height = "364px";
  pfd.style.background = "rgba(0, 0, 0, .8)";
  pfd.style.color = "#80FF80";
  pfd.style.fontFamily = "Verdana";
  pfd.style.zIndex = 999999;
  pfd.style.fontSize = "11px";
  pfd.style.padding = "10px";
  pfd.style.borderRadius = "30px";
  pfd.textContent = "ayy lmao";
  document.body.appendChild(pfd);
}

function resetGame() {
  if (ws) {
    ws.close();
    ws = null;
  }
  snake = null;
  want_close_socket = false;
  snakes = [];
  foods = [];
  foods_c = 0;
  preys = [];
  sectors = [];
  os = {};
  rank = 0;
  best_rank = 999999999;
  biggest_snake_count = snake_count = 0;
  lagging = wfpr = playing = connected = false;
  j = vfc - 1;
  for (; 0 <= j; j--) {
    fvxs[j] = 0;
    fvys[j] = 0;
  }
  fvy = fvx = fvtg = 0;
  lag_mult = 1;
  cptm = 0;
  gsc = sgsc;
}
var protocol_version = 2;
var connecting = false;
var start_connect_mtm;
var play_btn_click_mtm = -1;
var waiting_for_sos = false;
var sos_ready_after_mtm = -1;

function connect() {
  if (0 == sos.length) {
    if (!waiting_for_sos) {
      waiting_for_sos = true;
      sos_ready_after_mtm = -1;
    }
  }
  else {
    waiting_for_sos = false;
    sos_ready_after_mtm = -1;
    resetGame();
    connecting = true;
    start_connect_mtm = Date.now();
    if (!forcing) {
      var b$$0 = 0;
      for (; b$$0 < sos.length; b$$0++) {
        sos[b$$0].ptm = 9999999;
      }
      b$$0 = clus.length - 1;
      for (; 0 <= b$$0; b$$0--) {
        var h$$0 = clus[b$$0];
        if (h$$0 && 0 < h$$0.ptms.length) {
          var c$$0 = 0;
          var f$$0 = h$$0.ptms.length - 1;
          for (; 0 <= f$$0; f$$0--) {
            c$$0 += h$$0.ptms[f$$0];
          }
          c$$0 /= h$$0.ptms.length;
          if (testing) {
            console.log("cluster " + b$$0 + " ping time: " + c$$0);
          }
          f$$0 = sos.length - 1;
          for (; 0 <= f$$0; f$$0--) {
            if (sos[f$$0].clu == b$$0) {
              sos[f$$0].ptm = c$$0;
            }
          }
        }
      }
      if ("undefined" != typeof rmsos) {
        b$$0 = 0;
        for (; b$$0 < rmsos.length; b$$0++) {
          h$$0 = "." + rmsos[b$$0].a[0] + "." + rmsos[b$$0].a[1] + "." + rmsos[b$$0].a[2];
          c$$0 = rmsos[b$$0].a[3];
          f$$0 = sos.length - 1;
          for (; 0 <= f$$0; f$$0--) {
            if (0 <= sos[f$$0].ip.indexOf(h$$0)) {
              if (sos[f$$0].po == c$$0) {
                sos.splice(f$$0, 1);
              }
            }
          }
        }
      }
      sos.sort(function(b, c) {
        return parseFloat(b.po) - parseFloat(c.po);
      });
      bso = sos[Math.floor(Math.random() * sos.length)];
      b$$0 = sos.length - 1;
      for (; 0 <= b$$0; b$$0--) {
        if (!sos[b$$0].tainted) {
          if (sos[b$$0].ptm <= bso.ptm) {
            if (30 < sos[b$$0].ac) {
              bso = sos[b$$0];
            }
          }
        }
      }
    }
    ws = new WebSocket("ws://" + bso.ip + ":" + bso.po + "/slither");
    ws.binaryType = "arraybuffer";
    window.ws = ws;
    ws.onmessage = function(b) {
      if (ws == this && (b = new Uint8Array(b.data), rdps += b.length, 2 <= b.length)) {
        lptm = cptm;
        cptm = Date.now();
        var c = b[0] << 8 | b[1];
        var e = cptm - lptm;
        if (0 == lptm) {
          e = 0;
        }
        etm += e - c;
        if (testing) {
          rdpspc[b[2]] += b.length;
        }
        var f = String.fromCharCode(b[2]);
        c = 3;
        var h = b.length;
        e = b.length - 2;
        var t = b.length - 3;
        if ("a" == f) {
          connecting = false;
          playing = connected = true;
          play_btn_click_mtm = -1;
          grd = b[c] << 16 | b[c + 1] << 8 | b[c + 2];
          c += 3;
          e = b[c] << 8 | b[c + 1];
          c += 2;
          sector_size = b[c] << 8 | b[c + 1];
          c += 2;
          sector_count_along_edge = b[c] << 8 | b[c + 1];
          c += 2;
          spangdv = b[c] / 10;
          c++;
          nsp1 = (b[c] << 8 | b[c + 1]) / 100;
          c += 2;
          nsp2 = (b[c] << 8 | b[c + 1]) / 100;
          c += 2;
          nsp3 = (b[c] << 8 | b[c + 1]) / 100;
          c += 2;
          mamu = (b[c] << 8 | b[c + 1]) / 1E3;
          c += 2;
          mamu2 = (b[c] << 8 | b[c + 1]) / 1E3;
          c += 2;
          cst = (b[c] << 8 | b[c + 1]) / 1E3;
          c += 2;
          if (c < h) {
            protocol_version = b[c];
          }
          console.log("game radius = " + grd);
          setMscps(e);
          lbh.style.display = "inline";
          lbs.style.display = "inline";
          lbn.style.display = "inline";
          lbp.style.display = "inline";
          lbf.style.display = "inline";
          vcm.style.display = "inline";
          loch.style.display = "inline";
          startShowGame();
        }
        else {
          if ("e" == f || ("E" == f || ("3" == f || ("4" == f || "5" == f)))) {
            var x = b[c] << 8 | b[c + 1];

            c = c + 2;

            var D = h = -1;
            var y = -1;
            var B = -1;

            //if (6 <= protocol_version)
            //removed older protocol version


            //e is data lenght without first 3 byte
            if (e == 6) {


              h = "e" == f ? 1 : 2;


              D = 2 * b[c] * Math.PI / 256;
              c++;
              y = 2 * b[c] * Math.PI / 256;
              c++;
              B = b[c] / 18;


            }
            else if (e == 5) {

              if ("e" == f) {
                D = 2 * b[c] * Math.PI / 256;
                c++;
                B = b[c] / 18;
              }
              else if ("E" == f) {
                h = 1;
                y = 2 * b[c] * Math.PI / 256;
                c++;
                B = b[c] / 18;
              }
              else if ("4" == f) {
                h = 2;
                y = 2 * b[c] * Math.PI / 256;
                c++;
                B = b[c] / 18;
              }
              else if ("3" == f) {
                h = 1;
                D = 2 * b[c] * Math.PI / 256;
                c++;
                y = 2 * b[c] * Math.PI / 256;
              }
              else if ("5" == f) {
                h = 2;
                D = 2 * b[c] * Math.PI / 256;
                c++;
                y = 2 * b[c] * Math.PI / 256;
              }



            }
            else if (4 == e) {

              if ("e" == f) {
                D = 2 * b[c] * Math.PI / 256;
              }
              else if ("E" == f) {
                h = 1;
                y = 2 * b[c] * Math.PI / 256;
              }
              else if ("4" == f) {
                h = 2;
                y = 2 * b[c] * Math.PI / 256;
              }
              else if ("3" == f) {
                B = b[c] / 18;
              }

            }



            var q = os["s" + x];
            if (q) {


              if (-1 != h) {
                q.dir = h;
              }
              anguc++;
              if (-1 != D) {

                //angnuc is never used

                if (q.ang == D) {
                  angnuc++;
                }

                b = (D - q.ang) % pi2;

                if (0 > b) {
                  b += pi2;
                }
                if (b > Math.PI) {
                  b -= pi2;
                }

                x = q.fapos;
                t = 0;
                for (; t < afc; t++) {
                  q.fas[x] -= b * afas[t];
                  x++;
                  if (x >= afc) {
                    x = 0;
                  }
                }

                q.fatg = afc;
                q.ang = D;
              }
              if (-1 != y) {
                if (q.wang == y) {
                  wangnuc++;
                }
                q.wang = y;
                if (q != snake) {
                  q.eang = y;
                }
              }
              if (-1 != B) {
                q.sp = B;
                q.spang = q.sp / spangdv;
                if (1 < q.spang) {
                  q.spang = 1;
                }
              }



            }




          }
          else {
            if ("h" == f) {
              x = b[c] << 8 | b[c + 1];
              c = c + 2;
              var I = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 16777215;
              if (q = os["s" + x]) {
                q.fam = I;
                snl(q);
              }
            }
            else {
              if ("r" == f) {
                if (x = b[c] << 8 | b[c + 1], c += 2, q = os["s" + x]) {
                  if (4 <= t) {
                    q.fam = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 16777215;
                  }
                  t = 0;
                  for (; t < q.pts.length; t++) {
                    if (!q.pts[t].dying) {
                      q.pts[t].dying = true;
                      q.sct--;
                      q.sc = Math.min(6, 1 + (q.sct - 2) / 106);
                      q.scang = 0.13 + 0.87 * Math.pow((7 - q.sc) / 6, 2);
                      q.ssp = nsp1 + nsp2 * q.sc;
                      q.fsp = q.ssp + 0.1;
                      q.wsep = 6 * q.sc;
                      b = nsep / gsc;
                      if (q.wsep < b) {
                        q.wsep = b;
                      }
                      break;
                    }
                  }
                  snl(q);
                }
              }
              else {
                if ("g" == f || ("n" == f || ("G" == f || "N" == f))) {

                  x = b[c] << 8 | b[c + 1];
                  q = os["s" + x];
                  I = "n" == f || "N" == f;

                  c += 2;


                  //   if (playing) {


                  // if is "n" or "N"
                  if (I) {

                    q.sct++;

                  }
                  else {

                    t = 0;

                    //sets the first part to dying that is not dying =true
                    for (; t < q.pts.length; t++) {
                      if (!q.pts[t].dying) {
                        q.pts[t].dying = true;
                        break;
                      }
                    }
                  }




                  var A = q.pts[q.pts.length - 1];
                  t = A;
                  h = false;

                  if ("g" == f || "n" == f) {
                    e = b[c] << 8 | b[c + 1];
                    c += 2;
                    C = b[c] << 8 | b[c + 1];
                    c += 2;
                  } else {
                    e = t.xx + b[c] - 128;
                    c++;
                    C = t.yy + b[c] - 128;
                    c++;
                  }

                  if (I) {
                    q.fam = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 16777215;
                  }
                  
                  
                  if (!(A = points_dp.get())) {
                    A = {
                      exs: [],
                      eys: [],
                      efs: [],
                      ems: []
                    };
                  }
                  
                  A.eiu = 0;
                  A.xx = e;
                  A.yy = C;
                  A.fx = 0;
                  A.fy = 0;
                  A.da = 0;
                  A.ebx = A.xx - t.xx;
                  A.eby = A.yy - t.yy;
                  q.pts.push(A);
                  h = true;
                  if (q.iiv) {
                    b = q.xx + q.fx - A.xx;
                    c = q.yy + q.fy - A.yy;
                    A.fx += b;
                    A.fy += c;
                    A.exs[A.eiu] = b;
                    A.eys[A.eiu] = c;
                    A.efs[A.eiu] = 0;
                    A.ems[A.eiu] = 1;
                    A.eiu++;
                  }
                  x = q.pts.length - 3;
                  if (1 <= x) {
                    D = q.pts[x];
                    f = n = 0;
                    t = x - 1;
                    for (; 0 <= t; t--) {
                      x = q.pts[t];
                      n++;
                      b = x.xx;
                      c = x.yy;
                      if (4 >= n) {
                        f = cst * n / 4;
                      }
                      x.xx += (D.xx - x.xx) * f;
                      x.yy += (D.yy - x.yy) * f;
                      if (q.iiv) {
                        b -= x.xx;
                        c -= x.yy;
                        x.fx += b;
                        x.fy += c;
                        x.exs[x.eiu] = b;
                        x.eys[x.eiu] = c;
                        x.efs[x.eiu] = 0;
                        x.ems[x.eiu] = 2;
                        x.eiu++;
                      }
                      D = x;
                    }
                  }
                  q.sc = Math.min(6, 1 + (q.sct - 2) / 106);
                  q.scang = 0.13 + 0.87 * Math.pow((7 - q.sc) / 6, 2);
                  q.ssp = nsp1 + nsp2 * q.sc;
                  q.fsp = q.ssp + 0.1;
                  q.wsep = 6 * q.sc;
                  b = nsep / gsc;
                  if (q.wsep < b) {
                    q.wsep = b;
                  }
                  if (I) {
                    snl(q);
                  }
                  q.lnp = A;
                  if (q == snake) {
                    ovxx = snake.xx + snake.fx;
                    ovyy = snake.yy + snake.fy;
                  }
                  A = etm / 8 * q.sp / 4;
                  A *= lag_mult;
                  t = q.chl - 1;
                  q.chl = A / q.msl;
                  f = q.xx;
                  x = q.yy;
                  q.xx = e + Math.cos(q.ang) * A;
                  q.yy = C + Math.sin(q.ang) * A;
                  b = q.xx - f;
                  c = q.yy - x;
                  e = q.chl - t;
                  x = q.fpos;
                  t = 0;
                  for (; t < rfc; t++) {
                    q.fxs[x] -= b * rfas[t];
                    q.fys[x] -= c * rfas[t];
                    q.fchls[x] -= e * rfas[t];
                    x++;
                    if (x >= rfc) {
                      x = 0;
                    }
                  }
                  q.fx = q.fxs[q.fpos];
                  q.fy = q.fys[q.fpos];
                  q.fchl = q.fchls[q.fpos];
                  q.ftg = rfc;
                  if (h) {
                    q.ehl = 0;
                  }
                  if (q == snake) {
                    view_xx = snake.xx + snake.fx;
                    view_yy = snake.yy + snake.fy;
                    b = view_xx - ovxx;
                    c = view_yy - ovyy;
                    x = fvpos;
                    t = 0;
                    for (; t < vfc; t++) {
                      fvxs[x] -= b * vfas[t];
                      fvys[x] -= c * vfas[t];
                      x++;
                      if (x >= vfc) {
                        x = 0;
                      }
                    }
                    fvtg = vfc;
                  }




















                }
                else {
                  if ("l" == f) {
                    if (playing) {
                      wumsts = true;
                      D = A = C = "";
                      B = y = 0;
                      if (-1 == lb_fr) {
                        if (-1 == dead_mtm) {
                          lb_fr = 0;
                        }
                      }
                      var L = b[c];
                      c++;
                      rank = b[c] << 8 | b[c + 1];
                      if (rank < best_rank) {
                        best_rank = rank;
                      }
                      c += 2;
                      snake_count = b[c] << 8 | b[c + 1];
                      if (snake_count > biggest_snake_count) {
                        biggest_snake_count = snake_count;
                      }
                      c += 2;
                      for (; c < h;) {
                        var J = b[c] << 8 | b[c + 1];
                        c = c + 2;
                        I = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 16777215;
                        c = c + 3;
                        q = b[c] % 9;
                        c++;
                        e = b[c];
                        c++;
                        B++;
                        f = "";
                        t = 0;
                        for (; t < e; t++) {
                          x = b[c];
                          f += String.fromCharCode(x);
                          c++;
                        }
                        if (B != L) {
                          if (!gdnm(f)) {
                            f = "";
                          }
                        }
                        var H = "";
                        t = 0;
                        for (; t < e; t++) {
                          x = f.charCodeAt(t);
                          H = 38 == x ? H + "&amp;" : 60 == x ? H + "&lt;" : 62 == x ? H + "&gt;" : 32 == x ? H + "&nbsp;" : H + String.fromCharCode(x);
                        }
                        f = H;
                        y++;
                        score = Math.floor(150 * (fpsls[J] + I / fmlts[J] - 1) - 50) / 10;
                        x = B == L ? 1 : 0.7 * (0.3 + 0.7 * (1 - y / 10));
                        C += '<span style="opacity:' + x + "; color:" + per_color_imgs[q].cs + ';">' + score + "</span><BR>";
                        A += '<span style="opacity:' + x + "; color:" + per_color_imgs[q].cs + ";" + (B == L ? "font-weight:bold;" : "") + '">' + f + "</span><BR>";
                        D += '<span style="opacity:' + x + "; color:" + per_color_imgs[q].cs + ';">#' + y + "</span><BR>";
                      }
                      lbs.innerHTML = C;
                      lbn.innerHTML = A;
                      lbp.innerHTML = D;
                    }
                  }
                  else {
                    if ("v" == f) {
                      if (2 == b[c]) {
                        want_close_socket = true;
                        want_victory_message = false;
                        want_hide_victory = 1;
                        hvfr = 0;
                      }
                      else {
                        dead_mtm = Date.now();
                        play_btn.setEnabled(true);
                        e = Math.floor(150 * (fpsls[snake.sct] + snake.fam / fmlts[snake.sct] - 1) - 50) / 10;
                        twt.href = "http://twitter.com/intent/tweet?status=" + encodeURIComponent("I got a length of " + e + " in http://slither.io! Can you beat that? #slitherio");
                        C = "Your final length was";
                        if ("DE" == country) {
                          C = "Deine endgültige Länge war";
                        }
                        else {
                          if ("FR" == country) {
                            C = "Votre longueur finale était de";
                          }
                          else {
                            if ("BR" == country) {
                              C = "Seu comprimento final foi de";
                            }
                          }
                        }
                        h = "";
                        if (1E3 < e) {
                          h = "!";
                        }
                        lastscore.innerHTML = '<span style="opacity: .45;">' + C + " </span><b>" + e + "</b>" + h;
                        e = "Play Again";
                        if ("FR" == country) {
                          e = "Jouer";
                        }
                        else {
                          if ("BR" == country) {
                            e = "Joga";
                          }
                        }
                        play_btn.setText(String.fromCharCode(160) + e + String.fromCharCode(160));
                        if (1 == b[c]) {
                          nick_holder.style.display = "none";
                          playh.style.display = "none";
                          smh.style.display = "none";
                          victory_holder.style.display = "inline";
                          saveh.style.display = "block";
                          want_victory_focus = want_victory_message = true;
                          victory.disabled = false;
                          save_btn.setEnabled(true);
                        }
                        else {
                          want_close_socket = true;
                        }
                      }
                    }
                    else {
                      if ("w" == f) {
                        if (h = b[c], c++, e = b[c] << 8 | b[c + 1], c += 2, C = b[c] << 8 | b[c + 1], 1 == h) {
                          q = {};
                          q.xx = e;
                          q.yy = C;
                          sectors.push(q);
                        }
                        else {
                          A = cm1 = foods_c - 1;
                          for (; 0 <= A; A--) {
                            t = foods[A];
                            if (t.sx == e) {
                              if (t.sy == C) {
                                if (A == cm1) {
                                  foods[A] = null;
                                }
                                else {
                                  foods[A] = foods[cm1];
                                  foods[cm1] = null;
                                }
                                foods_c--;
                                cm1--;
                              }
                            }
                          }
                          A = sectors.length - 1;
                          for (; 0 <= A; A--) {
                            q = sectors[A];
                            if (q.xx == e) {
                              if (q.yy == C) {
                                sectors.splice(A, 1);
                              }
                            }
                          }
                        }
                      }
                      else {
                        if ("m" == f) {
                          J = b[c] << 16 | b[c + 1] << 8 | b[c + 2];
                          c += 3;
                          I = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 16777215;
                          c += 3;
                          C = Math.floor(150 * (fpsls[J] + I / fmlts[J] - 1) - 50) / 10;
                          e = b[c];
                          c++;
                          t = "";
                          A = 0;
                          for (; A < e; A++) {
                            t += String.fromCharCode(b[c]);
                            c++;
                          }
                          e = "";
                          for (; c < h;) {
                            e += String.fromCharCode(b[c]);
                            c++;
                          }
                          t = t.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
                          e = e.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
                          if (0 < C) {
                            b = "";
                            if (0 < e.length) {
                              b += "<span style='font-size:17px;'><b><i><span style='opacity: .5;'>&quot;</span>" + e + "<span style='opacity: .5;'>&quot;</span></i></b></span><BR><div style='height: 5px;'></div>";
                            }
                            if (0 < t.length) {
                              b = 0 < e.length ? b + ("<i><span style='opacity: .5;'>- </span><span style='opacity: .75;'><b>" + t + "</b></span><span style='opacity: .5;'>, today's longest</span></i>") : "<i><span style='opacity: .5;'>Today's longest was </span><span style='opacity: .75;'><b>" + t + "</b></span></i>";
                              b += "<br><i><span style='opacity: .5;'>with a length of </span><span style='opacity: .65;'><b>" + C + "</b></span></i>";
                            }
                            else {
                              b = 0 < e.length ? b + "<i><span style='opacity: .5;'>- </span><span style='opacity: .5;'>today's longest</span></i>" + ("<br><i><span style='opacity: .5;'>with a length of </span><span style='opacity: .65;'><b>" + C + "</b></span></i>") : b + ("<i><span style='opacity: .5;'>Today's longest: </span><span style='opacity: .75;'><b>" + C + "</b></span></i>");
                            }
                            vcm.innerHTML = b;
                          }
                        }
                        else {
                          if ("p" == f) {
                            wfpr = false;
                            if (lagging) {
                              etm *= lag_mult;
                              lagging = false;
                            }
                          }
                          else {
                            if ("u" == f) {
                              t = asmc.getContext("2d");
                              t.clearRect(0, 0, 80, 80);
                              t.fillStyle = "#FFFFFF";
                              var C = e = 0;
                              for (; c < h && !(80 <= C);) {
                                if (x = b[c++], 128 <= x) {
                                  x -= 128;
                                  A = 0;
                                  for (; A < x && !(e++, 80 <= e && (e = 0, C++, 80 <= C)); A++) {}
                                }
                                else {
                                  A = 0;
                                  for (; 7 > A && !(0 < (x & u_m[A]) && t.fillRect(e, C, 1, 1), e++, 80 <= e && (e = 0, C++, 80 <= C)); A++) {}
                                }
                              }
                            }
                            else {
                              if ("s" == f) {
                                if (playing) {
                                  if (x = b[c] << 8 | b[c + 1], c += 2, 6 < t) {
                                    D = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215;
                                    c += 3;
                                    c++;
                                    y = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215;
                                    c += 3;
                                    B = (b[c] << 8 | b[c + 1]) / 1E3;
                                    c += 2;
                                    I = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 16777215;
                                    c += 3;
                                    q = b[c];
                                    c++;
                                    L = [];
                                    J = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 5;
                                    c += 3;
                                    H = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 5;
                                    c += 3;
                                    e = b[c];
                                    c++;
                                    f = "";
                                    t = 0;
                                    for (; t < e; t++) {
                                      f += String.fromCharCode(b[c]);
                                      c++;
                                    }
                                    var M = t = C = e = 0;
                                    var O = false;
                                    for (; c < h;) {
                                      t = e;
                                      M = C;
                                      if (O) {
                                        e += (b[c] - 127) / 2;
                                        c++;
                                        C += (b[c] - 127) / 2;
                                        c++;
                                      }
                                      else {
                                        e = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 5;
                                        c += 3;
                                        C = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 5;
                                        c += 3;
                                        t = e;
                                        M = C;
                                        O = true;
                                      }
                                      if (!(A = points_dp.get())) {
                                        A = {
                                          exs: [],
                                          eys: [],
                                          efs: [],
                                          ems: []
                                        };
                                      }
                                      A.eiu = 0;
                                      A.xx = e;
                                      A.yy = C;
                                      A.fx = 0;
                                      A.fy = 0;
                                      A.da = 0;
                                      A.ebx = e - t;
                                      A.eby = C - M;
                                      L.push(A);
                                    }
                                    q = newSnake(x, J, H, q, D, L);
                                    if (null == snake) {
                                      view_xx = e;
                                      view_yy = C;
                                      snake = q;
                                      q.nk = f;
                                    }
                                    else {
                                      q.nk = f;
                                      if (!gdnm(f)) {
                                        q.nk = "";
                                      }
                                    }
                                    q.eang = q.wang = y;
                                    q.sp = B;
                                    q.spang = q.sp / spangdv;
                                    if (1 < q.spang) {
                                      q.spang = 1;
                                    }
                                    q.fam = I;
                                    q.sc = Math.min(6, 1 + (q.sct - 2) / 106);
                                    q.scang = 0.13 + 0.87 * Math.pow((7 - q.sc) / 6, 2);
                                    q.ssp = nsp1 + nsp2 * q.sc;
                                    q.fsp = q.ssp + 0.1;
                                    q.wsep = 6 * q.sc;
                                    b = nsep / gsc;
                                    if (q.wsep < b) {
                                      q.wsep = b;
                                    }
                                    q.sep = q.wsep;
                                    snl(q);
                                  }
                                  else {
                                    b = 1 == b[c];
                                    A = snakes.length - 1;
                                    for (; 0 <= A; A--) {
                                      if (snakes[A].id == x) {
                                        snakes[A].id = -1234;
                                        if (b) {
                                          snakes[A].dead = true;
                                          snakes[A].dead_amt = 0;
                                          snakes[A].edir = 0;
                                        }
                                        else {
                                          snakes.splice(A, 1);
                                        }
                                        delete os["s" + x];
                                        break;
                                      }
                                    }
                                  }
                                }
                              }
                              else {
                                if ("F" == f) {
                                  if (4 <= protocol_version) {
                                    f = false;
                                    for (; c < h;) {
                                      q = b[c];
                                      c++;
                                      e = b[c] << 8 | b[c + 1];
                                      c += 2;
                                      C = b[c] << 8 | b[c + 1];
                                      c += 2;
                                      t = b[c] / 5;
                                      c++;
                                      x = C * grd * 3 + e;
                                      t = newFood(x, e, C, t, true, q);
                                      if (!f) {
                                        f = true;
                                        A = Math.floor(e / sector_size);
                                        I = Math.floor(C / sector_size);
                                      }
                                      t.sx = A;
                                      t.sy = I;
                                    }
                                    q = {};
                                    q.xx = A;
                                    q.yy = I;
                                    sectors.push(q);
                                  }
                                  else {
                                    A = b[c] << 8 | b[c + 1];
                                    c += 2;
                                    I = b[c] << 8 | b[c + 1];
                                    c += 2;
                                    q = {};
                                    q.xx = A;
                                    q.yy = I;
                                    sectors.push(q);
                                    for (; c < h;) {
                                      x = b[c] << 16 | b[c + 1] << 8 | b[c + 2];
                                      c += 3;
                                      q = b[c];
                                      c++;
                                      e = sector_size * (A + b[c] / 255);
                                      c++;
                                      C = sector_size * (I + b[c] / 255);
                                      c++;
                                      t = b[c] / 5;
                                      c++;
                                      t = newFood(x, e, C, t, true, q);
                                      t.sx = A;
                                      t.sy = I;
                                    }
                                  }
                                }
                                else {
                                  if ("b" == f || "f" == f) {
                                    if (4 <= protocol_version) {
                                      q = b[c];
                                      c++;
                                      if (4 < t) {
                                        e = b[c] << 8 | b[c + 1];
                                        c += 2;
                                        C = b[c] << 8 | b[c + 1];
                                        x = C * grd * 3 + e;
                                        t = b[c + 2] / 5;
                                        t = newFood(x, e, C, t, "b" == f, q);
                                        t.sx = Math.floor(e / sector_size);
                                        t.sy = Math.floor(C / sector_size);
                                      }
                                    }
                                    else {
                                      x = b[c] << 16 | b[c + 1] << 8 | b[c + 2];
                                      c += 3;
                                      if (4 < t) {
                                        q = b[c];
                                        c++;
                                        A = b[c] << 8 | b[c + 1];
                                        c += 2;
                                        I = b[c] << 8 | b[c + 1];
                                        c += 2;
                                        e = sector_size * (A + b[c] / 255);
                                        c++;
                                        C = sector_size * (I + b[c] / 255);
                                        c++;
                                        t = b[c] / 5;
                                        t = newFood(x, e, C, t, "b" == f, q);
                                        t.sx = A;
                                        t.sy = I;
                                      }
                                    }
                                  }
                                  else {
                                    if ("c" == f) {
                                      if (4 <= protocol_version) {
                                        e = b[c] << 8 | b[c + 1];
                                        c += 2;
                                        C = b[c] << 8 | b[c + 1];
                                        c += 2;
                                        x = C * grd * 3 + e;
                                      }
                                      else {
                                        x = b[c] << 16 | b[c + 1] << 8 | b[c + 2];
                                        c += 3;
                                      }
                                      A = cm1 = foods_c - 1;
                                      for (; 0 <= A; A--) {
                                        if (t = foods[A], t.id == x) {
                                          t.eaten = true;
                                          if (c + 2 <= h) {
                                            b = b[c] << 8 | b[c + 1];
                                            t.eaten_by = os["s" + b];
                                            t.eaten_fr = 0;
                                          }
                                          else {
                                            if (A == cm1) {
                                              foods[A] = null;
                                            }
                                            else {
                                              foods[A] = foods[cm1];
                                              foods[cm1] = null;
                                            }
                                            foods_c--;
                                            cm1--;
                                          }
                                          x = -1;
                                          break;
                                        }
                                      }
                                      if (-1 != x) {
                                        console.log("wtf");
                                      }
                                    }
                                    else {
                                      if ("j" == f) {
                                        x = b[c] << 8 | b[c + 1];
                                        c += 2;
                                        e = 1 + 3 * (b[c] << 8 | b[c + 1]);
                                        c += 2;
                                        C = 1 + 3 * (b[c] << 8 | b[c + 1]);
                                        c += 2;
                                        h = null;
                                        A = preys.length - 1;
                                        for (; 0 <= A; A--) {
                                          if (preys[A].id == x) {
                                            h = preys[A];
                                            break;
                                          }
                                        }
                                        if (h) {
                                          A = etm / 8 * h.sp / 4;
                                          A *= lag_mult;
                                          f = h.xx;
                                          x = h.yy;
                                          if (15 == t) {
                                            h.dir = b[c] - 48;
                                            c++;
                                            h.ang = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215;
                                            c += 3;
                                            h.wang = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215;
                                            c += 3;
                                            h.sp = (b[c] << 8 | b[c + 1]) / 1E3;
                                          }
                                          else {
                                            if (11 == t) {
                                              h.ang = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215;
                                              c += 3;
                                              h.sp = (b[c] << 8 | b[c + 1]) / 1E3;
                                            }
                                            else {
                                              if (12 == t) {
                                                h.dir = b[c] - 48;
                                                c++;
                                                h.wang = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215;
                                                c += 3;
                                                h.sp = (b[c] << 8 | b[c + 1]) / 1E3;
                                              }
                                              else {
                                                if (13 == t) {
                                                  h.dir = b[c] - 48;
                                                  c++;
                                                  h.ang = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215;
                                                  c += 3;
                                                  h.wang = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215;
                                                }
                                                else {
                                                  if (9 == t) {
                                                    h.ang = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215;
                                                  }
                                                  else {
                                                    if (10 == t) {
                                                      h.dir = b[c] - 48;
                                                      c++;
                                                      h.wang = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215;
                                                    }
                                                    else {
                                                      if (8 == t) {
                                                        h.sp = (b[c] << 8 | b[c + 1]) / 1E3;
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          h.xx = e + Math.cos(h.ang) * A;
                                          h.yy = C + Math.sin(h.ang) * A;
                                          b = h.xx - f;
                                          c = h.yy - x;
                                          x = h.fpos;
                                          t = 0;
                                          for (; t < rfc; t++) {
                                            h.fxs[x] -= b * rfas[t];
                                            h.fys[x] -= c * rfas[t];
                                            x++;
                                            if (x >= rfc) {
                                              x = 0;
                                            }
                                          }
                                          h.fx = h.fxs[h.fpos];
                                          h.fy = h.fys[h.fpos];
                                          h.ftg = rfc;
                                        }
                                      }
                                      else {
                                        if ("y" == f) {
                                          if (x = b[c] << 8 | b[c + 1], c += 2, 2 == t) {
                                            A = preys.length - 1;
                                            for (; 0 <= A; A--) {
                                              if (h = preys[A], h.id == x) {
                                                preys.splice(A, 1);
                                                break;
                                              }
                                            }
                                          }
                                          else {
                                            if (4 == t) {
                                              b = b[c] << 8 | b[c + 1];
                                              A = preys.length - 1;
                                              for (; 0 <= A; A--) {
                                                if (h = preys[A], h.id == x) {
                                                  h.eaten = true;
                                                  h.eaten_by = os["s" + b];
                                                  if (h.eaten_by) {
                                                    h.eaten_fr = 0;
                                                  }
                                                  else {
                                                    preys.splice(A, 1);
                                                  }
                                                  break;
                                                }
                                              }
                                            }
                                            else {
                                              q = b[c];
                                              c++;
                                              e = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 5;
                                              c += 3;
                                              C = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 5;
                                              c += 3;
                                              t = b[c] / 5;
                                              c++;
                                              h = b[c] - 48;
                                              c++;
                                              y = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215;
                                              c += 3;
                                              D = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215;
                                              c += 3;
                                              B = (b[c] << 8 | b[c + 1]) / 1E3;
                                              newPrey(x, e, C, t, q, h, y, D, B);
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
    };
    ws.onerror = function(b) {};
    ws.onclose = function(b) {
      if (ws == this) {
        playing = connected = false;
      }
    };
    ws.onopen = function(b) {
      if (ws == this) {
        b = asciize(nick.value);
        if (24 < b.length) {
          b = b.substr(0, 24);
        }
        var c = Math.floor(9 * Math.random());
        try {
          var e = localStorage.snakercv;
          if (e == "" + Number(e)) {
            c = Number(e);
          }
        }
        catch (f) {}
        e = new Uint8Array(3 + b.length);
        e[0] = 115;
        e[1] = 5;
        e[2] = c;
        c = 0;
        for (; c < b.length; c++) {
          e[c + 3] = b.charCodeAt(c);
        }
        ws.send(e);
        high_quality = true;
        gla = 1;
        wdfg = 0;
        qsm = 1;
        if (0 == want_quality) {
          high_quality = false;
          gla = 0;
          qsm = 1.7;
        }
        if (1 == render_mode) {
          high_quality = false;
          gla = 0;
        }
        lpstm = Date.now();
      }
    };
  }
}

function asciize(b) {
  var h;
  var c;
  var f;
  c = b.length;
  var w = false;
  h = 0;
  for (; h < c; h++) {
    if (f = b.charCodeAt(h), 32 > f || 127 < f) {
      w = true;
      break;
    }
  }
  if (w) {
    w = "";
    h = 0;
    for (; h < c; h++) {
      f = b.charCodeAt(h);
      w = 32 > f || 127 < f ? w + " " : w + String.fromCharCode(f);
    }
    return w;
  }
  return b;
}
var smh = document.getElementById("smh");
var cstx = document.getElementById("cstx");
cstx.src = "FR" == country ? "/s/customskins-fr.png" : "BR" == country ? "/s/customskins-br.png" : "/s/customskins2.png";
try {
  if ("1" != localStorage.edttsg) {
    cstx.style.display = "inline";
  }
}
catch (b$$53) {}
var fb = document.getElementById("fb");
fb.href = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent("http://slither.io");
fb.onclick = function() {
  localStorage.edttsg = "1";
};
var fbh = document.getElementById("fbh");
var twt = document.getElementById("twt");
twt.onclick = function() {
  localStorage.edttsg = "1";
};
twt.href = "http://twitter.com/intent/tweet?status=" + encodeURIComponent("Come and play http://slither.io #slitherio");
var twth = document.getElementById("twth");
var csk = document.getElementById("csk");
var cskh = document.getElementById("cskh");
var want_quality = 1;
var grq = document.getElementById("grq");
var grqh = document.getElementById("grqh");
var phqi = document.createElement("img");
var grqi = document.getElementById("grqi");
try {
  if ("0" == localStorage.qual) {
    grqi.src = "/s/lowquality.png";
    want_quality = 0;
  }
  else {
    phqi.src = "/s/lowquality.png";
    want_quality = 1;
  }
}
catch (b$$54) {}
grq.onclick = function() {
  try {
    if ("0" == localStorage.qual) {
      localStorage.qual = "1";
      grqi.src = "/s/highquality.png";
      want_quality = 1;
    }
    else {
      localStorage.qual = "0";
      grqi.src = "/s/lowquality.png";
      want_quality = 0;
    }
  }
  catch (b) {}
  return false;
};
var plq = document.getElementById("plq");
var clq = document.getElementById("clq");
try {
  if ("1" == localStorage.edttsg) {
    cskh.style.display = "inline";
  }
}
catch (b$$56) {}
var psk = document.getElementById("psk");
var pskh = document.getElementById("pskh");
var nsk = document.getElementById("nsk");
var nskh = document.getElementById("nskh");
var choosing_skin = false;
psk.onclick = function() {
  if (playing && null != snake) {
    var b = snake.rcv;
    b--;
    if (0 > b) {
      b = max_skin_cv;
    }
    setSkin(snake, b);
  }
  return false;
};
nsk.onclick = function() {
  if (playing && null != snake) {
    var b = snake.rcv;
    b++;
    if (b > max_skin_cv) {
      b = 0;
    }
    setSkin(snake, b);
  }
  return false;
};
csk.onclick = function() {
  if (!playing && -1 == dead_mtm) {
    resetGame();
    choosing_skin = true;
    pskh.style.opacity = 0;
    nskh.style.opacity = 0;
    skodiv.style.opacity = 0;
    pskh.style.display = "inline";
    nskh.style.display = "inline";
    skodiv.style.display = "inline";
    skodiv.style.left = Math.round(ww / 2 - skodiv.offsetWidth / 2) + "px";
    nick.disabled = true;
    if (0 == mscps) {
      setMscps(300);
    }
    gsc = sgsc;
    var b$$0 = [];
    var h = 22;
    for (; 1 <= h; h--) {
      b$$0.push({
        xx: grd / 2 - 10 * h,
        yy: grd / 2,
        fx: 0,
        fy: 0,
        exs: [],
        eys: [],
        efs: [],
        ems: [],
        eiu: 0,
        fpos: 0,
        da: 0,
        ebx: 10,
        eby: 0
      });
    }
    h = 0;
    try {
      var c = localStorage.snakercv;
      if (c == "" + Number(c)) {
        h = Number(c);
      }
    }
    catch (f) {}
    b$$0 = newSnake(1, grd / 2, grd / 2, h, 0, b$$0);
    view_xx = grd / 2 - 105;
    view_yy = grd / 2;
    snake = b$$0;
    b$$0.nk = "";
    b$$0.eang = b$$0.wang = b$$0.ang;
    b$$0.sp = 4.8;
    b$$0.spang = b$$0.sp / spangdv;
    if (1 < b$$0.spang) {
      b$$0.spang = 1;
    }
    b$$0.sc = 1;
    b$$0.scang = 1;
    b$$0.ssp = nsp1 + nsp2 * b$$0.sc;
    b$$0.fsp = b$$0.ssp + 0.1;
    b$$0.wsep = 6 * b$$0.sc;
    c = nsep / gsc;
    if (b$$0.wsep < c) {
      b$$0.wsep = c;
    }
    b$$0.sep = b$$0.wsep;
    snl(b$$0);
    b$$0.alive_amt = 1;
    b$$0.rex = 1.66;
    ws = {
      send: function(b) {},
      close: function() {}
    };
    high_quality = playing = connected = true;
    gla = 1;
    wdfg = 0;
    qsm = 1;
    startShowGame();
    lbh.style.display = "none";
    lbs.style.display = "none";
    lbn.style.display = "none";
    lbp.style.display = "none";
    lbf.style.display = "none";
    vcm.style.display = "none";
    loch.style.display = "none";
  }
  return false;
};
nick.oninput = function() {
  var b = this.value;
  var h = asciize(b);
  if (24 < h.length) {
    h = h.substr(0, 24);
  }
  if (b != h) {
    this.value = h;
  }
};
victory.oninput = function() {
  var b = this.value;
  var h = asciize(b);
  if (140 < h.length) {
    h = h.substr(0, 140);
  }
  if (b != h) {
    this.value = h;
  }
};
nick.focus();
var lmch = document.createElement("div");
lmch.style.width = "450px";
lmch.style.height = "115px";
var lmc2 = document.createElement("canvas");
var lmc = document.createElement("canvas");
var lgsc = 1;
var lw = 900;
var lh = 270;
lmc.width = lmc2.width = lw;
lmc.height = lmc2.height = lh;
var lctx = lmc.getContext("2d");
var lctx2 = lmc2.getContext("2d");
trf(lmc2, "scale(.5, .5)");
trfo(lmc2, "0% 0%");
lmch.appendChild(lmc2);
logo.appendChild(lmch);
var lts = [];
lts.push({
  pts: [107, 107, 80, 83, 53, 98, 31, 115, 55, 131, 98, 147, 101, 162, 101, 190, 66, 188, 49, 187, 34, 173],
  kc: 22,
  ws: 4,
  wr: 0.025,
  qm: 0.025,
  sp: 0.06,
  sz: 11
}, {
  pts: [150, 30, 150, 107, 150, 184],
  kc: 66,
  ws: 4,
  wr: 0.05,
  qm: 0.025,
  sp: 0.06,
  sz: 11
}, {
  pts: [207, 96, 207, 140, 207, 184],
  kc: 46,
  ws: 4,
  wr: 0.03,
  qm: 0.035,
  sp: 0.06,
  sz: 11
}, {
  pts: [207, 47, 207, 48.5, 207, 50],
  kc: 11,
  ws: 2,
  wr: 0.06,
  qm: 0.05,
  sp: 0.06,
  sz: 15,
  r: 0.5
}, {
  pts: [267, 65, 267, 114.5, 267, 164, 267, 194, 297, 186],
  kc: 66,
  ws: 6,
  wr: -0.025,
  qm: -0.0125,
  sp: 0.06,
  sz: 11,
  r: 1.5
}, {
  pts: [243, 94, 268, 94, 293, 94],
  kc: 66,
  ws: 4,
  wr: 0.015,
  qm: 0.025,
  sp: 0.06,
  sz: 9,
  r: 1.2
}, {
  pts: [338, 30, 338, 68.5, 338, 107, 338, 145.5, 338, 184, 338, 164, 338, 144, 338, 104, 378, 104, 418, 104, 418, 144, 418, 164, 418, 184],
  kc: 46,
  ws: 4,
  wr: 0.005,
  qm: 0.02,
  sp: 0.06,
  sz: 11,
  r: 2.1
}, {
  pts: [535, 175, 500, 201, 472, 175, 442, 138, 472, 105, 502, 84, 532, 105, 546, 118, 544, 139, 504, 139, 464, 139],
  kc: 35,
  ws: 6,
  wr: -0.013,
  qm: -0.025,
  sp: 0.06,
  sz: 11,
  r: 1.3
}, {
  pts: [591, 96, 591, 140, 591, 184, 591, 155, 591, 126, 613, 82, 652, 109],
  kc: 38,
  ws: 4,
  wr: 0.01,
  qm: -0.035,
  sp: 0.06,
  sz: 11
}, {
  pts: [663, 177, 663, 178.5, 663, 180],
  kc: 11,
  ws: 2,
  wr: 0.06,
  qm: 0.05,
  sp: 0.06,
  sz: 15
}, {
  pts: [717, 96, 717, 140, 717, 184],
  kc: 33,
  ws: 4,
  wr: 0.06,
  qm: 0.05,
  sp: 0.06,
  sz: 11
}, {
  pts: [717, 47, 717, 48.5, 717, 50],
  kc: 11,
  ws: 2,
  wr: 0.06,
  qm: 0.05,
  sp: 0.06,
  sz: 15
}, {
  pts: [814, 186, 860, 188, 858, 136, 854, 96, 814, 96, 770, 96, 770, 136, 770, 186, 814, 186],
  kc: 43,
  ws: 4,
  wr: 0,
  qm: 0.0274,
  sp: 0.073,
  sz: 11,
  r: 1.5
});
i = 0;
for (; i < lts.length; i++) {
  lts[i].mwig = 5;
}
var lga = 0;
var lgss = 0;
var ncka = 0;
var mwig = 4;
var lgfr = 0;
var lgtm = Date.now();

function showLogo(b) {
  var h = Date.now();
  var c = (h - lgtm) / 25;
  lgtm = h;
  var f;
  var w;
  var u;
  var e;
  var z;
  var F;
  var t;
  var x;
  var D;
  var y;
  var B;
  var q;
  var I;
  var A;
  var L;
  lgfr += c;
  if (0 == lts[lts.length - 1].mwig && (1 == lga && (1 == lgss && 1 == ncka))) {
    clearInterval(showlogo_iv);
    showlogo_iv = -1;
  }
  else {
    if (b || 1 != lga) {
      lga += 0.05 * c;
      if (1 <= lga) {
        lga = 1;
      }
      lmc2.style.opacity = lga;
    }
    if (1 != lgss) {
      lgss += 0.00375 * c;
      if (1 <= lgss) {
        lgss = 1;
      }
    }
    if (b || 1 != ncka) {
      ncka += 0.006 * c;
      if (1 <= ncka) {
        ncka = 1;
      }
      nick_holder.style.opacity = Math.min(1, 6 * ncka);
      if (!is_mobile) {
        smh.style.opacity = Math.max(0, Math.min(1, 5 * (ncka - 0.05)));
      }
      if (0.01 <= ncka) {
        playh.style.opacity = Math.min(1, 5 * (ncka - 0.01));
      }
    }
    lctx.clearRect(0, 0, lw, lh);
    h = 0;
    for (; h < lts.length; h++) {
      var J = lts[h];
      var H = J.pts;
      var C = J.kc;
      var M = J.ws;
      var O = J.wr;
      var N = J.qm;
      f = J.sp;
      var K = J.sz;
      L = J.r;
      var E = J.mwig;
      if (b) {
        J.wch = true;
        E = 1E-7;
      }
      if (J.wch) {
        if (0 != E) {
          E *= 0.982;
          E -= 0.001 * c;
          if (1 == render_mode) {
            E -= 0.005 * c;
          }
          if (0 >= E) {
            E = 0;
          }
          J.mwig = E;
        }
      }
      if (!L) {
        L = 1;
      }
      lctx.beginPath();
      if (9 > h) {
        u = ctx.createLinearGradient(0, 70 * lgsc, 0, 230 * lgsc);
        u.addColorStop(0, "#80FFA0");
        u.addColorStop(1, "#008040");
      }
      else {
        u = ctx.createLinearGradient(0, 50 * lgsc, 0, 265 * lgsc);
        u.addColorStop(0, "#9850FF");
        u.addColorStop(1, "#281060");
      }
      lctx.fillStyle = u;
      I = false;
      A = 0;
      u = H[0];
      e = H[1];
      D = u;
      y = e;
      var G = lgfr * f;
      B = 2;
      for (; B < H.length; B += 4) {
        f = u;
        w = e;
        cx2 = H[B];
        cy2 = H[B + 1];
        u = H[B + 2];
        e = H[B + 3];
        var Q = 1;
        for (; Q <= C; Q++) {
          A++;
          var P = Q / C;
          z = f + (cx2 - f) * P;
          F = w + (cy2 - w) * P;
          t = cx2 + (u - cx2) * P;
          x = cy2 + (e - cy2) * P;
          z += (t - z) * P;
          F += (x - F) * P;
          D = Math.atan2(F - y, z - D);
          if (I) {
            if (D - q > Math.PI) {
              D -= 2 * Math.PI;
            }
            else {
              if (D - q < -Math.PI) {
                D += 2 * Math.PI;
              }
            }
            q += 0.05 * (D - q);
            q %= 2 * Math.PI;
          }
          else {
            I = true;
            q = D;
          }
          D = z;
          y = F;
          z += Math.cos(Math.PI / 2 + q) * Math.sin(G) * M * E;
          F += Math.sin(Math.PI / 2 + q) * Math.sin(G) * M * E;
          G -= 0.76 * N * M;
          M += O;
          lctx.beginPath();
          x = 1.15 * K * Math.min(1, lgsc * (0.2 + 0.8 * lga) * (30 * lgss * L - A / 20 - h / 2));
          if (0.5 < x) {
            lctx.arc(z * lgsc, F * lgsc, x, 0, pi2);
            J.wch = true;
          }
          lctx.fill();
        }
      }
    }
    lctx2.clearRect(0, 0, lw, lh);
    lctx2.shadowColor = "#000000";
    lctx2.shadowBlur = 16;
    lctx2.shadowOffsetY = 7;
    lctx2.drawImage(lmc, 0, 0);
  }
}
var showlogo_iv = -1;
if (is_safari || is_mobile) {
  ncka = lgss = lga = 1;
  showLogo(true);
}
else {
  showlogo_iv = setInterval("showLogo(false)", 25);
}
document.onkeydown = function(b) {
  b = b || window.event;
  var h = b.keyCode;
  if (37 == h) {
    kd_l = true;
  }
  else {
    if (39 == h) {
      kd_r = true;
    }
    else {
      if (38 == h || 32 == h) {
        kd_u = true;
        setAcceleration(1);
      }
      else {
        if (13 == h || 10 == h) {
          if (want_victory_message) {
            if (0 < victory.value.length) {
              save_btn.elem.onclick();
            }
          }
          else {
            if (!connecting && !connected) {
              play_btn.elem.onclick();
            }
          }
        }
        else {
          if (16 == h) {
            if (testing) {
              shifty = true;
            }
          }
        }
      }
    }
  }
  if (testing) {
    console.log("keydown: " + b.keyCode);
  }
};
document.onkeyup = function(b) {
  b = b || window.event;
  b = b.keyCode;
  if (37 == b) {
    kd_l = false;
  }
  else {
    if (39 == b) {
      kd_r = false;
    }
    else {
      if (38 == b || 32 == b) {
        kd_u = false;
        setAcceleration(0);
      }
      else {
        if (16 == b) {
          if (testing) {
            shifty = false;
          }
        }
      }
    }
  }
};

function loadSos(b$$0) {
  if (!forcing && 0 < b$$0.length) {
    sos = [];
    clus = [];
    b$$0.charAt(0);
    var h = 1;
    var c$$0 = {};
    var f = 0;
    c$$0 = f = 0;
    var w;
    var u = 0;
    var e$$0 = 0;
    var z = [];
    var F = [];
    var t = [];
    var x = [];
    for (; h < b$$0.length;) {
      if (w = (b$$0.charCodeAt(h++) - 97 - e$$0) % 26, 0 > w && (w += 26), u *= 16, u += w, e$$0 += 7, 1 == c$$0) {
        if (0 == f) {
          z.push(u);
          if (4 == z.length) {
            f++;
          }
        }
        else {
          if (1 == f) {
            F.push(u);
            if (3 == F.length) {
              f++;
            }
          }
          else {
            if (2 == f) {
              t.push(u);
              if (3 == t.length) {
                f++;
              }
            }
            else {
              if (3 == f && (x.push(u), 1 == x.length)) {
                c$$0 = {};
                f = w = 0;
                for (; f < F.length; f++) {
                  w *= 256;
                  w += F[f];
                }
                f = F = 0;
                for (; f < t.length; f++) {
                  F *= 256;
                  F += t[f];
                }
                c$$0.ip = z.join(".");
                c$$0.po = w;
                c$$0.ac = F;
                c$$0.clu = x[0];
                if (clus[c$$0.clu]) {
                  z = clus[c$$0.clu];
                }
                else {
                  z = {};
                  clus[c$$0.clu] = z;
                  z.sis = [];
                  z.ptms = [];
                }
                c$$0.cluo = z;
                sos.push(c$$0);
                z = [];
                F = [];
                t = [];
                x = [];
                f = 0;
              }
            }
          }
        }
        c$$0 = u = 0;
      }
      else {
        c$$0++;
      }
    }
    h = sos.length - 1;
    for (; 0 <= h; h--) {
      if (c$$0 = 1, z = sos[h].cluo) {
        f = z.sis.length - 1;
        for (; 0 <= f; f--) {
          if (z.sis[f].ip == sos[h].ip) {
            c$$0 = 0;
            break;
          }
        }
        if (1 == c$$0) {
          z.sis.push({
            ip: sos[h].ip
          });
        }
      }
    }
    h = clus.length - 1;
    for (; 0 <= h; h--) {
      if ((z = clus[h]) && 0 < z.sis.length) {
        f = Math.floor(Math.random() * z.sis.length);
        b$$0 = z.sis[f].ip;
        e$$0 = null;
        try {
          e$$0 = new WebSocket("ws://" + b$$0 + ":80/ptc");
        }
        catch (D) {
          e$$0 = null;
        }
        if (e$$0) {
          e$$0.binaryType = "arraybuffer";
          e$$0.onerror = function(b) {};
          e$$0.onmessage = function(b) {
            b = new Uint8Array(b.data);
            if (1 == b.length && 112 == b[0]) {
              b = clus.length - 1;
              for (; 0 <= b; b--) {
                var c = clus[b];
                if (c && c.ps == this) {
                  var e = Date.now() - c.stm;
                  if (testing) {
                    console.log(" ping time for cluster " + b + ": " + e);
                  }
                  c.ptms.push(e);
                  if (4 > c.ptms.length) {
                    c.stm = Date.now();
                    b = new Uint8Array(1);
                    b[0] = 112;
                    this.send(b);
                  }
                  else {
                    if (waiting_for_sos) {
                      if (-1 == sos_ready_after_mtm) {
                        sos_ready_after_mtm = Date.now() + 2E3;
                      }
                    }
                    this.close();
                    c.ps = null;
                  }
                  break;
                }
              }
            }
          };
          e$$0.onopen = function(b) {
            b = false;
            var c = clus.length - 1;
            for (; 0 <= c; c--) {
              var e = clus[c];
              if (e && e.ps == this) {
                e.stm = Date.now();
                b = new Uint8Array(1);
                b[0] = 112;
                this.send(b);
                b = true;
                break;
              }
            }
            if (!b) {
              this.close();
            }
          };
          z.ps = e$$0;
        }
      }
    }
  }
}
var mba = null;
var mbi = null;
if (is_ios || is_android) {
  mba = document.createElement("a");
  mbi = document.createElement("img");
  mbi.border = 0;
  mbi.draggable = "false";
  mbi.className = "nsi";
  mbi.width = 1245;
  mbi.height = 260;
  mbi.style.position = "fixed";
  mbi.style.left = "0px";
  mbi.style.bottom = "0px";
  mbi.style.zIndex = 70;
  mbi.src = "/s/n2.jpg";
  mba.appendChild(mbi);
  document.body.appendChild(mba);
  if (is_ios) {
    mba.href = "https://itunes.apple.com/us/app/slither.io/id1091944550?ls=1&mt=8";
  }
  else {
    if (is_android) {
      mba.href = is_amazon ? "http://www.amazon.com/Lowtech-Enterprises-slither-io/dp/B01E312TYQ/" : "https://play.google.com/store/apps/details?id=air.com.hypah.io.slither";
    }
  }
}
resize();
o = {
  f: function(b, h, c) {
    if ("success" == h) {
      loadSos(b);
    }
  }
};
getData("/i49526.txt", o);
var testing = false;
if (0 <= window.location.href.indexOf("/testing")) {
  testing = true;
}
var forcing = false;
var ua = navigator.userAgent.toLowerCase();
var is_android = 0 <= ua.indexOf("android");
var is_amazon = 0 <= ua.indexOf("kindle") || 0 <= ua.indexOf("silk/");
var uua = navigator.userAgent;
var is_ios = 0 <= uua.indexOf("iPad") || (0 <= uua.indexOf("iPhone") || 0 <= uua.indexOf("iPod"));
var is_mobile = 0 <= ua.indexOf("mobile");
var is_firefox = -1 < ua.indexOf("firefox");
var is_ie8oo = window.attachEvent && !window.addEventListener;
var is_safari = is_firefox = false;
if (0 <= ua.indexOf("safari")) {
  if (-1 == ua.indexOf("chrome")) {
    is_safari = true;
  }
}
var no_raf = false;
var raf = function(el) {};
if (window.requestAnimationFrame) {
  raf = window.requestAnimationFrame;
}
else {
  if (window.mozRequestAnimationFrame) {
    raf = window.mozRequestAnimationFrame;
  }
  else {
    if (window.webkitRequestAnimationFrame) {
      raf = window.webkitRequestAnimationFrame;
    }
    else {
      no_raf = true;
    }
  }
}
if (!is_mobile) {
  no_raf = true;
}
no_raf = true;
var a;
var i;
var j;
var k;
var l;
var m;
var n;
var o;
var r;
var fj;
var d;
var d2;
var qq;
var sc;
var agpu = "translateZ(0)";
var ang;
var sang;
var vang;

function trf(el, val) {
  el.style.webkitTransform = el.style.OTransform = el.style.msTransform = el.style.MozTransform = el.style.transform = val;
}

function trfo(div, dataAndEvents) {
  div.style.webkitTransformOrigin = div.style.OTransformOrigin = div.style.msTransformOrigin = div.style.MozTransformOrigin = div.style.transformOrigin = dataAndEvents;
}
var pi2 = 2 * Math.PI;
var animating = false;
var startAnimation = function() {
  animating = true;
  if (no_raf) {
    if (is_mobile) {
      setInterval("oef()", 33);
    }
    else {
      if (is_safari) {
        setInterval("oef()", 33);
      }
      else {
        setInterval("oef()", 20);
      }
    }
  }
  else {
    raf(oef);
  }
};
var ois = [];
var wic = 0;
var ldi = function(blank) {
  wic++;
  var img = {};
  var photo = document.createElement("img");
  img.ii = photo;
  img.sc = 1;
  photo.onload = function() {
    var c = ois.length - 1;
    for (; 0 <= c; c--) {
      if (ois[c].ii == this) {
        c = ois[c];
        c.ww = this.width;
        c.hh = this.height;
        c.loaded = true;
        if (c.onload) {
          c.onload();
        }
        break;
      }
    }
    wic--;
    if (0 == wic) {
      startAnimation();
    }
  };
  img.src = blank;
  ois.push(img);
  return img;
};

function addCss(css) {
  var s = document.createElement("style");
  document.getElementsByTagName("head")[0].appendChild(s);
  s.type = "text/css";
  if (s.styleSheet) {
    s.styleSheet.cssText = css;
  }
  else {
    s.appendChild(document.createTextNode(css));
  }
}
var nbg = document.getElementById("nbg");
var nzbg;
var sadg;
var sadu;
var sadd;
var p;
var xx;
var yy;
var grw;
var grh;
var elem;
var map;
var imgd;
var ctx;
elem = document.createElement("canvas");
var rw = 64;
var rh = 64;
elem.width = rw;
elem.height = rh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, rw, rh);
imgd = map.data;
l = imgd.length;
p = 0;
for (; p < l; p += 4) {
  if (0.5 > Math.random()) {
    imgd[p] = imgd[p + 1] = imgd[p + 2] = 0;
  }
  else {
    imgd[p] = 44;
    imgd[p + 1] = 56;
    imgd[p + 2] = 68;
  }
  imgd[p + 3] = Math.floor(32 * Math.random());
}
ctx.putImageData(map, 0, 0);
nzbg = elem.toDataURL();
if (32 < nzbg.length) {
  nbg.style.backgroundImage = "url(" + nzbg + ")";
}
grw = 2;
grh = 56;
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
yy = p = 0;
for (; yy < grh; yy++) {
  j = (grh - 1 - yy) / (grh - 1);
  j = 0.5 * (1 - Math.cos(Math.PI * j));
  xx = 0;
  for (; xx < grw; xx++) {
    imgd[p] = Math.min(255, Math.floor(54.4 + 32 * j));
    imgd[p + 1] = Math.min(255, Math.floor(108.8 + 64 * j));
    imgd[p + 2] = Math.min(255, Math.floor(81.6 + 48 * j));
    imgd[p + 3] = 255;
    p += 4;
  }
}
ctx.putImageData(map, 0, 0);
sadg = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
yy = p = 0;
for (; yy < grh; yy++) {
  j = (grh - 1 - yy) / (grh - 1);
  j = 0.5 * (1 - Math.cos(Math.PI * j));
  xx = 0;
  for (; xx < grw; xx++) {
    imgd[p] = Math.min(255, Math.floor(72 + 0.95 * 48 * j));
    imgd[p + 1] = Math.min(255, Math.floor(171 + 93.1 * j));
    imgd[p + 2] = Math.min(255, Math.floor(132 + 0.95 * 87 * j));
    imgd[p + 3] = 255;
    p += 4;
  }
}
ctx.putImageData(map, 0, 0);
sadu = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
yy = p = 0;
for (; yy < grh; yy++) {
  j = yy / (grh - 1);
  j = 0.5 * (1 - Math.cos(Math.PI * j));
  xx = 0;
  for (; xx < grw; xx++) {
    imgd[p] = Math.floor(0.1 * 48 + 36 * j);
    imgd[p + 1] = Math.floor(7 + 52.5 * j);
    imgd[p + 2] = Math.floor(6.4 + 48 * j);
    imgd[p + 3] = 255;
    p += 4;
  }
}
ctx.putImageData(map, 0, 0);
sadd = elem.toDataURL();
if (32 < sadg.length) {
  if (32 < sadu.length) {
    if (32 < sadd.length) {
      addCss(".sadg1 { background-image:url(" + sadg + "); }  .sadu1 { background-image:url(" + sadu + "); }  .sadd1 { background-image:url(" + sadd + "); }");
    }
  }
}
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
yy = p = 0;
for (; yy < grh; yy++) {
  j = (grh - 1 - yy) / (grh - 1);
  j = 0.5 * (1 - Math.cos(Math.PI * j));
  xx = 0;
  for (; xx < grw; xx++) {
    imgd[p] = Math.min(255, Math.floor(0.85 * 52 + 26 * j));
    imgd[p + 1] = Math.min(255, Math.floor(81.6 + 48 * j));
    imgd[p + 2] = Math.min(255, Math.floor(0.85 * 144 + 72 * j));
    imgd[p + 3] = 255;
    p += 4;
  }
}
ctx.putImageData(map, 0, 0);
sadg = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
yy = p = 0;
for (; yy < grh; yy++) {
  j = (grh - 1 - yy) / (grh - 1);
  j = 0.5 * (1 - Math.cos(Math.PI * j));
  xx = 0;
  for (; xx < grw; xx++) {
    imgd[p] = Math.min(255, Math.floor(72 + 0.95 * 48 * j));
    imgd[p + 1] = Math.min(255, Math.floor(132 + 0.95 * 87 * j));
    imgd[p + 2] = Math.min(255, Math.floor(171 + 93.1 * j));
    imgd[p + 3] = 255;
    p += 4;
  }
}
ctx.putImageData(map, 0, 0);
sadu = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
yy = p = 0;
for (; yy < grh; yy++) {
  j = yy / (grh - 1);
  j = 0.5 * (1 - Math.cos(Math.PI * j));
  xx = 0;
  for (; xx < grw; xx++) {
    imgd[p] = Math.floor(0.1 * 48 + 36 * j);
    imgd[p + 1] = Math.floor(5.4 + 40.5 * j);
    imgd[p + 2] = Math.floor(7 + 52.5 * j);
    imgd[p + 3] = 255;
    p += 4;
  }
}
ctx.putImageData(map, 0, 0);
sadd = elem.toDataURL();
if (32 < sadg.length) {
  if (32 < sadu.length) {
    if (32 < sadd.length) {
      addCss(".sadg2 { background-image:url(" + sadg + "); }  .sadu2 { background-image:url(" + sadu + "); }  .sadd2 { background-image:url(" + sadd + "); }");
    }
  }
}
var mos = [];
var m_iv = -1;
var swmup = false;

function mkBtn(node, urlPrefix, w, newHeight) {
  var div = document.createElement("div");
  if (!node.tagName) {
    node = document.getElementById(node);
    node.style.width = w + "px";
    node.style.height = newHeight + "px";
    div.style.width = w + "px";
    div.style.height = newHeight + "px";
  }
  var self = {
    lic: 0
  };
  self.elem = node;
  self.md = false;
  self.mo = false;
  self.mdf = 0;
  self.mof = 0;
  var e = true;
  if (node.style) {
    if (node.style.position) {
      if ("absolute" == (node.style.position + "").toLowerCase()) {
        e = false;
      }
      if ("fixed" == (node.style.position + "").toLowerCase()) {
        e = false;
      }
    }
  }
  if (e) {
    node.style.position = "relative";
  }
  div.style.position = "absolute";
  div.style.opacity = 0;
  div.style.left = "0px";
  div.style.top = "0px";
  node.appendChild(div);
  self.ho = div;
  self.alic = function() {
    this.lic++;
    if (3 == this.lic && (this.ho.style.opacity = 1, this.onload)) {
      this.onload();
    }
  };
  mos.push(self);
  self.setEnabled = function(recurring) {
    if (recurring) {
      this.disabled = false;
      this.upi.style.opacity = this.mof;
      this.downi.style.opacity = this.mdf;
      this.elem.style.opacity = 1;
      this.elem.style.cursor = "pointer";
    }
    else {
      this.disabled = true;
      this.upi.style.opacity = 0;
      this.downi.style.opacity = 0;
      this.elem.style.opacity = 0.38;
      this.elem.style.cursor = "default";
    }
  };
  if (urlPrefix) {
    e = 1;
    for (; 3 >= e; e++) {
      var img = document.createElement("img");
      img.draggable = false;
      img.style.position = "absolute";
      img.style.left = "0px";
      img.style.top = "0px";
      img.border = 0;
      img.width = w;
      img.height = newHeight;
      img.className = "nsi";
      div.appendChild(img);
      if (1 == e) {
        self.normi = img;
        img.onload = function() {
          var unlock = mos.length - 1;
          for (; 0 <= unlock; unlock--) {
            var cache = mos[unlock];
            if (cache.normi == this) {
              cache.alic();
              break;
            }
          }
        };
        img.src = urlPrefix + ".png";
      }
      else {
        if (2 == e) {
          self.upi = img;
          img.style.opacity = 0;
          img.onload = function() {
            var unlock = mos.length - 1;
            for (; 0 <= unlock; unlock--) {
              var cache = mos[unlock];
              if (cache.upi == this) {
                cache.alic();
                break;
              }
            }
          };
          img.src = urlPrefix + "up.png";
        }
        else {
          if (3 == e) {
            self.downi = img;
            img.style.opacity = 0;
            img.onload = function() {
              var unlock = mos.length - 1;
              for (; 0 <= unlock; unlock--) {
                var cache = mos[unlock];
                if (cache.downi == this) {
                  cache.alic();
                  break;
                }
              }
            };
            img.src = urlPrefix + "down.png";
          }
        }
      }
    }
  }
  else {
    div.style.opacity = 1;
  }
  node.onmouseenter = function() {
    var unlock = mos.length - 1;
    for (; 0 <= unlock; unlock--) {
      var cache = mos[unlock];
      if (cache.elem == this) {
        if (!cache.disabled && !cache.mo) {
          cache.mo = true;
          if (cache.onmouseenter) {
            cache.onmouseenter();
          }
          if (-1 == m_iv) {
            m_iv = setInterval("hmos()", 25);
          }
        }
        break;
      }
    }
  };
  node.onmouseleave = function() {
    var unlock = mos.length - 1;
    for (; 0 <= unlock; unlock--) {
      var cache = mos[unlock];
      if (cache.elem == this) {
        if (cache.mo) {
          cache.mo = false;
          if (cache.onmouseleave) {
            cache.onmouseleave();
          }
          if (-1 == m_iv) {
            m_iv = setInterval("hmos()", 25);
          }
        }
        break;
      }
    }
  };
  node.onmousedown = function(_e) {
    var s = mos.length - 1;
    for (; 0 <= s; s--) {
      var self = mos[s];
      if (self.elem == this) {
        if (!self.disabled && !self.md) {
          self.md = true;
          if (self.onmousedown) {
            self.onmousedown(_e, self);
          }
          if (-1 == m_iv) {
            m_iv = setInterval("hmos()", 25);
          }
          return false;
        }
        break;
      }
    }
  };
  node.onmouseup = node.ondragend = function(e) {
    var unlock = mos.length - 1;
    for (; 0 <= unlock; unlock--) {
      var cache = mos[unlock];
      if (cache.elem == this) {
        if (cache.md) {
          cache.mdf = 1;
          cache.md = false;
          if (cache.onmouseup && (cache.onmouseup(e, cache), is_mobile)) {
            cache.elem.onmouseleave();
          }
          if (-1 == m_iv) {
            m_iv = setInterval("hmos()", 25);
          }
        }
        break;
      }
    }
  };
  if (!swmup) {
    swmup = true;
    window.onmouseup = window.ondragover = window.ondragend = function() {
      var unlock = mos.length - 1;
      for (; 0 <= unlock; unlock--) {
        var cache = mos[unlock];
        if (cache.md) {
          cache.md = false;
          if (-1 == m_iv) {
            m_iv = setInterval("hmos()", 25);
          }
        }
      }
    };
  }
  return self;
}

function hmos() {
  var b;
  var h = false;
  var id = mos.length - 1;
  for (; 0 <= id; id--) {
    var animation = mos[id];
    b = false;
    if (animation.mo) {
      if (1 != animation.mof) {
        h = true;
        animation.mof += 0.33;
        if (1 <= animation.mof) {
          animation.mof = 1;
        }
        b = true;
      }
    }
    else {
      if (0 != animation.mof) {
        h = true;
        animation.mof -= 0.2;
        if (0 >= animation.mof) {
          animation.mof = 0;
        }
        b = true;
      }
    }
    if (b) {
      animation.upi.style.opacity = animation.disabled ? 0 : animation.mof;
    }
    b = false;
    if (animation.md) {
      if (1 != animation.mdf) {
        h = true;
        animation.mdf += 0.33;
        if (1 <= animation.mdf) {
          animation.mdf = 1;
        }
        b = true;
      }
    }
    else {
      if (0 != animation.mdf) {
        h = true;
        animation.mdf -= 0.2;
        if (0 >= animation.mdf) {
          animation.mdf = 0;
        }
        b = true;
      }
    }
    if (b) {
      animation.downi.style.opacity = animation.disabled ? 0 : animation.mdf;
    }
  }
  if (!h) {
    clearInterval(m_iv);
    m_iv = -1;
  }
}

function makeTextBtn(s, height, i, opt_attributes, c) {
  if (!height) {
    height = 56;
  }
  if (56 < height) {
    height = 56;
  }
  if (!i) {
    i = 15;
  }
  if (!opt_attributes) {
    opt_attributes = 14;
  }
  var el = document.createElement("div");
  el.className = "btnt nsi sadg" + c;
  var style = el.style;
  style.position = "absolute";
  style.width = "auto";
  style.color = "#ffffff";
  style.fontWeight = "bold";
  style.textAlign = "center";
  style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
  style.fontSize = i + "px";
  el.textContent = s;
  style.cursor = "pointer";
  document.body.appendChild(el);
  var width = Math.ceil(35 + el.offsetWidth);
  document.body.removeChild(el);
  el.textContent = "";
  style.width = width + "px";
  style.height = height + "px";
  style.lineHeight = height + "px";
  if (!is_mobile) {
    style.boxShadow = "0px 3px 20px rgba(0,0,0, .75)";
  }
  style.borderRadius = opt_attributes + "px";
  var elem = document.createElement("div");
  style = elem.style;
  style.position = "absolute";
  style.left = style.top = "0px";
  style.width = width + "px";
  style.height = height + "px";
  style.borderRadius = opt_attributes + 1 + "px";
  style.opacity = 0;
  elem.className = "sadu" + c;
  var dom = document.createElement("div");
  style = dom.style;
  style.position = "absolute";
  style.left = style.top = "-1px";
  style.width = width + 2 + "px";
  style.height = height + 2 + "px";
  style.borderRadius = opt_attributes + "px";
  style.opacity = 0;
  dom.className = "sadd" + c;
  var self = mkBtn(el);
  self.a = 1;
  self.ho.appendChild(elem);
  self.upi = elem;
  self.ho.appendChild(dom);
  self.downi = dom;
  self.ts = i;
  self.ww = width;
  self.bgm = c;
  self.setText = function(text) {
    var div = document.createElement("div");
    div.className = "nsi sadg" + this.bgm;
    var s = div.style;
    s.position = "absolute";
    s.width = "auto";
    s.color = "#ffffff";
    s.fontWeight = "bold";
    s.textAlign = "center";
    s.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
    s.fontSize = this.ts + "px";
    div.textContent = text;
    document.body.appendChild(div);
    s = Math.ceil(35 + div.offsetWidth);
    document.body.removeChild(div);
    this.btnf.textContent = text;
    this.ww = s;
    this.elem.style.width = s + "px";
    this.upi.style.width = s + "px";
    this.downi.style.width = s + 2 + "px";
    this.btnf.style.width = s + "px";
  };
  i = document.createElement("div");
  el.appendChild(i);
  self.btnf = i;
  style = i.style;
  style.position = "absolute";
  style.left = style.top = "0px";
  style.width = width + "px";
  style.height = height + "px";
  style.borderRadius = opt_attributes + "px";
  i.textContent = s;
  i.className = "nsi";
  style.color = "#ffffff";
  style.opacity = 0.9;
  self.ho.appendChild(i);
  return self;
}
var sos = [];
var sis = [];
var bso;
var u_m = [64, 32, 16, 8, 4, 2, 1];
var lgbsc = 1;
var lgcsc = 1;
var lb_fr = 0;
var login_fr = 0;
var llgmtm = Date.now();
var login_iv = -1;

function loginFade() {
  var b = Date.now();
  var h = (b - llgmtm) / 25;
  llgmtm = b;
  login_fr += 0.05 * h;
  if (choosing_skin) {
    login_fr += 0.06 * h;
  }
  if (1 <= login_fr) {
    login_fr = 1;
    login.style.display = "none";
    cstx.style.display = "none";
    fbh.style.display = "none";
    twth.style.display = "none";
    cskh.style.display = "none";
    grqh.style.display = "none";
    plq.style.display = "none";
    clq.style.display = "none";
    social.style.display = "none";
    login.style.opacity = 1;
    cstx.style.opacity = 1;
    fbh.style.opacity = 1;
    twth.style.opacity = 1;
    cskh.style.opacity = 1;
    grqh.style.opacity = 1;
    plq.style.opacity = 1;
    clq.style.opacity = 1;
    social.style.opacity = 1;
    pskh.style.opacity = 1;
    nskh.style.opacity = 1;
    skodiv.style.opacity = 1;
    tip_fr = -1;
    tips.style.display = "none";
    mc.style.opacity = 1;
    loch.style.opacity = 1;
    clearInterval(login_iv);
    login_iv = -1;
    if (-1 != showlogo_iv) {
      ncka = lgss = lga = 1;
      showLogo(true);
      if (-1 != showlogo_iv) {
        clearInterval(showlogo_iv);
        showlogo_iv = -1;
      }
    }
  }
  else {
    lgcsc = 1 + 0.1 * Math.pow(login_fr, 2);
    b = Math.round(lgbsc * lgcsc * 1E5) / 1E5;
    trf(login, "scale(" + b + "," + b + ")");
    login.style.opacity = 1 - login_fr;
    cstx.style.opacity = 1 - login_fr;
    fbh.style.opacity = 1 - login_fr;
    twth.style.opacity = 1 - login_fr;
    cskh.style.opacity = 1 - login_fr;
    grqh.style.opacity = 1 - login_fr;
    plq.style.opacity = 1 - login_fr;
    clq.style.opacity = 1 - login_fr;
    social.style.opacity = 1 - login_fr;
    pskh.style.opacity = login_fr;
    nskh.style.opacity = login_fr;
    skodiv.style.opacity = login_fr;
    mc.style.opacity = login_fr;
    loch.style.opacity = login_fr;
  }
}
var ss_a = 0;
var ss_sh = 0;
var spinner_shown = false;
var ldmc = document.createElement("canvas");
ldmc.width = 128;
ldmc.height = 128;
ldmc.style.position = "fixed";
ldmc.style.left = "0px";
ldmc.style.top = "0px";
ldmc.style.zIndex = 8388607;
ldmc.style.display = "none";
document.body.appendChild(ldmc);
var lsfr = 0;
var lcldtm = Date.now();
var sstr = "Save";
if ("FR" == country) {
  sstr = "Bien";
}
else {
  if ("BR" == country) {
    sstr = "OK";
  }
}
var sko_btn = o = makeTextBtn(String.fromCharCode(160) + sstr + String.fromCharCode(160), 47, 20, 34, 1);
var skodiv = o.elem;
skodiv.style.zIndex = 53;
skodiv.style.position = "fixed";
skodiv.style.left = "300px";
skodiv.style.top = "300px";
skodiv.style.display = "none";
skodiv.style.opacity = 0;
document.body.appendChild(skodiv);
o.elem.onclick = function() {
  if (playing) {
    try {
      localStorage.snakercv = snake.rcv;
    }
    catch (b) {}
    playing = connected = false;
    dead_mtm = Date.now() - 5E3;
  }
};
var nick = document.getElementById("nick");
var victory = document.getElementById("victory");
var victory_bg = document.getElementById("victory_bg");
var logo = document.getElementById("logo");
var login = document.getElementById("login");
var lastscore = document.getElementById("lastscore");
var nick_holder = document.getElementById("nick_holder");
var victory_holder = document.getElementById("victory_holder");
var pstr = "Play";
if ("DE" == country) {
  pstr = "Spielen";
}
else {
  if ("FR" == country) {
    pstr = "Jouer";
    nick.placeholder = "Surnom";
  }
  else {
    if ("BR" == country) {
      pstr = "Joga";
      nick.placeholder = "Apelido";
    }
  }
}
var play_btn = o = makeTextBtn(String.fromCharCode(160) + pstr + String.fromCharCode(160), 47, 20, 34, 1);
var pbdiv = o.elem;
pbdiv.style.position = "relative";
pbdiv.style.display = "inline-block";
pbdiv.style.marginTop = "20px";
pbdiv.style.marginBottom = "50px";
var playh = document.getElementById("playh");
playh.style.opacity = 0;
playh.appendChild(pbdiv);
var tips = document.getElementById("tips");
var tipss = ["Eat to grow longer!", "Don't run into other snakes!", "When longer, hold the mouse for a speed boost!"];
if ("DE" == country) {
  tipss = ["Esse um zu wachsen!", "Klicke für mehr Geschwindigkeit!", "Bewege dich nicht in andere Schlangen!"];
}
else {
  if ("FR" == country) {
    tipss = ["Mangez de croître!", "Cliquez et vous courrez!", "Ne laissez pas votre tête toucher d'autres serpents!"];
  }
  else {
    if ("BR" == country) {
      tipss = ["Coma para crescer!", "Clique para correr!", "Não deixe que sua cabeça para tocar outras cobras!"];
    }
  }
}
var tip_pos = -1;
var tip_fr = 1.9;
o.elem.onclick = function() {
  if (!play_btn.disabled) {
    if (!(-1 != dead_mtm)) {
      play_btn_click_mtm = Date.now();
      play_btn.setEnabled(false);
      spinner_shown = nick.disabled = true;
      ldmc.style.display = "inline";
      connect();
    }
  }
};
var save_btn = o = makeTextBtn(String.fromCharCode(160) + "Save Message" + String.fromCharCode(160), 47, 20, 34, 2);
var sbdiv = o.elem;
sbdiv.style.position = "relative";
sbdiv.style.display = "inline-block";
sbdiv.style.marginTop = "30px";
sbdiv.style.marginBottom = "50px";
var saveh = document.getElementById("saveh");
saveh.appendChild(sbdiv);
o.elem.onclick = function() {
  if (!save_btn.disabled) {
    var a = asciize(victory.value);
    if (140 < a.length) {
      a = a.substr(0, 140);
    }
    if (5 <= protocol_version) {
      var buf = new Uint8Array(2 + a.length);
      buf[0] = 255;
      buf[1] = 118;
      var i = 0;
      for (; i < a.length; i++) {
        buf[i + 2] = a.charCodeAt(i);
      }
    }
    else {
      buf = new Uint8Array(1 + a.length);
      buf[0] = 118;
      i = 0;
      for (; i < a.length; i++) {
        buf[i + 1] = a.charCodeAt(i);
      }
    }
    ws.send(buf);
    save_btn.setEnabled(false);
    victory.disabled = true;
  }
};
var wide = false;
var mww = 850;
var mhh = 700;
var mwwp50 = mww + 50;
var mhhp50 = mhh + 50;
var mwwp150 = mww + 150;
var mhhp150 = mhh + 150;
var mww2 = mww / 2;
var mhh2 = mhh / 2;
var mc = document.createElement("canvas");
mc.style.position = "fixed";
mc.style.left = "0px";
mc.style.top = "0px";
mc.style.zIndex = 5;
mc.width = mww;
mc.height = mhh;
mc.className = "nsi";
document.body.appendChild(mc);
mc.style.display = "none";
mc.style.pointerEvents = "none";
var lbh = document.createElement("div");
lbh.className = "nsi";
lbh.style.position = "fixed";
lbh.style.right = "4px";
lbh.style.top = "4px";
lbh.style.textAlign = "center";
lbh.style.width = "255px";
lbh.style.height = "28px";
lbh.style.color = "#ffffff";
lbh.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbh.style.fontSize = "21px";
lbh.style.fontWeight = "bold";
lbh.style.overflow = "hidden";
lbh.style.opacity = 0.5;
lbh.style.zIndex = 7;
lbh.style.display = "none";
lbh.style.cursor = "default";
var lstr = "Leaderboard";
if ("DE" == country) {
  lstr = "Bestenliste";
}
else {
  if ("FR" == country) {
    lstr = "Gagnants";
  }
  else {
    if ("BR" == country) {
      lstr = "Líderes";
    }
  }
}
lbh.textContent = lstr;
trf(lbh, agpu);
document.body.appendChild(lbh);
var lbs = document.createElement("div");
lbs.className = "nsi";
lbs.style.position = "fixed";
lbs.style.textAlign = "center";
lbs.style.right = "4px";
lbs.style.top = "32px";
lbs.style.width = "50px";
lbs.style.height = "800px";
lbs.style.color = "#ffffff";
lbs.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbs.style.fontSize = "12px";
lbs.style.overflow = "hidden";
lbs.style.opacity = 0.7;
lbs.style.zIndex = 7;
lbs.style.display = "none";
lbs.style.cursor = "default";
lbs.style.lineHeight = "150%";
trf(lbs, agpu);
document.body.appendChild(lbs);
var lbn = document.createElement("div");
lbn.className = "nsi";
lbn.style.position = "fixed";
lbn.style.textAlign = "left";
lbn.style.whiteSpace = "nowrap";
lbn.style.right = "64px";
lbn.style.top = "32px";
lbn.style.width = "150px";
lbn.style.height = "800px";
lbn.style.color = "#ffffff";
lbn.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbn.style.fontSize = "12px";
lbn.style.overflow = "hidden";
lbn.style.opacity = 0.7;
lbn.style.zIndex = 8;
lbn.style.display = "none";
lbn.style.cursor = "default";
lbn.style.lineHeight = "150%";
trf(lbn, agpu);
document.body.appendChild(lbn);
var lbp = document.createElement("div");
lbp.className = "nsi";
lbp.style.position = "fixed";
lbp.style.textAlign = "right";
lbp.style.right = "230px";
lbp.style.top = "32px";
lbp.style.width = "30px";
lbp.style.height = "800px";
lbp.style.color = "#ffffff";
lbp.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbp.style.fontSize = "12px";
lbp.style.overflow = "hidden";
lbp.style.opacity = 0.7;
lbp.style.zIndex = 9;
lbp.style.display = "none";
lbp.style.cursor = "default";
lbp.style.lineHeight = "150%";
trf(lbp, agpu);
document.body.appendChild(lbp);
var lbf = document.createElement("div");
lbf.className = "nsi";
lbf.style.position = "fixed";
lbf.style.left = "8px";
lbf.style.bottom = "4px";
lbf.style.width = "200px";
lbf.style.height = "37px";
lbf.style.color = "#ffffff";
lbf.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbf.style.fontSize = "12px";
lbf.style.overflow = "hidden";
lbf.style.opacity = 0.5;
lbf.style.zIndex = 7;
lbf.style.display = "none";
lbf.style.cursor = "default";
lbf.style.lineHeight = "150%";
trf(lbf, agpu);
document.body.appendChild(lbf);
var vcm = document.createElement("div");
vcm.className = "nsi";
vcm.style.position = "fixed";
vcm.style.left = "8px";
vcm.style.top = "4px";
vcm.style.width = "300px";
vcm.style.height = "228px";
vcm.style.color = "#ffffff";
vcm.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
vcm.style.fontSize = "13px";
vcm.style.overflow = "hidden";
vcm.style.wordWrap = "break-word";
vcm.style.opacity = 0.5;
vcm.style.zIndex = 7;
vcm.style.display = "none";
vcm.style.cursor = "default";
trf(vcm, agpu);
document.body.appendChild(vcm);
var loch = document.createElement("div");
loch.className = "nsi";
loch.style.position = "fixed";
loch.style.right = "16px";
loch.style.bottom = "16px";
loch.style.width = loch.style.height = "104px";
loch.style.zIndex = 10;
loch.style.display = "none";
document.body.appendChild(loch);
var loc = document.createElement("img");
var lc = document.createElement("canvas");
lc.width = lc.height = 104;
ctx = lc.getContext("2d");
ctx.save();
ctx.fillStyle = "#485868";
ctx.shadowBlur = 12;
ctx.shadowOffsetY = 3;
ctx.shadowColor = "#000000";
ctx.beginPath();
ctx.arc(52, 52, 40, 0, pi2);
ctx.fill();
ctx.restore();
ctx.fillStyle = "#708090";
ctx.beginPath();
ctx.moveTo(52, 52);
ctx.arc(52, 52, 40, 0, Math.PI / 2);
ctx.lineTo(52, 52);
ctx.fill();
ctx.beginPath();
ctx.moveTo(52, 52);
ctx.arc(52, 52, 40, Math.PI, 3 * Math.PI / 2);
ctx.lineTo(52, 52);
ctx.fill();
ctx.strokeStyle = "#202630";
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(52, 12);
ctx.lineTo(52, 92);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(12, 52);
ctx.lineTo(92, 52);
ctx.stroke();
loc.src = lc.toDataURL();
loc.className = "nsi";
loc.style.position = "absolute";
loc.style.left = "0px";
loc.style.top = "0px";
loc.style.opacity = 0.45;
loc.style.zIndex = 11;
trf(loc, agpu);
loch.appendChild(loc);
var asmc = document.createElement("canvas");
asmc.width = 80;
asmc.height = 80;
asmc.className = "nsi";
asmc.style.position = "absolute";
asmc.style.left = asmc.style.top = "12px";
asmc.style.zIndex = 12;
asmc.style.opacity = 0.25;
loch.appendChild(asmc);
var myloc = document.createElement("img");
lc.width = lc.height = 14;
ctx = lc.getContext("2d");
ctx.fillStyle = "#DDDDDD";
ctx.strokeStyle = "#000000";
ctx.lineWidth = 2;
ctx.beginPath();
ctx.arc(7, 7, 2.5, 0, pi2);
ctx.stroke();
ctx.fill();
myloc.src = lc.toDataURL();
myloc.className = "nsi";
myloc.style.position = "absolute";
myloc.style.left = "0px";
myloc.style.top = "0px";
myloc.style.opacity = 1;
myloc.style.zIndex = 13;
trf(myloc, agpu);
loch.appendChild(myloc);
ctx = mc.getContext("2d");
var bgi2 = document.createElement("canvas");
var bgp2 = null;
var bgw2 = 599;
var bgh2 = 519;
var ii = document.createElement("img");
ii.onload = function() {
  bgi2.width = bgw2;
  bgi2.height = bgh2;
  var bufferContext = bgi2.getContext("2d");
  try {
    bufferContext.drawImage(this, 0, 0);
    bgp2 = bufferContext.createPattern(bgi2, "repeat");
  }
  catch (h) {}
};
ii.src = "/s/bg45.jpg";

function rdgbg() {
  if (ggbg) {
    if (!gbgmc) {
      gbgmc = document.createElement("canvas");
    }
    gbgmc.width = mww;
    gbgmc.height = mhh;
    var imageContext = gbgmc.getContext("2d");
    try {
      imageContext.drawImage(gbgi, 0, 0, 512, 512, 0, 0, mww, mhh);
    }
    catch (h) {}
  }
}
var ggbg = false;
var gbgmc = null;
var gbgi = document.createElement("img");
gbgi.onload = function() {
  ggbg = true;
  rdgbg();
};
gbgi.src = "/s/gbg.jpg";

function newDeadpool() {
  return {
    os: [],
    end_pos: 0,
    add: function(node) {
      if (this.end_pos == this.os.length) {
        this.os.push(node);
      }
      else {
        this.os[this.end_pos] = node;
      }
      this.end_pos++;
    },
    get: function() {
      if (1 <= this.end_pos) {
        this.end_pos--;
        var entries = this.os[this.end_pos];
        this.os[this.end_pos] = null;
        return entries;
      }
      return null;
    }
  };
}
var flt_a = "gas the;gas all;gas every;heil hit;ler did no;panis;panus;paynis;cut your;flick your".split(";");

function gdnm(a) {
  var str = "";
  var c = false;
  var b;
  var i = 0;
  for (; i < a.length; i++) {
    b = a.charCodeAt(i);
    if (32 == b) {
      if (!c) {
        c = true;
        str += " ";
      }
    }
    else {
      c = false;
      str += String.fromCharCode(b);
    }
  }
  a = str.toLowerCase();
  i = flt_a.length - 1;
  for (; 0 <= i; i--) {
    if (0 <= a.indexOf(flt_a[i])) {
      return false;
    }
  }
  return true;
}
var bpx1;
var bpy1;
var bpx2;
var bpy2;
var fpx1;
var fpy1;
var fpx2;
var fpy2;
var sgsc = 0.9;
var gsc = sgsc;
var nsep = 4.5;
var tasty = 0;
var shifty = false;
var rr;
var gg;
var bb;
var render_mode = 2;
if (is_mobile) {
  render_mode = 1;
}
var wumsts = false;
var rank = 0;
var best_rank = 999999999;
var snake_count = 0;
var biggest_snake_count = 0;
var cm1;
var snakes = [];
var foods = [];
var foods_c = 0;
var preys = [];
var points_dp = newDeadpool();
var os = {};
var lsang = 0;
var want_e = false;
var last_e_mtm = 0;
var sectors = [];
var sector_size = 480;
var sector_count_along_edge = 130;
var spangdv = 4.8;
var nsp1 = 4.25;
var nsp2 = 0.5;
var nsp3 = 12;
var mamu = 0.033;
var mamu2 = 0.028;
var cst = 0.43;
var lfas = [];
var lfc = 128;
i = 0;
for (; i < lfc; i++) {
  j = 0.5 * (1 - Math.cos(Math.PI * (lfc - 1 - i) / (lfc - 1)));
  lfas.push(j);
}
var rfas = [];
var rfc = 43;
i = 0;
for (; i < rfc; i++) {
  j = 0.5 * (1 - Math.cos(Math.PI * (rfc - 1 - i) / (rfc - 1)));
  rfas.push(j);
}
var fao = {};
var fc = 3;
for (; 100 >= fc; fc++) {
  var fas = [];
  i = 0;
  for (; i < fc; i++) {
    j = 0.5 * (1 - Math.cos(Math.PI * (fc - 1 - i) / (fc - 1)));
    fas.push(j);
  }
  fao["a" + fc] = fas;
}
var hfc = 92;
var hfas = new Float32Array(hfc);
i = 0;
for (; i < hfc; i++) {
  j = 0.5 * (1 - Math.cos(Math.PI * (hfc - 1 - i) / (hfc - 1)));
  hfas[i] = j;
}
var afas = [];
var afc = 26;
i = 0;
for (; i < afc; i++) {
  j = 0.5 * (1 - Math.cos(Math.PI * (afc - 1 - i) / (afc - 1)));
  afas.push(j);
}
var nlc = 48;
var vfas = [];
var vfc = 62;
var fvpos = 0;
var fvtg = 0;
var ovxx;
var ovyy;
var fvxs = [];
var fvys = [];
i = 0;
for (; i < vfc; i++) {
  j = 0.5 * (1 - Math.cos(Math.PI * (vfc - 1 - i) / (vfc - 1)));
  j += 0.5 * (0.5 * (1 - Math.cos(Math.PI * j)) - j);
  vfas.push(j);
  fvxs.push(0);
  fvys.push(0);
}

function pwr(item) {
  var array = new Float32Array(125);
  var index = 0;
  for (; 125 > index; index++) {
    array[index] = Math.pow(item, index);
  }
  return array;
}

function pca(opt_attributes) {
  var maxBits = new Float32Array(125);
  var bits = 0;
  for (; 125 > bits; bits++) {
    maxBits[bits] = 1 - Math.pow(1 - opt_attributes, bits);
  }
  return maxBits;
}
var p1a = pca(0.1);
var p35a = pca(0.35);
var pwr4 = pwr(0.4);
var pwr35 = pwr(0.35);
var pwr93 = pwr(0.93);

function setMscps(opt_attributes) {
  if (opt_attributes != mscps) {
    mscps = opt_attributes;
    fmlts = [];
    fpsls = [];
    opt_attributes = 0;
    for (; opt_attributes <= mscps; opt_attributes++) {
      if (opt_attributes >= mscps) {
        fmlts.push(fmlts[opt_attributes - 1]);
      }
      else {
        fmlts.push(Math.pow(1 - opt_attributes / mscps, 2.25));
      }
      if (0 == opt_attributes) {
        fpsls.push(0);
      }
      else {
        fpsls.push(fpsls[opt_attributes - 1] + 1 / fmlts[opt_attributes - 1]);
      }
    }
    var copies = fmlts[fmlts.length - 1];
    var templatePromise = fpsls[fpsls.length - 1];
    opt_attributes = 0;
    for (; 2048 > opt_attributes; opt_attributes++) {
      fmlts.push(copies);
      fpsls.push(templatePromise);
    }
  }
}

function startShowGame() {
  llgmtm = Date.now();
  login_iv = setInterval("loginFade()", 25);
  mc.style.opacity = 0;
  mc.style.display = "inline";
  lbh.style.opacity = lbs.style.opacity = lbn.style.opacity = lbp.style.opacity = lbf.style.opacity = vcm.style.opacity = 0;
  loch.style.opacity = 0;
  lb_fr = -1;
}

function setSkin(ctx, result) {
  ctx.rcv = result;
  ctx.er = 6;
  ctx.ec = "#ffffff";
  ctx.eca = 0.75;
  ctx.ppa = 1;
  ctx.ppc = "#000000";
  ctx.antenna = false;
  if (19 == result) {
    ctx.ec = "#ee5500";
    ctx.er = 4.5;
    ctx.ppa = 0;
    ctx.antenna = true;
    ctx.atba = 0;
    ctx.atc1 = "#505050";
    ctx.atc2 = "#FFFFFF";
    ctx.atia = 0.5;
    ctx.apbs = true;
    var m = 9;
    ctx.atx = new Float32Array(m);
    ctx.aty = new Float32Array(m);
    ctx.atvx = new Float32Array(m);
    ctx.atvy = new Float32Array(m);
    ctx.atax = new Float32Array(m);
    ctx.atay = new Float32Array(m);
    --m;
    for (; 0 <= m; m--) {
      ctx.atx[m] = ctx.xx;
      ctx.aty[m] = ctx.yy;
    }
    ctx.bulb = rabulb;
    ctx.blbx = -10;
    ctx.blby = -10;
    ctx.blbw = 20;
    ctx.blbh = 20;
    ctx.bsc = 1;
    ctx.blba = 1;
  }
  else {
    if (24 == result) {
      ctx.antenna = true;
      ctx.atba = 0;
      ctx.atc1 = "#00688c";
      ctx.atc2 = "#64c8e7";
      ctx.atwg = true;
      ctx.atia = 0.35;
      ctx.abrot = false;
      m = 8;
      ctx.atx = new Float32Array(m);
      ctx.aty = new Float32Array(m);
      ctx.atvx = new Float32Array(m);
      ctx.atvy = new Float32Array(m);
      ctx.atax = new Float32Array(m);
      ctx.atay = new Float32Array(m);
      --m;
      for (; 0 <= m; m--) {
        ctx.atx[m] = ctx.xx;
        ctx.aty[m] = ctx.yy;
      }
      ctx.bulb = acbulb;
      ctx.blbx = -5;
      ctx.blby = -10;
      ctx.blbw = 20;
      ctx.blbh = 20;
      ctx.bsc = 1;
      ctx.blba = 0.75;
    }
    else {
      if (25 == result) {
        ctx.ec = "#ff5609";
        ctx.eca = 1;
        ctx.antenna = true;
        ctx.atba = 0;
        ctx.atc1 = "#000000";
        ctx.atc2 = "#6625c7";
        ctx.atia = 1;
        ctx.abrot = true;
        m = 9;
        ctx.atx = new Float32Array(m);
        ctx.aty = new Float32Array(m);
        ctx.atvx = new Float32Array(m);
        ctx.atvy = new Float32Array(m);
        ctx.atax = new Float32Array(m);
        ctx.atay = new Float32Array(m);
        --m;
        for (; 0 <= m; m--) {
          ctx.atx[m] = ctx.xx;
          ctx.aty[m] = ctx.yy;
        }
        ctx.bulb = cdbulb;
        ctx.blbx = -10;
        ctx.blby = -10;
        ctx.blbw = 20;
        ctx.blbh = 20;
        ctx.bsc = 1.6;
        ctx.blba = 1;
      }
    }
  }
  m = null;
  if (9 == result) {
    m = [7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 10, 10, 10, 10, 10, 10, 10, 10, 10];
  }
  else {
    if (10 == result) {
      m = [9, 9, 9, 9, 9, 1, 1, 1, 1, 1, 7, 7, 7, 7, 7];
    }
    else {
      if (11 == result) {
        m = [11, 11, 11, 11, 11, 7, 7, 7, 7, 7, 12, 12, 12, 12, 12];
      }
      else {
        if (12 == result) {
          m = [7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 13, 13, 13, 13, 13];
        }
        else {
          if (13 == result) {
            m = [14, 14, 14, 14, 14, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7];
          }
          else {
            if (14 == result) {
              m = [9, 9, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7, 7, 7];
            }
            else {
              if (15 == result) {
                m = [0, 1, 2, 3, 4, 5, 6, 7, 8];
              }
              else {
                if (16 == result) {
                  m = [15, 15, 15, 15, 15, 15, 15, 4, 4, 4, 4, 4, 4, 4];
                }
                else {
                  if (17 == result) {
                    m = [9, 9, 9, 9, 9, 9, 9, 16, 16, 16, 16, 16, 16, 16];
                  }
                  else {
                    if (18 == result) {
                      m = [7, 7, 7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 9, 9];
                    }
                    else {
                      if (19 == result) {
                        m = [9];
                      }
                      else {
                        if (20 == result) {
                          m = [3, 3, 3, 3, 3, 0, 0, 0, 0, 0];
                        }
                        else {
                          if (21 == result) {
                            m = [3, 3, 3, 3, 3, 3, 3, 18, 18, 18, 18, 18, 18, 20, 19, 20, 19, 20, 19, 20, 18, 18, 18, 18, 18, 18];
                          }
                          else {
                            if (22 == result) {
                              m = [5, 5, 5, 5, 5, 5, 5, 9, 9, 9, 9, 9, 9, 9, 13, 13, 13, 13, 13, 13, 13];
                            }
                            else {
                              if (23 == result) {
                                m = [16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 7, 7, 7, 7, 7, 7, 7];
                              }
                              else {
                                if (24 == result) {
                                  m = [23, 23, 23, 23, 23, 23, 23, 23, 23, 18, 18, 18, 18, 18, 18, 18, 18, 18];
                                }
                                else {
                                  if (25 == result) {
                                    m = [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22];
                                  }
                                  else {
                                    result %= 9;
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
              }
            }
          }
        }
      }
    }
  }
  if (m) {
    result = m[0];
  }
  ctx.rbcs = m;
  ctx.cv = result;
}

function newSnake(id, style, attr, a, value, args) {
  var obj = {};
  obj.id = id;
  obj.xx = style;
  obj.yy = attr;
  setSkin(obj, a);
  a = obj.cv;
  obj.fnfr = 0;
  obj.na = 1;
  obj.chl = 0;
  obj.tsp = 0;
  obj.sfr = 0;
  obj.rr = Math.min(255, rrs[a] + Math.floor(20 * Math.random()));
  obj.gg = Math.min(255, ggs[a] + Math.floor(20 * Math.random()));
  obj.bb = Math.min(255, bbs[a] + Math.floor(20 * Math.random()));
  id = "00" + Math.min(255, Math.max(0, Math.round(obj.rr))).toString(16);
  style = "00" + Math.min(255, Math.max(0, Math.round(obj.gg))).toString(16);
  attr = "00" + Math.min(255, Math.max(0, Math.round(obj.bb))).toString(16);
  id = id.substr(id.length - 2);
  style = style.substr(style.length - 2);
  attr = attr.substr(attr.length - 2);
  obj.cs = "#" + id + style + attr;
  id = "00" + Math.min(255, Math.max(0, Math.round(0.4 * obj.rr))).toString(16);
  style = "00" + Math.min(255, Math.max(0, Math.round(0.4 * obj.gg))).toString(16);
  attr = "00" + Math.min(255, Math.max(0, Math.round(0.4 * obj.bb))).toString(16);
  id = id.substr(id.length - 2);
  style = style.substr(style.length - 2);
  attr = attr.substr(attr.length - 2);
  obj.cs04 = "#" + id + style + attr;
  id = "00" + Math.min(255, Math.max(0, Math.round(0.5 * (255 + obj.rr)))).toString(16);
  style = "00" + Math.min(255, Math.max(0, Math.round(0.5 * (255 + obj.gg)))).toString(16);
  attr = "00" + Math.min(255, Math.max(0, Math.round(0.5 * (255 + obj.bb)))).toString(16);
  id = id.substr(id.length - 2);
  style = style.substr(style.length - 2);
  attr = attr.substr(attr.length - 2);
  obj.csw = "#" + id + style + attr;
  obj.sc = 1;
  obj.ssp = nsp1 + nsp2 * obj.sc;
  obj.fsp = obj.ssp + 0.1;
  obj.msp = nsp3;
  obj.fxs = new Float32Array(rfc);
  obj.fys = new Float32Array(rfc);
  obj.fchls = new Float32Array(rfc);
  obj.fpos = 0;
  obj.ftg = 0;
  obj.fx = 0;
  obj.fy = 0;
  obj.fchl = 0;
  obj.fas = new Float32Array(afc);
  obj.fapos = 0;
  obj.fatg = 0;
  obj.fa = 0;
  obj.ehang = value;
  obj.wehang = value;
  obj.ehl = 1;
  obj.msl = 42;
  obj.fam = 0;
  obj.ang = value;
  obj.eang = value;
  obj.wang = value;
  obj.rex = 0;
  obj.rey = 0;
  obj.sp = 2;
  if (args) {
    obj.lnp = args[args.length - 1];
    obj.pts = args;
    obj.sct = args.length;
    if (args[0].dying) {
      obj.sct--;
    }
  }
  else {
    obj.pts = [];
    obj.sct = 0;
  }
  obj.flpos = 0;
  obj.fls = new Float32Array(lfc);
  obj.fl = 0;
  obj.fltg = 0;
  obj.tl = obj.sct + obj.fam;
  obj.cfl = obj.tl;
  obj.scang = 1;
  obj.dead_amt = 0;
  obj.alive_amt = 0;
  snakes.splice(0, 0, obj);
  return os["s" + obj.id] = obj;
}

function snl(input) {
  var n = input.tl;
  input.tl = input.sct + input.fam;
  n = input.tl - n;
  var i = input.flpos;
  var unlock = 0;
  for (; unlock < lfc; unlock++) {
    input.fls[i] -= n * lfas[unlock];
    i++;
    if (i >= lfc) {
      i = 0;
    }
  }
  input.fl = input.fls[input.flpos];
  input.fltg = lfc;
  if (input == snake) {
    wumsts = true;
  }
}

function newFood(id, v00, version, cnt, dataAndEvents, key) {
  var obj = {};
  obj.id = id;
  obj.xx = v00;
  obj.yy = version;
  obj.rx = v00;
  obj.ry = version;
  obj.rsp = dataAndEvents ? 2 : 1;
  obj.cv = key;
  obj.rad = 1E-5;
  obj.sz = cnt;
  id = per_color_imgs[obj.cv];
  obj.cv2 = Math.floor(id.ic * gsc * obj.sz / 16.5);
  if (0 > obj.cv2) {
    obj.cv2 = 0;
  }
  if (obj.cv2 >= id.ic) {
    obj.cv2 = id.ic - 1;
  }
  if (testing) {
    if (!window.biggestcv2) {
      window.biggestcv2 = obj.cv2;
    }
    if (obj.cv2 > window.biggestcv2) {
      window.biggestcv2 = obj.cv2;
      console.log("biggest cv2 seen: " + obj.cv2 + " out of " + (id.ic - 1) + " (fo.sz = " + obj.sz + " which means its server-side rad is " + 5 * obj.sz + ")");
    }
  }
  obj.fi = id.imgs[obj.cv2];
  obj.fw = id.fws[obj.cv2];
  obj.fh = id.fhs[obj.cv2];
  obj.fw2 = id.fw2s[obj.cv2];
  obj.fh2 = id.fh2s[obj.cv2];
  obj.ofi = id.oimgs[obj.cv2];
  obj.ofw = id.ofws[obj.cv2];
  obj.ofh = id.ofhs[obj.cv2];
  obj.ofw2 = id.ofw2s[obj.cv2];
  obj.ofh2 = id.ofh2s[obj.cv2];
  obj.gcv = Math.floor(id.ic * gsc * (0.25 + 0.75 * obj.sz / 16.5));
  if (0 > obj.gcv) {
    obj.gcv = 0;
  }
  if (obj.gcv >= id.ic) {
    obj.gcv = id.ic - 1;
  }
  obj.gfi = id.gimgs[obj.gcv];
  obj.gfw = id.gfws[obj.gcv];
  obj.gfh = id.gfhs[obj.gcv];
  obj.gfw2 = id.gfw2s[obj.gcv];
  obj.gfh2 = id.gfh2s[obj.gcv];
  obj.g2cv = Math.floor(id.ic * gsc * 2 * (0.25 + 0.75 * obj.sz / 16.5));
  if (0 > obj.g2cv) {
    obj.g2cv = 0;
  }
  if (obj.g2cv >= id.ic) {
    obj.g2cv = id.ic - 1;
  }
  obj.g2fi = id.gimgs[obj.g2cv];
  obj.g2fw = id.gfws[obj.g2cv];
  obj.g2fh = id.gfhs[obj.g2cv];
  obj.g2fw2 = id.gfw2s[obj.g2cv];
  obj.g2fh2 = id.gfh2s[obj.g2cv];
  obj.fr = 0;
  obj.gfr = 64 * Math.random();
  obj.gr = 0.65 + 0.1 * obj.sz;
  obj.wsp = 0.0225 * (2 * Math.random() - 1);
  obj.eaten_fr = 0;
  obj.eaten_fr4 = 0;
  return foods[foods_c++] = obj;
}

function newPrey(s, name, id, cnt, value, key, text, sphere, keepData) {
  var obj = {};
  obj.id = s;
  obj.xx = name;
  obj.yy = id;
  obj.rad = 1E-5;
  obj.sz = cnt;
  obj.cv = value;
  obj.dir = key;
  obj.wang = text;
  obj.ang = sphere;
  obj.sp = keepData;
  obj.fr = 0;
  obj.gfr = 64 * Math.random();
  obj.gr = 0.5 + 0.15 * Math.random() + 0.1 * obj.sz;
  obj.rr = Math.min(255, rrs[value]);
  obj.gg = Math.min(255, ggs[value]);
  obj.bb = Math.min(255, bbs[value]);
  s = "00" + Math.min(255, Math.max(0, Math.round(obj.rr))).toString(16);
  name = "00" + Math.min(255, Math.max(0, Math.round(obj.gg))).toString(16);
  id = "00" + Math.min(255, Math.max(0, Math.round(obj.bb))).toString(16);
  s = s.substr(s.length - 2);
  name = name.substr(name.length - 2);
  id = id.substr(id.length - 2);
  obj.cs = "#" + s + name + id;
  obj.cv2 = Math.floor(per_color_imgs[obj.cv].pr_imgs.length * gsc * obj.sz / 9);
  if (0 > obj.cv2) {
    obj.cv2 = 0;
  }
  if (obj.cv2 >= per_color_imgs[obj.cv].pr_imgs.length) {
    obj.cv2 = per_color_imgs[obj.cv].pr_imgs.length - 1;
  }
  obj.fi = per_color_imgs[obj.cv].pr_imgs[obj.cv2];
  obj.fw = per_color_imgs[obj.cv].pr_fws[obj.cv2];
  obj.fh = per_color_imgs[obj.cv].pr_fhs[obj.cv2];
  obj.fw2 = per_color_imgs[obj.cv].pr_fw2s[obj.cv2];
  obj.fh2 = per_color_imgs[obj.cv].pr_fh2s[obj.cv2];
  obj.gcv = per_color_imgs[obj.cv].gimgs.length - 1;
  obj.gfi = per_color_imgs[obj.cv].gimgs[obj.gcv];
  obj.gfw = per_color_imgs[obj.cv].gfws[obj.gcv];
  obj.gfh = per_color_imgs[obj.cv].gfhs[obj.gcv];
  obj.gfw2 = per_color_imgs[obj.cv].gfw2s[obj.gcv];
  obj.gfh2 = per_color_imgs[obj.cv].gfh2s[obj.gcv];
  obj.fxs = new Float32Array(rfc);
  obj.fys = new Float32Array(rfc);
  obj.fpos = 0;
  obj.ftg = 0;
  obj.fx = 0;
  obj.fy = 0;
  obj.eaten = false;
  obj.eaten_fr = 0;
  obj.eaten_fr4 = 0;
  preys.push(obj);
  return obj;
}
var kdmc = document.createElement("canvas");
kdmc.width = kdmc.height = 32;
ctx = kdmc.getContext("2d");
ctx.fillStyle = "#FF9966";
ctx.arc(16, 16, 16, 0, pi2);
ctx.fill();
var sz = 52;
var komc = document.createElement("canvas");
komc.width = komc.height = sz;
ctx = komc.getContext("2d");
map = ctx.getImageData(0, 0, sz, sz);
imgd = map.data;
l = imgd.length;
p = yy = xx = 0;
for (; p < l; p += 4) {
  var v = Math.abs(Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2)) - 16);
  v = 4 >= v ? 1 - v / 4 : 0;
  v = 0.8 * v;
  imgd[p] = imgd[p + 1] = imgd[p + 2] = 0;
  imgd[p + 3] = Math.floor(255 * v);
  xx++;
  if (xx >= sz) {
    xx = 0;
    yy++;
  }
}
ctx.putImageData(map, 0, 0);
sz = 62;
var ksmc = document.createElement("canvas");
ksmc.width = ksmc.height = sz;
ctx = ksmc.getContext("2d");
map = ctx.getImageData(0, 0, sz, sz);
imgd = map.data;
l = imgd.length;
p = yy = xx = 0;
for (; p < l; p += 4) {
  v = Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 + 3 - yy, 2)) - 15;
  v *= 0.1;
  if (0 > v) {
    v = -v;
  }
  if (1 < v) {
    v = 1;
  }
  v = 1 - v;
  v *= 0.25;
  imgd[p] = imgd[p + 1] = imgd[p + 2] = 0;
  imgd[p + 3] = Math.floor(255 * v);
  xx++;
  if (xx >= sz) {
    xx = 0;
    yy++;
  }
}
ctx.putImageData(map, 0, 0);
var rabulb = document.createElement("canvas");
rabulb.width = rabulb.height = 64;
ctx = rabulb.getContext("2d");
var g = ctx.createRadialGradient(32, 32, 1, 32, 32, 31);
g.addColorStop(0, "rgba(255, 255, 255, 1)");
g.addColorStop(0.83, "rgba(150,150,150, 1)");
g.addColorStop(0.84, "rgba(80,80,80, 1)");
g.addColorStop(0.99, "rgba(80,80,80, 1)");
g.addColorStop(1, "rgba(80,80,80, 0)");
ctx.fillStyle = g;
ctx.fillRect(0, 0, 64, 64);
var cdbulb = document.createElement("canvas");
cdbulb.width = 84;
cdbulb.height = 84;
var cdbulb2 = document.createElement("canvas");
cdbulb2.width = 84;
cdbulb2.height = 84;
ctx = cdbulb2.getContext("2d");
ctx.fillStyle = "#ff5609";
ctx.fillRect(13, 10, 29, 64);
ctx.fillRect(13, 10, 58, 22);
ctx.fillRect(13, 54, 58, 22);
ctx = cdbulb.getContext("2d");
ctx.shadowColor = "#000000";
ctx.shadowBlur = 20;
ctx.drawImage(cdbulb2, 0, 0);
ctx.drawImage(cdbulb2, 0, 0);
var acbulb = document.createElement("canvas");
acbulb.width = acbulb.height = 64;
ctx = acbulb.getContext("2d");
g = ctx.createRadialGradient(32, 32, 1, 32, 32, 31);
g.addColorStop(0, "rgba(255, 128, 128, 1)");
g.addColorStop(0.5, "rgba(222, 3, 3, 1)");
g.addColorStop(0.96, "rgba(157, 18, 18, 1)");
g.addColorStop(1, "rgba(0,0,0, 0)");
ctx.fillStyle = g;
ctx.fillRect(0, 0, 64, 64);
var colc;
if (testing) {
  colc = document.createElement("canvas");
  colc.width = 256;
  colc.height = 66;
  colc.style.position = "fixed";
  colc.style.left = "0px";
  colc.style.top = "200px";
  colc.style.zIndex = 2147483647;
  document.body.appendChild(colc);
}
var pbx = new Float32Array(32767);
var pby = new Float32Array(32767);
var pba = new Float32Array(32767);
var pbu = new Uint8Array(32767);
var per_color_imgs = [];
var rrs = [192, 144, 128, 128, 238, 255, 255, 255, 224, 255, 144, 80, 255, 40, 100, 120, 72, 160, 255, 56, 56, 62, 255, 101];
var ggs = [128, 153, 208, 255, 238, 160, 144, 64, 48, 255, 153, 80, 192, 136, 117, 134, 84, 80, 224, 68, 68, 19, 86, 200];
var bbs = [255, 255, 208, 128, 112, 96, 144, 64, 224, 255, 255, 80, 80, 96, 255, 255, 255, 255, 64, 255, 255, 160, 9, 232];
var max_skin_cv = 24;
i = 0;
for (; i < rrs.length; i++) {
  o = {
    imgs: [],
    fws: [],
    fhs: [],
    fw2s: [],
    fh2s: [],
    gimgs: [],
    gfws: [],
    gfhs: [],
    gfw2s: [],
    gfh2s: [],
    oimgs: [],
    ofws: [],
    ofhs: [],
    ofw2s: [],
    ofh2s: []
  };
  var rs = "00" + rrs[i].toString(16);
  var gs = "00" + ggs[i].toString(16);
  var bs = "00" + bbs[i].toString(16);
  rs = rs.substr(rs.length - 2);
  gs = gs.substr(gs.length - 2);
  bs = bs.substr(bs.length - 2);
  o.cs = "#" + rs + gs + bs;
  sz = 62;
  var kfmc = document.createElement("canvas");
  kfmc.width = kfmc.height = sz;
  ctx = kfmc.getContext("2d");
  map = ctx.getImageData(0, 0, sz, sz);
  imgd = map.data;
  l = imgd.length;
  p = yy = xx = 0;
  for (; p < l; p += 4) {
    v = Math.abs(Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2)) - 16);
    v = 15 >= v ? 1 - v / 15 : 0;
    imgd[p] = rrs[i];
    imgd[p + 1] = ggs[i];
    imgd[p + 2] = bbs[i];
    imgd[p + 3] = Math.floor(255 * v);
    xx++;
    if (xx >= sz) {
      xx = 0;
      yy++;
    }
  }
  ctx.putImageData(map, 0, 0);
  o.kfmc = kfmc;
  var ksz = 48;
  var ksz2 = ksz / 2;
  var kmc = document.createElement("canvas");
  kmc.width = kmc.height = ksz;
  ctx = kmc.getContext("2d");
  ctx.fillStyle = "#FFFFFF";
  ctx.arc(ksz2, ksz2, ksz2, 0, pi2);
  ctx.fill();
  map = ctx.getImageData(0, 0, ksz, ksz);
  imgd = map.data;
  l = imgd.length;
  yy = xx = 0;
  var kmcs = [];
  j = 0;
  for (; 7 > j; j++) {
    p = xx = yy = 0;
    for (; p < l; p += 4) {
      v = Math.pow(Math.max(0, Math.min(1, 1 - Math.abs(yy - ksz2) / ksz2)), 0.35);
      var v2 = Math.max(0, Math.min(1, 1 - Math.sqrt(Math.pow(xx - ksz2, 2) + Math.pow(yy - ksz2, 2)) / 34));
      v = v + 0.375 * (v2 - v);
      v = v * (1.22 - 0.44 * j / 6);
      rr = rrs[i];
      gg = ggs[i];
      bb = bbs[i];
      imgd[p] = Math.max(0, Math.min(255, Math.floor(rr * v)));
      imgd[p + 1] = Math.max(0, Math.min(255, Math.floor(gg * v)));
      imgd[p + 2] = Math.max(0, Math.min(255, Math.floor(bb * v)));
      xx++;
      if (xx >= ksz) {
        xx = 0;
        yy++;
      }
    }
    ctx.putImageData(map, 0, 0);
    var kmc2 = document.createElement("canvas");
    kmc2.width = kmc2.height = ksz;
    var ctx2 = kmc2.getContext("2d");
    ctx2.drawImage(kmc, 0, 0);
    if (10 == i) {
      k = -1;
      for (; 1 >= k; k++) {
        var tx = ksz2 + ksz2 / 16 * Math.cos(2 * Math.PI * k / 8) * 13;
        var ty = ksz2 + ksz2 / 16 * Math.sin(2 * Math.PI * k / 8) * 13;
        ctx2.fillStyle = "#FFFFFF";
        ctx2.beginPath();
        m = 0;
        for (; 5 >= m; m++) {
          xx = tx + ksz / 32 * Math.cos(2 * Math.PI * m / 5) * 0.05 * 24;
          yy = ty + ksz / 32 * Math.sin(2 * Math.PI * m / 5) * 0.05 * 24;
          if (0 == m) {
            ctx2.moveTo(xx, yy);
          }
          else {
            ctx2.lineTo(xx, yy);
          }
          xx = tx + ksz / 32 * Math.cos(2 * Math.PI * (m + 0.5) / 5) * 3.1;
          yy = ty + ksz / 32 * Math.sin(2 * Math.PI * (m + 0.5) / 5) * 3.1;
          ctx2.lineTo(xx, yy);
        }
        ctx2.fill();
      }
    }
    else {
      if (19 == i) {
        k = -2;
        for (; 2 >= k; k++) {
          tx = ksz2 + ksz2 / 16 * Math.cos(2 * Math.PI * k / 15) * 13;
          ty = ksz2 + ksz2 / 16 * Math.sin(2 * Math.PI * k / 15) * 13;
          ctx2.save();
          ctx2.globalAlpha = 0.7;
          ctx2.fillStyle = "#FFFFFF";
          ctx2.beginPath();
          m = 0;
          for (; 5 >= m; m++) {
            xx = tx + ksz / 32 * Math.cos(2 * Math.PI * m / 5) * 0.05 * 12;
            yy = ty + ksz / 32 * Math.sin(2 * Math.PI * m / 5) * 0.05 * 12;
            if (0 == m) {
              ctx2.moveTo(xx, yy);
            }
            else {
              ctx2.lineTo(xx, yy);
            }
            xx = tx + ksz / 32 * Math.cos(2 * Math.PI * (m + 0.5) / 5) * 1.55;
            yy = ty + ksz / 32 * Math.sin(2 * Math.PI * (m + 0.5) / 5) * 1.55;
            ctx2.lineTo(xx, yy);
          }
          ctx2.fill();
          ctx2.restore();
        }
      }
      else {
        if (20 == i) {
          k = -1.5;
          for (; 1.5 >= k; k++) {
            tx = ksz2 + ksz2 / 16 * Math.cos(2 * Math.PI * k / 15) * 13;
            ty = ksz2 + ksz2 / 16 * Math.sin(2 * Math.PI * k / 15) * 13;
            ctx2.save();
            ctx2.globalAlpha = 0.7;
            ctx2.fillStyle = "#FFFFFF";
            ctx2.beginPath();
            m = 0;
            for (; 5 >= m; m++) {
              xx = tx + ksz2 / 16 * Math.cos(2 * Math.PI * m / 5) * 0.05 * 14;
              yy = ty + ksz2 / 16 * Math.sin(2 * Math.PI * m / 5) * 0.05 * 14;
              if (0 == m) {
                ctx2.moveTo(xx, yy);
              }
              else {
                ctx2.lineTo(xx, yy);
              }
              xx = tx + ksz2 / 16 * Math.cos(2 * Math.PI * (m + 0.5) / 5) * 1.8;
              yy = ty + ksz2 / 16 * Math.sin(2 * Math.PI * (m + 0.5) / 5) * 1.8;
              ctx2.lineTo(xx, yy);
            }
            ctx2.fill();
            ctx2.restore();
          }
        }
      }
    }
    kmcs.push(kmc2);
  }
  o.kmcs = kmcs;
  per_color_imgs.push(o);
  j = 2.8;
  for (; 18.8 >= j; j += 1) {
    var cc = document.createElement("canvas");
    sz = Math.ceil(2.5 * j + 28);
    cc.width = cc.height = sz;
    ctx = cc.getContext("2d");
    ctx.fillStyle = o.cs;
    ctx.arc(sz / 2, sz / 2, 0.65 * j, 0, pi2);
    ctx.shadowBlur = 12;
    ctx.shadowOffsetY = 0;
    ctx.shadowColor = "#" + rs + gs + bs;
    ctx.globalAlpha = 0.8;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.fill();
    o.imgs.push(cc);
    o.fws.push(sz);
    o.fhs.push(sz);
    o.fw2s.push(sz / 2);
    o.fh2s.push(sz / 2);
    sz = Math.ceil(8 * j + 6);
    cc = document.createElement("canvas");
    cc.width = cc.height = sz;
    ctx = cc.getContext("2d");
    g = ctx.createRadialGradient(sz / 2, sz / 2, 1, sz / 2, sz / 2, 4 * j);
    g.addColorStop(0, "rgba(" + rrs[i] + ", " + ggs[i] + ", " + bbs[i] + ", 1)");
    g.addColorStop(1, "rgba(" + rrs[i] + ", " + ggs[i] + ", " + bbs[i] + ", 0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, sz, sz);
    o.gimgs.push(cc);
    o.gfws.push(sz);
    o.gfhs.push(sz);
    o.gfw2s.push(sz / 2);
    o.gfh2s.push(sz / 2);
    cc = document.createElement("canvas");
    sz = Math.ceil(1.3 * j + 6);
    cc.width = cc.height = sz;
    ctx = cc.getContext("2d");
    var eam = 0.2;
    g = ctx.createRadialGradient(sz / 2, sz / 2, 0, sz / 2, sz / 2, j / 2);
    g.addColorStop(0, "rgba(" + rrs[i] + ", " + ggs[i] + ", " + bbs[i] + ", 1)");
    g.addColorStop(0.99, "rgba(" + Math.floor(rrs[i] * eam) + ", " + Math.floor(ggs[i] * eam) + ", " + Math.floor(bbs[i] * eam) + ", 1)");
    g.addColorStop(1, "rgba(" + Math.floor(rrs[i] * eam) + ", " + Math.floor(ggs[i] * eam) + ", " + Math.floor(bbs[i] * eam) + ", 0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, sz, sz);
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.arc(sz / 2, sz / 2, 0.65 * j, 0, pi2);
    ctx.globalAlpha = 1;
    ctx.stroke();
    o.oimgs.push(cc);
    o.ofws.push(sz);
    o.ofhs.push(sz);
    o.ofw2s.push(sz / 2);
    o.ofh2s.push(sz / 2);
  }
  o.ic = o.imgs.length;
  o.pr_imgs = [];
  o.pr_fws = [];
  o.pr_fhs = [];
  o.pr_fw2s = [];
  o.pr_fh2s = [];
  j = 3;
  for (; 24 >= j; j += 1) {
    cc = document.createElement("canvas");
    sz = Math.ceil(2 * j + 38);
    cc.width = cc.height = sz;
    ctx = cc.getContext("2d");
    ctx.fillStyle = o.cs;
    ctx.arc(sz / 2, sz / 2, j / 2, 0, pi2);
    ctx.shadowBlur = 22;
    ctx.shadowOffsetY = 0;
    ctx.shadowColor = "#" + rs + gs + bs;
    ctx.fill();
    ctx.fill();
    o.pr_imgs.push(cc);
    o.pr_fws.push(sz);
    o.pr_fhs.push(sz);
    o.pr_fw2s.push(sz / 2);
    o.pr_fh2s.push(sz / 2);
  }
}
if (testing) {
  ctx = colc.getContext("2d");
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, colc.width, colc.height);
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "10px Arial, Helvetica Neue, Helvetica, sans-serif";
  ctx.textBaseline = "top";
  ctx.textAlign = "center";
  i = yy = xx = 0;
  for (; i < rrs.length; i++) {
    var pci = per_color_imgs[i];
    kmc = pci.kmcs[0];
    ctx.drawImage(kmc, 0, 0, kmc.width, kmc.height, xx, yy, 16, 16);
    ntx = o.xx + o.fx;
    nty = o.yy + o.fy;
    ntx = mww2 + (ntx - view_xx) * gsc;
    nty = mhh2 + (nty - view_yy) * gsc;
    ctx.fillText("" + i, xx + 8, yy + 16);
    xx += 16;
    if (xx > colc.width - 16) {
      xx = 0;
      yy += 28;
    }
  }
}
var view_xx = 0;
var view_yy = 0;
var view_ang = 0;
var view_dist = 0;
var fvx = 0;
var fvy = 0;
var xm = 0;
var ym = 0;
var lsxm = 0;
var lsym = 0;
var snake = null;
var dhx;
var dhy;
var hsz;
var fr = 0;
var lfr = 0;
var ltm = Date.now();
var vfr = 0;
var vfrb = 0;
var avfr = 0;
var fr2 = 0;
var lfr2 = 0;
var vfrb2 = 0;
var cptm = 0;
var lptm = 0;
var lpstm = 0;
var last_ping_mtm = 0;
var lagging = false;
var lag_mult = 1;
var wfpr = false;
var high_quality = true;
var gla = 1;
var wdfg = 0;
var qsm = 1;
var mqsm = 1.7;
var playing = false;
var connected = false;
var want_close_socket = false;
var want_victory_message = false;
var want_victory_focus = false;
var want_hide_victory = 0;
var hvfr = 0;
var dead_mtm = -1;
var at2lt = new Float32Array(65536);
yy = 0;
for (; 256 > yy; yy++) {
  xx = 0;
  for (; 256 > xx; xx++) {
    at2lt[yy << 8 | xx] = Math.atan2(yy - 128, xx - 128);
  }
}
var kd_l_frb = 0;
var kd_r_frb = 0;
var kd_l = false;
var kd_r = false;
var kd_u = false;
var lkstm = 0;
var social = document.createElement("iframe");
try {
  social.frameBorder = 0;
}
catch (b$$35) {}
social.style.position = "fixed";
social.style.left = "6px";
social.style.top = "6px";
social.style.border = "0px";
social.style.zIndex = 9999999;
social.width = 200;
social.height = 150;
social.src = "/social-box/";
document.body.appendChild(social);
var oef = function() {
  var options = Date.now();
  avfr = vfr = (options - ltm) / 8;
  ltm = options;
  if (!choosing_skin) {
    if (!lagging) {
      if (wfpr) {
        if (420 < options - last_ping_mtm) {
          lagging = true;
        }
      }
    }
    if (lagging) {
      lag_mult *= 0.85;
      if (0.01 > lag_mult) {
        lag_mult = 0.01;
      }
    }
    else {
      if (1 > lag_mult) {
        lag_mult += 0.05;
        if (1 <= lag_mult) {
          lag_mult = 1;
        }
      }
    }
  }
  if (120 < vfr) {
    vfr = 120;
  }
  vfr *= lag_mult;
  etm *= lag_mult;
  lfr = fr;
  fr += vfr;
  vfrb = Math.floor(fr) - Math.floor(lfr);
  lfr2 = fr2;
  fr2 += 2 * vfr;
  vfrb2 = Math.floor(fr2) - Math.floor(lfr2);
  if (kd_l) {
    kd_l_frb += vfrb;
  }
  if (kd_r) {
    kd_r_frb += vfrb;
  }
  if (spinner_shown) {
    lsfr += avfr;
    var ctx = ldmc.getContext("2d");
    ctx.clearRect(0, 0, 512, 128);
    var c;
    var x;
    var p = 1;
    for (; 2 >= p; p++) {
      ctx.beginPath();
      if (1 == p) {
        ctx.fillStyle = "#60FF70";
        x = 0;
      }
      else {
        ctx.fillStyle = "#9850FF";
        x = Math.PI;
      }
      var i = 0;
      for (; 256 >= i; i++) {
        c = 32 + 5 * Math.cos(x + lsfr / 6 + 8 * i / 256) + 8 * i / 256;
        if (256 == i) {
          c += 10;
        }
        xx = 64 + Math.cos(x + lsfr / 44 + 0.8 * Math.PI * i / 256) * c * 1.25;
        yy = 64 + Math.sin(x + lsfr / 44 + 0.8 * Math.PI * i / 256) * c;
        if (0 == i) {
          ctx.moveTo(xx, yy);
        }
        else {
          ctx.lineTo(xx, yy);
        }
      }
      c = 32;
      xx = 64 + Math.cos(x + lsfr / 44 + 0.8 * Math.PI * (i + 47) / 256) * c * 1.25;
      yy = 64 + Math.sin(x + lsfr / 44 + 0.8 * Math.PI * (i + 47) / 256) * c;
      ctx.lineTo(xx, yy);
      i = 256;
      for (; 0 <= i; i--) {
        c = 32 + 5 * Math.cos(x + lsfr / 6 + 8 * i / 256) - 8 * i / 256;
        if (256 == i) {
          c -= 10;
        }
        xx = 64 + Math.cos(x + lsfr / 44 + 0.8 * Math.PI * i / 256) * c * 1.25;
        yy = 64 + Math.sin(x + lsfr / 44 + 0.8 * Math.PI * i / 256) * c;
        ctx.lineTo(xx, yy);
      }
      ctx.fill();
    }
    if (connecting) {
      ss_a += avfr / 86;
      if (1 <= ss_a) {
        ss_a = 1;
      }
      ss_sh += avfr / 93;
      if (1 <= ss_sh) {
        ss_sh = 1;
      }
    }
    else {
      ss_a -= avfr / 86;
      if (0 >= ss_a) {
        ss_sh = ss_a = 0;
        ldmc.style.display = "none";
        trf(ldmc, "");
      }
    }
    ldmc.style.opacity = ss_a;
    i = Math.round(0.1 + 0.9 * ss_sh * (1 + 2 * Math.pow(1 - ss_a, 2)) * 1E5) / 1E5;
    trf(ldmc, "scale(" + i + "," + i + ")");
  }
  if (-1 != play_btn_click_mtm && 6666 < options - play_btn_click_mtm) {
    i = document.createElement("img");
    x = [];
    x.push("bso=" + encodeURIComponent(bso));
    if (bso) {
      var self;
      for (self in bso) {
        x.push(self + "=" + encodeURIComponent(bso[self]));
      }
    }
    x.push("waiting_for_sos=" + (waiting_for_sos ? "true" : "false"));
    x.push("soslen=" + sos.length);
    x.push("sislen=" + sis.length);
    i.src = "http://slither.io/cnc.jpg?" + x.join("&");
    play_btn_click_mtm = -1;
  }
  if (waiting_for_sos) {
    if (options > sos_ready_after_mtm) {
      if (!connecting) {
        if (!connected) {
          connect();
        }
      }
    }
  }
  if (connecting) {
    if (3E3 < options - start_connect_mtm) {
      if (bso) {
        bso.tainted = true;
      }
      connect();
    }
  }
  if (choosing_skin) {
    i = snakes.length - 1;
    for (; 0 <= i; i--) {
      self = snakes[i];
      p = self.pts.length - 1;
      for (; 0 <= p; p--) {
        self.pts[p].yy = grd / 2 + 15 * Math.cos(p / 4 + fr / 19) * (1 - p / self.pts.length);
      }
    }
    view_xx -= vfr;
  }
  if (playing) {
    if (high_quality) {
      if (1 > gla) {
        gla += 0.0075 * vfr;
        if (1 < gla) {
          gla = 1;
        }
      }
      if (1 < qsm) {
        qsm -= 4E-5 * vfr;
        if (1 > qsm) {
          qsm = 1;
        }
      }
    }
    else {
      if (0 < gla) {
        gla -= 0.0075 * vfr;
        if (0 > gla) {
          gla = 0;
        }
      }
      if (qsm < mqsm) {
        qsm += 4E-5 * vfr;
        if (qsm > mqsm) {
          qsm = mqsm;
        }
      }
    }
  }
  if (0 != want_hide_victory) {
    if (1 == want_hide_victory) {
      hvfr += 0.02 * vfr;
      if (1 <= hvfr) {
        hvfr = 0;
        want_hide_victory = 2;
        victory_holder.style.opacity = 1;
        saveh.style.opacity = 1;
        victory_holder.style.display = "none";
        saveh.style.display = "none";
        nick_holder.style.opacity = 0;
        playh.style.opacity = 0;
        smh.style.opacity = 0;
        nick_holder.style.display = "inline-block";
        playh.style.display = "block";
        smh.style.display = "block";
      }
      else {
        victory_holder.style.opacity = 1 - hvfr;
        saveh.style.opacity = 1 - hvfr;
      }
    }
    else {
      if (2 == want_hide_victory) {
        hvfr += 0.02 * vfr;
        if (1 <= hvfr) {
          hvfr = 1;
          want_hide_victory = 0;
        }
        nick_holder.style.opacity = hvfr;
        playh.style.opacity = hvfr;
        smh.style.opacity = hvfr;
      }
    }
  }
  if (1 != login_fr) {
    if (-1 != tip_fr) {
      tip_fr += 0.017 * vfr;
      if (tip_fr >= pi2) {
        tip_fr -= pi2;
        tip_pos++;
        if (tip_pos >= tipss.length) {
          tip_pos = 0;
        }
        tips.textContent = tipss[tip_pos];
      }
      p = 0.5 - 0.5 * Math.cos(tip_fr);
      tips.style.opacity = Math.round(1E5 * Math.pow(p, 0.5)) / 1E5;
    }
  }
  if (-1 == dead_mtm) {
    if (-1 != lb_fr) {
      if (1 != lb_fr) {
        lb_fr += 0.01 * vfr;
        if (1 <= lb_fr) {
          lb_fr = 1;
        }
        lbh.style.opacity = 0.85 * lb_fr;
        lbs.style.opacity = lbn.style.opacity = lbp.style.opacity = lbf.style.opacity = vcm.style.opacity = lb_fr;
      }
    }
  }
  else {
    if (1600 < options - dead_mtm) {
      if (-1 == login_iv) {
        login_iv = -2;
        login.style.display = "inline";
        try {
          if ("1" != localStorage.edttsg) {
            cstx.style.display = "inline";
          }
          else {
            cskh.style.display = "inline";
          }
        }
        catch (z) {}
        fbh.style.display = "inline";
        twth.style.display = "inline";
        plq.style.display = "inline";
        clq.style.display = "inline";
        grqh.style.display = "inline";
        social.style.display = "inline";
        if (want_victory_focus) {
          want_victory_focus = false;
          victory.focus();
        }
      }
      if (-2 == login_iv) {
        login_fr -= 0.004 * vfr;
        if (choosing_skin) {
          login_fr -= 0.007 * vfr;
        }
        lb_fr = login_fr;
        if (0 >= login_fr) {
          login_fr = 0;
          dead_mtm = -1;
          nick.disabled = false;
          nick.focus();
          lb_fr = -1;
          playing = false;
          if (choosing_skin) {
            choosing_skin = false;
            resetGame();
            pskh.style.display = "none";
            nskh.style.display = "none";
            skodiv.style.display = "none";
          }
        }
        pbdiv.style.opacity = 1 - 0.5 * Math.max(0, Math.min(1, 6 * login_fr));
        lgcsc = 1 + 0.1 * Math.pow(login_fr, 2);
        i = Math.round(lgbsc * lgcsc * 1E5) / 1E5;
        if (1 == i) {
          trf(login, "");
        }
        else {
          trf(login, "scale(" + i + "," + i + ")");
        }
        login.style.opacity = 1 - login_fr;
        cstx.style.opacity = 1 - login_fr;
        fbh.style.opacity = 1 - login_fr;
        twth.style.opacity = 1 - login_fr;
        cskh.style.opacity = 1 - login_fr;
        grqh.style.opacity = 1 - login_fr;
        plq.style.opacity = 1 - login_fr;
        clq.style.opacity = 1 - login_fr;
        social.style.opacity = 1 - login_fr;
        pskh.style.opacity = login_fr;
        nskh.style.opacity = login_fr;
        skodiv.style.opacity = login_fr;
        mc.style.opacity = login_fr;
        loch.style.opacity = login_fr;
        lbh.style.opacity = 0.85 * lb_fr;
        lbs.style.opacity = lbn.style.opacity = lbp.style.opacity = lbf.style.opacity = vcm.style.opacity = lb_fr;
      }
    }
  }
  if (want_close_socket) {
    if (-1 == dead_mtm) {
      want_close_socket = false;
      if (ws) {
        ws.close();
        ws = null;
        playing = connected = false;
      }
      resetGame();
    }
  }
  if (want_victory_message) {
    victory_bg.style.opacity = 0.92 + 0.08 * Math.cos(fr / 10);
  }
  if (connected) {
    if (0 < kd_l_frb || 0 < kd_r_frb) {
      if (150 < options - lkstm) {
        lkstm = options;
        if (0 < kd_r_frb) {
          if (kd_l_frb > kd_r_frb) {
            kd_l_frb -= kd_r_frb;
            kd_r_frb = 0;
          }
        }
        if (0 < kd_l_frb) {
          if (kd_r_frb > kd_l_frb) {
            kd_r_frb -= kd_l_frb;
            kd_l_frb = 0;
          }
        }
        if (0 < kd_l_frb) {
          v = kd_l_frb;
          if (127 < v) {
            v = 127;
          }
          kd_l_frb -= v;
          if (5 <= protocol_version) {
            i = new Uint8Array(2);
            i[0] = 252;
          }
          else {
            i = new Uint8Array(2);
            i[0] = 108;
          }
          i[1] = v;
          ws.send(i);
          snake.eang -= mamu * v * snake.scang * snake.spang;
        }
        else {
          if (0 < kd_r_frb) {
            v = kd_r_frb;
            if (127 < v) {
              v = 127;
            }
            kd_r_frb -= v;
            if (5 <= protocol_version) {
              v += 128;
              i = new Uint8Array(2);
              i[0] = 252;
            }
            else {
              i = new Uint8Array(2);
              i[0] = 114;
            }
            i[1] = v;
            snake.eang += mamu * v * snake.scang * snake.spang;
            ws.send(i);
          }
        }
      }
    }
    if (!wfpr) {
      if (250 < options - last_ping_mtm) {
        last_ping_mtm = options;
        wfpr = true;
        i = new Uint8Array(1);
        i[0] = 5 <= protocol_version ? 251 : 112;
        ws.send(i);
        lpstm = options;
      }
    }
  }
  if (null != snake) {
    if (2147483647 != grd) {
      if (1E3 < options - locu_mtm) {
        locu_mtm = Date.now();
        myloc.style.left = Math.round(52 + 40 * (snake.xx - grd) / grd - 7) + "px";
        myloc.style.top = Math.round(52 + 40 * (snake.yy - grd) / grd - 7) + "px";
      }
    }
  }
  if (1E3 < options - lrd_mtm) {
    if (testing && (console && console.log)) {
      console.log("FPS: " + fps);
      x = [];
      trdps += rdps;
      if (playing) {
        tcsecs++;
      }
      x.push("FPS: " + fps);
      x.push("sectors: " + sectors.length);
      x.push("foods: " + foods_c);
      x.push("bytes/sec: " + rdps);
      x.push("bytes/sec avg: " + Math.round(trdps / tcsecs));
      x.push("");
      i = self = 0;
      for (; i < rdpspc.length; i++) {
        if (0 <= rdpspc[i]) {
          self += rdpspc[i];
        }
      }
      i = 0;
      for (; i < rdpspc.length; i++) {
        if (0 <= rdpspc[i]) {
          x.push(String.fromCharCode(i) + ": " + rdpspc[i] + " (" + Math.round(rdpspc[i] / self * 1E3) / 10 + "%)");
        }
      }
      x.push("total: " + self);
      maxp = pf_ep = pf_nap = pf_remove = pf_new_add = pf_add = 0;
      x.push("");
      i = 1;
      for (; i < pfs.length; i++) {
        if (0 != pfs[i]) {
          x.push(i + ": " + Math.round(1E3 * pfs[i]) / 1E3);
          pfs[i] = 0;
        }
      }
      pft = 0;
      pfd.innerHTML = x.join("<br>");
    }
    if (playing) {
      if (1 == want_quality) {
        if (32 >= fps) {
          if (high_quality) {
            wdfg++;
            if (1 <= wdfg) {
              high_quality = false;
            }
          }
        }
        else {
          if (high_quality || 48 <= fps) {
            if (0 < wdfg) {
              wdfg--;
              if (0 >= wdfg) {
                high_quality = true;
              }
            }
          }
        }
      }
    }
    wangnuc = angnuc = anguc = fps = reps = rsps = rnps = rfps = rdps = 0;
    lrd_mtm = Date.now();
  }
  etm *= Math.pow(0.993, vfrb);
  if (null != snake) {
    if (xm != lsxm || ym != lsym) {
      want_e = true;
    }
    if (want_e) {
      if (100 < options - last_e_mtm) {
        want_e = false;
        last_e_mtm = options;
        lsxm = xm;
        lsym = ym;
        d2 = xm * xm + ym * ym;
        if (256 < d2) {
          ang = Math.atan2(ym, xm);
          snake.eang = ang;
        }
        else {
          ang = snake.wang;
        }
        ang %= pi2;
        if (0 > ang) {
          ang += pi2;
        }
        if (5 <= protocol_version) {
          sang = Math.floor(251 * ang / pi2);
          if (sang != lsang) {
            lsang = sang;
            i = new Uint8Array(1);
            i[0] = sang & 255;
            lpstm = options;
            ws.send(i.buffer);
          }
        }
        else {
          sang = Math.floor(16777215 * ang / pi2);
          if (sang != lsang) {
            lsang = sang;
            i = new Uint8Array(4);
            i[0] = 101;
            i[1] = sang >> 16 & 255;
            i[2] = sang >> 8 & 255;
            i[3] = sang & 255;
            lpstm = options;
            ws.send(i.buffer);
          }
        }
      }
    }
  }
  if (!choosing_skin) {
    i = snakes.length - 1;
    for (; 0 <= i; i--) {
      self = snakes[i];
      ctx = mamu * vfr * self.scang * self.spang;
      options = self.sp * vfr / 4;
      if (options > self.msl) {
        options = self.msl;
      }
      if (!self.dead) {
        if (self.tsp != self.sp) {
          if (self.tsp < self.sp) {
            self.tsp += 0.3 * vfr;
            if (self.tsp > self.sp) {
              self.tsp = self.sp;
            }
          }
          else {
            self.tsp -= 0.3 * vfr;
            if (self.tsp < self.sp) {
              self.tsp = self.sp;
            }
          }
        }
        if (self.tsp > self.fsp) {
          self.sfr += (self.tsp - self.fsp) * vfr * 0.021;
        }
        if (0 < self.fltg) {
          x = vfrb;
          if (x > self.fltg) {
            x = self.fltg;
          }
          self.fltg -= x;
          qq = 0;
          for (; qq < x; qq++) {
            self.fl = self.fls[self.flpos];
            self.fls[self.flpos] = 0;
            self.flpos++;
            if (self.flpos >= lfc) {
              self.flpos = 0;
            }
          }
        }
        else {
          if (0 == self.fltg) {
            self.fltg = -1;
            self.fl = 0;
          }
        }
        self.cfl = self.tl + self.fl;
      }
      if (1 == self.dir) {
        self.ang -= ctx;
        if (0 > self.ang || self.ang >= pi2) {
          self.ang %= pi2;
        }
        if (0 > self.ang) {
          self.ang += pi2;
        }
        x = (self.wang - self.ang) % pi2;
        if (0 > x) {
          x += pi2;
        }
        if (x > Math.PI) {
          x -= pi2;
        }
        if (0 < x) {
          self.ang = self.wang;
          self.dir = 0;
        }
      }
      else {
        if (2 == self.dir) {
          self.ang += ctx;
          if (0 > self.ang || self.ang >= pi2) {
            self.ang %= pi2;
          }
          if (0 > self.ang) {
            self.ang += pi2;
          }
          x = (self.wang - self.ang) % pi2;
          if (0 > x) {
            x += pi2;
          }
          if (x > Math.PI) {
            x -= pi2;
          }
          if (0 > x) {
            self.ang = self.wang;
            self.dir = 0;
          }
        }
        else {
          self.ang = self.wang;
        }
      }
      if (1 != self.ehl) {
        self.ehl += 0.03 * vfr;
        if (1 <= self.ehl) {
          self.ehl = 1;
        }
      }
      ctx = self.pts[self.pts.length - 1];
      self.wehang = Math.atan2(self.yy + self.fy - ctx.yy - ctx.fy + ctx.eby * (1 - self.ehl), self.xx + self.fx - ctx.xx - ctx.fx + ctx.ebx * (1 - self.ehl));
      if (!self.dead) {
        if (!(self.ehang == self.wehang)) {
          x = (self.wehang - self.ehang) % pi2;
          if (0 > x) {
            x += pi2;
          }
          if (x > Math.PI) {
            x -= pi2;
          }
          if (0 > x) {
            self.edir = 1;
          }
          else {
            if (0 < x) {
              self.edir = 2;
            }
          }
        }
      }
      if (1 == self.edir) {
        self.ehang -= 0.1 * vfr;
        if (0 > self.ehang || self.ehang >= pi2) {
          self.ehang %= pi2;
        }
        if (0 > self.ehang) {
          self.ehang += pi2;
        }
        x = (self.wehang - self.ehang) % pi2;
        if (0 > x) {
          x += pi2;
        }
        if (x > Math.PI) {
          x -= pi2;
        }
        if (0 < x) {
          self.ehang = self.wehang;
          self.edir = 0;
        }
      }
      else {
        if (2 == self.edir) {
          self.ehang += 0.1 * vfr;
          if (0 > self.ehang || self.ehang >= pi2) {
            self.ehang %= pi2;
          }
          if (0 > self.ehang) {
            self.ehang += pi2;
          }
          x = (self.wehang - self.ehang) % pi2;
          if (0 > x) {
            x += pi2;
          }
          if (x > Math.PI) {
            x -= pi2;
          }
          if (0 > x) {
            self.ehang = self.wehang;
            self.edir = 0;
          }
        }
      }
      if (!self.dead) {
        self.xx += Math.cos(self.ang) * options;
        self.yy += Math.sin(self.ang) * options;
        self.chl += options / self.msl;
      }
      if (0 < vfrb) {
        p = self.pts.length - 1;
        for (; 0 <= p; p--) {
          ctx = self.pts[p];
          if (ctx.dying) {
            ctx.da += 0.0015 * vfrb;
            if (1 < ctx.da) {
              self.pts.splice(p, 1);
              ctx.dying = false;
              points_dp.add(ctx);
            }
          }
        }
        p = self.pts.length - 1;
        for (; 0 <= p; p--) {
          if (ctx = self.pts[p], 0 < ctx.eiu) {
            fy = fx = 0;
            qq = cm1 = ctx.eiu - 1;
            for (; 0 <= qq; qq--) {
              ctx.efs[qq] = 2 == ctx.ems[qq] ? ctx.efs[qq] + vfrb2 : ctx.efs[qq] + vfrb;
              x = ctx.efs[qq];
              if (x >= hfc) {
                if (qq != cm1) {
                  ctx.exs[qq] = ctx.exs[cm1];
                  ctx.eys[qq] = ctx.eys[cm1];
                  ctx.efs[qq] = ctx.efs[cm1];
                  ctx.ems[qq] = ctx.ems[cm1];
                }
                ctx.eiu--;
                cm1--;
              }
              else {
                fx += ctx.exs[qq] * hfas[x];
                fy += ctx.eys[qq] * hfas[x];
              }
            }
            ctx.fx = fx;
            ctx.fy = fy;
          }
        }
      }
      options = 2.3 * Math.cos(self.eang);
      x = 2.3 * Math.sin(self.eang);
      if (self.rex < options) {
        self.rex += vfr / 6;
        if (self.rex >= options) {
          self.rex = options;
        }
      }
      if (self.rey < x) {
        self.rey += vfr / 6;
        if (self.rey >= x) {
          self.rey = x;
        }
      }
      if (self.rex > options) {
        self.rex -= vfr / 6;
        if (self.rex <= options) {
          self.rex = options;
        }
      }
      if (self.rey > x) {
        self.rey -= vfr / 6;
        if (self.rey <= x) {
          self.rey = x;
        }
      }
      if (0 < vfrb) {
        if (0 < self.ftg) {
          x = vfrb;
          if (x > self.ftg) {
            x = self.ftg;
          }
          self.ftg -= x;
          qq = 0;
          for (; qq < x; qq++) {
            self.fx = self.fxs[self.fpos];
            self.fy = self.fys[self.fpos];
            self.fchl = self.fchls[self.fpos];
            self.fxs[self.fpos] = 0;
            self.fys[self.fpos] = 0;
            self.fchls[self.fpos] = 0;
            self.fpos++;
            if (self.fpos >= rfc) {
              self.fpos = 0;
            }
          }
        }
        else {
          if (0 == self.ftg) {
            self.ftg = -1;
            self.fx = 0;
            self.fy = 0;
            self.fchl = 0;
          }
        }
        if (0 < self.fatg) {
          x = vfrb;
          if (x > self.fatg) {
            x = self.fatg;
          }
          self.fatg -= x;
          qq = 0;
          for (; qq < x; qq++) {
            self.fa = self.fas[self.fapos];
            self.fas[self.fapos] = 0;
            self.fapos++;
            if (self.fapos >= afc) {
              self.fapos = 0;
            }
          }
        }
        else {
          if (0 == self.fatg) {
            self.fatg = -1;
            self.fa = 0;
          }
        }
      }
      if (self.dead) {
        self.dead_amt += 0.02 * vfr;
        if (1 <= self.dead_amt) {
          snakes.splice(i, 1);
        }
      }
      else {
        if (1 != self.alive_amt) {
          self.alive_amt += 0.015 * vfr;
          if (1 <= self.alive_amt) {
            self.alive_amt = 1;
          }
        }
      }
    }
  }
  i = preys.length - 1;
  for (; 0 <= i; i--) {
    p = preys[i];
    ctx = mamu2 * vfr;
    options = p.sp * vfr / 4;
    if (0 < vfrb) {
      if (0 < p.ftg) {
        x = vfrb;
        if (x > p.ftg) {
          x = p.ftg;
        }
        p.ftg -= x;
        qq = 1;
        for (; qq <= x; qq++) {
          if (qq == x) {
            p.fx = p.fxs[p.fpos];
            p.fy = p.fys[p.fpos];
          }
          p.fxs[p.fpos] = 0;
          p.fys[p.fpos] = 0;
          p.fpos++;
          if (p.fpos >= rfc) {
            p.fpos = 0;
          }
        }
      }
      else {
        if (0 == p.ftg) {
          p.fx = 0;
          p.fy = 0;
          p.ftg = -1;
        }
      }
    }
    if (1 == p.dir) {
      p.ang -= ctx;
      if (0 > p.ang || p.ang >= pi2) {
        p.ang %= pi2;
      }
      if (0 > p.ang) {
        p.ang += pi2;
      }
      x = (p.wang - p.ang) % pi2;
      if (0 > x) {
        x += pi2;
      }
      if (x > Math.PI) {
        x -= pi2;
      }
      if (0 < x) {
        p.ang = p.wang;
        p.dir = 0;
      }
    }
    else {
      if (2 == p.dir) {
        p.ang += ctx;
        if (0 > p.ang || p.ang >= pi2) {
          p.ang %= pi2;
        }
        if (0 > p.ang) {
          p.ang += pi2;
        }
        x = (p.wang - p.ang) % pi2;
        if (0 > x) {
          x += pi2;
        }
        if (x > Math.PI) {
          x -= pi2;
        }
        if (0 > x) {
          p.ang = p.wang;
          p.dir = 0;
        }
      }
      else {
        p.ang = p.wang;
      }
    }
    p.xx += Math.cos(p.ang) * options;
    p.yy += Math.sin(p.ang) * options;
    p.gfr += vfr * p.gr;
    if (p.eaten) {
      if (1.5 != p.fr) {
        p.fr += vfr / 150;
        if (1.5 <= p.fr) {
          p.fr = 1.5;
        }
      }
      p.eaten_fr += vfr / 47;
      p.gfr += vfr;
      self = p.eaten_by;
      if (1 <= p.eaten_fr || !self) {
        preys.splice(i, 1);
      }
      else {
        p.eaten_fr4 = Math.pow(p.eaten_fr, 4);
        p.rad = 1 - Math.pow(p.eaten_fr, 3);
      }
    }
    else {
      if (1 != p.fr) {
        p.fr += vfr / 150;
        if (1 <= p.fr) {
          p.fr = 1;
          p.rad = 1;
        }
        else {
          p.rad = 0.5 * (1 - Math.cos(Math.PI * p.fr));
          p.rad += 0.66 * (0.5 * (1 - Math.cos(Math.PI * p.rad)) - p.rad);
        }
      }
    }
  }
  i = cm1 = foods_c - 1;
  for (; 0 <= i; i--) {
    options = foods[i];
    options.gfr += vfr * options.gr;
    if (options.eaten) {
      if (1.5 != options.fr) {
        options.fr += vfr / 150;
        if (1.5 <= options.fr) {
          options.fr = 1.5;
        }
      }
      options.eaten_fr += vfr / 41;
      options.rad = 1 - Math.pow(options.eaten_fr, 3);
      self = options.eaten_by;
      if (1 <= options.eaten_fr || !self) {
        if (i == cm1) {
          foods[i] = null;
        }
        else {
          foods[i] = foods[cm1];
          foods[cm1] = null;
        }
        foods_c--;
        cm1--;
      }
      else {
        self = options.eaten_by;
        x = options.eaten_fr * options.eaten_fr;
        options.eaten_fr4 = x * x;
        options.rad = 1 - options.eaten_fr * x;
        options.rx = options.xx + (self.xx + self.fx + Math.cos(self.ang + self.fa) * (43 - 24 * x) * (1 - x) - options.xx) * x;
        options.ry = options.yy + (self.yy + self.fy + Math.sin(self.ang + self.fa) * (43 - 24 * x) * (1 - x) - options.yy) * x;
        options.rx += 6 * Math.cos(options.wsp * options.gfr) * (1 - options.eaten_fr);
        options.ry += 6 * Math.sin(options.wsp * options.gfr) * (1 - options.eaten_fr);
      }
    }
    else {
      if (1 != options.fr) {
        options.fr += options.rsp * vfr / 150;
        if (1 <= options.fr) {
          options.fr = 1;
          options.rad = 1;
        }
        else {
          options.rad = 0.5 * (1 - Math.cos(Math.PI * options.fr));
          options.rad += 0.66 * (0.5 * (1 - Math.cos(Math.PI * options.rad)) - options.rad);
        }
      }
      options.rx = options.xx;
      options.ry = options.yy;
      options.rx = options.xx + 6 * Math.cos(options.wsp * options.gfr);
      options.ry = options.yy + 6 * Math.sin(options.wsp * options.gfr);
    }
  }
  vfrb = vfr = 0;
  redraw();
  if (!no_raf) {
    raf(oef);
  }
};
var bgx = 0;
var bgy = 0;
var bgx2 = 0;
var bgy2 = 0;
var fgfr = 0;
var px;
var py;
var lpx;
var lpy;
var ax;
var ay;
var lax;
var lay;
var pax;
var pay;
var fx;
var fy;
var fs;
var maxp = 0;
var fps = 0;
var redraw = function() {
  fps++;
  var ctx = mc.getContext("2d");
  if (animating) {
    if (snake) {
      var i = 0.5 + 0.4 / Math.max(1, (snake.sct + 16) / 36);
      if (gsc != i) {
        if (gsc < i) {
          gsc += 2E-4;
          if (gsc >= i) {
            gsc = i;
          }
        }
        else {
          gsc -= 2E-4;
          if (gsc <= i) {
            gsc = i;
          }
        }
      }
    }
    i = view_xx;
    var self = view_yy;
    if (null != snake) {
      if (0 < fvtg) {
        fvtg--;
        fvx = fvxs[fvpos];
        fvy = fvys[fvpos];
        fvxs[fvpos] = 0;
        fvys[fvpos] = 0;
        fvpos++;
        if (fvpos >= vfc) {
          fvpos = 0;
        }
      }
      view_xx = snake.xx + snake.fx + fvx;
      view_yy = snake.yy + snake.fy + fvy;
      if (choosing_skin) {
        view_xx -= 104;
        gsc = 1;
      }
      view_ang = Math.atan2(view_yy - grd, view_xx - grd);
      view_dist = Math.sqrt((view_xx - grd) * (view_xx - grd) + (view_yy - grd) * (view_yy - grd));
      bpx1 = view_xx - (mww2 / gsc + 84);
      bpy1 = view_yy - (mhh2 / gsc + 84);
      bpx2 = view_xx + (mww2 / gsc + 84);
      bpy2 = view_yy + (mhh2 / gsc + 84);
      fpx1 = view_xx - (mww2 / gsc + 24);
      fpy1 = view_yy - (mhh2 / gsc + 24);
      fpx2 = view_xx + (mww2 / gsc + 24);
      fpy2 = view_yy + (mhh2 / gsc + 24);
    }
    bgx2 -= 1 * (view_xx - i) / bgw2;
    bgy2 -= 1 * (view_yy - self) / bgh2;
    bgx2 %= 1;
    if (0 > bgx2) {
      bgx2 += 1;
    }
    bgy2 %= 1;
    if (0 > bgy2) {
      bgy2 += 1;
    }
    if (ggbg && (high_quality || 0 < gla)) {
      ctx.save();
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, mww, mhh);
      ctx.globalAlpha = 0.3 * gla;
      ctx.drawImage(gbgmc, 0, 0);
      ctx.restore();
    }
    else {
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, mww, mhh);
    }
    if (bgp2) {
      ctx.save();
      ctx.fillStyle = bgp2;
      ctx.translate(mww2, mhh2);
      ctx.scale(gsc, gsc);
      ctx.translate(bgx2 * bgw2, bgy2 * bgh2);
      ctx.globalAlpha = 0.4 + 0.6 * (1 - gla);
      ctx.fillRect(3 * -mww / gsc, 3 * -mhh / gsc, 5 * mww / gsc, 5 * mhh / gsc);
      if (high_quality || 0 < gla) {
        ctx.globalCompositeOperation = "lighter";
        ctx.globalAlpha = 0.4 * gla;
        ctx.fillRect(3 * -mww / gsc, 3 * -mhh / gsc, 5 * mww / gsc, 5 * mhh / gsc);
      }
      ctx.restore();
    }
    if (testing) {
      i = sectors.length - 1;
      for (; 0 <= i; i--) {
        self = sectors[i];
        ctx.fillStyle = "rgba(0, 255, 0, .1)";
        ctx.fillRect(mww2 + (self.xx * sector_size - view_xx) * gsc, mhh2 + (self.yy * sector_size - view_yy) * gsc, sector_size * gsc - 4, sector_size * gsc - 4);
      }
    }
    if (high_quality || 0 < gla) {
      var opts = 1.75;
      if (1 != gla) {
        opts = 1.75 * gla;
      }
      ctx.save();
      i = foods_c - 1;
      for (; 0 <= i; i--) {
        self = foods[i];
        if (self.rx >= fpx1) {
          if (self.ry >= fpy1) {
            if (self.rx <= fpx2) {
              if (self.ry <= fpy2) {
                if (1 == self.rad) {
                  dx = mww2 + gsc * (self.rx - view_xx) - self.ofw2;
                  top = mhh2 + gsc * (self.ry - view_yy) - self.ofh2;
                  if (-50 <= dx) {
                    if (-50 <= top) {
                      if (dx <= mwwp50) {
                        if (top <= mhhp50) {
                          ctx.globalAlpha = opts * self.fr;
                          ctx.drawImage(self.ofi, dx, top);
                        }
                      }
                    }
                  }
                }
                else {
                  dx = mww2 + gsc * (self.rx - view_xx) - self.ofw2 * self.rad;
                  top = mhh2 + gsc * (self.ry - view_yy) - self.ofh2 * self.rad;
                  if (-50 <= dx) {
                    if (-50 <= top) {
                      if (dx <= mwwp50) {
                        if (top <= mhhp50) {
                          ctx.globalAlpha = opts * self.fr;
                          ctx.drawImage(self.ofi, 0, 0, self.ofw, self.ofh, dx, top, self.ofw * self.rad, self.ofh * self.rad);
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
      ctx.restore();
    }
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    if (high_quality || 0 < gla) {
      opts = 0.75;
      if (1 != gla) {
        opts = 0.75 * gla;
      }
      var mouseY = 0.75;
      if (1 != gla) {
        mouseY = 1 - 0.25 * gla;
      }
      i = foods_c - 1;
      for (; 0 <= i; i--) {
        self = foods[i];
        if (self.rx >= fpx1) {
          if (self.ry >= fpy1) {
            if (self.rx <= fpx2) {
              if (self.ry <= fpy2) {
                if (1 == self.rad) {
                  dx = mww2 + gsc * (self.rx - view_xx) - self.fw2;
                  top = mhh2 + gsc * (self.ry - view_yy) - self.fh2;
                  if (-50 <= dx) {
                    if (-50 <= top) {
                      if (dx <= mwwp50) {
                        if (top <= mhhp50) {
                          ctx.globalAlpha = mouseY * self.fr;
                          ctx.drawImage(self.fi, dx, top);
                          ctx.globalAlpha = opts * (0.5 + 0.5 * Math.cos(self.gfr / 13)) * self.fr;
                          ctx.drawImage(self.fi, dx, top);
                        }
                      }
                    }
                  }
                }
                else {
                  dx = mww2 + gsc * (self.rx - view_xx) - self.fw2 * self.rad;
                  top = mhh2 + gsc * (self.ry - view_yy) - self.fh2 * self.rad;
                  if (-50 <= dx) {
                    if (-50 <= top) {
                      if (dx <= mwwp50) {
                        if (top <= mhhp50) {
                          ctx.globalAlpha = mouseY * self.fr;
                          ctx.drawImage(self.fi, 0, 0, self.fw, self.fh, dx, top, self.fw * self.rad, self.fh * self.rad);
                          ctx.globalAlpha = opts * (0.5 + 0.5 * Math.cos(self.gfr / 13)) * self.fr;
                          ctx.drawImage(self.fi, 0, 0, self.fw, self.fh, dx, top, self.fw * self.rad, self.fh * self.rad);
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
    }
    else {
      i = foods_c - 1;
      for (; 0 <= i; i--) {
        self = foods[i];
        if (self.rx >= fpx1) {
          if (self.ry >= fpy1) {
            if (self.rx <= fpx2) {
              if (self.ry <= fpy2) {
                if (1 == self.rad) {
                  dx = mww2 + gsc * (self.rx - view_xx) - self.fw2;
                  top = mhh2 + gsc * (self.ry - view_yy) - self.fh2;
                  if (-50 <= dx) {
                    if (-50 <= top) {
                      if (dx <= mwwp50) {
                        if (top <= mhhp50) {
                          ctx.globalAlpha = self.fr;
                          ctx.drawImage(self.fi, dx, top);
                        }
                      }
                    }
                  }
                }
                else {
                  dx = mww2 + gsc * (self.rx - view_xx) - self.fw2 * self.rad;
                  top = mhh2 + gsc * (self.ry - view_yy) - self.fh2 * self.rad;
                  if (-50 <= dx) {
                    if (-50 <= top) {
                      if (dx <= mwwp50) {
                        if (top <= mhhp50) {
                          ctx.globalAlpha = self.fr;
                          ctx.drawImage(self.fi, 0, 0, self.fw, self.fh, dx, top, self.fw * self.rad, self.fh * self.rad);
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
    }
    ctx.restore();
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    i = preys.length - 1;
    for (; 0 <= i; i--) {
      if (opts = preys[i], d = opts.xx + opts.fx, y = opts.yy + opts.fy, px = mww2 + gsc * (d - view_xx), py = mhh2 + gsc * (y - view_yy), -50 <= px && (-50 <= py && (px <= mwwp50 && py <= mhhp50))) {
        if (opts.eaten) {
          self = opts.eaten_by;
          var c = Math.pow(opts.eaten_fr, 2);
          var d = d + (self.xx + self.fx + Math.cos(self.ang + self.fa) * (43 - 24 * c) * (1 - c) - d) * c;
          var y = y + (self.yy + self.fy + Math.sin(self.ang + self.fa) * (43 - 24 * c) * (1 - c) - y) * c;
          px = mww2 + gsc * (d - view_xx);
          py = mhh2 + gsc * (y - view_yy);
        }
        if (1 == opts.rad) {
          dx = px - opts.fw2;
          top = py - opts.fh2;
          ctx.globalAlpha = 0.75 * opts.fr;
          ctx.drawImage(opts.fi, dx, top);
          ctx.globalAlpha = 0.75 * (0.5 + 0.5 * Math.cos(opts.gfr / 13)) * opts.fr;
          ctx.drawImage(opts.fi, dx, top);
        }
        else {
          dx = px - opts.fw2 * opts.rad;
          top = py - opts.fh2 * opts.rad;
          ctx.globalAlpha = 0.75 * opts.fr;
          ctx.drawImage(opts.fi, 0, 0, opts.fw, opts.fh, dx, top, opts.fw * opts.rad, opts.fh * opts.rad);
          ctx.globalAlpha = 0.75 * (0.5 + 0.5 * Math.cos(opts.gfr / 13)) * opts.fr;
          ctx.drawImage(opts.fi, 0, 0, opts.fw, opts.fh, dx, top, opts.fw * opts.rad, opts.fh * opts.rad);
        }
      }
    }
    ctx.restore();
    ctx.save();
    ctx.strokeStyle = "#90C098";
    var angle;
    i = snakes.length - 1;
    for (; 0 <= i; i--) {
      self = snakes[i];
      d = self.xx + self.fx;
      y = self.yy + self.fy + 40;
      if (0 < self.na) {
        if (d >= bpx1 - 100) {
          if (y >= bpy1) {
            if (d <= bpx2 + 100) {
              if (y <= bpy2) {
                if (self == snake) {
                  self.fnfr++;
                  if (200 < self.fnfr) {
                    self.na -= 0.004;
                    if (0 > self.na) {
                      self.na = 0;
                    }
                  }
                }
                ctx.save();
                ctx.globalAlpha = 0.5 * self.na * self.alive_amt * (1 - self.dead_amt);
                ctx.font = "12px Arial, Helvetica Neue, Helvetica, sans-serif";
                ctx.fillStyle = self.csw;
                ctx.textBaseline = "middle";
                ctx.textAlign = "center";
                opts = self.xx + self.fx;
                mouseY = self.yy + self.fy;
                opts = mww2 + (opts - view_xx) * gsc;
                mouseY = mhh2 + (mouseY - view_yy) * gsc;
                ctx.fillText(self.nk, opts, mouseY + 32 + 7 * self.sc * gsc);
                ctx.restore();
              }
            }
          }
        }
      }
    }
    i = snakes.length - 1;
    for (; 0 <= i; i--) {
      self = snakes[i];
      self.iiv = false;
      a = self.pts.length - 1;
      for (; 0 <= a; a--) {
        if (d = self.pts[a], px = d.xx + d.fx, py = d.yy + d.fy, px >= bpx1 && (py >= bpy1 && (px <= bpx2 && py <= bpy2))) {
          self.iiv = true;
          break;
        }
      }
    }
    i = snakes.length - 1;
    for (; 0 <= i; i--) {
      if (self = snakes[i], self.iiv) {
        opts = self.xx + self.fx;
        mouseY = self.yy + self.fy;
        px = opts;
        py = mouseY;
        angle = self.ehang;
        var ratio = self.sc;
        var size = 29 * ratio;
        var alpha = self.cfl;
        d = self.pts[self.pts.length - 1];
        if (1 == render_mode) {
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(mww2 + (px - view_xx) * gsc, mhh2 + (py - view_yy) * gsc);
          y = false;
          var a = self.pts.length - 1;
          for (; 0 <= a; a--) {
            d = self.pts[a];
            lpx = px;
            lpy = py;
            px = d.xx;
            py = d.yy;
            var dx = d.fx;
            var top = d.fy;
            if (0 < alpha) {
              px += dx;
              py += top;
              lax = ax;
              lay = ay;
              ax = (px + lpx) / 2;
              ay = (py + lpy) / 2;
              if (!y) {
                lax = ax;
                lay = ay;
              }
              if (1 > alpha) {
                c = 1 - alpha;
                lpx += (lax - lpx) * c;
                lpy += (lay - lpy) * c;
                ax += (lax - ax) * c;
                ay += (lay - ay) * c;
              }
              if (y) {
                alpha--;
              }
              else {
                alpha -= self.chl + self.fchl;
              }
              if (y) {
                ctx.quadraticCurveTo(mww2 + (lpx - view_xx) * gsc, mhh2 + (lpy - view_yy) * gsc, mww2 + (ax - view_xx) * gsc, mhh2 + (ay - view_yy) * gsc);
              }
              else {
                ctx.lineTo(mww2 + (ax - view_xx) * gsc, mhh2 + (ay - view_yy) * gsc);
                y = true;
              }
            }
          }
          ctx.save();
          ctx.lineJoin = "round";
          ctx.lineCap = "round";
          if (is_firefox) {
            if (self.sp > self.fsp) {
              a = self.alive_amt * (1 - self.dead_amt) * Math.max(0, Math.min(1, (self.sp - self.ssp) / (self.msp - self.ssp)));
              ctx.save();
              ctx.strokeStyle = self.cs;
              ctx.globalAlpha = 0.3 * a;
              ctx.lineWidth = (size + 6) * gsc;
              ctx.stroke();
              ctx.lineWidth = (size + 9) * gsc;
              ctx.stroke();
              ctx.lineWidth = (size + 12) * gsc;
              ctx.stroke();
              ctx.restore();
            }
            ctx.globalAlpha = 1 * self.alive_amt * (1 - self.dead_amt);
            ctx.strokeStyle = "#000000";
            ctx.lineWidth = (size + 5) * gsc;
          }
          else {
            if (self.sp > self.fsp) {
              a = self.alive_amt * (1 - self.dead_amt) * Math.max(0, Math.min(1, (self.sp - self.ssp) / (self.msp - self.ssp)));
              ctx.save();
              ctx.lineWidth = (size - 2) * gsc;
              ctx.shadowBlur = 30 * gsc;
              ctx.shadowColor = "rgba(" + self.rr + "," + self.gg + "," + self.bb + ", " + Math.round(1E4 * a) / 1E4 + ")";
              ctx.stroke();
              ctx.stroke();
              ctx.restore();
            }
            ctx.globalAlpha = 0.4 * self.alive_amt * (1 - self.dead_amt);
            ctx.strokeStyle = "#000000";
            ctx.lineWidth = (size + 5) * gsc;
            ctx.stroke();
            ctx.strokeStyle = self.cs;
            ctx.lineWidth = size * gsc;
            ctx.strokeStyle = "#000000";
            ctx.globalAlpha = 1 * self.alive_amt * (1 - self.dead_amt);
          }
          ctx.stroke();
          ctx.strokeStyle = self.cs;
          ctx.globalAlpha = 0.8 * self.alive_amt * (1 - self.dead_amt);
          ctx.lineWidth = size * gsc;
          ctx.stroke();
          ctx.restore();
          ctx.strokeStyle = self.cs;
          if (self.dead) {
            top = (0.5 + 0.5 * Math.abs(Math.sin(5 * Math.PI * self.dead_amt))) * Math.sin(Math.PI * self.dead_amt);
            ctx.save();
            ctx.lineJoin = "round";
            ctx.lineCap = "round";
            ctx.globalCompositeOperation = "lighter";
            ctx.lineWidth = (size - 3) * gsc;
            ctx.globalAlpha = top;
            ctx.strokeStyle = "#FFCC99";
            ctx.stroke();
            ctx.restore();
          }
          ctx.restore();
        }
        if (2 == render_mode) {
          size = 0.5 * size;
          var b;
          var y2;
          var prevData;
          var origin;
          var oY;
          var x;
          var offset;
          var min;
          dx = 0;
          px = opts;
          py = mouseY;
          oY = px;
          x = py;
          if (oY >= bpx1 && (x >= bpy1 && (oY <= bpx2 && x <= bpy2))) {
            pbx[0] = oY;
            pby[0] = x;
            pba[0] = Math.atan2(mouseY - (d.yy + d.fy), opts - (d.xx + d.fx)) + Math.PI;
            pbu[0] = 1;
          }
          else {
            pbu[0] = 0;
          }
          dx = 1;
          n = (self.chl + self.fchl) % 0.25;
          if (0 > n) {
            n += 0.25;
          }
          n = 0.25 - n;
          alpha += 1 - 0.25 * Math.ceil((self.chl + self.fchl) / 0.25);
          ax = px;
          ay = py;
          if (self.sep != self.wsep) {
            if (self.sep < self.wsep) {
              self.sep += 0.01;
              if (self.sep >= self.wsep) {
                self.sep = self.wsep;
              }
            }
            else {
              if (self.sep > self.wsep) {
                self.sep -= 0.01;
                if (self.sep <= self.wsep) {
                  self.sep = self.wsep;
                }
              }
            }
          }
          var width = self.sep * qsm;
          var r = 0;
          top = per_color_imgs[self.cv].kmcs;
          var scale;
          var tileWidth;
          a = self.pts.length - 1;
          for (; 0 <= a; a--) {
            if (d = self.pts[a], lpx = px, lpy = py, px = d.xx + d.fx, py = d.yy + d.fy, -0.25 < alpha) {
              prevData = oY;
              origin = x;
              oY = (px + lpx) / 2;
              x = (py + lpy) / 2;
              offset = lpx;
              min = lpy;
              c = 0;
              for (; 1 > c; c += 0.25) {
                scale = n + c;
                d = prevData + (offset - prevData) * scale;
                y = origin + (min - origin) * scale;
                b = offset + (oY - offset) * scale;
                y2 = min + (x - min) * scale;
                lax = ax;
                lay = ay;
                ax = d + (b - d) * scale;
                ay = y + (y2 - y) * scale;
                if (0 > alpha) {
                  ax += -(lax - ax) * alpha / 0.25;
                  ay += -(lay - ay) * alpha / 0.25;
                }
                b = Math.sqrt(Math.pow(ax - lax, 2) + Math.pow(ay - lay, 2));
                if (r + b < width) {
                  r += b;
                }
                else {
                  r = -r;
                  scale = (b - r) / width;
                  for (; 1 <= scale; scale--) {
                    r += width;
                    pax = lax + (ax - lax) * r / b;
                    pay = lay + (ay - lay) * r / b;
                    if (pax >= bpx1 && (pay >= bpy1 && (pax <= bpx2 && pay <= bpy2))) {
                      pbx[dx] = pax;
                      pby[dx] = pay;
                      pbu[dx] = 1;
                      d = ax - lax;
                      y = ay - lay;
                      pba[dx] = -15 <= d && (-15 <= y && (15 > d && 15 > y)) ? at2lt[8 * y + 128 << 8 | 8 * d + 128] : -127 <= d && (-127 <= y && (127 > d && 127 > y)) ? at2lt[y + 128 << 8 | d + 128] : Math.atan2(y, d);
                    }
                    else {
                      pbu[dx] = 0;
                    }
                    dx++;
                  }
                  r = b - r;
                }
                if (1 > alpha && (alpha -= 0.25, -0.25 >= alpha)) {
                  break;
                }
              }
              if (1 <= alpha) {
                alpha--;
              }
            }
          }
          if (ax >= bpx1 && (ay >= bpy1 && (ax <= bpx2 && ay <= bpy2))) {
            pbu[dx] = 1;
            pbx[dx] = ax;
            pby[dx] = ay;
            pba[dx] = Math.atan2(ay - lay, ax - lax);
          }
          else {
            pbu[dx] = 0;
          }
          dx++;
          ctx.save();
          ctx.translate(mww2, mhh2);
          c = gsc * size * 52 / 32;
          oY = gsc * size * 62 / 32;
          alpha = self.alive_amt * (1 - self.dead_amt);
          alpha *= alpha;
          scale = 1;
          if (self.tsp > self.fsp) {
            scale = self.alive_amt * (1 - self.dead_amt) * Math.max(0, Math.min(1, (self.tsp - self.ssp) / (self.msp - self.ssp)));
            tileWidth = 0.37 * scale;
            y = Math.pow(scale, 0.5);
            r = gsc * size * (1 + 0.9375 * y);
            d = per_color_imgs[self.cv].kfmc;
            ctx.save();
            ctx.globalCompositeOperation = "lighter";
            if (self.rbcs) {
              x = self.rbcs;
              width = x.length;
              a = dx - 1;
              for (; 0 <= a; a--) {
                if (1 == pbu[a]) {
                  px = pbx[a];
                  py = pby[a];
                  d = per_color_imgs[x[a % width]];
                  d = d.kfmc;
                  ctx.save();
                  ctx.globalAlpha = alpha * y * 0.38 * (0.6 + 0.4 * Math.cos(a / 4 - 1.15 * self.sfr));
                  ctx.translate((px - view_xx) * gsc, (py - view_yy) * gsc);
                  ctx.drawImage(d, -r, -r, 2 * r, 2 * r);
                  ctx.restore();
                }
              }
            }
            else {
              a = dx - 1;
              for (; 0 <= a; a--) {
                if (1 == pbu[a]) {
                  px = pbx[a];
                  py = pby[a];
                  ctx.save();
                  ctx.globalAlpha = alpha * y * 0.38 * (0.6 + 0.4 * Math.cos(a / 4 - 1.15 * self.sfr));
                  ctx.translate((px - view_xx) * gsc, (py - view_yy) * gsc);
                  ctx.drawImage(d, -r, -r, 2 * r, 2 * r);
                  ctx.restore();
                }
              }
            }
            ctx.restore();
            scale = 1 - scale;
          }
          scale *= alpha;
          if (high_quality || 0 < gla) {
            d = scale;
            if (1 != gla) {
              d = scale * gla;
            }
            ctx.globalAlpha = d;
            a = dx - 1;
            for (; 0 <= a; a--) {
              if (1 == pbu[a]) {
                px = pbx[a];
                py = pby[a];
                ctx.save();
                ctx.translate((px - view_xx) * gsc, (py - view_yy) * gsc);
                ctx.drawImage(komc, -c, -c, 2 * c, 2 * c);
                if (9 > a) {
                  ctx.globalAlpha = d * (1 - a / 9);
                  ctx.drawImage(ksmc, -oY, -oY, 2 * oY, 2 * oY);
                  ctx.globalAlpha = d;
                }
                ctx.restore();
              }
            }
          }
          ctx.globalAlpha = scale;
          if (self.rbcs) {
            x = self.rbcs;
            width = x.length;
            a = dx - 1;
            for (; 0 <= a; a--) {
              if (1 == pbu[a]) {
                px = pbx[a];
                py = pby[a];
                if (2 <= a) {
                  c = a - 2;
                  if (1 == pbu[c]) {
                    d = pbx[c];
                    y = pby[c];
                    ctx.save();
                    ctx.translate((d - view_xx) * gsc, (y - view_yy) * gsc);
                    ctx.globalAlpha = 9 > c ? c / 9 * scale : scale;
                    ctx.drawImage(ksmc, -oY, -oY, 2 * oY, 2 * oY);
                    ctx.restore();
                  }
                }
                ctx.save();
                ctx.globalAlpha = alpha;
                ctx.translate((px - view_xx) * gsc, (py - view_yy) * gsc);
                ctx.rotate(pba[a]);
                c = a % (2 * top.length);
                if (c >= top.length) {
                  c = 2 * top.length - (c + 1);
                }
                d = per_color_imgs[x[a % width]];
                ctx.drawImage(d.kmcs[c], -gsc * size, -gsc * size, 2 * gsc * size, 2 * gsc * size);
                ctx.restore();
              }
            }
            if (self.tsp > self.fsp && (high_quality || 0 < gla)) {
              ctx.save();
              ctx.globalCompositeOperation = "lighter";
              a = dx - 1;
              for (; 0 <= a; a--) {
                if (1 == pbu[a]) {
                  px = pbx[a];
                  py = pby[a];
                  ctx.save();
                  ctx.translate((px - view_xx) * gsc, (py - view_yy) * gsc);
                  ctx.rotate(pba[a]);
                  ctx.globalAlpha = alpha * tileWidth * gla * (0.5 + 0.5 * Math.cos(a / 4 - self.sfr));
                  c = a % (2 * top.length);
                  if (c >= top.length) {
                    c = 2 * top.length - (c + 1);
                  }
                  ctx.drawImage(per_color_imgs[x[a % width]].kmcs[c], -gsc * size, -gsc * size, 2 * gsc * size, 2 * gsc * size);
                  ctx.restore();
                }
              }
              ctx.restore();
            }
          }
          else {
            a = dx - 1;
            for (; 0 <= a; a--) {
              if (1 == pbu[a]) {
                px = pbx[a];
                py = pby[a];
                if (2 <= a) {
                  c = a - 2;
                  if (1 == pbu[c]) {
                    d = pbx[c];
                    y = pby[c];
                    ctx.save();
                    ctx.translate((d - view_xx) * gsc, (y - view_yy) * gsc);
                    ctx.globalAlpha = 9 > c ? c / 9 * scale : scale;
                    ctx.drawImage(ksmc, -oY, -oY, 2 * oY, 2 * oY);
                    ctx.restore();
                  }
                }
                ctx.save();
                ctx.globalAlpha = alpha;
                ctx.translate((px - view_xx) * gsc, (py - view_yy) * gsc);
                ctx.rotate(pba[a]);
                c = a % (2 * top.length);
                if (c >= top.length) {
                  c = 2 * top.length - (c + 1);
                }
                ctx.drawImage(top[c], -gsc * size, -gsc * size, 2 * gsc * size, 2 * gsc * size);
                ctx.restore();
              }
            }
            if (self.tsp > self.fsp && (high_quality || 0 < gla)) {
              ctx.save();
              ctx.globalCompositeOperation = "lighter";
              a = dx - 1;
              for (; 0 <= a; a--) {
                if (1 == pbu[a]) {
                  px = pbx[a];
                  py = pby[a];
                  c = a % (2 * top.length);
                  if (c >= top.length) {
                    c = 2 * top.length - (c + 1);
                  }
                  ctx.save();
                  ctx.translate((px - view_xx) * gsc, (py - view_yy) * gsc);
                  ctx.rotate(pba[a]);
                  ctx.globalAlpha = alpha * tileWidth * gla * (0.5 + 0.5 * Math.cos(a / 4 - self.sfr));
                  ctx.drawImage(top[c], -gsc * size, -gsc * size, 2 * gsc * size, 2 * gsc * size);
                  ctx.restore();
                }
              }
              ctx.restore();
            }
          }
          if (self.antenna && (2 <= dx && 1 == pbu[1])) {
            self.atx[0] = pbx[1];
            self.aty[0] = pby[1];
            scale = self.sc * gsc;
            fj = self.atx.length - 1;
            if (choosing_skin) {
              a = 1;
              for (; a <= fj; a++) {
                self.atvx[a] -= 0.3;
                self.atvy[a] += 0.14 * Math.cos(fr / 23 - 7 * a / fj);
              }
            }
            a = 1;
            for (; a <= fj; a++) {
              xx = self.atx[a - 1];
              yy = self.aty[a - 1];
              xx += 2 * Math.random() - 1;
              yy += 2 * Math.random() - 1;
              d = self.atx[a] - xx;
              y = self.aty[a] - yy;
              ang = -4 <= d && (-4 <= y && (4 > d && 4 > y)) ? at2lt[32 * y + 128 << 8 | 32 * d + 128] : -8 <= d && (-8 <= y && (8 > d && 8 > y)) ? at2lt[16 * y + 128 << 8 | 16 * d + 128] : -16 <= d && (-16 <= y && (16 > d && 16 > y)) ? at2lt[8 * y + 128 << 8 | 8 * d + 128] : -127 <= d && (-127 <= y && (127 > d && 127 > y)) ? at2lt[y + 128 << 8 | d + 128] : Math.atan2(y, d);
              xx += 4 * Math.cos(ang) * self.sc;
              yy += 4 * Math.sin(ang) * self.sc;
              self.atvx[a] += 0.1 * (xx - self.atx[a]);
              self.atvy[a] += 0.1 * (yy - self.aty[a]);
              self.atx[a] += self.atvx[a];
              self.aty[a] += self.atvy[a];
              self.atvx[a] *= 0.88;
              self.atvy[a] *= 0.88;
              d = self.atx[a] - self.atx[a - 1];
              y = self.aty[a] - self.aty[a - 1];
              b = Math.sqrt(d * d + y * y);
              if (b > 4 * self.sc) {
                ang = -4 <= d && (-4 <= y && (4 > d && 4 > y)) ? at2lt[32 * y + 128 << 8 | 32 * d + 128] : -8 <= d && (-8 <= y && (8 > d && 8 > y)) ? at2lt[16 * y + 128 << 8 | 16 * d + 128] : -16 <= d && (-16 <= y && (16 > d && 16 > y)) ? at2lt[8 * y + 128 << 8 | 8 * d + 128] : -127 <= d && (-127 <= y && (127 > d && 127 > y)) ? at2lt[y + 128 << 8 | d + 128] : Math.atan2(y, d);
                self.atx[a] = self.atx[a - 1] + 4 * Math.cos(ang) * self.sc;
                self.aty[a] = self.aty[a - 1] + 4 * Math.sin(ang) * self.sc;
              }
            }
            ctx.globalAlpha = alpha;
            ctx.strokeStyle = self.atc1;
            ctx.lineWidth = 5 * scale;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.beginPath();
            fj = self.atx.length - 1;
            d = (self.atx[fj] - view_xx) * gsc;
            y = (self.aty[fj] - view_yy) * gsc;
            ctx.moveTo(d, y);
            a = fj - 1;
            for (; 1 <= a; a--) {
              xx = (self.atx[a] - view_xx) * gsc;
              yy = (self.aty[a] - view_yy) * gsc;
              if (1 <= Math.abs(xx - d) + Math.abs(yy - y)) {
                d = xx;
                y = yy;
                ctx.lineTo(d, y);
              }
            }
            xx = (0.5 * (self.atx[1] + self.atx[0]) - view_xx) * gsc;
            yy = (0.5 * (self.aty[1] + self.aty[0]) - view_yy) * gsc;
            if (1 <= Math.abs(xx - d) + Math.abs(yy - y)) {
              d = xx;
              y = yy;
              ctx.lineTo(d, y);
            }
            ctx.stroke();
            ctx.globalAlpha = self.atia * alpha;
            ctx.strokeStyle = self.atc2;
            ctx.lineWidth = 4 * scale;
            ctx.beginPath();
            fj = self.atx.length - 1;
            d = (self.atx[fj] - view_xx) * gsc;
            y = (self.aty[fj] - view_yy) * gsc;
            ctx.moveTo(d, y);
            a = fj - 1;
            for (; 0 <= a; a--) {
              xx = (self.atx[a] - view_xx) * gsc;
              yy = (self.aty[a] - view_yy) * gsc;
              if (1 <= Math.abs(xx - d) + Math.abs(yy - y)) {
                d = xx;
                y = yy;
                ctx.lineTo(d, y);
              }
            }
            ctx.stroke();
            if (self.atwg) {
              ctx.lineWidth = 3 * scale;
              ctx.stroke();
              ctx.lineWidth = 2 * scale;
              ctx.stroke();
            }
            ctx.globalAlpha = alpha * self.blba;
            if (self.abrot) {
              ctx.save();
              ctx.translate((self.atx[fj] - view_xx) * gsc, (self.aty[fj] - view_yy) * gsc);
              vang = Math.atan2(self.aty[fj] - self.aty[fj - 1], self.atx[fj] - self.atx[fj - 1]) - self.atba;
              if (0 > vang || vang >= pi2) {
                vang %= pi2;
              }
              if (vang < -Math.PI) {
                vang += pi2;
              }
              else {
                if (vang > Math.PI) {
                  vang -= pi2;
                }
              }
              self.atba = (self.atba + 0.15 * vang) % pi2;
              ctx.rotate(self.atba);
              ctx.drawImage(self.bulb, self.blbx * self.bsc * scale, self.blby * self.bsc * scale, self.blbw * self.bsc * scale, self.blbh * self.bsc * scale);
              ctx.restore();
            }
            else {
              ctx.drawImage(self.bulb, (self.atx[fj] - view_xx + self.blbx * self.bsc * self.sc) * gsc, (self.aty[fj] - view_yy + self.blby * self.bsc * self.sc) * gsc, self.blbw * self.bsc * scale, self.blbh * self.bsc * scale);
            }
            if (self.apbs) {
              ctx.globalAlpha = 0.5 * alpha;
              ctx.lineWidth = 3 * scale;
              ctx.stroke();
              ctx.lineWidth = 2 * scale;
              ctx.stroke();
            }
          }
          if (self.dead) {
            ctx.save();
            ctx.globalCompositeOperation = "lighter";
            top = (0.15 + 0.15 * Math.abs(Math.sin(5 * Math.PI * self.dead_amt))) * Math.sin(Math.PI * self.dead_amt);
            size *= gsc;
            a = dx - 1;
            for (; 0 <= a; a--) {
              if (1 == pbu[a]) {
                px = pbx[a];
                py = pby[a];
                ctx.save();
                ctx.globalAlpha = top * (0.6 + 0.4 * Math.cos(a / 4 - 15 * self.dead_amt));
                ctx.translate((px - view_xx) * gsc, (py - view_yy) * gsc);
                ctx.drawImage(kdmc, -size, -size, 2 * size, 2 * size);
                ctx.restore();
              }
            }
            ctx.restore();
          }
          ctx.restore();
        }
        a = 1 == render_mode ? 4 * ratio : 6 * ratio;
        size = 6 * ratio;
        dx = Math.cos(angle) * a + Math.cos(angle - Math.PI / 2) * (size + 0.5);
        top = Math.sin(angle) * a + Math.sin(angle - Math.PI / 2) * (size + 0.5);
        ctx.fillStyle = self.ec;
        ctx.globalAlpha = self.eca * self.alive_amt;
        ctx.beginPath();
        ctx.arc(mww2 + (dx + opts - view_xx) * gsc, mhh2 + (top + mouseY - view_yy) * gsc, self.er * ratio * gsc, 0, pi2);
        ctx.closePath();
        ctx.fill();
        ctx.globalAlpha = self.ppa;
        dx = Math.cos(angle) * (a + 0.5) + self.rex * ratio + Math.cos(angle - Math.PI / 2) * size;
        top = Math.sin(angle) * (a + 0.5) + self.rey * ratio + Math.sin(angle - Math.PI / 2) * size;
        ctx.fillStyle = self.ppc;
        ctx.beginPath();
        ctx.arc(mww2 + (dx + opts - view_xx) * gsc, mhh2 + (top + mouseY - view_yy) * gsc, 3.5 * ratio * gsc, 0, pi2);
        ctx.closePath();
        ctx.fill();
        dx = Math.cos(angle) * a + Math.cos(angle + Math.PI / 2) * (size + 0.5);
        top = Math.sin(angle) * a + Math.sin(angle + Math.PI / 2) * (size + 0.5);
        ctx.fillStyle = self.ec;
        ctx.globalAlpha = self.eca * self.alive_amt;
        ctx.beginPath();
        ctx.arc(mww2 + (dx + opts - view_xx) * gsc, mhh2 + (top + mouseY - view_yy) * gsc, self.er * ratio * gsc, 0, pi2);
        ctx.closePath();
        ctx.fill();
        ctx.globalAlpha = self.ppa;
        dx = Math.cos(angle) * (a + 0.5) + self.rex * ratio + Math.cos(angle + Math.PI / 2) * size;
        top = Math.sin(angle) * (a + 0.5) + self.rey * ratio + Math.sin(angle + Math.PI / 2) * size;
        ctx.fillStyle = self.ppc;
        ctx.beginPath();
        ctx.arc(mww2 + (dx + opts - view_xx) * gsc, mhh2 + (top + mouseY - view_yy) * gsc, 3.5 * ratio * gsc, 0, pi2);
        ctx.closePath();
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }
    if (high_quality || 0 < gla) {
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      i = foods_c - 1;
      for (; 0 <= i; i--) {
        self = foods[i];
        if (self.rx >= fpx1) {
          if (self.ry >= fpy1) {
            if (self.rx <= fpx2) {
              if (self.ry <= fpy2) {
                d = self.rx - view_xx;
                y = self.ry - view_yy;
                opts = d * d + y * y;
                fs = 1 + 0.06 * self.rad;
                dx = d * fs;
                top = y * fs;
                tileWidth = 0.005 + 0.09 * (1 - opts / (86E3 + opts));
                if (1 != self.rad) {
                  tileWidth *= Math.pow(self.rad, 0.25);
                }
                if (1 != gla) {
                  tileWidth *= gla;
                }
                dx = dx * gsc + mww2;
                top = top * gsc + mhh2;
                if (1 == self.rad) {
                  if (-150 <= dx) {
                    if (-150 <= top) {
                      if (dx <= mwwp150) {
                        if (top <= mhhp150) {
                          dx -= self.gfw2;
                          top -= self.gfh2;
                          ctx.globalAlpha = tileWidth * self.fr;
                          ctx.drawImage(self.gfi, dx, top);
                          ctx.globalAlpha = tileWidth * (0.5 + 0.5 * Math.cos(self.gfr / 13)) * self.fr;
                          ctx.drawImage(self.gfi, dx, top);
                        }
                      }
                    }
                  }
                }
                else {
                  if (-150 <= dx) {
                    if (-150 <= top) {
                      if (dx <= mwwp150) {
                        if (top <= mhhp150) {
                          dx -= self.gfw2 * self.rad;
                          top -= self.gfh2 * self.rad;
                          ctx.globalAlpha = tileWidth * self.fr;
                          ctx.drawImage(self.gfi, 0, 0, self.gfw, self.gfh, dx, top, self.gfw * self.rad, self.gfh * self.rad);
                          ctx.globalAlpha = tileWidth * (0.5 + 0.5 * Math.cos(self.gfr / 13)) * self.fr;
                          ctx.drawImage(self.gfi, 0, 0, self.gfw, self.gfh, dx, top, self.gfw * self.rad, self.gfh * self.rad);
                        }
                      }
                    }
                  }
                }
                fs = 1 + 0.32 * self.rad;
                dx = d * fs;
                top = y * fs;
                tileWidth = 0.085 * (1 - opts / (16500 + opts));
                if (1 != self.rad) {
                  tileWidth *= Math.pow(self.rad, 0.25);
                }
                if (1 != gla) {
                  tileWidth *= gla;
                }
                dx = dx * gsc + mww2;
                top = top * gsc + mhh2;
                if (1 == self.rad) {
                  if (-150 <= dx) {
                    if (-150 <= top) {
                      if (dx <= mwwp150) {
                        if (top <= mhhp150) {
                          dx -= self.g2fw2;
                          top -= self.g2fh2;
                          ctx.globalAlpha = tileWidth * self.fr;
                          ctx.drawImage(self.g2fi, dx, top);
                          ctx.globalAlpha = tileWidth * (0.5 + 0.5 * Math.cos(self.gfr / 13)) * self.fr;
                          ctx.drawImage(self.g2fi, dx, top);
                        }
                      }
                    }
                  }
                }
                else {
                  if (-150 <= dx) {
                    if (-150 <= top) {
                      if (dx <= mwwp150) {
                        if (top <= mhhp150) {
                          dx -= self.g2fw2 * self.rad;
                          top -= self.g2fh2 * self.rad;
                          ctx.globalAlpha = tileWidth * self.fr;
                          ctx.drawImage(self.g2fi, 0, 0, self.g2fw, self.g2fh, dx, top, self.g2fw * self.rad, self.g2fh * self.rad);
                          ctx.globalAlpha = tileWidth * (0.5 + 0.5 * Math.cos(self.gfr / 13)) * self.fr;
                          ctx.drawImage(self.g2fi, 0, 0, self.g2fw, self.g2fh, dx, top, self.g2fw * self.rad, self.g2fh * self.rad);
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
      ctx.restore();
    }
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    i = preys.length - 1;
    for (; 0 <= i; i--) {
      opts = preys[i];
      d = opts.xx + opts.fx;
      y = opts.yy + opts.fy;
      if (opts.eaten) {
        self = opts.eaten_by;
        c = Math.pow(opts.eaten_fr, 2);
        d += (self.xx + self.fx + Math.cos(self.ang + self.fa) * (43 - 24 * c) * (1 - c) - d) * c;
        y += (self.yy + self.fy + Math.sin(self.ang + self.fa) * (43 - 24 * c) * (1 - c) - y) * c;
      }
      d -= view_xx;
      y -= view_yy;
      self = d * d + y * y;
      fs = 1 + 0.08 * opts.rad;
      px = d * fs;
      py = y * fs;
      tileWidth = 0.4 * (1 - self / (176E3 + self));
      if (1 != opts.rad) {
        tileWidth *= Math.pow(opts.rad, 0.25);
      }
      px = px * gsc + mww2;
      py = py * gsc + mhh2;
      if (1 == opts.rad) {
        if (-150 <= px) {
          if (-150 <= py) {
            if (px <= mwwp150) {
              if (py <= mhhp150) {
                px -= opts.gfw2;
                py -= opts.gfh2;
                ctx.globalAlpha = tileWidth * opts.fr;
                ctx.drawImage(opts.gfi, px, py);
                ctx.globalAlpha = tileWidth * (0.5 + 0.5 * Math.cos(opts.gfr / 13)) * opts.fr;
                ctx.drawImage(opts.gfi, px, py);
              }
            }
          }
        }
      }
      else {
        if (-150 <= px) {
          if (-150 <= py) {
            if (px <= mwwp150) {
              if (py <= mhhp150) {
                px -= opts.gfw2 * opts.rad;
                py -= opts.gfh2 * opts.rad;
                ctx.globalAlpha = tileWidth * opts.fr;
                ctx.drawImage(opts.gfi, 0, 0, opts.gfw, opts.gfh, px, py, opts.gfw * opts.rad, opts.gfh * opts.rad);
                ctx.globalAlpha = tileWidth * (0.5 + 0.5 * Math.cos(opts.gfr / 13)) * opts.fr;
                ctx.drawImage(opts.gfi, 0, 0, opts.gfw, opts.gfh, px, py, opts.gfw * opts.rad, opts.gfh * opts.rad);
              }
            }
          }
        }
      }
      fs = 1 + 0.32 * opts.rad;
      px = d * fs;
      py = y * fs;
      tileWidth = 0.35 * (1 - self / (46500 + self));
      if (1 != opts.rad) {
        tileWidth *= Math.pow(opts.rad, 0.25);
      }
      self = 2 * opts.rad;
      px = px * gsc + mww2;
      py = py * gsc + mhh2;
      if (-150 <= px) {
        if (-150 <= py) {
          if (px <= mwwp150) {
            if (py <= mhhp150) {
              px -= opts.gfw2 * self;
              py -= opts.gfh2 * self;
              ctx.globalAlpha = tileWidth * opts.fr;
              ctx.drawImage(opts.gfi, 0, 0, opts.gfw, opts.gfh, px, py, opts.gfw * self, opts.gfh * self);
              ctx.globalAlpha = tileWidth * (0.5 + 0.5 * Math.cos(opts.gfr / 13)) * opts.fr;
              ctx.drawImage(opts.gfi, 0, 0, opts.gfw, opts.gfh, px, py, opts.gfw * self, opts.gfh * self);
            }
          }
        }
      }
    }
    ctx.restore();
    if (4E3 > Math.abs(grd - view_dist)) {
      ctx.save();
      ctx.lineWidth = 23 * gsc;
      ctx.strokeStyle = "#800000";
      ctx.fillStyle = "#300000";
      ctx.beginPath();
      xx = grd + Math.cos(view_ang - 2E3 / grd) * grd * 0.98;
      yy = grd + Math.sin(view_ang - 2E3 / grd) * grd * 0.98;
      ctx.moveTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
      a = -2E3;
      for (; 2E3 >= a; a += 100) {
        xx = grd + Math.cos(view_ang + a / grd) * grd * 0.98;
        yy = grd + Math.sin(view_ang + a / grd) * grd * 0.98;
        ctx.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
      }
      xx = grd + Math.cos(view_ang + 2E3 / grd) * (grd + 4E3);
      yy = grd + Math.sin(view_ang + 2E3 / grd) * (grd + 4E3);
      ctx.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
      xx = grd + Math.cos(view_ang - 2E3 / grd) * (grd + 4E3);
      yy = grd + Math.sin(view_ang - 2E3 / grd) * (grd + 4E3);
      ctx.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
      ctx.restore();
    }
    if (wumsts) {
      if (0 < rank) {
        if (0 < snake_count) {
          if (playing) {
            wumsts = false;
            self = "Your length";
            i = "of";
            tileWidth = "Your rank";
            if ("DE" == country) {
              self = "Deine Länge";
              i = "von";
              tileWidth = "Dein rang";
            }
            else {
              if ("FR" == country) {
                self = "Votre longueur";
                i = "de";
                tileWidth = "Ton rang";
              }
              else {
                if ("BR" == country) {
                  self = "Seu comprimento";
                  i = "do";
                  tileWidth = "Seu classificação";
                }
              }
            }
            self = "" + ('<span style="font-size: 14px;"><span style="opacity: .4;">' + self + ': </span><span style="opacity: .8; font-weight: bold;">' + Math.floor(150 * (fpsls[snake.sct] + snake.fam / fmlts[snake.sct] - 1) - 50) / 10 + "</span></span>");
            self += '<BR><span style="opacity: .3;">' + tileWidth + ': </span><span style="opacity: .35;">' + rank + '</span><span style="opacity: .3;"> ' + i + ' </span><span style="opacity: .35;">' + snake_count + "</span>";
            lbf.innerHTML = self;
          }
        }
      }
    }
    ctx.restore();
  }
};
var ww = window.innerWidth;
var hh = window.innerHeight;
var lww = 0;
var lhh = 0;
var csc;
var grd = 16384;

function resize() {
  ww = Math.ceil(window.innerWidth);
  hh = Math.ceil(window.innerHeight);
  if (ww != lww || hh != lhh) {
    lww = ww;
    lhh = hh;
    var w = 0;
    if (mbi) {
      var devicePixelRatio = ww / 1245;
      mbi.width = 1245 * devicePixelRatio;
      w = Math.ceil(260 * devicePixelRatio);
      mbi.height = w;
      hh -= w;
    }
    ww -= wsu;
    loch.style.bottom = 16 + w + "px";
    lbf.style.bottom = 4 + w + "px";
    lbh.style.right = 4 + wsu + "px";
    lbs.style.right = 4 + wsu + "px";
    lbn.style.right = 64 + wsu + "px";
    lbp.style.right = 230 + wsu + "px";
    loch.style.right = 16 + wsu + "px";
    plq.style.right = 10 + wsu + "px";
    clq.style.left = Math.floor(ww / 2 - 130) + "px";
    login.style.width = ww + "px";
    fbh.style.right = 30 + wsu + "px";
    twth.style.right = 130 + wsu + "px";
    cstx.style.right = 240 + wsu + "px";
    grqh.style.right = 20 + wsu + "px";
    pskh.style.left = Math.round(0.25 * ww - 44) + "px";
    nskh.style.left = Math.round(0.75 * ww - 44) + "px";
    skodiv.style.left = Math.round(ww / 2 - skodiv.offsetWidth / 2) + "px";
    skodiv.style.top = Math.round(hh / 2 + 120) + "px";
    pskh.style.top = Math.round(hh / 2 - 44) + "px";
    nskh.style.top = Math.round(hh / 2 - 44) + "px";
    ldmc.style.left = ww / 2 - 64 + "px";
    ldmc.style.top = hh / 2 - 64 + "px";
    devicePixelRatio = Math.sqrt(ww * ww + hh * hh);
    w = Math.ceil(1400 * ww / devicePixelRatio);
    var h = Math.ceil(1400 * hh / devicePixelRatio);
    if (1100 < w) {
      h = Math.ceil(1100 * h / w);
      w = 1100;
    }
    if (1100 < h) {
      w = Math.ceil(1100 * w / h);
      h = 1100;
    }
    lgbsc = 560 > hh ? Math.max(50, hh) / 560 : 1;
    devicePixelRatio = Math.round(lgbsc * lgcsc * 1E5) / 1E5;
    if (1 == devicePixelRatio) {
      trf(login, "");
      login.style.top = "0px";
    }
    else {
      login.style.top = -(Math.round(hh * (1 - lgbsc) * 1E5) / 1E5) + "px";
      trf(login, "scale(" + devicePixelRatio + "," + devicePixelRatio + ")");
    }
    if (mww != w || mhh != h) {
      mww = w;
      mhh = h;
      mc.width = mww;
      mc.height = mhh;
      mwwp50 = mww + 50;
      mhhp50 = mhh + 50;
      mwwp150 = mww + 150;
      mhhp150 = mhh + 150;
      mww2 = mww / 2;
      mhh2 = mhh / 2;
      rdgbg();
    }
    csc = Math.min(ww / mww, hh / mhh);
    trf(mc, "scale(" + csc + "," + csc + ")");
    mc.style.left = Math.floor(ww / 2 - mww / 2) + "px";
    mc.style.top = Math.floor(hh / 2 - mhh / 2) + "px";
  }
  nbg.style.width = ww + "px";
  nbg.style.height = hh + "px";
  redraw();
}
window.onresize = function() {
  resize();
};
i = ois.length - 1;
for (; 0 <= i; i--) {
  ois[i].ii.src = ois[i].src;
}
if (0 == wic) {
  startAnimation();
}
window.onmousemove = function(e) {
  if (e = e || window.event) {
    if ("undefined" != typeof e.clientX) {
      xm = e.clientX - ww / 2;
      ym = e.clientY - hh / 2;
    }
  }
};

function setAcceleration(recurring) {
  if (null != snake) {
    snake.md = 1 == recurring;
    if (5 <= protocol_version) {
      var buf = new Uint8Array(1);
      buf[0] = 1 == recurring ? 253 : 254;
    }
    else {
      buf = new Uint8Array(2);
      buf[0] = 109;
      buf[1] = recurring;
    }
    ws.send(buf);
  }
}
window.oncontextmenu = function(event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
};
window.ontouchmove = function(e) {
  dmutm = Date.now() + 1500;
  if (null != snake) {
    if (e = e || window.event) {
      e = e.touches[0];
      if ("undefined" != typeof e.clientX) {
        xm = e.clientX - ww / 2;
        ym = e.clientY - hh / 2;
      }
      else {
        xm = e.pageX - ww / 2;
        ym = e.pageY - hh / 2;
      }
    }
  }
};
var dmutm = 0;
var ltchx = -1;
var ltchy = -1;
var ltchmtm = -1;
window.ontouchstart = function(e) {
  dmutm = Date.now() + 1500;
  if (null != snake) {
    if (e = e || window.event) {
      var val1;
      var t1;
      t1 = e.touches[0];
      if ("undefined" != typeof t1.clientX) {
        val1 = t1.clientX - ww / 2;
        t1 = t1.clientY - hh / 2;
      }
      else {
        val1 = t1.pageX - ww / 2;
        t1 = t1.pageY - hh / 2;
      }
      var f = Date.now();
      if (24 > Math.abs(val1 - ltchx)) {
        if (24 > Math.abs(t1 - ltchy)) {
          if (400 > f - ltchmtm) {
            setAcceleration(1);
          }
        }
      }
      ltchx = val1;
      ltchy = t1;
      ltchmtm = f;
      xm = val1;
      ym = t1;
    }
    e.preventDefault();
  }
};
window.onmousedown = function(_e) {
  if (0 == dmutm || Date.now() > dmutm) {
    dmutm = 0;
    if (null != snake) {
      window.onmousemove(_e);
      setAcceleration(1);
      _e.preventDefault();
    }
  }
};
window.ontouchend = function() {
  setAcceleration(0);
};

function omu(dataAndEvents) {
  setAcceleration(0);
}
window.addEventListener("mouseup", omu);
var mscps = 0;
var fmlts = [];
var fpsls = [];
var etm = 0;
var ws = null;
var tcsecs = 0;
var trdps = 0;
var rdps = 0;
var rfps = 0;
var rnps = 0;
var rsps = 0;
var reps = 0;
var rdpspc = [];
var anguc = 0;
var angnuc = 0;
var wangnuc = 0;
var lrd_mtm = Date.now();
var locu_mtm = 0;
if (testing) {
  i = 0;
  for (; 256 > i; i++) {
    rdpspc[i] = -1;
  }
}
var pfs = [];
var pft = 0;
var pf1 = 0;
var pf2 = 0;
var rpf1;
var rpf2;
var pf_nap = 0;
var pf_ep = 0;
var rpft = 0;
var pf;
i = 0;
for (; 100 > i; i++) {
  pfs.push(0);
}
var pf_add = 0;
var pf_new_add = 0;
var pf_remove = 0;
var tpfa = new Float32Array(4E4);
i = 0;
for (; i < tpfa.length; i++) {
  tpfa[i] = 32 * Math.random();
}
var pfd;
if (testing) {
  pfd = document.createElement("div");
  pfd.style.position = "fixed";
  pfd.style.left = "4px";
  pfd.style.bottom = "69px";
  pfd.style.width = "170px";
  pfd.style.height = "364px";
  pfd.style.background = "rgba(0, 0, 0, .8)";
  pfd.style.color = "#80FF80";
  pfd.style.fontFamily = "Verdana";
  pfd.style.zIndex = 999999;
  pfd.style.fontSize = "11px";
  pfd.style.padding = "10px";
  pfd.style.borderRadius = "30px";
  pfd.textContent = "ayy lmao";
  document.body.appendChild(pfd);
}

function resetGame() {
  if (ws) {
    ws.close();
    ws = null;
  }
  snake = null;
  want_close_socket = false;
  snakes = [];
  foods = [];
  foods_c = 0;
  preys = [];
  sectors = [];
  os = {};
  rank = 0;
  best_rank = 999999999;
  biggest_snake_count = snake_count = 0;
  lagging = wfpr = playing = connected = false;
  j = vfc - 1;
  for (; 0 <= j; j--) {
    fvxs[j] = 0;
    fvys[j] = 0;
  }
  fvy = fvx = fvtg = 0;
  lag_mult = 1;
  cptm = 0;
  gsc = sgsc;
}
var protocol_version = 2;
var connecting = false;
var start_connect_mtm;
var play_btn_click_mtm = -1;
var waiting_for_sos = false;
var sos_ready_after_mtm = -1;

function connect() {
  if (0 == sos.length) {
    if (!waiting_for_sos) {
      waiting_for_sos = true;
      sos_ready_after_mtm = -1;
    }
  }
  else {
    waiting_for_sos = false;
    sos_ready_after_mtm = -1;
    resetGame();
    connecting = true;
    start_connect_mtm = Date.now();
    if (!forcing) {
      var axis = 0;
      for (; axis < sos.length; axis++) {
        sos[axis].ptm = 9999999;
      }
      axis = 0;
      for (; axis < sis.length; axis++) {
        var target = sis[axis];
        if (0 < target.ptms.length) {
          var mid = 0;
          var i = target.ptms.length - 1;
          for (; 0 <= i; i--) {
            mid += target.ptms[i];
          }
          mid /= target.ptms.length;
          i = sos.length - 1;
          for (; 0 <= i; i--) {
            if (sos[i].ip == target.ip) {
              sos[i].ptm = mid;
            }
          }
        }
      }
      if ("undefined" != typeof rmsos) {
        axis = 0;
        for (; axis < rmsos.length; axis++) {
          target = "." + rmsos[axis].a[0] + "." + rmsos[axis].a[1] + "." + rmsos[axis].a[2];
          mid = rmsos[axis].a[3];
          i = sos.length - 1;
          for (; 0 <= i; i--) {
            if (0 <= sos[i].ip.indexOf(target)) {
              if (sos[i].po == mid) {
                sos.splice(i, 1);
              }
            }
          }
        }
      }
      sos.sort(function(o, workout) {
        return parseFloat(o.po) - parseFloat(workout.po);
      });
      bso = sos[Math.floor(Math.random() * sos.length)];
      axis = sos.length - 1;
      for (; 0 <= axis; axis--) {
        if (!sos[axis].tainted) {
          if (sos[axis].ptm <= bso.ptm) {
            if (30 < sos[axis].ac) {
              bso = sos[axis];
            }
          }
        }
      }
    }
    ws = new WebSocket("ws://" + bso.ip + ":" + bso.po + "/slither");
    ws.binaryType = "arraybuffer";
    window.ws = ws;
    ws.onmessage = function(a) {
      if (ws == this && (a = new Uint8Array(a.data), rdps += a.length, 2 <= a.length)) {
        lptm = cptm;
        cptm = Date.now();
        var j = a[0] << 8 | a[1];
        var x = cptm - lptm;
        if (0 == lptm) {
          x = 0;
        }
        etm += x - j;
        if (testing) {
          rdpspc[a[2]] += a.length;
        }
        var v = String.fromCharCode(a[2]);
        j = 3;
        var data = a.length;
        x = a.length - 2;
        var s = a.length - 3;
        if ("a" == v) {
          connecting = false;
          playing = connected = true;
          play_btn_click_mtm = -1;
          grd = a[j] << 16 | a[j + 1] << 8 | a[j + 2];
          j += 3;
          x = a[j] << 8 | a[j + 1];
          j += 2;
          sector_size = a[j] << 8 | a[j + 1];
          j += 2;
          sector_count_along_edge = a[j] << 8 | a[j + 1];
          j += 2;
          spangdv = a[j] / 10;
          j++;
          nsp1 = (a[j] << 8 | a[j + 1]) / 100;
          j += 2;
          nsp2 = (a[j] << 8 | a[j + 1]) / 100;
          j += 2;
          nsp3 = (a[j] << 8 | a[j + 1]) / 100;
          j += 2;
          mamu = (a[j] << 8 | a[j + 1]) / 1E3;
          j += 2;
          mamu2 = (a[j] << 8 | a[j + 1]) / 1E3;
          j += 2;
          cst = (a[j] << 8 | a[j + 1]) / 1E3;
          j += 2;
          if (j < data) {
            protocol_version = a[j];
          }
          console.log("game radius = " + grd);
          setMscps(x);
          lbh.style.display = "inline";
          lbs.style.display = "inline";
          lbn.style.display = "inline";
          lbp.style.display = "inline";
          lbf.style.display = "inline";
          vcm.style.display = "inline";
          loch.style.display = "inline";
          startShowGame();
        }
        else {
          if ("e" == v || ("E" == v || ("3" == v || ("4" == v || "5" == v)))) {
            var d = a[j] << 8 | a[j + 1];
            j = j + 2;
            var min = data = -1;
            var tagName = -1;
            var type = -1;
            if (6 <= protocol_version) {
              if (6 == x) {
                data = "e" == v ? 1 : 2;
                min = 2 * a[j] * Math.PI / 256;
                j++;
                tagName = 2 * a[j] * Math.PI / 256;
                j++;
                type = a[j] / 18;
              }
              else {
                if (5 == x) {
                  if ("e" == v) {
                    min = 2 * a[j] * Math.PI / 256;
                    j++;
                    type = a[j] / 18;
                  }
                  else {
                    if ("E" == v) {
                      data = 1;
                      tagName = 2 * a[j] * Math.PI / 256;
                      j++;
                      type = a[j] / 18;
                    }
                    else {
                      if ("4" == v) {
                        data = 2;
                        tagName = 2 * a[j] * Math.PI / 256;
                        j++;
                        type = a[j] / 18;
                      }
                      else {
                        if ("3" == v) {
                          data = 1;
                          min = 2 * a[j] * Math.PI / 256;
                          j++;
                          tagName = 2 * a[j] * Math.PI / 256;
                        }
                        else {
                          if ("5" == v) {
                            data = 2;
                            min = 2 * a[j] * Math.PI / 256;
                            j++;
                            tagName = 2 * a[j] * Math.PI / 256;
                          }
                        }
                      }
                    }
                  }
                }
                else {
                  if (4 == x) {
                    if ("e" == v) {
                      min = 2 * a[j] * Math.PI / 256;
                    }
                    else {
                      if ("E" == v) {
                        data = 1;
                        tagName = 2 * a[j] * Math.PI / 256;
                      }
                      else {
                        if ("4" == v) {
                          data = 2;
                          tagName = 2 * a[j] * Math.PI / 256;
                        }
                        else {
                          if ("3" == v) {
                            type = a[j] / 18;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            else {
              if (3 <= protocol_version) {
                if ("3" != v) {
                  if (8 == x || (7 == x || (6 == x && "3" != v || 5 == x && "3" != v))) {
                    data = "e" == v ? 1 : 2;
                  }
                }
                if (8 == x || (7 == x || (5 == x && "3" == v || 6 == x && "3" == v))) {
                  min = 2 * (a[j] << 8 | a[j + 1]) * Math.PI / 65535;
                  j += 2;
                }
                if (8 == x || (7 == x || (5 == x && "3" != v || 6 == x && "3" != v))) {
                  tagName = 2 * (a[j] << 8 | a[j + 1]) * Math.PI / 65535;
                  j += 2;
                }
                if (8 == x || (6 == x || 4 == x)) {
                  type = a[j] / 18;
                }
              }
              else {
                if (11 == s || (8 == s || (9 == s || 6 == s))) {
                  data = a[j] - 48;
                  j++;
                }
                if (11 == s || (7 == s || (9 == s || 5 == s))) {
                  min = 2 * (a[j] << 16 | a[j + 1] << 8 | a[j + 2]) * Math.PI / 16777215;
                  j += 3;
                }
                if (11 == s || (8 == s || (9 == s || 6 == s))) {
                  tagName = 2 * (a[j] << 16 | a[j + 1] << 8 | a[j + 2]) * Math.PI / 16777215;
                  j += 3;
                }
                if (11 == s || (7 == s || (8 == s || 4 == s))) {
                  type = (a[j] << 8 | a[j + 1]) / 1E3;
                }
              }
            }
            var node = os["s" + d];
            if (node) {
              if (-1 != data) {
                node.dir = data;
              }
              anguc++;
              if (-1 != min) {
                if (node.ang == min) {
                  angnuc++;
                }
                a = (min - node.ang) % pi2;
                if (0 > a) {
                  a += pi2;
                }
                if (a > Math.PI) {
                  a -= pi2;
                }
                d = node.fapos;
                s = 0;
                for (; s < afc; s++) {
                  node.fas[d] -= a * afas[s];
                  d++;
                  if (d >= afc) {
                    d = 0;
                  }
                }
                node.fatg = afc;
                node.ang = min;
              }
              if (-1 != tagName) {
                if (node.wang == tagName) {
                  wangnuc++;
                }
                node.wang = tagName;
                if (node != snake) {
                  node.eang = tagName;
                }
              }
              if (-1 != type) {
                node.sp = type;
                node.spang = node.sp / spangdv;
                if (1 < node.spang) {
                  node.spang = 1;
                }
              }
            }
          }
          else {
            if ("h" == v) {
              d = a[j] << 8 | a[j + 1];
              j = j + 2;
              var y = (a[j] << 16 | a[j + 1] << 8 | a[j + 2]) / 16777215;
              if (node = os["s" + d]) {
                node.fam = y;
                snl(node);
              }
            }
            else {
              if ("r" == v) {
                if (d = a[j] << 8 | a[j + 1], j += 2, node = os["s" + d]) {
                  if (4 <= s) {
                    node.fam = (a[j] << 16 | a[j + 1] << 8 | a[j + 2]) / 16777215;
                  }
                  s = 0;
                  for (; s < node.pts.length; s++) {
                    if (!node.pts[s].dying) {
                      node.pts[s].dying = true;
                      node.sct--;
                      node.sc = Math.min(6, 1 + (node.sct - 2) / 106);
                      node.scang = 0.13 + 0.87 * Math.pow((7 - node.sc) / 6, 2);
                      node.ssp = nsp1 + nsp2 * node.sc;
                      node.fsp = node.ssp + 0.1;
                      node.wsep = 6 * node.sc;
                      a = nsep / gsc;
                      if (node.wsep < a) {
                        node.wsep = a;
                      }
                      break;
                    }
                  }
                  snl(node);
                }
              }
              else {
                if ("g" == v || ("n" == v || ("G" == v || "N" == v))) {
                  if (playing && (y = "n" == v || "N" == v, d = a[j] << 8 | a[j + 1], j += 2, node = os["s" + d])) {
                    if (y) {
                      node.sct++;
                    }
                    else {
                      s = 0;
                      for (; s < node.pts.length; s++) {
                        if (!node.pts[s].dying) {
                          node.pts[s].dying = true;
                          break;
                        }
                      }
                    }
                    var i = node.pts[node.pts.length - 1];
                    s = i;
                    data = false;
                    if (3 <= protocol_version) {
                      if ("g" == v || "n" == v) {
                        x = a[j] << 8 | a[j + 1];
                        j += 2;
                        id = a[j] << 8 | a[j + 1];
                        j += 2;
                      }
                      else {
                        x = s.xx + a[j] - 128;
                        j++;
                        id = s.yy + a[j] - 128;
                        j++;
                      }
                    }
                    else {
                      x = (a[j] << 16 | a[j + 1] << 8 | a[j + 2]) / 5;
                      j += 3;
                      id = (a[j] << 16 | a[j + 1] << 8 | a[j + 2]) / 5;
                      j += 3;
                    }
                    if (y) {
                      node.fam = (a[j] << 16 | a[j + 1] << 8 | a[j + 2]) / 16777215;
                    }
                    if (!(i = points_dp.get())) {
                      i = {
                        exs: [],
                        eys: [],
                        efs: [],
                        ems: []
                      };
                    }
                    i.eiu = 0;
                    i.xx = x;
                    i.yy = id;
                    i.fx = 0;
                    i.fy = 0;
                    i.da = 0;
                    i.ebx = i.xx - s.xx;
                    i.eby = i.yy - s.yy;
                    node.pts.push(i);
                    data = true;
                    if (node.iiv) {
                      a = node.xx + node.fx - i.xx;
                      j = node.yy + node.fy - i.yy;
                      i.fx += a;
                      i.fy += j;
                      i.exs[i.eiu] = a;
                      i.eys[i.eiu] = j;
                      i.efs[i.eiu] = 0;
                      i.ems[i.eiu] = 1;
                      i.eiu++;
                    }
                    d = node.pts.length - 3;
                    if (1 <= d) {
                      min = node.pts[d];
                      v = n = 0;
                      s = d - 1;
                      for (; 0 <= s; s--) {
                        d = node.pts[s];
                        n++;
                        a = d.xx;
                        j = d.yy;
                        if (4 >= n) {
                          v = cst * n / 4;
                        }
                        d.xx += (min.xx - d.xx) * v;
                        d.yy += (min.yy - d.yy) * v;
                        if (node.iiv) {
                          a -= d.xx;
                          j -= d.yy;
                          d.fx += a;
                          d.fy += j;
                          d.exs[d.eiu] = a;
                          d.eys[d.eiu] = j;
                          d.efs[d.eiu] = 0;
                          d.ems[d.eiu] = 2;
                          d.eiu++;
                        }
                        min = d;
                      }
                    }
                    node.sc = Math.min(6, 1 + (node.sct - 2) / 106);
                    node.scang = 0.13 + 0.87 * Math.pow((7 - node.sc) / 6, 2);
                    node.ssp = nsp1 + nsp2 * node.sc;
                    node.fsp = node.ssp + 0.1;
                    node.wsep = 6 * node.sc;
                    a = nsep / gsc;
                    if (node.wsep < a) {
                      node.wsep = a;
                    }
                    if (y) {
                      snl(node);
                    }
                    node.lnp = i;
                    if (node == snake) {
                      ovxx = snake.xx + snake.fx;
                      ovyy = snake.yy + snake.fy;
                    }
                    i = etm / 8 * node.sp / 4;
                    i *= lag_mult;
                    s = node.chl - 1;
                    node.chl = i / node.msl;
                    v = node.xx;
                    d = node.yy;
                    node.xx = x + Math.cos(node.ang) * i;
                    node.yy = id + Math.sin(node.ang) * i;
                    a = node.xx - v;
                    j = node.yy - d;
                    x = node.chl - s;
                    d = node.fpos;
                    s = 0;
                    for (; s < rfc; s++) {
                      node.fxs[d] -= a * rfas[s];
                      node.fys[d] -= j * rfas[s];
                      node.fchls[d] -= x * rfas[s];
                      d++;
                      if (d >= rfc) {
                        d = 0;
                      }
                    }
                    node.fx = node.fxs[node.fpos];
                    node.fy = node.fys[node.fpos];
                    node.fchl = node.fchls[node.fpos];
                    node.ftg = rfc;
                    if (data) {
                      node.ehl = 0;
                    }
                    if (node == snake) {
                      view_xx = snake.xx + snake.fx;
                      view_yy = snake.yy + snake.fy;
                      a = view_xx - ovxx;
                      j = view_yy - ovyy;
                      d = fvpos;
                      s = 0;
                      for (; s < vfc; s++) {
                        fvxs[d] -= a * vfas[s];
                        fvys[d] -= j * vfas[s];
                        d++;
                        if (d >= vfc) {
                          d = 0;
                        }
                      }
                      fvtg = vfc;
                    }
                  }
                }
                else {
                  if ("l" == v) {
                    if (playing) {
                      wumsts = true;
                      min = i = id = "";
                      type = tagName = 0;
                      if (-1 == lb_fr) {
                        if (-1 == dead_mtm) {
                          lb_fr = 0;
                        }
                      }
                      var number = a[j];
                      j++;
                      rank = a[j] << 8 | a[j + 1];
                      if (rank < best_rank) {
                        best_rank = rank;
                      }
                      j += 2;
                      snake_count = a[j] << 8 | a[j + 1];
                      if (snake_count > biggest_snake_count) {
                        biggest_snake_count = snake_count;
                      }
                      j += 2;
                      for (; j < data;) {
                        var tag = a[j] << 8 | a[j + 1];
                        j = j + 2;
                        y = (a[j] << 16 | a[j + 1] << 8 | a[j + 2]) / 16777215;
                        j = j + 3;
                        node = a[j] % 9;
                        j++;
                        x = a[j];
                        j++;
                        type++;
                        v = "";
                        s = 0;
                        for (; s < x; s++) {
                          d = a[j];
                          v += String.fromCharCode(d);
                          j++;
                        }
                        if (type != number) {
                          if (!gdnm(v)) {
                            v = "";
                          }
                        }
                        var index = "";
                        s = 0;
                        for (; s < x; s++) {
                          d = v.charCodeAt(s);
                          index = 38 == d ? index + "&amp;" : 60 == d ? index + "&lt;" : 62 == d ? index + "&gt;" : 32 == d ? index + "&nbsp;" : index + String.fromCharCode(d);
                        }
                        v = index;
                        tagName++;
                        score = Math.floor(150 * (fpsls[tag] + y / fmlts[tag] - 1) - 50) / 10;
                        d = type == number ? 1 : 0.7 * (0.3 + 0.7 * (1 - tagName / 10));
                        id += '<span style="opacity:' + d + "; color:" + per_color_imgs[node].cs + ';">' + score + "</span><BR>";
                        i += '<span style="opacity:' + d + "; color:" + per_color_imgs[node].cs + ";" + (type == number ? "font-weight:bold;" : "") + '">' + v + "</span><BR>";
                        min += '<span style="opacity:' + d + "; color:" + per_color_imgs[node].cs + ';">#' + tagName + "</span><BR>";
                      }
                      lbs.innerHTML = id;
                      lbn.innerHTML = i;
                      lbp.innerHTML = min;
                    }
                  }
                  else {
                    if ("v" == v) {
                      if (2 == a[j]) {
                        want_close_socket = true;
                        want_victory_message = false;
                        want_hide_victory = 1;
                        hvfr = 0;
                      }
                      else {
                        dead_mtm = Date.now();
                        play_btn.setEnabled(true);
                        x = Math.floor(150 * (fpsls[snake.sct] + snake.fam / fmlts[snake.sct] - 1) - 50) / 10;
                        twt.href = "http://twitter.com/intent/tweet?status=" + encodeURIComponent("I got a length of " + x + " in http://slither.io! Can you beat that? #slitherio");
                        id = "Your final length was";
                        if ("DE" == country) {
                          id = "Deine endgültige Länge war";
                        }
                        else {
                          if ("FR" == country) {
                            id = "Votre longueur finale était de";
                          }
                          else {
                            if ("BR" == country) {
                              id = "Seu comprimento final foi de";
                            }
                          }
                        }
                        data = "";
                        if (1E3 < x) {
                          data = "!";
                        }
                        lastscore.innerHTML = '<span style="opacity: .45;">' + id + " </span><b>" + x + "</b>" + data;
                        x = "Play Again";
                        if ("FR" == country) {
                          x = "Jouer";
                        }
                        else {
                          if ("BR" == country) {
                            x = "Joga";
                          }
                        }
                        play_btn.setText(String.fromCharCode(160) + x + String.fromCharCode(160));
                        if (1 == a[j]) {
                          nick_holder.style.display = "none";
                          playh.style.display = "none";
                          smh.style.display = "none";
                          victory_holder.style.display = "inline";
                          saveh.style.display = "block";
                          want_victory_focus = want_victory_message = true;
                          victory.disabled = false;
                          save_btn.setEnabled(true);
                        }
                        else {
                          want_close_socket = true;
                        }
                      }
                    }
                    else {
                      if ("w" == v) {
                        if (data = a[j], j++, x = a[j] << 8 | a[j + 1], j += 2, id = a[j] << 8 | a[j + 1], 1 == data) {
                          node = {};
                          node.xx = x;
                          node.yy = id;
                          sectors.push(node);
                        }
                        else {
                          i = cm1 = foods_c - 1;
                          for (; 0 <= i; i--) {
                            s = foods[i];
                            if (s.sx == x) {
                              if (s.sy == id) {
                                if (i == cm1) {
                                  foods[i] = null;
                                }
                                else {
                                  foods[i] = foods[cm1];
                                  foods[cm1] = null;
                                }
                                foods_c--;
                                cm1--;
                              }
                            }
                          }
                          i = sectors.length - 1;
                          for (; 0 <= i; i--) {
                            node = sectors[i];
                            if (node.xx == x) {
                              if (node.yy == id) {
                                sectors.splice(i, 1);
                              }
                            }
                          }
                        }
                      }
                      else {
                        if ("m" == v) {
                          tag = a[j] << 16 | a[j + 1] << 8 | a[j + 2];
                          j += 3;
                          y = (a[j] << 16 | a[j + 1] << 8 | a[j + 2]) / 16777215;
                          j += 3;
                          id = Math.floor(150 * (fpsls[tag] + y / fmlts[tag] - 1) - 50) / 10;
                          x = a[j];
                          j++;
                          s = "";
                          i = 0;
                          for (; i < x; i++) {
                            s += String.fromCharCode(a[j]);
                            j++;
                          }
                          x = "";
                          for (; j < data;) {
                            x += String.fromCharCode(a[j]);
                            j++;
                          }
                          s = s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
                          x = x.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
                          if (0 < id) {
                            a = "";
                            if (0 < x.length) {
                              a += "<span style='font-size:17px;'><b><i><span style='opacity: .5;'>&quot;</span>" + x + "<span style='opacity: .5;'>&quot;</span></i></b></span><BR><div style='height: 5px;'></div>";
                            }
                            if (0 < s.length) {
                              a = 0 < x.length ? a + ("<i><span style='opacity: .5;'>- </span><span style='opacity: .75;'><b>" + s + "</b></span><span style='opacity: .5;'>, today's longest</span></i>") : "<i><span style='opacity: .5;'>Today's longest was </span><span style='opacity: .75;'><b>" + s + "</b></span></i>";
                              a += "<br><i><span style='opacity: .5;'>with a length of </span><span style='opacity: .65;'><b>" + id + "</b></span></i>";
                            }
                            else {
                              a = 0 < x.length ? a + "<i><span style='opacity: .5;'>- </span><span style='opacity: .5;'>today's longest</span></i>" + ("<br><i><span style='opacity: .5;'>with a length of </span><span style='opacity: .65;'><b>" + id + "</b></span></i>") : a + ("<i><span style='opacity: .5;'>Today's longest: </span><span style='opacity: .75;'><b>" + id + "</b></span></i>");
                            }
                            vcm.innerHTML = a;
                          }
                        }
                        else {
                          if ("p" == v) {
                            wfpr = false;
                            if (lagging) {
                              etm *= lag_mult;
                              lagging = false;
                            }
                          }
                          else {
                            if ("u" == v) {
                              s = asmc.getContext("2d");
                              s.clearRect(0, 0, 80, 80);
                              s.fillStyle = "#FFFFFF";
                              var id = x = 0;
                              for (; j < data && !(80 <= id);) {
                                if (d = a[j++], 128 <= d) {
                                  d -= 128;
                                  i = 0;
                                  for (; i < d && !(x++, 80 <= x && (x = 0, id++, 80 <= id)); i++) {}
                                }
                                else {
                                  i = 0;
                                  for (; 7 > i && !(0 < (d & u_m[i]) && s.fillRect(x, id, 1, 1), x++, 80 <= x && (x = 0, id++, 80 <= id)); i++) {}
                                }
                              }
                            }
                            else {
                              if ("s" == v) {
                                if (playing) {
                                  if (d = a[j] << 8 | a[j + 1], j += 2, 6 < s) {
                                    min = 2 * (a[j] << 16 | a[j + 1] << 8 | a[j + 2]) * Math.PI / 16777215;
                                    j += 3;
                                    j++;
                                    tagName = 2 * (a[j] << 16 | a[j + 1] << 8 | a[j + 2]) * Math.PI / 16777215;
                                    j += 3;
                                    type = (a[j] << 8 | a[j + 1]) / 1E3;
                                    j += 2;
                                    y = (a[j] << 16 | a[j + 1] << 8 | a[j + 2]) / 16777215;
                                    j += 3;
                                    node = a[j];
                                    j++;
                                    number = [];
                                    tag = (a[j] << 16 | a[j + 1] << 8 | a[j + 2]) / 5;
                                    j += 3;
                                    index = (a[j] << 16 | a[j + 1] << 8 | a[j + 2]) / 5;
                                    j += 3;
                                    x = a[j];
                                    j++;
                                    v = "";
                                    s = 0;
                                    for (; s < x; s++) {
                                      v += String.fromCharCode(a[j]);
                                      j++;
                                    }
                                    var ret = s = id = x = 0;
                                    var O = false;
                                    for (; j < data;) {
                                      s = x;
                                      ret = id;
                                      if (O) {
                                        x += (a[j] - 127) / 2;
                                        j++;
                                        id += (a[j] - 127) / 2;
                                        j++;
                                      }
                                      else {
                                        x = (a[j] << 16 | a[j + 1] << 8 | a[j + 2]) / 5;
                                        j += 3;
                                        id = (a[j] << 16 | a[j + 1] << 8 | a[j + 2]) / 5;
                                        j += 3;
                                        s = x;
                                        ret = id;
                                        O = true;
                                      }
                                      if (!(i = points_dp.get())) {
                                        i = {
                                          exs: [],
                                          eys: [],
                                          efs: [],
                                          ems: []
                                        };
                                      }
                                      i.eiu = 0;
                                      i.xx = x;
                                      i.yy = id;
                                      i.fx = 0;
                                      i.fy = 0;
                                      i.da = 0;
                                      i.ebx = x - s;
                                      i.eby = id - ret;
                                      number.push(i);
                                    }
                                    node = newSnake(d, tag, index, node, min, number);
                                    if (null == snake) {
                                      view_xx = x;
                                      view_yy = id;
                                      snake = node;
                                      node.nk = v;
                                    }
                                    else {
                                      node.nk = v;
                                      if (!gdnm(v)) {
                                        node.nk = "";
                                      }
                                    }
                                    node.eang = node.wang = tagName;
                                    node.sp = type;
                                    node.spang = node.sp / spangdv;
                                    if (1 < node.spang) {
                                      node.spang = 1;
                                    }
                                    node.fam = y;
                                    node.sc = Math.min(6, 1 + (node.sct - 2) / 106);
                                    node.scang = 0.13 + 0.87 * Math.pow((7 - node.sc) / 6, 2);
                                    node.ssp = nsp1 + nsp2 * node.sc;
                                    node.fsp = node.ssp + 0.1;
                                    node.wsep = 6 * node.sc;
                                    a = nsep / gsc;
                                    if (node.wsep < a) {
                                      node.wsep = a;
                                    }
                                    node.sep = node.wsep;
                                    snl(node);
                                  }
                                  else {
                                    a = 1 == a[j];
                                    i = snakes.length - 1;
                                    for (; 0 <= i; i--) {
                                      if (snakes[i].id == d) {
                                        snakes[i].id = -1234;
                                        if (a) {
                                          snakes[i].dead = true;
                                          snakes[i].dead_amt = 0;
                                          snakes[i].edir = 0;
                                        }
                                        else {
                                          snakes.splice(i, 1);
                                        }
                                        delete os["s" + d];
                                        break;
                                      }
                                    }
                                  }
                                }
                              }
                              else {
                                if ("F" == v) {
                                  if (4 <= protocol_version) {
                                    v = false;
                                    for (; j < data;) {
                                      node = a[j];
                                      j++;
                                      x = a[j] << 8 | a[j + 1];
                                      j += 2;
                                      id = a[j] << 8 | a[j + 1];
                                      j += 2;
                                      s = a[j] / 5;
                                      j++;
                                      d = id * grd * 3 + x;
                                      s = newFood(d, x, id, s, true, node);
                                      if (!v) {
                                        v = true;
                                        i = Math.floor(x / sector_size);
                                        y = Math.floor(id / sector_size);
                                      }
                                      s.sx = i;
                                      s.sy = y;
                                    }
                                    node = {};
                                    node.xx = i;
                                    node.yy = y;
                                    sectors.push(node);
                                  }
                                  else {
                                    i = a[j] << 8 | a[j + 1];
                                    j += 2;
                                    y = a[j] << 8 | a[j + 1];
                                    j += 2;
                                    node = {};
                                    node.xx = i;
                                    node.yy = y;
                                    sectors.push(node);
                                    for (; j < data;) {
                                      d = a[j] << 16 | a[j + 1] << 8 | a[j + 2];
                                      j += 3;
                                      node = a[j];
                                      j++;
                                      x = sector_size * (i + a[j] / 255);
                                      j++;
                                      id = sector_size * (y + a[j] / 255);
                                      j++;
                                      s = a[j] / 5;
                                      j++;
                                      s = newFood(d, x, id, s, true, node);
                                      s.sx = i;
                                      s.sy = y;
                                    }
                                  }
                                }
                                else {
                                  if ("b" == v || "f" == v) {
                                    if (4 <= protocol_version) {
                                      node = a[j];
                                      j++;
                                      if (4 < s) {
                                        x = a[j] << 8 | a[j + 1];
                                        j += 2;
                                        id = a[j] << 8 | a[j + 1];
                                        d = id * grd * 3 + x;
                                        s = a[j + 2] / 5;
                                        s = newFood(d, x, id, s, "b" == v, node);
                                        s.sx = Math.floor(x / sector_size);
                                        s.sy = Math.floor(id / sector_size);
                                      }
                                    }
                                    else {
                                      d = a[j] << 16 | a[j + 1] << 8 | a[j + 2];
                                      j += 3;
                                      if (4 < s) {
                                        node = a[j];
                                        j++;
                                        i = a[j] << 8 | a[j + 1];
                                        j += 2;
                                        y = a[j] << 8 | a[j + 1];
                                        j += 2;
                                        x = sector_size * (i + a[j] / 255);
                                        j++;
                                        id = sector_size * (y + a[j] / 255);
                                        j++;
                                        s = a[j] / 5;
                                        s = newFood(d, x, id, s, "b" == v, node);
                                        s.sx = i;
                                        s.sy = y;
                                      }
                                    }
                                  }
                                  else {
                                    if ("c" == v) {
                                      if (4 <= protocol_version) {
                                        x = a[j] << 8 | a[j + 1];
                                        j += 2;
                                        id = a[j] << 8 | a[j + 1];
                                        j += 2;
                                        d = id * grd * 3 + x;
                                      }
                                      else {
                                        d = a[j] << 16 | a[j + 1] << 8 | a[j + 2];
                                        j += 3;
                                      }
                                      i = cm1 = foods_c - 1;
                                      for (; 0 <= i; i--) {
                                        if (s = foods[i], s.id == d) {
                                          s.eaten = true;
                                          if (j + 2 <= data) {
                                            a = a[j] << 8 | a[j + 1];
                                            s.eaten_by = os["s" + a];
                                            s.eaten_fr = 0;
                                          }
                                          else {
                                            if (i == cm1) {
                                              foods[i] = null;
                                            }
                                            else {
                                              foods[i] = foods[cm1];
                                              foods[cm1] = null;
                                            }
                                            foods_c--;
                                            cm1--;
                                          }
                                          d = -1;
                                          break;
                                        }
                                      }
                                      if (-1 != d) {
                                        console.log("wtf");
                                      }
                                    }
                                    else {
                                      if ("j" == v) {
                                        d = a[j] << 8 | a[j + 1];
                                        j += 2;
                                        x = 1 + 3 * (a[j] << 8 | a[j + 1]);
                                        j += 2;
                                        id = 1 + 3 * (a[j] << 8 | a[j + 1]);
                                        j += 2;
                                        data = null;
                                        i = preys.length - 1;
                                        for (; 0 <= i; i--) {
                                          if (preys[i].id == d) {
                                            data = preys[i];
                                            break;
                                          }
                                        }
                                        if (data) {
                                          i = etm / 8 * data.sp / 4;
                                          i *= lag_mult;
                                          v = data.xx;
                                          d = data.yy;
                                          if (15 == s) {
                                            data.dir = a[j] - 48;
                                            j++;
                                            data.ang = 2 * (a[j] << 16 | a[j + 1] << 8 | a[j + 2]) * Math.PI / 16777215;
                                            j += 3;
                                            data.wang = 2 * (a[j] << 16 | a[j + 1] << 8 | a[j + 2]) * Math.PI / 16777215;
                                            j += 3;
                                            data.sp = (a[j] << 8 | a[j + 1]) / 1E3;
                                          }
                                          else {
                                            if (11 == s) {
                                              data.ang = 2 * (a[j] << 16 | a[j + 1] << 8 | a[j + 2]) * Math.PI / 16777215;
                                              j += 3;
                                              data.sp = (a[j] << 8 | a[j + 1]) / 1E3;
                                            }
                                            else {
                                              if (12 == s) {
                                                data.dir = a[j] - 48;
                                                j++;
                                                data.wang = 2 * (a[j] << 16 | a[j + 1] << 8 | a[j + 2]) * Math.PI / 16777215;
                                                j += 3;
                                                data.sp = (a[j] << 8 | a[j + 1]) / 1E3;
                                              }
                                              else {
                                                if (13 == s) {
                                                  data.dir = a[j] - 48;
                                                  j++;
                                                  data.ang = 2 * (a[j] << 16 | a[j + 1] << 8 | a[j + 2]) * Math.PI / 16777215;
                                                  j += 3;
                                                  data.wang = 2 * (a[j] << 16 | a[j + 1] << 8 | a[j + 2]) * Math.PI / 16777215;
                                                }
                                                else {
                                                  if (9 == s) {
                                                    data.ang = 2 * (a[j] << 16 | a[j + 1] << 8 | a[j + 2]) * Math.PI / 16777215;
                                                  }
                                                  else {
                                                    if (10 == s) {
                                                      data.dir = a[j] - 48;
                                                      j++;
                                                      data.wang = 2 * (a[j] << 16 | a[j + 1] << 8 | a[j + 2]) * Math.PI / 16777215;
                                                    }
                                                    else {
                                                      if (8 == s) {
                                                        data.sp = (a[j] << 8 | a[j + 1]) / 1E3;
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          data.xx = x + Math.cos(data.ang) * i;
                                          data.yy = id + Math.sin(data.ang) * i;
                                          a = data.xx - v;
                                          j = data.yy - d;
                                          d = data.fpos;
                                          s = 0;
                                          for (; s < rfc; s++) {
                                            data.fxs[d] -= a * rfas[s];
                                            data.fys[d] -= j * rfas[s];
                                            d++;
                                            if (d >= rfc) {
                                              d = 0;
                                            }
                                          }
                                          data.fx = data.fxs[data.fpos];
                                          data.fy = data.fys[data.fpos];
                                          data.ftg = rfc;
                                        }
                                      }
                                      else {
                                        if ("y" == v) {
                                          if (d = a[j] << 8 | a[j + 1], j += 2, 2 == s) {
                                            i = preys.length - 1;
                                            for (; 0 <= i; i--) {
                                              if (data = preys[i], data.id == d) {
                                                preys.splice(i, 1);
                                                break;
                                              }
                                            }
                                          }
                                          else {
                                            if (4 == s) {
                                              a = a[j] << 8 | a[j + 1];
                                              i = preys.length - 1;
                                              for (; 0 <= i; i--) {
                                                if (data = preys[i], data.id == d) {
                                                  data.eaten = true;
                                                  data.eaten_by = os["s" + a];
                                                  if (data.eaten_by) {
                                                    data.eaten_fr = 0;
                                                  }
                                                  else {
                                                    preys.splice(i, 1);
                                                  }
                                                  break;
                                                }
                                              }
                                            }
                                            else {
                                              node = a[j];
                                              j++;
                                              x = (a[j] << 16 | a[j + 1] << 8 | a[j + 2]) / 5;
                                              j += 3;
                                              id = (a[j] << 16 | a[j + 1] << 8 | a[j + 2]) / 5;
                                              j += 3;
                                              s = a[j] / 5;
                                              j++;
                                              data = a[j] - 48;
                                              j++;
                                              tagName = 2 * (a[j] << 16 | a[j + 1] << 8 | a[j + 2]) * Math.PI / 16777215;
                                              j += 3;
                                              min = 2 * (a[j] << 16 | a[j + 1] << 8 | a[j + 2]) * Math.PI / 16777215;
                                              j += 3;
                                              type = (a[j] << 8 | a[j + 1]) / 1E3;
                                              newPrey(d, x, id, s, node, data, tagName, min, type);
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
    };
    ws.onerror = function(er) {};
    ws.onclose = function(data) {
      if (ws == this) {
        playing = connected = false;
      }
    };
    ws.onopen = function(a) {
      if (ws == this) {
        a = asciize(nick.value);
        if (24 < a.length) {
          a = a.substr(0, 24);
        }
        var i = Math.floor(9 * Math.random());
        try {
          var v = localStorage.snakercv;
          if (v == "" + Number(v)) {
            i = Number(v);
          }
        }
        catch (f) {}
        v = new Uint8Array(3 + a.length);
        v[0] = 115;
        v[1] = 5;
        v[2] = i;
        i = 0;
        for (; i < a.length; i++) {
          v[i + 3] = a.charCodeAt(i);
        }
        ws.send(v);
        high_quality = true;
        gla = 1;
        wdfg = 0;
        qsm = 1;
        if (0 == want_quality) {
          high_quality = false;
          gla = 0;
          qsm = 1.7;
        }
        if (1 == render_mode) {
          high_quality = false;
          gla = 0;
        }
        lpstm = Date.now();
      }
    };
  }
}

function asciize(a) {
  var i;
  var ln;
  var chr1;
  ln = a.length;
  var output = false;
  i = 0;
  for (; i < ln; i++) {
    if (chr1 = a.charCodeAt(i), 32 > chr1 || 127 < chr1) {
      output = true;
      break;
    }
  }
  if (output) {
    output = "";
    i = 0;
    for (; i < ln; i++) {
      chr1 = a.charCodeAt(i);
      output = 32 > chr1 || 127 < chr1 ? output + " " : output + String.fromCharCode(chr1);
    }
    return output;
  }
  return a;
}
var smh = document.getElementById("smh");
var cstx = document.getElementById("cstx");
cstx.src = "FR" == country ? "/s/customskins-fr.png" : "BR" == country ? "/s/customskins-br.png" : "/s/customskins2.png";
try {
  if ("1" != localStorage.edttsg) {
    cstx.style.display = "inline";
  }
}
catch (b$$53) {}
var fb = document.getElementById("fb");
fb.href = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent("http://slither.io");
fb.onclick = function() {
  localStorage.edttsg = "1";
};
var fbh = document.getElementById("fbh");
var twt = document.getElementById("twt");
twt.onclick = function() {
  localStorage.edttsg = "1";
};
twt.href = "http://twitter.com/intent/tweet?status=" + encodeURIComponent("Come and play http://slither.io #slitherio");
var twth = document.getElementById("twth");
var csk = document.getElementById("csk");
var cskh = document.getElementById("cskh");
var want_quality = 1;
var grq = document.getElementById("grq");
var grqh = document.getElementById("grqh");
var phqi = document.createElement("img");
var grqi = document.getElementById("grqi");
try {
  if ("0" == localStorage.qual) {
    grqi.src = "/s/lowquality.png";
    want_quality = 0;
  }
  else {
    phqi.src = "/s/lowquality.png";
    want_quality = 1;
  }
}
catch (b$$54) {}
grq.onclick = function() {
  try {
    if ("0" == localStorage.qual) {
      localStorage.qual = "1";
      grqi.src = "/s/highquality.png";
      want_quality = 1;
    }
    else {
      localStorage.qual = "0";
      grqi.src = "/s/lowquality.png";
      want_quality = 0;
    }
  }
  catch (b) {}
  return false;
};
var plq = document.getElementById("plq");
var clq = document.getElementById("clq");
try {
  if ("1" == localStorage.edttsg) {
    cskh.style.display = "inline";
  }
}
catch (b$$56) {}
var psk = document.getElementById("psk");
var pskh = document.getElementById("pskh");
var nsk = document.getElementById("nsk");
var nskh = document.getElementById("nskh");
var choosing_skin = false;
psk.onclick = function() {
  if (playing && null != snake) {
    var expectationResult = snake.rcv;
    expectationResult--;
    if (0 > expectationResult) {
      expectationResult = max_skin_cv;
    }
    setSkin(snake, expectationResult);
  }
  return false;
};
nsk.onclick = function() {
  if (playing && null != snake) {
    var expectationResult = snake.rcv;
    expectationResult++;
    if (expectationResult > max_skin_cv) {
      expectationResult = 0;
    }
    setSkin(snake, expectationResult);
  }
  return false;
};
csk.onclick = function() {
  if (!playing && -1 == dead_mtm) {
    resetGame();
    choosing_skin = true;
    pskh.style.opacity = 0;
    nskh.style.opacity = 0;
    skodiv.style.opacity = 0;
    pskh.style.display = "inline";
    nskh.style.display = "inline";
    skodiv.style.display = "inline";
    skodiv.style.left = Math.round(ww / 2 - skodiv.offsetWidth / 2) + "px";
    nick.disabled = true;
    if (0 == mscps) {
      setMscps(300);
    }
    gsc = sgsc;
    var data = [];
    var h = 22;
    for (; 1 <= h; h--) {
      data.push({
        xx: grd / 2 - 10 * h,
        yy: grd / 2,
        fx: 0,
        fy: 0,
        exs: [],
        eys: [],
        efs: [],
        ems: [],
        eiu: 0,
        fpos: 0,
        da: 0,
        ebx: 10,
        eby: 0
      });
    }
    h = 0;
    try {
      var r = localStorage.snakercv;
      if (r == "" + Number(r)) {
        h = Number(r);
      }
    }
    catch (f) {}
    data = newSnake(1, grd / 2, grd / 2, h, 0, data);
    view_xx = grd / 2 - 105;
    view_yy = grd / 2;
    snake = data;
    data.nk = "";
    data.eang = data.wang = data.ang;
    data.sp = 4.8;
    data.spang = data.sp / spangdv;
    if (1 < data.spang) {
      data.spang = 1;
    }
    data.sc = 1;
    data.scang = 1;
    data.ssp = nsp1 + nsp2 * data.sc;
    data.fsp = data.ssp + 0.1;
    data.wsep = 6 * data.sc;
    r = nsep / gsc;
    if (data.wsep < r) {
      data.wsep = r;
    }
    data.sep = data.wsep;
    snl(data);
    data.alive_amt = 1;
    data.rex = 1.66;
    ws = {
      send: function(s) {},
      close: function() {}
    };
    high_quality = playing = connected = true;
    gla = 1;
    wdfg = 0;
    qsm = 1;
    startShowGame();
    lbh.style.display = "none";
    lbs.style.display = "none";
    lbn.style.display = "none";
    lbp.style.display = "none";
    lbf.style.display = "none";
    vcm.style.display = "none";
    loch.style.display = "none";
  }
  return false;
};
nick.oninput = function() {
  var old = this.value;
  var val = asciize(old);
  if (24 < val.length) {
    val = val.substr(0, 24);
  }
  if (old != val) {
    this.value = val;
  }
};
victory.oninput = function() {
  var old = this.value;
  var val = asciize(old);
  if (140 < val.length) {
    val = val.substr(0, 140);
  }
  if (old != val) {
    this.value = val;
  }
};
nick.focus();
var lmch = document.createElement("div");
lmch.style.width = "450px";
lmch.style.height = "115px";
var lmc2 = document.createElement("canvas");
var lmc = document.createElement("canvas");
var lgsc = 1;
var lw = 900;
var lh = 270;
lmc.width = lmc2.width = lw;
lmc.height = lmc2.height = lh;
var lctx = lmc.getContext("2d");
var lctx2 = lmc2.getContext("2d");
trf(lmc2, "scale(.5, .5)");
trfo(lmc2, "0% 0%");
lmch.appendChild(lmc2);
logo.appendChild(lmch);
var lts = [];
lts.push({
  pts: [107, 107, 80, 83, 53, 98, 31, 115, 55, 131, 98, 147, 101, 162, 101, 190, 66, 188, 49, 187, 34, 173],
  kc: 22,
  ws: 4,
  wr: 0.025,
  qm: 0.025,
  sp: 0.06,
  sz: 11
}, {
  pts: [150, 30, 150, 107, 150, 184],
  kc: 66,
  ws: 4,
  wr: 0.05,
  qm: 0.025,
  sp: 0.06,
  sz: 11
}, {
  pts: [207, 96, 207, 140, 207, 184],
  kc: 46,
  ws: 4,
  wr: 0.03,
  qm: 0.035,
  sp: 0.06,
  sz: 11
}, {
  pts: [207, 47, 207, 48.5, 207, 50],
  kc: 11,
  ws: 2,
  wr: 0.06,
  qm: 0.05,
  sp: 0.06,
  sz: 15,
  r: 0.5
}, {
  pts: [267, 65, 267, 114.5, 267, 164, 267, 194, 297, 186],
  kc: 66,
  ws: 6,
  wr: -0.025,
  qm: -0.0125,
  sp: 0.06,
  sz: 11,
  r: 1.5
}, {
  pts: [243, 94, 268, 94, 293, 94],
  kc: 66,
  ws: 4,
  wr: 0.015,
  qm: 0.025,
  sp: 0.06,
  sz: 9,
  r: 1.2
}, {
  pts: [338, 30, 338, 68.5, 338, 107, 338, 145.5, 338, 184, 338, 164, 338, 144, 338, 104, 378, 104, 418, 104, 418, 144, 418, 164, 418, 184],
  kc: 46,
  ws: 4,
  wr: 0.005,
  qm: 0.02,
  sp: 0.06,
  sz: 11,
  r: 2.1
}, {
  pts: [535, 175, 500, 201, 472, 175, 442, 138, 472, 105, 502, 84, 532, 105, 546, 118, 544, 139, 504, 139, 464, 139],
  kc: 35,
  ws: 6,
  wr: -0.013,
  qm: -0.025,
  sp: 0.06,
  sz: 11,
  r: 1.3
}, {
  pts: [591, 96, 591, 140, 591, 184, 591, 155, 591, 126, 613, 82, 652, 109],
  kc: 38,
  ws: 4,
  wr: 0.01,
  qm: -0.035,
  sp: 0.06,
  sz: 11
}, {
  pts: [663, 177, 663, 178.5, 663, 180],
  kc: 11,
  ws: 2,
  wr: 0.06,
  qm: 0.05,
  sp: 0.06,
  sz: 15
}, {
  pts: [717, 96, 717, 140, 717, 184],
  kc: 33,
  ws: 4,
  wr: 0.06,
  qm: 0.05,
  sp: 0.06,
  sz: 11
}, {
  pts: [717, 47, 717, 48.5, 717, 50],
  kc: 11,
  ws: 2,
  wr: 0.06,
  qm: 0.05,
  sp: 0.06,
  sz: 15
}, {
  pts: [814, 186, 860, 188, 858, 136, 854, 96, 814, 96, 770, 96, 770, 136, 770, 186, 814, 186],
  kc: 43,
  ws: 4,
  wr: 0,
  qm: 0.0274,
  sp: 0.073,
  sz: 11,
  r: 1.5
});
i = 0;
for (; i < lts.length; i++) {
  lts[i].mwig = 5;
}
var lga = 0;
var lgss = 0;
var ncka = 0;
var mwig = 4;
var lgfr = 0;
var lgtm = Date.now();

function showLogo(dataAndEvents) {
  var i = Date.now();
  var imgWidth = (i - lgtm) / 25;
  lgtm = i;
  var a;
  var low;
  var tmp;
  var y;
  var x;
  var y2;
  var b;
  var endRho;
  var r;
  var y1;
  var offset;
  var sa;
  var I;
  var width;
  var index;
  lgfr += imgWidth;
  if (0 == lts[lts.length - 1].mwig && (1 == lga && (1 == lgss && 1 == ncka))) {
    clearInterval(showlogo_iv);
    showlogo_iv = -1;
  }
  else {
    if (dataAndEvents || 1 != lga) {
      lga += 0.05 * imgWidth;
      if (1 <= lga) {
        lga = 1;
      }
      lmc2.style.opacity = lga;
    }
    if (1 != lgss) {
      lgss += 0.00375 * imgWidth;
      if (1 <= lgss) {
        lgss = 1;
      }
    }
    if (dataAndEvents || 1 != ncka) {
      ncka += 0.006 * imgWidth;
      if (1 <= ncka) {
        ncka = 1;
      }
      nick_holder.style.opacity = Math.min(1, 6 * ncka);
      if (!is_mobile) {
        smh.style.opacity = Math.max(0, Math.min(1, 5 * (ncka - 0.05)));
      }
      if (0.01 <= ncka) {
        playh.style.opacity = Math.min(1, 5 * (ncka - 0.01));
      }
    }
    lctx.clearRect(0, 0, lw, lh);
    i = 0;
    for (; i < lts.length; i++) {
      var stack = lts[i];
      var data = stack.pts;
      var length = stack.kc;
      var il = stack.ws;
      var wr = stack.wr;
      var indicatorStack = stack.qm;
      a = stack.sp;
      var ss = stack.sz;
      index = stack.r;
      var pos = stack.mwig;
      if (dataAndEvents) {
        stack.wch = true;
        pos = 1E-7;
      }
      if (stack.wch) {
        if (0 != pos) {
          pos *= 0.982;
          pos -= 0.001 * imgWidth;
          if (1 == render_mode) {
            pos -= 0.005 * imgWidth;
          }
          if (0 >= pos) {
            pos = 0;
          }
          stack.mwig = pos;
        }
      }
      if (!index) {
        index = 1;
      }
      lctx.beginPath();
      if (9 > i) {
        tmp = ctx.createLinearGradient(0, 70 * lgsc, 0, 230 * lgsc);
        tmp.addColorStop(0, "#80FFA0");
        tmp.addColorStop(1, "#008040");
      }
      else {
        tmp = ctx.createLinearGradient(0, 50 * lgsc, 0, 265 * lgsc);
        tmp.addColorStop(0, "#9850FF");
        tmp.addColorStop(1, "#281060");
      }
      lctx.fillStyle = tmp;
      I = false;
      width = 0;
      tmp = data[0];
      y = data[1];
      r = tmp;
      y1 = y;
      var theta2 = lgfr * a;
      offset = 2;
      for (; offset < data.length; offset += 4) {
        a = tmp;
        low = y;
        cx2 = data[offset];
        cy2 = data[offset + 1];
        tmp = data[offset + 2];
        y = data[offset + 3];
        var l = 1;
        for (; l <= length; l++) {
          width++;
          var percent = l / length;
          x = a + (cx2 - a) * percent;
          y2 = low + (cy2 - low) * percent;
          b = cx2 + (tmp - cx2) * percent;
          endRho = cy2 + (y - cy2) * percent;
          x += (b - x) * percent;
          y2 += (endRho - y2) * percent;
          r = Math.atan2(y2 - y1, x - r);
          if (I) {
            if (r - sa > Math.PI) {
              r -= 2 * Math.PI;
            }
            else {
              if (r - sa < -Math.PI) {
                r += 2 * Math.PI;
              }
            }
            sa += 0.05 * (r - sa);
            sa %= 2 * Math.PI;
          }
          else {
            I = true;
            sa = r;
          }
          r = x;
          y1 = y2;
          x += Math.cos(Math.PI / 2 + sa) * Math.sin(theta2) * il * pos;
          y2 += Math.sin(Math.PI / 2 + sa) * Math.sin(theta2) * il * pos;
          theta2 -= 0.76 * indicatorStack * il;
          il += wr;
          lctx.beginPath();
          endRho = 1.15 * ss * Math.min(1, lgsc * (0.2 + 0.8 * lga) * (30 * lgss * index - width / 20 - i / 2));
          if (0.5 < endRho) {
            lctx.arc(x * lgsc, y2 * lgsc, endRho, 0, pi2);
            stack.wch = true;
          }
          lctx.fill();
        }
      }
    }
    lctx2.clearRect(0, 0, lw, lh);
    lctx2.shadowColor = "#000000";
    lctx2.shadowBlur = 16;
    lctx2.shadowOffsetY = 7;
    lctx2.drawImage(lmc, 0, 0);
  }
}
var showlogo_iv = -1;
if (is_safari || is_mobile) {
  ncka = lgss = lga = 1;
  showLogo(true);
}
else {
  showlogo_iv = setInterval("showLogo(false)", 25);
}
document.onkeydown = function(e) {
  e = e || window.event;
  var key = e.keyCode;
  if (37 == key) {
    kd_l = true;
  }
  else {
    if (39 == key) {
      kd_r = true;
    }
    else {
      if (38 == key || 32 == key) {
        kd_u = true;
        setAcceleration(1);
      }
      else {
        if (13 == key || 10 == key) {
          if (want_victory_message) {
            if (0 < victory.value.length) {
              save_btn.elem.onclick();
            }
          }
          else {
            if (!connecting && !connected) {
              play_btn.elem.onclick();
            }
          }
        }
        else {
          if (16 == key) {
            if (testing) {
              shifty = true;
            }
          }
        }
      }
    }
  }
  if (testing) {
    console.log("keydown: " + e.keyCode);
  }
};
document.onkeyup = function(e) {
  e = e || window.event;
  e = e.keyCode;
  if (37 == e) {
    kd_l = false;
  }
  else {
    if (39 == e) {
      kd_r = false;
    }
    else {
      if (38 == e || 32 == e) {
        kd_u = false;
        setAcceleration(0);
      }
      else {
        if (16 == e) {
          if (testing) {
            shifty = false;
          }
        }
      }
    }
  }
};

function loadSos(d) {
  if (!forcing && 0 < d.length) {
    sos = [];
    sis = [];
    d.charAt(0);
    var handle = 1;
    var self = {};
    var i = 0;
    self = i = 0;
    var c;
    var chunk = 0;
    var a = 0;
    var arr = [];
    var data = [];
    var codeSegments = [];
    for (; handle < d.length;) {
      if (c = (d.charCodeAt(handle++) - 97 - a) % 26, 0 > c && (c += 26), chunk *= 16, chunk += c, a += 7, 1 == self) {
        if (0 == i) {
          arr.push(chunk);
          if (4 == arr.length) {
            i++;
          }
        }
        else {
          if (1 == i) {
            data.push(chunk);
            if (3 == data.length) {
              i++;
            }
          }
          else {
            if (2 == i && (codeSegments.push(chunk), 3 == codeSegments.length)) {
              self = {};
              i = c = 0;
              for (; i < data.length; i++) {
                c *= 256;
                c += data[i];
              }
              i = data = 0;
              for (; i < codeSegments.length; i++) {
                data *= 256;
                data += codeSegments[i];
              }
              self.ip = arr.join(".");
              self.po = c;
              self.ac = data;
              sos.push(self);
              arr = [];
              data = [];
              codeSegments = [];
              i = 0;
            }
          }
        }
        self = chunk = 0;
      }
      else {
        self++;
      }
    }
    handle = sos.length - 1;
    for (; 0 <= handle; handle--) {
      self = 1;
      i = sis.length - 1;
      for (; 0 <= i; i--) {
        if (sis[i].ip == sos[handle].ip) {
          self = 0;
          break;
        }
      }
      if (1 == self) {
        a = d = -1;
        arr = [];
        i = sos.length - 1;
        for (; 0 <= i; i--) {
          if (sos[i].ip == sos[handle].ip) {
            arr.push(sos[handle].po);
            if (sos[i].ac > a) {
              d = i;
              a = sos[i].ac;
            }
          }
        }
        sis.push({
          ip: sos[d].ip,
          po: arr[Math.floor(Math.random() * arr.length)],
          ptms: []
        });
      }
    }
    i = sis.length - 1;
    for (; 0 <= i; i--) {
      if (self = sis[i], handle = null, !(0.4 > Math.random())) {
        try {
          handle = new WebSocket("ws://" + self.ip + ":" + self.po + "/ptc");
        }
        catch (x) {
          handle = null;
        }
        if (handle) {
          handle.binaryType = "arraybuffer";
          handle.onerror = function(er) {};
          handle.onmessage = function(msg) {
            msg = new Uint8Array(msg.data);
            if (1 == msg.length && 112 == msg[0]) {
              var key = sis.length - 1;
              for (; 0 <= key; key--) {
                if (msg = sis[key], msg.ps == this) {
                  key = Date.now() - msg.stm;
                  msg.ptms.push(key);
                  if (4 > msg.ptms.length) {
                    msg.stm = Date.now();
                    msg = new Uint8Array(1);
                    msg[0] = 112;
                    this.send(msg);
                  }
                  else {
                    if (waiting_for_sos) {
                      if (-1 == sos_ready_after_mtm) {
                        sos_ready_after_mtm = Date.now() + 2E3;
                      }
                    }
                    this.close();
                    msg.ps = null;
                  }
                  break;
                }
              }
            }
          };
          handle.onopen = function(body) {
            body = false;
            var unlock = sis.length - 1;
            for (; 0 <= unlock; unlock--) {
              var cache = sis[unlock];
              if (cache.ps == this) {
                cache.stm = Date.now();
                body = new Uint8Array(1);
                body[0] = 112;
                this.send(body);
                body = true;
                break;
              }
            }
            if (!body) {
              this.close();
            }
          };
          self.ps = handle;
        }
      }
    }
  }
}
var mba = null;
var mbi = null;
if (is_ios || is_android) {
  mba = document.createElement("a");
  mbi = document.createElement("img");
  mbi.border = 0;
  mbi.draggable = "false";
  mbi.className = "nsi";
  mbi.width = 1245;
  mbi.height = 260;
  mbi.style.position = "fixed";
  mbi.style.left = "0px";
  mbi.style.bottom = "0px";
  mbi.style.zIndex = 70;
  mbi.src = "/s/n2.jpg";
  mba.appendChild(mbi);
  document.body.appendChild(mba);
  if (is_ios) {
    mba.href = "https://itunes.apple.com/us/app/slither.io/id1091944550?ls=1&mt=8";
  }
  else {
    if (is_android) {
      mba.href = is_amazon ? "http://www.amazon.com/Lowtech-Enterprises-slither-io/dp/B01E312TYQ/" : "https://play.google.com/store/apps/details?id=air.com.hypah.io.slither";
    }
  }
}
resize();
o = {
  f: function(n, success, ctx) {
    if ("success" == success) {
      loadSos(n);
    }
  }
};
getData("/i2.txt", o);
