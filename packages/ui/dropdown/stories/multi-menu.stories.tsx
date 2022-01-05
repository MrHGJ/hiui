import React from 'react'
import Dropdown from '../src'

export const MultiMenu = () => {
  const [list] = React.useState([
    {
      id: '移动至',
      title: '移动至',
      children: [
        {
          id: '2019',
          title: '2019',
          children: [
            {
              id: 'Q1',
              title: 'Q1',
              children: [
                {
                  id: '01',
                  title: '01',
                },
                {
                  id: '02',
                  title: '02',
                },
                {
                  id: '03',
                  title: '03',
                },
              ],
            },
            {
              id: 'Q2',
              title: 'Q2',
              disabled: true,
            },
            {
              id: 'Q3',
              title: 'Q3',
            },
          ],
        },
        {
          id: '2020',
          title: '2020',
          children: [
            {
              id: 'Q1',
              title: 'Q1',
              children: [
                {
                  id: '01',
                  title: '01',
                },
                {
                  id: '02',
                  title: '02',
                },
                {
                  id: '03',
                  title: '03',
                },
              ],
            },
            {
              id: 'Q2',
              title: 'Q2',
              disabled: true,
            },
            {
              id: 'Q3',
              title: 'Q3',
            },
          ],
        },
      ],
    },
    {
      id: '复制至',
      title: '复制至',
      children: [
        {
          id: '2019',
          title: '2019',
          children: [
            {
              id: 'Q1',
              title: 'Q1',
              disabled: true,
              children: [
                {
                  id: '01',
                  title: '01',
                },
                {
                  id: '02',
                  title: '02',
                  children: [
                    {
                      id: '02-01',
                      title: '02-01',
                    },
                    {
                      id: '02-02',
                      title: '02-02',
                    },
                  ],
                },
                {
                  id: '03',
                  title: '03',
                  children: [
                    {
                      id: '03-01',
                      title: '03-01',
                    },
                    {
                      id: '03-02',
                      title: '03-02',
                    },
                  ],
                },
              ],
            },
            {
              id: 'Q2',
              title: 'Q2',
            },
            {
              id: 'Q3',
              title: 'Q3',
            },
          ],
        },
        {
          id: '2020',
          title: '2020',
          children: [
            {
              id: 'Q1',
              title: 'Q1',
              disabled: true,
              children: [
                {
                  id: '01',
                  title: '01',
                },
                {
                  id: '02',
                  title: '02',
                  children: [
                    {
                      id: '02-01',
                      title: '02-01',
                    },
                    {
                      id: '02-02',
                      title: '02-02',
                    },
                  ],
                },
                {
                  id: '03',
                  title: '03',
                  children: [
                    {
                      id: '03-01',
                      title: '03-01',
                    },
                    {
                      id: '03-02',
                      title: '03-02',
                    },
                  ],
                },
              ],
            },
            {
              id: 'Q2',
              title: 'Q2',
            },
            {
              id: 'Q3',
              title: 'Q3',
            },
          ],
        },
      ],
    },
    {
      id: '删除',
      title: '删除',
    },
  ])

  return (
    <>
      <h1>MultiMenu</h1>
      <div className="dropdown-multi-menu__wrap">
        <Dropdown data={list} title="操作" width={120} trigger="hover" />
      </div>
    </>
  )
}