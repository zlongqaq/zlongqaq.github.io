(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{525:function(t,s,a){"use strict";a.r(s);var e=a(6),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mysql隔离级别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql隔离级别"}},[t._v("#")]),t._v(" MySQL隔离级别")]),t._v(" "),a("p",[t._v("MySQL就包含4种隔离级别，隔离的当然是数据。要修改隔离级别的话，可以使用下面的SQL语句。")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("session")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("transaction")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("isolation")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("level")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("read")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uncommitted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 读未提交，最低级别，任何情况都无法保证。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("session")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("transaction")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("isolation")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("level")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("read")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("committed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 读已提交，可避免脏读的发生。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("session")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("transaction")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("isolation")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("level")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("repeatable")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("read")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可重复读，可避免脏读、不可重复读的发生。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("session")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("transaction")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("isolation")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("level")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("serializable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 串行化，可避免脏读、不可重复读、幻读的发生。")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("xjjdog_tx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COLLATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf8_general_ci'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("money"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BIGINT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USING")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BTREE")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COLLATE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf8_general_ci'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("InnoDB")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("xjjdog_tx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("money"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xjjdog1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("xjjdog_tx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("money"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xjjdog0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("下面将会以这张表为demo展示")]),t._v(" "),a("h2",{attrs:{id:"脏读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#脏读"}},[t._v("#")]),t._v(" 脏读")]),t._v(" "),a("p",[t._v("脏读，意思就是读出了脏数据。啥叫脏数据？就是另外一个事务还没有提交的数据。在"),a("code",[t._v("read uncommitted")]),t._v("隔离级别下，就会出现脏读。比如下面这个时序")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("事务 A：set session transaction isolation level read uncommitted;\n事务 B：set session transaction isolation level read uncommitted;\n事务 A：START TRANSACTION ;\n事务 B：START TRANSACTION ;\n事务 A：UPDATE xjjdog_tx SET money=money+100 WHERE NAME='xjjdog0';\n事务 B：UPDATE xjjdog_tx SET money=money+100 WHERE NAME='xjjdog0';\n事务 A：ROLLBACK ;\n事务 B：COMMIT ;\n事务 B：SELECT * FROM xjjdog_tx ;\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("在这个场景下，money的原始值为100，分别在两个session中进行了加100的操作，然后回滚了其中的一个session事务。结果，经过查询，发现money的值保持100不变。也就是其中一次加100的操作被覆盖掉了。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://6626long.oss-cn-shenzhen.aliyuncs.com/6626/image-20210603215441440.png",alt:"image-20210603215441440"}})]),t._v(" "),a("p",[t._v("所以脏读发生有几个条件。")]),t._v(" "),a("ol",[a("li",[t._v("高并发场景，在一个事务A开始之后还没结束之前，有另外一个事务参与了事务A所涉及的数据行读写")]),t._v(" "),a("li",[t._v("事务隔离级别处于最低的读未提交")]),t._v(" "),a("li",[t._v("在你使用到这些数据之后，事务A回滚，造成你之前拿到的数据已经不再存在")])]),t._v(" "),a("p",[t._v("解决方式，只需要设置成隔离级别比"),a("code",[t._v("read uncommitted")]),t._v("高即可。")]),t._v(" "),a("p",[t._v("总结：")]),t._v(" "),a("p",[t._v("脏读就是指当一个事务正在访问数据，并且对数据进行了修改，而这种修改还没有提交到数据库中，这时，另外一个事务也访问这个数据，然后使用了这个数据。因为这个数据是还没有提交的数据，那么另外一个事务读到的这个数据是脏数据(Dirty Data)，依据脏数据所做的操作可能是不正确的。")]),t._v(" "),a("h2",{attrs:{id:"不可重复读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不可重复读"}},[t._v("#")]),t._v(" 不可重复读")]),t._v(" "),a("p",[t._v("把隔离级别设置成"),a("code",[t._v("read committed")]),t._v("即可避免脏读，这其实非常好理解。脏读产生的根本原因就是在事务的执行期间有别的操作乱入，这个隔离级别要求事务A提交之后，修改后的值，才能被事务B读到，所以脏读是不可能会发生的，从根本上杜绝了。")]),t._v(" "),a("p",[t._v("但"),a("code",[t._v("read commited")]),t._v("会发生不可重复读的情况。")]),t._v(" "),a("p",[t._v("顾名思义，就是在一个事务周期内，对于一个值的读取，产生了两个结果。")]),t._v(" "),a("p",[t._v("在你的事务执行期间，会有无数的其他事务执行，如果你的事务持续时间超过了这些事务，那么你就可能读到两个或者更多的值。")]),t._v(" "),a("p",[t._v("MySQL有一个默认的事务隔离级别，叫做"),a("code",[t._v("repeatable read")]),t._v("，使用了MVCC的方式（innodb），要更轻量级一些。")]),t._v(" "),a("p",[t._v("总结：")]),t._v(" "),a("p",[t._v("在一个事务内，多次读同一数据。在这个事务还没有结束时，另外一个事务也访问该数据。那么，在第一个事务中的两次读数据之间，由于第二个事务的修改，那么第一个事务两次读到的数据可能是不一样的。这样就发生了在一个事务内两次读到的数据是不一样的，因此称为是不可重复读")]),t._v(" "),a("h2",{attrs:{id:"可重复读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可重复读"}},[t._v("#")]),t._v(" "),a("strong",[t._v("可重复读")])]),t._v(" "),a("p",[t._v("这就是MVCC（Multi-Version Concurrency Control）的功劳了，它有三个特点。")]),t._v(" "),a("ol",[a("li",[t._v("每行数据都存在一个版本，每次数据更新时都更新该版本")]),t._v(" "),a("li",[t._v("修改时，拷贝一份，当前版本随意修改，事务之间无干扰")]),t._v(" "),a("li",[t._v("保存时比较版本号，如果成功commit覆盖原记录，失败则rollback")])]),t._v(" "),a("p",[a("strong",[t._v("MVCC")]),t._v("在"),a("strong",[t._v("InnoDB")]),t._v("中的实现主要是为了提高数据库并发性能，用更好的方式去处理读-写冲突，做到即使有读写冲突时，也能做到不加锁，非阻塞并发读。它的实现关键也有三项技术：")]),t._v(" "),a("ol",[a("li",[t._v("3个隐式字段："),a("code",[t._v("DB_TRX_ID")]),t._v("，最近修改它的事务ID；"),a("code",[t._v("DB_ROLL_PTR")]),t._v("，回滚指针，指向上一个版本；"),a("code",[t._v("DB_ROW_ID")]),t._v("，隐藏主键")]),t._v(" "),a("li",[t._v("undo日志：的对同一记录的修改，会生成针对此记录的版本变更链表")]),t._v(" "),a("li",[t._v("read view：快照读操作的时候，产生的读视图。除了使用上面的额外信息，它也会维护一个活跃的事务ID集合")])]),t._v(" "),a("p",[t._v("一切的关键，就在于"),a("code",[t._v("快照")]),t._v("这两个字上面。")]),t._v(" "),a("p",[t._v("比如事务A对某个记录进行了"),a("code",[t._v("快照读")]),t._v("，那么在"),a("code",[t._v("快照读")]),t._v("的这一刻，就生成了一个"),a("code",[t._v("Read View")]),t._v("。在这一刻，事务B和C，还没有commit，事务D和E，在建立ReadView那一刻之前，commit完成，那么这个Read View，就不能够读到B和C的修改。")]),t._v(" "),a("p",[t._v("但可惜的是，可重复读，只能解决快照读的不可重复读，快照读的时机，也会影响读取的准确程度。请看下面两种情况。")]),t._v(" "),a("p",[t._v("下面这种情况读到的是500。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事务A")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("事务B")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("开启事务")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("开启事务")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("快照读(无影响)查询金额为500")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("快照读查询金额为500")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("更新金额为400")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("提交事务")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("select "),a("code",[t._v("快照读")]),t._v("金额为500")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("select lock in share mode"),a("code",[t._v("当前读")]),t._v("金额为400")])])])]),t._v(" "),a("p",[t._v("下面这种情况读到的是400。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事务A")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("事务B")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("开启事务")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("开启事务")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("快照读（无影响）查询金额为500")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("更新金额为400")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("提交事务")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("select "),a("code",[t._v("快照读")]),t._v("金额为400")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("select lock in share mode"),a("code",[t._v("当前读")]),t._v("金额为400")])])])]),t._v(" "),a("p",[t._v("（表格来自[SnailMann]的博客)。")]),t._v(" "),a("h2",{attrs:{id:"幻读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#幻读"}},[t._v("#")]),t._v(" 幻读")]),t._v(" "),a("h3",{attrs:{id:"demo1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demo1"}},[t._v("#")]),t._v(" demo1")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://6626long.oss-cn-shenzhen.aliyuncs.com/6626/image-20210603215510174.png",alt:"image-20210603215510174"}})]),t._v(" "),a("p",[t._v("很多人容易搞混不可重复读和幻读，确实这两者有些相似。但不可重复读重点在于update和delete，而幻读的重点在于insert。")]),t._v(" "),a("p",[t._v("避免不可重复读需要锁行就行")]),t._v(" "),a("p",[t._v("避免幻读则需要锁表")]),t._v(" "),a("p",[t._v("如果使用锁机制来实现这两种隔离级别，在可重复读中，该sql第一次读取到数据后，就将这些数据加锁，其它事务无法修改这些数据，就可以实现可重复 读了。但这种方法却无法锁住insert的数据，所以当事务A先前读取了数据，或者修改了全部数据，事务B还是可以insert数据提交，这时事务A就会 发现莫名其妙多了一条之前没有的数据，这就是幻读，不能通过行锁来避免。需要Serializable隔离级别 ，读用读锁，写用写锁，读锁和写锁互斥，这么做可以有效的避免幻读、不可重复读、脏读等问题，但会极大的降低数据库的并发能力。")]),t._v(" "),a("p",[t._v("所以说不可重复读和幻读最大的区别，就在于如何通过锁机制来解决他们产生的问题。")]),t._v(" "),a("h3",{attrs:{id:"demo2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demo2"}},[t._v("#")]),t._v(" demo2")]),t._v(" "),a("p",[t._v("拿一个最简单的例子来说。让你select一条记录是否存在然后打算进行后续插入时，如果这条记录不存在，然后你执行了插入操作，但在实际执行插入操作的时候，结果却报错了，这条记录已经存在了，这就是幻读。")]),t._v(" "),a("p",[t._v("首先，确认目前时可重复读级别。如果不是，则修改之。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("SELECT @@tx_isolation\n# set session transaction isolation level repeatable read\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("让我们来看一下这个灵异过程。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://6626long.oss-cn-shenzhen.aliyuncs.com/6626/image-20210603215528986.png",alt:"image-20210603215528986"}})]),t._v(" "),a("p",[t._v("有5个步骤，我都给你标好了。下面一一介绍。")]),t._v(" "),a("ol",[a("li",[t._v("事务A使用begin开启一个事务，然后查询id为3的记录，此时不存在。但由于快照读开启了一个针对于id为3的记录的read view，所以在这个事务自始至终都不能够读到为3的记录。很好，这就是我们不可重复读所需要的")]),t._v(" "),a("li",[t._v("接下来，事务B插入了一条id为3的记录，并提交成功")]),t._v(" "),a("li",[t._v("事务A此时也想插入这条记录，于是执行了相同的插入操作，结果数据库报错，显示这条记录已经存在")]),t._v(" "),a("li",[t._v("事务A此时一脸懵逼，想看一下这条记录到底是啥，但当它再次执行select语句的时候，却查不到这条记录")]),t._v(" "),a("li",[t._v("但在其他事务中，是可以看到这条记录的，因为它已经正确提交")])]),t._v(" "),a("p",[t._v("这就是幻读。")]),t._v(" "),a("h3",{attrs:{id:"如何解决幻读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何解决幻读"}},[t._v("#")]),t._v(" 如何解决幻读")]),t._v(" "),a("p",[t._v("幻读有错么？多数情况下没错，就是报错怪异了些。要防止幻读，需要开启"),a("code",[t._v("FOR UPDATE")]),t._v("这样高强度的锁定，实际情况是非常少用。")]),t._v(" "),a("p",[t._v("为什么上面的操作，insert能报错，但select却无法查到数据呢？这就不得不提一下数据库读的两种模式：")]),t._v(" "),a("ol",[a("li",[t._v("快照读：普通的select操作，是从read view中读取数据，读取的"),a("code",[t._v("可能")]),t._v("是历史数据")]),t._v(" "),a("li",[t._v("当前读：insert、update、delete、select..for update这种操作，读取的总是当前的最新数据")])]),t._v(" "),a("p",[t._v("对于当前读，你读取的行，以及行的间隙都会被加锁，直到事务提交时才会释放，其他的事务无法进行修改，所以也不会出现不可重复读、幻读的情形。所以insert能够发现冲突，而普通select却不可以。要想解决幻读，就需要加X锁。在上面这种情况，就可以在事务A中执行：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("SELECT * FROM xjjdog_tx WHERE id=3 FOR UPDATE\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("当这么做的时候，即使id为3的记录不存在，它也会创建锁（在背后可能根据记录的存在与否加行X锁或者next-key lock间隙x锁）。")]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("p",[t._v("主要参考：https://mp.weixin.qq.com/s/w7_ZYsw6iEclHoZwSrIJUg")]),t._v(" "),a("p",[t._v("其他参考：https://blog.csdn.net/qq_38545713/article/details/79779265")])])}),[],!1,null,null,null);s.default=n.exports}}]);