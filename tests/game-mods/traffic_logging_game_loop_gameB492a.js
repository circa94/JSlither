var oef = function() {
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
        for (var c, h, u = 1; 2 >= u; u++) {
            q.beginPath();
            1 == u ? (q.fillStyle = "#60FF70",
            h = 0) : (q.fillStyle = "#9850FF",
            h = Math.PI);
            for (var f = 0; 256 >= f; f++)
                c = 32 + 5 * Math.cos(h + lsfr / 6 + 8 * f / 256) + 8 * f / 256,
                256 == f && (c += 10),
                xx = 64 + Math.cos(h + lsfr / 44 + .8 * Math.PI * f / 256) * c * 1.25,
                yy = 64 + Math.sin(h + lsfr / 44 + .8 * Math.PI * f / 256) * c,
                0 == f ? q.moveTo(xx, yy) : q.lineTo(xx, yy);
            c = 32;
            xx = 64 + Math.cos(h + lsfr / 44 + .8 * Math.PI * (f + 47) / 256) * c * 1.25;
            yy = 64 + Math.sin(h + lsfr / 44 + .8 * Math.PI * (f + 47) / 256) * c;
            q.lineTo(xx, yy);
            for (f = 256; 0 <= f; f--)
                c = 32 + 5 * Math.cos(h + lsfr / 6 + 
                8 * f / 256) - 8 * f / 256,
                256 == f && (c -= 10),
                xx = 64 + Math.cos(h + lsfr / 44 + .8 * Math.PI * f / 256) * c * 1.25,
                yy = 64 + Math.sin(h + lsfr / 44 + .8 * Math.PI * f / 256) * c,
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
        f = Math.round(.1 + .9 * ss_sh * (1 + 2 * Math.pow(1 - ss_a, 2)) * 1E5) / 1E5;
        trf(ldmc, "scale(" + f + "," + f + ")")
    }
    if (-1 != play_btn_click_mtm && 6666 < b - play_btn_click_mtm) {
        f = document.createElement("img");
        h = [];
        h.push("bso=" + encodeURIComponent(bso));
        if (bso)
            for (var e in bso)
                h.push(e + "=" + encodeURIComponent(bso[e]));
        h.push("waiting_for_sos=" + (waiting_for_sos ? "true" : "false"));
        h.push("soslen=" + sos.length);
        f.src = "http://slither.io/cnc.jpg?" + h.join("&");
        play_btn_click_mtm = -1
    }
    waiting_for_sos && b > sos_ready_after_mtm && (connecting || connected || connect());
    connecting && 3E3 < b - start_connect_mtm && (bso && (bso.tainted = !0),
    connect());
    if (choosing_skin) {
        for (f = snakes.length - 1; 0 <= f; f--)
            for (e = snakes[f],
            u = e.pts.length - 1; 0 <= u; u--)
                e.pts[u].yy = 
                grd / 2 + 15 * Math.cos(u / 4 + fr / 19) * (1 - u / e.pts.length);
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
    playh.style.opacity = 
    0,
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
            fbh.style.display = "inline";
            twth.style.display = "inline";
            plq.style.display = 
            "inline";
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
        pbdiv.style.opacity = 1 - .5 * Math.max(0, Math.min(1, 6 * 
        login_fr)),
        lgcsc = 1 + .1 * Math.pow(login_fr, 2),
        f = Math.round(lgbsc * lgcsc * 1E5) / 1E5,
        1 == f ? trf(login, "") : trf(login, "scale(" + f + "," + f + ")"),
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
        mc.style.opacity = 
        login_fr,
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
    0 < kd_l_frb && kd_r_frb > kd_l_frb && 
    (kd_r_frb -= kd_l_frb,
    kd_l_frb = 0),
    0 < kd_l_frb ? (v = kd_l_frb,
    127 < v && (v = 127),
    kd_l_frb -= v,
    5 <= protocol_version ? (f = new Uint8Array(2),
    f[0] = 252) : (f = new Uint8Array(2),
    f[0] = 108),
    f[1] = v,
    ws.send(f),
    console.log(new Date().getTime() + "to server " + f + "-----" + snake.ang),
    snake.eang -= mamu * v * snake.scang * snake.spang) : 0 < kd_r_frb && (v = kd_r_frb,
    127 < v && (v = 127),
    kd_r_frb -= v,
    5 <= protocol_version ? (v += 128,
    f = new Uint8Array(2),
    f[0] = 252) : (f = new Uint8Array(2),
    f[0] = 114),
    f[1] = v,
    snake.eang += mamu * v * snake.scang * snake.spang,
    ws.send(f))),
    !wfpr && 250 < b - last_ping_mtm && (last_ping_mtm = b,
    wfpr = !0,
    f = new Uint8Array(1),
    f[0] = 5 <= protocol_version ? 251 : 112,
    ws.send(f),
    lpstm = b));
    null  != snake && 2147483647 != grd && 1E3 < b - locu_mtm && (locu_mtm = Date.now(),
    myloc.style.left = Math.round(52 + 40 * (snake.xx - grd) / grd - 7) + "px",
    myloc.style.top = Math.round(52 + 40 * (snake.yy - grd) / grd - 7) + "px");
    console.log(snake.ang);
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
            h.push("bytes/sec avg: " + Math.round(trdps / 
            tcsecs));
            h.push("");
            for (f = e = 0; f < rdpspc.length; f++)
                0 <= rdpspc[f] && (e += rdpspc[f]);
            for (f = 0; f < rdpspc.length; f++)
                0 <= rdpspc[f] && h.push(String.fromCharCode(f) + ": " + rdpspc[f] + " (" + Math.round(rdpspc[f] / e * 1E3) / 10 + "%)");
            h.push("total: " + e);
            maxp = pf_ep = pf_nap = pf_remove = pf_new_add = pf_add = 0;
            h.push("");
            for (f = 1; f < pfs.length; f++)
                0 != pfs[f] && (h.push(f + ": " + Math.round(1E3 * pfs[f]) / 1E3),
                pfs[f] = 0);
            pft = 0;
            pfd.innerHTML = h.join("<br>")
        }
        playing && 1 == want_quality && (32 >= fps ? high_quality && (wdfg++,
        1 <= wdfg && (high_quality = !1)) : (high_quality || 
        48 <= fps) && 0 < wdfg && (wdfg--,
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
        f = new Uint8Array(1),
        f[0] = sang & 255,
        lpstm = b,
        console.log(new Date().getTime() + "to server " + f),
        ws.send(f.buffer))) : 
        (sang = Math.floor(16777215 * ang / pi2),
        sang != lsang && (lsang = sang,
        f = new Uint8Array(4),
        f[0] = 101,
        f[1] = sang >> 16 & 255,
        f[2] = sang >> 8 & 255,
        f[3] = sang & 255,
        lpstm = b,
        console.log(new Date().getTime() + "to server " + f),
        ws.send(f.buffer))))
    }
    if (!choosing_skin)
        for (f = snakes.length - 1; 0 <= f; f--) {
            e = snakes[f];
            q = mamu * vfr * e.scang * e.spang;
            b = e.sp * vfr / 4;
            b > e.msl && (b = e.msl);
            if (!e.dead) {
                e.tsp != e.sp && (e.tsp < e.sp ? (e.tsp += .3 * vfr,
                e.tsp > e.sp && (e.tsp = e.sp)) : (e.tsp -= .3 * vfr,
                e.tsp < e.sp && (e.tsp = e.sp)));
                e.tsp > e.fsp && (e.sfr += (e.tsp - e.fsp) * vfr * .021);
                if (0 < e.fltg)
                    for (h = vfrb,
                    h > e.fltg && (h = e.fltg),
                    e.fltg -= 
                    h,
                    qq = 0; qq < h; qq++)
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
                e.ang -= q;
                if (0 > e.ang || e.ang >= pi2)
                    e.ang %= pi2;
                0 > e.ang && (e.ang += pi2);
                h = (e.wang - e.ang) % pi2;
                0 > h && (h += pi2);
                h > Math.PI && (h -= pi2);
                0 < h && (e.ang = e.wang,
                e.dir = 0)
            } else if (2 == e.dir) {
                e.ang += q;
                if (0 > e.ang || e.ang >= pi2)
                    e.ang %= pi2;
                0 > e.ang && (e.ang += pi2);
                h = (e.wang - e.ang) % pi2;
                0 > h && (h += pi2);
                h > Math.PI && (h -= pi2);
                0 > h && (e.ang = e.wang,
                e.dir = 0)
            } else
                e.ang = e.wang;
            1 != e.ehl && (e.ehl += 
            .03 * vfr,
            1 <= e.ehl && (e.ehl = 1));
            q = e.pts[e.pts.length - 1];
            e.wehang = Math.atan2(e.yy + e.fy - q.yy - q.fy + q.eby * (1 - e.ehl), e.xx + e.fx - q.xx - q.fx + q.ebx * (1 - e.ehl));
            e.dead || e.ehang == e.wehang || (h = (e.wehang - e.ehang) % pi2,
            0 > h && (h += pi2),
            h > Math.PI && (h -= pi2),
            0 > h ? e.edir = 1 : 0 < h && (e.edir = 2));
            if (1 == e.edir) {
                e.ehang -= .1 * vfr;
                if (0 > e.ehang || e.ehang >= pi2)
                    e.ehang %= pi2;
                0 > e.ehang && (e.ehang += pi2);
                h = (e.wehang - e.ehang) % pi2;
                0 > h && (h += pi2);
                h > Math.PI && (h -= pi2);
                0 < h && (e.ehang = e.wehang,
                e.edir = 0)
            } else if (2 == e.edir) {
                e.ehang += .1 * vfr;
                if (0 > e.ehang || e.ehang >= 
                pi2)
                    e.ehang %= pi2;
                0 > e.ehang && (e.ehang += pi2);
                h = (e.wehang - e.ehang) % pi2;
                0 > h && (h += pi2);
                h > Math.PI && (h -= pi2);
                0 > h && (e.ehang = e.wehang,
                e.edir = 0)
            }
            e.dead || (e.xx += Math.cos(e.ang) * b,
            e.yy += Math.sin(e.ang) * b,
            e.chl += b / e.msl);
            if (0 < vfrb) {
                for (u = e.pts.length - 1; 0 <= u; u--)
                    q = e.pts[u],
                    q.dying && (q.da += .0015 * vfrb,
                    1 < q.da && (e.pts.splice(u, 1),
                    q.dying = !1,
                    points_dp.add(q)));
                for (u = e.pts.length - 1; 0 <= u; u--)
                    if (q = e.pts[u],
                    0 < q.eiu) {
                        fy = fx = 0;
                        for (qq = cm1 = q.eiu - 1; 0 <= qq; qq--)
                            q.efs[qq] = 2 == q.ems[qq] ? q.efs[qq] + vfrb2 : q.efs[qq] + vfrb,
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
            b = 2.3 * Math.cos(e.eang);
            h = 2.3 * Math.sin(e.eang);
            e.rex < b && (e.rex += vfr / 6,
            e.rex >= b && (e.rex = b));
            e.rey < h && (e.rey += vfr / 6,
            e.rey >= h && (e.rey = h));
            e.rex > b && (e.rex -= vfr / 6,
            e.rex <= b && (e.rex = b));
            e.rey > h && (e.rey -= vfr / 6,
            e.rey <= h && (e.rey = h));
            if (0 < vfrb) {
                if (0 < e.ftg)
                    for (h = vfrb,
                    h > e.ftg && (h = e.ftg),
                    e.ftg -= h,
                    qq = 0; qq < h; qq++)
                        e.fx = e.fxs[e.fpos],
                        e.fy = 
                        e.fys[e.fpos],
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
                    for (h = vfrb,
                    h > e.fatg && (h = e.fatg),
                    e.fatg -= h,
                    qq = 0; qq < h; qq++)
                        e.fa = e.fas[e.fapos],
                        e.fas[e.fapos] = 0,
                        e.fapos++,
                        e.fapos >= afc && (e.fapos = 0);
                else
                    0 == e.fatg && (e.fatg = -1,
                    e.fa = 0)
            }
            e.dead ? (e.dead_amt += .02 * vfr,
            1 <= e.dead_amt && snakes.splice(f, 1)) : 1 != e.alive_amt && (e.alive_amt += .015 * vfr,
            1 <= e.alive_amt && (e.alive_amt = 1))
        }
    for (f = preys.length - 1; 0 <= 
    f; f--) {
        u = preys[f];
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
                u.ang %= pi2;
            0 > u.ang && 
            (u.ang += pi2);
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
        e = u.eaten_by,
        1 <= u.eaten_fr || !e ? preys.splice(f, 1) : (u.eaten_fr4 = Math.pow(u.eaten_fr, 4),
        u.rad = 1 - Math.pow(u.eaten_fr, 3))) : 1 != u.fr && (u.fr += vfr / 150,
        1 <= u.fr ? (u.fr = 1,
        u.rad = 1) : (u.rad = .5 * (1 - Math.cos(Math.PI * u.fr)),
        u.rad += .66 * (.5 * (1 - Math.cos(Math.PI * 
        u.rad)) - u.rad)))
    }
    for (f = cm1 = foods_c - 1; 0 <= f; f--)
        b = foods[f],
        b.gfr += vfr * b.gr,
        b.eaten ? (1.5 != b.fr && (b.fr += vfr / 150,
        1.5 <= b.fr && (b.fr = 1.5)),
        b.eaten_fr += vfr / 41,
        b.rad = 1 - Math.pow(b.eaten_fr, 3),
        e = b.eaten_by,
        1 <= b.eaten_fr || !e ? (f == cm1 ? foods[f] = null  : (foods[f] = foods[cm1],
        foods[cm1] = null ),
        foods_c--,
        cm1--) : (e = b.eaten_by,
        h = b.eaten_fr * b.eaten_fr,
        b.eaten_fr4 = h * h,
        b.rad = 1 - b.eaten_fr * h,
        b.rx = b.xx + (e.xx + e.fx + Math.cos(e.ang + e.fa) * (43 - 24 * h) * (1 - h) - b.xx) * h,
        b.ry = b.yy + (e.yy + e.fy + Math.sin(e.ang + e.fa) * (43 - 24 * h) * (1 - h) - b.yy) * h,
        b.rx += 
        6 * Math.cos(b.wsp * b.gfr) * (1 - b.eaten_fr),
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
            var q = 
            .5 + .4 / Math.max(1, (snake.sct + 16) / 36);
            gsc != q && (gsc < q ? (gsc += 2E-4,
            gsc >= q && (gsc = q)) : (gsc -= 2E-4,
            gsc <= q && (gsc = q)))
        }
        var q = view_xx
          , c = view_yy;
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
        bpy1 = 
        view_yy - (mhh2 / gsc + 84),
        bpx2 = view_xx + (mww2 / gsc + 84),
        bpy2 = view_yy + (mhh2 / gsc + 84),
        fpx1 = view_xx - (mww2 / gsc + 24),
        fpy1 = view_yy - (mhh2 / gsc + 24),
        fpx2 = view_xx + (mww2 / gsc + 24),
        fpy2 = view_yy + (mhh2 / gsc + 24));
        bgx2 -= 1 * (view_xx - q) / bgw2;
        bgy2 -= 1 * (view_yy - c) / bgh2;
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
        b.fillRect(0, 0, mww, mhh));
        if (bgp2) {
            b.save();
            b.fillStyle = 
            bgp2;
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
                c = sectors[q],
                b.fillStyle = "rgba(0, 255, 0, .1)",
                b.fillRect(mww2 + (c.xx * sector_size - view_xx) * gsc, mhh2 + (c.yy * sector_size - view_yy) * gsc, sector_size * gsc - 4, sector_size * 
                gsc - 4);
        if (high_quality || 0 < gla) {
            var h = 1.75;
            1 != gla && (h = 1.75 * gla);
            b.save();
            for (q = foods_c - 1; 0 <= q; q--)
                c = foods[q],
                c.rx >= fpx1 && c.ry >= fpy1 && c.rx <= fpx2 && c.ry <= fpy2 && (1 == c.rad ? (A = mww2 + gsc * (c.rx - view_xx) - c.ofw2,
                t = mhh2 + gsc * (c.ry - view_yy) - c.ofh2,
                -50 <= A && -50 <= t && A <= mwwp50 && t <= mhhp50 && (b.globalAlpha = h * c.fr,
                b.drawImage(c.ofi, A, t))) : (A = mww2 + gsc * (c.rx - view_xx) - c.ofw2 * c.rad,
                t = mhh2 + gsc * (c.ry - view_yy) - c.ofh2 * c.rad,
                -50 <= A && -50 <= t && A <= mwwp50 && t <= mhhp50 && (b.globalAlpha = h * c.fr,
                b.drawImage(c.ofi, 0, 0, c.ofw, c.ofh, A, t, c.ofw * 
                c.rad, c.ofh * c.rad))));
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
                c = foods[q],
                c.rx >= fpx1 && c.ry >= fpy1 && c.rx <= fpx2 && c.ry <= fpy2 && (1 == c.rad ? (A = mww2 + gsc * (c.rx - view_xx) - c.fw2,
                t = mhh2 + gsc * (c.ry - view_yy) - c.fh2,
                -50 <= A && -50 <= t && A <= mwwp50 && t <= mhhp50 && (b.globalAlpha = u * c.fr,
                b.drawImage(c.fi, A, t),
                b.globalAlpha = h * (.5 + .5 * Math.cos(c.gfr / 13)) * c.fr,
                b.drawImage(c.fi, A, t))) : (A = mww2 + gsc * (c.rx - view_xx) - 
                c.fw2 * c.rad,
                t = mhh2 + gsc * (c.ry - view_yy) - c.fh2 * c.rad,
                -50 <= A && -50 <= t && A <= mwwp50 && t <= mhhp50 && (b.globalAlpha = u * c.fr,
                b.drawImage(c.fi, 0, 0, c.fw, c.fh, A, t, c.fw * c.rad, c.fh * c.rad),
                b.globalAlpha = h * (.5 + .5 * Math.cos(c.gfr / 13)) * c.fr,
                b.drawImage(c.fi, 0, 0, c.fw, c.fh, A, t, c.fw * c.rad, c.fh * c.rad))))
        } else
            for (q = foods_c - 1; 0 <= q; q--)
                c = foods[q],
                c.rx >= fpx1 && c.ry >= fpy1 && c.rx <= fpx2 && c.ry <= fpy2 && (1 == c.rad ? (A = mww2 + gsc * (c.rx - view_xx) - c.fw2,
                t = mhh2 + gsc * (c.ry - view_yy) - c.fh2,
                -50 <= A && -50 <= t && A <= mwwp50 && t <= mhhp50 && (b.globalAlpha = c.fr,
                b.drawImage(c.fi, 
                A, t))) : (A = mww2 + gsc * (c.rx - view_xx) - c.fw2 * c.rad,
                t = mhh2 + gsc * (c.ry - view_yy) - c.fh2 * c.rad,
                -50 <= A && -50 <= t && A <= mwwp50 && t <= mhhp50 && (b.globalAlpha = c.fr,
                b.drawImage(c.fi, 0, 0, c.fw, c.fh, A, t, c.fw * c.rad, c.fh * c.rad))));
        b.restore();
        b.save();
        b.globalCompositeOperation = "lighter";
        for (q = preys.length - 1; 0 <= q; q--)
            if (h = preys[q],
            e = h.xx + h.fx,
            y = h.yy + h.fy,
            px = mww2 + gsc * (e - view_xx),
            py = mhh2 + gsc * (y - view_yy),
            -50 <= px && -50 <= py && px <= mwwp50 && py <= mhhp50) {
                if (h.eaten) {
                    var c = h.eaten_by
                      , f = Math.pow(h.eaten_fr, 2)
                      , e = e + (c.xx + c.fx + Math.cos(c.ang + 
                    c.fa) * (43 - 24 * f) * (1 - f) - e) * f
                      , y = y + (c.yy + c.fy + Math.sin(c.ang + c.fa) * (43 - 24 * f) * (1 - f) - y) * f;
                    px = mww2 + gsc * (e - view_xx);
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
                b.drawImage(h.fi, 0, 0, h.fw, h.fh, A, t, h.fw * h.rad, h.fh * h.rad))
            }
        b.restore();
        b.save();
        b.strokeStyle = "#90C098";
        for (var e, y, F, q = snakes.length - 1; 0 <= q; q--)
            c = snakes[q],
            e = c.xx + c.fx,
            y = c.yy + c.fy + 40,
            0 < c.na && e >= bpx1 - 100 && y >= bpy1 && e <= bpx2 + 100 && y <= bpy2 && (c == snake && (c.fnfr++,
            200 < c.fnfr && (c.na -= .004,
            0 > c.na && (c.na = 0))),
            b.save(),
            b.globalAlpha = .5 * c.na * c.alive_amt * (1 - c.dead_amt),
            b.font = "12px Arial, Helvetica Neue, Helvetica, sans-serif",
            b.fillStyle = c.csw,
            b.textBaseline = "middle",
            b.textAlign = "center",
            h = c.xx + c.fx,
            u = c.yy + c.fy,
            h = mww2 + (h - view_xx) * gsc,
            u = mhh2 + (u - view_yy) * gsc,
            b.fillText(c.nk, h, u + 32 + 
            7 * c.sc * gsc),
            b.restore());
        for (q = snakes.length - 1; 0 <= q; q--)
            for (c = snakes[q],
            c.iiv = !1,
            x = c.pts.length - 1; 0 <= x; x--)
                if (e = c.pts[x],
                px = e.xx + e.fx,
                py = e.yy + e.fy,
                px >= bpx1 && py >= bpy1 && px <= bpx2 && py <= bpy2) {
                    c.iiv = !0;
                    break
                }
        for (q = snakes.length - 1; 0 <= q; q--)
            if (c = snakes[q],
            c.iiv) {
                h = c.xx + c.fx;
                u = c.yy + c.fy;
                px = h;
                py = u;
                F = c.ehang;
                var B = c.sc
                  , w = 29 * B
                  , D = c.cfl;
                e = c.pts[c.pts.length - 1];
                if (1 == render_mode) {
                    b.save();
                    b.beginPath();
                    b.moveTo(mww2 + (px - view_xx) * gsc, mhh2 + (py - view_yy) * gsc);
                    y = !1;
                    for (var x = c.pts.length - 1; 0 <= x; x--) {
                        e = c.pts[x];
                        lpx = px;
                        lpy = py;
                        px = e.xx;
                        py = e.yy;
                        var A = e.fx
                          , t = e.fy;
                        0 < D && (px += A,
                        py += t,
                        lax = ax,
                        lay = ay,
                        ax = (px + lpx) / 2,
                        ay = (py + lpy) / 2,
                        y || (lax = ax,
                        lay = ay),
                        1 > D && (f = 1 - D,
                        lpx += (lax - lpx) * f,
                        lpy += (lay - lpy) * f,
                        ax += (lax - ax) * f,
                        ay += (lay - ay) * f),
                        y ? D-- : D -= c.chl + c.fchl,
                        y ? b.quadraticCurveTo(mww2 + (lpx - view_xx) * gsc, mhh2 + (lpy - view_yy) * gsc, mww2 + (ax - view_xx) * gsc, mhh2 + (ay - view_yy) * gsc) : (b.lineTo(mww2 + (ax - view_xx) * gsc, mhh2 + (ay - view_yy) * gsc),
                        y = !0))
                    }
                    b.save();
                    b.lineJoin = "round";
                    b.lineCap = "round";
                    is_firefox ? (c.sp > c.fsp && (x = c.alive_amt * (1 - c.dead_amt) * Math.max(0, 
                    Math.min(1, (c.sp - c.ssp) / (c.msp - c.ssp))),
                    b.save(),
                    b.strokeStyle = c.cs,
                    b.globalAlpha = .3 * x,
                    b.lineWidth = (w + 6) * gsc,
                    b.stroke(),
                    b.lineWidth = (w + 9) * gsc,
                    b.stroke(),
                    b.lineWidth = (w + 12) * gsc,
                    b.stroke(),
                    b.restore()),
                    b.globalAlpha = 1 * c.alive_amt * (1 - c.dead_amt),
                    b.strokeStyle = "#000000",
                    b.lineWidth = (w + 5) * gsc) : (c.sp > c.fsp && (x = c.alive_amt * (1 - c.dead_amt) * Math.max(0, Math.min(1, (c.sp - c.ssp) / (c.msp - c.ssp))),
                    b.save(),
                    b.lineWidth = (w - 2) * gsc,
                    b.shadowBlur = 30 * gsc,
                    b.shadowColor = "rgba(" + c.rr + "," + c.gg + "," + c.bb + ", " + Math.round(1E4 * x) / 
                    1E4 + ")",
                    b.stroke(),
                    b.stroke(),
                    b.restore()),
                    b.globalAlpha = .4 * c.alive_amt * (1 - c.dead_amt),
                    b.strokeStyle = "#000000",
                    b.lineWidth = (w + 5) * gsc,
                    b.stroke(),
                    b.strokeStyle = c.cs,
                    b.lineWidth = w * gsc,
                    b.strokeStyle = "#000000",
                    b.globalAlpha = 1 * c.alive_amt * (1 - c.dead_amt));
                    b.stroke();
                    b.strokeStyle = c.cs;
                    b.globalAlpha = .8 * c.alive_amt * (1 - c.dead_amt);
                    b.lineWidth = w * gsc;
                    b.stroke();
                    b.restore();
                    b.strokeStyle = c.cs;
                    c.dead && (t = (.5 + .5 * Math.abs(Math.sin(5 * Math.PI * c.dead_amt))) * Math.sin(Math.PI * c.dead_amt),
                    b.save(),
                    b.lineJoin = "round",
                    b.lineCap = 
                    "round",
                    b.globalCompositeOperation = "lighter",
                    b.lineWidth = (w - 3) * gsc,
                    b.globalAlpha = t,
                    b.strokeStyle = "#FFCC99",
                    b.stroke(),
                    b.restore());
                    b.restore()
                }
                if (2 == render_mode) {
                    var w = .5 * w, I, z, L, J, H, C, M, O, A = 0;
                    px = h;
                    py = u;
                    H = px;
                    C = py;
                    H >= bpx1 && C >= bpy1 && H <= bpx2 && C <= bpy2 ? (pbx[0] = H,
                    pby[0] = C,
                    pba[0] = Math.atan2(u - (e.yy + e.fy), h - (e.xx + e.fx)) + Math.PI,
                    pbu[0] = 1) : pbu[0] = 0;
                    A = 1;
                    n = (c.chl + c.fchl) % .25;
                    0 > n && (n += .25);
                    n = .25 - n;
                    D += 1 - .25 * Math.ceil((c.chl + c.fchl) / .25);
                    ax = px;
                    ay = py;
                    c.sep != c.wsep && (c.sep < c.wsep ? (c.sep += .01,
                    c.sep >= c.wsep && (c.sep = 
                    c.wsep)) : c.sep > c.wsep && (c.sep -= .01,
                    c.sep <= c.wsep && (c.sep = c.wsep)));
                    for (var N = c.sep * qsm, K = 0, t = per_color_imgs[c.cv].kmcs, E, G, x = c.pts.length - 1; 0 <= x; x--)
                        if (e = c.pts[x],
                        lpx = px,
                        lpy = py,
                        px = e.xx + e.fx,
                        py = e.yy + e.fy,
                        -.25 < D) {
                            L = H;
                            J = C;
                            H = (px + lpx) / 2;
                            C = (py + lpy) / 2;
                            M = lpx;
                            O = lpy;
                            for (f = 0; 1 > f; f += .25) {
                                E = n + f;
                                e = L + (M - L) * E;
                                y = J + (O - J) * E;
                                I = M + (H - M) * E;
                                z = O + (C - O) * E;
                                lax = ax;
                                lay = ay;
                                ax = e + (I - e) * E;
                                ay = y + (z - y) * E;
                                0 > D && (ax += -(lax - ax) * D / .25,
                                ay += -(lay - ay) * D / .25);
                                I = Math.sqrt(Math.pow(ax - lax, 2) + Math.pow(ay - lay, 2));
                                if (K + I < N)
                                    K += I;
                                else {
                                    K = -K;
                                    for (E = (I - 
                                    K) / N; 1 <= E; E--)
                                        K += N,
                                        pax = lax + (ax - lax) * K / I,
                                        pay = lay + (ay - lay) * K / I,
                                        pax >= bpx1 && pay >= bpy1 && pax <= bpx2 && pay <= bpy2 ? (pbx[A] = pax,
                                        pby[A] = pay,
                                        pbu[A] = 1,
                                        e = ax - lax,
                                        y = ay - lay,
                                        pba[A] = -15 <= e && -15 <= y && 15 > e && 15 > y ? at2lt[8 * y + 128 << 8 | 8 * e + 128] : -127 <= e && -127 <= y && 127 > e && 127 > y ? at2lt[y + 128 << 8 | e + 128] : Math.atan2(y, e)) : pbu[A] = 0,
                                        A++;
                                    K = I - K
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
                    f = gsc * w * 52 / 
                    32;
                    H = gsc * w * 62 / 32;
                    D = c.alive_amt * (1 - c.dead_amt);
                    D *= D;
                    E = 1;
                    if (c.tsp > c.fsp) {
                        E = c.alive_amt * (1 - c.dead_amt) * Math.max(0, Math.min(1, (c.tsp - c.ssp) / (c.msp - c.ssp)));
                        G = .37 * E;
                        y = Math.pow(E, .5);
                        K = gsc * w * (1 + .9375 * y);
                        e = per_color_imgs[c.cv].kfmc;
                        b.save();
                        b.globalCompositeOperation = "lighter";
                        if (c.rbcs)
                            for (C = c.rbcs,
                            N = C.length,
                            x = A - 1; 0 <= x; x--)
                                1 == pbu[x] && (px = pbx[x],
                                py = pby[x],
                                e = per_color_imgs[C[x % N]],
                                e = e.kfmc,
                                b.save(),
                                b.globalAlpha = D * y * .38 * (.6 + .4 * Math.cos(x / 4 - 1.15 * c.sfr)),
                                b.translate((px - view_xx) * gsc, (py - view_yy) * gsc),
                                b.drawImage(e, 
                                -K, -K, 2 * K, 2 * K),
                                b.restore());
                        else
                            for (x = A - 1; 0 <= x; x--)
                                1 == pbu[x] && (px = pbx[x],
                                py = pby[x],
                                b.save(),
                                b.globalAlpha = D * y * .38 * (.6 + .4 * Math.cos(x / 4 - 1.15 * c.sfr)),
                                b.translate((px - view_xx) * gsc, (py - view_yy) * gsc),
                                b.drawImage(e, -K, -K, 2 * K, 2 * K),
                                b.restore());
                        b.restore();
                        E = 1 - E
                    }
                    E *= D;
                    if (high_quality || 0 < gla)
                        for (e = E,
                        1 != gla && (e = E * gla),
                        b.globalAlpha = e,
                        x = A - 1; 0 <= x; x--)
                            1 == pbu[x] && (px = pbx[x],
                            py = pby[x],
                            b.save(),
                            b.translate((px - view_xx) * gsc, (py - view_yy) * gsc),
                            b.drawImage(komc, -f, -f, 2 * f, 2 * f),
                            9 > x && (b.globalAlpha = e * (1 - x / 9),
                            b.drawImage(ksmc, 
                            -H, -H, 2 * H, 2 * H),
                            b.globalAlpha = e),
                            b.restore());
                    b.globalAlpha = E;
                    if (c.rbcs) {
                        C = c.rbcs;
                        N = C.length;
                        for (x = A - 1; 0 <= x; x--)
                            1 == pbu[x] && (px = pbx[x],
                            py = pby[x],
                            2 <= x && (f = x - 2,
                            1 == pbu[f] && (e = pbx[f],
                            y = pby[f],
                            b.save(),
                            b.translate((e - view_xx) * gsc, (y - view_yy) * gsc),
                            b.globalAlpha = 9 > f ? f / 9 * E : E,
                            b.drawImage(ksmc, -H, -H, 2 * H, 2 * H),
                            b.restore())),
                            b.save(),
                            b.globalAlpha = D,
                            b.translate((px - view_xx) * gsc, (py - view_yy) * gsc),
                            b.rotate(pba[x]),
                            f = x % (2 * t.length),
                            f >= t.length && (f = 2 * t.length - (f + 1)),
                            e = per_color_imgs[C[x % N]],
                            b.drawImage(e.kmcs[f], -gsc * 
                            w, -gsc * w, 2 * gsc * w, 2 * gsc * w),
                            b.restore());
                        if (c.tsp > c.fsp && (high_quality || 0 < gla)) {
                            b.save();
                            b.globalCompositeOperation = "lighter";
                            for (x = A - 1; 0 <= x; x--)
                                1 == pbu[x] && (px = pbx[x],
                                py = pby[x],
                                b.save(),
                                b.translate((px - view_xx) * gsc, (py - view_yy) * gsc),
                                b.rotate(pba[x]),
                                b.globalAlpha = D * G * gla * (.5 + .5 * Math.cos(x / 4 - c.sfr)),
                                f = x % (2 * t.length),
                                f >= t.length && (f = 2 * t.length - (f + 1)),
                                b.drawImage(per_color_imgs[C[x % N]].kmcs[f], -gsc * w, -gsc * w, 2 * gsc * w, 2 * gsc * w),
                                b.restore());
                            b.restore()
                        }
                    } else {
                        for (x = A - 1; 0 <= x; x--)
                            1 == pbu[x] && (px = pbx[x],
                            py = pby[x],
                            2 <= x && (f = x - 2,
                            1 == pbu[f] && (e = pbx[f],
                            y = pby[f],
                            b.save(),
                            b.translate((e - view_xx) * gsc, (y - view_yy) * gsc),
                            b.globalAlpha = 9 > f ? f / 9 * E : E,
                            b.drawImage(ksmc, -H, -H, 2 * H, 2 * H),
                            b.restore())),
                            b.save(),
                            b.globalAlpha = D,
                            b.translate((px - view_xx) * gsc, (py - view_yy) * gsc),
                            b.rotate(pba[x]),
                            f = x % (2 * t.length),
                            f >= t.length && (f = 2 * t.length - (f + 1)),
                            b.drawImage(t[f], -gsc * w, -gsc * w, 2 * gsc * w, 2 * gsc * w),
                            b.restore());
                        if (c.tsp > c.fsp && (high_quality || 0 < gla)) {
                            b.save();
                            b.globalCompositeOperation = "lighter";
                            for (x = A - 1; 0 <= x; x--)
                                1 == pbu[x] && (px = pbx[x],
                                py = pby[x],
                                f = x % (2 * t.length),
                                f >= t.length && (f = 2 * t.length - (f + 1)),
                                b.save(),
                                b.translate((px - view_xx) * gsc, (py - view_yy) * gsc),
                                b.rotate(pba[x]),
                                b.globalAlpha = D * G * gla * (.5 + .5 * Math.cos(x / 4 - c.sfr)),
                                b.drawImage(t[f], -gsc * w, -gsc * w, 2 * gsc * w, 2 * gsc * w),
                                b.restore());
                            b.restore()
                        }
                    }
                    if (c.antenna && 2 <= A && 1 == pbu[1]) {
                        c.atx[0] = pbx[1];
                        c.aty[0] = pby[1];
                        E = c.sc * gsc;
                        fj = c.atx.length - 1;
                        if (choosing_skin)
                            for (x = 1; x <= fj; x++)
                                c.atvx[x] -= .3,
                                c.atvy[x] += .14 * Math.cos(fr / 23 - 7 * x / fj);
                        for (x = 1; x <= fj; x++)
                            xx = c.atx[x - 1],
                            yy = c.aty[x - 1],
                            xx += 2 * Math.random() - 1,
                            yy += 2 * 
                            Math.random() - 1,
                            e = c.atx[x] - xx,
                            y = c.aty[x] - yy,
                            ang = -4 <= e && -4 <= y && 4 > e && 4 > y ? at2lt[32 * y + 128 << 8 | 32 * e + 128] : -8 <= e && -8 <= y && 8 > e && 8 > y ? at2lt[16 * y + 128 << 8 | 16 * e + 128] : -16 <= e && -16 <= y && 16 > e && 16 > y ? at2lt[8 * y + 128 << 8 | 8 * e + 128] : -127 <= e && -127 <= y && 127 > e && 127 > y ? at2lt[y + 128 << 8 | e + 128] : Math.atan2(y, e),
                            xx += 4 * Math.cos(ang) * c.sc,
                            yy += 4 * Math.sin(ang) * c.sc,
                            c.atvx[x] += .1 * (xx - c.atx[x]),
                            c.atvy[x] += .1 * (yy - c.aty[x]),
                            c.atx[x] += c.atvx[x],
                            c.aty[x] += c.atvy[x],
                            c.atvx[x] *= .88,
                            c.atvy[x] *= .88,
                            e = c.atx[x] - c.atx[x - 1],
                            y = c.aty[x] - c.aty[x - 1],
                            I = Math.sqrt(e * 
                            e + y * y),
                            I > 4 * c.sc && (ang = -4 <= e && -4 <= y && 4 > e && 4 > y ? at2lt[32 * y + 128 << 8 | 32 * e + 128] : -8 <= e && -8 <= y && 8 > e && 8 > y ? at2lt[16 * y + 128 << 8 | 16 * e + 128] : -16 <= e && -16 <= y && 16 > e && 16 > y ? at2lt[8 * y + 128 << 8 | 8 * e + 128] : -127 <= e && -127 <= y && 127 > e && 127 > y ? at2lt[y + 128 << 8 | e + 128] : Math.atan2(y, e),
                            c.atx[x] = c.atx[x - 1] + 4 * Math.cos(ang) * c.sc,
                            c.aty[x] = c.aty[x - 1] + 4 * Math.sin(ang) * c.sc);
                        b.globalAlpha = D;
                        b.strokeStyle = c.atc1;
                        b.lineWidth = 5 * E;
                        b.lineCap = "round";
                        b.lineJoin = "round";
                        b.beginPath();
                        fj = c.atx.length - 1;
                        e = (c.atx[fj] - view_xx) * gsc;
                        y = (c.aty[fj] - view_yy) * gsc;
                        b.moveTo(e, y);
                        for (x = fj - 1; 1 <= x; x--)
                            xx = (c.atx[x] - view_xx) * gsc,
                            yy = (c.aty[x] - view_yy) * gsc,
                            1 <= Math.abs(xx - e) + Math.abs(yy - y) && (e = xx,
                            y = yy,
                            b.lineTo(e, y));
                        xx = (.5 * (c.atx[1] + c.atx[0]) - view_xx) * gsc;
                        yy = (.5 * (c.aty[1] + c.aty[0]) - view_yy) * gsc;
                        1 <= Math.abs(xx - e) + Math.abs(yy - y) && (e = xx,
                        y = yy,
                        b.lineTo(e, y));
                        b.stroke();
                        b.globalAlpha = c.atia * D;
                        b.strokeStyle = c.atc2;
                        b.lineWidth = 4 * E;
                        b.beginPath();
                        fj = c.atx.length - 1;
                        e = (c.atx[fj] - view_xx) * gsc;
                        y = (c.aty[fj] - view_yy) * gsc;
                        b.moveTo(e, y);
                        for (x = fj - 1; 0 <= x; x--)
                            xx = (c.atx[x] - view_xx) * gsc,
                            yy = (c.aty[x] - view_yy) * gsc,
                            1 <= Math.abs(xx - e) + Math.abs(yy - y) && (e = xx,
                            y = yy,
                            b.lineTo(e, y));
                        b.stroke();
                        c.atwg && (b.lineWidth = 3 * E,
                        b.stroke(),
                        b.lineWidth = 2 * E,
                        b.stroke());
                        b.globalAlpha = D * c.blba;
                        if (c.abrot) {
                            b.save();
                            b.translate((c.atx[fj] - view_xx) * gsc, (c.aty[fj] - view_yy) * gsc);
                            vang = Math.atan2(c.aty[fj] - c.aty[fj - 1], c.atx[fj] - c.atx[fj - 1]) - c.atba;
                            if (0 > vang || vang >= pi2)
                                vang %= pi2;
                            vang < -Math.PI ? vang += pi2 : vang > Math.PI && (vang -= pi2);
                            c.atba = (c.atba + .15 * vang) % pi2;
                            b.rotate(c.atba);
                            b.drawImage(c.bulb, c.blbx * c.bsc * E, c.blby * 
                            c.bsc * E, c.blbw * c.bsc * E, c.blbh * c.bsc * E);
                            b.restore()
                        } else
                            b.drawImage(c.bulb, (c.atx[fj] - view_xx + c.blbx * c.bsc * c.sc) * gsc, (c.aty[fj] - view_yy + c.blby * c.bsc * c.sc) * gsc, c.blbw * c.bsc * E, c.blbh * c.bsc * E);
                        c.apbs && (b.globalAlpha = .5 * D,
                        b.lineWidth = 3 * E,
                        b.stroke(),
                        b.lineWidth = 2 * E,
                        b.stroke())
                    }
                    if (c.dead) {
                        b.save();
                        b.globalCompositeOperation = "lighter";
                        t = (.15 + .15 * Math.abs(Math.sin(5 * Math.PI * c.dead_amt))) * Math.sin(Math.PI * c.dead_amt);
                        w *= gsc;
                        for (x = A - 1; 0 <= x; x--)
                            1 == pbu[x] && (px = pbx[x],
                            py = pby[x],
                            b.save(),
                            b.globalAlpha = t * (.6 + .4 * 
                            Math.cos(x / 4 - 15 * c.dead_amt)),
                            b.translate((px - view_xx) * gsc, (py - view_yy) * gsc),
                            b.drawImage(kdmc, -w, -w, 2 * w, 2 * w),
                            b.restore());
                        b.restore()
                    }
                    b.restore()
                }
                x = 1 == render_mode ? 4 * B : 6 * B;
                w = 6 * B;
                A = Math.cos(F) * x + Math.cos(F - Math.PI / 2) * (w + .5);
                t = Math.sin(F) * x + Math.sin(F - Math.PI / 2) * (w + .5);
                b.fillStyle = c.ec;
                b.globalAlpha = c.eca * c.alive_amt;
                b.beginPath();
                b.arc(mww2 + (A + h - view_xx) * gsc, mhh2 + (t + u - view_yy) * gsc, c.er * B * gsc, 0, pi2);
                b.closePath();
                b.fill();
                b.globalAlpha = c.ppa;
                A = Math.cos(F) * (x + .5) + c.rex * B + Math.cos(F - Math.PI / 2) * w;
                t = Math.sin(F) * 
                (x + .5) + c.rey * B + Math.sin(F - Math.PI / 2) * w;
                b.fillStyle = c.ppc;
                b.beginPath();
                b.arc(mww2 + (A + h - view_xx) * gsc, mhh2 + (t + u - view_yy) * gsc, 3.5 * B * gsc, 0, pi2);
                b.closePath();
                b.fill();
                A = Math.cos(F) * x + Math.cos(F + Math.PI / 2) * (w + .5);
                t = Math.sin(F) * x + Math.sin(F + Math.PI / 2) * (w + .5);
                b.fillStyle = c.ec;
                b.globalAlpha = c.eca * c.alive_amt;
                b.beginPath();
                b.arc(mww2 + (A + h - view_xx) * gsc, mhh2 + (t + u - view_yy) * gsc, c.er * B * gsc, 0, pi2);
                b.closePath();
                b.fill();
                b.globalAlpha = c.ppa;
                A = Math.cos(F) * (x + .5) + c.rex * B + Math.cos(F + Math.PI / 2) * w;
                t = Math.sin(F) * (x + .5) + 
                c.rey * B + Math.sin(F + Math.PI / 2) * w;
                b.fillStyle = c.ppc;
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
                c = foods[q],
                c.rx >= fpx1 && c.ry >= fpy1 && c.rx <= fpx2 && c.ry <= fpy2 && (e = c.rx - view_xx,
                y = c.ry - view_yy,
                h = e * e + y * y,
                fs = 1 + .06 * c.rad,
                A = e * fs,
                t = y * fs,
                G = .005 + .09 * (1 - h / (86E3 + h)),
                1 != c.rad && (G *= Math.pow(c.rad, .25)),
                1 != gla && (G *= gla),
                A = A * gsc + mww2,
                t = t * gsc + mhh2,
                1 == 
                c.rad ? -150 <= A && -150 <= t && A <= mwwp150 && t <= mhhp150 && (A -= c.gfw2,
                t -= c.gfh2,
                b.globalAlpha = G * c.fr,
                b.drawImage(c.gfi, A, t),
                b.globalAlpha = G * (.5 + .5 * Math.cos(c.gfr / 13)) * c.fr,
                b.drawImage(c.gfi, A, t)) : -150 <= A && -150 <= t && A <= mwwp150 && t <= mhhp150 && (A -= c.gfw2 * c.rad,
                t -= c.gfh2 * c.rad,
                b.globalAlpha = G * c.fr,
                b.drawImage(c.gfi, 0, 0, c.gfw, c.gfh, A, t, c.gfw * c.rad, c.gfh * c.rad),
                b.globalAlpha = G * (.5 + .5 * Math.cos(c.gfr / 13)) * c.fr,
                b.drawImage(c.gfi, 0, 0, c.gfw, c.gfh, A, t, c.gfw * c.rad, c.gfh * c.rad)),
                fs = 1 + .32 * c.rad,
                A = e * fs,
                t = y * fs,
                G = .085 * (1 - h / (16500 + 
                h)),
                1 != c.rad && (G *= Math.pow(c.rad, .25)),
                1 != gla && (G *= gla),
                A = A * gsc + mww2,
                t = t * gsc + mhh2,
                1 == c.rad ? -150 <= A && -150 <= t && A <= mwwp150 && t <= mhhp150 && (A -= c.g2fw2,
                t -= c.g2fh2,
                b.globalAlpha = G * c.fr,
                b.drawImage(c.g2fi, A, t),
                b.globalAlpha = G * (.5 + .5 * Math.cos(c.gfr / 13)) * c.fr,
                b.drawImage(c.g2fi, A, t)) : -150 <= A && -150 <= t && A <= mwwp150 && t <= mhhp150 && (A -= c.g2fw2 * c.rad,
                t -= c.g2fh2 * c.rad,
                b.globalAlpha = G * c.fr,
                b.drawImage(c.g2fi, 0, 0, c.g2fw, c.g2fh, A, t, c.g2fw * c.rad, c.g2fh * c.rad),
                b.globalAlpha = G * (.5 + .5 * Math.cos(c.gfr / 13)) * c.fr,
                b.drawImage(c.g2fi, 
                0, 0, c.g2fw, c.g2fh, A, t, c.g2fw * c.rad, c.g2fh * c.rad)));
            b.restore()
        }
        b.save();
        b.globalCompositeOperation = "lighter";
        for (q = preys.length - 1; 0 <= q; q--)
            h = preys[q],
            e = h.xx + h.fx,
            y = h.yy + h.fy,
            h.eaten && (c = h.eaten_by,
            f = Math.pow(h.eaten_fr, 2),
            e += (c.xx + c.fx + Math.cos(c.ang + c.fa) * (43 - 24 * f) * (1 - f) - e) * f,
            y += (c.yy + c.fy + Math.sin(c.ang + c.fa) * (43 - 24 * f) * (1 - f) - y) * f),
            e -= view_xx,
            y -= view_yy,
            c = e * e + y * y,
            fs = 1 + .08 * h.rad,
            px = e * fs,
            py = y * fs,
            G = .4 * (1 - c / (176E3 + c)),
            1 != h.rad && (G *= Math.pow(h.rad, .25)),
            px = px * gsc + mww2,
            py = py * gsc + mhh2,
            1 == h.rad ? -150 <= px && 
            -150 <= py && px <= mwwp150 && py <= mhhp150 && (px -= h.gfw2,
            py -= h.gfh2,
            b.globalAlpha = G * h.fr,
            b.drawImage(h.gfi, px, py),
            b.globalAlpha = G * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr,
            b.drawImage(h.gfi, px, py)) : -150 <= px && -150 <= py && px <= mwwp150 && py <= mhhp150 && (px -= h.gfw2 * h.rad,
            py -= h.gfh2 * h.rad,
            b.globalAlpha = G * h.fr,
            b.drawImage(h.gfi, 0, 0, h.gfw, h.gfh, px, py, h.gfw * h.rad, h.gfh * h.rad),
            b.globalAlpha = G * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr,
            b.drawImage(h.gfi, 0, 0, h.gfw, h.gfh, px, py, h.gfw * h.rad, h.gfh * h.rad)),
            fs = 1 + .32 * h.rad,
            px = e * fs,
            py = y * fs,
            G = .35 * (1 - c / 
            (46500 + c)),
            1 != h.rad && (G *= Math.pow(h.rad, .25)),
            c = 2 * h.rad,
            px = px * gsc + mww2,
            py = py * gsc + mhh2,
            -150 <= px && -150 <= py && px <= mwwp150 && py <= mhhp150 && (px -= h.gfw2 * c,
            py -= h.gfh2 * c,
            b.globalAlpha = G * h.fr,
            b.drawImage(h.gfi, 0, 0, h.gfw, h.gfh, px, py, h.gfw * c, h.gfh * c),
            b.globalAlpha = G * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr,
            b.drawImage(h.gfi, 0, 0, h.gfw, h.gfh, px, py, h.gfw * c, h.gfh * c));
        b.restore();
        if (4E3 > Math.abs(grd - view_dist)) {
            b.save();
            b.lineWidth = 23 * gsc;
            b.strokeStyle = "#800000";
            b.fillStyle = "#300000";
            b.beginPath();
            xx = grd + Math.cos(view_ang - 2E3 / 
            grd) * grd * .98;
            yy = grd + Math.sin(view_ang - 2E3 / grd) * grd * .98;
            b.moveTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
            for (x = -2E3; 2E3 >= x; x += 100)
                xx = grd + Math.cos(view_ang + x / grd) * grd * .98,
                yy = grd + Math.sin(view_ang + x / grd) * grd * .98,
                b.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
            xx = grd + Math.cos(view_ang + 2E3 / grd) * (grd + 4E3);
            yy = grd + Math.sin(view_ang + 2E3 / grd) * (grd + 4E3);
            b.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
            xx = grd + Math.cos(view_ang - 2E3 / grd) * (grd + 4E3);
            yy = grd + Math.sin(view_ang - 2E3 / grd) * (grd + 4E3);
            b.lineTo(mww2 + 
            (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
            b.closePath();
            b.stroke();
            b.fill();
            b.restore()
        }
        wumsts && 0 < rank && 0 < snake_count && playing && (wumsts = !1,
        c = "Your length",
        q = "of",
        G = "Your rank",
        "DE" == country ? (c = "Deine L\u00e4nge",
        q = "von",
        G = "Dein rang") : "FR" == country ? (c = "Votre longueur",
        q = "de",
        G = "Ton rang") : "BR" == country && (c = "Seu comprimento",
        q = "do",
        G = "Seu classifica\u00e7\u00e3o"),
        c = "" + ('<span style="font-size: 14px;"><span style="opacity: .4;">' + c + ': </span><span style="opacity: .8; font-weight: bold;">' + Math.floor(150 * 
        (fpsls[snake.sct] + snake.fam / fmlts[snake.sct] - 1) - 50) / 10 + "</span></span>"),
        c += '<BR><span style="opacity: .3;">' + G + ': </span><span style="opacity: .35;">' + rank + '</span><span style="opacity: .3;"> ' + q + ' </span><span style="opacity: .35;">' + snake_count + "</span>",
        lbf.innerHTML = c);
        b.restore()
    }
}