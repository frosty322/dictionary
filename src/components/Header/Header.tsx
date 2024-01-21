import { RadarChartOutlined, ReadOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
import IIcon from '../../assets/i_icon.jpg'

export const Header: React.FC = () => {
  const location = useLocation();
  const selectedStyle = { color: 'white', background: '#556a72' };
  const notSelectedStyle = { background: 'white', color: '#556a72' };
  return (
    <div>
      <div style={{ height: 40, display: 'flex', justifyContent: "space-between" }}>
        <div>
          <Link to='glossary'>
            <Button
              style={location.pathname === '/glossary' ? selectedStyle : notSelectedStyle}
              type="primary"
              icon={<ReadOutlined />}
              size="large"
            >
              Глоссарий
            </Button>
          </Link>
          <Link to='semantic-graph'>
            <Button
              style={location.pathname === '/semantic-graph' ? { ...selectedStyle, marginLeft: 10 } : { ...notSelectedStyle, marginLeft: 10 }}
              type="primary"
              icon={<RadarChartOutlined />}
              size="large"
            >
              Семантический граф
            </Button>
          </Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', color: '#556a72', fontWeight: 'bold' }}>
          Владислав Гаспаров<Avatar src={IIcon} size="large" style={{ marginLeft: 10 }}>В</Avatar>
        </div>
      </div>
      <Outlet />
    </div >
  )
}