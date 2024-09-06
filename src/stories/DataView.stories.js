
import DataView from "../components/DataView";

export default {
  title: "Dataview",
  component: DataView,
}

const htmlData =  `
<table>
  <thead>
    <tr>
      <th>Index</th>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
      <th>Occupation</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>John Doe</td>
      <td>30</td>
      <td>New York</td>
      <td>Software Engineer</td>
      <td>john.doe@example.com</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Jane Smith</td>
      <td>28</td>
      <td>San Francisco</td>
      <td>Product Manager</td>
      <td>jane.smith@example.com</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Bob Johnson</td>
      <td>35</td>
      <td>Chicago</td>
      <td>Data Scientist</td>
      <td>bob.johnson@example.com</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Alice Williams</td>
      <td>42</td>
      <td>Los Angeles</td>
      <td>Marketing Specialist</td>
      <td>alice.williams@example.com</td>
    </tr>
    <tr>
      <th>5</th>
      <td>Charlie Brown</td>
      <td>25</td>
      <td>Boston</td>
      <td>Graphic Designer</td>
      <td>charlie.brown@example.com</td>
    </tr>
  </tbody>
</table> 
`;

export const Default = {
  args: {
    //👇 The args you need here will depend on your component
    data: htmlData,
  },
};