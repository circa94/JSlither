function connect() {
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
                var h = sis[b];
                if (0 < h.ptms.length) {
                    for (var c = 0, f = h.ptms.length - 1; 0 <= f; f--)
                        c += h.ptms[f];
                    c /= h.ptms.length;
                    for (f = sos.length - 1; 0 <= f; f--)
                        sos[f].ip == h.ip && (sos[f].ptm = c)
                }
            }
            if ("undefined" != typeof rmsos)
                for (b = 0; b < rmsos.length; b++)
                    for (h = 
                    "." + rmsos[b].a[0] + "." + rmsos[b].a[1] + "." + rmsos[b].a[2],
                    c = rmsos[b].a[3],
                    f = sos.length - 1; 0 <= f; f--)
                        0 <= sos[f].ip.indexOf(h) && sos[f].po == c && sos.splice(f, 1);
            sos.sort(function(b, c) {
                return parseFloat(b.po) - parseFloat(c.po)
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
                var c = b[0] << 8 | b[1]
                  , e = cptm - lptm;
                0 == lptm && (e = 0);
                etm += e - c;
                testing && (rdpspc[b[2]] += b.length);
                var f = String.fromCharCode(b[2])
                  , c = 3
                  , h = b.length
                  , e = b.length - 2
                  , t = b.length - 3;
                  
                  
                  
                  if(f == "a"){
                       //console.log("InitialPacket;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "e"){
                      console.log(new Date().getTime() + "   updateDirection;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "E"){
                      console.log(new Date().getTime() + "   Unkown;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "3"){
                      console.log(new Date().getTime() + "   Unkown;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "4"){
                     console.log(new Date().getTime() + "   Unkown;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "5"){
                      console.log(new Date().getTime() + "   Unkown;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "h"){
                      //console.log("eatFoodPacket;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "r"){
                      console.log(new Date().getTime() + "   Unkown;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "g"){
                      console.log(new Date().getTime() + "   updatePosition;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "n"){
                      console.log(new Date().getTime() + "   Unkown;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "G"){
                      console.log(new Date().getTime() + "   updateSnakeParts;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "N"){
                      console.log(new Date().getTime() + "   Unkown;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "l"){
                      console.log(new Date().getTime() + "   Unkown;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "v"){
                      console.log(new Date().getTime() + "   Unkown;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "w"){
                      console.log(new Date().getTime() + "   Unkown;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "m"){
                      console.log(new Date().getTime() + "   GlobalHighScorePacket;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "p"){
                      console.log(new Date().getTime() + "   pongPacket;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "u"){
                      console.log(new Date().getTime() + "   Unkown;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "F"){
                      //console.log("spawnFoodPacket;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "b"){
                      console.log(new Date().getTime() + "   Unkown;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "f"){
                      console.log(new Date().getTime() + "   Unkown;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "c"){
                      console.log(new Date().getTime() + "   Unkown;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "j"){
                      console.log(new Date().getTime() + "   Unkown;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "y"){
                      console.log(new Date().getTime() + "   Unkown;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "s"){
                       console.log(new Date().getTime() + "   newSnakePacket;  Type: " + f +  "  Data:  " + b);
                  }
                  
                  
                  
                  
                  
                  
                  
                  
                  
                if ("a" == f)
               
                    connecting = !1,
                    playing = connected = !0,
                    play_btn_click_mtm = -1,
                    grd = b[c] << 16 | b[c + 1] << 8 | b[c + 2],
                    c += 3,
                    e = b[c] << 8 | b[c + 1],
                    c += 2,
                    sector_size = b[c] << 8 | b[c + 1],
                    c += 2,
                    sector_count_along_edge = b[c] << 8 | b[c + 1],
                    c += 2,
                    spangdv = b[c] / 10,
                    c++,
                    nsp1 = (b[c] << 8 | b[c + 1]) / 100,
                    c += 2,
                    nsp2 = (b[c] << 8 | b[c + 1]) / 100,
                    c += 2,
                    nsp3 = 
                    (b[c] << 8 | b[c + 1]) / 100,
                    c += 2,
                    mamu = (b[c] << 8 | b[c + 1]) / 1E3,
                    c += 2,
                    mamu2 = (b[c] << 8 | b[c + 1]) / 1E3,
                    c += 2,
                    cst = (b[c] << 8 | b[c + 1]) / 1E3,
                    c += 2,
                    c < h && (protocol_version = b[c]),
                    console.log("game radius = " + grd),
                    setMscps(e),
                    lbh.style.display = "inline",
                    lbs.style.display = "inline",
                    lbn.style.display = "inline",
                    lbp.style.display = "inline",
                    lbf.style.display = "inline",
                    vcm.style.display = "inline",
                    loch.style.display = "inline",
                    startShowGame();
                else if ("e" == f || "E" == f || "3" == f || "4" == f || "5" == f) {
                    
                    var x = b[c] << 8 | b[c + 1]
                      , c = c + 2
                      , D = h = -1
                      , y = -1
                      , B = -1;
                    if (6 <= protocol_version)
                        6 == 
                        e ? (h = "e" == f ? 1 : 2,
                        D = 2 * b[c] * Math.PI / 256,
                        c++,
                        y = 2 * b[c] * Math.PI / 256,
                        c++,
                        B = b[c] / 18) : 5 == e ? "e" == f ? (D = 2 * b[c] * Math.PI / 256,
                        c++,
                        B = b[c] / 18) : "E" == f ? (h = 1,
                        y = 2 * b[c] * Math.PI / 256,
                        c++,
                        B = b[c] / 18) : "4" == f ? (h = 2,
                        y = 2 * b[c] * Math.PI / 256,
                        c++,
                        B = b[c] / 18) : "3" == f ? (h = 1,
                        D = 2 * b[c] * Math.PI / 256,
                        c++,
                        y = 2 * b[c] * Math.PI / 256) : "5" == f && (h = 2,
                        D = 2 * b[c] * Math.PI / 256,
                        c++,
                        y = 2 * b[c] * Math.PI / 256) : 4 == e && ("e" == f ? D = 2 * b[c] * Math.PI / 256 : "E" == f ? (h = 1,
                        y = 2 * b[c] * Math.PI / 256) : "4" == f ? (h = 2,
                        y = 2 * b[c] * Math.PI / 256) : "3" == f && (B = b[c] / 18));
                    else if (3 <= protocol_version) {
                        "3" != f && 
                        (8 == e || 7 == e || 6 == e && "3" != f || 5 == e && "3" != f) && (h = "e" == f ? 1 : 2);
                        if (8 == e || 7 == e || 5 == e && "3" == f || 6 == e && "3" == f)
                            D = 2 * (b[c] << 8 | b[c + 1]) * Math.PI / 65535,
                            c += 2;
                        if (8 == e || 7 == e || 5 == e && "3" != f || 6 == e && "3" != f)
                            y = 2 * (b[c] << 8 | b[c + 1]) * Math.PI / 65535,
                            c += 2;
                        if (8 == e || 6 == e || 4 == e)
                            B = b[c] / 18
                    } else {
                        if (11 == t || 8 == t || 9 == t || 6 == t)
                            h = b[c] - 48,
                            c++;
                        if (11 == t || 7 == t || 9 == t || 5 == t)
                            D = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215,
                            c += 3;
                        if (11 == t || 8 == t || 9 == t || 6 == t)
                            y = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215,
                            c += 3;
                        if (11 == t || 7 == t || 8 == t || 4 == t)
                            B = (b[c] << 8 | b[c + 
                            1]) / 1E3
                    }
                    var q = os["s" + x];
                    if (q) {
                        -1 != h && (q.dir = h);
                        anguc++;
                        if (-1 != D) {
                            q.ang == D && angnuc++;
                            b = (D - q.ang) % pi2;
                            0 > b && (b += pi2);
                            b > Math.PI && (b -= pi2);
                            x = q.fapos;
                            for (t = 0; t < afc; t++)
                                q.fas[x] -= b * afas[t],
                                x++,
                                x >= afc && (x = 0);
                            q.fatg = afc;
                            q.ang = D
                        }
                        -1 != y && (q.wang == y && wangnuc++,
                        q.wang = y,
                        q != snake && (q.eang = y));
                        -1 != B && (q.sp = B,
                        q.spang = q.sp / spangdv,
                        1 < q.spang && (q.spang = 1))
                    }
                } else if ("h" == f) {
                    var x = b[c] << 8 | b[c + 1]
                      , c = c + 2
                      , I = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 16777215;
                    if (q = os["s" + x])
                        q.fam = I,
                        snl(q)
                } else if ("r" == f) {
                    if (x = b[c] << 8 | b[c + 1],
                    c += 2,
                    q = os["s" + 
                    x]) {
                        4 <= t && (q.fam = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 16777215);
                        for (t = 0; t < q.pts.length; t++)
                            if (!q.pts[t].dying) {
                                q.pts[t].dying = !0;
                                q.sct--;
                                q.sc = Math.min(6, 1 + (q.sct - 2) / 106);
                                q.scang = .13 + .87 * Math.pow((7 - q.sc) / 6, 2);
                                q.ssp = nsp1 + nsp2 * q.sc;
                                q.fsp = q.ssp + .1;
                                q.wsep = 6 * q.sc;
                                b = nsep / gsc;
                                q.wsep < b && (q.wsep = b);
                                break
                            }
                        snl(q)
                    }
                } else if ("g" == f || "n" == f || "G" == f || "N" == f) {
                    if (playing && (I = "n" == f || "N" == f,
                    x = b[c] << 8 | b[c + 1],
                    c += 2,
                    q = os["s" + x])) {
                        if (I)
                            q.sct++;
                        else
                            for (t = 0; t < q.pts.length; t++)
                                if (!q.pts[t].dying) {
                                    q.pts[t].dying = !0;
                                    break
                                }
                        var A = q.pts[q.pts.length - 
                        1]
                          , t = A
                          , h = !1;
                        3 <= protocol_version ? "g" == f || "n" == f ? (e = b[c] << 8 | b[c + 1],
                        c += 2,
                        C = b[c] << 8 | b[c + 1],
                        c += 2) : (e = t.xx + b[c] - 128,
                        c++,
                        C = t.yy + b[c] - 128,
                        c++) : (e = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 5,
                        c += 3,
                        C = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 5,
                        c += 3);
                        I && (q.fam = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 16777215);
                        (A = points_dp.get()) || (A = {
                            exs: [],
                            eys: [],
                            efs: [],
                            ems: []
                        });
                        A.eiu = 0;
                        A.xx = e;
                        A.yy = C;
                        A.fx = 0;
                        A.fy = 0;
                        A.da = 0;
                        A.ebx = A.xx - t.xx;
                        A.eby = A.yy - t.yy;
                        q.pts.push(A);
                        h = !0;
                        q.iiv && (b = q.xx + q.fx - A.xx,
                        c = q.yy + q.fy - A.yy,
                        A.fx += b,
                        A.fy += c,
                        A.exs[A.eiu] = b,
                        A.eys[A.eiu] = c,
                        A.efs[A.eiu] = 
                        0,
                        A.ems[A.eiu] = 1,
                        A.eiu++);
                        x = q.pts.length - 3;
                        if (1 <= x)
                            for (D = q.pts[x],
                            f = n = 0,
                            t = x - 1; 0 <= t; t--)
                                x = q.pts[t],
                                n++,
                                b = x.xx,
                                c = x.yy,
                                4 >= n && (f = cst * n / 4),
                                x.xx += (D.xx - x.xx) * f,
                                x.yy += (D.yy - x.yy) * f,
                                q.iiv && (b -= x.xx,
                                c -= x.yy,
                                x.fx += b,
                                x.fy += c,
                                x.exs[x.eiu] = b,
                                x.eys[x.eiu] = c,
                                x.efs[x.eiu] = 0,
                                x.ems[x.eiu] = 2,
                                x.eiu++),
                                D = x;
                        q.sc = Math.min(6, 1 + (q.sct - 2) / 106);
                        q.scang = .13 + .87 * Math.pow((7 - q.sc) / 6, 2);
                        q.ssp = nsp1 + nsp2 * q.sc;
                        q.fsp = q.ssp + .1;
                        q.wsep = 6 * q.sc;
                        b = nsep / gsc;
                        q.wsep < b && (q.wsep = b);
                        I && snl(q);
                        q.lnp = A;
                        q == snake && (ovxx = snake.xx + snake.fx,
                        ovyy = snake.yy + 
                        snake.fy);
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
                        for (t = 0; t < rfc; t++)
                            q.fxs[x] -= b * rfas[t],
                            q.fys[x] -= c * rfas[t],
                            q.fchls[x] -= e * rfas[t],
                            x++,
                            x >= rfc && (x = 0);
                        q.fx = q.fxs[q.fpos];
                        q.fy = q.fys[q.fpos];
                        q.fchl = q.fchls[q.fpos];
                        q.ftg = rfc;
                        h && (q.ehl = 0);
                        if (q == snake) {
                            view_xx = snake.xx + snake.fx;
                            view_yy = snake.yy + snake.fy;
                            b = view_xx - ovxx;
                            c = view_yy - ovyy;
                            x = fvpos;
                            for (t = 0; t < vfc; t++)
                                fvxs[x] -= b * vfas[t],
                                fvys[x] -= c * vfas[t],
                                x++,
                                x >= vfc && (x = 0);
                            fvtg = vfc
                        }
                    }
                } else if ("l" == f) {
                    if (playing) {
                        wumsts = !0;
                        D = A = C = "";
                        B = y = 0;
                        -1 == lb_fr && -1 == dead_mtm && (lb_fr = 0);
                        var L = b[c];
                        c++;
                        rank = b[c] << 8 | b[c + 1];
                        rank < best_rank && (best_rank = rank);
                        c += 2;
                        snake_count = b[c] << 8 | b[c + 1];
                        snake_count > biggest_snake_count && (biggest_snake_count = snake_count);
                        for (c += 2; c < h; ) {
                            var J = b[c] << 8 | b[c + 1]
                              , c = c + 2
                              , I = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 16777215
                              , c = c + 3
                              , q = b[c] % 9;
                            c++;
                            e = b[c];
                            c++;
                            B++;
                            f = "";
                            for (t = 0; t < e; t++)
                                x = b[c],
                                f += String.fromCharCode(x),
                                c++;
                            B != L && (gdnm(f) || (f = ""));
                            for (var H = "", t = 0; t < e; t++)
                                x = 
                                f.charCodeAt(t),
                                H = 38 == x ? H + "&amp;" : 60 == x ? H + "&lt;" : 62 == x ? H + "&gt;" : 32 == x ? H + "&nbsp;" : H + String.fromCharCode(x);
                            f = H;
                            y++;
                            score = Math.floor(150 * (fpsls[J] + I / fmlts[J] - 1) - 50) / 10;
                            x = B == L ? 1 : .7 * (.3 + .7 * (1 - y / 10));
                            C += '<span style="opacity:' + x + "; color:" + per_color_imgs[q].cs + ';">' + score + "</span><BR>";
                            A += '<span style="opacity:' + x + "; color:" + per_color_imgs[q].cs + ";" + (B == L ? "font-weight:bold;" : "") + '">' + f + "</span><BR>";
                            D += '<span style="opacity:' + x + "; color:" + per_color_imgs[q].cs + ';">#' + y + "</span><BR>"
                        }
                        lbs.innerHTML = C;
                        lbn.innerHTML = 
                        A;
                        lbp.innerHTML = D
                    }
                } else if ("v" == f)
                    2 == b[c] ? (want_close_socket = !0,
                    want_victory_message = !1,
                    want_hide_victory = 1,
                    hvfr = 0) : (dead_mtm = Date.now(),
                    play_btn.setEnabled(!0),
                    e = Math.floor(150 * (fpsls[snake.sct] + snake.fam / fmlts[snake.sct] - 1) - 50) / 10,
                    twt.href = "http://twitter.com/intent/tweet?status=" + encodeURIComponent("I got a length of " + e + " in http://slither.io! Can you beat that? #slitherio"),
                    C = "Your final length was",
                    "DE" == country ? C = "Deine endg\u00fcltige L\u00e4nge war" : "FR" == country ? C = "Votre longueur finale \u00e9tait de" : 
                    "BR" == country && (C = "Seu comprimento final foi de"),
                    h = "",
                    1E3 < e && (h = "!"),
                    lastscore.innerHTML = '<span style="opacity: .45;">' + C + " </span><b>" + e + "</b>" + h,
                    e = "Play Again",
                    "FR" == country ? e = "Jouer" : "BR" == country && (e = "Joga"),
                    play_btn.setText(String.fromCharCode(160) + e + String.fromCharCode(160)),
                    1 == b[c] ? (nick_holder.style.display = "none",
                    playh.style.display = "none",
                    smh.style.display = "none",
                    victory_holder.style.display = "inline",
                    saveh.style.display = "block",
                    want_victory_focus = want_victory_message = !0,
                    victory.disabled = 
                    !1,
                    save_btn.setEnabled(!0)) : want_close_socket = !0);
                else if ("w" == f)
                    if (h = b[c],
                    c++,
                    e = b[c] << 8 | b[c + 1],
                    c += 2,
                    C = b[c] << 8 | b[c + 1],
                    1 == h)
                        q = {},
                        q.xx = e,
                        q.yy = C,
                        sectors.push(q);
                    else {
                        for (A = cm1 = foods_c - 1; 0 <= A; A--)
                            t = foods[A],
                            t.sx == e && t.sy == C && (A == cm1 ? foods[A] = null  : (foods[A] = foods[cm1],
                            foods[cm1] = null ),
                            foods_c--,
                            cm1--);
                        for (A = sectors.length - 1; 0 <= A; A--)
                            q = sectors[A],
                            q.xx == e && q.yy == C && sectors.splice(A, 1)
                    }
                else if ("m" == f) {
                    J = b[c] << 16 | b[c + 1] << 8 | b[c + 2];
                    c += 3;
                    I = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 16777215;
                    c += 3;
                    C = Math.floor(150 * (fpsls[J] + 
                    I / fmlts[J] - 1) - 50) / 10;
                    e = b[c];
                    c++;
                    t = "";
                    for (A = 0; A < e; A++)
                        t += String.fromCharCode(b[c]),
                        c++;
                    for (e = ""; c < h; )
                        e += String.fromCharCode(b[c]),
                        c++;
                    t = t.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
                    e = e.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
                    0 < C && (b = "",
                    0 < e.length && (b += "<span style='font-size:17px;'><b><i><span style='opacity: .5;'>&quot;</span>" + e + "<span style='opacity: .5;'>&quot;</span></i></b></span><BR><div style='height: 5px;'></div>"),
                    0 < t.length ? 
                    (b = 0 < e.length ? b + ("<i><span style='opacity: .5;'>- </span><span style='opacity: .75;'><b>" + t + "</b></span><span style='opacity: .5;'>, today's longest</span></i>") : "<i><span style='opacity: .5;'>Today's longest was </span><span style='opacity: .75;'><b>" + t + "</b></span></i>",
                    b += "<br><i><span style='opacity: .5;'>with a length of </span><span style='opacity: .65;'><b>" + C + "</b></span></i>") : b = 0 < e.length ? b + "<i><span style='opacity: .5;'>- </span><span style='opacity: .5;'>today's longest</span></i>" + ("<br><i><span style='opacity: .5;'>with a length of </span><span style='opacity: .65;'><b>" + 
                    C + "</b></span></i>") : b + ("<i><span style='opacity: .5;'>Today's longest: </span><span style='opacity: .75;'><b>" + C + "</b></span></i>"),
                    vcm.innerHTML = b)
                } else if ("p" == f)
                    wfpr = !1,
                    lagging && (etm *= lag_mult,
                    lagging = !1);
                else if ("u" == f) {
                    t = asmc.getContext("2d");
                    t.clearRect(0, 0, 80, 80);
                    t.fillStyle = "#FFFFFF";
                    for (var C = e = 0; c < h && !(80 <= C); )
                        if (x = b[c++],
                        128 <= x)
                            for (x -= 128,
                            A = 0; A < x && !(e++,
                            80 <= e && (e = 0,
                            C++,
                            80 <= C)); A++)
                                ;
                        else
                            for (A = 0; 7 > A && !(0 < (x & u_m[A]) && t.fillRect(e, C, 1, 1),
                            e++,
                            80 <= e && (e = 0,
                            C++,
                            80 <= C)); A++)
                                ;
                } else if ("s" == f) {
                    if (playing)
                        if (x = 
                        b[c] << 8 | b[c + 1],
                        c += 2,
                        6 < t) {
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
                            for (t = 0; t < e; t++)
                                f += String.fromCharCode(b[c]),
                                c++;
                            for (var M = t = C = e = 0, O = !1; c < h; )
                                t = e,
                                M = C,
                                O ? (e += (b[c] - 127) / 2,
                                c++,
                                C += (b[c] - 127) / 2,
                                c++) : (e = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 5,
                                c += 3,
                                C = (b[c] << 16 | b[c + 1] << 
                                8 | b[c + 2]) / 5,
                                c += 3,
                                t = e,
                                M = C,
                                O = !0),
                                (A = points_dp.get()) || (A = {
                                    exs: [],
                                    eys: [],
                                    efs: [],
                                    ems: []
                                }),
                                A.eiu = 0,
                                A.xx = e,
                                A.yy = C,
                                A.fx = 0,
                                A.fy = 0,
                                A.da = 0,
                                A.ebx = e - t,
                                A.eby = C - M,
                                L.push(A);
                            q = newSnake(x, J, H, q, D, L);
                            null  == snake ? (view_xx = e,
                            view_yy = C,
                            snake = q,
                            q.nk = f) : (q.nk = f,
                            gdnm(f) || (q.nk = ""));
                            q.eang = q.wang = y;
                            q.sp = B;
                            q.spang = q.sp / spangdv;
                            1 < q.spang && (q.spang = 1);
                            q.fam = I;
                            q.sc = Math.min(6, 1 + (q.sct - 2) / 106);
                            q.scang = .13 + .87 * Math.pow((7 - q.sc) / 6, 2);
                            q.ssp = nsp1 + nsp2 * q.sc;
                            q.fsp = q.ssp + .1;
                            q.wsep = 6 * q.sc;
                            b = nsep / gsc;
                            q.wsep < b && (q.wsep = b);
                            q.sep = q.wsep;
                            snl(q)
                        } else
                            for (b = 1 == b[c],
                            A = snakes.length - 1; 0 <= A; A--)
                                if (snakes[A].id == x) {
                                    snakes[A].id = -1234;
                                    b ? (snakes[A].dead = !0,
                                    snakes[A].dead_amt = 0,
                                    snakes[A].edir = 0) : snakes.splice(A, 1);
                                    delete os["s" + x];
                                    break
                                }
                } else if ("F" == f)
                    if (4 <= protocol_version) {
                        for (f = !1; c < h; )
                            q = b[c],
                            c++,
                            e = b[c] << 8 | b[c + 1],
                            c += 2,
                            C = b[c] << 8 | b[c + 1],
                            c += 2,
                            t = b[c] / 5,
                            c++,
                            x = C * grd * 3 + e,
                            t = newFood(x, e, C, t, !0, q),
                            f || (f = !0,
                            A = Math.floor(e / sector_size),
                            I = Math.floor(C / sector_size)),
                            t.sx = A,
                            t.sy = I;
                        q = {};
                        q.xx = A;
                        q.yy = I;
                        sectors.push(q)
                    } else
                        for (A = b[c] << 8 | b[c + 1],
                        c += 2,
                        I = b[c] << 
                        8 | b[c + 1],
                        c += 2,
                        q = {},
                        q.xx = A,
                        q.yy = I,
                        sectors.push(q); c < h; )
                            x = b[c] << 16 | b[c + 1] << 8 | b[c + 2],
                            c += 3,
                            q = b[c],
                            c++,
                            e = sector_size * (A + b[c] / 255),
                            c++,
                            C = sector_size * (I + b[c] / 255),
                            c++,
                            t = b[c] / 5,
                            c++,
                            t = newFood(x, e, C, t, !0, q),
                            t.sx = A,
                            t.sy = I;
                else if ("b" == f || "f" == f)
                    4 <= protocol_version ? (q = b[c],
                    c++,
                    4 < t && (e = b[c] << 8 | b[c + 1],
                    c += 2,
                    C = b[c] << 8 | b[c + 1],
                    x = C * grd * 3 + e,
                    t = b[c + 2] / 5,
                    t = newFood(x, e, C, t, "b" == f, q),
                    t.sx = Math.floor(e / sector_size),
                    t.sy = Math.floor(C / sector_size))) : (x = b[c] << 16 | b[c + 1] << 8 | b[c + 2],
                    c += 3,
                    4 < t && (q = b[c],
                    c++,
                    A = b[c] << 8 | b[c + 1],
                    c += 2,
                    I = 
                    b[c] << 8 | b[c + 1],
                    c += 2,
                    e = sector_size * (A + b[c] / 255),
                    c++,
                    C = sector_size * (I + b[c] / 255),
                    c++,
                    t = b[c] / 5,
                    t = newFood(x, e, C, t, "b" == f, q),
                    t.sx = A,
                    t.sy = I));
                else if ("c" == f) {
                    4 <= protocol_version ? (e = b[c] << 8 | b[c + 1],
                    c += 2,
                    C = b[c] << 8 | b[c + 1],
                    c += 2,
                    x = C * grd * 3 + e) : (x = b[c] << 16 | b[c + 1] << 8 | b[c + 2],
                    c += 3);
                    for (A = cm1 = foods_c - 1; 0 <= A; A--)
                        if (t = foods[A],
                        t.id == x) {
                            t.eaten = !0;
                            c + 2 <= h ? (b = b[c] << 8 | b[c + 1],
                            t.eaten_by = os["s" + b],
                            t.eaten_fr = 0) : (A == cm1 ? foods[A] = null  : (foods[A] = foods[cm1],
                            foods[cm1] = null ),
                            foods_c--,
                            cm1--);
                            x = -1;
                            break
                        }
                    -1 != x && console.log("wtf")
                } else if ("j" == 
                f) {
                    x = b[c] << 8 | b[c + 1];
                    c += 2;
                    e = 1 + 3 * (b[c] << 8 | b[c + 1]);
                    c += 2;
                    C = 1 + 3 * (b[c] << 8 | b[c + 1]);
                    c += 2;
                    h = null ;
                    for (A = preys.length - 1; 0 <= A; A--)
                        if (preys[A].id == x) {
                            h = preys[A];
                            break
                        }
                    if (h) {
                        A = etm / 8 * h.sp / 4;
                        A *= lag_mult;
                        f = h.xx;
                        x = h.yy;
                        15 == t ? (h.dir = b[c] - 48,
                        c++,
                        h.ang = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215,
                        c += 3,
                        h.wang = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215,
                        c += 3,
                        h.sp = (b[c] << 8 | b[c + 1]) / 1E3) : 11 == t ? (h.ang = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215,
                        c += 3,
                        h.sp = (b[c] << 8 | b[c + 1]) / 1E3) : 12 == t ? (h.dir = b[c] - 48,
                        c++,
                        h.wang = 2 * (b[c] << 
                        16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215,
                        c += 3,
                        h.sp = (b[c] << 8 | b[c + 1]) / 1E3) : 13 == t ? (h.dir = b[c] - 48,
                        c++,
                        h.ang = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215,
                        c += 3,
                        h.wang = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215) : 9 == t ? h.ang = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215 : 10 == t ? (h.dir = b[c] - 48,
                        c++,
                        h.wang = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215) : 8 == t && (h.sp = (b[c] << 8 | b[c + 1]) / 1E3);
                        h.xx = e + Math.cos(h.ang) * A;
                        h.yy = C + Math.sin(h.ang) * A;
                        b = h.xx - f;
                        c = h.yy - x;
                        x = h.fpos;
                        for (t = 0; t < rfc; t++)
                            h.fxs[x] -= b * rfas[t],
                            h.fys[x] -= 
                            c * rfas[t],
                            x++,
                            x >= rfc && (x = 0);
                        h.fx = h.fxs[h.fpos];
                        h.fy = h.fys[h.fpos];
                        h.ftg = rfc
                    }
                } else if ("y" == f)
                    if (x = b[c] << 8 | b[c + 1],
                    c += 2,
                    2 == t)
                        for (A = preys.length - 1; 0 <= A; A--) {
                            if (h = preys[A],
                            h.id == x) {
                                preys.splice(A, 1);
                                break
                            }
                        }
                    else if (4 == t)
                        for (b = b[c] << 8 | b[c + 1],
                        A = preys.length - 1; 0 <= A; A--) {
                            if (h = preys[A],
                            h.id == x) {
                                h.eaten = !0;
                                h.eaten_by = os["s" + b];
                                h.eaten_by ? h.eaten_fr = 0 : preys.splice(A, 1);
                                break
                            }
                        }
                    else
                        q = b[c],
                        c++,
                        e = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 5,
                        c += 3,
                        C = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 5,
                        c += 3,
                        t = b[c] / 5,
                        c++,
                        h = b[c] - 48,
                        c++,
                        y = 2 * (b[c] << 16 | b[c + 
                        1] << 8 | b[c + 2]) * Math.PI / 16777215,
                        c += 3,
                        D = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215,
                        c += 3,
                        B = (b[c] << 8 | b[c + 1]) / 1E3,
                        newPrey(x, e, C, t, q, h, y, D, B)
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
                var c = Math.floor(9 * Math.random());
                try {
                    var e = localStorage.snakercv;
                    e == "" + Number(e) && (c = Number(e))
                } catch (f) {}
                e = new Uint8Array(3 + b.length);
                e[0] = 115;
                e[1] = 5;
                e[2] = c;
                for (c = 0; c < b.length; c++)
                    e[c + 3] = 
                    b.charCodeAt(c);
                ws.send(e);
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






oef = function() {
    var b = Date.now();
    avfr = vfr = (b - ltm) / 8;
    ltm = b;
    choosing_skin || (lagging || wfpr && 420 < b - last_ping_mtm && (lagging = !0),
    lagging ? (lag_mult *= .85,
    .01 > lag_mult && (lag_mult = .01)) : 1 > lag_mult && (lag_mult += .05,
    1 <= lag_mult && (lag_mult = 1)));
    120 < vfr && (vfr = 120);
    vfr *= lag_mult;
    etm *= lag_mult;
    lfr = fr;
    fr += vfr;
    vfrb = Math.floor(fr) - Math.floor(lfr);
    lfr2 = fr2;
    fr2 += 2 * vfr;
    vfrb2 = Math.floor(fr2) - Math.floor(lfr2);
    kd_l && (kd_l_frb += vfrb);
    kd_r && (kd_r_frb += vfrb);
    if (spinner_shown) {
        lsfr += avfr;
        var h = ldmc.getContext("2d");
        h.clearRect(0, 
        0, 512, 128);
        for (var c, f, w = 1; 2 >= w; w++) {
            h.beginPath();
            1 == w ? (h.fillStyle = "#60FF70",
            f = 0) : (h.fillStyle = "#9850FF",
            f = Math.PI);
            for (var u = 0; 256 >= u; u++)
                c = 32 + 5 * Math.cos(f + lsfr / 6 + 8 * u / 256) + 8 * u / 256,
                256 == u && (c += 10),
                xx = 64 + Math.cos(f + lsfr / 44 + .8 * Math.PI * u / 256) * c * 1.25,
                yy = 64 + Math.sin(f + lsfr / 44 + .8 * Math.PI * u / 256) * c,
                0 == u ? h.moveTo(xx, yy) : h.lineTo(xx, yy);
            c = 32;
            xx = 64 + Math.cos(f + lsfr / 44 + .8 * Math.PI * (u + 47) / 256) * c * 1.25;
            yy = 64 + Math.sin(f + lsfr / 44 + .8 * Math.PI * (u + 47) / 256) * c;
            h.lineTo(xx, yy);
            for (u = 256; 0 <= u; u--)
                c = 32 + 5 * Math.cos(f + lsfr / 6 + 
                8 * u / 256) - 8 * u / 256,
                256 == u && (c -= 10),
                xx = 64 + Math.cos(f + lsfr / 44 + .8 * Math.PI * u / 256) * c * 1.25,
                yy = 64 + Math.sin(f + lsfr / 44 + .8 * Math.PI * u / 256) * c,
                h.lineTo(xx, yy);
            h.fill()
        }
        connecting ? (ss_a += avfr / 86,
        1 <= ss_a && (ss_a = 1),
        ss_sh += avfr / 93,
        1 <= ss_sh && (ss_sh = 1)) : (ss_a -= avfr / 86,
        0 >= ss_a && (ss_sh = ss_a = 0,
        ldmc.style.display = "none",
        trf(ldmc, "")));
        ldmc.style.opacity = ss_a;
        u = Math.round(.1 + .9 * ss_sh * (1 + 2 * Math.pow(1 - ss_a, 2)) * 1E5) / 1E5;
        trf(ldmc, "scale(" + u + "," + u + ")")
    }
    if (-1 != play_btn_click_mtm && 6666 < b - play_btn_click_mtm) {
        u = document.createElement("img");
        f = [];
        f.push("bso=" + encodeURIComponent(bso));
        if (bso)
            for (var e in bso)
                f.push(e + "=" + encodeURIComponent(bso[e]));
        f.push("waiting_for_sos=" + (waiting_for_sos ? "true" : "false"));
        f.push("soslen=" + sos.length);
        f.push("sislen=" + sis.length);
        u.src = "http://slither.io/cnc.jpg?" + f.join("&");
        play_btn_click_mtm = -1
    }
    waiting_for_sos && b > sos_ready_after_mtm && (connecting || connected || connect());
    connecting && 3E3 < b - start_connect_mtm && (bso && (bso.tainted = !0),
    connect());
    if (choosing_skin) {
        for (u = snakes.length - 1; 0 <= u; u--)
            for (e = snakes[u],
            w = e.pts.length - 1; 0 <= w; w--)
                e.pts[w].yy = grd / 2 + 15 * Math.cos(w / 4 + fr / 19) * (1 - w / e.pts.length);
        view_xx -= vfr
    }
    playing && (high_quality ? (1 > gla && (gla += .0075 * vfr,
    1 < gla && (gla = 1)),
    1 < qsm && (qsm -= 4E-5 * vfr,
    1 > qsm && (qsm = 1))) : (0 < gla && (gla -= .0075 * vfr,
    0 > gla && (gla = 0)),
    qsm < mqsm && (qsm += 4E-5 * vfr,
    qsm > mqsm && (qsm = mqsm))));
    0 != want_hide_victory && (1 == want_hide_victory ? (hvfr += .02 * vfr,
    1 <= hvfr ? (hvfr = 0,
    want_hide_victory = 2,
    victory_holder.style.opacity = 1,
    saveh.style.opacity = 1,
    victory_holder.style.display = "none",
    saveh.style.display = "none",
    nick_holder.style.opacity = 0,
    playh.style.opacity = 0,
    smh.style.opacity = 0,
    nick_holder.style.display = "inline-block",
    playh.style.display = "block",
    smh.style.display = "block") : (victory_holder.style.opacity = 1 - hvfr,
    saveh.style.opacity = 1 - hvfr)) : 2 == want_hide_victory && (hvfr += .02 * vfr,
    1 <= hvfr && (hvfr = 1,
    want_hide_victory = 0),
    nick_holder.style.opacity = hvfr,
    playh.style.opacity = hvfr,
    smh.style.opacity = hvfr));
    1 != login_fr && -1 != tip_fr && (tip_fr += .017 * vfr,
    tip_fr >= pi2 && (tip_fr -= pi2,
    tip_pos++,
    tip_pos >= tipss.length && (tip_pos = 0),
    tips.textContent = tipss[tip_pos]),
    w = .5 - .5 * Math.cos(tip_fr),
    tips.style.opacity = Math.round(1E5 * Math.pow(w, .5)) / 1E5);
    if (-1 == dead_mtm)
        -1 != lb_fr && 1 != lb_fr && (lb_fr += .01 * vfr,
        1 <= lb_fr && (lb_fr = 1),
        lbh.style.opacity = .85 * lb_fr,
        lbs.style.opacity = lbn.style.opacity = lbp.style.opacity = lbf.style.opacity = vcm.style.opacity = lb_fr);
    else if (1600 < b - dead_mtm) {
        if (-1 == login_iv) {
            login_iv = -2;
            login.style.display = "inline";
            try {
                "1" != localStorage.edttsg ? cstx.style.display = "inline" : cskh.style.display = "inline"
            } catch (z) {}
            fbh.style.display = 
            "inline";
            twth.style.display = "inline";
            plq.style.display = "inline";
            clq.style.display = "inline";
            grqh.style.display = "inline";
            social.style.display = "inline";
            want_victory_focus && (want_victory_focus = !1,
            victory.focus())
        }
        -2 == login_iv && (login_fr -= .004 * vfr,
        choosing_skin && (login_fr -= .007 * vfr),
        lb_fr = login_fr,
        0 >= login_fr && (login_fr = 0,
        dead_mtm = -1,
        nick.disabled = !1,
        nick.focus(),
        lb_fr = -1,
        playing = !1,
        choosing_skin && (choosing_skin = !1,
        resetGame(),
        pskh.style.display = "none",
        nskh.style.display = "none",
        skodiv.style.display = "none")),
        pbdiv.style.opacity = 1 - .5 * Math.max(0, Math.min(1, 6 * login_fr)),
        lgcsc = 1 + .1 * Math.pow(login_fr, 2),
        u = Math.round(lgbsc * lgcsc * 1E5) / 1E5,
        1 == u ? trf(login, "") : trf(login, "scale(" + u + "," + u + ")"),
        login.style.opacity = 1 - login_fr,
        cstx.style.opacity = 1 - login_fr,
        fbh.style.opacity = 1 - login_fr,
        twth.style.opacity = 1 - login_fr,
        cskh.style.opacity = 1 - login_fr,
        grqh.style.opacity = 1 - login_fr,
        plq.style.opacity = 1 - login_fr,
        clq.style.opacity = 1 - login_fr,
        social.style.opacity = 1 - login_fr,
        pskh.style.opacity = login_fr,
        nskh.style.opacity = login_fr,
        skodiv.style.opacity = login_fr,
        mc.style.opacity = login_fr,
        loch.style.opacity = login_fr,
        lbh.style.opacity = .85 * lb_fr,
        lbs.style.opacity = lbn.style.opacity = lbp.style.opacity = lbf.style.opacity = vcm.style.opacity = lb_fr)
    }
    want_close_socket && -1 == dead_mtm && (want_close_socket = !1,
    ws && (ws.close(),
    ws = null ,
    playing = connected = !1),
    resetGame());
    want_victory_message && (victory_bg.style.opacity = .92 + .08 * Math.cos(fr / 10));
    connected && ((0 < kd_l_frb || 0 < kd_r_frb) && 150 < b - lkstm && (lkstm = b,
    0 < kd_r_frb && kd_l_frb > kd_r_frb && (kd_l_frb -= kd_r_frb,
    kd_r_frb = 0),
    0 < kd_l_frb && kd_r_frb > kd_l_frb && (kd_r_frb -= kd_l_frb,
    kd_l_frb = 0),
    0 < kd_l_frb ? (v = kd_l_frb,
    127 < v && (v = 127),
    kd_l_frb -= v,
    5 <= protocol_version ? (u = new Uint8Array(2),
    u[0] = 252) : (u = new Uint8Array(2),
    u[0] = 108),
    u[1] = v,
    console.log(new Date().getTime() + "   send: "+ u),
    ws.send(u),
    snake.eang -= mamu * v * snake.scang * snake.spang) : 0 < kd_r_frb && (v = kd_r_frb,
    127 < v && (v = 127),
    kd_r_frb -= v,
    5 <= protocol_version ? (v += 128,
    u = new Uint8Array(2),
    u[0] = 252) : (u = new Uint8Array(2),
    u[0] = 114),
    u[1] = v,
    snake.eang += mamu * v * snake.scang * snake.spang,
    console.log(new Date().getTime() + "   send: "+ u),
    ws.send(u))),
    !wfpr && 250 < b - last_ping_mtm && (last_ping_mtm = 
    b,
    wfpr = !0,
    u = new Uint8Array(1),
    u[0] = 5 <= protocol_version ? 251 : 112,
    console.log(new Date().getTime() + "   send: "+ u),
    ws.send(u),
    lpstm = b));
    null  != snake && 2147483647 != grd && 1E3 < b - locu_mtm && (locu_mtm = Date.now(),
    myloc.style.left = Math.round(52 + 40 * (snake.xx - grd) / grd - 7) + "px",
    myloc.style.top = Math.round(52 + 40 * (snake.yy - grd) / grd - 7) + "px");
    if (1E3 < b - lrd_mtm) {
        if (testing && console && console.log) {
            console.log("FPS: " + fps);
            f = [];
            trdps += rdps;
            playing && tcsecs++;
            f.push("FPS: " + fps);
            f.push("sectors: " + sectors.length);
            f.push("foods: " + foods_c);
            f.push("bytes/sec: " + rdps);
            f.push("bytes/sec avg: " + 
            Math.round(trdps / tcsecs));
            f.push("");
            for (u = e = 0; u < rdpspc.length; u++)
                0 <= rdpspc[u] && (e += rdpspc[u]);
            for (u = 0; u < rdpspc.length; u++)
                0 <= rdpspc[u] && f.push(String.fromCharCode(u) + ": " + rdpspc[u] + " (" + Math.round(rdpspc[u] / e * 1E3) / 10 + "%)");
            f.push("total: " + e);
            maxp = pf_ep = pf_nap = pf_remove = pf_new_add = pf_add = 0;
            f.push("");
            for (u = 1; u < pfs.length; u++)
                0 != pfs[u] && (f.push(u + ": " + Math.round(1E3 * pfs[u]) / 1E3),
                pfs[u] = 0);
            pft = 0;
            pfd.innerHTML = f.join("<br>")
        }
        playing && 1 == want_quality && (32 >= fps ? high_quality && (wdfg++,
        1 <= wdfg && (high_quality = 
        !1)) : (high_quality || 48 <= fps) && 0 < wdfg && (wdfg--,
        0 >= wdfg && (high_quality = !0)));
        wangnuc = angnuc = anguc = fps = reps = rsps = rnps = rfps = rdps = 0;
        lrd_mtm = Date.now()
    }
    etm *= Math.pow(.993, vfrb);
    if (null  != snake) {
        if (xm != lsxm || ym != lsym)
            want_e = !0;
        want_e && 100 < b - last_e_mtm && (want_e = !1,
        last_e_mtm = b,
        lsxm = xm,
        lsym = ym,
        d2 = xm * xm + ym * ym,
        256 < d2 ? (ang = Math.atan2(ym, xm),
        snake.eang = ang) : ang = snake.wang,
        ang %= pi2,
        0 > ang && (ang += pi2),
        5 <= protocol_version ? (sang = Math.floor(251 * ang / pi2),
        sang != lsang && (lsang = sang,
        u = new Uint8Array(1),
        u[0] = sang & 255,
        lpstm = 
        b,
        console.log(new Date().getTime() + "   send: "+ u),ws.send(u.buffer))) : (sang = Math.floor(16777215 * ang / pi2),
        sang != lsang && (lsang = sang,
        u = new Uint8Array(4),
        u[0] = 101,
        u[1] = sang >> 16 & 255,
        u[2] = sang >> 8 & 255,
        u[3] = sang & 255,
        lpstm = b,console.log(new Date().getTime() + "   send: "+ u),
        ws.send(u.buffer))))
    }
    if (!choosing_skin)
        for (u = snakes.length - 1; 0 <= u; u--) {
            e = snakes[u];
            h = mamu * vfr * e.scang * e.spang;
            b = e.sp * vfr / 4;
            b > e.msl && (b = e.msl);
            if (!e.dead) {
                e.tsp != e.sp && (e.tsp < e.sp ? (e.tsp += .3 * vfr,
                e.tsp > e.sp && (e.tsp = e.sp)) : (e.tsp -= .3 * vfr,
                e.tsp < e.sp && (e.tsp = e.sp)));
                e.tsp > e.fsp && (e.sfr += (e.tsp - e.fsp) * vfr * .021);
                if (0 < e.fltg)
                    for (f = vfrb,
                    f > e.fltg && 
                    (f = e.fltg),
                    e.fltg -= f,
                    qq = 0; qq < f; qq++)
                        e.fl = e.fls[e.flpos],
                        e.fls[e.flpos] = 0,
                        e.flpos++,
                        e.flpos >= lfc && (e.flpos = 0);
                else
                    0 == e.fltg && (e.fltg = -1,
                    e.fl = 0);
                e.cfl = e.tl + e.fl
            }
            if (1 == e.dir) {
                e.ang -= h;
                if (0 > e.ang || e.ang >= pi2)
                    e.ang %= pi2;
                0 > e.ang && (e.ang += pi2);
                f = (e.wang - e.ang) % pi2;
                0 > f && (f += pi2);
                f > Math.PI && (f -= pi2);
                0 < f && (e.ang = e.wang,
                e.dir = 0)
            } else if (2 == e.dir) {
                e.ang += h;
                if (0 > e.ang || e.ang >= pi2)
                    e.ang %= pi2;
                0 > e.ang && (e.ang += pi2);
                f = (e.wang - e.ang) % pi2;
                0 > f && (f += pi2);
                f > Math.PI && (f -= pi2);
                0 > f && (e.ang = e.wang,
                e.dir = 0)
            } else
                e.ang = e.wang;
            1 != e.ehl && (e.ehl += .03 * vfr,
            1 <= e.ehl && (e.ehl = 1));
            h = e.pts[e.pts.length - 1];
            e.wehang = Math.atan2(e.yy + e.fy - h.yy - h.fy + h.eby * (1 - e.ehl), e.xx + e.fx - h.xx - h.fx + h.ebx * (1 - e.ehl));
            e.dead || e.ehang == e.wehang || (f = (e.wehang - e.ehang) % pi2,
            0 > f && (f += pi2),
            f > Math.PI && (f -= pi2),
            0 > f ? e.edir = 1 : 0 < f && (e.edir = 2));
            if (1 == e.edir) {
                e.ehang -= .1 * vfr;
                if (0 > e.ehang || e.ehang >= pi2)
                    e.ehang %= pi2;
                0 > e.ehang && (e.ehang += pi2);
                f = (e.wehang - e.ehang) % pi2;
                0 > f && (f += pi2);
                f > Math.PI && (f -= pi2);
                0 < f && (e.ehang = e.wehang,
                e.edir = 0)
            } else if (2 == e.edir) {
                e.ehang += .1 * vfr;
                if (0 > e.ehang || e.ehang >= pi2)
                    e.ehang %= pi2;
                0 > e.ehang && (e.ehang += pi2);
                f = (e.wehang - e.ehang) % pi2;
                0 > f && (f += pi2);
                f > Math.PI && (f -= pi2);
                0 > f && (e.ehang = e.wehang,
                e.edir = 0)
            }
            e.dead || (e.xx += Math.cos(e.ang) * b,
            e.yy += Math.sin(e.ang) * b,
            e.chl += b / e.msl);
            if (0 < vfrb) {
                for (w = e.pts.length - 1; 0 <= w; w--)
                    h = e.pts[w],
                    h.dying && (h.da += .0015 * vfrb,
                    1 < h.da && (e.pts.splice(w, 1),
                    h.dying = !1,
                    points_dp.add(h)));
                for (w = e.pts.length - 1; 0 <= w; w--)
                    if (h = e.pts[w],
                    0 < h.eiu) {
                        fy = fx = 0;
                        for (qq = cm1 = h.eiu - 1; 0 <= qq; qq--)
                            h.efs[qq] = 2 == h.ems[qq] ? h.efs[qq] + vfrb2 : h.efs[qq] + 
                            vfrb,
                            f = h.efs[qq],
                            f >= hfc ? (qq != cm1 && (h.exs[qq] = h.exs[cm1],
                            h.eys[qq] = h.eys[cm1],
                            h.efs[qq] = h.efs[cm1],
                            h.ems[qq] = h.ems[cm1]),
                            h.eiu--,
                            cm1--) : (fx += h.exs[qq] * hfas[f],
                            fy += h.eys[qq] * hfas[f]);
                        h.fx = fx;
                        h.fy = fy
                    }
            }
            b = 2.3 * Math.cos(e.eang);
            f = 2.3 * Math.sin(e.eang);
            e.rex < b && (e.rex += vfr / 6,
            e.rex >= b && (e.rex = b));
            e.rey < f && (e.rey += vfr / 6,
            e.rey >= f && (e.rey = f));
            e.rex > b && (e.rex -= vfr / 6,
            e.rex <= b && (e.rex = b));
            e.rey > f && (e.rey -= vfr / 6,
            e.rey <= f && (e.rey = f));
            if (0 < vfrb) {
                if (0 < e.ftg)
                    for (f = vfrb,
                    f > e.ftg && (f = e.ftg),
                    e.ftg -= f,
                    qq = 0; qq < f; qq++)
                        e.fx = 
                        e.fxs[e.fpos],
                        e.fy = e.fys[e.fpos],
                        e.fchl = e.fchls[e.fpos],
                        e.fxs[e.fpos] = 0,
                        e.fys[e.fpos] = 0,
                        e.fchls[e.fpos] = 0,
                        e.fpos++,
                        e.fpos >= rfc && (e.fpos = 0);
                else
                    0 == e.ftg && (e.ftg = -1,
                    e.fx = 0,
                    e.fy = 0,
                    e.fchl = 0);
                if (0 < e.fatg)
                    for (f = vfrb,
                    f > e.fatg && (f = e.fatg),
                    e.fatg -= f,
                    qq = 0; qq < f; qq++)
                        e.fa = e.fas[e.fapos],
                        e.fas[e.fapos] = 0,
                        e.fapos++,
                        e.fapos >= afc && (e.fapos = 0);
                else
                    0 == e.fatg && (e.fatg = -1,
                    e.fa = 0)
            }
            e.dead ? (e.dead_amt += .02 * vfr,
            1 <= e.dead_amt && snakes.splice(u, 1)) : 1 != e.alive_amt && (e.alive_amt += .015 * vfr,
            1 <= e.alive_amt && (e.alive_amt = 1))
        }
    for (u = 
    preys.length - 1; 0 <= u; u--) {
        w = preys[u];
        h = mamu2 * vfr;
        b = w.sp * vfr / 4;
        if (0 < vfrb)
            if (0 < w.ftg)
                for (f = vfrb,
                f > w.ftg && (f = w.ftg),
                w.ftg -= f,
                qq = 1; qq <= f; qq++)
                    qq == f && (w.fx = w.fxs[w.fpos],
                    w.fy = w.fys[w.fpos]),
                    w.fxs[w.fpos] = 0,
                    w.fys[w.fpos] = 0,
                    w.fpos++,
                    w.fpos >= rfc && (w.fpos = 0);
            else
                0 == w.ftg && (w.fx = 0,
                w.fy = 0,
                w.ftg = -1);
        if (1 == w.dir) {
            w.ang -= h;
            if (0 > w.ang || w.ang >= pi2)
                w.ang %= pi2;
            0 > w.ang && (w.ang += pi2);
            f = (w.wang - w.ang) % pi2;
            0 > f && (f += pi2);
            f > Math.PI && (f -= pi2);
            0 < f && (w.ang = w.wang,
            w.dir = 0)
        } else if (2 == w.dir) {
            w.ang += h;
            if (0 > w.ang || w.ang >= pi2)
                w.ang %= 
                pi2;
            0 > w.ang && (w.ang += pi2);
            f = (w.wang - w.ang) % pi2;
            0 > f && (f += pi2);
            f > Math.PI && (f -= pi2);
            0 > f && (w.ang = w.wang,
            w.dir = 0)
        } else
            w.ang = w.wang;
        w.xx += Math.cos(w.ang) * b;
        w.yy += Math.sin(w.ang) * b;
        w.gfr += vfr * w.gr;
        w.eaten ? (1.5 != w.fr && (w.fr += vfr / 150,
        1.5 <= w.fr && (w.fr = 1.5)),
        w.eaten_fr += vfr / 47,
        w.gfr += vfr,
        e = w.eaten_by,
        1 <= w.eaten_fr || !e ? preys.splice(u, 1) : (w.eaten_fr4 = Math.pow(w.eaten_fr, 4),
        w.rad = 1 - Math.pow(w.eaten_fr, 3))) : 1 != w.fr && (w.fr += vfr / 150,
        1 <= w.fr ? (w.fr = 1,
        w.rad = 1) : (w.rad = .5 * (1 - Math.cos(Math.PI * w.fr)),
        w.rad += .66 * (.5 * (1 - 
        Math.cos(Math.PI * w.rad)) - w.rad)))
    }
    for (u = cm1 = foods_c - 1; 0 <= u; u--)
        b = foods[u],
        b.gfr += vfr * b.gr,
        b.eaten ? (1.5 != b.fr && (b.fr += vfr / 150,
        1.5 <= b.fr && (b.fr = 1.5)),
        b.eaten_fr += vfr / 41,
        b.rad = 1 - Math.pow(b.eaten_fr, 3),
        e = b.eaten_by,
        1 <= b.eaten_fr || !e ? (u == cm1 ? foods[u] = null  : (foods[u] = foods[cm1],
        foods[cm1] = null ),
        foods_c--,
        cm1--) : (e = b.eaten_by,
        f = b.eaten_fr * b.eaten_fr,
        b.eaten_fr4 = f * f,
        b.rad = 1 - b.eaten_fr * f,
        b.rx = b.xx + (e.xx + e.fx + Math.cos(e.ang + e.fa) * (43 - 24 * f) * (1 - f) - b.xx) * f,
        b.ry = b.yy + (e.yy + e.fy + Math.sin(e.ang + e.fa) * (43 - 24 * f) * (1 - 
        f) - b.yy) * f,
        b.rx += 6 * Math.cos(b.wsp * b.gfr) * (1 - b.eaten_fr),
        b.ry += 6 * Math.sin(b.wsp * b.gfr) * (1 - b.eaten_fr))) : (1 != b.fr && (b.fr += b.rsp * vfr / 150,
        1 <= b.fr ? (b.fr = 1,
        b.rad = 1) : (b.rad = .5 * (1 - Math.cos(Math.PI * b.fr)),
        b.rad += .66 * (.5 * (1 - Math.cos(Math.PI * b.rad)) - b.rad))),
        b.rx = b.xx,
        b.ry = b.yy,
        b.rx = b.xx + 6 * Math.cos(b.wsp * b.gfr),
        b.ry = b.yy + 6 * Math.sin(b.wsp * b.gfr));
    vfrb = vfr = 0;
    redraw();
    no_raf || raf(oef)
}