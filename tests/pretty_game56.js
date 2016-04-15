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
var raf = function(b) {
};
if (window.requestAnimationFrame) {
  raf = window.requestAnimationFrame;
} else {
  if (window.mozRequestAnimationFrame) {
    raf = window.mozRequestAnimationFrame;
  } else {
    if (window.webkitRequestAnimationFrame) {
      raf = window.webkitRequestAnimationFrame;
    } else {
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
function trf(b, q) {
  b.style.webkitTransform = b.style.OTransform = b.style.msTransform = b.style.MozTransform = b.style.transform = q;
}
function trfo(b, q) {
  b.style.webkitTransformOrigin = b.style.OTransformOrigin = b.style.msTransformOrigin = b.style.MozTransformOrigin = b.style.transformOrigin = q;
}
var pi2 = 2 * Math.PI;
var animating = false;
var startAnimation = function() {
  animating = true;
  if (no_raf) {
    if (is_mobile) {
      setInterval("oef()", 33);
    } else {
      if (is_safari) {
        setInterval("oef()", 33);
      } else {
        setInterval("oef()", 20);
      }
    }
  } else {
    raf(oef);
  }
};
var ois = [];
var wic = 0;
var ldi = function(b$$0) {
  wic++;
  var q = {};
  var f = document.createElement("img");
  q.ii = f;
  q.sc = 1;
  f.onload = function() {
    var b = ois.length - 1;
    for (;0 <= b;b--) {
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
  q.src = b$$0;
  ois.push(q);
  return q;
};
function addCss(b) {
  var q = document.createElement("style");
  document.getElementsByTagName("head")[0].appendChild(q);
  q.type = "text/css";
  if (q.styleSheet) {
    q.styleSheet.cssText = b;
  } else {
    q.appendChild(document.createTextNode(b));
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
for (;p < l;p += 4) {
  if (0.5 > Math.random()) {
    imgd[p] = imgd[p + 1] = imgd[p + 2] = 0;
  } else {
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
for (;yy < grh;yy++) {
  j = (grh - 1 - yy) / (grh - 1);
  j = 0.5 * (1 - Math.cos(Math.PI * j));
  xx = 0;
  for (;xx < grw;xx++) {
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
for (;yy < grh;yy++) {
  j = (grh - 1 - yy) / (grh - 1);
  j = 0.5 * (1 - Math.cos(Math.PI * j));
  xx = 0;
  for (;xx < grw;xx++) {
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
for (;yy < grh;yy++) {
  j = yy / (grh - 1);
  j = 0.5 * (1 - Math.cos(Math.PI * j));
  xx = 0;
  for (;xx < grw;xx++) {
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
for (;yy < grh;yy++) {
  j = (grh - 1 - yy) / (grh - 1);
  j = 0.5 * (1 - Math.cos(Math.PI * j));
  xx = 0;
  for (;xx < grw;xx++) {
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
for (;yy < grh;yy++) {
  j = (grh - 1 - yy) / (grh - 1);
  j = 0.5 * (1 - Math.cos(Math.PI * j));
  xx = 0;
  for (;xx < grw;xx++) {
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
for (;yy < grh;yy++) {
  j = yy / (grh - 1);
  j = 0.5 * (1 - Math.cos(Math.PI * j));
  xx = 0;
  for (;xx < grw;xx++) {
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
function mkBtn(b$$0, q, f, h) {
  var u = document.createElement("div");
  if (!b$$0.tagName) {
    b$$0 = document.getElementById(b$$0);
    b$$0.style.width = f + "px";
    b$$0.style.height = h + "px";
    u.style.width = f + "px";
    u.style.height = h + "px";
  }
  var e$$0 = {
    lic : 0
  };
  e$$0.elem = b$$0;
  e$$0.md = false;
  e$$0.mo = false;
  e$$0.mdf = 0;
  e$$0.mof = 0;
  var c = true;
  if (b$$0.style) {
    if (b$$0.style.position) {
      if ("absolute" == (b$$0.style.position + "").toLowerCase()) {
        c = false;
      }
      if ("fixed" == (b$$0.style.position + "").toLowerCase()) {
        c = false;
      }
    }
  }
  if (c) {
    b$$0.style.position = "relative";
  }
  u.style.position = "absolute";
  u.style.opacity = 0;
  u.style.left = "0px";
  u.style.top = "0px";
  b$$0.appendChild(u);
  e$$0.ho = u;
  e$$0.alic = function() {
    this.lic++;
    if (3 == this.lic && (this.ho.style.opacity = 1, this.onload)) {
      this.onload();
    }
  };
  mos.push(e$$0);
  e$$0.setEnabled = function(b) {
    if (b) {
      this.disabled = false;
      this.upi.style.opacity = this.mof;
      this.downi.style.opacity = this.mdf;
      this.elem.style.opacity = 1;
      this.elem.style.cursor = "pointer";
    } else {
      this.disabled = true;
      this.upi.style.opacity = 0;
      this.downi.style.opacity = 0;
      this.elem.style.opacity = 0.38;
      this.elem.style.cursor = "default";
    }
  };
  if (q) {
    c = 1;
    for (;3 >= c;c++) {
      var y = document.createElement("img");
      y.draggable = false;
      y.style.position = "absolute";
      y.style.left = "0px";
      y.style.top = "0px";
      y.border = 0;
      y.width = f;
      y.height = h;
      y.className = "nsi";
      u.appendChild(y);
      if (1 == c) {
        e$$0.normi = y;
        y.onload = function() {
          var b = mos.length - 1;
          for (;0 <= b;b--) {
            var c = mos[b];
            if (c.normi == this) {
              c.alic();
              break;
            }
          }
        };
        y.src = q + ".png";
      } else {
        if (2 == c) {
          e$$0.upi = y;
          y.style.opacity = 0;
          y.onload = function() {
            var b = mos.length - 1;
            for (;0 <= b;b--) {
              var c = mos[b];
              if (c.upi == this) {
                c.alic();
                break;
              }
            }
          };
          y.src = q + "up.png";
        } else {
          if (3 == c) {
            e$$0.downi = y;
            y.style.opacity = 0;
            y.onload = function() {
              var b = mos.length - 1;
              for (;0 <= b;b--) {
                var c = mos[b];
                if (c.downi == this) {
                  c.alic();
                  break;
                }
              }
            };
            y.src = q + "down.png";
          }
        }
      }
    }
  } else {
    u.style.opacity = 1;
  }
  b$$0.onmouseenter = function() {
    var b = mos.length - 1;
    for (;0 <= b;b--) {
      var c = mos[b];
      if (c.elem == this) {
        if (!c.disabled && !c.mo) {
          c.mo = true;
          if (c.onmouseenter) {
            c.onmouseenter();
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
    for (;0 <= b;b--) {
      var c = mos[b];
      if (c.elem == this) {
        if (c.mo) {
          c.mo = false;
          if (c.onmouseleave) {
            c.onmouseleave();
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
    var c = mos.length - 1;
    for (;0 <= c;c--) {
      var e = mos[c];
      if (e.elem == this) {
        if (!e.disabled && !e.md) {
          e.md = true;
          if (e.onmousedown) {
            e.onmousedown(b, e);
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
    var c = mos.length - 1;
    for (;0 <= c;c--) {
      var e = mos[c];
      if (e.elem == this) {
        if (e.md) {
          e.mdf = 1;
          e.md = false;
          if (e.onmouseup && (e.onmouseup(b, e), is_mobile)) {
            e.elem.onmouseleave();
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
      for (;0 <= b;b--) {
        var c = mos[b];
        if (c.md) {
          c.md = false;
          if (-1 == m_iv) {
            m_iv = setInterval("hmos()", 25);
          }
        }
      }
    };
  }
  return e$$0;
}
function hmos() {
  var b;
  var q = false;
  var f = mos.length - 1;
  for (;0 <= f;f--) {
    var h = mos[f];
    b = false;
    if (h.mo) {
      if (1 != h.mof) {
        q = true;
        h.mof += 0.33;
        if (1 <= h.mof) {
          h.mof = 1;
        }
        b = true;
      }
    } else {
      if (0 != h.mof) {
        q = true;
        h.mof -= 0.2;
        if (0 >= h.mof) {
          h.mof = 0;
        }
        b = true;
      }
    }
    if (b) {
      h.upi.style.opacity = h.disabled ? 0 : h.mof;
    }
    b = false;
    if (h.md) {
      if (1 != h.mdf) {
        q = true;
        h.mdf += 0.33;
        if (1 <= h.mdf) {
          h.mdf = 1;
        }
        b = true;
      }
    } else {
      if (0 != h.mdf) {
        q = true;
        h.mdf -= 0.2;
        if (0 >= h.mdf) {
          h.mdf = 0;
        }
        b = true;
      }
    }
    if (b) {
      h.downi.style.opacity = h.disabled ? 0 : h.mdf;
    }
  }
  if (!q) {
    clearInterval(m_iv);
    m_iv = -1;
  }
}
function makeTextBtn(b$$0, q, f, h, u) {
  if (!q) {
    q = 56;
  }
  if (56 < q) {
    q = 56;
  }
  if (!f) {
    f = 15;
  }
  if (!h) {
    h = 14;
  }
  var e$$0 = document.createElement("div");
  e$$0.className = "btnt nsi sadg" + u;
  var c$$0 = e$$0.style;
  c$$0.position = "absolute";
  c$$0.width = "auto";
  c$$0.color = "#ffffff";
  c$$0.fontWeight = "bold";
  c$$0.textAlign = "center";
  c$$0.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
  c$$0.fontSize = f + "px";
  e$$0.textContent = b$$0;
  c$$0.cursor = "pointer";
  document.body.appendChild(e$$0);
  var y = Math.ceil(35 + e$$0.offsetWidth);
  document.body.removeChild(e$$0);
  e$$0.textContent = "";
  c$$0.width = y + "px";
  c$$0.height = q + "px";
  c$$0.lineHeight = q + "px";
  if (!is_mobile) {
    c$$0.boxShadow = "0px 3px 20px rgba(0,0,0, .75)";
  }
  c$$0.borderRadius = h + "px";
  var E = document.createElement("div");
  c$$0 = E.style;
  c$$0.position = "absolute";
  c$$0.left = c$$0.top = "0px";
  c$$0.width = y + "px";
  c$$0.height = q + "px";
  c$$0.borderRadius = h + 1 + "px";
  c$$0.opacity = 0;
  E.className = "sadu" + u;
  var B = document.createElement("div");
  c$$0 = B.style;
  c$$0.position = "absolute";
  c$$0.left = c$$0.top = "-1px";
  c$$0.width = y + 2 + "px";
  c$$0.height = q + 2 + "px";
  c$$0.borderRadius = h + "px";
  c$$0.opacity = 0;
  B.className = "sadd" + u;
  var w = mkBtn(e$$0);
  w.a = 1;
  w.ho.appendChild(E);
  w.upi = E;
  w.ho.appendChild(B);
  w.downi = B;
  w.ts = f;
  w.ww = y;
  w.bgm = u;
  w.setText = function(b) {
    var c = document.createElement("div");
    c.className = "nsi sadg" + this.bgm;
    var e = c.style;
    e.position = "absolute";
    e.width = "auto";
    e.color = "#ffffff";
    e.fontWeight = "bold";
    e.textAlign = "center";
    e.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
    e.fontSize = this.ts + "px";
    c.textContent = b;
    document.body.appendChild(c);
    e = Math.ceil(35 + c.offsetWidth);
    document.body.removeChild(c);
    this.btnf.textContent = b;
    this.ww = e;
    this.elem.style.width = e + "px";
    this.upi.style.width = e + "px";
    this.downi.style.width = e + 2 + "px";
    this.btnf.style.width = e + "px";
  };
  f = document.createElement("div");
  e$$0.appendChild(f);
  w.btnf = f;
  c$$0 = f.style;
  c$$0.position = "absolute";
  c$$0.left = c$$0.top = "0px";
  c$$0.width = y + "px";
  c$$0.height = q + "px";
  c$$0.borderRadius = h + "px";
  f.textContent = b$$0;
  f.className = "nsi";
  c$$0.color = "#ffffff";
  c$$0.opacity = 0.9;
  w.ho.appendChild(f);
  return w;
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
  var q = (b - llgmtm) / 25;
  llgmtm = b;
  login_fr += 0.05 * q;
  if (choosing_skin) {
    login_fr += 0.06 * q;
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
  } else {
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
} else {
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
    } catch (b) {
    }
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
if ("FR" == country) {
  pstr = "Jouer";
  nick.placeholder = "Surnom";
} else {
  if ("BR" == country) {
    pstr = "Joga";
    nick.placeholder = "Apelido";
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
if ("FR" == country) {
  tipss = ["Mangez de cro\u00eetre!", "Cliquez et vous courrez!", "Ne laissez pas votre t\u00eate toucher d'autres serpents!"];
} else {
  if ("BR" == country) {
    tipss = ["Coma para crescer!", "Clique para correr!", "N\u00e3o deixe que sua cabe\u00e7a para tocar outras cobras!"];
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
      var q = new Uint8Array(2 + b.length);
      q[0] = 255;
      q[1] = 118;
      var f = 0;
      for (;f < b.length;f++) {
        q[f + 2] = b.charCodeAt(f);
      }
    } else {
      q = new Uint8Array(1 + b.length);
      q[0] = 118;
      f = 0;
      for (;f < b.length;f++) {
        q[f + 1] = b.charCodeAt(f);
      }
    }
    ws.send(q);
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
if ("FR" == country) {
  lstr = "Gagnants";
} else {
  if ("BR" == country) {
    lstr = "L\u00edderes";
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
  } catch (q) {
  }
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
    } catch (q) {
    }
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
  return{
    os : [],
    end_pos : 0,
    add : function(b) {
      if (this.end_pos == this.os.length) {
        this.os.push(b);
      } else {
        this.os[this.end_pos] = b;
      }
      this.end_pos++;
    },
    get : function() {
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
for (;i < lfc;i++) {
  j = 0.5 * (1 - Math.cos(Math.PI * (lfc - 1 - i) / (lfc - 1)));
  lfas.push(j);
}
var rfas = [];
var rfc = 43;
i = 0;
for (;i < rfc;i++) {
  j = 0.5 * (1 - Math.cos(Math.PI * (rfc - 1 - i) / (rfc - 1)));
  rfas.push(j);
}
var fao = {};
var fc = 3;
for (;100 >= fc;fc++) {
  var fas = [];
  i = 0;
  for (;i < fc;i++) {
    j = 0.5 * (1 - Math.cos(Math.PI * (fc - 1 - i) / (fc - 1)));
    fas.push(j);
  }
  fao["a" + fc] = fas;
}
var hfc = 92;
var hfas = new Float32Array(hfc);
i = 0;
for (;i < hfc;i++) {
  j = 0.5 * (1 - Math.cos(Math.PI * (hfc - 1 - i) / (hfc - 1)));
  hfas[i] = j;
}
var afas = [];
var afc = 26;
i = 0;
for (;i < afc;i++) {
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
for (;i < vfc;i++) {
  j = 0.5 * (1 - Math.cos(Math.PI * (vfc - 1 - i) / (vfc - 1)));
  j += 0.5 * (0.5 * (1 - Math.cos(Math.PI * j)) - j);
  vfas.push(j);
  fvxs.push(0);
  fvys.push(0);
}
function pwr(b) {
  var q = new Float32Array(125);
  var f = 0;
  for (;125 > f;f++) {
    q[f] = Math.pow(b, f);
  }
  return q;
}
function pca(b) {
  var q = new Float32Array(125);
  var f = 0;
  for (;125 > f;f++) {
    q[f] = 1 - Math.pow(1 - b, f);
  }
  return q;
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
    for (;b <= mscps;b++) {
      if (b >= mscps) {
        fmlts.push(fmlts[b - 1]);
      } else {
        fmlts.push(Math.pow(1 - b / mscps, 2.25));
      }
      if (0 == b) {
        fpsls.push(0);
      } else {
        fpsls.push(fpsls[b - 1] + 1 / fmlts[b - 1]);
      }
    }
    var q = fmlts[fmlts.length - 1];
    var f = fpsls[fpsls.length - 1];
    b = 0;
    for (;2048 > b;b++) {
      fmlts.push(q);
      fpsls.push(f);
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
function setSkin(b, q) {
  b.rcv = q;
  b.er = 6;
  b.ec = "#ffffff";
  b.ppa = 1;
  b.antenna = false;
  if (19 == q) {
    b.ec = "#ee5500";
    b.er = 4.5;
    b.ppa = 0;
    b.antenna = true;
    b.atx = new Float32Array(10);
    b.aty = new Float32Array(10);
    b.atvx = new Float32Array(10);
    b.atvy = new Float32Array(10);
    b.atax = new Float32Array(10);
    b.atay = new Float32Array(10);
    var f = 9;
    for (;0 <= f;f--) {
      b.atx[f] = b.xx;
      b.aty[f] = b.yy;
    }
  }
  f = null;
  if (9 == q) {
    f = [7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 10, 10, 10, 10, 10, 10, 10, 10, 10];
  } else {
    if (10 == q) {
      f = [9, 9, 9, 9, 9, 1, 1, 1, 1, 1, 7, 7, 7, 7, 7];
    } else {
      if (11 == q) {
        f = [11, 11, 11, 11, 11, 7, 7, 7, 7, 7, 12, 12, 12, 12, 12];
      } else {
        if (12 == q) {
          f = [7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 13, 13, 13, 13, 13];
        } else {
          if (13 == q) {
            f = [14, 14, 14, 14, 14, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7];
          } else {
            if (14 == q) {
              f = [9, 9, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7, 7, 7];
            } else {
              if (15 == q) {
                f = [0, 1, 2, 3, 4, 5, 6, 7, 8];
              } else {
                if (16 == q) {
                  f = [15, 15, 15, 15, 15, 15, 15, 4, 4, 4, 4, 4, 4, 4];
                } else {
                  if (17 == q) {
                    f = [9, 9, 9, 9, 9, 9, 9, 16, 16, 16, 16, 16, 16, 16];
                  } else {
                    if (18 == q) {
                      f = [7, 7, 7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 9, 9];
                    } else {
                      if (19 == q) {
                        f = [9];
                      } else {
                        if (20 == q) {
                          f = [3, 3, 3, 3, 3, 0, 0, 0, 0, 0];
                        } else {
                          if (21 == q) {
                            f = [3, 3, 3, 3, 3, 3, 3, 18, 18, 18, 18, 18, 18, 20, 19, 20, 19, 20, 19, 20, 18, 18, 18, 18, 18, 18];
                          } else {
                            q %= 9;
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
  if (f) {
    q = f[0];
  }
  b.rbcs = f;
  b.cv = q;
}
function newSnake(b, q, f, h, u, e) {
  var c = {};
  c.id = b;
  c.xx = q;
  c.yy = f;
  setSkin(c, h);
  h = c.cv;
  c.fnfr = 0;
  c.na = 1;
  c.chl = 0;
  c.tsp = 0;
  c.sfr = 0;
  c.rr = Math.min(255, rrs[h] + Math.floor(20 * Math.random()));
  c.gg = Math.min(255, ggs[h] + Math.floor(20 * Math.random()));
  c.bb = Math.min(255, bbs[h] + Math.floor(20 * Math.random()));
  b = "00" + Math.min(255, Math.max(0, Math.round(c.rr))).toString(16);
  q = "00" + Math.min(255, Math.max(0, Math.round(c.gg))).toString(16);
  f = "00" + Math.min(255, Math.max(0, Math.round(c.bb))).toString(16);
  b = b.substr(b.length - 2);
  q = q.substr(q.length - 2);
  f = f.substr(f.length - 2);
  c.cs = "#" + b + q + f;
  b = "00" + Math.min(255, Math.max(0, Math.round(0.4 * c.rr))).toString(16);
  q = "00" + Math.min(255, Math.max(0, Math.round(0.4 * c.gg))).toString(16);
  f = "00" + Math.min(255, Math.max(0, Math.round(0.4 * c.bb))).toString(16);
  b = b.substr(b.length - 2);
  q = q.substr(q.length - 2);
  f = f.substr(f.length - 2);
  c.cs04 = "#" + b + q + f;
  b = "00" + Math.min(255, Math.max(0, Math.round(0.5 * (255 + c.rr)))).toString(16);
  q = "00" + Math.min(255, Math.max(0, Math.round(0.5 * (255 + c.gg)))).toString(16);
  f = "00" + Math.min(255, Math.max(0, Math.round(0.5 * (255 + c.bb)))).toString(16);
  b = b.substr(b.length - 2);
  q = q.substr(q.length - 2);
  f = f.substr(f.length - 2);
  c.csw = "#" + b + q + f;
  c.sc = 1;
  c.ssp = nsp1 + nsp2 * c.sc;
  c.fsp = c.ssp + 0.1;
  c.msp = nsp3;
  c.fxs = new Float32Array(rfc);
  c.fys = new Float32Array(rfc);
  c.fchls = new Float32Array(rfc);
  c.fpos = 0;
  c.ftg = 0;
  c.fx = 0;
  c.fy = 0;
  c.fchl = 0;
  c.fas = new Float32Array(afc);
  c.fapos = 0;
  c.fatg = 0;
  c.fa = 0;
  c.ehang = u;
  c.wehang = u;
  c.ehl = 1;
  c.msl = 42;
  c.fam = 0;
  c.ang = u;
  c.eang = u;
  c.wang = u;
  c.rex = 0;
  c.rey = 0;
  c.sp = 2;
  if (e) {
    c.lnp = e[e.length - 1];
    c.pts = e;
    c.sct = e.length;
    if (e[0].dying) {
      c.sct--;
    }
  } else {
    c.pts = [];
    c.sct = 0;
  }
  c.flpos = 0;
  c.fls = new Float32Array(lfc);
  c.fl = 0;
  c.fltg = 0;
  c.tl = c.sct + c.fam;
  c.cfl = c.tl;
  c.scang = 1;
  c.dead_amt = 0;
  c.alive_amt = 0;
  snakes.splice(0, 0, c);
  return os["s" + c.id] = c;
}
function snl(b) {
  var q = b.tl;
  b.tl = b.sct + b.fam;
  q = b.tl - q;
  var f = b.flpos;
  var h = 0;
  for (;h < lfc;h++) {
    b.fls[f] -= q * lfas[h];
    f++;
    if (f >= lfc) {
      f = 0;
    }
  }
  b.fl = b.fls[b.flpos];
  b.fltg = lfc;
  if (b == snake) {
    wumsts = true;
  }
}
function newFood(b, q, f, h, u, e) {
  var c = {};
  c.id = b;
  c.xx = q;
  c.yy = f;
  c.rx = q;
  c.ry = f;
  c.rsp = u ? 2 : 1;
  c.cv = e;
  c.rad = 1E-5;
  c.sz = h;
  b = per_color_imgs[c.cv];
  c.cv2 = Math.floor(b.ic * gsc * c.sz / 16.5);
  if (0 > c.cv2) {
    c.cv2 = 0;
  }
  if (c.cv2 >= b.ic) {
    c.cv2 = b.ic - 1;
  }
  if (testing) {
    if (!window.biggestcv2) {
      window.biggestcv2 = c.cv2;
    }
    if (c.cv2 > window.biggestcv2) {
      window.biggestcv2 = c.cv2;
      console.log("biggest cv2 seen: " + c.cv2 + " out of " + (b.ic - 1) + " (fo.sz = " + c.sz + " which means its server-side rad is " + 5 * c.sz + ")");
    }
  }
  c.fi = b.imgs[c.cv2];
  c.fw = b.fws[c.cv2];
  c.fh = b.fhs[c.cv2];
  c.fw2 = b.fw2s[c.cv2];
  c.fh2 = b.fh2s[c.cv2];
  c.ofi = b.oimgs[c.cv2];
  c.ofw = b.ofws[c.cv2];
  c.ofh = b.ofhs[c.cv2];
  c.ofw2 = b.ofw2s[c.cv2];
  c.ofh2 = b.ofh2s[c.cv2];
  c.gcv = Math.floor(b.ic * gsc * (0.25 + 0.75 * c.sz / 16.5));
  if (0 > c.gcv) {
    c.gcv = 0;
  }
  if (c.gcv >= b.ic) {
    c.gcv = b.ic - 1;
  }
  c.gfi = b.gimgs[c.gcv];
  c.gfw = b.gfws[c.gcv];
  c.gfh = b.gfhs[c.gcv];
  c.gfw2 = b.gfw2s[c.gcv];
  c.gfh2 = b.gfh2s[c.gcv];
  c.g2cv = Math.floor(b.ic * gsc * 2 * (0.25 + 0.75 * c.sz / 16.5));
  if (0 > c.g2cv) {
    c.g2cv = 0;
  }
  if (c.g2cv >= b.ic) {
    c.g2cv = b.ic - 1;
  }
  c.g2fi = b.gimgs[c.g2cv];
  c.g2fw = b.gfws[c.g2cv];
  c.g2fh = b.gfhs[c.g2cv];
  c.g2fw2 = b.gfw2s[c.g2cv];
  c.g2fh2 = b.gfh2s[c.g2cv];
  c.fr = 0;
  c.gfr = 64 * Math.random();
  c.gr = 0.65 + 0.1 * c.sz;
  c.wsp = 0.0225 * (2 * Math.random() - 1);
  c.eaten_fr = 0;
  c.eaten_fr4 = 0;
  return foods[foods_c++] = c;
}
function newPrey(b, q, f, h, u, e, c, y, E) {
  var B = {};
  B.id = b;
  B.xx = q;
  B.yy = f;
  B.rad = 1E-5;
  B.sz = h;
  B.cv = u;
  B.dir = e;
  B.wang = c;
  B.ang = y;
  B.sp = E;
  B.fr = 0;
  B.gfr = 64 * Math.random();
  B.gr = 0.5 + 0.15 * Math.random() + 0.1 * B.sz;
  B.rr = Math.min(255, rrs[u]);
  B.gg = Math.min(255, ggs[u]);
  B.bb = Math.min(255, bbs[u]);
  b = "00" + Math.min(255, Math.max(0, Math.round(B.rr))).toString(16);
  q = "00" + Math.min(255, Math.max(0, Math.round(B.gg))).toString(16);
  f = "00" + Math.min(255, Math.max(0, Math.round(B.bb))).toString(16);
  b = b.substr(b.length - 2);
  q = q.substr(q.length - 2);
  f = f.substr(f.length - 2);
  B.cs = "#" + b + q + f;
  B.cv2 = Math.floor(per_color_imgs[B.cv].pr_imgs.length * gsc * B.sz / 9);
  if (0 > B.cv2) {
    B.cv2 = 0;
  }
  if (B.cv2 >= per_color_imgs[B.cv].pr_imgs.length) {
    B.cv2 = per_color_imgs[B.cv].pr_imgs.length - 1;
  }
  B.fi = per_color_imgs[B.cv].pr_imgs[B.cv2];
  B.fw = per_color_imgs[B.cv].pr_fws[B.cv2];
  B.fh = per_color_imgs[B.cv].pr_fhs[B.cv2];
  B.fw2 = per_color_imgs[B.cv].pr_fw2s[B.cv2];
  B.fh2 = per_color_imgs[B.cv].pr_fh2s[B.cv2];
  B.gcv = per_color_imgs[B.cv].gimgs.length - 1;
  B.gfi = per_color_imgs[B.cv].gimgs[B.gcv];
  B.gfw = per_color_imgs[B.cv].gfws[B.gcv];
  B.gfh = per_color_imgs[B.cv].gfhs[B.gcv];
  B.gfw2 = per_color_imgs[B.cv].gfw2s[B.gcv];
  B.gfh2 = per_color_imgs[B.cv].gfh2s[B.gcv];
  B.fxs = new Float32Array(rfc);
  B.fys = new Float32Array(rfc);
  B.fpos = 0;
  B.ftg = 0;
  B.fx = 0;
  B.fy = 0;
  B.eaten = false;
  B.eaten_fr = 0;
  B.eaten_fr4 = 0;
  preys.push(B);
  return B;
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
for (;p < l;p += 4) {
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
for (;p < l;p += 4) {
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
rabulb.width = rabulb.height = 34;
ctx = rabulb.getContext("2d");
var g = ctx.createRadialGradient(17, 17, 1, 17, 17, 16);
g.addColorStop(0, "rgba(255, 255, 255, 1)");
g.addColorStop(0.83, "rgba(150,150,150, 1)");
g.addColorStop(0.84, "rgba(80,80,80, 1)");
g.addColorStop(0.99, "rgba(80,80,80, 1)");
g.addColorStop(1, "rgba(80,80,80, 0)");
ctx.fillStyle = g;
ctx.fillRect(0, 0, 34, 34);
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
var rrs = [192, 144, 128, 128, 238, 255, 255, 255, 224, 255, 144, 80, 255, 40, 100, 120, 72, 160, 255, 56, 56];
var ggs = [128, 153, 208, 255, 238, 160, 144, 64, 48, 255, 153, 80, 192, 136, 117, 134, 84, 80, 224, 68, 68];
var bbs = [255, 255, 208, 128, 112, 96, 144, 64, 224, 255, 255, 80, 80, 96, 255, 255, 255, 255, 64, 255, 255];
var max_skin_cv = 21;
i = 0;
for (;i < rrs.length;i++) {
  o = {
    imgs : [],
    fws : [],
    fhs : [],
    fw2s : [],
    fh2s : [],
    gimgs : [],
    gfws : [],
    gfhs : [],
    gfw2s : [],
    gfh2s : [],
    oimgs : [],
    ofws : [],
    ofhs : [],
    ofw2s : [],
    ofh2s : []
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
  for (;p < l;p += 4) {
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
  for (;7 > j;j++) {
    p = xx = yy = 0;
    for (;p < l;p += 4) {
      v = Math.pow(Math.max(0, Math.min(1, 1 - Math.abs(yy - ksz2) / ksz2)), 0.35);
      var v2 = Math.max(0, Math.min(1, 1 - Math.sqrt(Math.pow(xx - ksz2, 2) + Math.pow(yy - ksz2, 2)) / 34));
      v = v + 0.375 * (v2 - v);
      v = v * (1.22 - 0.44 * j / 6);
      imgd[p] = Math.max(0, Math.min(255, Math.floor(rrs[i] * v)));
      imgd[p + 1] = Math.max(0, Math.min(255, Math.floor(ggs[i] * v)));
      imgd[p + 2] = Math.max(0, Math.min(255, Math.floor(bbs[i] * v)));
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
      for (;1 >= k;k++) {
        var tx = ksz2 + ksz2 / 16 * Math.cos(2 * Math.PI * k / 8) * 13;
        var ty = ksz2 + ksz2 / 16 * Math.sin(2 * Math.PI * k / 8) * 13;
        ctx2.fillStyle = "#FFFFFF";
        ctx2.beginPath();
        m = 0;
        for (;5 >= m;m++) {
          xx = tx + ksz / 32 * Math.cos(2 * Math.PI * m / 5) * 0.05 * 24;
          yy = ty + ksz / 32 * Math.sin(2 * Math.PI * m / 5) * 0.05 * 24;
          if (0 == m) {
            ctx2.moveTo(xx, yy);
          } else {
            ctx2.lineTo(xx, yy);
          }
          xx = tx + ksz / 32 * Math.cos(2 * Math.PI * (m + 0.5) / 5) * 3.1;
          yy = ty + ksz / 32 * Math.sin(2 * Math.PI * (m + 0.5) / 5) * 3.1;
          ctx2.lineTo(xx, yy);
        }
        ctx2.fill();
      }
    } else {
      if (19 == i) {
        k = -2;
        for (;2 >= k;k++) {
          tx = ksz2 + ksz2 / 16 * Math.cos(2 * Math.PI * k / 15) * 13;
          ty = ksz2 + ksz2 / 16 * Math.sin(2 * Math.PI * k / 15) * 13;
          ctx2.save();
          ctx2.globalAlpha = 0.7;
          ctx2.fillStyle = "#FFFFFF";
          ctx2.beginPath();
          m = 0;
          for (;5 >= m;m++) {
            xx = tx + ksz / 32 * Math.cos(2 * Math.PI * m / 5) * 0.05 * 12;
            yy = ty + ksz / 32 * Math.sin(2 * Math.PI * m / 5) * 0.05 * 12;
            if (0 == m) {
              ctx2.moveTo(xx, yy);
            } else {
              ctx2.lineTo(xx, yy);
            }
            xx = tx + ksz / 32 * Math.cos(2 * Math.PI * (m + 0.5) / 5) * 1.55;
            yy = ty + ksz / 32 * Math.sin(2 * Math.PI * (m + 0.5) / 5) * 1.55;
            ctx2.lineTo(xx, yy);
          }
          ctx2.fill();
          ctx2.restore();
        }
      } else {
        if (20 == i) {
          k = -1.5;
          for (;1.5 >= k;k++) {
            tx = ksz2 + ksz2 / 16 * Math.cos(2 * Math.PI * k / 15) * 13;
            ty = ksz2 + ksz2 / 16 * Math.sin(2 * Math.PI * k / 15) * 13;
            ctx2.save();
            ctx2.globalAlpha = 0.7;
            ctx2.fillStyle = "#FFFFFF";
            ctx2.beginPath();
            m = 0;
            for (;5 >= m;m++) {
              xx = tx + ksz2 / 16 * Math.cos(2 * Math.PI * m / 5) * 0.05 * 14;
              yy = ty + ksz2 / 16 * Math.sin(2 * Math.PI * m / 5) * 0.05 * 14;
              if (0 == m) {
                ctx2.moveTo(xx, yy);
              } else {
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
  for (;18.8 >= j;j += 1) {
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
  for (;24 >= j;j += 1) {
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
  for (;i < rrs.length;i++) {
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
for (;256 > yy;yy++) {
  xx = 0;
  for (;256 > xx;xx++) {
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
} catch (b$$34) {
}
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
    } else {
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
    var q = ldmc.getContext("2d");
    q.clearRect(0, 0, 512, 128);
    var f;
    var h;
    var u = 1;
    for (;2 >= u;u++) {
      q.beginPath();
      if (1 == u) {
        q.fillStyle = "#60FF70";
        h = 0;
      } else {
        q.fillStyle = "#9850FF";
        h = Math.PI;
      }
      var e = 0;
      for (;256 >= e;e++) {
        f = 32 + 5 * Math.cos(h + lsfr / 6 + 8 * e / 256) + 8 * e / 256;
        if (256 == e) {
          f += 10;
        }
        xx = 64 + Math.cos(h + lsfr / 44 + 0.8 * Math.PI * e / 256) * f * 1.25;
        yy = 64 + Math.sin(h + lsfr / 44 + 0.8 * Math.PI * e / 256) * f;
        if (0 == e) {
          q.moveTo(xx, yy);
        } else {
          q.lineTo(xx, yy);
        }
      }
      f = 32;
      xx = 64 + Math.cos(h + lsfr / 44 + 0.8 * Math.PI * (e + 47) / 256) * f * 1.25;
      yy = 64 + Math.sin(h + lsfr / 44 + 0.8 * Math.PI * (e + 47) / 256) * f;
      q.lineTo(xx, yy);
      e = 256;
      for (;0 <= e;e--) {
        f = 32 + 5 * Math.cos(h + lsfr / 6 + 8 * e / 256) - 8 * e / 256;
        if (256 == e) {
          f -= 10;
        }
        xx = 64 + Math.cos(h + lsfr / 44 + 0.8 * Math.PI * e / 256) * f * 1.25;
        yy = 64 + Math.sin(h + lsfr / 44 + 0.8 * Math.PI * e / 256) * f;
        q.lineTo(xx, yy);
      }
      q.fill();
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
    } else {
      ss_a -= avfr / 86;
      if (0 >= ss_a) {
        ss_sh = ss_a = 0;
        ldmc.style.display = "none";
        trf(ldmc, "");
      }
    }
    ldmc.style.opacity = ss_a;
    e = Math.round(0.1 + 0.9 * ss_sh * (1 + 2 * Math.pow(1 - ss_a, 2)) * 1E5) / 1E5;
    trf(ldmc, "scale(" + e + "," + e + ")");
  }
  if (-1 != play_btn_click_mtm && 6666 < b - play_btn_click_mtm) {
    e = document.createElement("img");
    h = [];
    h.push("bso=" + encodeURIComponent(bso));
    if (bso) {
      var c;
      for (c in bso) {
        h.push(c + "=" + encodeURIComponent(bso[c]));
      }
    }
    h.push("waiting_for_sos=" + (waiting_for_sos ? "true" : "false"));
    h.push("soslen=" + sos.length);
    h.push("sislen=" + sis.length);
    e.src = "http://slither.io/cnc.jpg?" + h.join("&");
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
    e = snakes.length - 1;
    for (;0 <= e;e--) {
      c = snakes[e];
      u = c.pts.length - 1;
      for (;0 <= u;u--) {
        c.pts[u].yy = grd / 2 + 15 * Math.cos(u / 4 + fr / 19) * (1 - u / c.pts.length);
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
    } else {
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
      } else {
        victory_holder.style.opacity = 1 - hvfr;
        saveh.style.opacity = 1 - hvfr;
      }
    } else {
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
      u = 0.5 - 0.5 * Math.cos(tip_fr);
      tips.style.opacity = Math.round(1E5 * Math.pow(u, 0.5)) / 1E5;
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
  } else {
    if (1600 < b - dead_mtm) {
      if (-1 == login_iv) {
        login_iv = -2;
        login.style.display = "inline";
        try {
          if ("1" != localStorage.edttsg) {
            cstx.style.display = "inline";
          } else {
            cskh.style.display = "inline";
          }
        } catch (y) {
        }
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
        e = Math.round(lgbsc * lgcsc * 1E5) / 1E5;
        if (1 == e) {
          trf(login, "");
        } else {
          trf(login, "scale(" + e + "," + e + ")");
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
            e = new Uint8Array(2);
            e[0] = 252;
          } else {
            e = new Uint8Array(2);
            e[0] = 108;
          }
          e[1] = v;
          ws.send(e);
          snake.eang -= mamu * v * snake.scang * snake.spang;
        } else {
          if (0 < kd_r_frb) {
            v = kd_r_frb;
            if (127 < v) {
              v = 127;
            }
            kd_r_frb -= v;
            if (5 <= protocol_version) {
              v += 128;
              e = new Uint8Array(2);
              e[0] = 252;
            } else {
              e = new Uint8Array(2);
              e[0] = 114;
            }
            e[1] = v;
            snake.eang += mamu * v * snake.scang * snake.spang;
            ws.send(e);
          }
        }
      }
    }
    if (!wfpr) {
      if (250 < b - last_ping_mtm) {
        last_ping_mtm = b;
        wfpr = true;
        e = new Uint8Array(1);
        e[0] = 5 <= protocol_version ? 251 : 112;
        ws.send(e);
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
      h = [];
      trdps += rdps;
      if (playing) {
        tcsecs++;
      }
      h.push("FPS: " + fps);
      h.push("sectors: " + sectors.length);
      h.push("foods: " + foods_c);
      h.push("bytes/sec: " + rdps);
      h.push("bytes/sec avg: " + Math.round(trdps / tcsecs));
      h.push("");
      e = c = 0;
      for (;e < rdpspc.length;e++) {
        if (0 <= rdpspc[e]) {
          c += rdpspc[e];
        }
      }
      e = 0;
      for (;e < rdpspc.length;e++) {
        if (0 <= rdpspc[e]) {
          h.push(String.fromCharCode(e) + ": " + rdpspc[e] + " (" + Math.round(rdpspc[e] / c * 1E3) / 10 + "%)");
        }
      }
      h.push("total: " + c);
      maxp = pf_ep = pf_nap = pf_remove = pf_new_add = pf_add = 0;
      h.push("");
      e = 1;
      for (;e < pfs.length;e++) {
        if (0 != pfs[e]) {
          h.push(e + ": " + Math.round(1E3 * pfs[e]) / 1E3);
          pfs[e] = 0;
        }
      }
      pft = 0;
      pfd.innerHTML = h.join("<br>");
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
        } else {
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
        } else {
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
            e = new Uint8Array(1);
            e[0] = sang & 255;
            lpstm = b;
            ws.send(e.buffer);
          }
        } else {
          sang = Math.floor(16777215 * ang / pi2);
          if (sang != lsang) {
            lsang = sang;
            e = new Uint8Array(4);
            e[0] = 101;
            e[1] = sang >> 16 & 255;
            e[2] = sang >> 8 & 255;
            e[3] = sang & 255;
            lpstm = b;
            ws.send(e.buffer);
          }
        }
      }
    }
  }
  if (!choosing_skin) {
    e = snakes.length - 1;
    for (;0 <= e;e--) {
      c = snakes[e];
      q = mamu * vfr * c.scang * c.spang;
      b = c.sp * vfr / 4;
      if (b > c.msl) {
        b = c.msl;
      }
      if (!c.dead) {
        if (c.tsp != c.sp) {
          if (c.tsp < c.sp) {
            c.tsp += 0.3 * vfr;
            if (c.tsp > c.sp) {
              c.tsp = c.sp;
            }
          } else {
            c.tsp -= 0.3 * vfr;
            if (c.tsp < c.sp) {
              c.tsp = c.sp;
            }
          }
        }
        if (c.tsp > c.fsp) {
          c.sfr += (c.tsp - c.fsp) * vfr * 0.021;
        }
        if (0 < c.fltg) {
          h = vfrb;
          if (h > c.fltg) {
            h = c.fltg;
          }
          c.fltg -= h;
          qq = 0;
          for (;qq < h;qq++) {
            c.fl = c.fls[c.flpos];
            c.fls[c.flpos] = 0;
            c.flpos++;
            if (c.flpos >= lfc) {
              c.flpos = 0;
            }
          }
        } else {
          if (0 == c.fltg) {
            c.fltg = -1;
            c.fl = 0;
          }
        }
        c.cfl = c.tl + c.fl;
      }
      if (1 == c.dir) {
        c.ang -= q;
        if (0 > c.ang || c.ang >= pi2) {
          c.ang %= pi2;
        }
        if (0 > c.ang) {
          c.ang += pi2;
        }
        h = (c.wang - c.ang) % pi2;
        if (0 > h) {
          h += pi2;
        }
        if (h > Math.PI) {
          h -= pi2;
        }
        if (0 < h) {
          c.ang = c.wang;
          c.dir = 0;
        }
      } else {
        if (2 == c.dir) {
          c.ang += q;
          if (0 > c.ang || c.ang >= pi2) {
            c.ang %= pi2;
          }
          if (0 > c.ang) {
            c.ang += pi2;
          }
          h = (c.wang - c.ang) % pi2;
          if (0 > h) {
            h += pi2;
          }
          if (h > Math.PI) {
            h -= pi2;
          }
          if (0 > h) {
            c.ang = c.wang;
            c.dir = 0;
          }
        } else {
          c.ang = c.wang;
        }
      }
      if (1 != c.ehl) {
        c.ehl += 0.03 * vfr;
        if (1 <= c.ehl) {
          c.ehl = 1;
        }
      }
      q = c.pts[c.pts.length - 1];
      c.wehang = Math.atan2(c.yy + c.fy - q.yy - q.fy + q.eby * (1 - c.ehl), c.xx + c.fx - q.xx - q.fx + q.ebx * (1 - c.ehl));
      if (!c.dead) {
        if (!(c.ehang == c.wehang)) {
          h = (c.wehang - c.ehang) % pi2;
          if (0 > h) {
            h += pi2;
          }
          if (h > Math.PI) {
            h -= pi2;
          }
          if (0 > h) {
            c.edir = 1;
          } else {
            if (0 < h) {
              c.edir = 2;
            }
          }
        }
      }
      if (1 == c.edir) {
        c.ehang -= 0.1 * vfr;
        if (0 > c.ehang || c.ehang >= pi2) {
          c.ehang %= pi2;
        }
        if (0 > c.ehang) {
          c.ehang += pi2;
        }
        h = (c.wehang - c.ehang) % pi2;
        if (0 > h) {
          h += pi2;
        }
        if (h > Math.PI) {
          h -= pi2;
        }
        if (0 < h) {
          c.ehang = c.wehang;
          c.edir = 0;
        }
      } else {
        if (2 == c.edir) {
          c.ehang += 0.1 * vfr;
          if (0 > c.ehang || c.ehang >= pi2) {
            c.ehang %= pi2;
          }
          if (0 > c.ehang) {
            c.ehang += pi2;
          }
          h = (c.wehang - c.ehang) % pi2;
          if (0 > h) {
            h += pi2;
          }
          if (h > Math.PI) {
            h -= pi2;
          }
          if (0 > h) {
            c.ehang = c.wehang;
            c.edir = 0;
          }
        }
      }
      if (!c.dead) {
        c.xx += Math.cos(c.ang) * b;
        c.yy += Math.sin(c.ang) * b;
        c.chl += b / c.msl;
      }
      if (0 < vfrb) {
        u = c.pts.length - 1;
        for (;0 <= u;u--) {
          q = c.pts[u];
          if (q.dying) {
            q.da += 0.0015 * vfrb;
            if (1 < q.da) {
              c.pts.splice(u, 1);
              q.dying = false;
              points_dp.add(q);
            }
          }
        }
        u = c.pts.length - 1;
        for (;0 <= u;u--) {
          if (q = c.pts[u], 0 < q.eiu) {
            fy = fx = 0;
            qq = cm1 = q.eiu - 1;
            for (;0 <= qq;qq--) {
              q.efs[qq] = 2 == q.ems[qq] ? q.efs[qq] + vfrb2 : q.efs[qq] + vfrb;
              h = q.efs[qq];
              if (h >= hfc) {
                if (qq != cm1) {
                  q.exs[qq] = q.exs[cm1];
                  q.eys[qq] = q.eys[cm1];
                  q.efs[qq] = q.efs[cm1];
                  q.ems[qq] = q.ems[cm1];
                }
                q.eiu--;
                cm1--;
              } else {
                fx += q.exs[qq] * hfas[h];
                fy += q.eys[qq] * hfas[h];
              }
            }
            q.fx = fx;
            q.fy = fy;
          }
        }
      }
      b = 2.3 * Math.cos(c.eang);
      h = 2.3 * Math.sin(c.eang);
      if (c.rex < b) {
        c.rex += vfr / 6;
        if (c.rex >= b) {
          c.rex = b;
        }
      }
      if (c.rey < h) {
        c.rey += vfr / 6;
        if (c.rey >= h) {
          c.rey = h;
        }
      }
      if (c.rex > b) {
        c.rex -= vfr / 6;
        if (c.rex <= b) {
          c.rex = b;
        }
      }
      if (c.rey > h) {
        c.rey -= vfr / 6;
        if (c.rey <= h) {
          c.rey = h;
        }
      }
      if (0 < vfrb) {
        if (0 < c.ftg) {
          h = vfrb;
          if (h > c.ftg) {
            h = c.ftg;
          }
          c.ftg -= h;
          qq = 0;
          for (;qq < h;qq++) {
            c.fx = c.fxs[c.fpos];
            c.fy = c.fys[c.fpos];
            c.fchl = c.fchls[c.fpos];
            c.fxs[c.fpos] = 0;
            c.fys[c.fpos] = 0;
            c.fchls[c.fpos] = 0;
            c.fpos++;
            if (c.fpos >= rfc) {
              c.fpos = 0;
            }
          }
        } else {
          if (0 == c.ftg) {
            c.ftg = -1;
            c.fx = 0;
            c.fy = 0;
            c.fchl = 0;
          }
        }
        if (0 < c.fatg) {
          h = vfrb;
          if (h > c.fatg) {
            h = c.fatg;
          }
          c.fatg -= h;
          qq = 0;
          for (;qq < h;qq++) {
            c.fa = c.fas[c.fapos];
            c.fas[c.fapos] = 0;
            c.fapos++;
            if (c.fapos >= afc) {
              c.fapos = 0;
            }
          }
        } else {
          if (0 == c.fatg) {
            c.fatg = -1;
            c.fa = 0;
          }
        }
      }
      if (c.dead) {
        c.dead_amt += 0.02 * vfr;
        if (1 <= c.dead_amt) {
          snakes.splice(e, 1);
        }
      } else {
        if (1 != c.alive_amt) {
          c.alive_amt += 0.015 * vfr;
          if (1 <= c.alive_amt) {
            c.alive_amt = 1;
          }
        }
      }
    }
  }
  e = preys.length - 1;
  for (;0 <= e;e--) {
    u = preys[e];
    q = mamu2 * vfr;
    b = u.sp * vfr / 4;
    if (0 < vfrb) {
      if (0 < u.ftg) {
        h = vfrb;
        if (h > u.ftg) {
          h = u.ftg;
        }
        u.ftg -= h;
        qq = 1;
        for (;qq <= h;qq++) {
          if (qq == h) {
            u.fx = u.fxs[u.fpos];
            u.fy = u.fys[u.fpos];
          }
          u.fxs[u.fpos] = 0;
          u.fys[u.fpos] = 0;
          u.fpos++;
          if (u.fpos >= rfc) {
            u.fpos = 0;
          }
        }
      } else {
        if (0 == u.ftg) {
          u.fx = 0;
          u.fy = 0;
          u.ftg = -1;
        }
      }
    }
    if (1 == u.dir) {
      u.ang -= q;
      if (0 > u.ang || u.ang >= pi2) {
        u.ang %= pi2;
      }
      if (0 > u.ang) {
        u.ang += pi2;
      }
      h = (u.wang - u.ang) % pi2;
      if (0 > h) {
        h += pi2;
      }
      if (h > Math.PI) {
        h -= pi2;
      }
      if (0 < h) {
        u.ang = u.wang;
        u.dir = 0;
      }
    } else {
      if (2 == u.dir) {
        u.ang += q;
        if (0 > u.ang || u.ang >= pi2) {
          u.ang %= pi2;
        }
        if (0 > u.ang) {
          u.ang += pi2;
        }
        h = (u.wang - u.ang) % pi2;
        if (0 > h) {
          h += pi2;
        }
        if (h > Math.PI) {
          h -= pi2;
        }
        if (0 > h) {
          u.ang = u.wang;
          u.dir = 0;
        }
      } else {
        u.ang = u.wang;
      }
    }
    u.xx += Math.cos(u.ang) * b;
    u.yy += Math.sin(u.ang) * b;
    u.gfr += vfr * u.gr;
    if (u.eaten) {
      if (1.5 != u.fr) {
        u.fr += vfr / 150;
        if (1.5 <= u.fr) {
          u.fr = 1.5;
        }
      }
      u.eaten_fr += vfr / 47;
      u.gfr += vfr;
      c = u.eaten_by;
      if (1 <= u.eaten_fr || !c) {
        preys.splice(e, 1);
      } else {
        u.eaten_fr4 = Math.pow(u.eaten_fr, 4);
        u.rad = 1 - Math.pow(u.eaten_fr, 3);
      }
    } else {
      if (1 != u.fr) {
        u.fr += vfr / 150;
        if (1 <= u.fr) {
          u.fr = 1;
          u.rad = 1;
        } else {
          u.rad = 0.5 * (1 - Math.cos(Math.PI * u.fr));
          u.rad += 0.66 * (0.5 * (1 - Math.cos(Math.PI * u.rad)) - u.rad);
        }
      }
    }
  }
  e = cm1 = foods_c - 1;
  for (;0 <= e;e--) {
    b = foods[e];
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
      c = b.eaten_by;
      if (1 <= b.eaten_fr || !c) {
        if (e == cm1) {
          foods[e] = null;
        } else {
          foods[e] = foods[cm1];
          foods[cm1] = null;
        }
        foods_c--;
        cm1--;
      } else {
        c = b.eaten_by;
        h = b.eaten_fr * b.eaten_fr;
        b.eaten_fr4 = h * h;
        b.rad = 1 - b.eaten_fr * h;
        b.rx = b.xx + (c.xx + c.fx + Math.cos(c.ang + c.fa) * (43 - 24 * h) * (1 - h) - b.xx) * h;
        b.ry = b.yy + (c.yy + c.fy + Math.sin(c.ang + c.fa) * (43 - 24 * h) * (1 - h) - b.yy) * h;
        b.rx += 6 * Math.cos(b.wsp * b.gfr) * (1 - b.eaten_fr);
        b.ry += 6 * Math.sin(b.wsp * b.gfr) * (1 - b.eaten_fr);
      }
    } else {
      if (1 != b.fr) {
        b.fr += b.rsp * vfr / 150;
        if (1 <= b.fr) {
          b.fr = 1;
          b.rad = 1;
        } else {
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
      var q = 0.5 + 0.4 / Math.max(1, (snake.sct + 16) / 36);
      if (gsc != q) {
        if (gsc < q) {
          gsc += 2E-4;
          if (gsc >= q) {
            gsc = q;
          }
        } else {
          gsc -= 2E-4;
          if (gsc <= q) {
            gsc = q;
          }
        }
      }
    }
    q = view_xx;
    var f = view_yy;
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
    bgx2 -= 1 * (view_xx - q) / bgw2;
    bgy2 -= 1 * (view_yy - f) / bgh2;
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
    } else {
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
      q = sectors.length - 1;
      for (;0 <= q;q--) {
        f = sectors[q];
        b.fillStyle = "rgba(0, 255, 0, .1)";
        b.fillRect(mww2 + (f.xx * sector_size - view_xx) * gsc, mhh2 + (f.yy * sector_size - view_yy) * gsc, sector_size * gsc - 4, sector_size * gsc - 4);
      }
    }
    if (high_quality || 0 < gla) {
      var h = 1.75;
      if (1 != gla) {
        h = 1.75 * gla;
      }
      b.save();
      q = foods_c - 1;
      for (;0 <= q;q--) {
        f = foods[q];
        if (f.rx >= fpx1) {
          if (f.ry >= fpy1) {
            if (f.rx <= fpx2) {
              if (f.ry <= fpy2) {
                if (1 == f.rad) {
                  A = mww2 + gsc * (f.rx - view_xx) - f.ofw2;
                  t = mhh2 + gsc * (f.ry - view_yy) - f.ofh2;
                  if (-50 <= A) {
                    if (-50 <= t) {
                      if (A <= mwwp50) {
                        if (t <= mhhp50) {
                          b.globalAlpha = h * f.fr;
                          b.drawImage(f.ofi, A, t);
                        }
                      }
                    }
                  }
                } else {
                  A = mww2 + gsc * (f.rx - view_xx) - f.ofw2 * f.rad;
                  t = mhh2 + gsc * (f.ry - view_yy) - f.ofh2 * f.rad;
                  if (-50 <= A) {
                    if (-50 <= t) {
                      if (A <= mwwp50) {
                        if (t <= mhhp50) {
                          b.globalAlpha = h * f.fr;
                          b.drawImage(f.ofi, 0, 0, f.ofw, f.ofh, A, t, f.ofw * f.rad, f.ofh * f.rad);
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
      h = 0.75;
      if (1 != gla) {
        h = 0.75 * gla;
      }
      var u = 0.75;
      if (1 != gla) {
        u = 1 - 0.25 * gla;
      }
      q = foods_c - 1;
      for (;0 <= q;q--) {
        f = foods[q];
        if (f.rx >= fpx1) {
          if (f.ry >= fpy1) {
            if (f.rx <= fpx2) {
              if (f.ry <= fpy2) {
                if (1 == f.rad) {
                  A = mww2 + gsc * (f.rx - view_xx) - f.fw2;
                  t = mhh2 + gsc * (f.ry - view_yy) - f.fh2;
                  if (-50 <= A) {
                    if (-50 <= t) {
                      if (A <= mwwp50) {
                        if (t <= mhhp50) {
                          b.globalAlpha = u * f.fr;
                          b.drawImage(f.fi, A, t);
                          b.globalAlpha = h * (0.5 + 0.5 * Math.cos(f.gfr / 13)) * f.fr;
                          b.drawImage(f.fi, A, t);
                        }
                      }
                    }
                  }
                } else {
                  A = mww2 + gsc * (f.rx - view_xx) - f.fw2 * f.rad;
                  t = mhh2 + gsc * (f.ry - view_yy) - f.fh2 * f.rad;
                  if (-50 <= A) {
                    if (-50 <= t) {
                      if (A <= mwwp50) {
                        if (t <= mhhp50) {
                          b.globalAlpha = u * f.fr;
                          b.drawImage(f.fi, 0, 0, f.fw, f.fh, A, t, f.fw * f.rad, f.fh * f.rad);
                          b.globalAlpha = h * (0.5 + 0.5 * Math.cos(f.gfr / 13)) * f.fr;
                          b.drawImage(f.fi, 0, 0, f.fw, f.fh, A, t, f.fw * f.rad, f.fh * f.rad);
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
    } else {
      q = foods_c - 1;
      for (;0 <= q;q--) {
        f = foods[q];
        if (f.rx >= fpx1) {
          if (f.ry >= fpy1) {
            if (f.rx <= fpx2) {
              if (f.ry <= fpy2) {
                if (1 == f.rad) {
                  A = mww2 + gsc * (f.rx - view_xx) - f.fw2;
                  t = mhh2 + gsc * (f.ry - view_yy) - f.fh2;
                  if (-50 <= A) {
                    if (-50 <= t) {
                      if (A <= mwwp50) {
                        if (t <= mhhp50) {
                          b.globalAlpha = f.fr;
                          b.drawImage(f.fi, A, t);
                        }
                      }
                    }
                  }
                } else {
                  A = mww2 + gsc * (f.rx - view_xx) - f.fw2 * f.rad;
                  t = mhh2 + gsc * (f.ry - view_yy) - f.fh2 * f.rad;
                  if (-50 <= A) {
                    if (-50 <= t) {
                      if (A <= mwwp50) {
                        if (t <= mhhp50) {
                          b.globalAlpha = f.fr;
                          b.drawImage(f.fi, 0, 0, f.fw, f.fh, A, t, f.fw * f.rad, f.fh * f.rad);
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
    q = preys.length - 1;
    for (;0 <= q;q--) {
      if (h = preys[q], c = h.xx + h.fx, y = h.yy + h.fy, px = mww2 + gsc * (c - view_xx), py = mhh2 + gsc * (y - view_yy), -50 <= px && (-50 <= py && (px <= mwwp50 && py <= mhhp50))) {
        if (h.eaten) {
          f = h.eaten_by;
          var e = Math.pow(h.eaten_fr, 2);
          var c = c + (f.xx + f.fx + Math.cos(f.ang + f.fa) * (43 - 24 * e) * (1 - e) - c) * e;
          var y = y + (f.yy + f.fy + Math.sin(f.ang + f.fa) * (43 - 24 * e) * (1 - e) - y) * e;
          px = mww2 + gsc * (c - view_xx);
          py = mhh2 + gsc * (y - view_yy);
        }
        if (1 == h.rad) {
          A = px - h.fw2;
          t = py - h.fh2;
          b.globalAlpha = 0.75 * h.fr;
          b.drawImage(h.fi, A, t);
          b.globalAlpha = 0.75 * (0.5 + 0.5 * Math.cos(h.gfr / 13)) * h.fr;
          b.drawImage(h.fi, A, t);
        } else {
          A = px - h.fw2 * h.rad;
          t = py - h.fh2 * h.rad;
          b.globalAlpha = 0.75 * h.fr;
          b.drawImage(h.fi, 0, 0, h.fw, h.fh, A, t, h.fw * h.rad, h.fh * h.rad);
          b.globalAlpha = 0.75 * (0.5 + 0.5 * Math.cos(h.gfr / 13)) * h.fr;
          b.drawImage(h.fi, 0, 0, h.fw, h.fh, A, t, h.fw * h.rad, h.fh * h.rad);
        }
      }
    }
    b.restore();
    b.save();
    b.strokeStyle = "#90C098";
    var E;
    q = snakes.length - 1;
    for (;0 <= q;q--) {
      f = snakes[q];
      c = f.xx + f.fx;
      y = f.yy + f.fy + 40;
      if (0 < f.na) {
        if (c >= bpx1 - 100) {
          if (y >= bpy1) {
            if (c <= bpx2 + 100) {
              if (y <= bpy2) {
                if (f == snake) {
                  f.fnfr++;
                  if (200 < f.fnfr) {
                    f.na -= 0.004;
                    if (0 > f.na) {
                      f.na = 0;
                    }
                  }
                }
                b.save();
                b.globalAlpha = 0.5 * f.na * f.alive_amt * (1 - f.dead_amt);
                b.font = "12px Arial, Helvetica Neue, Helvetica, sans-serif";
                b.fillStyle = f.csw;
                b.textBaseline = "middle";
                b.textAlign = "center";
                h = f.xx + f.fx;
                u = f.yy + f.fy;
                h = mww2 + (h - view_xx) * gsc;
                u = mhh2 + (u - view_yy) * gsc;
                b.fillText(f.nk, h, u + 32 + 7 * f.sc * gsc);
                b.restore();
              }
            }
          }
        }
      }
    }
    q = snakes.length - 1;
    for (;0 <= q;q--) {
      f = snakes[q];
      f.iiv = false;
      x = f.pts.length - 1;
      for (;0 <= x;x--) {
        if (c = f.pts[x], px = c.xx + c.fx, py = c.yy + c.fy, px >= bpx1 && (py >= bpy1 && (px <= bpx2 && py <= bpy2))) {
          f.iiv = true;
          break;
        }
      }
    }
    q = snakes.length - 1;
    for (;0 <= q;q--) {
      if (f = snakes[q], f.iiv) {
        h = f.xx + f.fx;
        u = f.yy + f.fy;
        px = h;
        py = u;
        E = f.ehang;
        var B = f.sc;
        var w = 29 * B;
        var D = f.cfl;
        c = f.pts[f.pts.length - 1];
        if (1 == render_mode) {
          b.save();
          b.beginPath();
          b.moveTo(mww2 + (px - view_xx) * gsc, mhh2 + (py - view_yy) * gsc);
          y = false;
          var x = f.pts.length - 1;
          for (;0 <= x;x--) {
            c = f.pts[x];
            lpx = px;
            lpy = py;
            px = c.xx;
            py = c.yy;
            var A = c.fx;
            var t = c.fy;
            if (0 < D) {
              px += A;
              py += t;
              lax = ax;
              lay = ay;
              ax = (px + lpx) / 2;
              ay = (py + lpy) / 2;
              if (!y) {
                lax = ax;
                lay = ay;
              }
              if (1 > D) {
                e = 1 - D;
                lpx += (lax - lpx) * e;
                lpy += (lay - lpy) * e;
                ax += (lax - ax) * e;
                ay += (lay - ay) * e;
              }
              if (y) {
                D--;
              } else {
                D -= f.chl + f.fchl;
              }
              if (y) {
                b.quadraticCurveTo(mww2 + (lpx - view_xx) * gsc, mhh2 + (lpy - view_yy) * gsc, mww2 + (ax - view_xx) * gsc, mhh2 + (ay - view_yy) * gsc);
              } else {
                b.lineTo(mww2 + (ax - view_xx) * gsc, mhh2 + (ay - view_yy) * gsc);
                y = true;
              }
            }
          }
          b.save();
          b.lineJoin = "round";
          b.lineCap = "round";
          if (is_firefox) {
            if (f.sp > f.fsp) {
              x = f.alive_amt * (1 - f.dead_amt) * Math.max(0, Math.min(1, (f.sp - f.ssp) / (f.msp - f.ssp)));
              b.save();
              b.strokeStyle = f.cs;
              b.globalAlpha = 0.3 * x;
              b.lineWidth = (w + 6) * gsc;
              b.stroke();
              b.lineWidth = (w + 9) * gsc;
              b.stroke();
              b.lineWidth = (w + 12) * gsc;
              b.stroke();
              b.restore();
            }
            b.globalAlpha = 1 * f.alive_amt * (1 - f.dead_amt);
            b.strokeStyle = "#000000";
            b.lineWidth = (w + 5) * gsc;
          } else {
            if (f.sp > f.fsp) {
              x = f.alive_amt * (1 - f.dead_amt) * Math.max(0, Math.min(1, (f.sp - f.ssp) / (f.msp - f.ssp)));
              b.save();
              b.lineWidth = (w - 2) * gsc;
              b.shadowBlur = 30 * gsc;
              b.shadowColor = "rgba(" + f.rr + "," + f.gg + "," + f.bb + ", " + Math.round(1E4 * x) / 1E4 + ")";
              b.stroke();
              b.stroke();
              b.restore();
            }
            b.globalAlpha = 0.4 * f.alive_amt * (1 - f.dead_amt);
            b.strokeStyle = "#000000";
            b.lineWidth = (w + 5) * gsc;
            b.stroke();
            b.strokeStyle = f.cs;
            b.lineWidth = w * gsc;
            b.strokeStyle = "#000000";
            b.globalAlpha = 1 * f.alive_amt * (1 - f.dead_amt);
          }
          b.stroke();
          b.strokeStyle = f.cs;
          b.globalAlpha = 0.8 * f.alive_amt * (1 - f.dead_amt);
          b.lineWidth = w * gsc;
          b.stroke();
          b.restore();
          b.strokeStyle = f.cs;
          if (f.dead) {
            t = (0.5 + 0.5 * Math.abs(Math.sin(5 * Math.PI * f.dead_amt))) * Math.sin(Math.PI * f.dead_amt);
            b.save();
            b.lineJoin = "round";
            b.lineCap = "round";
            b.globalCompositeOperation = "lighter";
            b.lineWidth = (w - 3) * gsc;
            b.globalAlpha = t;
            b.strokeStyle = "#FFCC99";
            b.stroke();
            b.restore();
          }
          b.restore();
        }
        if (2 == render_mode) {
          w = 0.5 * w;
          var H;
          var z;
          var L;
          var I;
          var C;
          var K;
          var M;
          var O;
          A = 0;
          px = h;
          py = u;
          C = px;
          K = py;
          if (C >= bpx1 && (K >= bpy1 && (C <= bpx2 && K <= bpy2))) {
            pbx[0] = C;
            pby[0] = K;
            pba[0] = Math.atan2(u - (c.yy + c.fy), h - (c.xx + c.fx)) + Math.PI;
            pbu[0] = 1;
          } else {
            pbu[0] = 0;
          }
          A = 1;
          n = (f.chl + f.fchl) % 0.25;
          if (0 > n) {
            n += 0.25;
          }
          n = 0.25 - n;
          D += 1 - 0.25 * Math.ceil((f.chl + f.fchl) / 0.25);
          ax = px;
          ay = py;
          if (f.sep != f.wsep) {
            if (f.sep < f.wsep) {
              f.sep += 0.01;
              if (f.sep >= f.wsep) {
                f.sep = f.wsep;
              }
            } else {
              if (f.sep > f.wsep) {
                f.sep -= 0.01;
                if (f.sep <= f.wsep) {
                  f.sep = f.wsep;
                }
              }
            }
          }
          var N = f.sep * qsm;
          var J = 0;
          t = per_color_imgs[f.cv].kmcs;
          var F;
          var G;
          x = f.pts.length - 1;
          for (;0 <= x;x--) {
            if (c = f.pts[x], lpx = px, lpy = py, px = c.xx + c.fx, py = c.yy + c.fy, -0.25 < D) {
              L = C;
              I = K;
              C = (px + lpx) / 2;
              K = (py + lpy) / 2;
              M = lpx;
              O = lpy;
              e = 0;
              for (;1 > e;e += 0.25) {
                F = n + e;
                c = L + (M - L) * F;
                y = I + (O - I) * F;
                H = M + (C - M) * F;
                z = O + (K - O) * F;
                lax = ax;
                lay = ay;
                ax = c + (H - c) * F;
                ay = y + (z - y) * F;
                if (0 > D) {
                  ax += -(lax - ax) * D / 0.25;
                  ay += -(lay - ay) * D / 0.25;
                }
                H = Math.sqrt(Math.pow(ax - lax, 2) + Math.pow(ay - lay, 2));
                if (J + H < N) {
                  J += H;
                } else {
                  J = -J;
                  F = (H - J) / N;
                  for (;1 <= F;F--) {
                    J += N;
                    pax = lax + (ax - lax) * J / H;
                    pay = lay + (ay - lay) * J / H;
                    if (pax >= bpx1 && (pay >= bpy1 && (pax <= bpx2 && pay <= bpy2))) {
                      pbx[A] = pax;
                      pby[A] = pay;
                      pbu[A] = 1;
                      c = ax - lax;
                      y = ay - lay;
                      pba[A] = -15 <= c && (-15 <= y && (15 > c && 15 > y)) ? at2lt[8 * y + 128 << 8 | 8 * c + 128] : -127 <= c && (-127 <= y && (127 > c && 127 > y)) ? at2lt[y + 128 << 8 | c + 128] : Math.atan2(y, c);
                    } else {
                      pbu[A] = 0;
                    }
                    A++;
                  }
                  J = H - J;
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
            pbu[A] = 1;
            pbx[A] = ax;
            pby[A] = ay;
            pba[A] = Math.atan2(ay - lay, ax - lax);
          } else {
            pbu[A] = 0;
          }
          A++;
          b.save();
          b.translate(mww2, mhh2);
          e = gsc * w * 52 / 32;
          C = gsc * w * 62 / 32;
          D = f.alive_amt * (1 - f.dead_amt);
          D *= D;
          F = 1;
          if (f.tsp > f.fsp) {
            F = f.alive_amt * (1 - f.dead_amt) * Math.max(0, Math.min(1, (f.tsp - f.ssp) / (f.msp - f.ssp)));
            G = 0.37 * F;
            y = Math.pow(F, 0.5);
            J = gsc * w * (1 + 0.9375 * y);
            c = per_color_imgs[f.cv].kfmc;
            b.save();
            b.globalCompositeOperation = "lighter";
            if (f.rbcs) {
              K = f.rbcs;
              N = K.length;
              x = A - 1;
              for (;0 <= x;x--) {
                if (1 == pbu[x]) {
                  px = pbx[x];
                  py = pby[x];
                  c = per_color_imgs[K[x % N]];
                  c = c.kfmc;
                  b.save();
                  b.globalAlpha = D * y * 0.38 * (0.6 + 0.4 * Math.cos(x / 4 - 1.15 * f.sfr));
                  b.translate((px - view_xx) * gsc, (py - view_yy) * gsc);
                  b.drawImage(c, -J, -J, 2 * J, 2 * J);
                  b.restore();
                }
              }
            } else {
              x = A - 1;
              for (;0 <= x;x--) {
                if (1 == pbu[x]) {
                  px = pbx[x];
                  py = pby[x];
                  b.save();
                  b.globalAlpha = D * y * 0.38 * (0.6 + 0.4 * Math.cos(x / 4 - 1.15 * f.sfr));
                  b.translate((px - view_xx) * gsc, (py - view_yy) * gsc);
                  b.drawImage(c, -J, -J, 2 * J, 2 * J);
                  b.restore();
                }
              }
            }
            b.restore();
            F = 1 - F;
          }
          F *= D;
          if (high_quality || 0 < gla) {
            c = F;
            if (1 != gla) {
              c = F * gla;
            }
            b.globalAlpha = c;
            x = A - 1;
            for (;0 <= x;x--) {
              if (1 == pbu[x]) {
                px = pbx[x];
                py = pby[x];
                b.save();
                b.translate((px - view_xx) * gsc, (py - view_yy) * gsc);
                b.drawImage(komc, -e, -e, 2 * e, 2 * e);
                if (9 > x) {
                  b.globalAlpha = c * (1 - x / 9);
                  b.drawImage(ksmc, -C, -C, 2 * C, 2 * C);
                  b.globalAlpha = c;
                }
                b.restore();
              }
            }
          }
          b.globalAlpha = F;
          if (f.rbcs) {
            K = f.rbcs;
            N = K.length;
            x = A - 1;
            for (;0 <= x;x--) {
              if (1 == pbu[x]) {
                px = pbx[x];
                py = pby[x];
                if (2 <= x) {
                  e = x - 2;
                  if (1 == pbu[e]) {
                    c = pbx[e];
                    y = pby[e];
                    b.save();
                    b.translate((c - view_xx) * gsc, (y - view_yy) * gsc);
                    b.globalAlpha = 9 > e ? e / 9 * F : F;
                    b.drawImage(ksmc, -C, -C, 2 * C, 2 * C);
                    b.restore();
                  }
                }
                b.save();
                b.globalAlpha = D;
                b.translate((px - view_xx) * gsc, (py - view_yy) * gsc);
                b.rotate(pba[x]);
                e = x % (2 * t.length);
                if (e >= t.length) {
                  e = 2 * t.length - (e + 1);
                }
                c = per_color_imgs[K[x % N]];
                b.drawImage(c.kmcs[e], -gsc * w, -gsc * w, 2 * gsc * w, 2 * gsc * w);
                b.restore();
              }
            }
            if (f.tsp > f.fsp && (high_quality || 0 < gla)) {
              b.save();
              b.globalCompositeOperation = "lighter";
              x = A - 1;
              for (;0 <= x;x--) {
                if (1 == pbu[x]) {
                  px = pbx[x];
                  py = pby[x];
                  b.save();
                  b.translate((px - view_xx) * gsc, (py - view_yy) * gsc);
                  b.rotate(pba[x]);
                  b.globalAlpha = D * G * gla * (0.5 + 0.5 * Math.cos(x / 4 - f.sfr));
                  e = x % (2 * t.length);
                  if (e >= t.length) {
                    e = 2 * t.length - (e + 1);
                  }
                  b.drawImage(per_color_imgs[K[x % N]].kmcs[e], -gsc * w, -gsc * w, 2 * gsc * w, 2 * gsc * w);
                  b.restore();
                }
              }
              b.restore();
            }
          } else {
            x = A - 1;
            for (;0 <= x;x--) {
              if (1 == pbu[x]) {
                px = pbx[x];
                py = pby[x];
                if (2 <= x) {
                  e = x - 2;
                  if (1 == pbu[e]) {
                    c = pbx[e];
                    y = pby[e];
                    b.save();
                    b.translate((c - view_xx) * gsc, (y - view_yy) * gsc);
                    b.globalAlpha = 9 > e ? e / 9 * F : F;
                    b.drawImage(ksmc, -C, -C, 2 * C, 2 * C);
                    b.restore();
                  }
                }
                b.save();
                b.globalAlpha = D;
                b.translate((px - view_xx) * gsc, (py - view_yy) * gsc);
                b.rotate(pba[x]);
                e = x % (2 * t.length);
                if (e >= t.length) {
                  e = 2 * t.length - (e + 1);
                }
                b.drawImage(t[e], -gsc * w, -gsc * w, 2 * gsc * w, 2 * gsc * w);
                b.restore();
              }
            }
            if (f.tsp > f.fsp && (high_quality || 0 < gla)) {
              b.save();
              b.globalCompositeOperation = "lighter";
              x = A - 1;
              for (;0 <= x;x--) {
                if (1 == pbu[x]) {
                  px = pbx[x];
                  py = pby[x];
                  e = x % (2 * t.length);
                  if (e >= t.length) {
                    e = 2 * t.length - (e + 1);
                  }
                  b.save();
                  b.translate((px - view_xx) * gsc, (py - view_yy) * gsc);
                  b.rotate(pba[x]);
                  b.globalAlpha = D * G * gla * (0.5 + 0.5 * Math.cos(x / 4 - f.sfr));
                  b.drawImage(t[e], -gsc * w, -gsc * w, 2 * gsc * w, 2 * gsc * w);
                  b.restore();
                }
              }
              b.restore();
            }
          }
          if (f.antenna && (2 <= A && 1 == pbu[1])) {
            f.atx[0] = pbx[1];
            f.aty[0] = pby[1];
            F = f.sc * gsc;
            fj = f.atx.length - 1;
            if (choosing_skin) {
              x = 1;
              for (;x <= fj;x++) {
                f.atvx[x] -= 0.3;
                f.atvy[x] += 0.14 * Math.cos(fr / 23 - 7 * x / fj);
              }
            }
            x = 1;
            for (;x <= fj;x++) {
              xx = f.atx[x - 1];
              yy = f.aty[x - 1];
              xx += 2 * Math.random() - 1;
              yy += 2 * Math.random() - 1;
              c = f.atx[x] - xx;
              y = f.aty[x] - yy;
              ang = -4 <= c && (-4 <= y && (4 > c && 4 > y)) ? at2lt[32 * y + 128 << 8 | 32 * c + 128] : -8 <= c && (-8 <= y && (8 > c && 8 > y)) ? at2lt[16 * y + 128 << 8 | 16 * c + 128] : -16 <= c && (-16 <= y && (16 > c && 16 > y)) ? at2lt[8 * y + 128 << 8 | 8 * c + 128] : -127 <= c && (-127 <= y && (127 > c && 127 > y)) ? at2lt[y + 128 << 8 | c + 128] : Math.atan2(y, c);
              xx += 4 * Math.cos(ang) * f.sc;
              yy += 4 * Math.sin(ang) * f.sc;
              f.atvx[x] += 0.1 * (xx - f.atx[x]);
              f.atvy[x] += 0.1 * (yy - f.aty[x]);
              f.atx[x] += f.atvx[x];
              f.aty[x] += f.atvy[x];
              f.atvx[x] *= 0.88;
              f.atvy[x] *= 0.88;
              c = f.atx[x] - f.atx[x - 1];
              y = f.aty[x] - f.aty[x - 1];
              H = Math.sqrt(c * c + y * y);
              if (H > 4 * f.sc) {
                ang = -4 <= c && (-4 <= y && (4 > c && 4 > y)) ? at2lt[32 * y + 128 << 8 | 32 * c + 128] : -8 <= c && (-8 <= y && (8 > c && 8 > y)) ? at2lt[16 * y + 128 << 8 | 16 * c + 128] : -16 <= c && (-16 <= y && (16 > c && 16 > y)) ? at2lt[8 * y + 128 << 8 | 8 * c + 128] : -127 <= c && (-127 <= y && (127 > c && 127 > y)) ? at2lt[y + 128 << 8 | c + 128] : Math.atan2(y, c);
                f.atx[x] = f.atx[x - 1] + 4 * Math.cos(ang) * f.sc;
                f.aty[x] = f.aty[x - 1] + 4 * Math.sin(ang) * f.sc;
              }
            }
            b.globalAlpha = D;
            b.strokeStyle = "#505050";
            b.lineWidth = 5 * F;
            b.lineCap = "round";
            b.lineJoin = "round";
            b.beginPath();
            fj = f.atx.length - 1;
            c = (f.atx[fj] - view_xx) * gsc;
            y = (f.aty[fj] - view_yy) * gsc;
            b.moveTo(c, y);
            x = fj - 1;
            for (;1 <= x;x--) {
              xx = (f.atx[x] - view_xx) * gsc;
              yy = (f.aty[x] - view_yy) * gsc;
              if (1 <= Math.abs(xx - c) + Math.abs(yy - y)) {
                c = xx;
                y = yy;
                b.lineTo(c, y);
              }
            }
            xx = (0.5 * (f.atx[1] + f.atx[0]) - view_xx) * gsc;
            yy = (0.5 * (f.aty[1] + f.aty[0]) - view_yy) * gsc;
            if (1 <= Math.abs(xx - c) + Math.abs(yy - y)) {
              c = xx;
              y = yy;
              b.lineTo(c, y);
            }
            b.stroke();
            b.globalAlpha = 0.5 * D;
            b.strokeStyle = "#FFFFFF";
            b.lineWidth = 4 * F;
            b.beginPath();
            fj = f.atx.length - 1;
            c = (f.atx[fj] - view_xx) * gsc;
            y = (f.aty[fj] - view_yy) * gsc;
            b.moveTo(c, y);
            x = fj - 1;
            for (;0 <= x;x--) {
              xx = (f.atx[x] - view_xx) * gsc;
              yy = (f.aty[x] - view_yy) * gsc;
              if (1 <= Math.abs(xx - c) + Math.abs(yy - y)) {
                c = xx;
                y = yy;
                b.lineTo(c, y);
              }
            }
            b.stroke();
            b.globalAlpha = D;
            b.drawImage(rabulb, (f.atx[fj] - view_xx - 10 * f.sc) * gsc, (f.aty[fj] - view_yy - 10 * f.sc) * gsc, 20 * F, 20 * F);
            b.globalAlpha = 0.5 * D;
            b.lineWidth = 3 * F;
            b.stroke();
            b.lineWidth = 2 * F;
            b.stroke();
          }
          if (f.dead) {
            b.save();
            b.globalCompositeOperation = "lighter";
            t = (0.15 + 0.15 * Math.abs(Math.sin(5 * Math.PI * f.dead_amt))) * Math.sin(Math.PI * f.dead_amt);
            w *= gsc;
            x = A - 1;
            for (;0 <= x;x--) {
              if (1 == pbu[x]) {
                px = pbx[x];
                py = pby[x];
                b.save();
                b.globalAlpha = t * (0.6 + 0.4 * Math.cos(x / 4 - 15 * f.dead_amt));
                b.translate((px - view_xx) * gsc, (py - view_yy) * gsc);
                b.drawImage(kdmc, -w, -w, 2 * w, 2 * w);
                b.restore();
              }
            }
            b.restore();
          }
          b.restore();
        }
        x = 1 == render_mode ? 4 * B : 6 * B;
        w = 6 * B;
        A = Math.cos(E) * x + Math.cos(E - Math.PI / 2) * (w + 0.5);
        t = Math.sin(E) * x + Math.sin(E - Math.PI / 2) * (w + 0.5);
        b.fillStyle = f.ec;
        b.globalAlpha = 0.75 * f.alive_amt;
        b.beginPath();
        b.arc(mww2 + (A + h - view_xx) * gsc, mhh2 + (t + u - view_yy) * gsc, f.er * B * gsc, 0, pi2);
        b.closePath();
        b.fill();
        b.globalAlpha = f.ppa;
        A = Math.cos(E) * (x + 0.5) + f.rex * B + Math.cos(E - Math.PI / 2) * w;
        t = Math.sin(E) * (x + 0.5) + f.rey * B + Math.sin(E - Math.PI / 2) * w;
        b.fillStyle = "#000000";
        b.beginPath();
        b.arc(mww2 + (A + h - view_xx) * gsc, mhh2 + (t + u - view_yy) * gsc, 3.5 * B * gsc, 0, pi2);
        b.closePath();
        b.fill();
        A = Math.cos(E) * x + Math.cos(E + Math.PI / 2) * (w + 0.5);
        t = Math.sin(E) * x + Math.sin(E + Math.PI / 2) * (w + 0.5);
        b.fillStyle = f.ec;
        b.globalAlpha = 0.75 * f.alive_amt;
        b.beginPath();
        b.arc(mww2 + (A + h - view_xx) * gsc, mhh2 + (t + u - view_yy) * gsc, f.er * B * gsc, 0, pi2);
        b.closePath();
        b.fill();
        b.globalAlpha = f.ppa;
        A = Math.cos(E) * (x + 0.5) + f.rex * B + Math.cos(E + Math.PI / 2) * w;
        t = Math.sin(E) * (x + 0.5) + f.rey * B + Math.sin(E + Math.PI / 2) * w;
        b.fillStyle = "#000000";
        b.beginPath();
        b.arc(mww2 + (A + h - view_xx) * gsc, mhh2 + (t + u - view_yy) * gsc, 3.5 * B * gsc, 0, pi2);
        b.closePath();
        b.fill();
        b.globalAlpha = 1;
      }
    }
    if (high_quality || 0 < gla) {
      b.save();
      b.globalCompositeOperation = "lighter";
      q = foods_c - 1;
      for (;0 <= q;q--) {
        f = foods[q];
        if (f.rx >= fpx1) {
          if (f.ry >= fpy1) {
            if (f.rx <= fpx2) {
              if (f.ry <= fpy2) {
                c = f.rx - view_xx;
                y = f.ry - view_yy;
                h = c * c + y * y;
                fs = 1 + 0.06 * f.rad;
                A = c * fs;
                t = y * fs;
                G = 0.005 + 0.09 * (1 - h / (86E3 + h));
                if (1 != f.rad) {
                  G *= Math.pow(f.rad, 0.25);
                }
                if (1 != gla) {
                  G *= gla;
                }
                A = A * gsc + mww2;
                t = t * gsc + mhh2;
                if (1 == f.rad) {
                  if (-150 <= A) {
                    if (-150 <= t) {
                      if (A <= mwwp150) {
                        if (t <= mhhp150) {
                          A -= f.gfw2;
                          t -= f.gfh2;
                          b.globalAlpha = G * f.fr;
                          b.drawImage(f.gfi, A, t);
                          b.globalAlpha = G * (0.5 + 0.5 * Math.cos(f.gfr / 13)) * f.fr;
                          b.drawImage(f.gfi, A, t);
                        }
                      }
                    }
                  }
                } else {
                  if (-150 <= A) {
                    if (-150 <= t) {
                      if (A <= mwwp150) {
                        if (t <= mhhp150) {
                          A -= f.gfw2 * f.rad;
                          t -= f.gfh2 * f.rad;
                          b.globalAlpha = G * f.fr;
                          b.drawImage(f.gfi, 0, 0, f.gfw, f.gfh, A, t, f.gfw * f.rad, f.gfh * f.rad);
                          b.globalAlpha = G * (0.5 + 0.5 * Math.cos(f.gfr / 13)) * f.fr;
                          b.drawImage(f.gfi, 0, 0, f.gfw, f.gfh, A, t, f.gfw * f.rad, f.gfh * f.rad);
                        }
                      }
                    }
                  }
                }
                fs = 1 + 0.32 * f.rad;
                A = c * fs;
                t = y * fs;
                G = 0.085 * (1 - h / (16500 + h));
                if (1 != f.rad) {
                  G *= Math.pow(f.rad, 0.25);
                }
                if (1 != gla) {
                  G *= gla;
                }
                A = A * gsc + mww2;
                t = t * gsc + mhh2;
                if (1 == f.rad) {
                  if (-150 <= A) {
                    if (-150 <= t) {
                      if (A <= mwwp150) {
                        if (t <= mhhp150) {
                          A -= f.g2fw2;
                          t -= f.g2fh2;
                          b.globalAlpha = G * f.fr;
                          b.drawImage(f.g2fi, A, t);
                          b.globalAlpha = G * (0.5 + 0.5 * Math.cos(f.gfr / 13)) * f.fr;
                          b.drawImage(f.g2fi, A, t);
                        }
                      }
                    }
                  }
                } else {
                  if (-150 <= A) {
                    if (-150 <= t) {
                      if (A <= mwwp150) {
                        if (t <= mhhp150) {
                          A -= f.g2fw2 * f.rad;
                          t -= f.g2fh2 * f.rad;
                          b.globalAlpha = G * f.fr;
                          b.drawImage(f.g2fi, 0, 0, f.g2fw, f.g2fh, A, t, f.g2fw * f.rad, f.g2fh * f.rad);
                          b.globalAlpha = G * (0.5 + 0.5 * Math.cos(f.gfr / 13)) * f.fr;
                          b.drawImage(f.g2fi, 0, 0, f.g2fw, f.g2fh, A, t, f.g2fw * f.rad, f.g2fh * f.rad);
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
    q = preys.length - 1;
    for (;0 <= q;q--) {
      h = preys[q];
      c = h.xx + h.fx;
      y = h.yy + h.fy;
      if (h.eaten) {
        f = h.eaten_by;
        e = Math.pow(h.eaten_fr, 2);
        c += (f.xx + f.fx + Math.cos(f.ang + f.fa) * (43 - 24 * e) * (1 - e) - c) * e;
        y += (f.yy + f.fy + Math.sin(f.ang + f.fa) * (43 - 24 * e) * (1 - e) - y) * e;
      }
      c -= view_xx;
      y -= view_yy;
      f = c * c + y * y;
      fs = 1 + 0.08 * h.rad;
      px = c * fs;
      py = y * fs;
      G = 0.4 * (1 - f / (176E3 + f));
      if (1 != h.rad) {
        G *= Math.pow(h.rad, 0.25);
      }
      px = px * gsc + mww2;
      py = py * gsc + mhh2;
      if (1 == h.rad) {
        if (-150 <= px) {
          if (-150 <= py) {
            if (px <= mwwp150) {
              if (py <= mhhp150) {
                px -= h.gfw2;
                py -= h.gfh2;
                b.globalAlpha = G * h.fr;
                b.drawImage(h.gfi, px, py);
                b.globalAlpha = G * (0.5 + 0.5 * Math.cos(h.gfr / 13)) * h.fr;
                b.drawImage(h.gfi, px, py);
              }
            }
          }
        }
      } else {
        if (-150 <= px) {
          if (-150 <= py) {
            if (px <= mwwp150) {
              if (py <= mhhp150) {
                px -= h.gfw2 * h.rad;
                py -= h.gfh2 * h.rad;
                b.globalAlpha = G * h.fr;
                b.drawImage(h.gfi, 0, 0, h.gfw, h.gfh, px, py, h.gfw * h.rad, h.gfh * h.rad);
                b.globalAlpha = G * (0.5 + 0.5 * Math.cos(h.gfr / 13)) * h.fr;
                b.drawImage(h.gfi, 0, 0, h.gfw, h.gfh, px, py, h.gfw * h.rad, h.gfh * h.rad);
              }
            }
          }
        }
      }
      fs = 1 + 0.32 * h.rad;
      px = c * fs;
      py = y * fs;
      G = 0.35 * (1 - f / (46500 + f));
      if (1 != h.rad) {
        G *= Math.pow(h.rad, 0.25);
      }
      f = 2 * h.rad;
      px = px * gsc + mww2;
      py = py * gsc + mhh2;
      if (-150 <= px) {
        if (-150 <= py) {
          if (px <= mwwp150) {
            if (py <= mhhp150) {
              px -= h.gfw2 * f;
              py -= h.gfh2 * f;
              b.globalAlpha = G * h.fr;
              b.drawImage(h.gfi, 0, 0, h.gfw, h.gfh, px, py, h.gfw * f, h.gfh * f);
              b.globalAlpha = G * (0.5 + 0.5 * Math.cos(h.gfr / 13)) * h.fr;
              b.drawImage(h.gfi, 0, 0, h.gfw, h.gfh, px, py, h.gfw * f, h.gfh * f);
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
      x = -2E3;
      for (;2E3 >= x;x += 100) {
        xx = grd + Math.cos(view_ang + x / grd) * grd * 0.98;
        yy = grd + Math.sin(view_ang + x / grd) * grd * 0.98;
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
            f = "Your length";
            q = "of";
            G = "Your rank";
            if ("FR" == country) {
              f = "Votre longueur";
              q = "de";
              G = "Ton rang";
            } else {
              if ("BR" == country) {
                f = "Seu comprimento";
                q = "do";
                G = "Seu classifica\u00e7\u00e3o";
              }
            }
            f = "" + ('<span style="font-size: 14px;"><span style="opacity: .4;">' + f + ': </span><span style="opacity: .8; font-weight: bold;">' + Math.floor(150 * (fpsls[snake.sct] + snake.fam / fmlts[snake.sct] - 1) - 50) / 10 + "</span></span>");
            f += '<BR><span style="opacity: .3;">' + G + ': </span><span style="opacity: .35;">' + rank + '</span><span style="opacity: .3;"> ' + q + ' </span><span style="opacity: .35;">' + snake_count + "</span>";
            lbf.innerHTML = f;
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
      var q = ww / 1245;
      mbi.width = 1245 * q;
      b = Math.ceil(260 * q);
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
    q = Math.sqrt(ww * ww + hh * hh);
    b = Math.ceil(1400 * ww / q);
    var f = Math.ceil(1400 * hh / q);
    if (1100 < b) {
      f = Math.ceil(1100 * f / b);
      b = 1100;
    }
    if (1100 < f) {
      b = Math.ceil(1100 * b / f);
      f = 1100;
    }
    lgbsc = 560 > hh ? Math.max(50, hh) / 560 : 1;
    q = Math.round(lgbsc * lgcsc * 1E5) / 1E5;
    if (1 == q) {
      trf(login, "");
      login.style.top = "0px";
    } else {
      login.style.top = -(Math.round(hh * (1 - lgbsc) * 1E5) / 1E5) + "px";
      trf(login, "scale(" + q + "," + q + ")");
    }
    if (mww != b || mhh != f) {
      mww = b;
      mhh = f;
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
for (;0 <= i;i--) {
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
      var q = new Uint8Array(1);
      q[0] = 1 == b ? 253 : 254;
    } else {
      q = new Uint8Array(2);
      q[0] = 109;
      q[1] = b;
    }
    ws.send(q);
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
      } else {
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
      var q;
      var f;
      f = b.touches[0];
      if ("undefined" != typeof f.clientX) {
        q = f.clientX - ww / 2;
        f = f.clientY - hh / 2;
      } else {
        q = f.pageX - ww / 2;
        f = f.pageY - hh / 2;
      }
      var h = Date.now();
      if (24 > Math.abs(q - ltchx)) {
        if (24 > Math.abs(f - ltchy)) {
          if (400 > h - ltchmtm) {
            setAcceleration(1);
          }
        }
      }
      ltchx = q;
      ltchy = f;
      ltchmtm = h;
      xm = q;
      ym = f;
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
  for (;256 > i;i++) {
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
for (;100 > i;i++) {
  pfs.push(0);
}
var pf_add = 0;
var pf_new_add = 0;
var pf_remove = 0;
var tpfa = new Float32Array(4E4);
i = 0;
for (;i < tpfa.length;i++) {
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
  for (;0 <= j;j--) {
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
  } else {
    waiting_for_sos = false;
    sos_ready_after_mtm = -1;
    resetGame();
    connecting = true;
    start_connect_mtm = Date.now();
    if (!forcing) {
      var b$$0 = 0;
      for (;b$$0 < sos.length;b$$0++) {
        sos[b$$0].ptm = 9999999;
      }
      b$$0 = 0;
      for (;b$$0 < sis.length;b$$0++) {
        var q$$0 = sis[b$$0];
        if (0 < q$$0.ptms.length) {
          var f$$0 = 0;
          var h$$0 = q$$0.ptms.length - 1;
          for (;0 <= h$$0;h$$0--) {
            f$$0 += q$$0.ptms[h$$0];
          }
          f$$0 /= q$$0.ptms.length;
          h$$0 = sos.length - 1;
          for (;0 <= h$$0;h$$0--) {
            if (sos[h$$0].ip == q$$0.ip) {
              sos[h$$0].ptm = f$$0;
            }
          }
        }
      }
      if ("undefined" != typeof rmsos) {
        b$$0 = 0;
        for (;b$$0 < rmsos.length;b$$0++) {
          q$$0 = "." + rmsos[b$$0].a[0] + "." + rmsos[b$$0].a[1] + "." + rmsos[b$$0].a[2];
          f$$0 = rmsos[b$$0].a[3];
          h$$0 = sos.length - 1;
          for (;0 <= h$$0;h$$0--) {
            if (0 <= sos[h$$0].ip.indexOf(q$$0)) {
              if (sos[h$$0].po == f$$0) {
                sos.splice(h$$0, 1);
              }
            }
          }
        }
      }
      sos.sort(function(b, e) {
        return parseFloat(b.po) - parseFloat(e.po);
      });
      bso = sos[Math.floor(Math.random() * sos.length)];
      b$$0 = sos.length - 1;
      for (;0 <= b$$0;b$$0--) {
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
        var e = b[0] << 8 | b[1];
        var c = cptm - lptm;
        if (0 == lptm) {
          c = 0;
        }
        etm += c - e;
        if (testing) {
          rdpspc[b[2]] += b.length;
        }
        var f = String.fromCharCode(b[2]);
        e = 3;
        var h = b.length;
        c = b.length - 2;
        var q = b.length - 3;
        if ("a" == f) {
          connecting = false;
          playing = connected = true;
          play_btn_click_mtm = -1;
          grd = b[e] << 16 | b[e + 1] << 8 | b[e + 2];
          e += 3;
          c = b[e] << 8 | b[e + 1];
          e += 2;
          sector_size = b[e] << 8 | b[e + 1];
          e += 2;
          sector_count_along_edge = b[e] << 8 | b[e + 1];
          e += 2;
          spangdv = b[e] / 10;
          e++;
          nsp1 = (b[e] << 8 | b[e + 1]) / 100;
          e += 2;
          nsp2 = (b[e] << 8 | b[e + 1]) / 100;
          e += 2;
          nsp3 = (b[e] << 8 | b[e + 1]) / 100;
          e += 2;
          mamu = (b[e] << 8 | b[e + 1]) / 1E3;
          e += 2;
          mamu2 = (b[e] << 8 | b[e + 1]) / 1E3;
          e += 2;
          cst = (b[e] << 8 | b[e + 1]) / 1E3;
          e += 2;
          if (e < h) {
            protocol_version = b[e];
          }
          console.log("game radius = " + grd);
          setMscps(c);
          lbh.style.display = "inline";
          lbs.style.display = "inline";
          lbn.style.display = "inline";
          lbp.style.display = "inline";
          lbf.style.display = "inline";
          vcm.style.display = "inline";
          loch.style.display = "inline";
          startShowGame();
        } else {
          if ("e" == f || ("E" == f || ("3" == f || ("4" == f || "5" == f)))) {
            var w = b[e] << 8 | b[e + 1];
            e = e + 2;
            var D = h = -1;
            var x = -1;
            var A = -1;
            if (6 <= protocol_version) {
              if (6 == c) {
                h = "e" == f ? 1 : 2;
                D = 2 * b[e] * Math.PI / 256;
                e++;
                x = 2 * b[e] * Math.PI / 256;
                e++;
                A = b[e] / 18;
              } else {
                if (5 == c) {
                  if ("e" == f) {
                    D = 2 * b[e] * Math.PI / 256;
                    e++;
                    A = b[e] / 18;
                  } else {
                    if ("E" == f) {
                      h = 1;
                      x = 2 * b[e] * Math.PI / 256;
                      e++;
                      A = b[e] / 18;
                    } else {
                      if ("4" == f) {
                        h = 2;
                        x = 2 * b[e] * Math.PI / 256;
                        e++;
                        A = b[e] / 18;
                      } else {
                        if ("3" == f) {
                          h = 1;
                          D = 2 * b[e] * Math.PI / 256;
                          e++;
                          x = 2 * b[e] * Math.PI / 256;
                        } else {
                          if ("5" == f) {
                            h = 2;
                            D = 2 * b[e] * Math.PI / 256;
                            e++;
                            x = 2 * b[e] * Math.PI / 256;
                          }
                        }
                      }
                    }
                  }
                } else {
                  if (4 == c) {
                    if ("e" == f) {
                      D = 2 * b[e] * Math.PI / 256;
                    } else {
                      if ("E" == f) {
                        h = 1;
                        x = 2 * b[e] * Math.PI / 256;
                      } else {
                        if ("4" == f) {
                          h = 2;
                          x = 2 * b[e] * Math.PI / 256;
                        } else {
                          if ("3" == f) {
                            A = b[e] / 18;
                          }
                        }
                      }
                    }
                  }
                }
              }
            } else {
              if (3 <= protocol_version) {
                if ("3" != f) {
                  if (8 == c || (7 == c || (6 == c && "3" != f || 5 == c && "3" != f))) {
                    h = "e" == f ? 1 : 2;
                  }
                }
                if (8 == c || (7 == c || (5 == c && "3" == f || 6 == c && "3" == f))) {
                  D = 2 * (b[e] << 8 | b[e + 1]) * Math.PI / 65535;
                  e += 2;
                }
                if (8 == c || (7 == c || (5 == c && "3" != f || 6 == c && "3" != f))) {
                  x = 2 * (b[e] << 8 | b[e + 1]) * Math.PI / 65535;
                  e += 2;
                }
                if (8 == c || (6 == c || 4 == c)) {
                  A = b[e] / 18;
                }
              } else {
                if (11 == q || (8 == q || (9 == q || 6 == q))) {
                  h = b[e] - 48;
                  e++;
                }
                if (11 == q || (7 == q || (9 == q || 5 == q))) {
                  D = 2 * (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) * Math.PI / 16777215;
                  e += 3;
                }
                if (11 == q || (8 == q || (9 == q || 6 == q))) {
                  x = 2 * (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) * Math.PI / 16777215;
                  e += 3;
                }
                if (11 == q || (7 == q || (8 == q || 4 == q))) {
                  A = (b[e] << 8 | b[e + 1]) / 1E3;
                }
              }
            }
            var t = os["s" + w];
            if (t) {
              if (-1 != h) {
                t.dir = h;
              }
              anguc++;
              if (-1 != D) {
                if (t.ang == D) {
                  angnuc++;
                }
                b = (D - t.ang) % pi2;
                if (0 > b) {
                  b += pi2;
                }
                if (b > Math.PI) {
                  b -= pi2;
                }
                w = t.fapos;
                q = 0;
                for (;q < afc;q++) {
                  t.fas[w] -= b * afas[q];
                  w++;
                  if (w >= afc) {
                    w = 0;
                  }
                }
                t.fatg = afc;
                t.ang = D;
              }
              if (-1 != x) {
                if (t.wang == x) {
                  wangnuc++;
                }
                t.wang = x;
                if (t != snake) {
                  t.eang = x;
                }
              }
              if (-1 != A) {
                t.sp = A;
                t.spang = t.sp / spangdv;
                if (1 < t.spang) {
                  t.spang = 1;
                }
              }
            }
          } else {
            if ("h" == f) {
              w = b[e] << 8 | b[e + 1];
              e = e + 2;
              var H = (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) / 16777215;
              if (t = os["s" + w]) {
                t.fam = H;
                snl(t);
              }
            } else {
              if ("r" == f) {
                if (w = b[e] << 8 | b[e + 1], e += 2, t = os["s" + w]) {
                  if (4 <= q) {
                    t.fam = (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) / 16777215;
                  }
                  q = 0;
                  for (;q < t.pts.length;q++) {
                    if (!t.pts[q].dying) {
                      t.pts[q].dying = true;
                      t.sct--;
                      t.sc = Math.min(6, 1 + (t.sct - 2) / 106);
                      t.scang = 0.13 + 0.87 * Math.pow((7 - t.sc) / 6, 2);
                      t.ssp = nsp1 + nsp2 * t.sc;
                      t.fsp = t.ssp + 0.1;
                      t.wsep = 6 * t.sc;
                      b = nsep / gsc;
                      if (t.wsep < b) {
                        t.wsep = b;
                      }
                      break;
                    }
                  }
                  snl(t);
                }
              } else {
                if ("g" == f || ("n" == f || ("G" == f || "N" == f))) {
                  if (playing && (H = "n" == f || "N" == f, w = b[e] << 8 | b[e + 1], e += 2, t = os["s" + w])) {
                    if (H) {
                      t.sct++;
                    } else {
                      q = 0;
                      for (;q < t.pts.length;q++) {
                        if (!t.pts[q].dying) {
                          t.pts[q].dying = true;
                          break;
                        }
                      }
                    }
                    var z = t.pts[t.pts.length - 1];
                    q = z;
                    h = false;
                    if (3 <= protocol_version) {
                      if ("g" == f || "n" == f) {
                        c = b[e] << 8 | b[e + 1];
                        e += 2;
                        C = b[e] << 8 | b[e + 1];
                        e += 2;
                      } else {
                        c = q.xx + b[e] - 128;
                        e++;
                        C = q.yy + b[e] - 128;
                        e++;
                      }
                    } else {
                      c = (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) / 5;
                      e += 3;
                      C = (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) / 5;
                      e += 3;
                    }
                    if (H) {
                      t.fam = (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) / 16777215;
                    }
                    if (!(z = points_dp.get())) {
                      z = {
                        exs : [],
                        eys : [],
                        efs : [],
                        ems : []
                      };
                    }
                    z.eiu = 0;
                    z.xx = c;
                    z.yy = C;
                    z.fx = 0;
                    z.fy = 0;
                    z.da = 0;
                    z.ebx = z.xx - q.xx;
                    z.eby = z.yy - q.yy;
                    t.pts.push(z);
                    h = true;
                    if (t.iiv) {
                      b = t.xx + t.fx - z.xx;
                      e = t.yy + t.fy - z.yy;
                      z.fx += b;
                      z.fy += e;
                      z.exs[z.eiu] = b;
                      z.eys[z.eiu] = e;
                      z.efs[z.eiu] = 0;
                      z.ems[z.eiu] = 1;
                      z.eiu++;
                    }
                    w = t.pts.length - 3;
                    if (1 <= w) {
                      D = t.pts[w];
                      f = n = 0;
                      q = w - 1;
                      for (;0 <= q;q--) {
                        w = t.pts[q];
                        n++;
                        b = w.xx;
                        e = w.yy;
                        if (4 >= n) {
                          f = cst * n / 4;
                        }
                        w.xx += (D.xx - w.xx) * f;
                        w.yy += (D.yy - w.yy) * f;
                        if (t.iiv) {
                          b -= w.xx;
                          e -= w.yy;
                          w.fx += b;
                          w.fy += e;
                          w.exs[w.eiu] = b;
                          w.eys[w.eiu] = e;
                          w.efs[w.eiu] = 0;
                          w.ems[w.eiu] = 2;
                          w.eiu++;
                        }
                        D = w;
                      }
                    }
                    t.sc = Math.min(6, 1 + (t.sct - 2) / 106);
                    t.scang = 0.13 + 0.87 * Math.pow((7 - t.sc) / 6, 2);
                    t.ssp = nsp1 + nsp2 * t.sc;
                    t.fsp = t.ssp + 0.1;
                    t.wsep = 6 * t.sc;
                    b = nsep / gsc;
                    if (t.wsep < b) {
                      t.wsep = b;
                    }
                    if (H) {
                      snl(t);
                    }
                    t.lnp = z;
                    if (t == snake) {
                      ovxx = snake.xx + snake.fx;
                      ovyy = snake.yy + snake.fy;
                    }
                    z = etm / 8 * t.sp / 4;
                    z *= lag_mult;
                    q = t.chl - 1;
                    t.chl = z / t.msl;
                    f = t.xx;
                    w = t.yy;
                    t.xx = c + Math.cos(t.ang) * z;
                    t.yy = C + Math.sin(t.ang) * z;
                    b = t.xx - f;
                    e = t.yy - w;
                    c = t.chl - q;
                    w = t.fpos;
                    q = 0;
                    for (;q < rfc;q++) {
                      t.fxs[w] -= b * rfas[q];
                      t.fys[w] -= e * rfas[q];
                      t.fchls[w] -= c * rfas[q];
                      w++;
                      if (w >= rfc) {
                        w = 0;
                      }
                    }
                    t.fx = t.fxs[t.fpos];
                    t.fy = t.fys[t.fpos];
                    t.fchl = t.fchls[t.fpos];
                    t.ftg = rfc;
                    if (h) {
                      t.ehl = 0;
                    }
                    if (t == snake) {
                      view_xx = snake.xx + snake.fx;
                      view_yy = snake.yy + snake.fy;
                      b = view_xx - ovxx;
                      e = view_yy - ovyy;
                      w = fvpos;
                      q = 0;
                      for (;q < vfc;q++) {
                        fvxs[w] -= b * vfas[q];
                        fvys[w] -= e * vfas[q];
                        w++;
                        if (w >= vfc) {
                          w = 0;
                        }
                      }
                      fvtg = vfc;
                    }
                  }
                } else {
                  if ("l" == f) {
                    if (playing) {
                      wumsts = true;
                      D = z = C = "";
                      A = x = 0;
                      if (-1 == lb_fr) {
                        if (-1 == dead_mtm) {
                          lb_fr = 0;
                        }
                      }
                      var L = b[e];
                      e++;
                      rank = b[e] << 8 | b[e + 1];
                      if (rank < best_rank) {
                        best_rank = rank;
                      }
                      e += 2;
                      snake_count = b[e] << 8 | b[e + 1];
                      if (snake_count > biggest_snake_count) {
                        biggest_snake_count = snake_count;
                      }
                      e += 2;
                      for (;e < h;) {
                        var I = b[e] << 8 | b[e + 1];
                        e = e + 2;
                        H = (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) / 16777215;
                        e = e + 3;
                        t = b[e] % 9;
                        e++;
                        c = b[e];
                        e++;
                        f = "";
                        q = 0;
                        for (;q < c;q++) {
                          w = b[e];
                          f = 38 == w ? f + "&amp;" : 60 == w ? f + "&lt;" : 62 == w ? f + "&gt;" : 32 == w ? f + "&nbsp;" : f + String.fromCharCode(b[e]);
                          e++;
                        }
                        A++;
                        x++;
                        score = Math.floor(150 * (fpsls[I] + H / fmlts[I] - 1) - 50) / 10;
                        w = A == L ? 1 : 0.7 * (0.3 + 0.7 * (1 - x / 10));
                        C += '<span style="opacity:' + w + "; color:" + per_color_imgs[t].cs + ';">' + score + "</span><BR>";
                        z += '<span style="opacity:' + w + "; color:" + per_color_imgs[t].cs + ";" + (A == L ? "font-weight:bold;" : "") + '">' + f + "</span><BR>";
                        D += '<span style="opacity:' + w + "; color:" + per_color_imgs[t].cs + ';">#' + x + "</span><BR>";
                      }
                      lbs.innerHTML = C;
                      lbn.innerHTML = z;
                      lbp.innerHTML = D;
                    }
                  } else {
                    if ("v" == f) {
                      if (2 == b[e]) {
                        want_close_socket = true;
                        want_victory_message = false;
                        want_hide_victory = 1;
                        hvfr = 0;
                      } else {
                        dead_mtm = Date.now();
                        play_btn.setEnabled(true);
                        c = Math.floor(150 * (fpsls[snake.sct] + snake.fam / fmlts[snake.sct] - 1) - 50) / 10;
                        twt.href = "http://twitter.com/intent/tweet?status=" + encodeURIComponent("I got a length of " + c + " in http://slither.io! Can you beat that? #slitherio");
                        C = "Your final length was";
                        if ("FR" == country) {
                          C = "Votre longueur finale \u00e9tait de";
                        } else {
                          if ("BR" == country) {
                            C = "Seu comprimento final foi de";
                          }
                        }
                        h = "";
                        if (1E3 < c) {
                          h = "!";
                        }
                        lastscore.innerHTML = '<span style="opacity: .45;">' + C + " </span><b>" + c + "</b>" + h;
                        c = "Play Again";
                        if ("FR" == country) {
                          c = "Jouer";
                        } else {
                          if ("BR" == country) {
                            c = "Joga";
                          }
                        }
                        play_btn.setText(String.fromCharCode(160) + c + String.fromCharCode(160));
                        if (1 == b[e]) {
                          nick_holder.style.display = "none";
                          playh.style.display = "none";
                          smh.style.display = "none";
                          victory_holder.style.display = "inline";
                          saveh.style.display = "block";
                          want_victory_focus = want_victory_message = true;
                          victory.disabled = false;
                          save_btn.setEnabled(true);
                        } else {
                          want_close_socket = true;
                        }
                      }
                    } else {
                      if ("w" == f) {
                        if (h = b[e], e++, c = b[e] << 8 | b[e + 1], e += 2, C = b[e] << 8 | b[e + 1], 1 == h) {
                          t = {};
                          t.xx = c;
                          t.yy = C;
                          sectors.push(t);
                        } else {
                          z = cm1 = foods_c - 1;
                          for (;0 <= z;z--) {
                            q = foods[z];
                            if (q.sx == c) {
                              if (q.sy == C) {
                                if (z == cm1) {
                                  foods[z] = null;
                                } else {
                                  foods[z] = foods[cm1];
                                  foods[cm1] = null;
                                }
                                foods_c--;
                                cm1--;
                              }
                            }
                          }
                          z = sectors.length - 1;
                          for (;0 <= z;z--) {
                            t = sectors[z];
                            if (t.xx == c) {
                              if (t.yy == C) {
                                sectors.splice(z, 1);
                              }
                            }
                          }
                        }
                      } else {
                        if ("m" == f) {
                          I = b[e] << 16 | b[e + 1] << 8 | b[e + 2];
                          e += 3;
                          H = (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) / 16777215;
                          e += 3;
                          C = Math.floor(150 * (fpsls[I] + H / fmlts[I] - 1) - 50) / 10;
                          c = b[e];
                          e++;
                          q = "";
                          z = 0;
                          for (;z < c;z++) {
                            q += String.fromCharCode(b[e]);
                            e++;
                          }
                          c = "";
                          for (;e < h;) {
                            c += String.fromCharCode(b[e]);
                            e++;
                          }
                          q = q.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
                          c = c.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
                          if (0 < C) {
                            b = "";
                            if (0 < c.length) {
                              b += "<span style='font-size:17px;'><b><i><span style='opacity: .5;'>&quot;</span>" + c + "<span style='opacity: .5;'>&quot;</span></i></b></span><BR><div style='height: 5px;'></div>";
                            }
                            if (0 < q.length) {
                              b = 0 < c.length ? b + ("<i><span style='opacity: .5;'>- </span><span style='opacity: .75;'><b>" + q + "</b></span><span style='opacity: .5;'>, today's longest</span></i>") : "<i><span style='opacity: .5;'>Today's longest was </span><span style='opacity: .75;'><b>" + q + "</b></span></i>";
                              b += "<br><i><span style='opacity: .5;'>with a length of </span><span style='opacity: .65;'><b>" + C + "</b></span></i>";
                            } else {
                              b = 0 < c.length ? b + "<i><span style='opacity: .5;'>- </span><span style='opacity: .5;'>today's longest</span></i>" + ("<br><i><span style='opacity: .5;'>with a length of </span><span style='opacity: .65;'><b>" + C + "</b></span></i>") : b + ("<i><span style='opacity: .5;'>Today's longest: </span><span style='opacity: .75;'><b>" + C + "</b></span></i>");
                            }
                            vcm.innerHTML = b;
                          }
                        } else {
                          if ("p" == f) {
                            wfpr = false;
                            if (lagging) {
                              etm *= lag_mult;
                              lagging = false;
                            }
                          } else {
                            if ("u" == f) {
                              q = asmc.getContext("2d");
                              q.clearRect(0, 0, 80, 80);
                              q.fillStyle = "#FFFFFF";
                              var C = c = 0;
                              for (;e < h && !(80 <= C);) {
                                if (w = b[e++], 128 <= w) {
                                  w -= 128;
                                  z = 0;
                                  for (;z < w && !(c++, 80 <= c && (c = 0, C++, 80 <= C));z++) {
                                  }
                                } else {
                                  z = 0;
                                  for (;7 > z && !(0 < (w & u_m[z]) && q.fillRect(c, C, 1, 1), c++, 80 <= c && (c = 0, C++, 80 <= C));z++) {
                                  }
                                }
                              }
                            } else {
                              if ("s" == f) {
                                if (playing) {
                                  if (w = b[e] << 8 | b[e + 1], e += 2, 6 < q) {
                                    D = 2 * (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) * Math.PI / 16777215;
                                    e += 3;
                                    e++;
                                    x = 2 * (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) * Math.PI / 16777215;
                                    e += 3;
                                    A = (b[e] << 8 | b[e + 1]) / 1E3;
                                    e += 2;
                                    H = (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) / 16777215;
                                    e += 3;
                                    t = b[e];
                                    e++;
                                    L = [];
                                    I = (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) / 5;
                                    e = e + 3;
                                    var K = (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) / 5;
                                    e = e + 3;
                                    c = b[e];
                                    e++;
                                    f = "";
                                    q = 0;
                                    for (;q < c;q++) {
                                      f += String.fromCharCode(b[e]);
                                      e++;
                                    }
                                    var M = q = C = c = 0;
                                    var O = false;
                                    for (;e < h;) {
                                      q = c;
                                      M = C;
                                      if (O) {
                                        c += (b[e] - 127) / 2;
                                        e++;
                                        C += (b[e] - 127) / 2;
                                        e++;
                                      } else {
                                        c = (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) / 5;
                                        e += 3;
                                        C = (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) / 5;
                                        e += 3;
                                        q = c;
                                        M = C;
                                        O = true;
                                      }
                                      if (!(z = points_dp.get())) {
                                        z = {
                                          exs : [],
                                          eys : [],
                                          efs : [],
                                          ems : []
                                        };
                                      }
                                      z.eiu = 0;
                                      z.xx = c;
                                      z.yy = C;
                                      z.fx = 0;
                                      z.fy = 0;
                                      z.da = 0;
                                      z.ebx = c - q;
                                      z.eby = C - M;
                                      L.push(z);
                                    }
                                    t = newSnake(w, I, K, t, D, L);
                                    if (null == snake) {
                                      view_xx = c;
                                      view_yy = C;
                                      snake = t;
                                    }
                                    t.nk = f;
                                    t.eang = t.wang = x;
                                    t.sp = A;
                                    t.spang = t.sp / spangdv;
                                    if (1 < t.spang) {
                                      t.spang = 1;
                                    }
                                    t.fam = H;
                                    t.sc = Math.min(6, 1 + (t.sct - 2) / 106);
                                    t.scang = 0.13 + 0.87 * Math.pow((7 - t.sc) / 6, 2);
                                    t.ssp = nsp1 + nsp2 * t.sc;
                                    t.fsp = t.ssp + 0.1;
                                    t.wsep = 6 * t.sc;
                                    b = nsep / gsc;
                                    if (t.wsep < b) {
                                      t.wsep = b;
                                    }
                                    t.sep = t.wsep;
                                    snl(t);
                                  } else {
                                    b = 1 == b[e];
                                    z = snakes.length - 1;
                                    for (;0 <= z;z--) {
                                      if (snakes[z].id == w) {
                                        snakes[z].id = -1234;
                                        if (b) {
                                          snakes[z].dead = true;
                                          snakes[z].dead_amt = 0;
                                          snakes[z].edir = 0;
                                        } else {
                                          snakes.splice(z, 1);
                                        }
                                        delete os["s" + w];
                                        break;
                                      }
                                    }
                                  }
                                }
                              } else {
                                if ("F" == f) {
                                  if (4 <= protocol_version) {
                                    f = false;
                                    for (;e < h;) {
                                      t = b[e];
                                      e++;
                                      c = b[e] << 8 | b[e + 1];
                                      e += 2;
                                      C = b[e] << 8 | b[e + 1];
                                      e += 2;
                                      q = b[e] / 5;
                                      e++;
                                      w = C * grd * 3 + c;
                                      q = newFood(w, c, C, q, true, t);
                                      if (!f) {
                                        f = true;
                                        z = Math.floor(c / sector_size);
                                        H = Math.floor(C / sector_size);
                                      }
                                      q.sx = z;
                                      q.sy = H;
                                    }
                                    t = {};
                                    t.xx = z;
                                    t.yy = H;
                                    sectors.push(t);
                                  } else {
                                    z = b[e] << 8 | b[e + 1];
                                    e += 2;
                                    H = b[e] << 8 | b[e + 1];
                                    e += 2;
                                    t = {};
                                    t.xx = z;
                                    t.yy = H;
                                    sectors.push(t);
                                    for (;e < h;) {
                                      w = b[e] << 16 | b[e + 1] << 8 | b[e + 2];
                                      e += 3;
                                      t = b[e];
                                      e++;
                                      c = sector_size * (z + b[e] / 255);
                                      e++;
                                      C = sector_size * (H + b[e] / 255);
                                      e++;
                                      q = b[e] / 5;
                                      e++;
                                      q = newFood(w, c, C, q, true, t);
                                      q.sx = z;
                                      q.sy = H;
                                    }
                                  }
                                } else {
                                  if ("b" == f || "f" == f) {
                                    if (4 <= protocol_version) {
                                      t = b[e];
                                      e++;
                                      if (4 < q) {
                                        c = b[e] << 8 | b[e + 1];
                                        e += 2;
                                        C = b[e] << 8 | b[e + 1];
                                        w = C * grd * 3 + c;
                                        q = b[e + 2] / 5;
                                        q = newFood(w, c, C, q, "b" == f, t);
                                        q.sx = Math.floor(c / sector_size);
                                        q.sy = Math.floor(C / sector_size);
                                      }
                                    } else {
                                      w = b[e] << 16 | b[e + 1] << 8 | b[e + 2];
                                      e += 3;
                                      if (4 < q) {
                                        t = b[e];
                                        e++;
                                        z = b[e] << 8 | b[e + 1];
                                        e += 2;
                                        H = b[e] << 8 | b[e + 1];
                                        e += 2;
                                        c = sector_size * (z + b[e] / 255);
                                        e++;
                                        C = sector_size * (H + b[e] / 255);
                                        e++;
                                        q = b[e] / 5;
                                        q = newFood(w, c, C, q, "b" == f, t);
                                        q.sx = z;
                                        q.sy = H;
                                      }
                                    }
                                  } else {
                                    if ("c" == f) {
                                      if (4 <= protocol_version) {
                                        c = b[e] << 8 | b[e + 1];
                                        e += 2;
                                        C = b[e] << 8 | b[e + 1];
                                        e += 2;
                                        w = C * grd * 3 + c;
                                      } else {
                                        w = b[e] << 16 | b[e + 1] << 8 | b[e + 2];
                                        e += 3;
                                      }
                                      z = cm1 = foods_c - 1;
                                      for (;0 <= z;z--) {
                                        if (q = foods[z], q.id == w) {
                                          q.eaten = true;
                                          if (e + 2 <= h) {
                                            b = b[e] << 8 | b[e + 1];
                                            q.eaten_by = os["s" + b];
                                            q.eaten_fr = 0;
                                          } else {
                                            if (z == cm1) {
                                              foods[z] = null;
                                            } else {
                                              foods[z] = foods[cm1];
                                              foods[cm1] = null;
                                            }
                                            foods_c--;
                                            cm1--;
                                          }
                                          w = -1;
                                          break;
                                        }
                                      }
                                      if (-1 != w) {
                                        console.log("wtf");
                                      }
                                    } else {
                                      if ("j" == f) {
                                        w = b[e] << 8 | b[e + 1];
                                        e += 2;
                                        c = 1 + 3 * (b[e] << 8 | b[e + 1]);
                                        e += 2;
                                        C = 1 + 3 * (b[e] << 8 | b[e + 1]);
                                        e += 2;
                                        h = null;
                                        z = preys.length - 1;
                                        for (;0 <= z;z--) {
                                          if (preys[z].id == w) {
                                            h = preys[z];
                                            break;
                                          }
                                        }
                                        if (h) {
                                          z = etm / 8 * h.sp / 4;
                                          z *= lag_mult;
                                          f = h.xx;
                                          w = h.yy;
                                          if (15 == q) {
                                            h.dir = b[e] - 48;
                                            e++;
                                            h.ang = 2 * (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) * Math.PI / 16777215;
                                            e += 3;
                                            h.wang = 2 * (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) * Math.PI / 16777215;
                                            e += 3;
                                            h.sp = (b[e] << 8 | b[e + 1]) / 1E3;
                                          } else {
                                            if (11 == q) {
                                              h.ang = 2 * (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) * Math.PI / 16777215;
                                              e += 3;
                                              h.sp = (b[e] << 8 | b[e + 1]) / 1E3;
                                            } else {
                                              if (12 == q) {
                                                h.dir = b[e] - 48;
                                                e++;
                                                h.wang = 2 * (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) * Math.PI / 16777215;
                                                e += 3;
                                                h.sp = (b[e] << 8 | b[e + 1]) / 1E3;
                                              } else {
                                                if (13 == q) {
                                                  h.dir = b[e] - 48;
                                                  e++;
                                                  h.ang = 2 * (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) * Math.PI / 16777215;
                                                  e += 3;
                                                  h.wang = 2 * (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) * Math.PI / 16777215;
                                                } else {
                                                  if (9 == q) {
                                                    h.ang = 2 * (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) * Math.PI / 16777215;
                                                  } else {
                                                    if (10 == q) {
                                                      h.dir = b[e] - 48;
                                                      e++;
                                                      h.wang = 2 * (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) * Math.PI / 16777215;
                                                    } else {
                                                      if (8 == q) {
                                                        h.sp = (b[e] << 8 | b[e + 1]) / 1E3;
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          h.xx = c + Math.cos(h.ang) * z;
                                          h.yy = C + Math.sin(h.ang) * z;
                                          b = h.xx - f;
                                          e = h.yy - w;
                                          w = h.fpos;
                                          q = 0;
                                          for (;q < rfc;q++) {
                                            h.fxs[w] -= b * rfas[q];
                                            h.fys[w] -= e * rfas[q];
                                            w++;
                                            if (w >= rfc) {
                                              w = 0;
                                            }
                                          }
                                          h.fx = h.fxs[h.fpos];
                                          h.fy = h.fys[h.fpos];
                                          h.ftg = rfc;
                                        }
                                      } else {
                                        if ("y" == f) {
                                          if (w = b[e] << 8 | b[e + 1], e += 2, 2 == q) {
                                            z = preys.length - 1;
                                            for (;0 <= z;z--) {
                                              if (h = preys[z], h.id == w) {
                                                preys.splice(z, 1);
                                                break;
                                              }
                                            }
                                          } else {
                                            if (4 == q) {
                                              b = b[e] << 8 | b[e + 1];
                                              z = preys.length - 1;
                                              for (;0 <= z;z--) {
                                                if (h = preys[z], h.id == w) {
                                                  h.eaten = true;
                                                  h.eaten_by = os["s" + b];
                                                  if (h.eaten_by) {
                                                    h.eaten_fr = 0;
                                                  } else {
                                                    preys.splice(z, 1);
                                                  }
                                                  break;
                                                }
                                              }
                                            } else {
                                              t = b[e];
                                              e++;
                                              c = (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) / 5;
                                              e += 3;
                                              C = (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) / 5;
                                              e += 3;
                                              q = b[e] / 5;
                                              e++;
                                              h = b[e] - 48;
                                              e++;
                                              x = 2 * (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) * Math.PI / 16777215;
                                              e += 3;
                                              D = 2 * (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) * Math.PI / 16777215;
                                              e += 3;
                                              A = (b[e] << 8 | b[e + 1]) / 1E3;
                                              newPrey(w, c, C, q, t, h, x, D, A);
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
    ws.onerror = function(b) {
    };
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
        var e = Math.floor(9 * Math.random());
        try {
          var c = localStorage.snakercv;
          if (c == "" + Number(c)) {
            e = Number(c);
          }
        } catch (f) {
        }
        c = new Uint8Array(3 + b.length);
        c[0] = 115;
        c[1] = 5;
        c[2] = e;
        e = 0;
        for (;e < b.length;e++) {
          c[e + 3] = b.charCodeAt(e);
        }
        ws.send(c);
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
  var q;
  var f;
  var h;
  f = b.length;
  var u = false;
  q = 0;
  for (;q < f;q++) {
    if (h = b.charCodeAt(q), 32 > h || 127 < h) {
      u = true;
      break;
    }
  }
  if (u) {
    u = "";
    q = 0;
    for (;q < f;q++) {
      h = b.charCodeAt(q);
      u = 32 > h || 127 < h ? u + " " : u + String.fromCharCode(h);
    }
    return u;
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
} catch (b$$52) {
}
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
var want_quality = 0;
var grq = document.getElementById("grq");
var grqh = document.getElementById("grqh");
var phqi = document.createElement("img");
var grqi = document.getElementById("grqi");
try {
  if ("0" == localStorage.qual) {
    grqi.src = "/s/lowquality.png";
    want_quality = 0;
  } else {
    phqi.src = "/s/lowquality.png";
    want_quality = 1;
  }
} catch (b$$53) {
}
grq.onclick = function() {
  try {
    if ("0" == localStorage.qual) {
      localStorage.qual = "1";
      grqi.src = "/s/highquality.png";
      want_quality = 1;
    } else {
      localStorage.qual = "0";
      grqi.src = "/s/lowquality.png";
      want_quality = 0;
    }
  } catch (b) {
  }
  return false;
};
var plq = document.getElementById("plq");
var clq = document.getElementById("clq");
try {
  if ("1" == localStorage.edttsg) {
    cskh.style.display = "inline";
  }
} catch (b$$55) {
}
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
    var q = 22;
    for (;1 <= q;q--) {
      b$$0.push({
        xx : grd / 2 - 10 * q,
        yy : grd / 2,
        fx : 0,
        fy : 0,
        exs : [],
        eys : [],
        efs : [],
        ems : [],
        eiu : 0,
        fpos : 0,
        da : 0,
        ebx : 10,
        eby : 0
      });
    }
    q = 0;
    try {
      var f = localStorage.snakercv;
      if (f == "" + Number(f)) {
        q = Number(f);
      }
    } catch (h) {
    }
    b$$0 = newSnake(1, grd / 2, grd / 2, q, 0, b$$0);
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
    f = nsep / gsc;
    if (b$$0.wsep < f) {
      b$$0.wsep = f;
    }
    b$$0.sep = b$$0.wsep;
    snl(b$$0);
    b$$0.alive_amt = 1;
    b$$0.rex = 1.66;
    ws = {
      send : function(b) {
      },
      close : function() {
      }
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
  var q = asciize(b);
  if (24 < q.length) {
    q = q.substr(0, 24);
  }
  if (b != q) {
    this.value = q;
  }
};
victory.oninput = function() {
  var b = this.value;
  var q = asciize(b);
  if (140 < q.length) {
    q = q.substr(0, 140);
  }
  if (b != q) {
    this.value = q;
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
  pts : [107, 107, 80, 83, 53, 98, 31, 115, 55, 131, 98, 147, 101, 162, 101, 190, 66, 188, 49, 187, 34, 173],
  kc : 22,
  ws : 4,
  wr : 0.025,
  qm : 0.025,
  sp : 0.06,
  sz : 11
}, {
  pts : [150, 30, 150, 107, 150, 184],
  kc : 66,
  ws : 4,
  wr : 0.05,
  qm : 0.025,
  sp : 0.06,
  sz : 11
}, {
  pts : [207, 96, 207, 140, 207, 184],
  kc : 46,
  ws : 4,
  wr : 0.03,
  qm : 0.035,
  sp : 0.06,
  sz : 11
}, {
  pts : [207, 47, 207, 48.5, 207, 50],
  kc : 11,
  ws : 2,
  wr : 0.06,
  qm : 0.05,
  sp : 0.06,
  sz : 15,
  r : 0.5
}, {
  pts : [267, 65, 267, 114.5, 267, 164, 267, 194, 297, 186],
  kc : 66,
  ws : 6,
  wr : -0.025,
  qm : -0.0125,
  sp : 0.06,
  sz : 11,
  r : 1.5
}, {
  pts : [243, 94, 268, 94, 293, 94],
  kc : 66,
  ws : 4,
  wr : 0.015,
  qm : 0.025,
  sp : 0.06,
  sz : 9,
  r : 1.2
}, {
  pts : [338, 30, 338, 68.5, 338, 107, 338, 145.5, 338, 184, 338, 164, 338, 144, 338, 104, 378, 104, 418, 104, 418, 144, 418, 164, 418, 184],
  kc : 46,
  ws : 4,
  wr : 0.005,
  qm : 0.02,
  sp : 0.06,
  sz : 11,
  r : 2.1
}, {
  pts : [535, 175, 500, 201, 472, 175, 442, 138, 472, 105, 502, 84, 532, 105, 546, 118, 544, 139, 504, 139, 464, 139],
  kc : 35,
  ws : 6,
  wr : -0.013,
  qm : -0.025,
  sp : 0.06,
  sz : 11,
  r : 1.3
}, {
  pts : [591, 96, 591, 140, 591, 184, 591, 155, 591, 126, 613, 82, 652, 109],
  kc : 38,
  ws : 4,
  wr : 0.01,
  qm : -0.035,
  sp : 0.06,
  sz : 11
}, {
  pts : [663, 177, 663, 178.5, 663, 180],
  kc : 11,
  ws : 2,
  wr : 0.06,
  qm : 0.05,
  sp : 0.06,
  sz : 15
}, {
  pts : [717, 96, 717, 140, 717, 184],
  kc : 33,
  ws : 4,
  wr : 0.06,
  qm : 0.05,
  sp : 0.06,
  sz : 11
}, {
  pts : [717, 47, 717, 48.5, 717, 50],
  kc : 11,
  ws : 2,
  wr : 0.06,
  qm : 0.05,
  sp : 0.06,
  sz : 15
}, {
  pts : [814, 186, 860, 188, 858, 136, 854, 96, 814, 96, 770, 96, 770, 136, 770, 186, 814, 186],
  kc : 43,
  ws : 4,
  wr : 0,
  qm : 0.0274,
  sp : 0.073,
  sz : 11,
  r : 1.5
});
i = 0;
for (;i < lts.length;i++) {
  lts[i].mwig = 5;
}
var lga = 0;
var lgss = 0;
var ncka = 0;
var mwig = 4;
var lgfr = 0;
var lgtm = Date.now();
function showLogo(b) {
  var q = Date.now();
  var f = (q - lgtm) / 25;
  lgtm = q;
  var h;
  var u;
  var e;
  var c;
  var y;
  var E;
  var B;
  var w;
  var D;
  var x;
  var A;
  var t;
  var H;
  var z;
  var L;
  lgfr += f;
  if (0 == lts[lts.length - 1].mwig && (1 == lga && (1 == lgss && 1 == ncka))) {
    clearInterval(showlogo_iv);
    showlogo_iv = -1;
  } else {
    if (b || 1 != lga) {
      lga += 0.05 * f;
      if (1 <= lga) {
        lga = 1;
      }
      lmc2.style.opacity = lga;
    }
    if (1 != lgss) {
      lgss += 0.00375 * f;
      if (1 <= lgss) {
        lgss = 1;
      }
    }
    if (b || 1 != ncka) {
      ncka += 0.006 * f;
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
    q = 0;
    for (;q < lts.length;q++) {
      var I = lts[q];
      var C = I.pts;
      var K = I.kc;
      var M = I.ws;
      var O = I.wr;
      var N = I.qm;
      h = I.sp;
      var J = I.sz;
      L = I.r;
      var F = I.mwig;
      if (b) {
        I.wch = true;
        F = 1E-7;
      }
      if (I.wch) {
        if (0 != F) {
          F *= 0.982;
          F -= 0.001 * f;
          if (1 == render_mode) {
            F -= 0.005 * f;
          }
          if (0 >= F) {
            F = 0;
          }
          I.mwig = F;
        }
      }
      if (!L) {
        L = 1;
      }
      lctx.beginPath();
      if (9 > q) {
        e = ctx.createLinearGradient(0, 70 * lgsc, 0, 230 * lgsc);
        e.addColorStop(0, "#80FFA0");
        e.addColorStop(1, "#008040");
      } else {
        e = ctx.createLinearGradient(0, 50 * lgsc, 0, 265 * lgsc);
        e.addColorStop(0, "#9850FF");
        e.addColorStop(1, "#281060");
      }
      lctx.fillStyle = e;
      H = false;
      z = 0;
      e = C[0];
      c = C[1];
      D = e;
      x = c;
      var G = lgfr * h;
      A = 2;
      for (;A < C.length;A += 4) {
        h = e;
        u = c;
        cx2 = C[A];
        cy2 = C[A + 1];
        e = C[A + 2];
        c = C[A + 3];
        var Q = 1;
        for (;Q <= K;Q++) {
          z++;
          var P = Q / K;
          y = h + (cx2 - h) * P;
          E = u + (cy2 - u) * P;
          B = cx2 + (e - cx2) * P;
          w = cy2 + (c - cy2) * P;
          y += (B - y) * P;
          E += (w - E) * P;
          D = Math.atan2(E - x, y - D);
          if (H) {
            if (D - t > Math.PI) {
              D -= 2 * Math.PI;
            } else {
              if (D - t < -Math.PI) {
                D += 2 * Math.PI;
              }
            }
            t += 0.05 * (D - t);
            t %= 2 * Math.PI;
          } else {
            H = true;
            t = D;
          }
          D = y;
          x = E;
          y += Math.cos(Math.PI / 2 + t) * Math.sin(G) * M * F;
          E += Math.sin(Math.PI / 2 + t) * Math.sin(G) * M * F;
          G -= 0.76 * N * M;
          M += O;
          lctx.beginPath();
          w = 1.15 * J * Math.min(1, lgsc * (0.2 + 0.8 * lga) * (30 * lgss * L - z / 20 - q / 2));
          if (0.5 < w) {
            lctx.arc(y * lgsc, E * lgsc, w, 0, pi2);
            I.wch = true;
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
} else {
  showlogo_iv = setInterval("showLogo(false)", 25);
}
document.onkeydown = function(b) {
  b = b || window.event;
  var q = b.keyCode;
  if (37 == q) {
    kd_l = true;
  } else {
    if (39 == q) {
      kd_r = true;
    } else {
      if (38 == q || 32 == q) {
        kd_u = true;
        setAcceleration(1);
      } else {
        if (13 == q || 10 == q) {
          if (want_victory_message) {
            if (0 < victory.value.length) {
              save_btn.elem.onclick();
            }
          } else {
            if (!connecting && !connected) {
              play_btn.elem.onclick();
            }
          }
        } else {
          if (16 == q) {
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
  } else {
    if (39 == b) {
      kd_r = false;
    } else {
      if (38 == b || 32 == b) {
        kd_u = false;
        setAcceleration(0);
      } else {
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
    sis = [];
    b$$0.charAt(0);
    var q = 1;
    var f = {};
    var h = 0;
    f = h = 0;
    var u;
    var e$$0 = 0;
    var c$$0 = 0;
    var y = [];
    var E = [];
    var B = [];
    for (;q < b$$0.length;) {
      if (u = (b$$0.charCodeAt(q++) - 97 - c$$0) % 26, 0 > u && (u += 26), e$$0 *= 16, e$$0 += u, c$$0 += 7, 1 == f) {
        if (0 == h) {
          y.push(e$$0);
          if (4 == y.length) {
            h++;
          }
        } else {
          if (1 == h) {
            E.push(e$$0);
            if (3 == E.length) {
              h++;
            }
          } else {
            if (2 == h && (B.push(e$$0), 3 == B.length)) {
              f = {};
              h = u = 0;
              for (;h < E.length;h++) {
                u *= 256;
                u += E[h];
              }
              h = E = 0;
              for (;h < B.length;h++) {
                E *= 256;
                E += B[h];
              }
              f.ip = y.join(".");
              f.po = u;
              f.ac = E;
              sos.push(f);
              y = [];
              E = [];
              B = [];
              h = 0;
            }
          }
        }
        f = e$$0 = 0;
      } else {
        f++;
      }
    }
    q = sos.length - 1;
    for (;0 <= q;q--) {
      f = 1;
      h = sis.length - 1;
      for (;0 <= h;h--) {
        if (sis[h].ip == sos[q].ip) {
          f = 0;
          break;
        }
      }
      if (1 == f) {
        c$$0 = b$$0 = -1;
        y = [];
        h = sos.length - 1;
        for (;0 <= h;h--) {
          if (sos[h].ip == sos[q].ip) {
            y.push(sos[q].po);
            if (sos[h].ac > c$$0) {
              b$$0 = h;
              c$$0 = sos[h].ac;
            }
          }
        }
        sis.push({
          ip : sos[b$$0].ip,
          po : y[Math.floor(Math.random() * y.length)],
          ptms : []
        });
      }
    }
    h = sis.length - 1;
    for (;0 <= h;h--) {
      if (f = sis[h], q = null, !(0.4 > Math.random())) {
        try {
          q = new WebSocket("ws://" + f.ip + ":" + f.po + "/ptc");
        } catch (w) {
          q = null;
        }
        if (q) {
          q.binaryType = "arraybuffer";
          q.onerror = function(b) {
          };
          q.onmessage = function(b) {
            b = new Uint8Array(b.data);
            if (1 == b.length && 112 == b[0]) {
              var c = sis.length - 1;
              for (;0 <= c;c--) {
                if (b = sis[c], b.ps == this) {
                  c = Date.now() - b.stm;
                  b.ptms.push(c);
                  if (4 > b.ptms.length) {
                    b.stm = Date.now();
                    b = new Uint8Array(1);
                    b[0] = 112;
                    this.send(b);
                  } else {
                    if (waiting_for_sos) {
                      if (-1 == sos_ready_after_mtm) {
                        sos_ready_after_mtm = Date.now() + 2E3;
                      }
                    }
                    this.close();
                    b.ps = null;
                  }
                  break;
                }
              }
            }
          };
          q.onopen = function(b) {
            b = false;
            var c = sis.length - 1;
            for (;0 <= c;c--) {
              var e = sis[c];
              if (e.ps == this) {
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
          f.ps = q;
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
  } else {
    if (is_android) {
      mba.href = is_amazon ? "http://www.amazon.com/Lowtech-Enterprises-slither-io/dp/B01E312TYQ/" : "https://play.google.com/store/apps/details?id=air.com.hypah.io.slither";
    }
  }
}
resize();
o = {
  f : function(b, q, f) {
    if ("success" == q) {
      loadSos(b);
    }
  }
};
getData("/i2.txt", o);
