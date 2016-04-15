 connect = function() {
    if (0 == sos.length)
        waiting_for_sos || (waiting_for_sos = !0,
        sos_ready_after_mtm = -1);
    else {
        waiting_for_sos = !1;
        sos_ready_after_mtm = -1;
        resetGame();
        connecting = !0;
        start_connect_mtm = Date.now();
        if (!forcing) {
            for (var b = 0; b < sos.length; b++)
                sos[b].ptm = 9999999;
            for (b = 0; b < sis.length; b++) {
                var q = sis[b];
                if (0 < q.ptms.length) {
                    for (var f = 0, h = q.ptms.length - 1; 0 <= h; h--)
                        f += q.ptms[h];
                    f /= q.ptms.length;
                    for (h = sos.length - 1; 0 <= h; h--)
                        sos[h].ip == q.ip && (sos[h].ptm = f)
                }
            }
            if ("undefined" != typeof rmsos)
                for (b = 0; b < rmsos.length; b++)
                    for (q = 
                    "." + rmsos[b].a[0] + "." + rmsos[b].a[1] + "." + rmsos[b].a[2],
                    f = rmsos[b].a[3],
                    h = sos.length - 1; 0 <= h; h--)
                        0 <= sos[h].ip.indexOf(q) && sos[h].po == f && sos.splice(h, 1);
            sos.sort(function(b, e) {
                return parseFloat(b.po) - parseFloat(e.po)
            });
            bso = sos[Math.floor(Math.random() * sos.length)];
            for (b = sos.length - 1; 0 <= b; b--)
                sos[b].tainted || sos[b].ptm <= bso.ptm && 30 < sos[b].ac && (bso = sos[b])
        }
        ws = new WebSocket("ws://" + bso.ip + ":" + bso.po + "/slither");
        ws.binaryType = "arraybuffer";
        window.ws = ws;
        ws.onmessage = function(b) {
            if (ws == this && (b = new Uint8Array(b.data),
            rdps += b.length,
            2 <= b.length)) {
                lptm = cptm;
                cptm = Date.now();
                var e = b[0] << 8 | b[1]
                  , c = cptm - lptm;
                0 == lptm && (c = 0);
                etm += c - e;
                testing && (rdpspc[b[2]] += b.length);
                var f = String.fromCharCode(b[2])
                  , e = 3
                  , h = b.length
                  , c = b.length - 2
                  , q = b.length - 3;
                  
               
                  
                if ("a" == f)
                    connecting = !1,
                    playing = connected = !0,
                    play_btn_click_mtm = -1,
                    grd = b[e] << 16 | b[e + 1] << 8 | b[e + 2],
                    e += 3,
                    c = b[e] << 8 | b[e + 1],
                    e += 2,
                    sector_size = b[e] << 8 | b[e + 1],
                    e += 2,
                    sector_count_along_edge = b[e] << 8 | b[e + 1],
                    e += 2,
                    spangdv = b[e] / 10,
                    e++,
                    nsp1 = (b[e] << 8 | b[e + 1]) / 100,
                    e += 2,
                    nsp2 = (b[e] << 8 | b[e + 1]) / 100,
                    e += 2,
                    nsp3 = 
                    (b[e] << 8 | b[e + 1]) / 100,
                    e += 2,
                    mamu = (b[e] << 8 | b[e + 1]) / 1E3,
                    e += 2,
                    mamu2 = (b[e] << 8 | b[e + 1]) / 1E3,
                    e += 2,
                    cst = (b[e] << 8 | b[e + 1]) / 1E3,
                    e += 2,
                    e < h && (protocol_version = b[e]),
                    console.log("game radius = " + grd),
                    setMscps(c),
                    lbh.style.display = "inline",
                    lbs.style.display = "inline",
                    lbn.style.display = "inline",
                    lbp.style.display = "inline",
                    lbf.style.display = "inline",
                    vcm.style.display = "inline",
                    loch.style.display = "inline",
                    startShowGame();
                else if ("e" == f || "E" == f || "3" == f || "4" == f || "5" == f) {
                    
                    
                    var w = b[e] << 8 | b[e + 1]
                      , e = e + 2
                      , D = h = -1
                      , x = -1
                      , A = -1;
                      
                      if(f==="e" && w === snake.id){
                        console.log(new Date().getTime() + " from server " + f + " " +b);
                    }
  
                      
                    if (6 <= protocol_version)
                        6 == 
                        c ? (h = "e" == f ? 1 : 2,
                        D = 2 * b[e] * Math.PI / 256,
                        e++,
                        x = 2 * b[e] * Math.PI / 256,
                        e++,
                        A = b[e] / 18) : 5 == c ? "e" == f ? (D = 2 * b[e] * Math.PI / 256,
                        e++,
                        A = b[e] / 18) : "E" == f ? (h = 1,
                        x = 2 * b[e] * Math.PI / 256,
                        e++,
                        A = b[e] / 18) : "4" == f ? (h = 2,
                        x = 2 * b[e] * Math.PI / 256,
                        e++,
                        A = b[e] / 18) : "3" == f ? (h = 1,
                        D = 2 * b[e] * Math.PI / 256,
                        e++,
                        x = 2 * b[e] * Math.PI / 256) : "5" == f && (h = 2,
                        D = 2 * b[e] * Math.PI / 256,
                        e++,
                        x = 2 * b[e] * Math.PI / 256) : 4 == c && ("e" == f ? D = 2 * b[e] * Math.PI / 256 : "E" == f ? (h = 1,
                        x = 2 * b[e] * Math.PI / 256) : "4" == f ? (h = 2,
                        x = 2 * b[e] * Math.PI / 256) : "3" == f && (A = b[e] / 18));
                    else if (3 <= protocol_version) {
                        "3" != f && 
                        (8 == c || 7 == c || 6 == c && "3" != f || 5 == c && "3" != f) && (h = "e" == f ? 1 : 2);
                        if (8 == c || 7 == c || 5 == c && "3" == f || 6 == c && "3" == f)
                            D = 2 * (b[e] << 8 | b[e + 1]) * Math.PI / 65535,
                            e += 2;
                        if (8 == c || 7 == c || 5 == c && "3" != f || 6 == c && "3" != f)
                            x = 2 * (b[e] << 8 | b[e + 1]) * Math.PI / 65535,
                            e += 2;
                        if (8 == c || 6 == c || 4 == c)
                            A = b[e] / 18
                    } else {
                        if (11 == q || 8 == q || 9 == q || 6 == q)
                            h = b[e] - 48,
                            e++;
                        if (11 == q || 7 == q || 9 == q || 5 == q)
                            D = 2 * (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) * Math.PI / 16777215,
                            e += 3;
                        if (11 == q || 8 == q || 9 == q || 6 == q)
                            x = 2 * (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) * Math.PI / 16777215,
                            e += 3;
                        if (11 == q || 7 == q || 8 == q || 4 == q)
                            A = (b[e] << 8 | b[e + 
                            1]) / 1E3
                    }
                    var t = os["s" + w];
                    if (t) {
                        -1 != h && (t.dir = h);
                        anguc++;
                        if (-1 != D) {
                            t.ang == D && angnuc++;
                            b = (D - t.ang) % pi2;
                            0 > b && (b += pi2);
                            b > Math.PI && (b -= pi2);
                            w = t.fapos;
                            for (q = 0; q < afc; q++)
                                t.fas[w] -= b * afas[q],
                                w++,
                                w >= afc && (w = 0);
                            t.fatg = afc;
                            t.ang = D
                        }
                        -1 != x && (t.wang == x && wangnuc++,
                        t.wang = x,
                        t != snake && (t.eang = x));
                        -1 != A && (t.sp = A,
                        t.spang = t.sp / spangdv,
                        1 < t.spang && (t.spang = 1))
                    }
                } else if ("h" == f) {
                    var w = b[e] << 8 | b[e + 1]
                      , e = e + 2
                      , H = (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) / 16777215;
                    if (t = os["s" + w])
                        t.fam = H,
                        snl(t)
                } else if ("r" == f) {
                    if (w = b[e] << 8 | b[e + 1],
                    e += 2,
                    t = os["s" + 
                    w]) {
                        4 <= q && (t.fam = (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) / 16777215);
                        for (q = 0; q < t.pts.length; q++)
                            if (!t.pts[q].dying) {
                                t.pts[q].dying = !0;
                                t.sct--;
                                t.sc = Math.min(6, 1 + (t.sct - 2) / 106);
                                t.scang = .13 + .87 * Math.pow((7 - t.sc) / 6, 2);
                                t.ssp = nsp1 + nsp2 * t.sc;
                                t.fsp = t.ssp + .1;
                                t.wsep = 6 * t.sc;
                                b = nsep / gsc;
                                t.wsep < b && (t.wsep = b);
                                break
                            }
                        snl(t)
                    }
                } else if ("g" == f || "n" == f || "G" == f || "N" == f) {
                 
                            console.log(new Date() + " from server " + f + " " +b);
                     
                    if (playing && (H = "n" == f || "N" == f,
                    w = b[e] << 8 | b[e + 1],
                    e += 2,
                    t = os["s" + w])) {
                        
                        
                        
                        if (H)
                            t.sct++;
                        else
                            for (q = 0; q < t.pts.length; q++)
                                if (!t.pts[q].dying) {
                                    t.pts[q].dying = !0;
                                    break
                                }
                        var z = t.pts[t.pts.length - 
                        1]
                          , q = z
                          , h = !1;
                        3 <= protocol_version ? "g" == f || "n" == f ? (c = b[e] << 8 | b[e + 1],
                        e += 2,
                        C = b[e] << 8 | b[e + 1],
                        e += 2) : (c = q.xx + b[e] - 128,
                        e++,
                        C = q.yy + b[e] - 128,
                        e++) : (c = (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) / 5,
                        e += 3,
                        C = (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) / 5,
                        e += 3);
                        H && (t.fam = (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) / 16777215);
                        (z = points_dp.get()) || (z = {
                            exs: [],
                            eys: [],
                            efs: [],
                            ems: []
                        });
                        z.eiu = 0;
                        z.xx = c;
                        z.yy = C;
                        z.fx = 0;
                        z.fy = 0;
                        z.da = 0;
                        z.ebx = z.xx - q.xx;
                        z.eby = z.yy - q.yy;
                        t.pts.push(z);
                        h = !0;
                        t.iiv && (b = t.xx + t.fx - z.xx,
                        e = t.yy + t.fy - z.yy,
                        z.fx += b,
                        z.fy += e,
                        z.exs[z.eiu] = b,
                        z.eys[z.eiu] = e,
                        z.efs[z.eiu] = 
                        0,
                        z.ems[z.eiu] = 1,
                        z.eiu++);
                        w = t.pts.length - 3;
                        if (1 <= w)
                            for (D = t.pts[w],
                            f = n = 0,
                            q = w - 1; 0 <= q; q--)
                                w = t.pts[q],
                                n++,
                                b = w.xx,
                                e = w.yy,
                                4 >= n && (f = cst * n / 4),
                                w.xx += (D.xx - w.xx) * f,
                                w.yy += (D.yy - w.yy) * f,
                                t.iiv && (b -= w.xx,
                                e -= w.yy,
                                w.fx += b,
                                w.fy += e,
                                w.exs[w.eiu] = b,
                                w.eys[w.eiu] = e,
                                w.efs[w.eiu] = 0,
                                w.ems[w.eiu] = 2,
                                w.eiu++),
                                D = w;
                        t.sc = Math.min(6, 1 + (t.sct - 2) / 106);
                        t.scang = .13 + .87 * Math.pow((7 - t.sc) / 6, 2);
                        t.ssp = nsp1 + nsp2 * t.sc;
                        t.fsp = t.ssp + .1;
                        t.wsep = 6 * t.sc;
                        b = nsep / gsc;
                        t.wsep < b && (t.wsep = b);
                        H && snl(t);
                        t.lnp = z;
                        t == snake && (ovxx = snake.xx + snake.fx,
                        ovyy = snake.yy + 
                        snake.fy);
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
                        for (q = 0; q < rfc; q++)
                            t.fxs[w] -= b * rfas[q],
                            t.fys[w] -= e * rfas[q],
                            t.fchls[w] -= c * rfas[q],
                            w++,
                            w >= rfc && (w = 0);
                        t.fx = t.fxs[t.fpos];
                        t.fy = t.fys[t.fpos];
                        t.fchl = t.fchls[t.fpos];
                        t.ftg = rfc;
                        h && (t.ehl = 0);
                        if (t == snake) {
                            view_xx = snake.xx + snake.fx;
                            view_yy = snake.yy + snake.fy;
                            b = view_xx - ovxx;
                            e = view_yy - ovyy;
                            w = fvpos;
                            for (q = 0; q < vfc; q++)
                                fvxs[w] -= b * vfas[q],
                                fvys[w] -= e * vfas[q],
                                w++,
                                w >= vfc && (w = 0);
                            fvtg = vfc
                        }
                    }
                } else if ("l" == f) {
                    if (playing) {
                        wumsts = !0;
                        D = z = C = "";
                        A = x = 0;
                        -1 == lb_fr && -1 == dead_mtm && (lb_fr = 0);
                        var L = b[e];
                        e++;
                        rank = b[e] << 8 | b[e + 1];
                        rank < best_rank && (best_rank = rank);
                        e += 2;
                        snake_count = b[e] << 8 | b[e + 1];
                        snake_count > biggest_snake_count && (biggest_snake_count = snake_count);
                        for (e += 2; e < h; ) {
                            var I = b[e] << 8 | b[e + 1]
                              , e = e + 2
                              , H = (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) / 16777215
                              , e = e + 3
                              , t = b[e] % 9;
                            e++;
                            c = b[e];
                            e++;
                            f = "";
                            for (q = 0; q < c; q++)
                                w = b[e],
                                f = 38 == w ? f + "&amp;" : 60 == w ? f + "&lt;" : 62 == w ? f + "&gt;" : 32 == w ? f + "&nbsp;" : f + String.fromCharCode(b[e]),
                                e++;
                            A++;
                            x++;
                            score = Math.floor(150 * (fpsls[I] + H / fmlts[I] - 1) - 50) / 10;
                            w = A == L ? 1 : .7 * (.3 + .7 * (1 - x / 10));
                            C += '<span style="opacity:' + w + "; color:" + per_color_imgs[t].cs + ';">' + score + "</span><BR>";
                            z += '<span style="opacity:' + w + "; color:" + per_color_imgs[t].cs + ";" + (A == L ? "font-weight:bold;" : "") + '">' + f + "</span><BR>";
                            D += '<span style="opacity:' + w + "; color:" + per_color_imgs[t].cs + ';">#' + x + "</span><BR>"
                        }
                        lbs.innerHTML = C;
                        lbn.innerHTML = z;
                        lbp.innerHTML = D
                    }
                } else if ("v" == f)
                    2 == b[e] ? (want_close_socket = !0,
                    want_victory_message = !1,
                    want_hide_victory = 
                    1,
                    hvfr = 0) : (dead_mtm = Date.now(),
                    play_btn.setEnabled(!0),
                    c = Math.floor(150 * (fpsls[snake.sct] + snake.fam / fmlts[snake.sct] - 1) - 50) / 10,
                    twt.href = "http://twitter.com/intent/tweet?status=" + encodeURIComponent("I got a length of " + c + " in http://slither.io! Can you beat that? #slitherio"),
                    C = "Your final length was",
                    "FR" == country ? C = "Votre longueur finale \u00e9tait de" : "BR" == country && (C = "Seu comprimento final foi de"),
                    h = "",
                    1E3 < c && (h = "!"),
                    lastscore.innerHTML = '<span style="opacity: .45;">' + C + " </span><b>" + c + "</b>" + 
                    h,
                    c = "Play Again",
                    "FR" == country ? c = "Jouer" : "BR" == country && (c = "Joga"),
                    play_btn.setText(String.fromCharCode(160) + c + String.fromCharCode(160)),
                    1 == b[e] ? (nick_holder.style.display = "none",
                    playh.style.display = "none",
                    smh.style.display = "none",
                    victory_holder.style.display = "inline",
                    saveh.style.display = "block",
                    want_victory_focus = want_victory_message = !0,
                    victory.disabled = !1,
                    save_btn.setEnabled(!0)) : want_close_socket = !0);
                else if ("w" == f)
                    if (h = b[e],
                    e++,
                    c = b[e] << 8 | b[e + 1],
                    e += 2,
                    C = b[e] << 8 | b[e + 1],
                    1 == h)
                        t = {},
                        t.xx = c,
                        t.yy = C,
                        sectors.push(t);
                    else {
                        for (z = cm1 = foods_c - 1; 0 <= z; z--)
                            q = foods[z],
                            q.sx == c && q.sy == C && (z == cm1 ? foods[z] = null  : (foods[z] = foods[cm1],
                            foods[cm1] = null ),
                            foods_c--,
                            cm1--);
                        for (z = sectors.length - 1; 0 <= z; z--)
                            t = sectors[z],
                            t.xx == c && t.yy == C && sectors.splice(z, 1)
                    }
                else if ("m" == f) {
                    I = b[e] << 16 | b[e + 1] << 8 | b[e + 2];
                    e += 3;
                    H = (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) / 16777215;
                    e += 3;
                    C = Math.floor(150 * (fpsls[I] + H / fmlts[I] - 1) - 50) / 10;
                    c = b[e];
                    e++;
                    q = "";
                    for (z = 0; z < c; z++)
                        q += String.fromCharCode(b[e]),
                        e++;
                    for (c = ""; e < h; )
                        c += String.fromCharCode(b[e]),
                        e++;
                    q = q.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
                    c = c.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
                    0 < C && (b = "",
                    0 < c.length && (b += "<span style='font-size:17px;'><b><i><span style='opacity: .5;'>&quot;</span>" + c + "<span style='opacity: .5;'>&quot;</span></i></b></span><BR><div style='height: 5px;'></div>"),
                    0 < q.length ? (b = 0 < c.length ? b + ("<i><span style='opacity: .5;'>- </span><span style='opacity: .75;'><b>" + q + "</b></span><span style='opacity: .5;'>, today's longest</span></i>") : "<i><span style='opacity: .5;'>Today's longest was </span><span style='opacity: .75;'><b>" + 
                    q + "</b></span></i>",
                    b += "<br><i><span style='opacity: .5;'>with a length of </span><span style='opacity: .65;'><b>" + C + "</b></span></i>") : b = 0 < c.length ? b + "<i><span style='opacity: .5;'>- </span><span style='opacity: .5;'>today's longest</span></i>" + ("<br><i><span style='opacity: .5;'>with a length of </span><span style='opacity: .65;'><b>" + C + "</b></span></i>") : b + ("<i><span style='opacity: .5;'>Today's longest: </span><span style='opacity: .75;'><b>" + C + "</b></span></i>"),
                    vcm.innerHTML = b)
                } else if ("p" == 
                f)
                    wfpr = !1,
                    lagging && (etm *= lag_mult,
                    lagging = !1);
                else if ("u" == f) {
                    q = asmc.getContext("2d");
                    q.clearRect(0, 0, 80, 80);
                    q.fillStyle = "#FFFFFF";
                    for (var C = c = 0; e < h && !(80 <= C); )
                        if (w = b[e++],
                        128 <= w)
                            for (w -= 128,
                            z = 0; z < w && !(c++,
                            80 <= c && (c = 0,
                            C++,
                            80 <= C)); z++)
                                ;
                        else
                            for (z = 0; 7 > z && !(0 < (w & u_m[z]) && q.fillRect(c, C, 1, 1),
                            c++,
                            80 <= c && (c = 0,
                            C++,
                            80 <= C)); z++)
                                ;
                } else if ("s" == f) {
                    if (playing)
                        if (w = b[e] << 8 | b[e + 1],
                        e += 2,
                        6 < q) {
                            D = 2 * (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) * Math.PI / 16777215;
                            e += 3;
                            e++;
                            x = 2 * (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) * Math.PI / 16777215;
                            e += 3;
                            A = (b[e] << 8 | 
                            b[e + 1]) / 1E3;
                            e += 2;
                            H = (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) / 16777215;
                            e += 3;
                            t = b[e];
                            e++;
                            var L = []
                              , I = (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) / 5
                              , e = e + 3
                              , K = (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) / 5
                              , e = e + 3
                              , c = b[e];
                            e++;
                            f = "";
                            for (q = 0; q < c; q++)
                                f += String.fromCharCode(b[e]),
                                e++;
                            for (var M = q = C = c = 0, O = !1; e < h; )
                                q = c,
                                M = C,
                                O ? (c += (b[e] - 127) / 2,
                                e++,
                                C += (b[e] - 127) / 2,
                                e++) : (c = (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) / 5,
                                e += 3,
                                C = (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) / 5,
                                e += 3,
                                q = c,
                                M = C,
                                O = !0),
                                (z = points_dp.get()) || (z = {
                                    exs: [],
                                    eys: [],
                                    efs: [],
                                    ems: []
                                }),
                                z.eiu = 0,
                                z.xx = c,
                                z.yy = C,
                                z.fx = 0,
                                z.fy = 0,
                                z.da = 0,
                                z.ebx = c - q,
                                z.eby = 
                                C - M,
                                L.push(z);
                            t = newSnake(w, I, K, t, D, L);
                            null  == snake && (view_xx = c,
                            view_yy = C,
                            snake = t);
                            t.nk = f;
                            t.eang = t.wang = x;
                            t.sp = A;
                            t.spang = t.sp / spangdv;
                            1 < t.spang && (t.spang = 1);
                            t.fam = H;
                            t.sc = Math.min(6, 1 + (t.sct - 2) / 106);
                            t.scang = .13 + .87 * Math.pow((7 - t.sc) / 6, 2);
                            t.ssp = nsp1 + nsp2 * t.sc;
                            t.fsp = t.ssp + .1;
                            t.wsep = 6 * t.sc;
                            b = nsep / gsc;
                            t.wsep < b && (t.wsep = b);
                            t.sep = t.wsep;
                            snl(t)
                        } else
                            for (b = 1 == b[e],
                            z = snakes.length - 1; 0 <= z; z--)
                                if (snakes[z].id == w) {
                                    snakes[z].id = -1234;
                                    b ? (snakes[z].dead = !0,
                                    snakes[z].dead_amt = 0,
                                    snakes[z].edir = 0) : snakes.splice(z, 1);
                                    delete os["s" + w];
                                    break
                                }

                } else if ("F" == f)
                    if (4 <= protocol_version) {
                        for (f = !1; e < h; )
                            t = b[e],
                            e++,
                            c = b[e] << 8 | b[e + 1],
                            e += 2,
                            C = b[e] << 8 | b[e + 1],
                            e += 2,
                            q = b[e] / 5,
                            e++,
                            w = C * grd * 3 + c,
                            q = newFood(w, c, C, q, !0, t),
                            f || (f = !0,
                            z = Math.floor(c / sector_size),
                            H = Math.floor(C / sector_size)),
                            q.sx = z,
                            q.sy = H;
                        t = {};
                        t.xx = z;
                        t.yy = H;
                        sectors.push(t)
                    } else
                        for (z = b[e] << 8 | b[e + 1],
                        e += 2,
                        H = b[e] << 8 | b[e + 1],
                        e += 2,
                        t = {},
                        t.xx = z,
                        t.yy = H,
                        sectors.push(t); e < h; )
                            w = b[e] << 16 | b[e + 1] << 8 | b[e + 2],
                            e += 3,
                            t = b[e],
                            e++,
                            c = sector_size * (z + b[e] / 255),
                            e++,
                            C = sector_size * (H + b[e] / 255),
                            e++,
                            q = b[e] / 
                            5,
                            e++,
                            q = newFood(w, c, C, q, !0, t),
                            q.sx = z,
                            q.sy = H;
                else if ("b" == f || "f" == f)
                    4 <= protocol_version ? (t = b[e],
                    e++,
                    4 < q && (c = b[e] << 8 | b[e + 1],
                    e += 2,
                    C = b[e] << 8 | b[e + 1],
                    w = C * grd * 3 + c,
                    q = b[e + 2] / 5,
                    q = newFood(w, c, C, q, "b" == f, t),
                    q.sx = Math.floor(c / sector_size),
                    q.sy = Math.floor(C / sector_size))) : (w = b[e] << 16 | b[e + 1] << 8 | b[e + 2],
                    e += 3,
                    4 < q && (t = b[e],
                    e++,
                    z = b[e] << 8 | b[e + 1],
                    e += 2,
                    H = b[e] << 8 | b[e + 1],
                    e += 2,
                    c = sector_size * (z + b[e] / 255),
                    e++,
                    C = sector_size * (H + b[e] / 255),
                    e++,
                    q = b[e] / 5,
                    q = newFood(w, c, C, q, "b" == f, t),
                    q.sx = z,
                    q.sy = H));
                else if ("c" == f) {
                    4 <= protocol_version ? 
                    (c = b[e] << 8 | b[e + 1],
                    e += 2,
                    C = b[e] << 8 | b[e + 1],
                    e += 2,
                    w = C * grd * 3 + c) : (w = b[e] << 16 | b[e + 1] << 8 | b[e + 2],
                    e += 3);
                    for (z = cm1 = foods_c - 1; 0 <= z; z--)
                        if (q = foods[z],
                        q.id == w) {
                            q.eaten = !0;
                            e + 2 <= h ? (b = b[e] << 8 | b[e + 1],
                            q.eaten_by = os["s" + b],
                            q.eaten_fr = 0) : (z == cm1 ? foods[z] = null  : (foods[z] = foods[cm1],
                            foods[cm1] = null ),
                            foods_c--,
                            cm1--);
                            w = -1;
                            break
                        }
                    -1 != w && console.log("wtf")
                } else if ("j" == f) {
                    w = b[e] << 8 | b[e + 1];
                    e += 2;
                    c = 1 + 3 * (b[e] << 8 | b[e + 1]);
                    e += 2;
                    C = 1 + 3 * (b[e] << 8 | b[e + 1]);
                    e += 2;
                    h = null ;
                    for (z = preys.length - 1; 0 <= z; z--)
                        if (preys[z].id == w) {
                            h = preys[z];
                            break
                        }
                    if (h) {
                        z = 
                        etm / 8 * h.sp / 4;
                        z *= lag_mult;
                        f = h.xx;
                        w = h.yy;
                        15 == q ? (h.dir = b[e] - 48,
                        e++,
                        h.ang = 2 * (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) * Math.PI / 16777215,
                        e += 3,
                        h.wang = 2 * (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) * Math.PI / 16777215,
                        e += 3,
                        h.sp = (b[e] << 8 | b[e + 1]) / 1E3) : 11 == q ? (h.ang = 2 * (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) * Math.PI / 16777215,
                        e += 3,
                        h.sp = (b[e] << 8 | b[e + 1]) / 1E3) : 12 == q ? (h.dir = b[e] - 48,
                        e++,
                        h.wang = 2 * (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) * Math.PI / 16777215,
                        e += 3,
                        h.sp = (b[e] << 8 | b[e + 1]) / 1E3) : 13 == q ? (h.dir = b[e] - 48,
                        e++,
                        h.ang = 2 * (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) * Math.PI / 16777215,
                        e += 3,
                        h.wang = 
                        2 * (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) * Math.PI / 16777215) : 9 == q ? h.ang = 2 * (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) * Math.PI / 16777215 : 10 == q ? (h.dir = b[e] - 48,
                        e++,
                        h.wang = 2 * (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) * Math.PI / 16777215) : 8 == q && (h.sp = (b[e] << 8 | b[e + 1]) / 1E3);
                        h.xx = c + Math.cos(h.ang) * z;
                        h.yy = C + Math.sin(h.ang) * z;
                        b = h.xx - f;
                        e = h.yy - w;
                        w = h.fpos;
                        for (q = 0; q < rfc; q++)
                            h.fxs[w] -= b * rfas[q],
                            h.fys[w] -= e * rfas[q],
                            w++,
                            w >= rfc && (w = 0);
                        h.fx = h.fxs[h.fpos];
                        h.fy = h.fys[h.fpos];
                        h.ftg = rfc
                    }
                } else if ("y" == f)
                    if (w = b[e] << 8 | b[e + 1],
                    e += 2,
                    2 == q)
                        for (z = preys.length - 1; 0 <= z; z--) {
                            if (h = 
                            preys[z],
                            h.id == w) {
                                preys.splice(z, 1);
                                break
                            }
                        }
                    else if (4 == q)
                        for (b = b[e] << 8 | b[e + 1],
                        z = preys.length - 1; 0 <= z; z--) {
                            if (h = preys[z],
                            h.id == w) {
                                h.eaten = !0;
                                h.eaten_by = os["s" + b];
                                h.eaten_by ? h.eaten_fr = 0 : preys.splice(z, 1);
                                break
                            }
                        }
                    else
                        t = b[e],
                        e++,
                        c = (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) / 5,
                        e += 3,
                        C = (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) / 5,
                        e += 3,
                        q = b[e] / 5,
                        e++,
                        h = b[e] - 48,
                        e++,
                        x = 2 * (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) * Math.PI / 16777215,
                        e += 3,
                        D = 2 * (b[e] << 16 | b[e + 1] << 8 | b[e + 2]) * Math.PI / 16777215,
                        e += 3,
                        A = (b[e] << 8 | b[e + 1]) / 1E3,
                        newPrey(w, c, C, q, t, h, x, D, A)
            }
        }
        ;
        ws.onerror = function(b) {}
        ;
        ws.onclose = function(b) {
            ws == this && (playing = connected = !1)
        }
        ;
        ws.onopen = function(b) {
            if (ws == this) {
                b = asciize(nick.value);
                24 < b.length && (b = b.substr(0, 24));
                var e = Math.floor(9 * Math.random());
                try {
                    var c = localStorage.snakercv;
                    c == "" + Number(c) && (e = Number(c))
                } catch (f) {}
                c = new Uint8Array(3 + b.length);
                c[0] = 115;
                c[1] = 5;
                c[2] = e;
                for (e = 0; e < b.length; e++)
                    c[e + 3] = b.charCodeAt(e);
                ws.send(c);
                high_quality = !0;
                gla = 1;
                wdfg = 0;
                qsm = 1;
                0 == want_quality && (high_quality = !1,
                gla = 0,
                qsm = 1.7);
                1 == render_mode && (high_quality = !1,
                gla = 0);
                lpstm = Date.now()
            }
        }
    }
}
