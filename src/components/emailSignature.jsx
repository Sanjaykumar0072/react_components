import React from 'react';
import Menu from '../componentMenu';

function EmailSignature() {
  return (
    <>
      <Menu />
      <div className="emailsignature" style={{ border: '1px solid #2980b9', display: 'inline-block', borderRadius: '3px', borderImageSlice: '1', borderWidth: '2px',
    borderImageSource: 'linear-gradient(135deg, rgb(65, 88, 208) 30%, rgb(200, 80, 192) 45%, rgb(255, 204, 112) 100%)' }}>
        <table style={{ fontFamily: 'arial', height: '90px', borderCollapse: 'collapse', textAlign: 'left' }}>
          <tbody>
            <tr>
              <td className='left' style={{ padding: '7px' }}>
                <img
                  src="https://avatars.githubusercontent.com/u/97333756?v=4"
                  style={{
                    display: 'block',
                    borderRadius: '3px',
                    marginRight: '7px',
                    float: 'left',
                    clipPath: 'polygon(15% 0, 85% 0, 85% 100%, 15% 100%)',
                    width: "80px",
                    height: "80px",
                    WebkitClipPath: 'polygon(15% 0, 85% 0, 85% 100%, 15% 100%)'
                  }}
                />
                <div style={{ width: '5px', height: '80px', background: '#2980b9', float: 'right', backgroundColor: "linear-gradient(rgb(65, 88, 208) 43%, rgb(200, 80, 192) 70%, rgb(255, 204, 112) 100%)" }}></div>
              </td>
              <td className='right' style={{ verticalAlign: 'top', padding: '7px 14px 7px 3px' }}>
                <strong style={{ margin: '0', fontSize: '17px', color: '#2980b9', lineHeight: '25px', height: '24px', display: 'block', Color: "rgb(20 93 141)" }}>
                  Sanjay Kumar B
                </strong>
                <div style={{ fontSize: '12px', margin: '0px 0 6px', height: '10px' }}>
                  <span style={{ margin: '0', color: '#666' }}>💻MERN Stack Developer | Freelancer</span>
                </div>
                <div style={{ fontSize: '12px', margin: '0px 0 6px', height: '10px' }}>
                  <a href="http://Sanjaykumar0072.netlify.app/" style={{ color: '#1c1c1c', marginTop: '5px', textDecoration: 'none' }}>
                    🌐 Portfolio
                  </a>
                </div>
                <div style={{ fontSize: '12px', margin: '0px 0 6px', height: '10px' }}>
                  <a href="tel:+573108098793" style={{ color: '#1c1c1c', marginTop: '5px', textDecoration: 'none' }}>
                    ☎️ +91 7092432468
                  </a>
                </div>
                <div style={{ fontSize: '12px', margin: '0px 0 6px', height: '10px' }}>
                  <a href="b.sanjaykumar2000@gmail.com" style={{ color: '#1c1c1c', marginTop: '5px', textDecoration: 'none' }}>
                    📧 b.sanjaykumar2000@gmail.com
                  </a>
                </div>
                <div id="sociales" style={{ marginTop: '10px' }}>
                  <a target="_blank" href="https://www.linkedin.com/in/sanjaykumar0072/" style={{ display: 'inline-block', marginRight: '6px' }}>
                    <img src="https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_LinkedIn-64.png" width="20" style={{ display: 'block' }} />
                  </a>
                  <a target="_blank" href="https://github.com/Sanjaykumar0072" style={{ display: 'inline-block', marginRight: '6px' }}>
                    <img src="https://cdn1.iconfinder.com/data/icons/picons-social/57/github_rounded-256.png" width="20" style={{ display: 'block' }} />
                  </a>
                  <a target="_blank" href="https://api.whatsapp.com/send?phone=+917092432468" style={{ display: 'inline-block', marginRight: '6px' }}>
                    <img src="https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_Whatsapp-64.png" width="20" style={{ display: 'block' }} />
                  </a>
                  <a target="_blank" href="https://codepen.io/sanjaykumar0072" style={{ display: 'inline-block', marginRight: '6px' }}>
                    <img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Codepen-64.png" width="20" style={{ display: 'block' }} />
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default EmailSignature;
