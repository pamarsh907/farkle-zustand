import { List, ListItem, ListItemText, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Divider, Button } from "@mui/material"
import { Typography } from "@mui/material"
import { useState } from "react"

export default function HowToPage() {
  const [language, setLanguage] = useState('A')

  const nextLanguage = language === 'A' ? 'あ' : 'A'
  const toggleLanguage = () => {
    setLanguage(nextLanguage)
  }


  return (
    <>
      {language === 'A' &&
        <Container maxWidth="md" sx={{ py: 6 }}>
          <Paper elevation={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h3" fontWeight="bold" gutterBottom style={{display: 'flex'}}>
                How to Play
              </Typography>
              <Button style={{borderRadius: '100px', padding: '5px'}} onClick={toggleLanguage}>{nextLanguage}</Button>
            </div>

            <Typography variant="body1" color="text.secondary" paragraph>
              Farkle is a fast-paced dice game where players try to score points by
              rolling six dice and setting aside scoring combinations. The first player
              to reach the target score wins.
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h5" gutterBottom>
              Objective
            </Typography>

            <Typography paragraph>
              Be the first player to reach <strong>10,000 points</strong>.
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h5" gutterBottom>
              Turn Overview
            </Typography>

            <List>
              <ListItem>
                <ListItemText primary="Roll all six dice." />
              </ListItem>

              <ListItem>
                <ListItemText primary="Set aside any dice that score points." />
              </ListItem>

              <ListItem alignItems="flex-start">
                <ListItemText
                  primary="Choose whether to:"
                  secondary={
                    <>
                      • <strong>Bank</strong> your points and end your turn.
                      <br />
                      • <strong>Keep Rolling</strong> the remaining non-scoring dice to
                      try for more points.
                    </>
                  }
                />
              </ListItem>

              <ListItem>
                <ListItemText
                  primary="If every die you rolled scored, you have Hot Dice."
                  secondary="Pick up all six dice and continue rolling to score even more points."
                />
              </ListItem>

              <ListItem>
                <ListItemText
                  primary="If a roll contains no scoring dice, you Farkled."
                  secondary="Your turn ends immediately and you lose all unbanked points earned during that turn."
                />
              </ListItem>
            </List>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h5" gutterBottom>
              Scoring
            </Typography>

            <TableContainer component={Paper} variant="outlined">
              <Table size="small">
                <TableHead>
                  <TableRow sx={{ bgcolor: "grey.100" }}>
                    <TableCell sx={{ fontWeight: "bold" }}>Combination</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Points</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow>
                    <TableCell>Single 1</TableCell>
                    <TableCell>100</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Single 5</TableCell>
                    <TableCell>50</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Three 1s</TableCell>
                    <TableCell>1,000</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Three of any other number</TableCell>
                    <TableCell>Face value × 100 (e.g. three 4s = 400)</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Four of a kind</TableCell>
                    <TableCell>1,000</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Five of a kind</TableCell>
                    <TableCell>2,000</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Six of a kind</TableCell>
                    <TableCell>3,000</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Straight (1-2-3-4-5-6)</TableCell>
                    <TableCell>1,500</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Three pairs</TableCell>
                    <TableCell>1,500</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Two triplets</TableCell>
                    <TableCell>2,500</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Four of a kind + a pair</TableCell>
                    <TableCell>1,500</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h5" gutterBottom>
              Important Rules
            </Typography>

            <List dense>
              <ListItem>
                <ListItemText primary="You must set aside at least one scoring die after every roll." />
              </ListItem>

              <ListItem>
                <ListItemText primary="Once a die has been set aside for scoring, it cannot be rolled again unless you earn Hot Dice." />
              </ListItem>

              <ListItem>
                <ListItemText primary="Points are only added to your total after you choose to bank them." />
              </ListItem>

              <ListItem>
                <ListItemText primary="If you Farkle before banking, all points earned during that turn are lost." />
              </ListItem>
            </List>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h5" gutterBottom>
              Winning the Game
            </Typography>

            <Typography paragraph>
              The first player to reach or exceed <strong>10,000 points </strong>
              triggers the final round. Each remaining player gets one last turn to beat
              the leading score. The player with the highest score at the end wins.
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h5" gutterBottom>
              Example Turn
            </Typography>

            <Paper
              variant="outlined"
              sx={{
                p: 3,
                bgcolor: "grey.50",
              }}
            >
              <Typography paragraph>
                <strong>1.</strong> You roll: <strong>1, 1, 5, 3, 4, 6</strong>.
              </Typography>

              <Typography paragraph>
                <strong>2.</strong> You keep the two 1s (200 points) and the 5 (50
                points).
              </Typography>

              <Typography paragraph>
                <strong>3.</strong> You have 250 unbanked points and roll the remaining
                three dice.
              </Typography>

              <Typography>
                <strong>4.</strong> You can continue risking your points or bank the 250
                points and end your turn.
              </Typography>
            </Paper>
          </Paper>
        </Container>

      }
      {/* i know this is a stupid way to do localization, just temporary */}
      {language === 'あ' &&
        <Container maxWidth="md" sx={{ py: 6 }}>
          <Paper elevation={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h3" fontWeight="bold" gutterBottom style={{display: 'flex'}}>
                Farkleとは？
              </Typography>
              <Button style={{borderRadius: '100px', padding: '5px'}} onClick={toggleLanguage}>{nextLanguage}</Button>
            </div>

            <Typography variant="body1" color="text.secondary" paragraph>
              Farkle（ファークル）は、6個のサイコロを振り、得点になる組み合わせを
              キープしながらポイントを競うスピード感のあるサイコロゲームです。
              最初に目標得点に到達したプレイヤーが勝利します。
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h5" gutterBottom>
              目的
            </Typography>

            <Typography paragraph>
              最初に<strong>10,000点</strong>に到達したプレイヤーが勝利します。
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h5" gutterBottom>
              ターンの流れ
            </Typography>

            <List>
              <ListItem>
                <ListItemText primary="6個すべてのサイコロを振ります。" />
              </ListItem>

              <ListItem>
                <ListItemText primary="得点になるサイコロを選んでキープします。" />
              </ListItem>

              <ListItem alignItems="flex-start">
                <ListItemText
                  primary="次のどちらかを選択します："
                  secondary={
                    <>
                      • <strong>バンクする</strong>：得点を確定してターンを終了します。
                      <br />
                      • <strong>振り続ける</strong>：得点になっていない残りのサイコロを振り、さらに得点を狙います。
                    </>
                  }
                />
              </ListItem>

              <ListItem>
                <ListItemText
                  primary="振ったすべてのサイコロが得点になった場合、ホットダイスになります。"
                  secondary="6個すべてのサイコロをもう一度取り、さらに得点を狙って続けて振ることができます。"
                />
              </ListItem>

              <ListItem>
                <ListItemText
                  primary="振った結果、得点になるサイコロが1つもない場合はファークルになります。"
                  secondary="ターンはすぐに終了し、そのターンでバンクしていない得点はすべて失われます。"
                />
              </ListItem>
            </List>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h5" gutterBottom>
              得点表
            </Typography>

            <TableContainer component={Paper} variant="outlined">
              <Table size="small">
                <TableHead>
                  <TableRow sx={{ bgcolor: "grey.100" }}>
                    <TableCell sx={{ fontWeight: "bold" }}>組み合わせ</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>得点</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow>
                    <TableCell>1の目が1個</TableCell>
                    <TableCell>100点</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>5の目が1個</TableCell>
                    <TableCell>50点</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>1の目が3個</TableCell>
                    <TableCell>1,000点</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>同じ数字が3個</TableCell>
                    <TableCell>数字 × 100点（例：4が3個 = 400点）</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>同じ数字が4個</TableCell>
                    <TableCell>1,000点</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>同じ数字が5個</TableCell>
                    <TableCell>2,000点</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>同じ数字が6個</TableCell>
                    <TableCell>3,000点</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>ストレート（1-2-3-4-5-6）</TableCell>
                    <TableCell>1,500点</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>3組のペア</TableCell>
                    <TableCell>1,500点</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>2組のスリーカード</TableCell>
                    <TableCell>2,500点</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>フォーカインド + ペア</TableCell>
                    <TableCell>1,500点</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h5" gutterBottom>
              重要なルール
            </Typography>

            <List dense>
              <ListItem>
                <ListItemText primary="毎回サイコロを振った後、最低1個は得点になるサイコロをキープする必要があります。" />
              </ListItem>

              <ListItem>
                <ListItemText primary="得点のためにキープしたサイコロは、ホットダイスにならない限り再度振ることはできません。" />
              </ListItem>

              <ListItem>
                <ListItemText primary="得点はバンクを選択した後にのみ合計点へ加算されます。" />
              </ListItem>

              <ListItem>
                <ListItemText primary="バンクする前にファークルになった場合、そのターンで獲得した得点はすべて失われます。" />
              </ListItem>
            </List>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h5" gutterBottom>
              ゲームの勝利条件
            </Typography>

            <Typography paragraph>
              最初に<strong>10,000点</strong>以上に到達したプレイヤーが最終ラウンドを開始します。
              残りのプレイヤーは最後に1回だけターンを行い、トップのスコアを超えることを目指します。
              最終的に最も高いスコアのプレイヤーが勝利します。
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h5" gutterBottom>
              ターン例
            </Typography>

            <Paper
              variant="outlined"
              sx={{
                p: 3,
                bgcolor: "grey.50",
              }}
            >
              <Typography paragraph>
                <strong>1.</strong> サイコロを振ります：<strong>1, 1, 5, 3, 4, 6</strong>
              </Typography>

              <Typography paragraph>
                <strong>2.</strong> 1の目2個）200点）と5の目（50点）をキープします。
              </Typography>

              <Typography paragraph>
                <strong>3.</strong> バンクしていない250点を持った状態で、残り3個のサイコロを振ります。
              </Typography>

              <Typography>
                <strong>4.</strong> 得点をリスクにして続けて振るか、250点をバンクしてターンを終了できます。
              </Typography>
            </Paper>
          </Paper>
        </Container>
      }
    </>
  )
}