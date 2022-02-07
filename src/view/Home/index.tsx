import { NavLink } from 'react-router-dom';
import { Layout, Button, Image } from 'antd';
import Logo from '@/components/Logo';
import {
  HomeOutlined,
  QuestionCircleOutlined,
  FolderOutlined,
  PullRequestOutlined,
} from '@ant-design/icons';
import Introduce from '@/components/Introduce';
const { Header, Content, Footer } = Layout;

export default function Home() {
  const headerLink = () => {
    return [
      {
        name: '首页',
        path: '/',
        icon: <HomeOutlined />,
      },
      {
        name: '文档',
        path: '/doc',
        icon: <QuestionCircleOutlined />,
      },
      {
        name: '项目空间',
        path: '/project-space',
        icon: <FolderOutlined />,
      },
      {
        name: '贡献',
        path: '/contribute',
        icon: <PullRequestOutlined />,
      },
    ];
  };

  const introduces = () => {
    return [
      {
        title: '极速的服务启动',
        desc: '使用原生 ESM 文件，无需打包!',
      },
      {
        title: '轻量快速的热重载',
        desc: '无论应用程序大小如何，都始终极快的模块热重载（HMR）',
      },
      {
        title: '丰富的功能',
        desc: '对 TypeScript、JSX、CSS 等支持开箱即用。',
      },
      {
        title: '优化的构建',
        desc: '可选 “多页应用” 或 “库” 模式的预配置 Rollup 构建',
      },
      {
        title: '通用的插件',
        desc: '在开发和构建之间共享 Rollup-superset 插件接口。',
      },
      {
        title: '完全类型化的API',
        desc: '灵活的 API 和完整 TypeScript 类型。',
      },
    ];
  };

  return (
    <div className="home">
      <Layout>
        <Header
          style={{ backgroundColor: '#fff' }}
          className="border-b-4 border-black"
        >
          <div className="flex justify-between mx-80 ">
            <div className="nav flex px-4 items-center">
              <div className="flex logo px-4">
                <Logo />
              </div>
              <div className="nav-link flex ">
                {headerLink().map((item, index) => (
                  <NavLink className="px-16" to={item.path}>
                    {
                      <div className="text-black text-base">
                        {item.icon}
                        <span
                          className="px-2"
                          style={{ verticalAlign: 'middle' }}
                        >
                          {item.name}
                        </span>
                      </div>
                    }
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="flex justify-between py-4">
              <Button className="mx-4" type="primary">
                登录
              </Button>
              <Button className="mx-4" type="ghost">
                注册
              </Button>
            </div>
          </div>
        </Header>
        <Content style={{ backgroundColor: '#fff' }}>
          <div className="flex justify-center my-16">
            <div className="flex-col container ">
              <div className="border-b-4 border-black py-4">
                <div className="flex justify-center">
                  <Image
                    height={200}
                    src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                    alt="logo"
                    preview={false}
                  />
                </div>

                <h1 className="text-2xl text-center">
                  Quick-Mock 快速Mock平台
                </h1>
                <div className="flex justify-center">
                  <Button shape="round" size="large" type="primary">
                    快速开始
                  </Button>
                </div>
              </div>
              <div className="flex mx-16 flex-wrap my-4">
                {introduces().map((item, index) => (
                  <Introduce title={item.title} desc={item.desc} />
                ))}
              </div>
            </div>
          </div>
        </Content>
        <Footer style={{ backgroundColor: 'black' }}>
          <div className="text-center footer text-white py-16">
            MIT Licensed | Copyright © 2019-present Evan You & Vite Contributors
          </div>
        </Footer>
      </Layout>
    </div>
  );
}
