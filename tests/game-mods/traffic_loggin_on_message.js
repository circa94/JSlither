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
                var h = clus[b];
                if (h && 0 < h.ptms.length) {
                    for (var c = 0, f = h.ptms.length - 1; 0 <= f; f--)
                        c += h.ptms[f];
                    c /= h.ptms.length;
                    testing && console.log("cluster " + b + " ping time: " + c);
                    for (f = sos.length - 1; 0 <= f; f--)
                        sos[f].clu == b && (sos[f].ptm = 
                        c)
                }
            }
            if ("undefined" != typeof rmsos)
                for (b = 0; b < rmsos.length; b++)
                    for (h = "." + rmsos[b].a[0] + "." + rmsos[b].a[1] + "." + rmsos[b].a[2],
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
                  
                  /*
                  var snakeId = b[c] << 8 | b[c + 1];
                    
                  
                  if(f == "a"){
                       //console.log("InitialPacket;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "e"){
                      console.log(new Date().getTime() + " id " +snakeId +" sId " +(snake != null ? snake.id : "")  + "   updateDirection;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "E"){
                      console.log(new Date().getTime() + " id "+snakeId +" sId " +(snake != null ? snake.id : "") + "   Unkown;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "3"){
                      console.log(new Date().getTime() + " id " +snakeId +" sId " +(snake != null ? snake.id : "") + "   Unkown;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "4"){
                     console.log(new Date().getTime() + " id " +snakeId +" sId " +(snake != null ? snake.id : "") + "   Unkown;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "5"){
                      console.log(new Date().getTime()+ " id " +snakeId +" sId " +(snake != null ? snake.id : "")  + "   Unkown;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "h"){
                      //console.log("eatFoodPacket;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "r"){
                      console.log(new Date().getTime()+ " id " +snakeId +" sId " +(snake != null ? snake.id : "")  + "   Unkown;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "g"){
                      console.log(new Date().getTime() + " id " +snakeId +" sId " +(snake != null ? snake.id : "") + "   updatePosition;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "n"){
                      console.log(new Date().getTime() + " id " +snakeId +" sId " +(snake != null ? snake.id : "") + "   Unkown;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "G"){
                      console.log(new Date().getTime() + " id " +snakeId +" sId " +(snake != null ? snake.id : "") + "   updateSnakeParts;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "N"){
                      console.log(new Date().getTime()+ " id " +snakeId +" sId " +(snake != null ? snake.id : "")  + "   Unkown;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "l"){
                      console.log(new Date().getTime() + " id " +snakeId +" sId " +(snake != null ? snake.id : "") + "   Unkown;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "v"){
                      console.log(new Date().getTime()+ " id " +snakeId +" sId " +(snake != null ? snake.id : "")  + "   Unkown;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "w"){
                      console.log(new Date().getTime()+ " id " +snakeId +" sId " +(snake != null ? snake.id : "")  + "   Unkown;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "m"){
                      console.log(new Date().getTime() + " id " +snakeId +" sId " +(snake != null ? snake.id : "") + "   GlobalHighScorePacket;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "p"){
                      console.log(new Date().getTime() + " id " +snakeId +" sId " +(snake != null ? snake.id : "") + "   pongPacket;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "u"){
                      console.log(new Date().getTime() + " id " +snakeId +" sId " +(snake != null ? snake.id : "") + "   Unkown;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "F"){
                      //console.log("spawnFoodPacket;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "b"){
                      console.log(new Date().getTime()+ " id " +snakeId +" sId " +(snake != null ? snake.id : "")  + "   Unkown;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "f"){
                      //console.log(new Date().getTime()+ " id " +snakeId +" sId " +(snake != null ? snake.id : "")  + "   Unkown;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "c"){
                      console.log(new Date().getTime() + " id " +snakeId +" sId " +(snake != null ? snake.id : "") + "   Unkown;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "j"){
                      console.log(new Date().getTime()+ " id " +snakeId +" sId " +(snake != null ? snake.id : "")  + "   Unkown;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "y"){
                      console.log(new Date().getTime()+ " id " +snakeId +" sId " +(snake != null ? snake.id : "")  + "   Unkown;  Type: " + f +  "  Data:  " + b);
                  }else if(f == "s"){
                       console.log(new Date().getTime()+ " id " +snakeId +" sId " + (snake != null ? snake.id  : "" )  + "   newSnakePacket;  Type: " + f +  "  Data:  " + b);
                  }
                  */
                  
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
                    spangdv = 
                    b[c] / 10,
                    c++,
                    nsp1 = (b[c] << 8 | b[c + 1]) / 100,
                    c += 2,
                    nsp2 = (b[c] << 8 | b[c + 1]) / 100,
                    c += 2,
                    nsp3 = (b[c] << 8 | b[c + 1]) / 100,
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
                else if ("e" == f || "E" == f || 
                "3" == f || "4" == f || "5" == f) {
                    return;
                    var x = b[c] << 8 | b[c + 1]
                      , c = c + 2
                      , D = h = -1
                      , y = -1
                      , B = -1;
                    if (6 <= protocol_version)
                        6 == e ? (h = "e" == f ? 1 : 2,
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
                        y = 2 * b[c] * Math.PI / 256) : 
                        "4" == f ? (h = 2,
                        y = 2 * b[c] * Math.PI / 256) : "3" == f && (B = b[c] / 18));
                    else if (3 <= protocol_version) {
                        "3" != f && (8 == e || 7 == e || 6 == e && "3" != f || 5 == e && "3" != f) && (h = "e" == f ? 1 : 2);
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
                            y = 2 * 
                            (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215,
                            c += 3;
                        if (11 == t || 7 == t || 8 == t || 4 == t)
                            B = (b[c] << 8 | b[c + 1]) / 1E3
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
                      , I = (b[c] << 16 | b[c + 1] << 8 | b[c + 
                    2]) / 16777215;
                    if (q = os["s" + x])
                        q.fam = I,
                        snl(q)
                } else if ("r" == f) {
                    if (x = b[c] << 8 | b[c + 1],
                    c += 2,
                    q = os["s" + x]) {
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
                        var A = q.pts[q.pts.length - 1]
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
                        A.efs[A.eiu] = 0,
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
                        ovyy = snake.yy + snake.fy);
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
                            view_yy = 
                            snake.yy + snake.fy;
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
                                x = f.charCodeAt(t),
                                H = 38 == x ? H + "&amp;" : 60 == x ? H + "&lt;" : 62 == x ? H + "&gt;" : 32 == x ? H + "&nbsp;" : H + String.fromCharCode(x);
                            f = H;
                            y++;
                            score = Math.floor(150 * (fpsls[J] + I / fmlts[J] - 1) - 50) / 10;
                            x = B == L ? 1 : .7 * (.3 + .7 * (1 - y / 10));
                            C += '<span style="opacity:' + x + "; color:" + per_color_imgs[q].cs + ';">' + score + "</span><BR>";
                            A += '<span style="opacity:' + x + "; color:" + per_color_imgs[q].cs + ";" + (B == L ? "font-weight:bold;" : "") + '">' + f + 
                            "</span><BR>";
                            D += '<span style="opacity:' + x + "; color:" + per_color_imgs[q].cs + ';">#' + y + "</span><BR>"
                        }
                        lbs.innerHTML = C;
                        lbn.innerHTML = A;
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
                    "DE" == country ? C = "Deine endg\u00fcltige L\u00e4nge war" : "FR" == country ? C = "Votre longueur finale \u00e9tait de" : "BR" == country && (C = "Seu comprimento final foi de"),
                    h = "",
                    1E3 < e && (h = "!"),
                    lastscore.innerHTML = '<span style="opacity: .45;">' + C + " </span><b>" + e + "</b>" + h,
                    e = "Play Again",
                    "FR" == country ? e = "Jouer" : "BR" == country && (e = "Joga"),
                    play_btn.setText(String.fromCharCode(160) + e + String.fromCharCode(160)),
                    1 == b[c] ? (nick_holder.style.display = "none",
                    playh.style.display = "none",
                    smh.style.display = 
                    "none",
                    victory_holder.style.display = "inline",
                    saveh.style.display = "block",
                    want_victory_focus = want_victory_message = !0,
                    victory.disabled = !1,
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
                            q.xx == e && q.yy == C && sectors.splice(A, 
                            1)
                    }
                else if ("m" == f) {
                    J = b[c] << 16 | b[c + 1] << 8 | b[c + 2];
                    c += 3;
                    I = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 16777215;
                    c += 3;
                    C = Math.floor(150 * (fpsls[J] + I / fmlts[J] - 1) - 50) / 10;
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
                    0 < e.length && (b += "<span style='font-size:17px;'><b><i><span style='opacity: .5;'>&quot;</span>" + 
                    e + "<span style='opacity: .5;'>&quot;</span></i></b></span><BR><div style='height: 5px;'></div>"),
                    0 < t.length ? (b = 0 < e.length ? b + ("<i><span style='opacity: .5;'>- </span><span style='opacity: .75;'><b>" + t + "</b></span><span style='opacity: .5;'>, today's longest</span></i>") : "<i><span style='opacity: .5;'>Today's longest was </span><span style='opacity: .75;'><b>" + t + "</b></span></i>",
                    b += "<br><i><span style='opacity: .5;'>with a length of </span><span style='opacity: .65;'><b>" + C + "</b></span></i>") : b = 0 < 
                    e.length ? b + "<i><span style='opacity: .5;'>- </span><span style='opacity: .5;'>today's longest</span></i>" + ("<br><i><span style='opacity: .5;'>with a length of </span><span style='opacity: .65;'><b>" + C + "</b></span></i>") : b + ("<i><span style='opacity: .5;'>Today's longest: </span><span style='opacity: .75;'><b>" + C + "</b></span></i>"),
                    vcm.innerHTML = b)
                } else if ("p" == f)
                    wfpr = !1,
                    lagging && (etm *= lag_mult,
                    lagging = !1);
                else if ("u" == f) {
                    t = asmc.getContext("2d");
                    t.clearRect(0, 0, 80, 80);
                    t.fillStyle = "#FFFFFF";
                    for (var C = 
                    e = 0; c < h && !(80 <= C); )
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
                        if (x = b[c] << 8 | b[c + 1],
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
                            H = (b[c] << 16 | b[c + 1] << 8 | b[c + 
                            2]) / 5;
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
                                C = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 5,
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
                            q.spang = 
                            q.sp / spangdv;
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
                            C = b[c] << 8 | 
                            b[c + 1],
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
                        I = b[c] << 8 | b[c + 1],
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
                    4 < t && (e = b[c] << 8 | b[c + 
                    1],
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
                    I = b[c] << 8 | b[c + 1],
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
                    for (A = cm1 = foods_c - 1; 0 <= 
                    A; A--)
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
                } else if ("j" == f) {
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
                        h.wang = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215,
                        c += 3,
                        h.sp = (b[c] << 8 | b[c + 1]) / 1E3) : 13 == t ? (h.dir = b[c] - 48,
                        c++,
                        h.ang = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215,
                        c += 3,
                        h.wang = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215) : 9 == t ? h.ang = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215 : 10 == t ? (h.dir = 
                        b[c] - 48,
                        c++,
                        h.wang = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215) : 8 == t && (h.sp = (b[c] << 8 | b[c + 1]) / 1E3);
                        h.xx = e + Math.cos(h.ang) * A;
                        h.yy = C + Math.sin(h.ang) * A;
                        b = h.xx - f;
                        c = h.yy - x;
                        x = h.fpos;
                        for (t = 0; t < rfc; t++)
                            h.fxs[x] -= b * rfas[t],
                            h.fys[x] -= c * rfas[t],
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
                        y = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215,
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