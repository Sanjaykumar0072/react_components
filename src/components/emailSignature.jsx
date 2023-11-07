import React from 'react';
import Menu from './componentMenu';

function EmailSignature() {
  return (
    <>
      <Menu />
      <div style={{ border: '1px solid #2980b9', display: 'inline-block', borderRadius: '3px' }}>
        <table style={{ fontFamily: 'arial', height: '90px', borderCollapse: 'collapse' }}>
          <tbody>
            <tr>
              <td style={{ padding: '7px' }}>
                <img
                  src="https://avatars.githubusercontent.com/u/97333756?v=4"
                  width="80"
                  height="80"
                  style={{
                    display: 'block',
                    borderRadius: '3px',
                    marginRight: '7px',
                    float: 'left',
                    clipPath: 'polygon(15% 0, 85% 0, 85% 100%, 15% 100%)',
                    WebkitClipPath: 'polygon(15% 0, 85% 0, 85% 100%, 15% 100%)'
                  }}
                />
                <div style={{ width: '5px', height: '80px', background: '#2980b9', float: 'right' }}></div>
              </td>
              <td style={{ verticalAlign: 'top', padding: '7px 14px 7px 3px' }}>
                <strong style={{ margin: '0', fontSize: '17px', color: '#2980b9', lineHeight: '25px', height: '24px', display: 'block' }}>
                  Sanjay Kumar B
                </strong>
                <p style={{ fontSize: '12px', margin: '0px 0 6px', height: '10px' }}>
                  <span style={{ margin: '0', color: '#666' }}>💻MERN Stack Developer</span>
                </p>
                <p style={{ fontSize: '12px', margin: '0px 0 6px', height: '10px' }}>
                  <a href="http://Sanjaykumar0072.netlify.app/" style={{ color: '#1c1c1c', marginTop: '5px', textDecoration: 'none' }}>
                    🌐 Portfolio
                  </a>
                </p>
                <p style={{ fontSize: '12px', margin: '0px 0 6px', height: '10px' }}>
                  <a href="tel:+573108098793" style={{ color: '#1c1c1c', marginTop: '5px', textDecoration: 'none' }}>
                    ☎️ +91 7092432468
                  </a>
                </p>
                <p style={{ fontSize: '12px', margin: '0px 0 6px', height: '10px' }}>
                  <a href="b.sanjaykumar2000@gmail.com" style={{ color: '#1c1c1c', marginTop: '5px', textDecoration: 'none' }}>
                    📧 b.sanjaykumar2000@gmail.com
                  </a>
                </p>
                <div id="sociales" style={{ marginTop: '10px' }}>
                  <a href="https://www.linkedin.com/in/sanjay-kumar-397539211/" style={{ display: 'inline-block', marginRight: '6px' }}>
                    <img src="https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_LinkedIn-64.png" width="20" style={{ display: 'block' }} />
                  </a>
                  <a href="https://github.com/Sanjaykumar0072" style={{ display: 'inline-block', marginRight: '6px' }}>
                    <img src="https://cdn1.iconfinder.com/data/icons/picons-social/57/github_rounded-256.png" width="20" style={{ display: 'block' }} />
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=573108098793" style={{ display: 'inline-block', marginRight: '6px' }}>
                    <img src="https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_Whatsapp-64.png" width="20" style={{ display: 'block' }} />
                  </a>
                  <a href="https://twitter.com/crianbluff" style={{ display: 'inline-block', marginRight: '6px' }}>
                    <img src="https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_Twitter-64.png" width="20" style={{ display: 'block' }} />
                  </a>
                  <a href="https://instagram.com/crianbluff" style={{ display: 'inline-block', marginRight: '6px' }}>
                    <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/173_Instagram_logo_logos-512.png" width="20" style={{ display: 'block' }} />
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
