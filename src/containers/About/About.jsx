import React from 'react'
import { CardContent, Typography, Paper, Grid } from '@mui/material'
import './about.css'

export function About() {
  return (
    <>
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="text.primary">
          由于电影不直接表现抽象概念，它靠隐喻生存
        </Typography>
        <Typography color="text.secondary">
          一部伟大的影片是一部含义如此清新、富于想象、引人入胜或令人激奋的影片，它使我们对人生有新的看法。
        </Typography>
        <Typography variant="body2">
          电影不仅摆脱了空间的限制，而且摆脱了时间的限制。
        </Typography>
        <Typography variant="body2">
          电影之成为独立的艺术，是从视点的解放开始，因此，电影也被称为视点的艺术。
        </Typography>
      </CardContent>
      <CardContent>
        <Paper elevation={3} />
      </CardContent>
      <Grid container>
        <CardContent>
          <h3>关于我</h3>
          <p>因为我们没有很多钱</p>
          <p>所以出来拼命挣钱 朋友说我们远了</p>
          <p>同学说我们淡了</p>
          <p>兄弟姐妹说我们变了</p>
          <p>亲戚们说指不上我们了</p>
          <p>我们真的变了吗</p>
          <p>我们没有</p>
          <p>是社会和现实逼的</p>
          <p>我也想每天跟你们一样潇洒</p>
          <p>我也想每天和朋友一起聚聚</p>
          <p>我也想没事串串门走走亲戚</p>
          <p>可当我回过头面对这现实的生活</p>
          <p>我并没有太多休息的时间</p>
          <p>要想让以后生活得更好</p>
          <p>只有付出更多的努力</p>
          <p>但是谁又能理解我们</p>
          <p>送给百忙中的兄弟姐妹朋友们</p>
          <p>原谅我的冷漠</p>
          <p>理解万岁</p>
          <p>而我还是我</p>
        </CardContent>
      </Grid>
      <div className="footer">
        <div id="footer-wrap">
          <div class="copyright">©2020 - 2022 By 梦回故里</div>
          <div class="framework-info">
            <span>框架 </span>
            <a target="_blank" rel="noopener" href="https://hexo.io">
              MUI
            </a>
            <span class="footer-separator">|</span>
            <span>主题 </span>
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/jerryc127/hexo-theme-butterfly"
            >
              Butterfly
            </a>
          </div>

          <div class="footer_custom_text">
            <img
              src="https://cdn.jsdelivr.net/gh/1134451886/1134451886.github.io@master/img/icp.png"
              data-ll-status="loading"
              class="entered loading"
            />
            &nbsp;
            <a href="https://beian.miit.gov.cn/" target="_blank" />
          </div>
        </div>
      </div>
    </>
  )
}
