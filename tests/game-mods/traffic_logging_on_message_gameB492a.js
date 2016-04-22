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
            for (b = clus.length - 1; 0 <= b; b--) {
                var q = clus[b];
                if (q && 0 < q.ptms.length) {
                    for (var c = 0, h = q.ptms.length - 1; 0 <= h; h--)
                        c += q.ptms[h];
                    c /= q.ptms.length;
                    testing && console.log("cluster " + b + " ping time: " + c);
                    for (h = sos.length - 1; 0 <= h; h--)
                        sos[h].clu == b && (sos[h].ptm = 
                        c)
                }
            }
            if ("undefined" != typeof rmsos)
                for (b = 0; b < rmsos.length; b++)
                    for (q = "." + rmsos[b].a[0] + "." + rmsos[b].a[1] + "." + rmsos[b].a[2],
                    c = rmsos[b].a[3],
                    h = sos.length - 1; 0 <= h; h--)
                        0 <= sos[h].ip.indexOf(q) && sos[h].po == c && sos.splice(h, 1);
            sos.sort(function(b, f) {
                return parseFloat(b.po) - parseFloat(f.po)
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
                var f = b[0] << 8 | b[1]
                  , e = cptm - lptm;
                0 == lptm && (e = 0);
                etm += e - f;
                testing && (rdpspc[b[2]] += b.length);
                var c = String.fromCharCode(b[2])
                  , f = 3
                  , h = b.length
                  , e = b.length - 2
                  , q = b.length - 3;
                  
                  
                  var snakeId = b[f] << 8 | b[f + 1];
                    
                  
                   if(c == "a"){
                //       //console.log("InitialPacket;  Type: " + f +  "  Data:  " + b);
                //   }else if(c == "e"){
                //       console.log(new Date().getTime() + " id " +snakeId +" sId " +(snake != null ? snake.id : "")  + "   updateDirection;  Type: " + c +  "  Data:  " + b);
                //   }else if(c == "E"){
                //       console.log(new Date().getTime() + " id "+snakeId +" sId " +(snake != null ? snake.id : "") + "   Unkown;  Type: " + c +  "  Data:  " + b);
                //   }else if(c == "3"){
                //       console.log(new Date().getTime() + " id " +snakeId +" sId " +(snake != null ? snake.id : "") + "   Unkown;  Type: " + c +  "  Data:  " + b);
                //   }else if(c == "4"){
                //      console.log(new Date().getTime() + " id " +snakeId +" sId " +(snake != null ? snake.id : "") + "   Unkown;  Type: " + c +  "  Data:  " + b);
                //   }else if(c == "5"){
                //       console.log(new Date().getTime()+ " id " +snakeId +" sId " +(snake != null ? snake.id : "")  + "   Unkown;  Type: " + c +  "  Data:  " + b);
                //   }else if(c == "h"){
                //       //console.log("eatFoodPacket;  Type: " + f +  "  Data:  " + b);
                //   }else if(c == "r"){
                //       console.log(new Date().getTime()+ " id " +snakeId +" sId " +(snake != null ? snake.id : "")  + "   Unkown;  Type: " + c +  "  Data:  " + b);
                //   }else if(c == "g"){
                //       console.log(new Date().getTime() + " id " +snakeId +" sId " +(snake != null ? snake.id : "") + "   updatePosition;  Type: " + c +  "  Data:  " + b);
                //   }else if(c == "n"){
                //       console.log(new Date().getTime() + " id " +snakeId +" sId " +(snake != null ? snake.id : "") + "   Unkown;  Type: " + c+  "  Data:  " + b);
                //   }else if(c == "G"){
                //       console.log(new Date().getTime() + " id " +snakeId +" sId " +(snake != null ? snake.id : "") + "   updateSnakeParts;  Type: " + c+  "  Data:  " + b);
                //   }else if(c == "N"){
                //       console.log(new Date().getTime()+ " id " +snakeId +" sId " +(snake != null ? snake.id : "")  + "   Unkown;  Type: " + c +  "  Data:  " + b);
                //   }else if(c == "l"){
                //       console.log(new Date().getTime() + " id " +snakeId +" sId " +(snake != null ? snake.id : "") + "   Unkown;  Type: " + c +  "  Data:  " + b);
                //   }else if(c == "v"){
                //       console.log(new Date().getTime()+ " id " +snakeId +" sId " +(snake != null ? snake.id : "")  + "   Unkown;  Type: " + c +  "  Data:  " + b);
                   }else if(c == "w"){
                       console.log(new Date().getTime()+ " id " +snakeId +" sId " +(snake != null ? snake.id : "")  + "   Unkown;  Type: " + c +  "  Data:  " + b);
                //   }else if(c == "m"){
                //       console.log(new Date().getTime() + " id " +snakeId +" sId " +(snake != null ? snake.id : "") + "   GlobalHighScorePacket;  Type: " + c +  "  Data:  " + b);
                //   }else if(c == "p"){
                //       console.log(new Date().getTime() + " id " +snakeId +" sId " +(snake != null ? snake.id : "") + "   pongPacket;  Type: " + c +  "  Data:  " + b);
                //   }else if(c == "u"){
                //       console.log(new Date().getTime() + " id " +snakeId +" sId " +(snake != null ? snake.id : "") + "   Unkown;  Type: " + c +  "  Data:  " + b);
                //   }else if(c == "F"){
                //       //console.log("spawnFoodPacket;  Type: " + f +  "  Data:  " + b);
                //   }else if(c == "b"){
                //       console.log(new Date().getTime()+ " id " +snakeId +" sId " +(snake != null ? snake.id : "")  + "   Unkown;  Type: " + c +  "  Data:  " + b);
                //   }else if(c == "f"){
                //       //console.log(new Date().getTime()+ " id " +snakeId +" sId " +(snake != null ? snake.id : "")  + "   Unkown;  Type: " + c +  "  Data:  " + b);
                //   }else if(c == "c"){
                //       console.log(new Date().getTime() + " id " +snakeId +" sId " +(snake != null ? snake.id : "") + "   Unkown;  Type: " + c +  "  Data:  " + b);
                //   }else if(c == "j"){
                //       console.log(new Date().getTime()+ " id " +snakeId +" sId " +(snake != null ? snake.id : "")  + "   Unkown;  Type: " + c +  "  Data:  " + b);
                //   }else if(c == "y"){
                //       console.log(new Date().getTime()+ " id " +snakeId +" sId " +(snake != null ? snake.id : "")  + "   Unkown;  Type: " + c +  "  Data:  " + b);
                //   }else if(c == "s"){
                //       console.log(new Date().getTime()+ " id " +snakeId +" sId " + (snake != null ? snake.id  : "" )  + "   newSnakePacket;  Type: " + c +  "  Data:  " + b);
                   }
                
                
                  
                  
                if ("a" == c)
                    connecting = !1,
                    playing = connected = !0,
                    play_btn_click_mtm = -1,
                    grd = b[f] << 16 | b[f + 1] << 8 | b[f + 2],
                    f += 3,
                    e = b[f] << 8 | b[f + 1],
                    f += 2,
                    sector_size = b[f] << 8 | b[f + 1],
                    f += 2,
                    sector_count_along_edge = b[f] << 8 | b[f + 1],
                    f += 2,
                    spangdv = 
                    b[f] / 10,
                    f++,
                    nsp1 = (b[f] << 8 | b[f + 1]) / 100,
                    f += 2,
                    nsp2 = (b[f] << 8 | b[f + 1]) / 100,
                    f += 2,
                    nsp3 = (b[f] << 8 | b[f + 1]) / 100,
                    f += 2,
                    mamu = (b[f] << 8 | b[f + 1]) / 1E3,
                    f += 2,
                    mamu2 = (b[f] << 8 | b[f + 1]) / 1E3,
                    f += 2,
                    cst = (b[f] << 8 | b[f + 1]) / 1E3,
                    f += 2,
                    f < h && (protocol_version = b[f]),
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
                else if ("e" == c || "E" == c || 
                "3" == c || "4" == c || "5" == c) {
                    var w = b[f] << 8 | b[f + 1]
                      , f = f + 2
                      , D = h = -1
                      , x = -1
                      , A = -1;
                    if (6 <= protocol_version)
                        6 == e ? (h = "e" == c ? 1 : 2,
                        D = 2 * b[f] * Math.PI / 256,
                        f++,
                        x = 2 * b[f] * Math.PI / 256,
                        f++,
                        A = b[f] / 18) : 5 == e ? "e" == c ? (D = 2 * b[f] * Math.PI / 256,
                        f++,
                        A = b[f] / 18) : "E" == c ? (h = 1,
                        x = 2 * b[f] * Math.PI / 256,
                        f++,
                        A = b[f] / 18) : "4" == c ? (h = 2,
                        x = 2 * b[f] * Math.PI / 256,
                        f++,
                        A = b[f] / 18) : "3" == c ? (h = 1,
                        D = 2 * b[f] * Math.PI / 256,
                        f++,
                        x = 2 * b[f] * Math.PI / 256) : "5" == c && (h = 2,
                        D = 2 * b[f] * Math.PI / 256,
                        f++,
                        x = 2 * b[f] * Math.PI / 256) : 4 == e && ("e" == c ? D = 2 * b[f] * Math.PI / 256 : "E" == c ? (h = 1,
                        x = 2 * b[f] * Math.PI / 256) : 
                        "4" == c ? (h = 2,
                        x = 2 * b[f] * Math.PI / 256) : "3" == c && (A = b[f] / 18));
                    else if (3 <= protocol_version) {
                        "3" != c && (8 == e || 7 == e || 6 == e && "3" != c || 5 == e && "3" != c) && (h = "e" == c ? 1 : 2);
                        if (8 == e || 7 == e || 5 == e && "3" == c || 6 == e && "3" == c)
                            D = 2 * (b[f] << 8 | b[f + 1]) * Math.PI / 65535,
                            f += 2;
                        if (8 == e || 7 == e || 5 == e && "3" != c || 6 == e && "3" != c)
                            x = 2 * (b[f] << 8 | b[f + 1]) * Math.PI / 65535,
                            f += 2;
                        if (8 == e || 6 == e || 4 == e)
                            A = b[f] / 18
                    } else {
                        if (11 == q || 8 == q || 9 == q || 6 == q)
                            h = b[f] - 48,
                            f++;
                        if (11 == q || 7 == q || 9 == q || 5 == q)
                            D = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 16777215,
                            f += 3;
                        if (11 == q || 8 == q || 9 == q || 6 == q)
                            x = 2 * 
                            (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 16777215,
                            f += 3;
                        if (11 == q || 7 == q || 8 == q || 4 == q)
                            A = (b[f] << 8 | b[f + 1]) / 1E3
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
                } else if ("h" == c) {
                    var w = b[f] << 8 | b[f + 1]
                      , f = f + 2
                      , I = (b[f] << 16 | b[f + 1] << 8 | b[f + 
                    2]) / 16777215;
                    if (t = os["s" + w])
                        t.fam = I,
                        snl(t)
                } else if ("r" == c) {
                    if (w = b[f] << 8 | b[f + 1],
                    f += 2,
                    t = os["s" + w]) {
                        4 <= q && (t.fam = (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) / 16777215);
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
                } else if ("g" == c || "n" == c || "G" == c || "N" == c) {
                    if (playing && (I = "n" == c || "N" == c,
                    w = b[f] << 8 | b[f + 1],
                    f += 2,
                    t = os["s" + w])) {
                        if (I)
                            t.sct++;
                        else
                            for (q = 0; q < t.pts.length; q++)
                                if (!t.pts[q].dying) {
                                    t.pts[q].dying = !0;
                                    break
                                }
                        var z = t.pts[t.pts.length - 1]
                          , q = z
                          , h = !1;
                        3 <= protocol_version ? "g" == c || "n" == c ? (e = b[f] << 8 | b[f + 1],
                        f += 2,
                        C = b[f] << 8 | b[f + 1],
                        f += 2) : (e = q.xx + b[f] - 128,
                        f++,
                        C = q.yy + b[f] - 128,
                        f++) : (e = (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) / 5,
                        f += 3,
                        C = (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) / 5,
                        f += 3);
                        I && (t.fam = (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) / 16777215);
                        (z = points_dp.get()) || (z = {
                            exs: [],
                            eys: [],
                            efs: [],
                            ems: []
                        });
                        z.eiu = 0;
                        z.xx = e;
                        z.yy = C;
                        z.fx = 0;
                        z.fy = 0;
                        z.da = 0;
                        z.ebx = z.xx - q.xx;
                        z.eby = z.yy - q.yy;
                        t.pts.push(z);
                        h = !0;
                        t.iiv && (b = t.xx + t.fx - z.xx,
                        f = t.yy + t.fy - z.yy,
                        z.fx += b,
                        z.fy += f,
                        z.exs[z.eiu] = b,
                        z.eys[z.eiu] = f,
                        z.efs[z.eiu] = 0,
                        z.ems[z.eiu] = 1,
                        z.eiu++);
                        w = t.pts.length - 3;
                        if (1 <= w)
                            for (D = t.pts[w],
                            c = n = 0,
                            q = w - 1; 0 <= q; q--)
                                w = t.pts[q],
                                n++,
                                b = w.xx,
                                f = w.yy,
                                4 >= n && (c = cst * n / 4),
                                w.xx += (D.xx - w.xx) * c,
                                w.yy += (D.yy - w.yy) * c,
                                t.iiv && (b -= w.xx,
                                f -= w.yy,
                                w.fx += b,
                                w.fy += f,
                                w.exs[w.eiu] = b,
                                w.eys[w.eiu] = f,
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
                        I && snl(t);
                        t.lnp = z;
                        t == snake && (ovxx = snake.xx + snake.fx,
                        ovyy = snake.yy + snake.fy);
                        z = etm / 8 * t.sp / 4;
                        z *= lag_mult;
                        q = t.chl - 1;
                        t.chl = z / t.msl;
                        c = t.xx;
                        w = t.yy;
                        t.xx = e + Math.cos(t.ang) * z;
                        t.yy = C + Math.sin(t.ang) * z;
                        b = t.xx - c;
                        f = t.yy - w;
                        e = t.chl - q;
                        w = t.fpos;
                        for (q = 0; q < rfc; q++)
                            t.fxs[w] -= b * rfas[q],
                            t.fys[w] -= f * rfas[q],
                            t.fchls[w] -= e * rfas[q],
                            w++,
                            w >= rfc && (w = 0);
                        t.fx = t.fxs[t.fpos];
                        t.fy = t.fys[t.fpos];
                        t.fchl = t.fchls[t.fpos];
                        t.ftg = rfc;
                        h && (t.ehl = 0);
                        if (t == snake) {
                            view_xx = snake.xx + snake.fx;
                            view_yy = 
                            snake.yy + snake.fy;
                            b = view_xx - ovxx;
                            f = view_yy - ovyy;
                            w = fvpos;
                            for (q = 0; q < vfc; q++)
                                fvxs[w] -= b * vfas[q],
                                fvys[w] -= f * vfas[q],
                                w++,
                                w >= vfc && (w = 0);
                            fvtg = vfc
                        }
                    }
                } else if ("l" == c) {
                    if (playing) {
                        wumsts = !0;
                        D = z = C = "";
                        A = x = 0;
                        -1 == lb_fr && -1 == dead_mtm && (lb_fr = 0);
                        var L = b[f];
                        f++;
                        rank = b[f] << 8 | b[f + 1];
                        rank < best_rank && (best_rank = rank);
                        f += 2;
                        snake_count = b[f] << 8 | b[f + 1];
                        snake_count > biggest_snake_count && (biggest_snake_count = snake_count);
                        for (f += 2; f < h; ) {
                            var J = b[f] << 8 | b[f + 1]
                              , f = f + 2
                              , I = (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) / 16777215
                              , f = f + 3
                              , t = b[f] % 9;
                            f++;
                            e = b[f];
                            f++;
                            A++;
                            c = "";
                            for (q = 0; q < e; q++)
                                w = b[f],
                                c += String.fromCharCode(w),
                                f++;
                            A != L && (gdnm(c) || (c = ""));
                            for (var H = "", q = 0; q < e; q++)
                                w = c.charCodeAt(q),
                                H = 38 == w ? H + "&amp;" : 60 == w ? H + "&lt;" : 62 == w ? H + "&gt;" : 32 == w ? H + "&nbsp;" : H + String.fromCharCode(w);
                            c = H;
                            x++;
                            score = Math.floor(150 * (fpsls[J] + I / fmlts[J] - 1) - 50) / 10;
                            w = A == L ? 1 : .7 * (.3 + .7 * (1 - x / 10));
                            C += '<span style="opacity:' + w + "; color:" + per_color_imgs[t].cs + ';">' + score + "</span><BR>";
                            z += '<span style="opacity:' + w + "; color:" + per_color_imgs[t].cs + ";" + (A == L ? "font-weight:bold;" : "") + '">' + c + 
                            "</span><BR>";
                            D += '<span style="opacity:' + w + "; color:" + per_color_imgs[t].cs + ';">#' + x + "</span><BR>"
                        }
                        lbs.innerHTML = C;
                        lbn.innerHTML = z;
                        lbp.innerHTML = D
                    }
                } else if ("v" == c)
                    2 == b[f] ? (want_close_socket = !0,
                    want_victory_message = !1,
                    want_hide_victory = 1,
                    hvfr = 0) : (dead_mtm = Date.now(),
                    play_btn.setEnabled(!0),
                    e = Math.floor(150 * (fpsls[snake.sct] + snake.fam / fmlts[snake.sct] - 1) - 50) / 10,
                    twt.href = "http://twitter.com/intent/tweet?status=" + encodeURIComponent("I got a length of " + e + " in http://slither.io! Can you beat that? #slitherio"),
                    C = "Your final length was",
                    "DE" == country ? C = "Deine endg\u00fcltige L\u00e4nge war" : "FR" == country ? C = "Votre longueur finale \u00e9tait de" : "BR" == country && (C = "Seu comprimento final foi de"),
                    h = "",
                    1E3 < e && (h = "!"),
                    lastscore.innerHTML = '<span style="opacity: .45;">' + C + " </span><b>" + e + "</b>" + h,
                    e = "Play Again",
                    "FR" == country ? e = "Jouer" : "BR" == country && (e = "Joga"),
                    play_btn.setText(String.fromCharCode(160) + e + String.fromCharCode(160)),
                    1 == b[f] ? (nick_holder.style.display = "none",
                    playh.style.display = "none",
                    smh.style.display = 
                    "none",
                    victory_holder.style.display = "inline",
                    saveh.style.display = "block",
                    want_victory_focus = want_victory_message = !0,
                    victory.disabled = !1,
                    save_btn.setEnabled(!0)) : want_close_socket = !0);
                else if ("w" == c)
                    if (h = b[f],
                    f++,
                    e = b[f] << 8 | b[f + 1],
                    f += 2,
                    C = b[f] << 8 | b[f + 1],
                    1 == h)
                        t = {},
                        t.xx = e,
                        t.yy = C,
                        sectors.push(t);
                    else {
                        for (z = cm1 = foods_c - 1; 0 <= z; z--)
                            q = foods[z],
                            q.sx == e && q.sy == C && (z == cm1 ? foods[z] = null  : (foods[z] = foods[cm1],
                            foods[cm1] = null ),
                            foods_c--,
                            cm1--);
                        for (z = sectors.length - 1; 0 <= z; z--)
                            t = sectors[z],
                            t.xx == e && t.yy == C && sectors.splice(z, 
                            1)
                    }
                else if ("m" == c) {
                    J = b[f] << 16 | b[f + 1] << 8 | b[f + 2];
                    f += 3;
                    I = (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) / 16777215;
                    f += 3;
                    C = Math.floor(150 * (fpsls[J] + I / fmlts[J] - 1) - 50) / 10;
                    e = b[f];
                    f++;
                    q = "";
                    for (z = 0; z < e; z++)
                        q += String.fromCharCode(b[f]),
                        f++;
                    for (e = ""; f < h; )
                        e += String.fromCharCode(b[f]),
                        f++;
                    q = q.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
                    e = e.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
                    0 < C && (b = "",
                    0 < e.length && (b += "<span style='font-size:17px;'><b><i><span style='opacity: .5;'>&quot;</span>" + 
                    e + "<span style='opacity: .5;'>&quot;</span></i></b></span><BR><div style='height: 5px;'></div>"),
                    0 < q.length ? (b = 0 < e.length ? b + ("<i><span style='opacity: .5;'>- </span><span style='opacity: .75;'><b>" + q + "</b></span><span style='opacity: .5;'>, today's longest</span></i>") : "<i><span style='opacity: .5;'>Today's longest was </span><span style='opacity: .75;'><b>" + q + "</b></span></i>",
                    b += "<br><i><span style='opacity: .5;'>with a length of </span><span style='opacity: .65;'><b>" + C + "</b></span></i>") : b = 0 < 
                    e.length ? b + "<i><span style='opacity: .5;'>- </span><span style='opacity: .5;'>today's longest</span></i>" + ("<br><i><span style='opacity: .5;'>with a length of </span><span style='opacity: .65;'><b>" + C + "</b></span></i>") : b + ("<i><span style='opacity: .5;'>Today's longest: </span><span style='opacity: .75;'><b>" + C + "</b></span></i>"),
                    vcm.innerHTML = b)
                } else if ("p" == c)
                    wfpr = !1,
                    lagging && (etm *= lag_mult,
                    lagging = !1);
                else if ("u" == c) {
                    q = asmc.getContext("2d");
                    q.clearRect(0, 0, 80, 80);
                    q.fillStyle = "#FFFFFF";
                    for (var C = 
                    e = 0; f < h && !(80 <= C); )
                        if (w = b[f++],
                        128 <= w)
                            for (w -= 128,
                            z = 0; z < w && !(e++,
                            80 <= e && (e = 0,
                            C++,
                            80 <= C)); z++)
                                ;
                        else
                            for (z = 0; 7 > z && !(0 < (w & u_m[z]) && q.fillRect(e, C, 1, 1),
                            e++,
                            80 <= e && (e = 0,
                            C++,
                            80 <= C)); z++)
                                ;
                } else if ("s" == c) {
                    if (playing)
                        if (w = b[f] << 8 | b[f + 1],
                        f += 2,
                        6 < q) {
                            D = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 16777215;
                            f += 3;
                            f++;
                            x = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 16777215;
                            f += 3;
                            A = (b[f] << 8 | b[f + 1]) / 1E3;
                            f += 2;
                            I = (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) / 16777215;
                            f += 3;
                            t = b[f];
                            f++;
                            L = [];
                            J = (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) / 5;
                            f += 3;
                            H = (b[f] << 16 | b[f + 1] << 8 | b[f + 
                            2]) / 5;
                            f += 3;
                            e = b[f];
                            f++;
                            c = "";
                            for (q = 0; q < e; q++)
                                c += String.fromCharCode(b[f]),
                                f++;
                            for (var M = q = C = e = 0, O = !1; f < h; )
                                q = e,
                                M = C,
                                O ? (e += (b[f] - 127) / 2,
                                f++,
                                C += (b[f] - 127) / 2,
                                f++) : (e = (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) / 5,
                                f += 3,
                                C = (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) / 5,
                                f += 3,
                                q = e,
                                M = C,
                                O = !0),
                                (z = points_dp.get()) || (z = {
                                    exs: [],
                                    eys: [],
                                    efs: [],
                                    ems: []
                                }),
                                z.eiu = 0,
                                z.xx = e,
                                z.yy = C,
                                z.fx = 0,
                                z.fy = 0,
                                z.da = 0,
                                z.ebx = e - q,
                                z.eby = C - M,
                                L.push(z);
                            t = newSnake(w, J, H, t, D, L);
                            null  == snake ? (view_xx = e,
                            view_yy = C,
                            snake = t,
                            t.nk = c) : (t.nk = c,
                            gdnm(c) || (t.nk = ""));
                            t.eang = t.wang = x;
                            t.sp = A;
                            t.spang = 
                            t.sp / spangdv;
                            1 < t.spang && (t.spang = 1);
                            t.fam = I;
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
                            for (b = 1 == b[f],
                            z = snakes.length - 1; 0 <= z; z--)
                                if (snakes[z].id == w) {
                                    snakes[z].id = -1234;
                                    b ? (snakes[z].dead = !0,
                                    snakes[z].dead_amt = 0,
                                    snakes[z].edir = 0) : snakes.splice(z, 1);
                                    delete os["s" + w];
                                    break
                                }
                } else if ("F" == c)
                    if (4 <= protocol_version) {
                        for (c = !1; f < h; )
                            t = b[f],
                            f++,
                            e = b[f] << 8 | b[f + 1],
                            f += 2,
                            C = b[f] << 8 | 
                            b[f + 1],
                            f += 2,
                            q = b[f] / 5,
                            f++,
                            w = C * grd * 3 + e,
                            q = newFood(w, e, C, q, !0, t),
                            c || (c = !0,
                            z = Math.floor(e / sector_size),
                            I = Math.floor(C / sector_size)),
                            q.sx = z,
                            q.sy = I;
                        t = {};
                        t.xx = z;
                        t.yy = I;
                        sectors.push(t)
                    } else
                        for (z = b[f] << 8 | b[f + 1],
                        f += 2,
                        I = b[f] << 8 | b[f + 1],
                        f += 2,
                        t = {},
                        t.xx = z,
                        t.yy = I,
                        sectors.push(t); f < h; )
                            w = b[f] << 16 | b[f + 1] << 8 | b[f + 2],
                            f += 3,
                            t = b[f],
                            f++,
                            e = sector_size * (z + b[f] / 255),
                            f++,
                            C = sector_size * (I + b[f] / 255),
                            f++,
                            q = b[f] / 5,
                            f++,
                            q = newFood(w, e, C, q, !0, t),
                            q.sx = z,
                            q.sy = I;
                else if ("b" == c || "f" == c)
                    4 <= protocol_version ? (t = b[f],
                    f++,
                    4 < q && (e = b[f] << 8 | b[f + 
                    1],
                    f += 2,
                    C = b[f] << 8 | b[f + 1],
                    w = C * grd * 3 + e,
                    q = b[f + 2] / 5,
                    q = newFood(w, e, C, q, "b" == c, t),
                    q.sx = Math.floor(e / sector_size),
                    q.sy = Math.floor(C / sector_size))) : (w = b[f] << 16 | b[f + 1] << 8 | b[f + 2],
                    f += 3,
                    4 < q && (t = b[f],
                    f++,
                    z = b[f] << 8 | b[f + 1],
                    f += 2,
                    I = b[f] << 8 | b[f + 1],
                    f += 2,
                    e = sector_size * (z + b[f] / 255),
                    f++,
                    C = sector_size * (I + b[f] / 255),
                    f++,
                    q = b[f] / 5,
                    q = newFood(w, e, C, q, "b" == c, t),
                    q.sx = z,
                    q.sy = I));
                else if ("c" == c) {
                    4 <= protocol_version ? (e = b[f] << 8 | b[f + 1],
                    f += 2,
                    C = b[f] << 8 | b[f + 1],
                    f += 2,
                    w = C * grd * 3 + e) : (w = b[f] << 16 | b[f + 1] << 8 | b[f + 2],
                    f += 3);
                    for (z = cm1 = foods_c - 1; 0 <= 
                    z; z--)
                        if (q = foods[z],
                        q.id == w) {
                            q.eaten = !0;
                            f + 2 <= h ? (b = b[f] << 8 | b[f + 1],
                            q.eaten_by = os["s" + b],
                            q.eaten_fr = 0) : (z == cm1 ? foods[z] = null  : (foods[z] = foods[cm1],
                            foods[cm1] = null ),
                            foods_c--,
                            cm1--);
                            w = -1;
                            break
                        }
                    -1 != w && console.log("wtf")
                } else if ("j" == c) {
                    w = b[f] << 8 | b[f + 1];
                    f += 2;
                    e = 1 + 3 * (b[f] << 8 | b[f + 1]);
                    f += 2;
                    C = 1 + 3 * (b[f] << 8 | b[f + 1]);
                    f += 2;
                    h = null ;
                    for (z = preys.length - 1; 0 <= z; z--)
                        if (preys[z].id == w) {
                            h = preys[z];
                            break
                        }
                    if (h) {
                        z = etm / 8 * h.sp / 4;
                        z *= lag_mult;
                        c = h.xx;
                        w = h.yy;
                        15 == q ? (h.dir = b[f] - 48,
                        f++,
                        h.ang = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 16777215,
                        f += 3,
                        h.wang = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 16777215,
                        f += 3,
                        h.sp = (b[f] << 8 | b[f + 1]) / 1E3) : 11 == q ? (h.ang = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 16777215,
                        f += 3,
                        h.sp = (b[f] << 8 | b[f + 1]) / 1E3) : 12 == q ? (h.dir = b[f] - 48,
                        f++,
                        h.wang = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 16777215,
                        f += 3,
                        h.sp = (b[f] << 8 | b[f + 1]) / 1E3) : 13 == q ? (h.dir = b[f] - 48,
                        f++,
                        h.ang = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 16777215,
                        f += 3,
                        h.wang = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 16777215) : 9 == q ? h.ang = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 16777215 : 10 == q ? (h.dir = 
                        b[f] - 48,
                        f++,
                        h.wang = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 16777215) : 8 == q && (h.sp = (b[f] << 8 | b[f + 1]) / 1E3);
                        h.xx = e + Math.cos(h.ang) * z;
                        h.yy = C + Math.sin(h.ang) * z;
                        b = h.xx - c;
                        f = h.yy - w;
                        w = h.fpos;
                        for (q = 0; q < rfc; q++)
                            h.fxs[w] -= b * rfas[q],
                            h.fys[w] -= f * rfas[q],
                            w++,
                            w >= rfc && (w = 0);
                        h.fx = h.fxs[h.fpos];
                        h.fy = h.fys[h.fpos];
                        h.ftg = rfc
                    }
                } else if ("y" == c)
                    if (w = b[f] << 8 | b[f + 1],
                    f += 2,
                    2 == q)
                        for (z = preys.length - 1; 0 <= z; z--) {
                            if (h = preys[z],
                            h.id == w) {
                                preys.splice(z, 1);
                                break
                            }
                        }
                    else if (4 == q)
                        for (b = b[f] << 8 | b[f + 1],
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
                        t = b[f],
                        f++,
                        e = (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) / 5,
                        f += 3,
                        C = (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) / 5,
                        f += 3,
                        q = b[f] / 5,
                        f++,
                        h = b[f] - 48,
                        f++,
                        x = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 16777215,
                        f += 3,
                        D = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 16777215,
                        f += 3,
                        A = (b[f] << 8 | b[f + 1]) / 1E3,
                        newPrey(w, e, C, q, t, h, x, D, A)
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
                } catch (h) {}
                e = new Uint8Array(3 + b.length);
                e[0] = 115;
                e[1] = 5;
                e[2] = c;
                for (c = 0; c < b.length; c++)
                    e[c + 3] = b.charCodeAt(c);
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