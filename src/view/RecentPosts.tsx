import * as Radium from 'radium'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

type User = {
    id: number;
    username: string;
    avatar_template: string;
}

type Topic = {
    id: number;
    title: string;//标题
    fancy_title: string;//标题
    slug: string;
    posts_count: number;
    reply_count: number;
    highest_post_number: number;
    image_url: string;
    created_at: Date;
    last_posted_at: Date;
    bumped: boolean;
    bumped_at: Date;
    unseen: boolean;
    last_read_post_number: number;
    unread: number;
    new_posts: number;
    pinned: boolean;
    unpinned?: boolean;
    visible: boolean;
    closed: boolean;
    archived: boolean;
    notification_level: number;
    bookmarked?: boolean;
    liked?: boolean;
    views: number;//查看次数
    like_count: number;
    has_summary: boolean;
    archetype: string;
    last_poster_username: string;
    category_id: number;
    pinned_globally: boolean;
    has_accepted_answer: boolean;
    posters: [{
        extras: string;
        description: string;
        user_id: number;
    }]
}

@Radium
export class RecentPosts extends React.Component<any, any>{

    public styles = {
        base: {
            width: '100%',
            marginLeft: '30px'
        },

        item: {
            position: 'relative',
            width: '100%',
            paddingRight: '2px',
            paddingBottom: '17px',
            margin: '0 0 17px',
            borderBottom: '1px dashed #d9d9d9',
            boxSizing: 'border-box',
            wordWrap: 'break-word'
        },
        title: {
            textDecoration: 'none',
            color: '#222',
            fontSize: '18px',
            fontWeight: 'bold',
            lineHeight: 1.5
        },
        time: {

        },
        authorName: {
            color: '#4094c7',
            fontSize: '12px',
            textDecoration: 'none',
            fontFamily: ' "lucida grande", "lucida sans unicode", lucida, helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif',
        },
        listFooter: {
            fontFamily: ' "lucida grande", "lucida sans unicode", lucida, helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif',
            fontSize: '12px',
            fontWeight: 'normal',
            textDecoration: 'none',
            lineHeight: '20px'
        },
        clearDefautStyle: {
            textDecoration: 'none',
            color: '#222'
        }
    }

    public state: {
        topics: [Topic],
        users: [User]
    } = {
        topics: null,
        users: null
    }

    constructor() {
        super();
        $.get('/api/posts', (res) => {
            var topics = res.topic_list.topics;
            var users = res.users;
            this.state.topics = topics;
            this.state.users = users;
            this.forceUpdate();
        })
    }

    private getUserInfoById(userId) {
        for (var i in this.state.users) {
            var user = this.state.users[i];
            if (user.id == userId) {
                return user;
            }
        }
    }

    private getTopicPostUserName(topic: Topic) {
        var poster = topic.posters[0];
        console.log(poster)
        var userInfo = this.getUserInfoById(poster.user_id);
        if (userInfo) {
            return userInfo.username;
        } else {
            return '三巫社区'
        }
    }

    render() {

        var posts = [];
        if (this.state.topics) {
            this.state.topics.forEach((topic: Topic) => {
                posts.push(
                    <div key={Math.random() } style={[this.styles.item]}>
                        <div>
                            <p>
                                <a style={[this.styles.authorName]} target="_blank"
                                    href={`http://answer.sanwu.org/users/${this.getTopicPostUserName(topic)} `}>{this.getTopicPostUserName(topic) }</a>
                            </p>
                            <h4><a target="_blank" href={`http://answer.sanwu.org/t/topic/${topic.id}`} style={[this.styles.title]}>{topic.title}</a></h4>
                            <div style={[this.styles.listFooter]}>
                                <a target="_blank" href={`http://answer.sanwu.org/t/topic/${topic.id}`} style={[this.styles.clearDefautStyle]}>
                                    阅读 {topic.views}
                                </a>        <a target="_blank" href={`http://answer.sanwu.org/t/topic/${topic.id}`} style={[this.styles.clearDefautStyle]}>
                                    · 评论 {topic.reply_count}
                                </a>        <span> · 喜欢 {topic.like_count}</span>
                                <span> · 打赏 0</span>

                            </div>
                        </div>
                    </div>
                )
            })
        }

        return <div  style={[
            this.styles.base
        ]}>
            {posts}
        </div>
    }
}
