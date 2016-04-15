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
        var q = ldmc.getContext("2d");
        q.clearRect(0, 
        0, 512, 128);
        for (var f, h, u = 1; 2 >= u; u++) {
            q.beginPath();
            1 == u ? (q.fillStyle = "#60FF70",
            h = 0) : (q.fillStyle = "#9850FF",
            h = Math.PI);
            for (var e = 0; 256 >= e; e++)
                f = 32 + 5 * Math.cos(h + lsfr / 6 + 8 * e / 256) + 8 * e / 256,
                256 == e && (f += 10),
                xx = 64 + Math.cos(h + lsfr / 44 + .8 * Math.PI * e / 256) * f * 1.25,
                yy = 64 + Math.sin(h + lsfr / 44 + .8 * Math.PI * e / 256) * f,
                0 == e ? q.moveTo(xx, yy) : q.lineTo(xx, yy);
            f = 32;
            xx = 64 + Math.cos(h + lsfr / 44 + .8 * Math.PI * (e + 47) / 256) * f * 1.25;
            yy = 64 + Math.sin(h + lsfr / 44 + .8 * Math.PI * (e + 47) / 256) * f;
            q.lineTo(xx, yy);
            for (e = 256; 0 <= e; e--)
                f = 32 + 5 * Math.cos(h + lsfr / 6 + 
                8 * e / 256) - 8 * e / 256,
                256 == e && (f -= 10),
                xx = 64 + Math.cos(h + lsfr / 44 + .8 * Math.PI * e / 256) * f * 1.25,
                yy = 64 + Math.sin(h + lsfr / 44 + .8 * Math.PI * e / 256) * f,
                q.lineTo(xx, yy);
            q.fill()
        }
        connecting ? (ss_a += avfr / 86,
        1 <= ss_a && (ss_a = 1),
        ss_sh += avfr / 93,
        1 <= ss_sh && (ss_sh = 1)) : (ss_a -= avfr / 86,
        0 >= ss_a && (ss_sh = ss_a = 0,
        ldmc.style.display = "none",
        trf(ldmc, "")));
        ldmc.style.opacity = ss_a;
        e = Math.round(.1 + .9 * ss_sh * (1 + 2 * Math.pow(1 - ss_a, 2)) * 1E5) / 1E5;
        trf(ldmc, "scale(" + e + "," + e + ")")
    }
    if (-1 != play_btn_click_mtm && 6666 < b - play_btn_click_mtm) {
        e = document.createElement("img");
        h = [];
        h.push("bso=" + encodeURIComponent(bso));
        if (bso)
            for (var c in bso)
                h.push(c + "=" + encodeURIComponent(bso[c]));
        h.push("waiting_for_sos=" + (waiting_for_sos ? "true" : "false"));
        h.push("soslen=" + sos.length);
        h.push("sislen=" + sis.length);
        e.src = "http://slither.io/cnc.jpg?" + h.join("&");
        play_btn_click_mtm = -1
    }
    waiting_for_sos && b > sos_ready_after_mtm && (connecting || connected || connect());
    connecting && 3E3 < b - start_connect_mtm && (bso && (bso.tainted = !0),
    connect());
    if (choosing_skin) {
        for (e = snakes.length - 1; 0 <= e; e--)
            for (c = snakes[e],
            u = c.pts.length - 1; 0 <= u; u--)
                c.pts[u].yy = grd / 2 + 15 * Math.cos(u / 4 + fr / 19) * (1 - u / c.pts.length);
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
    u = .5 - .5 * Math.cos(tip_fr),
    tips.style.opacity = Math.round(1E5 * Math.pow(u, .5)) / 1E5);
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
            } catch (y) {}
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
        e = Math.round(lgbsc * lgcsc * 1E5) / 1E5,
        1 == e ? trf(login, "") : trf(login, "scale(" + e + "," + e + ")"),
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
    5 <= protocol_version ? (e = new Uint8Array(2),
    e[0] = 252) : (e = new Uint8Array(2),
    e[0] = 108),
    e[1] = v,
    ws.send(e),
    console.log(new Date().getTime() + "to server " + e),
    snake.eang -= mamu * v * snake.scang * snake.spang) : 0 < kd_r_frb && (v = kd_r_frb,
    127 < v && (v = 127),
    kd_r_frb -= v,
    5 <= protocol_version ? (v += 128,
    e = new Uint8Array(2),
    e[0] = 252) : (e = new Uint8Array(2),
    e[0] = 114),
    e[1] = v,
    snake.eang += mamu * v * snake.scang * snake.spang,
    ws.send(e))),
    console.log(new Date().getTime() + "to server " + e),
    !wfpr && 250 < b - last_ping_mtm && (last_ping_mtm = 
    b,
    wfpr = !0,
    e = new Uint8Array(1),
    e[0] = 5 <= protocol_version ? 251 : 112,
    ws.send(e),
    console.log(new Date().getTime() + "to server " + e),
    lpstm = b));
    null  != snake && 2147483647 != grd && 1E3 < b - locu_mtm && (locu_mtm = Date.now(),
    myloc.style.left = Math.round(52 + 40 * (snake.xx - grd) / grd - 7) + "px",
    myloc.style.top = Math.round(52 + 40 * (snake.yy - grd) / grd - 7) + "px");
    if (1E3 < b - lrd_mtm) {
        if (testing && console && console.log) {
            console.log("FPS: " + fps);
            h = [];
            trdps += rdps;
            playing && tcsecs++;
            h.push("FPS: " + fps);
            h.push("sectors: " + sectors.length);
            h.push("foods: " + foods_c);
            h.push("bytes/sec: " + rdps);
            h.push("bytes/sec avg: " + 
            Math.round(trdps / tcsecs));
            h.push("");
            for (e = c = 0; e < rdpspc.length; e++)
                0 <= rdpspc[e] && (c += rdpspc[e]);
            for (e = 0; e < rdpspc.length; e++)
                0 <= rdpspc[e] && h.push(String.fromCharCode(e) + ": " + rdpspc[e] + " (" + Math.round(rdpspc[e] / c * 1E3) / 10 + "%)");
            h.push("total: " + c);
            maxp = pf_ep = pf_nap = pf_remove = pf_new_add = pf_add = 0;
            h.push("");
            for (e = 1; e < pfs.length; e++)
                0 != pfs[e] && (h.push(e + ": " + Math.round(1E3 * pfs[e]) / 1E3),
                pfs[e] = 0);
            pft = 0;
            pfd.innerHTML = h.join("<br>")
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
        e = new Uint8Array(1),
        e[0] = sang & 255,
        lpstm = 
        b,
        ws.send(e.buffer))) : (sang = Math.floor(16777215 * ang / pi2),
            console.log(new Date().getTime() + "to server " + e),
        sang != lsang && (lsang = sang,
        e = new Uint8Array(4),
        e[0] = 101,
        e[1] = sang >> 16 & 255,
        e[2] = sang >> 8 & 255,
        e[3] = sang & 255,
        lpstm = b,
        ws.send(e.buffer)))),
        console.log(new Date().getTime() + "to server " + e)
    }
    if (!choosing_skin)
        for (e = snakes.length - 1; 0 <= e; e--) {
            c = snakes[e];
            q = mamu * vfr * c.scang * c.spang;
            b = c.sp * vfr / 4;
            b > c.msl && (b = c.msl);
            if (!c.dead) {
                c.tsp != c.sp && (c.tsp < c.sp ? (c.tsp += .3 * vfr,
                c.tsp > c.sp && (c.tsp = c.sp)) : (c.tsp -= .3 * vfr,
                c.tsp < c.sp && (c.tsp = c.sp)));
                c.tsp > c.fsp && (c.sfr += (c.tsp - c.fsp) * vfr * .021);
                if (0 < c.fltg)
                    for (h = vfrb,
                    h > c.fltg && 
                    (h = c.fltg),
                    c.fltg -= h,
                    qq = 0; qq < h; qq++)
                        c.fl = c.fls[c.flpos],
                        c.fls[c.flpos] = 0,
                        c.flpos++,
                        c.flpos >= lfc && (c.flpos = 0);
                else
                    0 == c.fltg && (c.fltg = -1,
                    c.fl = 0);
                c.cfl = c.tl + c.fl
            }
            if (1 == c.dir) {
                c.ang -= q;
                if (0 > c.ang || c.ang >= pi2)
                    c.ang %= pi2;
                0 > c.ang && (c.ang += pi2);
                h = (c.wang - c.ang) % pi2;
                0 > h && (h += pi2);
                h > Math.PI && (h -= pi2);
                0 < h && (c.ang = c.wang,
                c.dir = 0)
            } else if (2 == c.dir) {
                c.ang += q;
                if (0 > c.ang || c.ang >= pi2)
                    c.ang %= pi2;
                0 > c.ang && (c.ang += pi2);
                h = (c.wang - c.ang) % pi2;
                0 > h && (h += pi2);
                h > Math.PI && (h -= pi2);
                0 > h && (c.ang = c.wang,
                c.dir = 0)
            } else
                c.ang = c.wang;
            1 != c.ehl && (c.ehl += .03 * vfr,
            1 <= c.ehl && (c.ehl = 1));
            q = c.pts[c.pts.length - 1];
            c.wehang = Math.atan2(c.yy + c.fy - q.yy - q.fy + q.eby * (1 - c.ehl), c.xx + c.fx - q.xx - q.fx + q.ebx * (1 - c.ehl));
            c.dead || c.ehang == c.wehang || (h = (c.wehang - c.ehang) % pi2,
            0 > h && (h += pi2),
            h > Math.PI && (h -= pi2),
            0 > h ? c.edir = 1 : 0 < h && (c.edir = 2));
            if (1 == c.edir) {
                c.ehang -= .1 * vfr;
                if (0 > c.ehang || c.ehang >= pi2)
                    c.ehang %= pi2;
                0 > c.ehang && (c.ehang += pi2);
                h = (c.wehang - c.ehang) % pi2;
                0 > h && (h += pi2);
                h > Math.PI && (h -= pi2);
                0 < h && (c.ehang = c.wehang,
                c.edir = 0)
            } else if (2 == c.edir) {
                c.ehang += .1 * vfr;
                if (0 > c.ehang || c.ehang >= pi2)
                    c.ehang %= pi2;
                0 > c.ehang && (c.ehang += pi2);
                h = (c.wehang - c.ehang) % pi2;
                0 > h && (h += pi2);
                h > Math.PI && (h -= pi2);
                0 > h && (c.ehang = c.wehang,
                c.edir = 0)
            }
            c.dead || (c.xx += Math.cos(c.ang) * b,
            c.yy += Math.sin(c.ang) * b,
            c.chl += b / c.msl);
            if (0 < vfrb) {
                for (u = c.pts.length - 1; 0 <= u; u--)
                    q = c.pts[u],
                    q.dying && (q.da += .0015 * vfrb,
                    1 < q.da && (c.pts.splice(u, 1),
                    q.dying = !1,
                    points_dp.add(q)));
                for (u = c.pts.length - 1; 0 <= u; u--)
                    if (q = c.pts[u],
                    0 < q.eiu) {
                        fy = fx = 0;
                        for (qq = cm1 = q.eiu - 1; 0 <= qq; qq--)
                            q.efs[qq] = 2 == q.ems[qq] ? q.efs[qq] + vfrb2 : q.efs[qq] + 
                            vfrb,
                            h = q.efs[qq],
                            h >= hfc ? (qq != cm1 && (q.exs[qq] = q.exs[cm1],
                            q.eys[qq] = q.eys[cm1],
                            q.efs[qq] = q.efs[cm1],
                            q.ems[qq] = q.ems[cm1]),
                            q.eiu--,
                            cm1--) : (fx += q.exs[qq] * hfas[h],
                            fy += q.eys[qq] * hfas[h]);
                        q.fx = fx;
                        q.fy = fy
                    }
            }
            b = 2.3 * Math.cos(c.eang);
            h = 2.3 * Math.sin(c.eang);
            c.rex < b && (c.rex += vfr / 6,
            c.rex >= b && (c.rex = b));
            c.rey < h && (c.rey += vfr / 6,
            c.rey >= h && (c.rey = h));
            c.rex > b && (c.rex -= vfr / 6,
            c.rex <= b && (c.rex = b));
            c.rey > h && (c.rey -= vfr / 6,
            c.rey <= h && (c.rey = h));
            if (0 < vfrb) {
                if (0 < c.ftg)
                    for (h = vfrb,
                    h > c.ftg && (h = c.ftg),
                    c.ftg -= h,
                    qq = 0; qq < h; qq++)
                        c.fx = 
                        c.fxs[c.fpos],
                        c.fy = c.fys[c.fpos],
                        c.fchl = c.fchls[c.fpos],
                        c.fxs[c.fpos] = 0,
                        c.fys[c.fpos] = 0,
                        c.fchls[c.fpos] = 0,
                        c.fpos++,
                        c.fpos >= rfc && (c.fpos = 0);
                else
                    0 == c.ftg && (c.ftg = -1,
                    c.fx = 0,
                    c.fy = 0,
                    c.fchl = 0);
                if (0 < c.fatg)
                    for (h = vfrb,
                    h > c.fatg && (h = c.fatg),
                    c.fatg -= h,
                    qq = 0; qq < h; qq++)
                        c.fa = c.fas[c.fapos],
                        c.fas[c.fapos] = 0,
                        c.fapos++,
                        c.fapos >= afc && (c.fapos = 0);
                else
                    0 == c.fatg && (c.fatg = -1,
                    c.fa = 0)
            }
            c.dead ? (c.dead_amt += .02 * vfr,
            1 <= c.dead_amt && snakes.splice(e, 1)) : 1 != c.alive_amt && (c.alive_amt += .015 * vfr,
            1 <= c.alive_amt && (c.alive_amt = 1))
        }
    for (e = 
    preys.length - 1; 0 <= e; e--) {
        u = preys[e];
        q = mamu2 * vfr;
        b = u.sp * vfr / 4;
        if (0 < vfrb)
            if (0 < u.ftg)
                for (h = vfrb,
                h > u.ftg && (h = u.ftg),
                u.ftg -= h,
                qq = 1; qq <= h; qq++)
                    qq == h && (u.fx = u.fxs[u.fpos],
                    u.fy = u.fys[u.fpos]),
                    u.fxs[u.fpos] = 0,
                    u.fys[u.fpos] = 0,
                    u.fpos++,
                    u.fpos >= rfc && (u.fpos = 0);
            else
                0 == u.ftg && (u.fx = 0,
                u.fy = 0,
                u.ftg = -1);
        if (1 == u.dir) {
            u.ang -= q;
            if (0 > u.ang || u.ang >= pi2)
                u.ang %= pi2;
            0 > u.ang && (u.ang += pi2);
            h = (u.wang - u.ang) % pi2;
            0 > h && (h += pi2);
            h > Math.PI && (h -= pi2);
            0 < h && (u.ang = u.wang,
            u.dir = 0)
        } else if (2 == u.dir) {
            u.ang += q;
            if (0 > u.ang || u.ang >= pi2)
                u.ang %= 
                pi2;
            0 > u.ang && (u.ang += pi2);
            h = (u.wang - u.ang) % pi2;
            0 > h && (h += pi2);
            h > Math.PI && (h -= pi2);
            0 > h && (u.ang = u.wang,
            u.dir = 0)
        } else
            u.ang = u.wang;
        u.xx += Math.cos(u.ang) * b;
        u.yy += Math.sin(u.ang) * b;
        u.gfr += vfr * u.gr;
        u.eaten ? (1.5 != u.fr && (u.fr += vfr / 150,
        1.5 <= u.fr && (u.fr = 1.5)),
        u.eaten_fr += vfr / 47,
        u.gfr += vfr,
        c = u.eaten_by,
        1 <= u.eaten_fr || !c ? preys.splice(e, 1) : (u.eaten_fr4 = Math.pow(u.eaten_fr, 4),
        u.rad = 1 - Math.pow(u.eaten_fr, 3))) : 1 != u.fr && (u.fr += vfr / 150,
        1 <= u.fr ? (u.fr = 1,
        u.rad = 1) : (u.rad = .5 * (1 - Math.cos(Math.PI * u.fr)),
        u.rad += .66 * (.5 * (1 - 
        Math.cos(Math.PI * u.rad)) - u.rad)))
    }
    for (e = cm1 = foods_c - 1; 0 <= e; e--)
        b = foods[e],
        b.gfr += vfr * b.gr,
        b.eaten ? (1.5 != b.fr && (b.fr += vfr / 150,
        1.5 <= b.fr && (b.fr = 1.5)),
        b.eaten_fr += vfr / 41,
        b.rad = 1 - Math.pow(b.eaten_fr, 3),
        c = b.eaten_by,
        1 <= b.eaten_fr || !c ? (e == cm1 ? foods[e] = null  : (foods[e] = foods[cm1],
        foods[cm1] = null ),
        foods_c--,
        cm1--) : (c = b.eaten_by,
        h = b.eaten_fr * b.eaten_fr,
        b.eaten_fr4 = h * h,
        b.rad = 1 - b.eaten_fr * h,
        b.rx = b.xx + (c.xx + c.fx + Math.cos(c.ang + c.fa) * (43 - 24 * h) * (1 - h) - b.xx) * h,
        b.ry = b.yy + (c.yy + c.fy + Math.sin(c.ang + c.fa) * (43 - 24 * h) * (1 - 
        h) - b.yy) * h,
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
, bgx = 0, bgy = 0, bgx2 = 0, bgy2 = 0, fgfr = 0, px, py, lpx, lpy, ax, ay, lax, lay, pax, pay, fx, fy, fs, maxp = 0, fps = 0, redraw = function() {
    fps++;
    var b = mc.getContext("2d");
    if (animating) {
        if (snake) {
            var q = .5 + .4 / Math.max(1, (snake.sct + 16) / 36);
            gsc != q && (gsc < q ? (gsc += 2E-4,
            gsc >= q && (gsc = q)) : (gsc -= 2E-4,
            gsc <= q && (gsc = q)))
        }
        var q = view_xx
          , f = view_yy;
        null  != snake && (0 < fvtg && (fvtg--,
        fvx = fvxs[fvpos],
        fvy = fvys[fvpos],
        fvxs[fvpos] = 0,
        fvys[fvpos] = 0,
        fvpos++,
        fvpos >= vfc && (fvpos = 0)),
        view_xx = snake.xx + snake.fx + fvx,
        view_yy = snake.yy + snake.fy + fvy,
        choosing_skin && (view_xx -= 104,
        gsc = 1),
        view_ang = Math.atan2(view_yy - grd, view_xx - grd),
        view_dist = Math.sqrt((view_xx - grd) * (view_xx - grd) + (view_yy - grd) * (view_yy - grd)),
        bpx1 = view_xx - (mww2 / gsc + 84),
        bpy1 = view_yy - (mhh2 / gsc + 84),
        bpx2 = view_xx + (mww2 / gsc + 84),
        bpy2 = view_yy + (mhh2 / gsc + 84),
        fpx1 = view_xx - (mww2 / gsc + 24),
        fpy1 = view_yy - (mhh2 / gsc + 24),
        fpx2 = view_xx + (mww2 / gsc + 24),
        fpy2 = view_yy + (mhh2 / gsc + 24));
        bgx2 -= 1 * (view_xx - q) / bgw2;
        bgy2 -= 1 * (view_yy - f) / bgh2;
        bgx2 %= 1;
        0 > bgx2 && (bgx2 += 1);
        bgy2 %= 1;
        0 > bgy2 && (bgy2 += 1);
        ggbg && (high_quality || 0 < gla) ? (b.save(),
        b.fillStyle = "#000000",
        b.fillRect(0, 0, mww, mhh),
        b.globalAlpha = .3 * gla,
        b.drawImage(gbgmc, 0, 0),
        b.restore()) : (b.fillStyle = "#000000",
        b.fillRect(0, 0, mww, 
        mhh));
        if (bgp2) {
            b.save();
            b.fillStyle = bgp2;
            b.translate(mww2, mhh2);
            b.scale(gsc, gsc);
            b.translate(bgx2 * bgw2, bgy2 * bgh2);
            b.globalAlpha = .4 + .6 * (1 - gla);
            b.fillRect(3 * -mww / gsc, 3 * -mhh / gsc, 5 * mww / gsc, 5 * mhh / gsc);
            if (high_quality || 0 < gla)
                b.globalCompositeOperation = "lighter",
                b.globalAlpha = .4 * gla,
                b.fillRect(3 * -mww / gsc, 3 * -mhh / gsc, 5 * mww / gsc, 5 * mhh / gsc);
            b.restore()
        }
        if (testing)
            for (q = sectors.length - 1; 0 <= q; q--)
                f = sectors[q],
                b.fillStyle = "rgba(0, 255, 0, .1)",
                b.fillRect(mww2 + (f.xx * sector_size - view_xx) * gsc, mhh2 + (f.yy * sector_size - 
                view_yy) * gsc, sector_size * gsc - 4, sector_size * gsc - 4);
        if (high_quality || 0 < gla) {
            var h = 1.75;
            1 != gla && (h = 1.75 * gla);
            b.save();
            for (q = foods_c - 1; 0 <= q; q--)
                f = foods[q],
                f.rx >= fpx1 && f.ry >= fpy1 && f.rx <= fpx2 && f.ry <= fpy2 && (1 == f.rad ? (A = mww2 + gsc * (f.rx - view_xx) - f.ofw2,
                t = mhh2 + gsc * (f.ry - view_yy) - f.ofh2,
                -50 <= A && -50 <= t && A <= mwwp50 && t <= mhhp50 && (b.globalAlpha = h * f.fr,
                b.drawImage(f.ofi, A, t))) : (A = mww2 + gsc * (f.rx - view_xx) - f.ofw2 * f.rad,
                t = mhh2 + gsc * (f.ry - view_yy) - f.ofh2 * f.rad,
                -50 <= A && -50 <= t && A <= mwwp50 && t <= mhhp50 && (b.globalAlpha = h * f.fr,
                b.drawImage(f.ofi, 
                0, 0, f.ofw, f.ofh, A, t, f.ofw * f.rad, f.ofh * f.rad))));
            b.restore()
        }
        b.save();
        b.globalCompositeOperation = "lighter";
        if (high_quality || 0 < gla) {
            h = .75;
            1 != gla && (h = .75 * gla);
            var u = .75;
            1 != gla && (u = 1 - .25 * gla);
            for (q = foods_c - 1; 0 <= q; q--)
                f = foods[q],
                f.rx >= fpx1 && f.ry >= fpy1 && f.rx <= fpx2 && f.ry <= fpy2 && (1 == f.rad ? (A = mww2 + gsc * (f.rx - view_xx) - f.fw2,
                t = mhh2 + gsc * (f.ry - view_yy) - f.fh2,
                -50 <= A && -50 <= t && A <= mwwp50 && t <= mhhp50 && (b.globalAlpha = u * f.fr,
                b.drawImage(f.fi, A, t),
                b.globalAlpha = h * (.5 + .5 * Math.cos(f.gfr / 13)) * f.fr,
                b.drawImage(f.fi, A, t))) : 
                (A = mww2 + gsc * (f.rx - view_xx) - f.fw2 * f.rad,
                t = mhh2 + gsc * (f.ry - view_yy) - f.fh2 * f.rad,
                -50 <= A && -50 <= t && A <= mwwp50 && t <= mhhp50 && (b.globalAlpha = u * f.fr,
                b.drawImage(f.fi, 0, 0, f.fw, f.fh, A, t, f.fw * f.rad, f.fh * f.rad),
                b.globalAlpha = h * (.5 + .5 * Math.cos(f.gfr / 13)) * f.fr,
                b.drawImage(f.fi, 0, 0, f.fw, f.fh, A, t, f.fw * f.rad, f.fh * f.rad))))
        } else
            for (q = foods_c - 1; 0 <= q; q--)
                f = foods[q],
                f.rx >= fpx1 && f.ry >= fpy1 && f.rx <= fpx2 && f.ry <= fpy2 && (1 == f.rad ? (A = mww2 + gsc * (f.rx - view_xx) - f.fw2,
                t = mhh2 + gsc * (f.ry - view_yy) - f.fh2,
                -50 <= A && -50 <= t && A <= mwwp50 && t <= mhhp50 && 
                (b.globalAlpha = f.fr,
                b.drawImage(f.fi, A, t))) : (A = mww2 + gsc * (f.rx - view_xx) - f.fw2 * f.rad,
                t = mhh2 + gsc * (f.ry - view_yy) - f.fh2 * f.rad,
                -50 <= A && -50 <= t && A <= mwwp50 && t <= mhhp50 && (b.globalAlpha = f.fr,
                b.drawImage(f.fi, 0, 0, f.fw, f.fh, A, t, f.fw * f.rad, f.fh * f.rad))));
        b.restore();
        b.save();
        b.globalCompositeOperation = "lighter";
        for (q = preys.length - 1; 0 <= q; q--)
            if (h = preys[q],
            c = h.xx + h.fx,
            y = h.yy + h.fy,
            px = mww2 + gsc * (c - view_xx),
            py = mhh2 + gsc * (y - view_yy),
            -50 <= px && -50 <= py && px <= mwwp50 && py <= mhhp50) {
                if (h.eaten) {
                    var f = h.eaten_by
                      , e = Math.pow(h.eaten_fr, 
                    2)
                      , c = c + (f.xx + f.fx + Math.cos(f.ang + f.fa) * (43 - 24 * e) * (1 - e) - c) * e
                      , y = y + (f.yy + f.fy + Math.sin(f.ang + f.fa) * (43 - 24 * e) * (1 - e) - y) * e;
                    px = mww2 + gsc * (c - view_xx);
                    py = mhh2 + gsc * (y - view_yy)
                }
                1 == h.rad ? (A = px - h.fw2,
                t = py - h.fh2,
                b.globalAlpha = .75 * h.fr,
                b.drawImage(h.fi, A, t),
                b.globalAlpha = .75 * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr,
                b.drawImage(h.fi, A, t)) : (A = px - h.fw2 * h.rad,
                t = py - h.fh2 * h.rad,
                b.globalAlpha = .75 * h.fr,
                b.drawImage(h.fi, 0, 0, h.fw, h.fh, A, t, h.fw * h.rad, h.fh * h.rad),
                b.globalAlpha = .75 * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr,
                b.drawImage(h.fi, 0, 0, 
                h.fw, h.fh, A, t, h.fw * h.rad, h.fh * h.rad))
            }
        b.restore();
        b.save();
        b.strokeStyle = "#90C098";
        for (var c, y, E, q = snakes.length - 1; 0 <= q; q--)
            f = snakes[q],
            c = f.xx + f.fx,
            y = f.yy + f.fy + 40,
            0 < f.na && c >= bpx1 - 100 && y >= bpy1 && c <= bpx2 + 100 && y <= bpy2 && (f == snake && (f.fnfr++,
            200 < f.fnfr && (f.na -= .004,
            0 > f.na && (f.na = 0))),
            b.save(),
            b.globalAlpha = .5 * f.na * f.alive_amt * (1 - f.dead_amt),
            b.font = "12px Arial, Helvetica Neue, Helvetica, sans-serif",
            b.fillStyle = f.csw,
            b.textBaseline = "middle",
            b.textAlign = "center",
            h = f.xx + f.fx,
            u = f.yy + f.fy,
            h = mww2 + (h - view_xx) * 
            gsc,
            u = mhh2 + (u - view_yy) * gsc,
            b.fillText(f.nk, h, u + 32 + 7 * f.sc * gsc),
            b.restore());
        for (q = snakes.length - 1; 0 <= q; q--)
            for (f = snakes[q],
            f.iiv = !1,
            x = f.pts.length - 1; 0 <= x; x--)
                if (c = f.pts[x],
                px = c.xx + c.fx,
                py = c.yy + c.fy,
                px >= bpx1 && py >= bpy1 && px <= bpx2 && py <= bpy2) {
                    f.iiv = !0;
                    break
                }
        for (q = snakes.length - 1; 0 <= q; q--)
            if (f = snakes[q],
            f.iiv) {
                h = f.xx + f.fx;
                u = f.yy + f.fy;
                px = h;
                py = u;
                E = f.ehang;
                var B = f.sc
                  , w = 29 * B
                  , D = f.cfl;
                c = f.pts[f.pts.length - 1];
                if (1 == render_mode) {
                    b.save();
                    b.beginPath();
                    b.moveTo(mww2 + (px - view_xx) * gsc, mhh2 + (py - view_yy) * gsc);
                    y = !1;
                    for (var x = 
                    f.pts.length - 1; 0 <= x; x--) {
                        c = f.pts[x];
                        lpx = px;
                        lpy = py;
                        px = c.xx;
                        py = c.yy;
                        var A = c.fx
                          , t = c.fy;
                        0 < D && (px += A,
                        py += t,
                        lax = ax,
                        lay = ay,
                        ax = (px + lpx) / 2,
                        ay = (py + lpy) / 2,
                        y || (lax = ax,
                        lay = ay),
                        1 > D && (e = 1 - D,
                        lpx += (lax - lpx) * e,
                        lpy += (lay - lpy) * e,
                        ax += (lax - ax) * e,
                        ay += (lay - ay) * e),
                        y ? D-- : D -= f.chl + f.fchl,
                        y ? b.quadraticCurveTo(mww2 + (lpx - view_xx) * gsc, mhh2 + (lpy - view_yy) * gsc, mww2 + (ax - view_xx) * gsc, mhh2 + (ay - view_yy) * gsc) : (b.lineTo(mww2 + (ax - view_xx) * gsc, mhh2 + (ay - view_yy) * gsc),
                        y = !0))
                    }
                    b.save();
                    b.lineJoin = "round";
                    b.lineCap = "round";
                    is_firefox ? (f.sp > f.fsp && 
                    (x = f.alive_amt * (1 - f.dead_amt) * Math.max(0, Math.min(1, (f.sp - f.ssp) / (f.msp - f.ssp))),
                    b.save(),
                    b.strokeStyle = f.cs,
                    b.globalAlpha = .3 * x,
                    b.lineWidth = (w + 6) * gsc,
                    b.stroke(),
                    b.lineWidth = (w + 9) * gsc,
                    b.stroke(),
                    b.lineWidth = (w + 12) * gsc,
                    b.stroke(),
                    b.restore()),
                    b.globalAlpha = 1 * f.alive_amt * (1 - f.dead_amt),
                    b.strokeStyle = "#000000",
                    b.lineWidth = (w + 5) * gsc) : (f.sp > f.fsp && (x = f.alive_amt * (1 - f.dead_amt) * Math.max(0, Math.min(1, (f.sp - f.ssp) / (f.msp - f.ssp))),
                    b.save(),
                    b.lineWidth = (w - 2) * gsc,
                    b.shadowBlur = 30 * gsc,
                    b.shadowColor = "rgba(" + f.rr + 
                    "," + f.gg + "," + f.bb + ", " + Math.round(1E4 * x) / 1E4 + ")",
                    b.stroke(),
                    b.stroke(),
                    b.restore()),
                    b.globalAlpha = .4 * f.alive_amt * (1 - f.dead_amt),
                    b.strokeStyle = "#000000",
                    b.lineWidth = (w + 5) * gsc,
                    b.stroke(),
                    b.strokeStyle = f.cs,
                    b.lineWidth = w * gsc,
                    b.strokeStyle = "#000000",
                    b.globalAlpha = 1 * f.alive_amt * (1 - f.dead_amt));
                    b.stroke();
                    b.strokeStyle = f.cs;
                    b.globalAlpha = .8 * f.alive_amt * (1 - f.dead_amt);
                    b.lineWidth = w * gsc;
                    b.stroke();
                    b.restore();
                    b.strokeStyle = f.cs;
                    f.dead && (t = (.5 + .5 * Math.abs(Math.sin(5 * Math.PI * f.dead_amt))) * Math.sin(Math.PI * 
                    f.dead_amt),
                    b.save(),
                    b.lineJoin = "round",
                    b.lineCap = "round",
                    b.globalCompositeOperation = "lighter",
                    b.lineWidth = (w - 3) * gsc,
                    b.globalAlpha = t,
                    b.strokeStyle = "#FFCC99",
                    b.stroke(),
                    b.restore());
                    b.restore()
                }
                if (2 == render_mode) {
                    var w = .5 * w, H, z, L, I, C, K, M, O, A = 0;
                    px = h;
                    py = u;
                    C = px;
                    K = py;
                    C >= bpx1 && K >= bpy1 && C <= bpx2 && K <= bpy2 ? (pbx[0] = C,
                    pby[0] = K,
                    pba[0] = Math.atan2(u - (c.yy + c.fy), h - (c.xx + c.fx)) + Math.PI,
                    pbu[0] = 1) : pbu[0] = 0;
                    A = 1;
                    n = (f.chl + f.fchl) % .25;
                    0 > n && (n += .25);
                    n = .25 - n;
                    D += 1 - .25 * Math.ceil((f.chl + f.fchl) / .25);
                    ax = px;
                    ay = py;
                    f.sep != f.wsep && 
                    (f.sep < f.wsep ? (f.sep += .01,
                    f.sep >= f.wsep && (f.sep = f.wsep)) : f.sep > f.wsep && (f.sep -= .01,
                    f.sep <= f.wsep && (f.sep = f.wsep)));
                    for (var N = f.sep * qsm, J = 0, t = per_color_imgs[f.cv].kmcs, F, G, x = f.pts.length - 1; 0 <= x; x--)
                        if (c = f.pts[x],
                        lpx = px,
                        lpy = py,
                        px = c.xx + c.fx,
                        py = c.yy + c.fy,
                        -.25 < D) {
                            L = C;
                            I = K;
                            C = (px + lpx) / 2;
                            K = (py + lpy) / 2;
                            M = lpx;
                            O = lpy;
                            for (e = 0; 1 > e; e += .25) {
                                F = n + e;
                                c = L + (M - L) * F;
                                y = I + (O - I) * F;
                                H = M + (C - M) * F;
                                z = O + (K - O) * F;
                                lax = ax;
                                lay = ay;
                                ax = c + (H - c) * F;
                                ay = y + (z - y) * F;
                                0 > D && (ax += -(lax - ax) * D / .25,
                                ay += -(lay - ay) * D / .25);
                                H = Math.sqrt(Math.pow(ax - lax, 2) + Math.pow(ay - 
                                lay, 2));
                                if (J + H < N)
                                    J += H;
                                else {
                                    J = -J;
                                    for (F = (H - J) / N; 1 <= F; F--)
                                        J += N,
                                        pax = lax + (ax - lax) * J / H,
                                        pay = lay + (ay - lay) * J / H,
                                        pax >= bpx1 && pay >= bpy1 && pax <= bpx2 && pay <= bpy2 ? (pbx[A] = pax,
                                        pby[A] = pay,
                                        pbu[A] = 1,
                                        c = ax - lax,
                                        y = ay - lay,
                                        pba[A] = -15 <= c && -15 <= y && 15 > c && 15 > y ? at2lt[8 * y + 128 << 8 | 8 * c + 128] : -127 <= c && -127 <= y && 127 > c && 127 > y ? at2lt[y + 128 << 8 | c + 128] : Math.atan2(y, c)) : pbu[A] = 0,
                                        A++;
                                    J = H - J
                                }
                                if (1 > D && (D -= .25,
                                -.25 >= D))
                                    break
                            }
                            1 <= D && D--
                        }
                    ax >= bpx1 && ay >= bpy1 && ax <= bpx2 && ay <= bpy2 ? (pbu[A] = 1,
                    pbx[A] = ax,
                    pby[A] = ay,
                    pba[A] = Math.atan2(ay - lay, ax - lax)) : pbu[A] = 0;
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
                        G = .37 * F;
                        y = Math.pow(F, .5);
                        J = gsc * w * (1 + .9375 * y);
                        c = per_color_imgs[f.cv].kfmc;
                        b.save();
                        b.globalCompositeOperation = "lighter";
                        if (f.rbcs)
                            for (K = f.rbcs,
                            N = K.length,
                            x = A - 1; 0 <= x; x--)
                                1 == pbu[x] && (px = pbx[x],
                                py = pby[x],
                                c = per_color_imgs[K[x % N]],
                                c = c.kfmc,
                                b.save(),
                                b.globalAlpha = D * y * .38 * (.6 + .4 * Math.cos(x / 4 - 1.15 * f.sfr)),
                                b.translate((px - 
                                view_xx) * gsc, (py - view_yy) * gsc),
                                b.drawImage(c, -J, -J, 2 * J, 2 * J),
                                b.restore());
                        else
                            for (x = A - 1; 0 <= x; x--)
                                1 == pbu[x] && (px = pbx[x],
                                py = pby[x],
                                b.save(),
                                b.globalAlpha = D * y * .38 * (.6 + .4 * Math.cos(x / 4 - 1.15 * f.sfr)),
                                b.translate((px - view_xx) * gsc, (py - view_yy) * gsc),
                                b.drawImage(c, -J, -J, 2 * J, 2 * J),
                                b.restore());
                        b.restore();
                        F = 1 - F
                    }
                    F *= D;
                    if (high_quality || 0 < gla)
                        for (c = F,
                        1 != gla && (c = F * gla),
                        b.globalAlpha = c,
                        x = A - 1; 0 <= x; x--)
                            1 == pbu[x] && (px = pbx[x],
                            py = pby[x],
                            b.save(),
                            b.translate((px - view_xx) * gsc, (py - view_yy) * gsc),
                            b.drawImage(komc, -e, -e, 2 * e, 2 * 
                            e),
                            9 > x && (b.globalAlpha = c * (1 - x / 9),
                            b.drawImage(ksmc, -C, -C, 2 * C, 2 * C),
                            b.globalAlpha = c),
                            b.restore());
                    b.globalAlpha = F;
                    if (f.rbcs) {
                        K = f.rbcs;
                        N = K.length;
                        for (x = A - 1; 0 <= x; x--)
                            1 == pbu[x] && (px = pbx[x],
                            py = pby[x],
                            2 <= x && (e = x - 2,
                            1 == pbu[e] && (c = pbx[e],
                            y = pby[e],
                            b.save(),
                            b.translate((c - view_xx) * gsc, (y - view_yy) * gsc),
                            b.globalAlpha = 9 > e ? e / 9 * F : F,
                            b.drawImage(ksmc, -C, -C, 2 * C, 2 * C),
                            b.restore())),
                            b.save(),
                            b.globalAlpha = D,
                            b.translate((px - view_xx) * gsc, (py - view_yy) * gsc),
                            b.rotate(pba[x]),
                            e = x % (2 * t.length),
                            e >= t.length && (e = 2 * t.length - (e + 1)),
                            c = per_color_imgs[K[x % N]],
                            b.drawImage(c.kmcs[e], -gsc * w, -gsc * w, 2 * gsc * w, 2 * gsc * w),
                            b.restore());
                        if (f.tsp > f.fsp && (high_quality || 0 < gla)) {
                            b.save();
                            b.globalCompositeOperation = "lighter";
                            for (x = A - 1; 0 <= x; x--)
                                1 == pbu[x] && (px = pbx[x],
                                py = pby[x],
                                b.save(),
                                b.translate((px - view_xx) * gsc, (py - view_yy) * gsc),
                                b.rotate(pba[x]),
                                b.globalAlpha = D * G * gla * (.5 + .5 * Math.cos(x / 4 - f.sfr)),
                                e = x % (2 * t.length),
                                e >= t.length && (e = 2 * t.length - (e + 1)),
                                b.drawImage(per_color_imgs[K[x % N]].kmcs[e], -gsc * w, -gsc * w, 2 * gsc * w, 2 * gsc * w),
                                b.restore());
                            b.restore()
                        }
                    } else {
                        for (x = 
                        A - 1; 0 <= x; x--)
                            1 == pbu[x] && (px = pbx[x],
                            py = pby[x],
                            2 <= x && (e = x - 2,
                            1 == pbu[e] && (c = pbx[e],
                            y = pby[e],
                            b.save(),
                            b.translate((c - view_xx) * gsc, (y - view_yy) * gsc),
                            b.globalAlpha = 9 > e ? e / 9 * F : F,
                            b.drawImage(ksmc, -C, -C, 2 * C, 2 * C),
                            b.restore())),
                            b.save(),
                            b.globalAlpha = D,
                            b.translate((px - view_xx) * gsc, (py - view_yy) * gsc),
                            b.rotate(pba[x]),
                            e = x % (2 * t.length),
                            e >= t.length && (e = 2 * t.length - (e + 1)),
                            b.drawImage(t[e], -gsc * w, -gsc * w, 2 * gsc * w, 2 * gsc * w),
                            b.restore());
                        if (f.tsp > f.fsp && (high_quality || 0 < gla)) {
                            b.save();
                            b.globalCompositeOperation = "lighter";
                            for (x = 
                            A - 1; 0 <= x; x--)
                                1 == pbu[x] && (px = pbx[x],
                                py = pby[x],
                                e = x % (2 * t.length),
                                e >= t.length && (e = 2 * t.length - (e + 1)),
                                b.save(),
                                b.translate((px - view_xx) * gsc, (py - view_yy) * gsc),
                                b.rotate(pba[x]),
                                b.globalAlpha = D * G * gla * (.5 + .5 * Math.cos(x / 4 - f.sfr)),
                                b.drawImage(t[e], -gsc * w, -gsc * w, 2 * gsc * w, 2 * gsc * w),
                                b.restore());
                            b.restore()
                        }
                    }
                    if (f.antenna && 2 <= A && 1 == pbu[1]) {
                        f.atx[0] = pbx[1];
                        f.aty[0] = pby[1];
                        F = f.sc * gsc;
                        fj = f.atx.length - 1;
                        if (choosing_skin)
                            for (x = 1; x <= fj; x++)
                                f.atvx[x] -= .3,
                                f.atvy[x] += .14 * Math.cos(fr / 23 - 7 * x / fj);
                        for (x = 1; x <= fj; x++)
                            xx = f.atx[x - 
                            1],
                            yy = f.aty[x - 1],
                            xx += 2 * Math.random() - 1,
                            yy += 2 * Math.random() - 1,
                            c = f.atx[x] - xx,
                            y = f.aty[x] - yy,
                            ang = -4 <= c && -4 <= y && 4 > c && 4 > y ? at2lt[32 * y + 128 << 8 | 32 * c + 128] : -8 <= c && -8 <= y && 8 > c && 8 > y ? at2lt[16 * y + 128 << 8 | 16 * c + 128] : -16 <= c && -16 <= y && 16 > c && 16 > y ? at2lt[8 * y + 128 << 8 | 8 * c + 128] : -127 <= c && -127 <= y && 127 > c && 127 > y ? at2lt[y + 128 << 8 | c + 128] : Math.atan2(y, c),
                            xx += 4 * Math.cos(ang) * f.sc,
                            yy += 4 * Math.sin(ang) * f.sc,
                            f.atvx[x] += .1 * (xx - f.atx[x]),
                            f.atvy[x] += .1 * (yy - f.aty[x]),
                            f.atx[x] += f.atvx[x],
                            f.aty[x] += f.atvy[x],
                            f.atvx[x] *= .88,
                            f.atvy[x] *= .88,
                            c = f.atx[x] - 
                            f.atx[x - 1],
                            y = f.aty[x] - f.aty[x - 1],
                            H = Math.sqrt(c * c + y * y),
                            H > 4 * f.sc && (ang = -4 <= c && -4 <= y && 4 > c && 4 > y ? at2lt[32 * y + 128 << 8 | 32 * c + 128] : -8 <= c && -8 <= y && 8 > c && 8 > y ? at2lt[16 * y + 128 << 8 | 16 * c + 128] : -16 <= c && -16 <= y && 16 > c && 16 > y ? at2lt[8 * y + 128 << 8 | 8 * c + 128] : -127 <= c && -127 <= y && 127 > c && 127 > y ? at2lt[y + 128 << 8 | c + 128] : Math.atan2(y, c),
                            f.atx[x] = f.atx[x - 1] + 4 * Math.cos(ang) * f.sc,
                            f.aty[x] = f.aty[x - 1] + 4 * Math.sin(ang) * f.sc);
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
                        for (x = fj - 1; 1 <= x; x--)
                            xx = (f.atx[x] - view_xx) * gsc,
                            yy = (f.aty[x] - view_yy) * gsc,
                            1 <= Math.abs(xx - c) + Math.abs(yy - y) && (c = xx,
                            y = yy,
                            b.lineTo(c, y));
                        xx = (.5 * (f.atx[1] + f.atx[0]) - view_xx) * gsc;
                        yy = (.5 * (f.aty[1] + f.aty[0]) - view_yy) * gsc;
                        1 <= Math.abs(xx - c) + Math.abs(yy - y) && (c = xx,
                        y = yy,
                        b.lineTo(c, y));
                        b.stroke();
                        b.globalAlpha = .5 * D;
                        b.strokeStyle = "#FFFFFF";
                        b.lineWidth = 4 * F;
                        b.beginPath();
                        fj = f.atx.length - 1;
                        c = (f.atx[fj] - view_xx) * gsc;
                        y = (f.aty[fj] - view_yy) * gsc;
                        b.moveTo(c, 
                        y);
                        for (x = fj - 1; 0 <= x; x--)
                            xx = (f.atx[x] - view_xx) * gsc,
                            yy = (f.aty[x] - view_yy) * gsc,
                            1 <= Math.abs(xx - c) + Math.abs(yy - y) && (c = xx,
                            y = yy,
                            b.lineTo(c, y));
                        b.stroke();
                        b.globalAlpha = D;
                        b.drawImage(rabulb, (f.atx[fj] - view_xx - 10 * f.sc) * gsc, (f.aty[fj] - view_yy - 10 * f.sc) * gsc, 20 * F, 20 * F);
                        b.globalAlpha = .5 * D;
                        b.lineWidth = 3 * F;
                        b.stroke();
                        b.lineWidth = 2 * F;
                        b.stroke()
                    }
                    if (f.dead) {
                        b.save();
                        b.globalCompositeOperation = "lighter";
                        t = (.15 + .15 * Math.abs(Math.sin(5 * Math.PI * f.dead_amt))) * Math.sin(Math.PI * f.dead_amt);
                        w *= gsc;
                        for (x = A - 1; 0 <= x; x--)
                            1 == pbu[x] && 
                            (px = pbx[x],
                            py = pby[x],
                            b.save(),
                            b.globalAlpha = t * (.6 + .4 * Math.cos(x / 4 - 15 * f.dead_amt)),
                            b.translate((px - view_xx) * gsc, (py - view_yy) * gsc),
                            b.drawImage(kdmc, -w, -w, 2 * w, 2 * w),
                            b.restore());
                        b.restore()
                    }
                    b.restore()
                }
                x = 1 == render_mode ? 4 * B : 6 * B;
                w = 6 * B;
                A = Math.cos(E) * x + Math.cos(E - Math.PI / 2) * (w + .5);
                t = Math.sin(E) * x + Math.sin(E - Math.PI / 2) * (w + .5);
                b.fillStyle = f.ec;
                b.globalAlpha = .75 * f.alive_amt;
                b.beginPath();
                b.arc(mww2 + (A + h - view_xx) * gsc, mhh2 + (t + u - view_yy) * gsc, f.er * B * gsc, 0, pi2);
                b.closePath();
                b.fill();
                b.globalAlpha = f.ppa;
                A = Math.cos(E) * 
                (x + .5) + f.rex * B + Math.cos(E - Math.PI / 2) * w;
                t = Math.sin(E) * (x + .5) + f.rey * B + Math.sin(E - Math.PI / 2) * w;
                b.fillStyle = "#000000";
                b.beginPath();
                b.arc(mww2 + (A + h - view_xx) * gsc, mhh2 + (t + u - view_yy) * gsc, 3.5 * B * gsc, 0, pi2);
                b.closePath();
                b.fill();
                A = Math.cos(E) * x + Math.cos(E + Math.PI / 2) * (w + .5);
                t = Math.sin(E) * x + Math.sin(E + Math.PI / 2) * (w + .5);
                b.fillStyle = f.ec;
                b.globalAlpha = .75 * f.alive_amt;
                b.beginPath();
                b.arc(mww2 + (A + h - view_xx) * gsc, mhh2 + (t + u - view_yy) * gsc, f.er * B * gsc, 0, pi2);
                b.closePath();
                b.fill();
                b.globalAlpha = f.ppa;
                A = Math.cos(E) * (x + 
                .5) + f.rex * B + Math.cos(E + Math.PI / 2) * w;
                t = Math.sin(E) * (x + .5) + f.rey * B + Math.sin(E + Math.PI / 2) * w;
                b.fillStyle = "#000000";
                b.beginPath();
                b.arc(mww2 + (A + h - view_xx) * gsc, mhh2 + (t + u - view_yy) * gsc, 3.5 * B * gsc, 0, pi2);
                b.closePath();
                b.fill();
                b.globalAlpha = 1
            }
        if (high_quality || 0 < gla) {
            b.save();
            b.globalCompositeOperation = "lighter";
            for (q = foods_c - 1; 0 <= q; q--)
                f = foods[q],
                f.rx >= fpx1 && f.ry >= fpy1 && f.rx <= fpx2 && f.ry <= fpy2 && (c = f.rx - view_xx,
                y = f.ry - view_yy,
                h = c * c + y * y,
                fs = 1 + .06 * f.rad,
                A = c * fs,
                t = y * fs,
                G = .005 + .09 * (1 - h / (86E3 + h)),
                1 != f.rad && (G *= Math.pow(f.rad, 
                .25)),
                1 != gla && (G *= gla),
                A = A * gsc + mww2,
                t = t * gsc + mhh2,
                1 == f.rad ? -150 <= A && -150 <= t && A <= mwwp150 && t <= mhhp150 && (A -= f.gfw2,
                t -= f.gfh2,
                b.globalAlpha = G * f.fr,
                b.drawImage(f.gfi, A, t),
                b.globalAlpha = G * (.5 + .5 * Math.cos(f.gfr / 13)) * f.fr,
                b.drawImage(f.gfi, A, t)) : -150 <= A && -150 <= t && A <= mwwp150 && t <= mhhp150 && (A -= f.gfw2 * f.rad,
                t -= f.gfh2 * f.rad,
                b.globalAlpha = G * f.fr,
                b.drawImage(f.gfi, 0, 0, f.gfw, f.gfh, A, t, f.gfw * f.rad, f.gfh * f.rad),
                b.globalAlpha = G * (.5 + .5 * Math.cos(f.gfr / 13)) * f.fr,
                b.drawImage(f.gfi, 0, 0, f.gfw, f.gfh, A, t, f.gfw * f.rad, f.gfh * f.rad)),
                fs = 1 + .32 * f.rad,
                A = c * fs,
                t = y * fs,
                G = .085 * (1 - h / (16500 + h)),
                1 != f.rad && (G *= Math.pow(f.rad, .25)),
                1 != gla && (G *= gla),
                A = A * gsc + mww2,
                t = t * gsc + mhh2,
                1 == f.rad ? -150 <= A && -150 <= t && A <= mwwp150 && t <= mhhp150 && (A -= f.g2fw2,
                t -= f.g2fh2,
                b.globalAlpha = G * f.fr,
                b.drawImage(f.g2fi, A, t),
                b.globalAlpha = G * (.5 + .5 * Math.cos(f.gfr / 13)) * f.fr,
                b.drawImage(f.g2fi, A, t)) : -150 <= A && -150 <= t && A <= mwwp150 && t <= mhhp150 && (A -= f.g2fw2 * f.rad,
                t -= f.g2fh2 * f.rad,
                b.globalAlpha = G * f.fr,
                b.drawImage(f.g2fi, 0, 0, f.g2fw, f.g2fh, A, t, f.g2fw * f.rad, f.g2fh * f.rad),
                b.globalAlpha = 
                G * (.5 + .5 * Math.cos(f.gfr / 13)) * f.fr,
                b.drawImage(f.g2fi, 0, 0, f.g2fw, f.g2fh, A, t, f.g2fw * f.rad, f.g2fh * f.rad)));
            b.restore()
        }
        b.save();
        b.globalCompositeOperation = "lighter";
        for (q = preys.length - 1; 0 <= q; q--)
            h = preys[q],
            c = h.xx + h.fx,
            y = h.yy + h.fy,
            h.eaten && (f = h.eaten_by,
            e = Math.pow(h.eaten_fr, 2),
            c += (f.xx + f.fx + Math.cos(f.ang + f.fa) * (43 - 24 * e) * (1 - e) - c) * e,
            y += (f.yy + f.fy + Math.sin(f.ang + f.fa) * (43 - 24 * e) * (1 - e) - y) * e),
            c -= view_xx,
            y -= view_yy,
            f = c * c + y * y,
            fs = 1 + .08 * h.rad,
            px = c * fs,
            py = y * fs,
            G = .4 * (1 - f / (176E3 + f)),
            1 != h.rad && (G *= Math.pow(h.rad, 
            .25)),
            px = px * gsc + mww2,
            py = py * gsc + mhh2,
            1 == h.rad ? -150 <= px && -150 <= py && px <= mwwp150 && py <= mhhp150 && (px -= h.gfw2,
            py -= h.gfh2,
            b.globalAlpha = G * h.fr,
            b.drawImage(h.gfi, px, py),
            b.globalAlpha = G * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr,
            b.drawImage(h.gfi, px, py)) : -150 <= px && -150 <= py && px <= mwwp150 && py <= mhhp150 && (px -= h.gfw2 * h.rad,
            py -= h.gfh2 * h.rad,
            b.globalAlpha = G * h.fr,
            b.drawImage(h.gfi, 0, 0, h.gfw, h.gfh, px, py, h.gfw * h.rad, h.gfh * h.rad),
            b.globalAlpha = G * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr,
            b.drawImage(h.gfi, 0, 0, h.gfw, h.gfh, px, py, h.gfw * h.rad, 
            h.gfh * h.rad)),
            fs = 1 + .32 * h.rad,
            px = c * fs,
            py = y * fs,
            G = .35 * (1 - f / (46500 + f)),
            1 != h.rad && (G *= Math.pow(h.rad, .25)),
            f = 2 * h.rad,
            px = px * gsc + mww2,
            py = py * gsc + mhh2,
            -150 <= px && -150 <= py && px <= mwwp150 && py <= mhhp150 && (px -= h.gfw2 * f,
            py -= h.gfh2 * f,
            b.globalAlpha = G * h.fr,
            b.drawImage(h.gfi, 0, 0, h.gfw, h.gfh, px, py, h.gfw * f, h.gfh * f),
            b.globalAlpha = G * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr,
            b.drawImage(h.gfi, 0, 0, h.gfw, h.gfh, px, py, h.gfw * f, h.gfh * f));
        b.restore();
        if (4E3 > Math.abs(grd - view_dist)) {
            b.save();
            b.lineWidth = 23 * gsc;
            b.strokeStyle = "#800000";
            b.fillStyle = 
            "#300000";
            b.beginPath();
            xx = grd + Math.cos(view_ang - 2E3 / grd) * grd * .98;
            yy = grd + Math.sin(view_ang - 2E3 / grd) * grd * .98;
            b.moveTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
            for (x = -2E3; 2E3 >= x; x += 100)
                xx = grd + Math.cos(view_ang + x / grd) * grd * .98,
                yy = grd + Math.sin(view_ang + x / grd) * grd * .98,
                b.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
            xx = grd + Math.cos(view_ang + 2E3 / grd) * (grd + 4E3);
            yy = grd + Math.sin(view_ang + 2E3 / grd) * (grd + 4E3);
            b.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
            xx = grd + Math.cos(view_ang - 2E3 / grd) * (grd + 
            4E3);
            yy = grd + Math.sin(view_ang - 2E3 / grd) * (grd + 4E3);
            b.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
            b.closePath();
            b.stroke();
            b.fill();
            b.restore()
        }
        wumsts && 0 < rank && 0 < snake_count && playing && (wumsts = !1,
        f = "Your length",
        q = "of",
        G = "Your rank",
        "FR" == country ? (f = "Votre longueur",
        q = "de",
        G = "Ton rang") : "BR" == country && (f = "Seu comprimento",
        q = "do",
        G = "Seu classifica\u00e7\u00e3o"),
        f = "" + ('<span style="font-size: 14px;"><span style="opacity: .4;">' + f + ': </span><span style="opacity: .8; font-weight: bold;">' + Math.floor(150 * 
        (fpsls[snake.sct] + snake.fam / fmlts[snake.sct] - 1) - 50) / 10 + "</span></span>"),
        f += '<BR><span style="opacity: .3;">' + G + ': </span><span style="opacity: .35;">' + rank + '</span><span style="opacity: .3;"> ' + q + ' </span><span style="opacity: .35;">' + snake_count + "</span>",
        lbf.innerHTML = f);
        b.restore()
    }
}