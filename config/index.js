export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID
  APP_ID: "wxdb4f86efce0a7640",

  // 公众号APP_SECRET
  APP_SECRET: "730d9b6db60e369ee6bcca5cb1f3904c",

  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如
   * [
   *  {
   *    // 想要发送的人的名字
   *    name: "汤汤",
   *    // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
   *    id: "oLsOs51EOMDystbV55dnRFSWNZMo",
   *    // 你想对他发送的模板消息的模板ID
   *    d_IzatxHSaQlAnXdU3g7VY7kB3DZshac_hlO1AHOLws",
   *    // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
   *    openUrl: "https://www.weibo.com/"
   *   }, 
   * ]
   */
  USERS: [
    {
      // 想要发送的人的名字
      name: "汤汤",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oLsOs51EOMDystbV55dnRFSWNZMo",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "d_IzatxHSaQlAnXdU3g7VY7kB3DZshac_hlO1AHOLws",
      // 所在省份
      province: "陕西",
      // 所在城市
      city: "宝塔区",
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://www.bilibili.com"
    } 
  ],
   * 信息配置
   */

  /** 天气相关 */



  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
   * tpye必须填！ 只能 “生日” 和 “节日” 二选一!
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
   */
  FESTIVALS: [
    {"type": "生日", "name": "汤汤", "year": "2004", "date": "12-08"},
    {"type": "节日", "name": "相识纪念日", "year": "2022", "date": "08-04"},
  ],

  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }} 
    * */
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    {"keyword": "encourage_oneself", contents: "你主要的问题在于读书太少而想得太多"},
    // 这样配置的话，就会每次随机选一句话发送
    {"keyword": "lover_prattle", contents: [
      "因为太喜欢你，所以看谁都像是情敌。",
      "申请成为你爱里的永久居民。",
      "你很傻，你很笨，可我还是很羡慕你，因为你有我",
      "遇见你，就好像捡到了100斤的运气",
    ]},
  ],

  /** 每日一言 */

  // 好文节选的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: ""


}
